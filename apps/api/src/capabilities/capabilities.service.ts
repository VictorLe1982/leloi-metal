import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PublicationStatus } from '@prisma/client';

@Injectable()
export class CapabilitiesService {
  constructor(private prisma: PrismaService) {}

  /**
   * Public capabilities query:
   * Returns capabilities while suppressing any unverified numeric fields.
   */
  async getPublicCapabilities() {
    const caps = await this.prisma.factoryCapability.findMany({
      orderBy: { process: 'asc' }
    });

    // Strip unverified machine counts or claims
    return caps.map((c) => ({
      id: c.id,
      slug: c.slug,
      process: c.process,
      machineName: c.machineName,
      machineModel: c.verificationStatus === PublicationStatus.VERIFIED ? c.machineModel : null,
      machineCapacity: c.machineCapacity,
      maxDimension: c.maxDimension,
      tolerance: c.tolerance,
      certifications: c.verificationStatus === PublicationStatus.VERIFIED ? c.certifications : [],
      verificationStatus: c.verificationStatus,
      verifiedAt: c.verifiedAt
    }));
  }

  async getPublicCapabilityBySlug(slug: string) {
    const cap = await this.prisma.factoryCapability.findUnique({
      where: { slug }
    });

    if (!cap) {
      throw new NotFoundException(`Capability ${slug} not found`);
    }

    return {
      ...cap,
      machineModel: cap.verificationStatus === PublicationStatus.VERIFIED ? cap.machineModel : null,
      annualCapacityTons: cap.verificationStatus === PublicationStatus.VERIFIED ? cap.annualCapacityTons : null,
      availableCapacityTons: cap.verificationStatus === PublicationStatus.VERIFIED ? cap.availableCapacityTons : null
    };
  }

  async getAdminCapabilities() {
    return this.prisma.factoryCapability.findMany({
      orderBy: { updatedAt: 'desc' }
    });
  }

  async verifyCapability(id: string, actorUserId: string, notes?: string) {
    const cap = await this.prisma.factoryCapability.findUnique({ where: { id } });
    if (!cap) throw new NotFoundException('Capability not found');

    const updated = await this.prisma.factoryCapability.update({
      where: { id },
      data: {
        verified: true,
        verificationStatus: PublicationStatus.VERIFIED,
        verifiedAt: new Date(),
        verifiedBy: actorUserId,
        notes: notes || cap.notes
      }
    });

    await this.prisma.auditLog.create({
      data: {
        entityType: 'FACTORY_CAPABILITY',
        entityId: id,
        action: 'VERIFY_CAPABILITY',
        actorUserId,
        newValues: {
          slug: cap.slug,
          process: cap.process,
          verificationStatus: PublicationStatus.VERIFIED
        }
      }
    });

    return updated;
  }
}
