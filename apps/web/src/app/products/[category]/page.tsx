import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button, Card, Badge } from '@leloi/ui';
import { CATEGORIES_V2, PRODUCTS_V2, CategoryCatalogItem } from '@leloi/types';
import {
  ArrowRight,
  FileUp,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Layers,
  HelpCircle,
  Scale
} from 'lucide-react';

const CATEGORY_MAP: Record<string, string> = {
  'custom-extrusions': 'custom-extrusions',
  'custom-aluminium-extrusions': 'custom-extrusions',
  'industrial-profiles': 'industrial-profiles',
  'industrial-aluminium-profiles': 'industrial-profiles',
  'solar': 'solar-profiles',
  'solar-profiles': 'solar-profiles',
  'solar-aluminium-profiles': 'solar-profiles',
  'architectural': 'architectural-systems',
  'architectural-systems': 'architectural-systems',
  'architectural-aluminium': 'architectural-systems',
  'thermal-management': 'heat-sink-thermal',
  'heat-sink-thermal': 'heat-sink-thermal',
  'heat-sink-profiles': 'heat-sink-thermal',
  'oem-components': 'oem-components',
  'oem-aluminium-components': 'oem-components'
};

export function generateStaticParams() {
  return Object.keys(CATEGORY_MAP).map((category) => ({ category }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: rawCategory } = await params;
  const catSlug = CATEGORY_MAP[rawCategory] || rawCategory;
  const cat = CATEGORIES_V2.find((c) => c.slug === catSlug);

  if (!cat) {
    return {
      title: 'Category Not Found | LELOI METAL',
      description: 'The requested aluminium product category could not be located.'
    };
  }

  return {
    title: `${cat.name} | Aluminium Extrusion Vietnam | LELOI METAL`,
    description: cat.shortDescription
  };
}

export default async function CategoryLandingPage({
  params
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: rawCategory } = await params;
  const catSlug = CATEGORY_MAP[rawCategory] || rawCategory;
  const category = CATEGORIES_V2.find((c) => c.slug === catSlug);

  if (!category) {
    notFound();
  }

  const categoryProducts = PRODUCTS_V2.filter((p) => p.category === category.slug);

  return (
    <div className="min-h-screen bg-[#F1F4F8]/60 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-[#2F7BFF]">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/products" className="hover:text-[#2F7BFF]">
            Products
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-800 font-semibold">{category.name}</span>
        </nav>

        {/* Category Hero */}
        <div className="bg-gradient-to-br from-[#061D3B] to-[#0A2D5B] text-white rounded-2xl p-8 sm:p-12 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs uppercase font-heading font-semibold tracking-widest text-[#2F7BFF] flex items-center gap-2">
              <span>LELOI METAL PRODUCT DIVISION</span>
              <span>•</span>
              <span>MADE-TO-DRAWING</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
              {category.name}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              {category.overview}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link href={`/rfq?category=${category.slug}&mode=upload`}>
                <Button variant="cta" size="md" leftIcon={<FileUp className="w-4 h-4" />}>
                  Upload {category.name} Drawing
                </Button>
              </Link>
              <Link href={`/rfq?category=${category.slug}`}>
                <Button variant="outline" size="md" className="border-white/30 text-white hover:bg-white/10">
                  Request RFQ Quotation
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border border-white/20 bg-slate-900">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={category.heroImage}
              alt={`${category.name} master studio render`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Products in this Category */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
            <div>
              <h2 className="text-2xl font-bold font-heading text-[#0A2D5B]">
                {category.name} Profiles ({categoryProducts.length})
              </h2>
              <p className="text-xs text-slate-500">
                Engineered in Vietnam for global B2B supply chains according to customer specifications.
              </p>
            </div>
            <Link
              href="/products"
              className="text-xs font-semibold text-[#2F7BFF] hover:underline flex items-center gap-1"
            >
              Browse All 24 Products <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryProducts.map((prod) => (
              <Card
                key={prod.slug}
                variant="default"
                className="p-0 overflow-hidden flex flex-col justify-between border border-[#E2E8F0] hover:border-[#2F7BFF] transition-all group bg-white shadow-xs"
              >
                <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={prod.primaryImage}
                    alt={`${prod.name} render`}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2">
                    <span className="text-[9px] font-mono font-bold bg-white/95 text-slate-700 px-1.5 py-0.5 rounded border border-slate-200">
                      {prod.profileGeometry}
                    </span>
                  </div>
                </div>

                <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <Link href={`/product/${prod.slug}`}>
                      <h3 className="font-heading font-bold text-sm text-[#0A2D5B] group-hover:text-[#2F7BFF] transition-colors line-clamp-1">
                        {prod.name}
                      </h3>
                    </Link>
                    <p className="text-xs text-slate-500 line-clamp-2">
                      {prod.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-1 pt-1">
                      {prod.verifiedChips.slice(0, 2).map((chip, idx) => (
                        <span
                          key={idx}
                          className="text-[9px] bg-slate-100 text-slate-700 font-semibold px-1.5 py-0.5 rounded"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                    <Link href={`/product/${prod.slug}`} className="flex-1">
                      <Button variant="primary" size="sm" className="w-full text-xs">
                        Details
                      </Button>
                    </Link>
                    <Link
                      href={`/rfq?product=${prod.slug}&category=${prod.category}&source=category_landing`}
                      className="shrink-0"
                    >
                      <Button variant="outline" size="sm" className="text-xs px-2.5">
                        Quote
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* 300-700 Words Engineering & Technical Context Box */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-10 shadow-xs space-y-8">
          <div className="space-y-2 border-b border-slate-100 pb-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#2F7BFF]">
              ENGINEERING SPECIFICATION & METALLURGY
            </div>
            <h2 className="text-2xl font-bold font-heading text-[#0A2D5B]">
              Manufacturing {category.name} in Vietnam: Engineering Guidelines
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <div className="space-y-4">
              <h3 className="font-bold text-base text-[#0A2D5B] font-heading">
                Die Tooling, Extrusion Ratio & Tolerances
              </h3>
              <p>
                Every {category.name.toLowerCase()} profile manufactured by LELOI METAL begins with proprietary tooling design. Our tooling engineers utilize flow simulation software to calculate metal velocity in the die bearings, preventing surface shearing and dimensional drift across multi-cavity runs.
              </p>
              <p>
                Wall thickness transitions are engineered with gradual taper radiuses (minimum 0.5mm R) to eliminate hot tearing at sharp internal corners. Our die shop utilizes high-precision wire EDM (Electrical Discharge Machining) ensuring exact adherence to your CAD nominals.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-base text-[#0A2D5B] font-heading">
                Alloy Metallurgy & Thermal Treatment
              </h3>
              <p>
                Chemical composition is validated per billet cast heat. For structural and load-bearing profiles, high-strength alloys such as 6061-T6 and 6005A-T6 provide yield strengths exceeding 225–240 MPa. For architectural and cosmetically critical applications, 6063-T5 offers superior flow for intricate thin-wall sections and a uniform anodizing finish.
              </p>
              <p>
                Artificial aging furnaces are calibrated under strict pyrometry standards to guarantee uniform temper transformation throughout the length of 12-meter extrusion runs.
              </p>
            </div>
          </div>

          {/* Key Advantages Grid */}
          <div className="p-6 bg-slate-50 rounded-xl space-y-3 border border-slate-100">
            <div className="font-bold text-sm text-[#0A2D5B] font-heading">
              Key Manufacturing Advantages:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
              {category.keyAdvantages.map((adv, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{adv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Category FAQs */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-10 shadow-xs space-y-6">
          <div className="space-y-1">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#2F7BFF]">
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#0A2D5B]">
              Technical Inquiries for {category.name}
            </h2>
          </div>

          <div className="space-y-4 divide-y divide-slate-100">
            {category.faqs.map((faq, idx) => (
              <div key={idx} className="pt-4 first:pt-0 space-y-1.5">
                <div className="text-sm font-bold text-[#0A2D5B] flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#2F7BFF] shrink-0" />
                  <span>{faq.q}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 pl-6 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom RFQ CTA Banner */}
        <div className="bg-[#0A2D5B] text-white rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold font-heading">
              Ready to Quote Your Custom {category.name}?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Submit your CAD or 2D drawings for complete Design for Manufacturing (DFM) analysis, die quotation, and landed container shipping estimates from Vietnam.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link href={`/rfq?category=${category.slug}`}>
              <Button variant="cta" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
