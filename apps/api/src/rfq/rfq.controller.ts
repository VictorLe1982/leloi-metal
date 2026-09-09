import {
  Controller,
  Post,
  Get,
  Patch,
  Body,
  Param,
  Query,
  UseGuards,
  Request,
  UseInterceptors,
  UploadedFile,
  BadRequestException
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiConsumes } from '@nestjs/swagger';
import { RfqService } from './rfq.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Role, RfqStatus } from '@prisma/client';
import { fullRfqSubmissionSchema, FullRfqSubmissionInput } from '@leloi/validation';

@ApiTags('RFQ & Drawing Management')
@Controller()
export class RfqController {
  constructor(private rfqService: RfqService) {}

  // --------------------------------------------------------------------------
  // PUBLIC ENDPOINTS
  // --------------------------------------------------------------------------

  @Post('public/rfqs')
  @ApiOperation({ summary: 'Submit a qualified RFQ with technical specifications' })
  async submitPublicRfq(@Body() body: any) {
    const parseResult = fullRfqSubmissionSchema.safeParse(body);
    if (!parseResult.success) {
      throw new BadRequestException({
        message: 'Invalid RFQ submission data',
        errors: parseResult.error.errors
      });
    }
    return this.rfqService.createPublicRfq(parseResult.data);
  }

  @Post('public/rfqs/:id/files')
  @UseInterceptors(FileInterceptor('file', { limits: { fileSize: 52428800 } }))
  @ApiConsumes('multipart/form-data')
  @ApiOperation({ summary: 'Securely upload an engineering drawing (PDF, STEP, DWG, DXF, ZIP)' })
  async uploadDrawing(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File
  ) {
    if (!file) {
      throw new BadRequestException('No drawing file uploaded');
    }
    return this.rfqService.uploadRfqFile(id, file);
  }

  // --------------------------------------------------------------------------
  // ADMIN PROTECTED ENDPOINTS (RBAC ENFORCED)
  // --------------------------------------------------------------------------

  @Get('admin/rfqs')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.SUPER_ADMIN, Role.ADMIN, Role.EXPORT_DIRECTOR, Role.SALES, Role.TECHNICAL_ENGINEER)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Admin list all RFQs with status filtering' })
  async getAdminRfqs(@Query('status') status?: RfqStatus) {
    return this.rfqService.getAdminRfqs(status);
  }

  @Get('admin/rfqs/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.SUPER_ADMIN, Role.ADMIN, Role.EXPORT_DIRECTOR, Role.SALES, Role.TECHNICAL_ENGINEER)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Admin get full RFQ details and file attachments' })
  async getAdminRfqById(@Param('id') id: string) {
    return this.rfqService.getAdminRfqById(id);
  }

  @Patch('admin/rfqs/:id/status')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.SUPER_ADMIN, Role.ADMIN, Role.EXPORT_DIRECTOR, Role.SALES, Role.TECHNICAL_ENGINEER)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update RFQ status in CRM pipeline' })
  async updateStatus(
    @Param('id') id: string,
    @Body('status') status: RfqStatus,
    @Request() req: any
  ) {
    if (!status) {
      throw new BadRequestException('Status is required');
    }
    return this.rfqService.updateRfqStatus(id, status, req.user.id);
  }

  @Get('admin/rfqs/files/:fileId/download-url')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.SUPER_ADMIN, Role.ADMIN, Role.EXPORT_DIRECTOR, Role.SALES, Role.TECHNICAL_ENGINEER)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Generate time-limited signed URL for confidential drawing download' })
  async getSignedDownloadUrl(
    @Param('fileId') fileId: string,
    @Request() req: any
  ) {
    return this.rfqService.generateSignedDownloadUrl(fileId, req.user.id);
  }
}
