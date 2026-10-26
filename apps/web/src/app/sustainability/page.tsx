import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@leloi/ui';
import {
  ArrowRight,
  ChevronRight,
  Leaf,
  Recycle,
  FileText,
  Factory,
  Info,
  CheckCircle2
} from 'lucide-react';
import { CERTIFICATIONS } from '@/data/company';

const BASE_URL = 'https://leloimetal.com';

export const metadata: Metadata = {
  title: 'Sustainability & CBAM Readiness | Low-Carbon Aluminium | LELOI METAL',
  description:
    'How LELOI METAL approaches recycled aluminium content, embedded carbon accounting and EU CBAM reporting for HS 7604 aluminium extrusions exported from Vietnam.',
  keywords: [
    'CBAM aluminium extrusion',
    'low carbon aluminium vietnam',
    'recycled aluminium content extrusion',
    'embedded emissions HS 7604',
    'sustainable aluminium supplier vietnam'
  ],
  alternates: { canonical: `${BASE_URL}/sustainability` }
};

const ROADMAP = [
  {
    phase: 'In place',
    title: 'Billet origin traceability',
    detail:
      'Each production batch is linked to its billet supplier and alloy certificate, which is the prerequisite for any downstream emissions calculation.',
    status: 'active' as const
  },
  {
    phase: 'In place',
    title: 'Post-industrial scrap recovery',
    detail:
      'Extrusion butts, offcuts and machining swarf are segregated by alloy and returned to the remelt stream rather than mixed as general waste.',
    status: 'active' as const
  },
  {
    phase: 'In progress',
    title: 'Embedded emissions accounting',
    detail:
      'We are building the direct and indirect emissions dataset per production route required for CBAM reporting on HS 7604 goods.',
    status: 'progress' as const
  },
  {
    phase: 'Planned',
    title: 'Third-party verification',
    detail:
      'Independent verification of the emissions dataset, so declared figures are auditable by EU importers rather than self-asserted.',
    status: 'planned' as const
  }
];

const STATUS_STYLES = {
  active: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  progress: 'bg-blue-50 text-blue-700 border-blue-200',
  planned: 'bg-slate-100 text-slate-600 border-slate-200'
};

export default function SustainabilityPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Sustainability', item: `${BASE_URL}/sustainability` }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* HERO */}
      <section className="bg-gradient-to-br from-emerald-950 via-navy to-navy-dark text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-slate-400">
              <li>
                <Link href="/" className="hover:text-blue-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              </li>
              <li className="text-white font-medium">Sustainability</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
                <Leaf className="w-3.5 h-3.5" />
                Carbon & Trade Compliance
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight leading-tight">
                Sustainability & CBAM Readiness
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Aluminium is infinitely recyclable, but its footprint is decided upstream — at the
                smelter and in the remelt stream. This page sets out what we currently do, what we
                are building, and what we are not yet able to certify.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 space-y-3">
                <div className="text-xs uppercase font-heading font-semibold text-emerald-300 tracking-wider">
                  In Brief
                </div>
                <p className="text-sm text-slate-100 leading-relaxed">
                  LELOI METAL exports aluminium extrusions under HS 7604 from Vietnam. EU importers
                  of these goods carry CBAM reporting obligations. We trace billet origin per batch
                  and recover post-industrial scrap by alloy, and are building a verified embedded
                  emissions dataset to support importer declarations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HONEST STATUS NOTICE */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-amber-50 border-b border-amber-200">
        <div className="max-w-4xl mx-auto flex items-start gap-3">
          <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
            <span className="font-bold block mb-1">What we do and do not claim</span>
            Our facility operates under an {CERTIFICATIONS[0].standard} certified quality management
            system. We do not yet publish a carbon intensity figure, a recycled content percentage
            or an environmental management certification, because none of those has been
            independently verified for our production. If you need a specific emissions figure or
            certification for a tender, tell us at RFQ stage and we will confirm in writing exactly
            what we can and cannot evidence.
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy tracking-tight">
              Where We Actually Are
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              Each item below is marked with its real status rather than presented as a completed
              programme.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ROADMAP.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-3"
              >
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold border ${STATUS_STYLES[item.status]}`}
                >
                  {item.status === 'active' && <CheckCircle2 className="w-3.5 h-3.5" />}
                  {item.phase}
                </span>
                <h3 className="text-base font-bold font-heading text-navy">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <Recycle className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold font-heading text-navy">Material circularity</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Remelting aluminium requires a fraction of the energy of primary production. We
              segregate extrusion butts, offcuts and machining swarf by alloy so they re-enter the
              remelt stream at their original grade instead of being downgraded.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-11 h-11 rounded-xl bg-blue-100 text-blue flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold font-heading text-navy">
              CBAM documentation support
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              EU Regulation 2023/956 places the reporting obligation on the importer. We supply the
              production-route and batch-traceability data our EU customers need for their quarterly
              CBAM reports, alongside the certificate of origin issued under EVFTA.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-11 h-11 rounded-xl bg-slate-200 text-navy flex items-center justify-center">
              <Factory className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold font-heading text-navy">Process efficiency</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Design-for-manufacture review at the die stage reduces wall thickness where it is not
              structurally needed, and cut-to-length supply removes offcut waste from the customer
              assembly line. Less metal moved is less carbon embodied.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-br from-emerald-950 via-navy to-slate-900 text-white p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                Need CBAM or Origin Documentation for Your Import?
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Tell us your destination market and reporting requirement at RFQ stage. Our trade
                compliance desk will confirm in writing which documents accompany your shipment.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link href="/rfq">
                <Button variant="cta" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Start an RFQ
                </Button>
              </Link>
              <Link href="/insights/cbam-guide-for-aluminium-importers">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-emerald-400/40 text-white hover:bg-white/10"
                >
                  Read Our CBAM Guide
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
