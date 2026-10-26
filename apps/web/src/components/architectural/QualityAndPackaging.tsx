import React from 'react';
import { ShieldCheck, CheckCircle2, Package, Globe2, FileCheck, Layers } from 'lucide-react';

export const QualityAndPackaging: React.FC = () => {
  return (
    <section id="quality" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Quality Standards Part */}
        <div>
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-50 text-navy text-xs font-semibold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-blue" />
              <span>Inspection & Standards</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy tracking-tight">
              Quality Assurance & Testing Standards
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              Every production heat of architectural aluminium undergoes rigorous metallurgical analysis and dimensional validation before release to finishing and export crating.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <FileCheck className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold font-heading text-navy">Extrusion Standards</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Conforms strictly to <strong>EN 755</strong> and <strong>ASTM B221</strong> for alloy chemistry, grain structure, and mechanical properties.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <FileCheck className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold font-heading text-navy">Dimensional Tolerances</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Manufactured to precision tolerance standards per <strong>EN 755-9</strong> and <strong>DIN 17615</strong> for tight architectural mating.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <FileCheck className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold font-heading text-navy">Chemical Spectrometry</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Optical emission spectrometer testing on every billet lot to verify exact 6063 alloy element percentages (Si, Mg, Fe).
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <FileCheck className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold font-heading text-navy">Hardness & Adhesion</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Webster and Barcol hardness verification post-aging; cross-hatch and impact testing for powder coating adhesion.
              </p>
            </div>
          </div>
        </div>

        {/* Packaging & Crating Part */}
        <div id="packaging" className="pt-10 border-t border-slate-200 scroll-mt-28">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-50 text-navy text-xs font-semibold uppercase tracking-wider mb-2">
              <Package className="w-3.5 h-3.5 text-blue" />
              <span>Export Protection</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy tracking-tight">
              Seaworthy Export Packaging & Logistics
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              Designed for long-distance international ocean freight, our multi-layer packaging system ensures aluminium profiles arrive scratch-free and ready for installation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <span className="text-xs font-bold font-mono text-blue-600 uppercase">Layer 01</span>
              <h3 className="text-base font-bold font-heading text-navy">Surface Film & Foam Interleaving</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Custom printed UV-resistant PE protective tape applied along exposed profile surfaces. High-density pearl foam sheets interleaved between profile bundles to eliminate transit friction.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <span className="text-xs font-bold font-mono text-blue-600 uppercase">Layer 02</span>
              <h3 className="text-base font-bold font-heading text-navy">Fumigated Wooden Crating</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                ISPM-15 heat-treated, fumigated timber crates or reinforced steel-frame cages tailored to exact profile lengths up to 6.5 meters. Integrated forklift skids for safe warehouse offloading.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <span className="text-xs font-bold font-mono text-blue-600 uppercase">Layer 03</span>
              <h3 className="text-base font-bold font-heading text-navy">Ocean Container Loading</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Expert stuffing and blocking in 20GP, 40GP, and 40HQ containers at our Vietnam factory. Desiccant packs and vapor-corrosion inhibitors (VCI) protect against ocean humidity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
