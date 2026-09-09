import { Controller, Post, Get, Patch, Body, Param, Query, UseGuards, BadRequestException } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { LeadsService } from './leads.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Role, LeadStatus } from '@prisma/client';
import { contactFormSchema, ContactFormInput } from '@leloi/validation';

@ApiTags('Leads & Inquiries')
@Controller()
export class LeadsController {
  constructor(private leadsService: LeadsService) {}

  @Post('public/contact')
  @ApiOperation({ summary: 'Submit a general export inquiry / contact form' })
  async submitContact(@Body() body: any) {
    const parsed = contactFormSchema.safeParse(body);
    if (!parsed.success) {
      throw new BadRequestException({
        message: 'Invalid contact form data',
        errors: parsed.error.errors
      });
    }
    return this.leadsService.submitContactForm(parsed.data);
  }

  @Get('admin/leads')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.SUPER_ADMIN, Role.ADMIN, Role.SALES, Role.EXPORT_DIRECTOR)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Admin list all sales leads' })
  async getAdminLeads(@Query('status') status?: LeadStatus) {
    return this.leadsService.getAdminLeads(status);
  }

  @Patch('admin/leads/:id/status')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.SUPER_ADMIN, Role.ADMIN, Role.SALES, Role.EXPORT_DIRECTOR)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update lead qualification status' })
  async updateLeadStatus(
    @Param('id') id: string,
    @Body('status') status: LeadStatus
  ) {
    return this.leadsService.updateLeadStatus(id, status);
  }
}
