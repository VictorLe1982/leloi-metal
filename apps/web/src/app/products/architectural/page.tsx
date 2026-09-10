import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import {
  Building2,
  ShieldCheck,
  CheckCircle2,
  FileUp,
  ArrowRight,
  Layers,
  ThermometerSnowflake,
  Sun,
  Home,
  Hotel,
  Compass,
  Download,
  Check
} from 'lucide-react';
import { Button, Badge, Card } from '@leloi/ui';

import { TechnicalProfilePlaceholder } from '@/components/catalog/TechnicalProfilePlaceholder';
import { getFamiliesByDivision } from '@leloi/types';

export const metadata: Metadata = {
  title: 'Architectural Aluminium Systems | Residential & Commercial | LELOI METAL',
  description:
    'Comprehensive architectural aluminium systems from Vietnam: Windows & doors, curtain walls, louvers, wall cladding, linear ceilings, pergolas, bungalow structures, and thermal-break profiles with AkzoNobel 10-Year Warranty.',
  keywords: [
    'architectural aluminium systems',
    'curtain wall profiles',
    'aluminium window door extrusions',
    'thermal break aluminium',
    'aluminium louvers Vietnam',
    'architectural pergolas aluminium',
    'AkzoNobel aluminium coating Vietnam',
    'LELOI METAL architectural'
  ]
};

