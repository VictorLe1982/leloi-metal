import React from 'react';
import Link from 'next/link';
import { Logo } from '@leloi/ui';
import { ShieldCheck, Mail, MapPin, Phone, ArrowRight, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#061D3B] text-slate-300 border-t border-slate-800">
      {/* Top CTA Strip */}
      <div className="bg-[#0A2D5B] border-b border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="text-xs uppercase font-heading font-semibold tracking-wider text-[#2F7BFF] mb-2">
              Ready For Engineering Collaboration
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
              Have an Aluminium Extrusion Drawing to Review?
            </h3>
            <p className="text-sm text-slate-300 mt-2">
              Submit your 2D PDF or 3D STEP/DWG/DXF drawings for comprehensive Design for Manufacturing (DFM) analysis, material selection and direct factory quotation from Vietnam.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              href="/rfq"
              className="inline-flex items-center justify-center font-heading font-semibold text-sm px-6 py-3.5 rounded-md bg-[#2F7BFF] text-white hover:bg-[#1B6BF8] shadow-md transition-all gap-2"
            >
              Start RFQ / Upload Drawing
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/tools/aluminium-weight-calculator"
              className="inline-flex items-center justify-center font-heading font-medium text-sm px-5 py-3.5 rounded-md bg-white/10 text-white hover:bg-white/20 border border-white/20 transition-all"
            >
              Calculate Weight
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand & Parent Info */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="horizontal" theme="dark" width={225} showSlogan={true} />
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed mt-4">
              Precision aluminium extrusion, CNC machining, surface treatment and OEM manufacturing from Vietnam for global B2B industries.
            </p>
            <div className="pt-2">
              <div className="text-xs font-semibold text-white tracking-wide uppercase mb-1">
                Parent Corporate Entity:
              </div>
              <div className="text-sm text-slate-300 font-medium">
                LELOI EXIM GLOBAL CO., LTD
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                Vietnam International Trade & Manufacturing Hub
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-emerald-400 pt-2">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Confidential RFQ file handling & strict NDA protection</span>
            </div>
          </div>

          {/* Col 2: Products */}
          <div className="space-y-3 font-heading">
            <h4 className="text-xs uppercase tracking-wider text-white font-semibold">
              Product Solutions
            </h4>
            <ul className="space-y-2 text-sm text-slate-400 font-normal">
              <li>
                <Link href="/products/custom-aluminium-extrusions" className="hover:text-white transition-colors">
                  Custom Extrusions
                </Link>
              </li>
              <li>
                <Link href="/products/industrial-aluminium-profiles" className="hover:text-white transition-colors">
                  Industrial T-Slot Profiles
                </Link>
              </li>
              <li>
                <Link href="/products/solar-aluminium-profiles" className="hover:text-white transition-colors">
                  Solar Frames & Rails
                </Link>
              </li>
              <li>
                <Link href="/products/architectural-aluminium" className="hover:text-white transition-colors">
                  Architectural Systems
                </Link>
              </li>
              <li>
                <Link href="/products/heat-sink-profiles" className="hover:text-white transition-colors">
                  Heat Sink / Thermal
                </Link>
              </li>
              <li>
                <Link href="/products/oem-aluminium-components" className="hover:text-white transition-colors">
                  OEM Machined Parts
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Manufacturing Capabilities */}
          <div className="space-y-3 font-heading">
            <h4 className="text-xs uppercase tracking-wider text-white font-semibold">
              Capabilities
            </h4>
            <ul className="space-y-2 text-sm text-slate-400 font-normal">
              <li>
                <Link href="/capabilities/aluminium-extrusion" className="hover:text-white transition-colors">
                  Extrusion Presses
                </Link>
              </li>
              <li>
                <Link href="/capabilities/cnc-machining" className="hover:text-white transition-colors">
                  Precision CNC Machining
                </Link>
              </li>
              <li>
                <Link href="/capabilities/anodizing" className="hover:text-white transition-colors">
                  Anodizing & Coloring
                </Link>
              </li>
              <li>
                <Link href="/capabilities/powder-coating" className="hover:text-white transition-colors">
                  Powder Coating
                </Link>
              </li>
              <li>
                <Link href="/capabilities/precision-cutting" className="hover:text-white transition-colors">
                  Mitre & Precision Cutting
                </Link>
              </li>
              <li>
                <Link href="/capabilities/quality-control" className="hover:text-white transition-colors">
                  QC & CMM Inspection
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate & Tools */}
          <div className="space-y-3 font-heading">
            <h4 className="text-xs uppercase tracking-wider text-white font-semibold">
              Tools & Intelligence
            </h4>
            <ul className="space-y-2 text-sm text-slate-400 font-normal">
              <li>
                <Link href="/tools/aluminium-weight-calculator" className="hover:text-[#2F7BFF] transition-colors font-medium">
                  Weight Calculator (kg/m)
                </Link>
              </li>
              <li>
                <Link href="/tools/import-duty-checker" className="hover:text-[#2F7BFF] transition-colors font-medium">
                  Import Duty Checker (HS 7604)
                </Link>
              </li>
              <li>
                <Link href="/tools/alloy-selector" className="hover:text-[#2F7BFF] transition-colors font-medium">
                  Alloy & Temper Selector
                </Link>
              </li>
              <li>
                <Link href="/markets" className="hover:text-white transition-colors">
                  Export Markets Intelligence
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-white transition-colors">
                  Engineering Insights & Guides
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About LELOI METAL
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Export Sales Office
                </Link>
              </li>
              <li>
                <Link href="/admin/login" className="hover:text-slate-200 text-xs text-slate-500 pt-2 block">
                  Staff Portal Login →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright and legal statement */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            © {new Date().getFullYear()} LELOI METAL. All rights reserved. LELOI METAL is a business division of LELOI EXIM GLOBAL.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/legal/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/legal/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/legal/cookie-policy" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
