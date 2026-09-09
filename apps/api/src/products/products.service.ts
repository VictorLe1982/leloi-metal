import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PublicationStatus } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async getPublicCategories() {
    return this.prisma.productCategory.findMany({
      orderBy: { sortOrder: 'asc' },
      include: {
        _count: {
          select: { products: { where: { isPublished: true } } }
        }
      }
    });
  }

  async getPublicProducts(categorySlug?: string) {
    return this.prisma.product.findMany({
      where: {
        isPublished: true,
        publicationStatus: PublicationStatus.VERIFIED,
        category: categorySlug ? { slug: categorySlug } : undefined
      },
      include: {
        category: {
          select: { slug: true, name: true }
        }
      },
      orderBy: { name: 'asc' }
    });
  }

  async getPublicProductBySlug(slug: string) {
    const product = await this.prisma.product.findUnique({
      where: { slug },
      include: { category: true }
    });

    if (!product || !product.isPublished) {
      throw new NotFoundException(`Product ${slug} not found`);
    }

    return product;
  }

  async getAdminProducts() {
    return this.prisma.product.findMany({
      include: { category: true },
      orderBy: { updatedAt: 'desc' }
    });
  }
}
