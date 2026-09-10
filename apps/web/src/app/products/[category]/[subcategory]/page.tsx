import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Button, Card, Badge } from '@leloi/ui';
import {
  CANONICAL_FAMILIES,
  getProductDivisions,
  getDivisionBySlug,
  getFamiliesByDivision,
  getFamilyBySlug,
  getFamilyBySlugOnly,
  getSystemsByFamily,
  getSubcategoryBySlug,
  getAllSubcategoryFullSlugs
} from '@leloi/types';
import { TechnicalProfilePlaceholder } from '@/components/catalog/TechnicalProfilePlaceholder';
import {
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  FileUp,
  Layers,
  CheckCircle2,
  Calculator,
  Compass,
  Check
} from 'lucide-react';

export function generateStaticParams() {
  const canonical = CANONICAL_FAMILIES.map((f) => ({
    category: f.divisionSlug,
    subcategory: f.slug
  }));
  const legacy = getAllSubcategoryFullSlugs();
  return [...canonical, ...legacy];
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ category: string; subcategory: string }>;
}): Promise<Metadata> {
  const { category: catSlug, subcategory: subSlug } = await params;

  // 1. Try canonical family
  const canonicalFamily = getFamilyBySlug(catSlug, subSlug) || getFamilyBySlugOnly(subSlug);
  if (canonicalFamily) {
    const division = getDivisionBySlug(canonicalFamily.divisionSlug);
    return {
      title: `${canonicalFamily.name} | ${division?.name || 'Aluminium Systems'} | LELOI METAL`,
      description: `${canonicalFamily.summary} Precision aluminium extrusion manufacturing from Vietnam factory. AkzoNobel powder coating and custom fabrication available.`,
      alternates: {
        canonical: `https://leloimetal.com/products/${canonicalFamily.divisionSlug}/${canonicalFamily.slug}`
      },
      keywords: [
        canonicalFamily.name,
        ...(canonicalFamily.technicalApplications || []),
        'aluminium extrusion Vietnam',
        'LELOI METAL'
      ]
    };
  }

  // 2. Fallback to legacy subcategory
  const match = getSubcategoryBySlug(catSlug, subSlug);
  if (!match) {
    return {
      title: 'Solution Not Found | LELOI METAL',
      description: 'The requested aluminium product solution could not be found.'
    };
  }

  const { category, subcategory } = match;
  return {
    title: `${subcategory.name} | ${category.name} | LELOI METAL Vietnam`,
    description: `${subcategory.shortDescription} Engineered aluminium profile solutions from Vietnam factory.`,
    keywords: [subcategory.name, category.name, 'aluminium extrusion Vietnam', 'LELOI METAL']
  };
}

