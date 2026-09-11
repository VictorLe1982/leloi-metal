import React from 'react';
import Link from 'next/link';
import { Wrench, Compass, Scissors, Cpu, Box, ShieldCheck, ArrowRight } from 'lucide-react';
import { Button } from '@leloi/ui';

interface ServiceItem {
  icon: React.ElementType;
  title: string;
  description: string;
  specs: string[];
}

const SERVICES: ServiceItem[] = [
  {
    icon: Compass,
    title: 'Custom Die & Tooling Engineering',
    description:
      'From client 2D CAD or 3D STEP drawings, our tooling team develops proprietary extrusion dies with thermal flow simulation, initial sample testing, and dimensional CMM sign-off.',
    specs: ['Custom extrusion die design', 'Nitride hardened tool steel', 'Prototype sample approval']
  },
  {
    icon: Scissors,
    title: 'Precision Mitre & Cut-to-Length',
    description:
      'Automated double-mitre saw lines cut architectural extrusions to project-specified lengths with strict angular accuracy (90° and 45°), reducing client jobsite waste.',
    specs: ['Tolerances to ±0.5mm', 'Burr-free automated cutting', 'Kit bundling by window unit']
  },
  {
    icon: Cpu,
    title: 'CNC Pre-Routing for Hardware',
    description:
      'Pre-machining of lock mortises, handle spindle holes, weep hole drainage slots, and hinge pockets prior to surface coating or shipment.',
    specs: ['Drainage weep slots', 'Concealed hinge pockets', 'Multi-point lock routing']
  },
  {
    icon: Box,
    title: 'Corner Cleat & Jointing Systems',
    description:
      'Engineering matched cast aluminium corner keys, crimping cleats, and screw-port alignment keys ensuring flawless 45-degree miter corner joint strength.',
    specs: ['Mechanical crimp corners', 'Screw-port alignment', 'Structural joint integrity']
  },
  {
    icon: ShieldCheck,
    title: 'Protective Film & Seaworthy Crating',
    description:
      'Every profile is protected with custom UV-resistant printed PE protective film, foam interleaved, bundled with composite strapping, and packaged into fumigated wooden crates.',
    specs: ['UV-resistant PE film', 'ISPM-15 compliant crates', 'Moisture-barrier wrapping']
  }
];

export const EngineeringAndFabrication: React.FC = () => {
  return (
    <section id="engineering" className="py-16 sm:py-20 bg-white scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-50 text-[#0A2D5B] text-xs font-semibold uppercase tracking-wider mb-2">
            <Wrench className="w-3.5 h-3.5 text-[#2F7BFF]" />
            <span>Downstream Fabrication</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0A2D5B] tracking-tight">
            Engineering & Fabrication Capabilities
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            LELOI METAL provides complete downstream manufacturing from proprietary die tooling to CNC hardware prep and export-ready packaging, reducing fabricator assembly overhead.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200 bg-slate-50/40 hover:bg-white hover:border-blue-200 hover:shadow-sm transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2F7BFF] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold font-heading text-[#0A2D5B]">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/60">
                  <ul className="space-y-1 text-xs text-slate-500">
                    {srv.specs.map((item, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-blue-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}

          {/* CTA Box */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0A2D5B] to-slate-900 text-white space-y-4 flex flex-col justify-between shadow-sm">
            <div className="space-y-2">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Custom Tooling</span>
              <h3 className="text-lg font-bold font-heading text-white">Have a Custom Profile Drawing?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Send your DWG, DXF, or 3D STEP file for immediate DFM review and tool cost evaluation.
              </p>
            </div>

            <div className="pt-4">
              <Link href="/rfq?division=architectural&family=windows-doors&mode=upload">
                <Button className="w-full bg-[#2F7BFF] hover:bg-blue-600 text-white text-xs py-2.5 flex items-center justify-center gap-2 font-semibold">
                  <span>Upload Profile Drawing</span>
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
