import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
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

const COUNTRY_MARKETS: Record<string, any> = {
  canada: {
    country: 'Canada',
    code: 'CA',
    title: 'Aluminium Extrusion Sourcing Guide for Canadian Buyers',
    fta: 'CPTPP (Comprehensive and Progressive Agreement for Trans-Pacific Partnership)',
    overview:
      'Canada represents a primary strategic export market for Vietnamese aluminium extrusions. With zero tariffs under CPTPP for originating goods, Canadian fabricators, solar developers, and OEMs actively diversify from high-tariff jurisdictions.',
    hsCode: '7604.10, 7604.21, 7604.29',
    mfnRate: '0% – 5.0%',
    cptppRate: '0% (Duty Free with valid CPTPP Certificate of Origin)',
    sourceUrl: 'https://www.cbsa-asfc.gc.ca/trade-commerce/tariff-tarif/2026/01-99/01-99-t2026-eng.pdf',
    sourceName: 'Canada Border Services Agency (CBSA) Customs Tariff Schedule',
    verifiedAt: '2026-09-01',
    verifiedBy: 'Compliance Officer (LELOI EXIM)',
    tradeRemedyNotes:
      'Certain aluminium extrusions originating from China remain subject to SIMA anti-dumping and countervailing duties in Canada. Sourcing verified originating extrusions from Vietnam provides legal compliance and substantial duty savings.',
    logistics: [
      'Direct ocean container shipping from Hai Phong or Cat Lai (VN) to Port of Vancouver (approx. 18–24 days transit)',
      'Intermodal rail delivery to Calgary, Edmonton, Toronto, and Montreal',
      'Incoterms: FOB Vietnam sea ports, CFR / CIF Vancouver or Montreal'
    ],
    targetBuyers: ['Solar mounting rail fabricators', 'Curtain wall facade contractors', 'OEM equipment builders', 'Distribution stockists'],
    faqs: [
      {
        q: 'How does LELOI METAL prove origin under CPTPP for Canadian customs?',
        a: 'Every export shipment is accompanied by a legally verified Certificate of Origin (Form CPTPP) issued in accordance with Chapter 3 Rules of Origin, verifying sufficient processing from billet to finished profile in Vietnam.'
      },
      {
        q: 'What standard aluminium alloys do Canadian buyers typically import?',
        a: '6063-T5/T6 for architectural systems and solar frames, and 6061-T6 for structural and CNC machined industrial components.'
      }
    ]
  },
  germany: {
    country: 'Germany',
    code: 'DE',
    title: 'Aluminium Extrusion Sourcing Guide for German & EU Buyers',
    fta: 'EVFTA (EU-Vietnam Free Trade Agreement)',
    overview:
      'Germany is Europe’s largest industrial consumer of precision aluminium profiles. Sourcing through LELOI METAL leverages preferential tariffs under EVFTA, strict EN 755 quality compliance, and complete CBAM carbon documentation.',
    hsCode: '7604.21, 7604.29',
    mfnRate: '7.5%',
    cptppRate: 'Preferential rate transitioning to 0% under EVFTA Protocol',
    sourceUrl: 'https://trade.ec.europa.eu/access-to-markets/en/content/eu-vietnam-free-trade-agreement',
    sourceName: 'European Commission Access2Markets Database',
    verifiedAt: '2026-09-01',
    verifiedBy: 'Compliance Officer (LELOI EXIM)',
    tradeRemedyNotes:
      'EU anti-dumping duties apply on specific Chinese extruded profiles. Vietnamese origin with valid EUR.1 Certificate of Origin qualifies for EVFTA preferential tariff treatment without EU AD duties.',
    logistics: [
      'Direct sea freight from Vietnam ports to Port of Hamburg, Bremerhaven, or Rotterdam (approx. 28–34 days transit)',
      'Incoterms: FOB Vietnam sea ports, CIF Hamburg / Rotterdam'
    ],
    targetBuyers: ['Automation frame integrators', 'Inverter and heat sink manufacturers', 'Specialist facade fabricators'],
    faqs: [
      {
        q: 'How does LELOI METAL address the EU Carbon Border Adjustment Mechanism (CBAM)?',
        a: 'We calculate embedded direct and indirect greenhouse gas emissions in accordance with EU Regulation 2023/956, providing quarterly carbon reporting data sheets for your CBAM declarants.'
      }
    ]
  }
};

