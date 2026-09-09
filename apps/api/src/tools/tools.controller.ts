import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ToolsService } from './tools.service';
import { weightCalculatorSchema } from '@leloi/validation';

@ApiTags('Engineering Tools & Calculators')
@Controller('public/tools')
export class ToolsController {
  constructor(private toolsService: ToolsService) {}

  @Post('weight-calculator')
  @ApiOperation({ summary: 'Calculate precision aluminium profile extrusion weight' })
  async calculateWeight(@Body() body: any) {
    const parsed = weightCalculatorSchema.safeParse(body);
    if (!parsed.success) {
      throw new BadRequestException({
        message: 'Invalid weight calculation input',
        errors: parsed.error.errors
      });
    }
    return this.toolsService.calculateWeight(parsed.data);
  }
}
