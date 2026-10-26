import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Flame, Snowflake, ShieldCheck, CheckCircle2, ArrowRight, Layers } from 'lucide-react';
import { Button } from '@leloi/ui';

export const ThermalBreakFeature: React.FC = () => {
  return (
    <section id="thermal-break" className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Diagram / Cross-Section */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white p-4 shadow-sm">
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="/media/architectural/details/architectural-thermal-break-detail-01.webp"
                  alt="Technical cross-section detail of architectural aluminium profile with Polyamide PA66 GF25 thermal break barrier"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Technical Callout Annotations */}
              <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2 rounded bg-blue-50/70 border border-blue-100">
                  <span className="block font-semibold text-navy">Exterior Profile</span>
                  <span className="text-[11px] text-slate-500">Weather-Facing 6063</span>
                </div>
                <div className="p-2 rounded bg-amber-50/70 border border-amber-200">
                  <span className="block font-semibold text-amber-800">PA66 GF25</span>
                  <span className="text-[11px] text-amber-700">Polyamide Thermal Strip</span>
                </div>
                <div className="p-2 rounded bg-slate-100 border border-slate-200">
                  <span className="block font-semibold text-navy">Interior Profile</span>
                  <span className="text-[11px] text-slate-500">Room-Facing 6063</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Engineering Explanation */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-navy text-xs font-semibold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-blue" />
              <span>Thermal Insulation Engineering</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy tracking-tight">
              Polyamide PA66 GF25 Thermal-Break Technology
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Standard aluminium extrusions conduct heat rapidly. LELOI METAL thermal-break systems mechanically crimp high-strength <strong>Polyamide PA66 GF25</strong> (25% glass-fiber reinforced) insulating strips between the interior and exterior aluminium chambers. This structural barrier interrupts conductive thermal bridging across the building envelope.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-rose-600">
                  <Flame className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">Heat Transfer Block</span>
                </div>
                <p className="text-xs text-slate-600">
                  Drastically reduces solar heat gain in tropical climates and retains indoor heating in temperate zones.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-cyan-600">
                  <Snowflake className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">Anti-Condensation</span>
                </div>
                <p className="text-xs text-slate-600">
                  Maintains interior profile surface temperature above dew point, preventing condensation moisture and mold.
                </p>
              </div>
            </div>

            {/* Zero Unverified Values Provenance Disclaimer */}
            <div className="p-3.5 rounded-lg bg-blue-50/60 border border-blue-200 text-xs text-slate-700">
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <p className="leading-normal">
                  <strong>Engineering Note:</strong> Total window thermal transmittance (\(U_w\)) and acoustic ratings depend on system profile depth, glass package (single, double IGU, or laminated), cavity spacer type, and installation configuration. Project-specific thermal simulations can be calculated upon drawing submission.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link href="/rfq?division=architectural&family=windows-doors&system=thermal-break">
                <Button className="bg-navy hover:bg-blue-900 text-white text-xs px-5 py-2.5 rounded-lg flex items-center gap-2">
                  <span>Inquire for Thermal-Break Extrusions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
