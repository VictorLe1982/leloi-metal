import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound, permanentRedirect } from 'next/navigation';
import { Button, Card } from '@leloi/ui';
import {
  getProductDivisions,
  getDivisionBySlug,
  getFamiliesByDivision,
  LEGACY_CATEGORY_ROUTE_MAP
} from '@leloi/types';
import { composeKeywords } from '@leloi/seo';
import { getDivisionFaqs } from '@/data/division-faqs';
import {
  ArrowRight,
  FileUp,
  CheckCircle2,
  ChevronRight,
  HelpCircle,
  ShieldCheck
} from 'lucide-react';

/**
 * Divisions that have a hand-built landing page at a static route.
 *
 * Prerendering them here too put two pages on the same URL, and the generic one
 * won — silently hiding the bespoke architectural landing page. Excluding them
 * lets the static segment own its URL.
 */
const DIVISIONS_WITH_DEDICATED_PAGE = new Set(['architectural']);

export function generateStaticParams() {
  const divisionSlugs = getProductDivisions()
    .filter((d) => !DIVISIONS_WITH_DEDICATED_PAGE.has(d.slug))
    .map((d) => ({ category: d.slug }));
  const legacySlugs = Object.keys(LEGACY_CATEGORY_ROUTE_MAP).map((category) => ({ category }));
  return [...divisionSlugs, ...legacySlugs];
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;

  if (LEGACY_CATEGORY_ROUTE_MAP[category]) {
    const canonicalSlug = LEGACY_CATEGORY_ROUTE_MAP[category];
    const division = getDivisionBySlug(canonicalSlug);
    return {
      title: `${division?.name || 'Products'} | LELOI METAL`,
      description: division?.summary || 'Precision aluminium extrusion manufacturing in Vietnam.'
    };
  }

  const division = getDivisionBySlug(category);
  if (!division) {
    return {
      title: 'Division Not Found | LELOI METAL',
      description: 'The requested aluminium product division could not be located.'
    };
  }

  // Division pages own their head/mid cluster; family pages below them do not.
  return {
    title: division.seo.title,
    description: division.seo.description,
    keywords: composeKeywords(division.seo.keywords, `/products/${division.slug}`, division.alloys),
    alternates: {
      canonical: `https://leloimetal.com/products/${division.slug}`
    }
  };
}

