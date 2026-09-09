import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ContactFormInput } from '@leloi/validation';
import { LeadStatus } from '@prisma/client';

@Injectable()
export class LeadsService {
  constructor(private prisma: PrismaService) {}

  async submitContactForm(input: ContactFormInput) {
    const countryCode = input.country.substring(0, 2).toUpperCase();

    return this.prisma.$transaction(async (tx) => {
      // 1. Company
      let company = await tx.company.findFirst({
        where: { name: { equals: input.companyName, mode: 'insensitive' } }
      });

      if (!company) {
        company = await tx.company.create({
          data: {
            name: input.companyName,
            countryCode,
            source: 'CONTACT_FORM'
          }
        });
      }

      // 2. Contact
      let contact = await tx.contact.findFirst({
        where: { email: input.email.toLowerCase().trim() }
      });

      if (!contact) {
        const parts = input.fullName.trim().split(' ');
        contact = await tx.contact.create({
          data: {
            companyId: company.id,
            firstName: parts[0] || 'Unknown',
            lastName: parts.slice(1).join(' ') || 'Unknown',
            email: input.email.toLowerCase().trim(),
            phone: input.phone || null
          }
        });
      }

      // 3. Lead
      const lead = await tx.lead.create({
        data: {
          companyId: company.id,
          contactId: contact.id,
          source: 'CONTACT_FORM',
          landingPage: input.landingPage || '/contact',
          utmSource: input.utmSource || null,
          utmMedium: input.utmMedium || null,
          utmCampaign: input.utmCampaign || null,
          productInterest: input.productInterest,
          countryCode,
          status: LeadStatus.NEW
        }
      });

      // 4. Activity
      await tx.activity.create({
        data: {
          entityType: 'LEAD',
          entityId: lead.id,
          activityType: 'CONTACT_SUBMISSION',
          metadata: { message: input.message, interest: input.productInterest }
        }
      });

      return {
        success: true,
        leadId: lead.id,
        message: 'Thank you for contacting LELOI METAL. Our sales engineering team will reach out promptly.'
      };
    });
  }

  async getAdminLeads(status?: LeadStatus) {
    return this.prisma.lead.findMany({
      where: status ? { status } : undefined,
      include: {
        company: true,
        contact: true,
        ownerUser: { select: { firstName: true, lastName: true, email: true } }
      },
      orderBy: { createdAt: 'desc' }
    });
  }

  async updateLeadStatus(id: string, status: LeadStatus) {
    return this.prisma.lead.update({
      where: { id },
      data: { status }
    });
  }
}
