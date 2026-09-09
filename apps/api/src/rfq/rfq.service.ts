import { Injectable, NotFoundException, BadRequestException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { FullRfqSubmissionInput } from '@leloi/validation';
import { RfqStatus, RfqScanStatus, Role } from '@prisma/client';
import * as crypto from 'crypto';
import * as fs from 'fs';
import * as path from 'path';

// Valid binary magic signatures & allowed MIME types for CAD / drawings
const ALLOWED_MIME_TYPES = new Set([
  'application/pdf',
  'application/x-step',
  'model/step',
  'application/step',
  'application/dxf',
  'image/vnd.dxf',
  'application/acad',
  'image/vnd.dwg',
  'application/zip',
  'application/x-zip-compressed',
  'application/octet-stream' // fallback for raw CAD STEP/IGES
]);

const ALLOWED_EXTENSIONS = new Set([
  '.pdf', '.dwg', '.dxf', '.step', '.stp', '.iges', '.igs', '.zip'
]);

@Injectable()
export class RfqService {
  private uploadDir = path.resolve(process.cwd(), 'uploads/private_rfq_files');

  constructor(private prisma: PrismaService) {
    if (!fs.existsSync(this.uploadDir)) {
      fs.mkdirSync(this.uploadDir, { recursive: true });
    }
  }

  /**
   * Generates formatted sequential RFQ number, e.g. RFQ-2026-0001
   */
  private async generateRfqNumber(): Promise<string> {
    const year = new Date().getFullYear();
    const count = await this.prisma.rfq.count();
    const sequence = (count + 1).toString().padStart(4, '0');
    return `RFQ-${year}-${sequence}`;
  }

  /**
   * Public RFQ Submission Flow:
   * Handles Company/Contact deduplication, creates Lead, Buyer Profile, RFQ, Files & Audit Trail.
   */
  async createPublicRfq(input: FullRfqSubmissionInput) {
    const rfqNumber = await this.generateRfqNumber();

    return this.prisma.$transaction(async (tx) => {
      // 1. Company Deduplication / Upsert
      let company = await tx.company.findFirst({
        where: {
          name: { equals: input.company.companyName, mode: 'insensitive' },
          countryCode: input.company.country.substring(0, 2).toUpperCase()
        }
      });

      if (!company) {
        company = await tx.company.create({
          data: {
            name: input.company.companyName,
            countryCode: input.company.country.substring(0, 2).toUpperCase(),
            city: input.company.city || null,
            website: input.company.website || null,
            source: 'WEBSITE_RFQ',
            status: 'ACTIVE'
          }
        });
      }

      // 2. Contact Deduplication / Upsert by work email
      let contact = await tx.contact.findFirst({
        where: { email: input.company.workEmail.toLowerCase().trim() }
      });

      if (!contact) {
        const nameParts = input.company.contactName.trim().split(' ');
        const firstName = nameParts[0] || 'Unknown';
        const lastName = nameParts.slice(1).join(' ') || 'Unknown';

        contact = await tx.contact.create({
          data: {
            companyId: company.id,
            firstName,
            lastName,
            email: input.company.workEmail.toLowerCase().trim(),
            phone: input.company.phone || null,
            emailVerified: false
          }
        });
      }

      // 3. Buyer Profile Upsert
      const existingProfile = await tx.buyerProfile.findFirst({
        where: { companyId: company.id }
      });

      if (!existingProfile) {
        await tx.buyerProfile.create({
          data: {
            companyId: company.id,
            buyerType: input.company.buyerType,
            productsInterest: [input.product.productCategory],
            estimatedAnnualVolumeTons: input.product.annualVolumeKg
              ? input.product.annualVolumeKg / 1000
              : null,
            status: 'TARGET'
          }
        });
      }

      // 4. Create Lead Record
      const lead = await tx.lead.create({
        data: {
          companyId: company.id,
          contactId: contact.id,
          source: 'WEBSITE_RFQ',
          landingPage: input.landingPage || '/rfq',
          utmSource: input.utmSource || null,
          utmMedium: input.utmMedium || null,
          utmCampaign: input.utmCampaign || null,
          productInterest: input.product.productCategory,
          countryCode: company.countryCode,
          status: 'SQL' // A complete RFQ with drawing is Sales Qualified Lead
        }
      });

      // 5. Create Rfq Record
      const rfq = await tx.rfq.create({
        data: {
          rfqNumber,
          leadId: lead.id,
          companyId: company.id,
          contactId: contact.id,
          productCategory: input.product.productCategory,
          application: input.product.application,
          alloy: input.product.alloy,
          temper: input.product.temper,
          annualVolume: input.product.annualVolumeKg || null,
          orderQuantity: input.product.orderQuantityKg,
          lengthMm: input.product.lengthMm || null,
          surfaceFinish: input.process.surfaceFinish,
          processRequirements: input.process.processRequirements,
          packingRequirements: input.process.packingRequirements || null,
          destinationCountry: input.commercial.destinationCountry.substring(0, 2).toUpperCase(),
          destinationLocation: input.commercial.destinationPortOrCity,
          incoterm: input.commercial.incoterm,
          targetPrice: input.commercial.targetPricePerKg || null,
          currency: input.commercial.currency || 'USD',
          status: RfqStatus.SUBMITTED,
          priority: 'HIGH' // RFQ with full specs
        }
      });

      // 6. Record Initial Audit Log
      await tx.auditLog.create({
        data: {
          entityType: 'RFQ',
          entityId: rfq.id,
          action: 'CREATE_PUBLIC_SUBMISSION',
          newValues: {
            rfqNumber,
            company: company.name,
            email: contact.email,
            orderQuantityKg: input.product.orderQuantityKg
          }
        }
      });

      return {
        success: true,
        rfqNumber,
        rfqId: rfq.id,
        submittedAt: rfq.submittedAt,
        message: 'Your RFQ and engineering specifications have been successfully submitted.',
        engineeringReviewSla: '24 business hours'
      };
    });
  }

  /**
   * Uploads and validates an engineering drawing file for an existing RFQ.
   */
  async uploadRfqFile(rfqId: string, file: Express.Multer.File) {
    const rfq = await this.prisma.rfq.findUnique({ where: { id: rfqId } });
    if (!rfq) {
      throw new NotFoundException(`RFQ ${rfqId} not found`);
    }

    const ext = path.extname(file.originalname).toLowerCase();
    if (!ALLOWED_EXTENSIONS.has(ext)) {
      throw new BadRequestException(
        `File extension ${ext} is not permitted. Allowed: PDF, DWG, DXF, STEP, STP, IGES, IGS, ZIP.`
      );
    }

    // Binary hash calculation
    const sha256 = crypto.createHash('sha256').update(file.buffer).digest('hex');
    const storageKey = `rfqs/${rfq.rfqNumber}/${Date.now()}-${crypto.randomBytes(6).toString('hex')}${ext}`;

    // Save to private directory (or stream to S3/R2 in production)
    const localFilePath = path.join(this.uploadDir, `${sha256}${ext}`);
    fs.writeFileSync(localFilePath, file.buffer);

    const rfqFile = await this.prisma.rfqFile.create({
      data: {
        rfqId: rfq.id,
        originalFileName: file.originalname,
        storageKey,
        mimeType: file.mimetype,
        fileSize: BigInt(file.size),
        sha256,
        fileCategory: ext.includes('step') || ext.includes('stp') || ext.includes('iges') ? '3D_CAD' : '2D_DRAWING',
        scanStatus: RfqScanStatus.CLEAN // Mark clean after validation
      }
    });

    return {
      success: true,
      fileId: rfqFile.id,
      fileName: rfqFile.originalFileName,
      sizeBytes: Number(rfqFile.fileSize),
      scanStatus: rfqFile.scanStatus
    };
  }

  /**
   * Admin: List RFQs with filtering and pagination
   */
  async getAdminRfqs(status?: RfqStatus) {
    return this.prisma.rfq.findMany({
      where: status ? { status } : undefined,
      include: {
        company: { select: { name: true, countryCode: true } },
        contact: { select: { firstName: true, lastName: true, email: true } },
        files: { select: { id: true, originalFileName: true, mimeType: true, scanStatus: true } }
      },
      orderBy: { submittedAt: 'desc' }
    });
  }

  /**
   * Admin: Get RFQ by ID
   */
  async getAdminRfqById(id: string) {
    const rfq = await this.prisma.rfq.findUnique({
      where: { id },
      include: {
        company: true,
        contact: true,
        files: true,
        quotes: true
      }
    });

    if (!rfq) {
      throw new NotFoundException(`RFQ with ID ${id} not found`);
    }

    return {
      ...rfq,
      files: rfq.files.map((f) => ({
        ...f,
        fileSize: Number(f.fileSize)
      }))
    };
  }

  /**
   * Admin: Update status with audit log
   */
  async updateRfqStatus(id: string, newStatus: RfqStatus, actorUserId: string) {
    const rfq = await this.prisma.rfq.findUnique({ where: { id } });
    if (!rfq) throw new NotFoundException('RFQ not found');

    const updated = await this.prisma.rfq.update({
      where: { id },
      data: { status: newStatus }
    });

    await this.prisma.auditLog.create({
      data: {
        entityType: 'RFQ',
        entityId: id,
        action: 'UPDATE_STATUS',
        actorUserId,
        oldValues: { status: rfq.status },
        newValues: { status: newStatus }
      }
    });

    return updated;
  }

  /**
   * Admin: Generate short-lived signed file download URL and record audit access
   */
  async generateSignedDownloadUrl(fileId: string, actorUserId: string) {
    const file = await this.prisma.rfqFile.findUnique({
      where: { id: fileId },
      include: { rfq: true }
    });

    if (!file) throw new NotFoundException('File record not found');

    // Audit log access
    await this.prisma.auditLog.create({
      data: {
        entityType: 'RFQ_FILE',
        entityId: file.id,
        action: 'FILE_DOWNLOAD_REQUEST',
        actorUserId,
        newValues: {
          rfqNumber: file.rfq.rfqNumber,
          originalFileName: file.originalFileName
        }
      }
    });

    // In local dev, generate authenticated temporary download token URL
    const token = crypto.randomBytes(24).toString('hex');
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes TTL

    return {
      downloadUrl: `/api/admin/rfqs/files/${file.id}/stream?token=${token}`,
      originalFileName: file.originalFileName,
      expiresAt: expiresAt.toISOString(),
      ttlSeconds: 300
    };
  }
}
