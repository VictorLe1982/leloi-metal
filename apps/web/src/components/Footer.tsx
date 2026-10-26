import React from 'react';
import Link from 'next/link';
import { BrandLogo } from '@leloi/ui';
import { ShieldCheck, Mail, MapPin, ArrowRight } from 'lucide-react';
import { getProductDivisions } from '@leloi/types';
import { COMPANY, FACTORY_ADDRESS, CERTIFICATIONS } from '@/data/company';
import { CAPABILITY_DOSSIERS } from '@/data/capabilities';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-dark text-slate-300 border-t border-slate-800">
      {/* Top CTA Strip */}
      <div className="bg-navy border-b border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="text-xs uppercase font-heading font-semibold tracking-wider text-blue mb-2">
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
              className="inline-flex items-center justify-center font-heading font-semibold text-sm px-6 py-3.5 rounded-md bg-blue text-white hover:bg-blue-hover shadow-md transition-all gap-2"
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
            <BrandLogo variant="white" width={225} />
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed mt-4">
              Precision aluminium extrusion, CNC machining, surface treatment and OEM manufacturing from Vietnam for global B2B industries.
            </p>
            <div className="pt-2 space-y-3">
              <div>
                <div className="text-xs font-semibold text-white tracking-wide uppercase mb-1">
                  Parent Corporate Entity
                </div>
                <div className="text-sm text-slate-300 font-medium">{COMPANY.legalName}</div>
              </div>

              <div className="flex items-start gap-2.5 text-xs text-slate-400">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-blue" />
                <address className="not-italic leading-relaxed">
                  {FACTORY_ADDRESS.streetAddress}
                  <br />
                  {FACTORY_ADDRESS.ward}, {FACTORY_ADDRESS.region}
                  <br />
                  {FACTORY_ADDRESS.country}
                </address>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-slate-400">
                <Mail className="w-4 h-4 shrink-0 text-blue" />
                <a
                  href={`mailto:${COMPANY.salesEmail}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY.salesEmail}
                </a>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2 text-xs">
              {CERTIFICATIONS.map((cert) => (
                <span
                  key={cert.standard}
                  className="inline-flex items-center gap-1.5 text-emerald-400 font-medium"
                >
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  {cert.standard}
                </span>
              ))}
              <span className="inline-flex items-center gap-1.5 text-emerald-400">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                NDA-protected RFQ handling
              </span>
            </div>
          </div>

          {/* Col 2: Products */}
          <div className="space-y-3 font-heading">
            <h4 className="text-xs uppercase tracking-wider text-white font-semibold">
              Product Solutions
            </h4>
            <ul className="space-y-2 text-sm text-slate-400 font-normal">
              {getProductDivisions().map((div) => (
                <li key={div.slug}>
                  <Link
                    href={`/products/${div.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {div.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Manufacturing Capabilities */}
          <div className="space-y-3 font-heading">
            <h4 className="text-xs uppercase tracking-wider text-white font-semibold">
              Capabilities
            </h4>
            <ul className="space-y-2 text-sm text-slate-400 font-normal">
              {CAPABILITY_DOSSIERS.map((capability) => (
                <li key={capability.slug}>
                  <Link
                    href={`/capabilities/${capability.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {capability.navLabel}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/capabilities/powder-coating"
                  className="hover:text-emerald-400 font-medium transition-colors"
                >
                  Powder Coating (AkzoNobel)
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
                <Link href="/tools/aluminium-weight-calculator" className="hover:text-blue transition-colors font-medium">
                  Weight Calculator (kg/m)
                </Link>
              </li>
              <li>
                <Link href="/tools/import-duty-checker" className="hover:text-blue transition-colors font-medium">
                  Import Duty Checker (HS 7604)
                </Link>
              </li>
              <li>
                <Link href="/tools/alloy-selector" className="hover:text-blue transition-colors font-medium">
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
