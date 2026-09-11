'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  HelpCircle,
  ChevronDown,
  FileDown,
  FileUp,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Download
} from 'lucide-react';
import { Button } from '@leloi/ui';

interface FaqItem {
  q: string;
  a: string;
  hasFootnote?: boolean;
}

const FAQS: FaqItem[] = [
  {
    q: 'What aluminium alloys and tempers are used for your window and door systems?',
    a: 'We manufacture architectural profiles primarily using high-grade 6063-T5 and 6063-T6. 6063 offers superior surface smoothness for architectural anodizing and AkzoNobel powder coating, combined with optimal mechanical strength for structural sash and frame profiles.'
  },
  {
    q: 'Can LELOI METAL develop custom proprietary extrusion dies for our project?',
    a: 'Yes. We specialize in custom tooling for commercial fabricators and facade contractors. Simply send your 2D CAD (DWG/DXF) or 3D STEP models. Our engineering team conducts design-for-manufacturing (DFM) analysis, produces the hardened die tooling, and provides physical extrusion samples for dimension verification.'
  },
  {
    q: 'What is the minimum order quantity (MOQ) for custom architectural profiles?',
    a: 'For custom dies, our standard minimum order quantity is typically 1,000 to 3,000 kg per die run. For volume commercial projects, full 20GP or 40HQ container loads offer the most competitive freight and unit economics.'
  },
  {
    q: 'How does your Polyamide PA66 GF25 thermal-break system perform?',
    a: 'Our thermal-break profiles utilize mechanically crimped 25% glass-fiber reinforced Polyamide (PA66 GF25) insulating bars. This structural composite interrupts conductive thermal flow between interior and exterior aluminium faces, eliminating condensation risk and reducing heating and cooling loads.'
  },
  {
    q: 'What warranty is offered on AkzoNobel architectural powder coatings?',
    a: 'We offer warranties up to 10 years* on certified AkzoNobel architectural powder coating systems applied in our automated vertical and horizontal coating lines.',
    hasFootnote: true
  },
  {
    q: 'How are aluminium profiles packaged to prevent damage during ocean transit?',
    a: 'Every extrusion is protected with UV-resistant low-tack protective film, wrapped in bundles with high-density pearl foam interleaving, and secured in ISPM-15 compliant fumigated timber crates or steel racks. Desiccant packs are inserted to prevent transit moisture buildup inside shipping containers.'
  },
  {
    q: 'What are the typical lead times for tooling and volume export production?',
    a: 'New die tooling and first-article extrusion sampling typically requires 15 to 20 business days. Upon sample approval, volume extrusion, surface finishing, and container stuffing take approximately 20 to 25 business days.'
  }
];

export const DossierFaqAndCta: React.FC<{
  rfqHref?: string;
  uploadHref?: string;
}> = ({
  rfqHref = '/rfq?division=architectural&family=windows-doors',
  uploadHref = '/rfq?division=architectural&family=windows-doors&mode=upload'
}) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="space-y-16">
      {/* Section 16: Downloads & Technical Inquiry */}
      <section id="downloads" className="py-12 bg-slate-900 text-white rounded-3xl mx-4 sm:mx-6 lg:mx-8 px-6 sm:px-12 scroll-mt-28">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-3">
            <span className="text-xs font-mono uppercase text-blue-400 font-semibold tracking-wider">
              CAD & Technical Documentation
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
              Download Technical Catalog & CAD Profiles
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Access comprehensive extrusion cross-section drawings, system die catalogues, and structural moment-of-inertia specifications for your engineering calculations.
            </p>
          </div>

          <div className="md:col-span-5 flex flex-col sm:flex-row md:flex-col gap-3">
            <Link href={uploadHref} className="w-full">
              <Button className="w-full bg-[#2F7BFF] hover:bg-blue-600 text-white font-semibold text-xs py-3 rounded-xl flex items-center justify-center gap-2">
                <FileUp className="w-4 h-4" />
                <span>Request CAD / DWG Library</span>
              </Button>
            </Link>

            <Link href={rfqHref} className="w-full">
              <Button
                variant="outline"
                className="w-full border-slate-700 text-slate-200 hover:bg-slate-800 hover:text-white font-semibold text-xs py-3 rounded-xl flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>Download Systems Overview</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 17: Frequently Asked Questions */}
      <section id="faq" className="py-8 scroll-mt-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-50 text-[#0A2D5B] text-xs font-semibold uppercase tracking-wider mb-2">
              <HelpCircle className="w-3.5 h-3.5 text-[#2F7BFF]" />
              <span>Direct Manufacturer Answers</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0A2D5B] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Clear technical answers regarding alloys, custom dies, thermal barriers, surface finishes, and export freight.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-bold font-heading text-[#0A2D5B]">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-blue-600' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      <p>{faq.a}</p>
                      {faq.hasFootnote && (
                        <p className="mt-3 text-[11px] text-slate-500 italic bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                          *Warranty Notice: Warranty availability and duration depend on the approved coating system, project location, environmental exposure, surface preparation and applicable warranty conditions.
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 18: RFQ Integration & Final Action Trigger */}
      <section id="rfq-cta" className="py-12 pb-20 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-[#0A2D5B] via-[#0D3B75] to-slate-900 text-white p-8 sm:p-14 overflow-hidden shadow-xl border border-blue-900/50">
            {/* Background pattern */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)',
                backgroundSize: '24px 24px'
              }}
            />

            <div className="relative z-10 max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
                <span>Start Your Architectural Sourcing</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight leading-tight">
                Have an Architectural Window or Door Project?
              </h2>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                Connect directly with our senior facade engineering team in Vietnam. Submit your profile requirements, opening schedules, or architectural drawings for a formal technical quotation within 24 hours.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link href={rfqHref}>
                  <Button
                    size="lg"
                    className="bg-[#2F7BFF] hover:bg-blue-600 text-white font-semibold px-7 py-3 rounded-xl shadow-lg shadow-blue-500/25 flex items-center gap-2 transition-transform active:scale-95"
                  >
                    <span>Send Project Requirement</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>

                <Link href={uploadHref}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-slate-500 text-white hover:bg-white/10 font-semibold px-7 py-3 rounded-xl flex items-center gap-2"
                  >
                    <FileUp className="w-4 h-4 text-blue-400" />
                    <span>Upload Drawing (DWG / STEP / PDF)</span>
                  </Button>
                </Link>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-300 border-t border-blue-900/60">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>No Middleman Markup</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Direct Factory Port FOB / CIF</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Strict NDA Protection for Proprietary Dies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
