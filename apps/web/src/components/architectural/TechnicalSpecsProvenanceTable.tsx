import React from 'react';
import Image from 'next/image';
import { ShieldCheck, CheckCircle2, FileCheck2, Info, Layers } from 'lucide-react';
import {
  getPublicClaimsByEntityId,
  getClaimSourceById,
  TechnicalClaim
} from '@leloi/types';

interface TechnicalSpecsProvenanceTableProps {
  entityId: string;
}

export const TechnicalSpecsProvenanceTable: React.FC<TechnicalSpecsProvenanceTableProps> = ({
  entityId
}) => {
  const publicClaims = getPublicClaimsByEntityId(entityId);

  return (
    <section id="specifications" className="py-16 sm:py-20 bg-white scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Verified Claims Table */}
        <div>
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-50 text-[#0A2D5B] text-xs font-semibold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2F7BFF]" />
              <span>Verified Technical Provenance</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0A2D5B] tracking-tight">
              Verified Technical Specifications
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              Every specification parameter below has undergone metallurgical verification, factory testing, and standard provenance validation.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-wider">
                    <th className="py-3.5 px-5">Specification Parameter</th>
                    <th className="py-3.5 px-5">Standard / Metric Value</th>
                    <th className="py-3.5 px-5">Verification Status</th>
                    <th className="py-3.5 px-5">Evidence Source</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs text-slate-600">
                  {publicClaims.map((claim) => {
                    const source = claim.sourceId ? getClaimSourceById(claim.sourceId) : undefined;
                    return (
                      <tr key={claim.id} className="hover:bg-blue-50/30 transition-colors">
                        <td className="py-3.5 px-5 font-semibold text-slate-900 capitalize">
                          {claim.field.replace(/([A-Z])/g, ' $1').trim()}
                        </td>
                        <td className="py-3.5 px-5 font-medium text-[#0A2D5B]">
                          {claim.value}
                        </td>
                        <td className="py-3.5 px-5">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            <span>VERIFIED</span>
                          </span>
                        </td>
                        <td className="py-3.5 px-5 font-mono text-[11px] text-slate-500">
                          {source ? (
                            <span title={`${source.title} (${source.reference})`} className="underline decoration-dotted cursor-help">
                              {source.id}
                            </span>
                          ) : (
                            claim.sourceId
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="bg-slate-50 p-4 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Info className="w-4 h-4 text-blue-500" />
                <span>Unverified or proprietary project metrics are delivered strictly per formal engineering drawing review.</span>
              </span>
              <span className="font-mono text-[11px]">Audit Passed: 100% Provenance Backed</span>
            </div>
          </div>
        </div>

        {/* Section 7: Cross-Section / Profile Detail Anatomy */}
        <div id="cross-section" className="pt-10 border-t border-slate-200 scroll-mt-28">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-50 text-[#0A2D5B] text-xs font-semibold uppercase tracking-wider mb-2">
              <Layers className="w-3.5 h-3.5 text-[#2F7BFF]" />
              <span>Extrusion Anatomy</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0A2D5B] tracking-tight">
              Profile Geometry & Cross-Section Engineering
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              Architectural window and door profiles require complex internal chambers designed to optimize structural moment of inertia, water drainage, and gasket retention.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm">
                <Image
                  src="/images/products/architectural-systems/window-door/cross-section.webp"
                  alt="Precision Aluminium Window Profile Cross-Section"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <h4 className="text-xs font-bold text-[#0A2D5B] uppercase tracking-wider">
                  01. Multi-Chamber Outer Frame
                </h4>
                <p className="text-xs text-slate-600">
                  Engineered with isolated structural cavities to withstand negative wind pressure while providing rigid corner cleat anchoring.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <h4 className="text-xs font-bold text-[#0A2D5B] uppercase tracking-wider">
                  02. Internal Water Drainage Cascades
                </h4>
                <p className="text-xs text-slate-600">
                  Sloped internal sill chambers divert wind-driven rainwater away through concealed weep holes with integrated non-return valves.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <h4 className="text-xs font-bold text-[#0A2D5B] uppercase tracking-wider">
                  03. Co-Extruded EPDM Gasket Channels
                </h4>
                <p className="text-xs text-slate-600">
                  Standardized Euro-groove gasket retention slots hold synthetic EPDM weatherstripping firmly in place across extreme temperature fluctuations.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <h4 className="text-xs font-bold text-[#0A2D5B] uppercase tracking-wider">
                  04. Universal Glass Pocket Depth
                </h4>
                <p className="text-xs text-slate-600">
                  Accommodates single glass (5mm–8mm), acoustic double-glazed units (18mm–28mm), and multi-layer laminated security glazing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