export default async function CategoryLandingPage({
  params
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  // Handle legacy category redirects
  if (LEGACY_CATEGORY_ROUTE_MAP[category] && LEGACY_CATEGORY_ROUTE_MAP[category] !== category) {
    permanentRedirect(`/products/${LEGACY_CATEGORY_ROUTE_MAP[category]}`);
  }

  const division = getDivisionBySlug(category);
  if (!division) {
    notFound();
  }

  const families = getFamiliesByDivision(division.slug);
  const canonicalUrl = `https://leloimetal.com/products/${division.slug}`;

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://leloimetal.com/' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Products',
        item: 'https://leloimetal.com/products'
      },
      { '@type': 'ListItem', position: 3, name: division.name, item: canonicalUrl }
    ]
  };

  // Lets search and AI engines see every family in this division as one set,
  // even before they crawl the individual family pages.
  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: division.name,
    description: division.seo.description,
    url: canonicalUrl,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: families.length,
      itemListElement: families.map((family, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: family.name,
        url: `https://leloimetal.com/products/${family.divisionSlug}/${family.slug}`
      }))
    }
  };

  const faqs = getDivisionFaqs(division.slug);

  // Mirrors the questions rendered further down this page, verbatim.
  const faqJsonLd = faqs.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer }
        }))
      }
    : null;

  return (
    <div className="min-h-screen bg-light-gray/60 py-12 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-blue">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/products" className="hover:text-blue">
            Products
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-800 font-semibold">{division.name}</span>
        </nav>

        {/* Division Hero */}
        <div className="bg-gradient-to-br from-navy-dark to-navy text-white rounded-2xl p-8 sm:p-12 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs uppercase font-heading font-semibold tracking-widest text-blue flex items-center gap-2">
              <span>LELOI METAL PRODUCT DIVISION</span>
              <span>•</span>
              <span>DIRECT FACTORY VIETNAM</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
              {division.name}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              {division.description}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link href={`/rfq?division=${division.slug}&mode=upload`}>
                <Button variant="cta" size="md" leftIcon={<FileUp className="w-4 h-4" />}>
                  Upload {division.navLabel} Drawing
                </Button>
              </Link>
              <Link href={`/rfq?division=${division.slug}`}>
                <Button variant="outline" size="md" className="border-white/30 text-white hover:bg-white/10">
                  Request RFQ Quotation
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border border-white/20 bg-slate-900">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={division.heroImage}
              alt={`${division.name} engineering render`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Solution Families in this Division */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
            <div>
              <h2 className="text-2xl font-bold font-heading text-navy">
                {division.name} Solutions
              </h2>
              <p className="text-xs text-slate-500">
                Engineered in Vietnam for international B2B supply chains according to customer specifications.
              </p>
            </div>
            <Link
              href="/products"
              className="text-xs font-semibold text-blue hover:underline flex items-center gap-1"
            >
              Browse Full Product Catalog <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {families.map((fam) => (
              <Card
                key={fam.id}
                variant="default"
                className="p-0 overflow-hidden flex flex-col justify-between border border-slate-200 hover:border-blue transition-all group bg-white shadow-xs"
              >
                <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={fam.coverImage}
                    alt={`${fam.name} render`}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2">
                    <span className="text-[9px] font-mono font-bold bg-white/95 text-slate-700 px-1.5 py-0.5 rounded border border-slate-200">
                      Engineered
                    </span>
                  </div>
                </div>

                <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <Link href={`/products/${division.slug}/${fam.slug}`}>
                      <h3 className="font-heading font-bold text-sm text-navy group-hover:text-blue transition-colors line-clamp-1">
                        {fam.name}
                      </h3>
                    </Link>
                    <p className="text-xs text-slate-500 line-clamp-2">
                      {fam.summary}
                    </p>
                    <div className="flex flex-wrap gap-1 pt-1">
                      {fam.alloys.slice(0, 3).map((alloy, idx) => (
                        <span
                          key={idx}
                          className="text-[9px] bg-slate-100 text-slate-700 font-semibold px-1.5 py-0.5 rounded"
                        >
                          {alloy}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                    <Link href={`/products/${division.slug}/${fam.slug}`} className="flex-1">
                      <Button variant="primary" size="sm" className="w-full text-xs">
                        Details
                      </Button>
                    </Link>
                    <Link
                      href={`/rfq?division=${division.slug}&family=${fam.slug}&source=category_landing`}
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

        {/* Engineering Guidelines Box */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-8">
          <div className="space-y-2 border-b border-slate-100 pb-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue">
              ENGINEERING SPECIFICATION & METALLURGY
            </div>
            <h2 className="text-2xl font-bold font-heading text-navy">
              Manufacturing {division.name} in Vietnam: Engineering Guidelines
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <div className="space-y-4">
              <h3 className="font-bold text-base text-navy font-heading">
                Die Tooling, Extrusion Ratio & Tolerances
              </h3>
              <p>
                Every {division.name.toLowerCase()} profile manufactured by LELOI METAL begins with proprietary tooling design. Our tooling engineers utilize flow simulation software to calculate metal velocity in the die bearings, preventing surface shearing and dimensional drift across multi-cavity runs.
              </p>
              <p>
                Wall thickness transitions are engineered with gradual taper radiuses (minimum 0.5mm R) to eliminate hot tearing at sharp internal corners. Our die shop utilizes high-precision wire EDM (Electrical Discharge Machining) ensuring exact adherence to your CAD nominals.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-base text-navy font-heading">
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
            <div className="font-bold text-sm text-navy font-heading">
              Division Capabilities & Standards:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
              {division.highlights.map((adv, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{adv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Buyer FAQ — mirrored exactly in the FAQPage JSON-LD above */}
        {faqs.length > 0 && (
          <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10">
            <div className="max-w-3xl mb-8">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-50 text-navy text-xs font-semibold uppercase tracking-wider mb-2">
                <HelpCircle className="w-3.5 h-3.5 text-blue" />
                Buyer FAQ
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy tracking-tight">
                {division.name}: Questions Buyers Ask
              </h2>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Answers from our engineering and export desk. Anything not covered here, send us the
                drawing and we will answer it specifically.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2"
                >
                  <h3 className="font-bold text-sm text-navy leading-snug">{faq.question}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Bottom RFQ CTA Banner */}
        <div className="bg-navy text-white rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold font-heading">
              Ready to Quote Your Custom {division.name}?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Submit your CAD or 2D drawings for complete Design for Manufacturing (DFM) analysis, die quotation, and landed container shipping estimates from Vietnam.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link href={`/rfq?division=${division.slug}`}>
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
