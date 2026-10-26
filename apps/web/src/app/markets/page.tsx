import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, Badge, Button } from '@leloi/ui';
import { Globe2, ArrowRight, ShieldCheck, ExternalLink, TrendingUp, Scale } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Aluminium Export Markets & Trade Intelligence | LELOI METAL',
  description:
    'Verified export market intelligence, tariff summaries (HS 7604), trade remedy monitoring and Vietnam sourcing advantages for Canada, Germany, Japan, South Korea, Netherlands and UAE.'
};

const MARKETS_DATA = [
  {
    code: 'CA',
    slug: 'canada',
    name: 'Canada',
    region: 'North America',
    fta: 'CPTPP (Comprehensive and Progressive Agreement for Trans-Pacific Partnership)',
    verifiedTariffRate: '0% (CPTPP preferential rate subject to rules of origin)',
    mfnRate: '0% – 5%',
    keyProducts: ['Solar Mounting Profiles', 'Custom Extrusions', 'Industrial Framing'],
    lastVerified: 'September 2026',
    sourceUrl: 'https://www.cbsa-asfc.gc.ca',
    verifiedBy: 'Compliance Desk'
  },
  {
    slug: 'germany',
    code: 'DE',
    name: 'Germany',
    region: 'Europe (EU)',
    fta: 'EVFTA (EU-Vietnam Free Trade Agreement)',
    verifiedTariffRate: 'Preferential EVFTA schedule transition towards 0%',
    mfnRate: '7.5% (HS 7604.21/29)',
    keyProducts: ['Precision CNC Extrusions', 'Industrial Automation Profiles', 'Heat Sinks'],
    lastVerified: 'September 2026',
    sourceUrl: 'https://trade.ec.europa.eu/access-to-markets',
    verifiedBy: 'Compliance Desk'
  },
  {
    slug: 'japan',
    code: 'JP',
    name: 'Japan',
    region: 'East Asia',
    fta: 'VJEPA & CPTPP Trade Agreements',
    verifiedTariffRate: '0% (Preferential duty under CPTPP/VJEPA)',
    mfnRate: '3.2%',
    keyProducts: ['Precision Machined Components', 'Electronics Enclosures', 'Industrial Profiles'],
    lastVerified: 'September 2026',
    sourceUrl: 'https://www.customs.go.jp',
    verifiedBy: 'Compliance Desk'
  },
  {
    slug: 'south-korea',
    code: 'KR',
    name: 'South Korea',
    region: 'East Asia',
    fta: 'VKFTA (Vietnam-Korea Free Trade Agreement) & RCEP',
    verifiedTariffRate: '0% (VKFTA preferential rate)',
    mfnRate: '8.0%',
    keyProducts: ['Solar Profiles & Carports', 'Heat Sink Profiles', 'OEM Parts'],
    lastVerified: 'September 2026',
    sourceUrl: 'https://www.customs.go.kr',
    verifiedBy: 'Compliance Desk'
  },
  {
    slug: 'uae',
    code: 'AE',
    name: 'United Arab Emirates',
    region: 'Middle East',
    fta: 'Vietnam-UAE CEPA (Comprehensive Economic Partnership Agreement in progress)',
    verifiedTariffRate: '5.0% Standard GCC Custom Duty',
    mfnRate: '5.0%',
    keyProducts: ['Architectural Systems', 'Commercial Facade Profiles', 'Solar Rails'],
    lastVerified: 'September 2026',
    sourceUrl: 'https://www.fca.gov.ae',
    verifiedBy: 'Compliance Desk'
  }
];

export default function MarketsPage() {
  return (
    <div className="min-h-screen bg-light-gray/50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs uppercase font-heading font-semibold tracking-widest text-blue">
            TRADE & TARIFF INTELLIGENCE
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-navy tracking-tight">
            Priority Export Markets
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Verified market intelligence, preferential FTA tariff rates (HS 7604), and supply chain logistics for international buyers sourcing aluminium from Vietnam.
          </p>
        </div>

        {/* Informational Disclaimer Notice */}
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl flex items-start gap-3 text-xs text-slate-600 max-w-4xl mx-auto">
          <ShieldCheck className="w-5 h-5 text-blue shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-navy">Market Intelligence Governance: </strong>
            All tariff rates and trade measures displayed on LELOI METAL are monitored, reviewed and cited directly from official customs portals. Final applicable duty rates remain subject to precise HS classification, Certificate of Origin (Form CPTPP / EUR.1 / VJEPA), and binding customs authority rulings.
          </p>
        </div>

        {/* Markets Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MARKETS_DATA.map((market) => (
            <Card key={market.slug} variant="technical" className="p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm font-bold text-navy bg-navy/5 px-2 py-0.5 rounded border border-navy/10">
                      {market.code}
                    </span>
                    <h3 className="text-xl font-bold font-heading text-navy">
                      {market.name}
                    </h3>
                  </div>
                  <span className="text-[11px] text-slate-400 font-mono">{market.region}</span>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <span className="text-slate-500 block">Trade Agreement (FTA):</span>
                    <span className="font-semibold text-slate-800">{market.fta}</span>
                  </div>

                  <div className="p-2.5 bg-emerald-50 rounded-lg border border-emerald-200">
                    <span className="text-emerald-800 font-semibold block">Preferential Tariff:</span>
                    <span className="text-emerald-950 font-bold">{market.verifiedTariffRate}</span>
                  </div>

                  <div>
                    <span className="text-slate-500 block">Typical Product Focus:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {market.keyProducts.map((p) => (
                        <Badge key={p} variant="default" size="sm">
                          {p}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200 flex justify-between items-center text-[11px] text-slate-400">
                    <span>Verified: {market.lastVerified}</span>
                    <span className="font-mono">{market.verifiedBy}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                <Link
                  href={`/markets/${market.slug}`}
                  className="text-xs font-heading font-semibold text-navy hover:text-blue flex items-center gap-1.5 transition-colors"
                >
                  View Market Dossier & FAQs
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* Interactive Duty Checker Banner */}
        <div className="bg-navy text-white rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 max-w-xl">
            <h3 className="text-2xl font-bold font-heading text-white">
              Looking for Tariff & Duty Calculation for Your HS Code?
            </h3>
            <p className="text-sm text-slate-300">
              Use our interactive Import Duty Checker to compare MFN vs Preferential FTA tariffs for HS 7604 (Aluminium Bars, Rods & Profiles).
            </p>
          </div>
          <Link href="/tools/import-duty-checker" className="shrink-0">
            <Button variant="cta" size="lg" leftIcon={<Scale className="w-4 h-4" />}>
              Open Duty Checker →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
