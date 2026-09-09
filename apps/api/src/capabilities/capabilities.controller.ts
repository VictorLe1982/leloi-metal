import { Controller, Get, Param, Patch, Body, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { CapabilitiesService } from './capabilities.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Role } from '@prisma/client';

@ApiTags('Factory Capabilities')
@Controller()
export class CapabilitiesController {
  constructor(private capabilitiesService: CapabilitiesService) {}

  @Get('public/capabilities')
  @ApiOperation({ summary: 'Get all factory capabilities (with unverified data stripped)' })
  async getPublicCapabilities() {
    return this.capabilitiesService.getPublicCapabilities();
  }

  @Get('public/capabilities/:slug')
  @ApiOperation({ summary: 'Get capability detail by slug' })
  async getPublicCapabilityBySlug(@Param('slug') slug: string) {
    return this.capabilitiesService.getPublicCapabilityBySlug(slug);
  }

  @Get('admin/capabilities')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.SUPER_ADMIN, Role.ADMIN, Role.TECHNICAL_ENGINEER)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Admin get all capabilities with full audit status' })
  async getAdminCapabilities() {
    return this.capabilitiesService.getAdminCapabilities();
  }

  @Patch('admin/capabilities/:id/verify')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.SUPER_ADMIN, Role.ADMIN, Role.COMPLIANCE_REVIEWER)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Verify and certify factory capability with audit record' })
  async verifyCapability(
    @Param('id') id: string,
    @Body('notes') notes: string,
    @Request() req: any
  ) {
    return this.capabilitiesService.verifyCapability(id, req.user.id, notes);
  }
}
