import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { ProductsService } from './products.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Role } from '@prisma/client';

@ApiTags('Products & Categories')
@Controller()
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('public/categories')
  @ApiOperation({ summary: 'Get all product categories for public catalog' })
  async getCategories() {
    return this.productsService.getPublicCategories();
  }

  @Get('public/products')
  @ApiOperation({ summary: 'Get published and verified products' })
  async getProducts(@Query('category') category?: string) {
    return this.productsService.getPublicProducts(category);
  }

  @Get('public/products/:slug')
  @ApiOperation({ summary: 'Get product detail by URL slug' })
  async getProductBySlug(@Param('slug') slug: string) {
    return this.productsService.getPublicProductBySlug(slug);
  }

  @Get('admin/products')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.SUPER_ADMIN, Role.ADMIN, Role.CONTENT_EDITOR, Role.TECHNICAL_ENGINEER)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Admin get all products (including unverified/drafts)' })
  async getAdminProducts() {
    return this.productsService.getAdminProducts();
  }
}
