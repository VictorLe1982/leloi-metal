import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@leloi/ui';
import { ArrowRight, Compass, FileUp, Search } from 'lucide-react';
import { getProductDivisions } from '@leloi/types';

export const metadata: Metadata = {
  title: 'Page Not Found | LELOI METAL',
  robots: { index: false, follow: true }
};

export default function NotFound() {
  const divisions = getProductDivisions();

  return (
    <div className="min-h-[70vh] bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-heading font-semibold text-blue uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            Error 404
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-navy tracking-tight">
            This Page Could Not Be Found
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            The page you requested may have been moved during our catalogue restructure. Use the
            links below to reach the right aluminium solution, or send us your drawing directly.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/products">
            <Button variant="cta" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Browse Product Catalogue
            </Button>
          </Link>
          <Link href="/rfq?mode=upload">
            <Button variant="outline" size="lg" leftIcon={<FileUp className="w-4 h-4" />}>
              Upload Your Drawing
            </Button>
          </Link>
        </div>

        <div className="pt-6 border-t border-slate-200">
          <div className="text-xs uppercase font-heading font-semibold text-slate-500 tracking-widest mb-4 flex items-center justify-center gap-2">
            <Search className="w-3.5 h-3.5" />
            Primary Business Lines
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-left">
            {divisions.map((division) => (
              <Link
                key={division.slug}
                href={`/products/${division.slug}`}
                className="group p-4 rounded-xl bg-white border border-slate-200 hover:border-blue transition-colors"
              >
                <div className="font-bold text-sm font-heading text-navy group-hover:text-blue transition-colors">
                  {division.name}
                </div>
                <div className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-snug">
                  {division.summary}
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="text-xs text-slate-500">
          Still cannot find what you need?{' '}
          <Link href="/contact" className="text-blue font-semibold hover:underline">
            Talk to our export team
          </Link>
          .
        </div>
      </div>
    </div>
  );
}
