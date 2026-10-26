import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button, Card, Badge, VerificationStatusBadge } from '@leloi/ui';
import { PublicationStatus } from '@leloi/types';
import {
  ArrowRight,
  ShieldCheck,
  Globe2,
  ExternalLink,
  CheckCircle2,
  Ship,
  FileCheck,
  Building,
  HelpCircle
} from 'lucide-react';

import { COUNTRY_MARKETS, MARKET_SLUGS } from '@/data/markets';

const BASE_URL = 'https://leloimetal.com';

export function generateStaticParams() {
  return MARKET_SLUGS.map((country) => ({ country }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ country: string }>;
}): Promise<Metadata> {
  const { country } = await params;
  const market = COUNTRY_MARKETS[country];

  if (!market) {
    return {
      title: 'Market Guide Not Found | LELOI METAL',
      robots: { index: false, follow: true }
    };
  }

  const canonicalUrl = `${BASE_URL}/markets/${country}`;

  return {
    title: `${market.title} | LELOI METAL`,
    description: market.overview,
    keywords: [
      `aluminium extrusion ${market.country}`,
      `import aluminium profiles ${market.country}`,
      `HS ${market.hsCode} tariff`,
      market.fta
    ],
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: 'article',
      title: market.title,
      description: market.overview,
      url: canonicalUrl,
      siteName: 'LELOI METAL'
    }
  };
}

export default async function MarketDetailPage({
  params
}: {
  params: Promise<{ country: string }>;
}) {
  const { country } = await params;
  const market = COUNTRY_MARKETS[country];

  // Serving the Canada guide under another country's URL would be duplicate
  // content carrying the wrong tariff data.
  if (!market) {
    notFound();
  }

  const canonicalUrl = `${BASE_URL}/markets/${country}`;

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Markets', item: `${BASE_URL}/markets` },
      { '@type': 'ListItem', position: 3, name: market.country, item: canonicalUrl }
    ]
  };

  const faqJsonLd = market.faqs?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: market.faqs.map((faq: { q: string; a: string }) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a }
        }))
      }
    : null;

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-blue">Home</Link>
          <span>/</span>
          <Link href="/markets" className="hover:text-blue">Export Markets</Link>
          <span>/</span>
          <span className="text-navy font-semibold">{market.country}</span>
        </nav>

        {/* Hero */}
        <div className="space-y-4 border-b border-slate-200 pb-10">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-navy bg-navy/5 px-2.5 py-1 rounded border border-navy/10">
              COUNTRY DOSSIER: {market.code}
            </span>
            <VerificationStatusBadge status={PublicationStatus.VERIFIED} />
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-navy">
            {market.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light max-w-4xl">
            {market.overview}
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <Link href={`/rfq?country=${market.code}`}>
              <Button variant="cta" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Request {market.country} Sourcing Quote
              </Button>
            </Link>
            <Link href="/tools/import-duty-checker">
              <Button variant="outline" size="lg">
                Check HS 7604 Import Duty
              </Button>
            </Link>
          </div>
        </div>

        {/* Verified Tariff & Trade Measure Box */}
        <div className="bg-light-gray rounded-2xl p-8 border border-slate-200 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-200">
            <div>
              <div className="text-xs uppercase font-heading font-semibold text-blue tracking-wider">
                VERIFIED TARIFF SCHEDULE (HS 7604)
              </div>
              <h3 className="text-xl font-bold font-heading text-navy mt-0.5">
                Applicable Customs Duty & Trade Preference
              </h3>
            </div>
            <div className="text-xs text-slate-500 font-mono">
              Last Verified: {market.verifiedAt} by {market.verifiedBy}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <div className="text-xs text-slate-500 mb-1">Harmonized Tariff (HS)</div>
              <div className="text-base font-bold font-mono text-navy">{market.hsCode}</div>
              <div className="text-xs text-slate-400 mt-1">Aluminium bars, rods and profiles</div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <div className="text-xs text-slate-500 mb-1">Standard MFN Duty Rate</div>
              <div className="text-base font-bold text-slate-700">{market.mfnRate}</div>
              <div className="text-xs text-slate-400 mt-1">Non-preferential baseline</div>
            </div>

            <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200">
              <div className="text-xs font-semibold text-emerald-800 mb-1">Preferential FTA Tariff</div>
              <div className="text-base font-extrabold text-emerald-900">{market.cptppRate}</div>
              <div className="text-xs text-emerald-700 mt-1">Under {market.fta}</div>
            </div>
          </div>

          {/* Trade Remedy & Source citation */}
          <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2 text-xs text-slate-600">
            <div className="font-bold text-navy">Trade Remedy & Supply Chain Insight:</div>
            <p className="leading-relaxed">{market.tradeRemedyNotes}</p>
            <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-400">
              <span>Source Authority: {market.sourceName}</span>
              <a
                href={market.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue hover:underline flex items-center gap-1 font-medium"
              >
                CBSA Tariff Reference <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Ocean Freight & Logistics */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold font-heading text-navy flex items-center gap-2">
            <Ship className="w-6 h-6 text-blue" />
            Shipping Routes & Incoterms to {market.country}
          </h3>
          <ul className="space-y-2 text-sm text-slate-600">
            {market.logistics.map((line: string, i: number) => (
              <li key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue shrink-0 mt-0.5" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* FAQs */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold font-heading text-navy flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-blue" />
            Frequently Asked Questions for {market.country} Sourcing
          </h3>
          <div className="space-y-3">
            {market.faqs.map((faq: any, i: number) => (
              <div key={i} className="bg-light-gray p-5 rounded-xl border border-slate-200 space-y-2">
                <h4 className="font-bold text-sm text-navy font-heading">{faq.q}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Conversion Banner */}
        <div className="bg-navy text-white rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold font-heading text-white">
              Ready to Sourced for {market.country}?
            </h3>
            <p className="text-sm text-slate-300 mt-1">
              Submit your CAD drawings to receive a direct FOB / CIF quotation and lead time schedule.
            </p>
          </div>
          <Link href={`/rfq?country=${market.code}`} className="shrink-0">
            <Button variant="cta" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Start RFQ for {market.country}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