export default function ArchitecturalProductsPage() {
  const families = getFamiliesByDivision('architectural');

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* 1. HERO SECTION */}
      <section className="bg-[#061D3B] text-white py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(47,123,255,0.2),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-[11px] font-bold uppercase tracking-wider bg-[#2F7BFF]/20 text-[#2F7BFF] px-3 py-1 rounded-full border border-[#2F7BFF]/30">
              Architectural Systems Vertical
            </span>
            <span className="text-[11px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              AkzoNobel 10-Year Warranty
            </span>
            <span className="text-[11px] font-bold uppercase tracking-wider bg-slate-500/20 text-slate-300 px-3 py-1 rounded-full border border-white/20">
              Residential & Commercial
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold font-heading text-white tracking-tight max-w-3xl leading-tight">
            Architectural Aluminium Systems
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mt-4 leading-relaxed font-sans">
            Aluminium solutions for residential, commercial, hospitality and modern building applications. Engineered to international building codes with certified <strong>AkzoNobel 10-Year Warranty Powder Coating</strong>.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <Link href="/rfq?category=architectural">
              <Button variant="cta" size="lg" className="shadow-lg shadow-blue-500/20 gap-2">
                Request Architectural RFQ
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/rfq?mode=upload&category=architectural">
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 gap-2"
                leftIcon={<FileUp className="w-4 h-4 text-[#2F7BFF]" />}
              >
                Upload Section Drawing
              </Button>
            </Link>
            <Link href="/capabilities/powder-coating">
              <Button
                variant="ghost"
                size="lg"
                className="text-emerald-400 hover:text-emerald-300 hover:bg-white/5 gap-1.5"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>AkzoNobel Warranty Specs</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. ARCHITECTURAL 11-SYSTEMS GRID (GROUPS A - K) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold font-heading text-[#2F7BFF] uppercase tracking-widest">
              11 Engineered Systems (Groups A - K)
            </span>
            <h2 className="text-3xl font-bold font-heading text-[#0A2D5B] mt-1">
              Building & Facade Systems Portfolio
            </h2>
          </div>
          <Link
            href="/products"
            className="text-xs font-bold text-[#2F7BFF] hover:underline flex items-center gap-1.5"
          >
            <span>Browse Full Product Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {families.map((fam) => (
            <Card
              key={fam.id}
              variant="interactive"
              className="flex flex-col justify-between overflow-hidden group hover:border-[#2F7BFF] transition-all"
            >
              <div>
                <div className="relative w-full h-48 bg-slate-900 rounded-lg overflow-hidden mb-4">
                  {fam.coverImage ? (
                    <Image
                      src={fam.coverImage}
                      alt={fam.name}
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <TechnicalProfilePlaceholder
                      title={fam.name}
                      category={`Group ${fam.groupKey || 'A'}`}
                      aspectRatio="16/9"
                    />
                  )}
                  {fam.groupKey && (
                    <div className="absolute top-2.5 left-2.5">
                      <span className="text-[10px] font-mono font-bold bg-[#0A2D5B]/90 text-cyan-300 px-2.5 py-1 rounded shadow-xs">
                        GROUP {fam.groupKey}
                      </span>
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-bold font-heading text-[#0A2D5B] group-hover:text-[#2F7BFF] transition-colors">
                  {fam.name}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {fam.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {fam.alloys.map((b) => (
                    <Badge key={b} variant="default" className="text-[10px]">
                      {b}
                    </Badge>
                  ))}
                  {fam.supportedFinishes.slice(0, 2).map((fin) => (
                    <Badge key={fin} variant="outline" className="text-[10px]">
                      {fin.replace('_', ' ')}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                <Link
                  href={`/products/architectural/${fam.slug}`}
                  className="text-xs font-heading font-semibold text-[#0A2D5B] group-hover:text-[#2F7BFF] flex items-center gap-1"
                >
                  <span>Explore Solution</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href={`/rfq?division=architectural&family=${fam.slug}`}
                  className="text-xs font-heading font-bold text-[#2F7BFF] hover:underline"
                >
                  Request Quote →
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>


      {/* 3. SURFACE FINISHING & AKZONOBEL POWDER COATING HIGHLIGHT */}
      <section className="py-16 bg-[#061D3B] text-white border-t border-b border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2F7BFF]">
                Long-Term Weathering Protection
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mt-2">
                Surface Finishing: AkzoNobel Powder Coating & Architectural Anodizing
              </h2>
              <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                Architectural installations face intense UV sunlight, industrial airborne chemicals, and coastal salt-spray. LELOI METAL offers certified finishing options tailored to harsh outdoor environments:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span>AkzoNobel Powder Coating</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    AkzoNobel architectural coating with <strong>warranties up to 10 years</strong> subject to approved system and environmental conditions.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                  <div className="flex items-center gap-2 text-blue-400 font-bold text-sm mb-1">
                    <Layers className="w-4 h-4" />
                    <span>Architectural Anodizing</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Electrolytic architectural anodizing in Clear, Champagne, Bronze, and Jet Black. Outstanding surface protection.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <Link href="/capabilities/powder-coating">
                  <Button variant="cta" size="sm">
                    Read 10-Year Warranty Details →
                  </Button>
                </Link>
                <Link href="/capabilities/anodizing">
                  <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
                    Explore Anodizing Line →
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
                Architectural Testing & Compliance
              </h3>
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>AAMA 2604 / 2605:</strong> 3,000 to 4,000+ hours salt spray test (ASTM B117)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Florida UV Weathering:</strong> 5–10 years exposure with minimal color shift</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Cross-Hatch Adhesion:</strong> ASTM D3359 100% tape adhesion rating</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Wind Load Resistance:</strong> ASTM E330 structural deflection testing</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Thermal Insulation:</strong> Polyamide PA66 thermal breaks meeting LEED benchmarks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. APPLICATIONS IN CONSTRUCTION (Residential, Commercial, Resorts) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold font-heading text-[#2F7BFF] uppercase tracking-widest">
            Project Sectors
          </span>
          <h2 className="text-3xl font-bold font-heading text-[#0A2D5B] mt-2">
            Tailored for Diverse Construction Applications
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-xs">
            <Home className="w-8 h-8 text-[#2F7BFF] mb-3" />
            <h3 className="font-bold text-sm text-[#0A2D5B]">Luxury Residential Villas</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Ultra-slim panoramic sliding systems, motorized pergolas, minimalist casements, and glass balcony railings.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-xs">
            <Building2 className="w-8 h-8 text-[#2F7BFF] mb-3" />
            <h3 className="font-bold text-sm text-[#0A2D5B]">Commercial High-Rise</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Unitized curtain wall frames, pressure plates, acoustic louvers, and ventilated rainscreen facades.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-xs">
            <Hotel className="w-8 h-8 text-[#2F7BFF] mb-3" />
            <h3 className="font-bold text-sm text-[#0A2D5B]">Hospitality & Resorts</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Modular aluminium bungalow frameworks, beachfront pavilions, cabanas, and marine-grade corrosion coatings.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-xs">
            <Compass className="w-8 h-8 text-[#2F7BFF] mb-3" />
            <h3 className="font-bold text-sm text-[#0A2D5B]">Public & Institutional</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Airports, train terminals, hospitals, and educational facilities with linear baffle ceilings and crowd-rated handrails.
            </p>
          </div>
        </div>
      </section>

      {/* 5. PROJECT INQUIRY CTA */}
      <section className="py-20 bg-linear-to-r from-[#0A2D5B] to-[#061D3B] text-white px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2F7BFF]">
            Architectural Project Sourcing
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mt-2">
            Have an Architectural Section Drawing or Project Specification?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            Our technical team provides direct factory die engineering, DFM analysis, alloy recommendations, and quotation based on your project requirements.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/rfq?mode=upload&category=architectural">
              <Button variant="cta" size="lg" className="gap-2">
                Upload CAD / PDF Drawings
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/tools/aluminium-weight-calculator">
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Calculate Profile Weight
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
