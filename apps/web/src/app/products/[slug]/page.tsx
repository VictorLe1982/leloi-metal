import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button, Card, Badge, VerificationStatusBadge } from '@leloi/ui';
import { PublicationStatus } from '@leloi/types';
import {
  ArrowRight,
  FileUp,
  CheckCircle2,
  ShieldCheck,
  Package,
  Layers,
  FileCheck,
  Scale,
  Settings2
} from 'lucide-react';

const PRODUCTS_DATA: Record<string, any> = {
  'custom-aluminium-extrusions': {
    name: 'Custom Aluminium Extrusions',
    h1: 'Custom Aluminium Extrusion Profiles & OEM Manufacturing',
    summary:
      'Engineered solid and hollow aluminium extrusions produced to customer proprietary drawings in Vietnam. Full support from DFM die engineering through CNC machining, anodizing and international sea freight.',
    alloys: ['6063', '6061', '6005A', '6082'],
    tempers: ['T4', 'T5', 'T6', 'T66'],
    minWallMm: '0.8 mm (subject to profile CCD geometry)',
    maxLengthMm: '12,000 mm (12 meters standard)',
    moqKg: '500 – 1,000 kg per batch (flexible trial programs)',
    surfaceFinishes: [
      'Mill Finish (as extruded)',
      'Anodized Clear (10–25 µm, Class I & II)',
      'Anodized Satin Black & Bronze',
      'Electrostatic Powder Coating (AAMA 2604/2605 compliant)',
      'Sandblasting & Chemical Brightening'
    ],
    fabrications: [
      'Precision CNC cut-to-length (±0.2 mm)',
      '3-axis and 4-axis long-bed CNC milling',
      'Hydraulic punch pressing & hole slots',
      'Precision tapping, reaming and countersinking',
      'De-burring and custom hardware kitting'
    ],
    applications: [
      'Automotive structural frames and battery enclosures',
      'Industrial automation framing, conveyors and linear rails',
      'Renewable energy solar mounting racks and carports',
      'Architectural curtain walls, facades and louvers',
      'Consumer electronics, heat sinks and LED fixtures'
    ],
    qualityStandards: [
      'ASTM B221 / ASTM B241 Standard Specification',
      'EN 755 (Part 1-9) European Extrusion Standards',
      'EN 12020 High Precision Extrusions',
      'ISO 9001:2015 Quality Management Protocol',
      'Full Mill Test Reports (MTR 3.1) with chemical and mechanical data'
    ],
    packaging:
      'Protective plastic film, paper interleave between profiles, heavy-duty shrink wrap, steel strapped onto heat-treated ISPM 15 export wooden pallets.'
  },
  'solar-aluminium-profiles': {
    name: 'Solar Aluminium Profiles',
    h1: 'Solar Aluminium Profiles & Mounting Frame Solutions',
    summary:
      'High-durability structural aluminium profiles for photovoltaic systems: Solar panel frames, ground-mount rails, roof ballast tracks, carport structures and precision mounting clamps.',
    alloys: ['6005A', '6063', '6061'],
    tempers: ['T6', 'T5'],
    minWallMm: '1.2 mm – 3.5 mm',
    maxLengthMm: '6,200 mm (container optimized)',
    moqKg: '1,000 kg',
    surfaceFinishes: [
      'Anodized Clear 15–25 µm (high corrosion resistance for outdoor UV exposure)',
      'Black Anodized (all-black residential modules)',
      'Mill Finish'
    ],
    fabrications: ['Miter cutting', 'CNC mounting slot punching', 'Hardware pre-assembly'],
    applications: ['Utility-scale ground solar arrays', 'Commercial rooftop solar', 'Solar carports', 'BIPV facade systems'],
    qualityStandards: ['IEC 61215 framing compatibility', 'ASTM B221', 'JIS H4100', 'EN 755'],
    packaging: 'Container-optimized bundle packaging with moisture barrier and corner edge protectors.'
  },
  'industrial-aluminium-profiles': {
    name: 'Industrial Aluminium Profiles',
    h1: 'Modular Industrial Aluminium T-Slot Profiles & Frames',
    summary:
      'Universal modular aluminium structural systems for robotics, factory automation, protective machine guards, cleanroom enclosures and ergonomic assembly workstations.',
    alloys: ['6063-T5', '6061-T6'],
    tempers: ['T5', 'T6'],
    minWallMm: '1.5 mm – 4.0 mm',
    maxLengthMm: '6,000 mm',
    moqKg: '500 kg',
    surfaceFinishes: ['Clear Satin Anodized (15 µm)', 'Black Anodized'],
    fabrications: ['Custom cut-to-length', 'End tapping (M5, M6, M8, M12)', 'Access hole drilling'],
    applications: ['Robotic enclosures', 'Linear motion guides', 'Conveyor side rails', 'Cleanroom tables'],
    qualityStandards: ['EN 12020-2 precision extrusion tolerances', 'ISO 2768-m'],
    packaging: 'Individual profile paper wrapping, bundled in robust wooden crates.'
  }
};

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS_DATA[slug] || {
    name: 'Aluminium Profile Product',
    summary: 'Precision aluminium extrusions manufactured in Vietnam.'
  };

  return {
    title: `${product.name} | LELOI METAL Vietnam`,
    description: product.summary
  };
}

