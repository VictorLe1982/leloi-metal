import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound, permanentRedirect } from 'next/navigation';
import { Button, Card, Badge } from '@leloi/ui';
import {
  CANONICAL_FAMILIES,
  getDivisionBySlug,
  getFamiliesByDivision,
  getFamilyBySlug,
  getFamilyBySlugOnly,
  getSystemsByFamily,
  getAllSubcategoryFullSlugs,
  resolveLegacyFamilyUrl
} from '@leloi/types';

const BASE_URL = 'https://leloimetal.com';
import { TechnicalProfilePlaceholder } from '@/components/catalog/TechnicalProfilePlaceholder';
import { AnswerBlock } from '@/components/catalog/AnswerBlock';
import { buildFamilyAnswer } from '@/data/family-answers';
import { getArticlesForFamily } from '@/data/content-cluster';
import { COMPANY } from '@/data/company';
import { composeKeywords } from '@leloi/seo';
import {
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  FileUp,
  Layers,
  CheckCircle2,
  Calculator,
  Compass,
  Check,
  BookOpen
} from 'lucide-react';

/** Families with a hand-built page at a static route — see [category]/page.tsx. */
const FAMILIES_WITH_DEDICATED_PAGE = new Set(['architectural/windows-doors']);

export function generateStaticParams() {
  const canonical = CANONICAL_FAMILIES.filter(
    (f) => !FAMILIES_WITH_DEDICATED_PAGE.has(`${f.divisionSlug}/${f.slug}`)
  ).map((f) => ({
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

  const canonicalFamily = getFamilyBySlug(catSlug, subSlug) || getFamilyBySlugOnly(subSlug);

  // Legacy taxonomy slugs are permanently redirected by the page below, so they
  // never need indexable metadata of their own.
  if (!canonicalFamily) {
    return {
      title: 'Redirecting… | LELOI METAL',
      robots: { index: false, follow: true }
    };
  }

  const canonicalUrl = `${BASE_URL}/products/${canonicalFamily.divisionSlug}/${canonicalFamily.slug}`;

  // Curated per-family copy authored in canonical-products-data.ts is the source
  // of truth; the generic fallbacks below only apply if a family lacks it.
  const title =
    canonicalFamily.seo?.title ||
    `${canonicalFamily.name} | ${getDivisionBySlug(canonicalFamily.divisionSlug)?.name ?? 'Aluminium Systems'} | LELOI METAL`;

  const description =
    canonicalFamily.seo?.description ||
    `${canonicalFamily.summary} Precision aluminium extrusion manufacturing from our Vietnam factory.`;

  // Curated family terms first, then the alloys and finishes this family
  // actually supports. Head terms are deliberately excluded — those belong to
  // the division page, and duplicating them here causes cannibalisation.
  const keywords = composeKeywords(
    canonicalFamily.seo?.keywords ?? [canonicalFamily.name],
    undefined,
    [
      ...canonicalFamily.alloys,
      ...canonicalFamily.technicalApplications,
      `${canonicalFamily.name} Vietnam`,
      `${canonicalFamily.name} supplier`
    ]
  );

  return {
    title,
    description,
    keywords,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: 'website',
      title,
      description,
      url: canonicalUrl,
      siteName: 'LELOI METAL'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
    }
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

    const canonicalUrl = `${BASE_URL}/products/${canonicalFamily.divisionSlug}/${canonicalFamily.slug}`;
    const relatedArticles = getArticlesForFamily(canonicalFamily.slug);

    const breadcrumbJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Products', item: `${BASE_URL}/products` },
        {
          '@type': 'ListItem',
          position: 3,
          name: division?.name ?? canonicalFamily.divisionSlug,
          item: `${BASE_URL}/products/${canonicalFamily.divisionSlug}`
        },
        { '@type': 'ListItem', position: 4, name: canonicalFamily.name, item: canonicalUrl }
      ]
    };

    // B2B pricing is quotation-based, so no price is asserted. Google requires a
    // numeric price on Offer/AggregateOffer, so we publish the product without an
    // offers node rather than with an invalid one.
    const productJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: canonicalFamily.name,
      description: canonicalFamily.seo?.description || canonicalFamily.summary,
      image: `${BASE_URL}${canonicalFamily.coverImage}`,
      url: canonicalUrl,
      category: division?.name ?? canonicalFamily.divisionSlug,
      material: canonicalFamily.alloys.join(', '),
      brand: { '@type': 'Brand', name: 'LELOI METAL' },
      manufacturer: { '@type': 'Organization', name: COMPANY.legalName, url: BASE_URL },
      additionalProperty: [
        {
          '@type': 'PropertyValue',
          name: 'Alloys',
          value: canonicalFamily.alloys.join(', ')
        },
        {
          '@type': 'PropertyValue',
          name: 'Tempers',
          value: canonicalFamily.tempers.join(', ')
        },
        {
          '@type': 'PropertyValue',
          name: 'Applications',
          value: canonicalFamily.technicalApplications.join(', ')
        }
      ]
    };

    return (
      <div className="min-h-screen bg-slate-50">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
        />

        {/* 1. BREADCRUMBS */}
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav className="flex items-center flex-wrap gap-2 text-xs text-slate-500 font-medium">
              <Link href="/" className="hover:text-blue transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3 h-3 text-slate-400" />
              <Link href="/products" className="hover:text-blue transition-colors">
                Products
              </Link>
              <ChevronRight className="w-3 h-3 text-slate-400" />
              <Link
                href={`/products/${canonicalFamily.divisionSlug}`}
                className="hover:text-blue transition-colors"
              >
                {division?.name || 'Division'}
              </Link>
              <ChevronRight className="w-3 h-3 text-slate-400" />
              <span className="text-slate-800 font-semibold">{canonicalFamily.name}</span>
            </nav>
          </div>
        </div>

        {/* 2. HERO SECTION */}
        <section className="bg-navy-dark text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(47,123,255,0.18),transparent_55%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <Link
                  href={`/products/${canonicalFamily.divisionSlug}`}
                  className="text-[11px] font-bold uppercase tracking-wider bg-blue/20 text-blue px-3 py-1 rounded-full border border-blue/30 hover:bg-blue/30 transition-colors"
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
                  AkzoNobel Coating Available
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
                    leftIcon={<FileUp className="w-4 h-4 text-blue" />}
                  >
                    Upload CAD / Drawing
                  </Button>
                </Link>
                <Link href="/tools/aluminium-weight-calculator">
                  <Button
                    variant="ghost"
                    size="lg"
                    className="text-slate-300 hover:text-white hover:bg-white/5 gap-1.5"
                    leftIcon={<Calculator className="w-4 h-4 text-blue" />}
                  >
                    Calculate Weight
                  </Button>
                </Link>
              </div>
            </div>

            {/* Graphic / Image Viewport */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/15 shadow-2xl overflow-hidden bg-navy/60 p-2">
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

        {/* 2b. CITABLE SUMMARY — positioned high so answer engines reach it early */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-8 relative z-10">
          <AnswerBlock answer={buildFamilyAnswer(canonicalFamily, division)} />
        </section>

        {/* 2c. SUPPORTING TECHNICAL GUIDES — the spoke half of the content cluster */}
        {relatedArticles.length > 0 && (
          <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-12">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-4 h-4 text-blue" />
              <h2 className="text-sm font-bold font-heading text-navy uppercase tracking-wider">
                Engineering Guides for This Product
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/insights/${article.slug}`}
                  className="group p-4 rounded-xl bg-white border border-slate-200 hover:border-blue transition-colors"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue">
                    {article.category}
                  </span>
                  <h3 className="text-sm font-bold font-heading text-navy group-hover:text-blue transition-colors mt-1 leading-snug line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-1.5 line-clamp-2 leading-snug">
                    {article.summary}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* 3. ENGINEERED PRODUCT SYSTEMS (IF AVAILABLE) */}
        {systems.length > 0 && (
          <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-200">
            <div className="mb-8">
              <span className="text-xs font-bold font-heading text-blue uppercase tracking-widest">
                PRE-ENGINEERED SYSTEMS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy mt-1">
                Standard & Tested {canonicalFamily.name} Configurations
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-2xl">
                Dossier-backed aluminium extrusion systems ready for turnkey manufacturing, tooling scaling, or rapid OEM customization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {systems.map((sys) => (
                <Card key={sys.id} className="p-6 border border-slate-200 shadow-sm hover:border-blue transition-all flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-blue uppercase tracking-wider">
                        SYSTEM CODE: {sys.slug.toUpperCase()}
                      </span>
                      <span className="text-[10px] bg-blue-50 text-blue-700 font-bold px-2 py-0.5 rounded border border-blue-200">
                        {sys.alloys.join(' / ')}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-heading text-navy">
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
            <Card className="p-6 border border-slate-200 shadow-xs hover:border-blue/40 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-navy/10 text-navy flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold font-heading text-navy">
                    Alloy & Metallurgy
                  </h3>
                  <span className="text-xs text-slate-500">Chemical Composition</span>
                </div>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-600 font-sans">
                <li className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Supported Alloys:</span>
                  <span className="font-semibold text-charcoal">{canonicalFamily.alloys.join(', ')}</span>
                </li>
                <li className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Available Tempers:</span>
                  <span className="font-semibold text-charcoal">{canonicalFamily.tempers.join(', ')}</span>
                </li>
                <li className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Extrusion Ingot:</span>
                  <span className="font-semibold text-charcoal">100% Primary Ingot A00</span>
                </li>
                <li className="flex justify-between py-1">
                  <span className="text-slate-500">Standard Codes:</span>
                  <span className="font-semibold text-charcoal">ASTM B221 / EN 755-9</span>
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
            <Card className="p-6 border border-slate-200 shadow-xs hover:border-blue/40 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue/10 text-blue flex items-center justify-center">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold font-heading text-navy">
                    Fabrication & DFM
                  </h3>
                  <span className="text-xs text-slate-500">OEM Secondary Processing</span>
                </div>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-600 font-sans">
                <li className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Cut-to-Length:</span>
                  <span className="font-semibold text-charcoal">Precision Cutting Available</span>
                </li>
                <li className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">CNC Machining:</span>
                  <span className="font-semibold text-charcoal">Milling, Drilling & Tapping</span>
                </li>
                <li className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Punching / Stamping:</span>
                  <span className="font-semibold text-charcoal">Per Engineering Drawing</span>
                </li>
                <li className="flex justify-between py-1">
                  <span className="text-slate-500">Export Packaging:</span>
                  <span className="font-semibold text-charcoal">Protective Film & Seaworthy Crates</span>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* 5. RFQ ENGAGEMENT STRIP */}
        <section className="bg-navy text-white py-14 px-4 sm:px-6 lg:px-8 border-t border-b border-white/10">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="text-xs font-mono uppercase tracking-widest text-blue mb-2">
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
                <span className="text-xs font-bold font-heading text-blue uppercase tracking-widest">
                  MORE IN THIS BUSINESS LINE
                </span>
                <h3 className="text-2xl font-bold font-heading text-navy mt-1">
                  Other {division?.name || 'Division'} Solutions
                </h3>
              </div>
              <Link
                href={`/products/${canonicalFamily.divisionSlug}`}
                className="text-xs font-bold text-blue hover:underline flex items-center gap-1"
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
                  <Card className="p-5 h-full flex flex-col justify-between hover:border-blue hover:shadow-md transition-all">
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-blue mb-1">
                        {division?.navLabel}
                      </div>
                      <h4 className="font-heading font-bold text-base text-navy group-hover:text-blue transition-colors">
                        {sib.name}
                      </h4>
                      <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                        {sib.summary}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-navy group-hover:text-blue">
                      <span>View Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-blue" />
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

  // 2. Legacy V5 taxonomy slug — consolidate into its canonical family with a
  // permanent redirect rather than serving a competing stub page.
  const legacyTarget = resolveLegacyFamilyUrl(subSlug);
  if (legacyTarget) {
    permanentRedirect(legacyTarget);
  }

  notFound();
}