export default async function SubcategoryPage({
  params
}: {
  params: Promise<{ category: string; subcategory: string }>;
}) {
  const { category: catSlug, subcategory: subSlug } = await params;

  // 1. Check canonical family
  const canonicalFamily = getFamilyBySlug(catSlug, subSlug) || getFamilyBySlugOnly(subSlug);

  if (canonicalFamily) {
    const division = getDivisionBySlug(canonicalFamily.divisionSlug);
    const systems = getSystemsByFamily(canonicalFamily.slug);
    const siblingFamilies = getFamiliesByDivision(canonicalFamily.divisionSlug).filter(
      (f) => f.slug !== canonicalFamily.slug
    );

    return (
      <div className="min-h-screen bg-[#F8FAFC]">
        {/* 1. BREADCRUMBS */}
        <div className="bg-white border-b border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav className="flex items-center flex-wrap gap-2 text-xs text-slate-500 font-medium">
              <Link href="/" className="hover:text-[#2F7BFF] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3 h-3 text-slate-400" />
              <Link href="/products" className="hover:text-[#2F7BFF] transition-colors">
                Products
              </Link>
              <ChevronRight className="w-3 h-3 text-slate-400" />
              <Link
                href={`/products/${canonicalFamily.divisionSlug}`}
                className="hover:text-[#2F7BFF] transition-colors"
              >
                {division?.name || 'Division'}
              </Link>
              <ChevronRight className="w-3 h-3 text-slate-400" />
              <span className="text-slate-800 font-semibold">{canonicalFamily.name}</span>
            </nav>
          </div>
        </div>

        {/* 2. HERO SECTION */}
        <section className="bg-[#061D3B] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(47,123,255,0.18),transparent_55%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <Link
                  href={`/products/${canonicalFamily.divisionSlug}`}
                  className="text-[11px] font-bold uppercase tracking-wider bg-[#2F7BFF]/20 text-[#2F7BFF] px-3 py-1 rounded-full border border-[#2F7BFF]/30 hover:bg-[#2F7BFF]/30 transition-colors"
                >
                  {division?.navLabel || division?.name}
                </Link>
                {canonicalFamily.groupKey && (
                  <span className="text-[11px] font-mono font-bold bg-white/10 text-cyan-300 px-2.5 py-1 rounded-full border border-white/15">
                    GROUP {canonicalFamily.groupKey}
                  </span>
                )}
                <span className="text-[11px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  AkzoNobel Coated Ready
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight leading-tight">
                {canonicalFamily.name}
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans max-w-2xl">
                {canonicalFamily.description}
              </p>

              {/* Applications tags */}
              <div className="pt-2">
                <div className="text-xs uppercase font-heading font-semibold tracking-wider text-slate-400 mb-2">
                  Key Technical Applications:
                </div>
                <div className="flex flex-wrap gap-2">
                  {canonicalFamily.technicalApplications.map((app, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-white/10 text-slate-200 px-3 py-1 rounded-md border border-white/15"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hero CTAs */}
              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <Link
                  href={`/rfq?division=${canonicalFamily.divisionSlug}&family=${canonicalFamily.slug}&source=family-hero`}
                >
                  <Button variant="cta" size="lg" className="shadow-lg shadow-blue-500/20 gap-2">
                    Request Factory Quote
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link
                  href={`/rfq?mode=upload&division=${canonicalFamily.divisionSlug}&family=${canonicalFamily.slug}`}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10 gap-2"
                    leftIcon={<FileUp className="w-4 h-4 text-[#2F7BFF]" />}
                  >
                    Upload CAD / Drawing
                  </Button>
                </Link>
                <Link href="/tools/aluminium-weight-calculator">
                  <Button
                    variant="ghost"
                    size="lg"
                    className="text-slate-300 hover:text-white hover:bg-white/5 gap-1.5"
                    leftIcon={<Calculator className="w-4 h-4 text-[#2F7BFF]" />}
                  >
                    Calculate Weight
                  </Button>
                </Link>
              </div>
            </div>

            {/* Graphic / Image Viewport */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/15 shadow-2xl overflow-hidden bg-[#0A2D5B]/60 p-2">
                {canonicalFamily.coverImage ? (
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-900">
                    <Image
                      src={canonicalFamily.coverImage}
                      alt={`${canonicalFamily.name} render`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                ) : (
                  <TechnicalProfilePlaceholder
                    title={canonicalFamily.name}
                    category={division?.navLabel || 'Solution'}
                    aspectRatio="4/3"
                  />
                )}
                <div className="p-3 bg-white/5 backdrop-blur-xs rounded-b-xl flex items-center justify-between text-[11px] text-slate-300 font-mono">
                  <span>CANONICAL SOLUTION FAMILY</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> SPEC-READY
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. ENGINEERED PRODUCT SYSTEMS (IF AVAILABLE) */}
        {systems.length > 0 && (
          <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-200">
            <div className="mb-8">
              <span className="text-xs font-bold font-heading text-[#2F7BFF] uppercase tracking-widest">
                PRE-ENGINEERED SYSTEMS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0A2D5B] mt-1">
                Standard & Tested {canonicalFamily.name} Configurations
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-2xl">
                Dossier-backed aluminium extrusion systems ready for turnkey manufacturing, tooling scaling, or rapid OEM customization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {systems.map((sys) => (
                <Card key={sys.id} className="p-6 border border-[#E2E8F0] shadow-sm hover:border-[#2F7BFF] transition-all flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#2F7BFF] uppercase tracking-wider">
                        SYSTEM CODE: {sys.slug.toUpperCase()}
                      </span>
                      <span className="text-[10px] bg-blue-50 text-blue-700 font-bold px-2 py-0.5 rounded border border-blue-200">
                        {sys.alloys.join(' / ')}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-heading text-[#0A2D5B]">
                      {sys.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {sys.description}
                    </p>

                    {/* Technical specs table */}
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 space-y-2">
                      <div className="text-[11px] font-bold uppercase text-slate-500 tracking-wider">
                        Technical Specifications:
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        {Object.entries(sys.technicalSpecs).map(([label, value]) => (
                          <div key={label} className="border-b border-slate-200/60 pb-1">
                            <span className="text-slate-500 block text-[10px]">{label}</span>
                            <span className="font-semibold text-slate-800">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-4 mt-6">
                    <Link
                      href={`/rfq?division=${canonicalFamily.divisionSlug}&family=${canonicalFamily.slug}&system=${sys.slug}`}
                      className="flex-1"
                    >
                      <Button variant="cta" size="sm" className="w-full text-xs justify-center">
                        Request System RFQ
                      </Button>
                    </Link>
                    <Link
                      href={`/rfq?mode=upload&division=${canonicalFamily.divisionSlug}&family=${canonicalFamily.slug}&system=${sys.slug}`}
                      className="flex-1"
                    >
                      <Button variant="outline" size="sm" className="w-full text-xs justify-center">
                        Upload CAD Modifications
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* 4. TECHNICAL SPECIFICATIONS & PRODUCTION CAPABILITIES */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Col 1: Material & Metallurgy */}
            <Card className="p-6 border border-[#E2E8F0] shadow-xs hover:border-[#2F7BFF]/40 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#0A2D5B]/10 text-[#0A2D5B] flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold font-heading text-[#0A2D5B]">
                    Alloy & Metallurgy
                  </h3>
                  <span className="text-xs text-slate-500">Chemical Composition</span>
                </div>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-600 font-sans">
                <li className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Supported Alloys:</span>
                  <span className="font-semibold text-[#172033]">{canonicalFamily.alloys.join(', ')}</span>
                </li>
                <li className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Available Tempers:</span>
                  <span className="font-semibold text-[#172033]">{canonicalFamily.tempers.join(', ')}</span>
                </li>
                <li className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Extrusion Ingot:</span>
                  <span className="font-semibold text-[#172033]">100% Primary Ingot A00</span>
                </li>
                <li className="flex justify-between py-1">
                  <span className="text-slate-500">Standard Codes:</span>
                  <span className="font-semibold text-[#172033]">ASTM B221 / EN 755-9</span>
                </li>
              </ul>
            </Card>

            {/* Col 2: Surface Finishing & AkzoNobel Warranty */}
            <Card className="p-6 border border-emerald-200 bg-emerald-50/20 shadow-xs hover:border-emerald-400 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold font-heading text-emerald-900">
                    Surface Finishing
                  </h3>
                  <span className="text-xs text-emerald-700 font-medium">AkzoNobel & Anodizing</span>
                </div>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-700 font-sans">
                <li className="flex justify-between py-1 border-b border-emerald-100">
                  <span className="text-slate-600">Powder Coating:</span>
                  <span className="font-semibold text-emerald-900">AkzoNobel Powder Coating</span>
                </li>
                <li className="flex justify-between py-1 border-b border-emerald-100">
                  <span className="text-slate-600">Warranty Proposition:</span>
                  <span className="font-semibold text-emerald-900">Up to 10 Years (Subject to terms)</span>
                </li>
                <li className="flex justify-between py-1 border-b border-emerald-100">
                  <span className="text-slate-600">Anodizing Options:</span>
                  <span className="font-semibold text-slate-800">Clear, Bronze & Black</span>
                </li>
                <li className="flex justify-between py-1">
                  <span className="text-slate-600">Mill Finish:</span>
                  <span className="font-semibold text-slate-800">Natural Extruded Smooth</span>
                </li>
              </ul>
            </Card>

            {/* Col 3: DFM & Fabrication */}
            <Card className="p-6 border border-[#E2E8F0] shadow-xs hover:border-[#2F7BFF]/40 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#2F7BFF]/10 text-[#2F7BFF] flex items-center justify-center">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold font-heading text-[#0A2D5B]">
                    Fabrication & DFM
                  </h3>
                  <span className="text-xs text-slate-500">OEM Secondary Processing</span>
                </div>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-600 font-sans">
                <li className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Cut-to-Length:</span>
                  <span className="font-semibold text-[#172033]">Precision Cutting Available</span>
                </li>
                <li className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">CNC Machining:</span>
                  <span className="font-semibold text-[#172033]">Milling, Drilling & Tapping</span>
                </li>
                <li className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Punching / Stamping:</span>
                  <span className="font-semibold text-[#172033]">Per Engineering Drawing</span>
                </li>
                <li className="flex justify-between py-1">
                  <span className="text-slate-500">Export Packaging:</span>
                  <span className="font-semibold text-[#172033]">Protective Film & Seaworthy Crates</span>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* 5. RFQ ENGAGEMENT STRIP */}
        <section className="bg-[#0A2D5B] text-white py-14 px-4 sm:px-6 lg:px-8 border-t border-b border-white/10">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="text-xs font-mono uppercase tracking-widest text-[#2F7BFF] mb-2">
                DIRECT FACTORY SOURCING FROM VIETNAM
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                Ready to Quote on {canonicalFamily.name}?
              </h2>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                Send us your drawing files (PDF, DWG, DXF, or STEP) along with estimated annual order volumes and target alloy specs. Our engineering team returns comprehensive DFM analysis and direct factory pricing within 24–48 hours.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link
                href={`/rfq?division=${canonicalFamily.divisionSlug}&family=${canonicalFamily.slug}&source=family-cta`}
              >
                <Button variant="cta" size="lg" className="gap-2">
                  Submit RFQ for this Solution
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link
                href={`/rfq?mode=upload&division=${canonicalFamily.divisionSlug}&family=${canonicalFamily.slug}`}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Upload Drawing File
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* 6. SIBLING FAMILIES IN THIS DIVISION */}
        {siblingFamilies.length > 0 && (
          <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold font-heading text-[#2F7BFF] uppercase tracking-widest">
                  MORE IN THIS BUSINESS LINE
                </span>
                <h3 className="text-2xl font-bold font-heading text-[#0A2D5B] mt-1">
                  Other {division?.name || 'Division'} Solutions
                </h3>
              </div>
              <Link
                href={`/products/${canonicalFamily.divisionSlug}`}
                className="text-xs font-bold text-[#2F7BFF] hover:underline flex items-center gap-1"
              >
                <span>View Full Division</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {siblingFamilies.slice(0, 6).map((sib) => (
                <Link
                  key={sib.slug}
                  href={`/products/${canonicalFamily.divisionSlug}/${sib.slug}`}
                  className="block group"
                >
                  <Card className="p-5 h-full flex flex-col justify-between hover:border-[#2F7BFF] hover:shadow-md transition-all">
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-[#2F7BFF] mb-1">
                        {division?.navLabel}
                      </div>
                      <h4 className="font-heading font-bold text-base text-[#0A2D5B] group-hover:text-[#2F7BFF] transition-colors">
                        {sib.name}
                      </h4>
                      <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                        {sib.summary}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0A2D5B] group-hover:text-[#2F7BFF]">
                      <span>View Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#2F7BFF]" />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    );
  }

  // 2. Fallback to legacy subcategory
  const match = getSubcategoryBySlug(catSlug, subSlug);
  if (!match) {
    notFound();
  }

  const { category, subcategory } = match;
  const siblingSubcategories = category.subcategories.filter((s) => s.slug !== subcategory.slug);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <div className="bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center flex-wrap gap-2 text-xs text-slate-500 font-medium">
            <Link href="/" className="hover:text-[#2F7BFF] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <Link href="/products" className="hover:text-[#2F7BFF] transition-colors">
              Products
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <Link
              href={`/products/${category.slug}`}
              className="hover:text-[#2F7BFF] transition-colors"
            >
              {category.name}
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-slate-800 font-semibold">{subcategory.name}</span>
          </nav>
        </div>
      </div>

      <section className="bg-[#061D3B] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white">
              {subcategory.name}
            </h1>
            <p className="text-slate-300 text-base leading-relaxed">
              {subcategory.shortDescription}
            </p>
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <Link href={`/rfq?category=${category.slug}&subcategory=${subcategory.slug}`}>
                <Button variant="cta" size="lg">
                  Request Factory Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
