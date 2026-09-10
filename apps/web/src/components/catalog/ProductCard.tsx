'use client';

import React from 'react';
import Link from 'next/link';
import { ProductCatalogItem } from '@leloi/types';
import { ResponsiveProductImage } from './ResponsiveProductImage';
import { TechnicalProfilePlaceholder } from './TechnicalProfilePlaceholder';
import { Button } from '@leloi/ui';
import { ArrowRight, Scale, Check } from 'lucide-react';

interface ProductCardProps {
  product: any;
  targetUrl?: string;
  isCompared?: boolean;
  onToggleCompare?: (slug: string) => void;
  priority?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  targetUrl,
  isCompared = false,
  onToggleCompare,
  priority = false
}) => {
  const categoryName = product.categoryName || product.divisionName || 'Aluminium Solutions';
  const profileGeometry = product.profileGeometry || 'Extruded Solution';
  const detailUrl = targetUrl || product.canonicalUrl || (product.divisionSlug ? `/products/${product.divisionSlug}/${product.slug}` : `/products/${product.category || 'custom-extrusions'}/${product.slug}`);
  const rfqUrl = `/rfq?division=${product.divisionSlug || product.category || 'custom-extrusions'}&family=${product.slug}&source=catalog`;
  const imageSrc = product.primaryImage || product.coverImage;
  const verifiedChips: string[] = product.verifiedChips || product.alloys || ['6063-T6', 'ISO 9001'];
  return (
    <div className="group flex flex-col justify-between h-full bg-white rounded-2xl border border-[#E2E8F0] hover:border-[#2F7BFF]/40 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 overflow-hidden">
      {/* Upper section: Image & Badges */}
      <div>
        <div className="relative aspect-[4/3] bg-[#F8FAFC] overflow-hidden">
          {imageSrc ? (
            <ResponsiveProductImage
              src={imageSrc}
              alt={`${product.name} 4:3 technical aluminium extrusion render`}
              priority={priority}
            />
          ) : (
            <TechnicalProfilePlaceholder
              title={product.name}
              category={categoryName}
            />
          )}
          {/* Top badges */}
          <div className="absolute top-3 left-3">
            <span className="text-[10px] font-bold bg-[#0A2D5B]/90 text-white px-2.5 py-1 rounded-md shadow-xs backdrop-blur-xs font-heading uppercase tracking-wider">
              {categoryName}
            </span>
          </div>
          <div className="absolute top-3 right-3">
            <span className="text-[10px] font-mono font-bold bg-white/95 text-slate-800 px-2 py-0.5 rounded-md shadow-xs border border-slate-200">
              {profileGeometry}
            </span>
          </div>
        </div>

        {/* Content Details */}
        <div className="p-5 space-y-3">
          {/* Category eyebrow */}
          <div className="text-[11px] font-mono font-bold text-[#2F7BFF] uppercase tracking-wider">
            {categoryName} • {profileGeometry}
          </div>

          {/* Product Name (max 2 lines, fixed height for row alignment) */}
          <div className="h-12 flex items-start">
            <Link href={detailUrl} className="block">
              <h3 className="font-heading font-bold text-base text-[#0A2D5B] group-hover:text-[#2F7BFF] transition-colors line-clamp-2 leading-snug">
                {product.name}
              </h3>
            </Link>
          </div>

          {/* Use-case description (2 lines) */}
          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed min-h-[36px]">
            {product.shortDescription || product.summary}
          </p>

          {/* Attribute chips (max 3 chips) */}
          <div className="flex flex-wrap gap-1.5 pt-1 min-h-[26px]">
            {verifiedChips.slice(0, 3).map((chip, idx) => (
              <span
                key={idx}
                className="text-[10px] bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded-md border border-slate-200/70"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="p-5 pt-0">
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
          <Link href={detailUrl} className="flex-1">
            <Button variant="outline" size="sm" className="w-full text-xs justify-center hover:bg-slate-50 font-medium">
              View Details
            </Button>
          </Link>
          <Link
            href={rfqUrl}
            className="flex-1"
          >
            <Button variant="cta" size="sm" className="w-full text-xs justify-center font-medium" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
              Request Quote
            </Button>
          </Link>
          {onToggleCompare && (
            <button
              type="button"
              onClick={() => onToggleCompare(product.slug)}
              title={isCompared ? 'Remove from compare' : 'Compare product'}
              className={`p-2 rounded-lg border text-xs transition-colors cursor-pointer ${
                isCompared
                  ? 'bg-blue-50 border-[#2F7BFF] text-[#2F7BFF]'
                  : 'bg-white border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-50'
              }`}
            >
              {isCompared ? <Check className="w-4 h-4" /> : <Scale className="w-4 h-4" />}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