export default async function ProductDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = PRODUCTS_DATA[slug] || PRODUCTS_DATA['custom-aluminium-extrusions'];

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Breadcrumb Navigation */}
        <nav className="text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-[#2F7BFF]">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-[#2F7BFF]">Products</Link>
          <span>/</span>
          <span className="text-[#0A2D5B] font-semibold">{product.name}</span>
        </nav>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-[#E2E8F0] pb-12">
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-2">
              <Badge variant="alloy">Vietnam OEM Extrusion</Badge>
              <VerificationStatusBadge status={PublicationStatus.VERIFIED} />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0A2D5B] leading-tight">
              {product.h1}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light">
              {product.summary}
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link href={`/rfq?product=${slug}`}>
                <Button variant="cta" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Request a Quote for this Profile
                </Button>
              </Link>
              <Link href="/rfq?mode=upload">
                <Button variant="outline" size="lg" leftIcon={<FileUp className="w-4 h-4 text-[#2F7BFF]" />}>
                  Upload Your CAD Drawing
                </Button>
              </Link>
            </div>
          </div>

          {/* Quick Technical Specs Box */}
          <div className="lg:col-span-5 bg-[#F1F4F8] p-6 sm:p-8 rounded-2xl border border-[#E2E8F0] space-y-4">
            <div className="text-xs uppercase font-heading font-semibold text-[#0A2D5B] tracking-wider pb-2 border-b border-[#E2E8F0]">
              Key Engineering Parameters
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between py-1 border-b border-[#E2E8F0]">
                <span className="text-slate-500">Available Alloys:</span>
                <span className="font-semibold text-[#0A2D5B] font-mono">{product.alloys.join(', ')}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#E2E8F0]">
                <span className="text-slate-500">Tempers:</span>
                <span className="font-semibold text-[#0A2D5B] font-mono">{product.tempers.join(', ')}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#E2E8F0]">
                <span className="text-slate-500">Wall Thickness:</span>
                <span className="font-semibold text-[#0A2D5B]">{product.minWallMm}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#E2E8F0]">
                <span className="text-slate-500">Max Cut Length:</span>
                <span className="font-semibold text-[#0A2D5B]">{product.maxLengthMm}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#E2E8F0]">
                <span className="text-slate-500">Batch MOQ:</span>
                <span className="font-semibold text-[#0A2D5B]">{product.moqKg}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Incoterms:</span>
                <span className="font-semibold text-[#0A2D5B]">FOB Vietnam Sea Ports / CIF Global</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/tools/aluminium-weight-calculator"
                className="w-full flex items-center justify-center gap-2 p-2.5 rounded-lg bg-white border border-[#E2E8F0] text-xs font-semibold text-[#0A2D5B] hover:border-[#2F7BFF] transition-colors"
              >
                <Scale className="w-4 h-4 text-[#2F7BFF]" />
                Estimate Linear Weight (kg/m)
              </Link>
            </div>
          </div>
        </div>

        {/* Detailed Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Surface Finishes */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-heading text-[#0A2D5B] flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#2F7BFF]" />
              Surface Treatment Options
            </h3>
            <ul className="space-y-2 text-sm text-slate-600">
              {product.surfaceFinishes.map((f: string) => (
                <li key={f} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2F7BFF] shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Secondary Fabrication */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-heading text-[#0A2D5B] flex items-center gap-2">
              <Settings2 className="w-5 h-5 text-[#2F7BFF]" />
              Secondary Fabrication & CNC
            </h3>
            <ul className="space-y-2 text-sm text-slate-600">
              {product.fabrications.map((fab: string) => (
                <li key={fab} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2F7BFF] shrink-0 mt-0.5" />
                  <span>{fab}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quality Standards */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-heading text-[#0A2D5B] flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              Quality Compliance & Testing
            </h3>
            <ul className="space-y-2 text-sm text-slate-600">
              {product.qualityStandards.map((q: string) => (
                <li key={q} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Packaging & Sea Freight Logistics */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-heading text-[#0A2D5B] flex items-center gap-2">
              <Package className="w-5 h-5 text-[#2F7BFF]" />
              Export Packaging & Ocean Logistics
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {product.packaging}
            </p>
            <div className="p-4 bg-[#F1F4F8] rounded-lg text-xs text-slate-500">
              Direct container loading at Vietnam sea ports (Hai Phong, Da Nang, Cat Lai / Cai Mep) with full export customs clearance and phytosanitary certificates for export timber.
            </div>
          </div>
        </div>

        {/* Bottom CTA Block */}
        <div className="bg-[#061D3B] text-white rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold font-heading text-white">
              Ready to Quote Your Extrusion Profile?
            </h3>
            <p className="text-sm text-slate-300 mt-1">
              Send your 2D PDF or 3D STEP/DWG drawings for direct engineering review and formal quotation.
            </p>
          </div>
          <Link href="/rfq" className="shrink-0">
            <Button variant="cta" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Start RFQ Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
