import { Controller, Post, Body, Get, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { AuthLoginInput } from '@leloi/validation';

@ApiTags('Authentication & RBAC')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Log in to LELOI METAL admin / internal CRM' })
  @ApiResponse({ status: 200, description: 'Login successful, returns JWT bearer token' })
  async login(@Body() body: AuthLoginInput) {
    return this.authService.login(body.email, body.password);
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get current authenticated user profile and roles' })
  getProfile(@Request() req: any) {
    return req.user;
  }
}
