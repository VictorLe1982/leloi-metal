import React from 'react';
import Link from 'next/link';
import { ChevronRight, Building2 } from 'lucide-react';
import { COMPANY, FACTORY_ADDRESS } from '@/data/company';

interface LegalPageShellProps {
  title: string;
  intro: string;
  lastUpdated: string;
  children: React.ReactNode;
}

/**
 * Shared chrome for the legal policy pages.
 *
 * The pending-registration notice is deliberate: company registration number,
 * registered address and legal representative are UNVERIFIED (GAPS.md GAP-05).
 * We state that openly rather than publishing placeholder corporate details.
 */
export const LegalPageShell: React.FC<LegalPageShellProps> = ({
  title,
  intro,
  lastUpdated,
  children
}) => (
  <div className="min-h-screen bg-white">
    <section className="bg-navy-dark text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-white/10">
      <div className="max-w-3xl mx-auto">
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-slate-400">
            <li>
              <Link href="/" className="hover:text-blue-300 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            </li>
            <li className="text-white font-medium">{title}</li>
          </ol>
        </nav>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-heading tracking-tight">{title}</h1>
        <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">{intro}</p>
        <p className="mt-4 text-xs font-mono text-slate-400">Last updated: {lastUpdated}</p>
      </div>
    </section>

    <section className="py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8 text-sm text-slate-700 leading-relaxed">
        {children}

        <div className="mt-10 p-5 rounded-xl bg-light-gray border border-slate-200 flex items-start gap-3">
          <Building2 className="w-5 h-5 text-blue shrink-0 mt-0.5" />
          <div className="text-xs text-slate-700 leading-relaxed space-y-1">
            <span className="font-bold text-navy block">Operator of this website</span>
            <p>{COMPANY.relationship}</p>
            <p>
              <span className="font-semibold">Manufacturing facility:</span>{' '}
              {FACTORY_ADDRESS.oneLine}
            </p>
            <p>
              <span className="font-semibold">Enquiries:</span>{' '}
              <a href={`mailto:${COMPANY.salesEmail}`} className="text-blue hover:underline">
                {COMPANY.salesEmail}
              </a>
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-200 text-xs text-slate-500">
          Questions about this policy?{' '}
          <Link href="/contact" className="text-blue font-semibold hover:underline">
            Contact our team
          </Link>
          . Other policies:{' '}
          <Link href="/legal/privacy" className="text-blue hover:underline">
            Privacy
          </Link>
          {' · '}
          <Link href="/legal/terms" className="text-blue hover:underline">
            Terms
          </Link>
          {' · '}
          <Link href="/legal/cookie-policy" className="text-blue hover:underline">
            Cookies
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export const LegalSection: React.FC<{ heading: string; children: React.ReactNode }> = ({
  heading,
  children
}) => (
  <div className="space-y-2.5">
    <h2 className="text-lg font-bold font-heading text-navy">{heading}</h2>
    {children}
  </div>
);