export async function generateMetadata({
  params
}: {
  params: Promise<{ country: string }>;
}): Promise<Metadata> {
  const { country } = await params;
  const market = COUNTRY_MARKETS[country] || COUNTRY_MARKETS['canada'];

  return {
    title: `${market.title} | LELOI METAL`,
    description: market.overview
  };
}

export default async function MarketDetailPage({
  params
}: {
  params: Promise<{ country: string }>;
}) {
  const { country } = await params;
  const market = COUNTRY_MARKETS[country] || COUNTRY_MARKETS['canada'];

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-[#2F7BFF]">Home</Link>
          <span>/</span>
          <Link href="/markets" className="hover:text-[#2F7BFF]">Export Markets</Link>
          <span>/</span>
          <span className="text-[#0A2D5B] font-semibold">{market.country}</span>
        </nav>

        {/* Hero */}
        <div className="space-y-4 border-b border-[#E2E8F0] pb-10">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[#0A2D5B] bg-[#0A2D5B]/5 px-2.5 py-1 rounded border border-[#0A2D5B]/10">
              COUNTRY DOSSIER: {market.code}
            </span>
            <VerificationStatusBadge status={PublicationStatus.VERIFIED} />
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0A2D5B]">
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
        <div className="bg-[#F1F4F8] rounded-2xl p-8 border border-[#E2E8F0] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#E2E8F0]">
            <div>
              <div className="text-xs uppercase font-heading font-semibold text-[#2F7BFF] tracking-wider">
                VERIFIED TARIFF SCHEDULE (HS 7604)
              </div>
              <h3 className="text-xl font-bold font-heading text-[#0A2D5B] mt-0.5">
                Applicable Customs Duty & Trade Preference
              </h3>
            </div>
            <div className="text-xs text-slate-500 font-mono">
              Last Verified: {market.verifiedAt} by {market.verifiedBy}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-xl border border-[#E2E8F0]">
              <div className="text-xs text-slate-500 mb-1">Harmonized Tariff (HS)</div>
              <div className="text-base font-bold font-mono text-[#0A2D5B]">{market.hsCode}</div>
              <div className="text-xs text-slate-400 mt-1">Aluminium bars, rods and profiles</div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-[#E2E8F0]">
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
          <div className="p-4 bg-white rounded-xl border border-[#E2E8F0] space-y-2 text-xs text-slate-600">
            <div className="font-bold text-[#0A2D5B]">Trade Remedy & Supply Chain Insight:</div>
            <p className="leading-relaxed">{market.tradeRemedyNotes}</p>
            <div className="pt-2 border-t border-[#E2E8F0] flex items-center justify-between text-[11px] text-slate-400">
              <span>Source Authority: {market.sourceName}</span>
              <a
                href={market.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2F7BFF] hover:underline flex items-center gap-1 font-medium"
              >
                CBSA Tariff Reference <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Ocean Freight & Logistics */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold font-heading text-[#0A2D5B] flex items-center gap-2">
            <Ship className="w-6 h-6 text-[#2F7BFF]" />
            Shipping Routes & Incoterms to {market.country}
          </h3>
          <ul className="space-y-2 text-sm text-slate-600">
            {market.logistics.map((line: string, i: number) => (
              <li key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2F7BFF] shrink-0 mt-0.5" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* FAQs */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold font-heading text-[#0A2D5B] flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-[#2F7BFF]" />
            Frequently Asked Questions for {market.country} Sourcing
          </h3>
          <div className="space-y-3">
            {market.faqs.map((faq: any, i: number) => (
              <div key={i} className="bg-[#F1F4F8] p-5 rounded-xl border border-[#E2E8F0] space-y-2">
                <h4 className="font-bold text-sm text-[#0A2D5B] font-heading">{faq.q}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Conversion Banner */}
        <div className="bg-[#0A2D5B] text-white rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
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
