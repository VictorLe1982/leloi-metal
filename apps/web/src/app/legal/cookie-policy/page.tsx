import React from 'react';
import type { Metadata } from 'next';
import { LegalPageShell, LegalSection } from '@/components/legal/LegalPageShell';

const LAST_UPDATED = '17 September 2026';

export const metadata: Metadata = {
  title: 'Cookie Policy | LELOI METAL',
  description:
    'Which cookies leloimetal.com sets, what each one does, how long it lasts, and how to control or withdraw your consent.',
  alternates: { canonical: 'https://leloimetal.com/legal/cookie-policy' }
};

const COOKIES = [
  {
    name: 'leloi_session',
    category: 'Strictly necessary',
    purpose:
      'Authenticates internal LELOI METAL staff on the private administration portal. Never set for public visitors.',
    duration: '8 hours'
  },
  {
    name: 'leloi_consent',
    category: 'Strictly necessary',
    purpose:
      'Remembers your analytics choice so you are not asked again on every visit.',
    duration: '12 months'
  },
  {
    name: '_ga / _ga_*',
    category: 'Analytics (consent required)',
    purpose:
      'Google Analytics 4. Measures which pages and technical resources visitors use so we can improve them. Set only after you accept analytics.',
    duration: 'Up to 24 months'
  }
];

export default function CookiePolicyPage() {
  return (
    <LegalPageShell
      title="Cookie Policy"
      intro="This page lists the cookies leloimetal.com may set, what each one is for, and how to change your choice at any time."
      lastUpdated={LAST_UPDATED}
    >
      <LegalSection heading="1. What cookies are">
        <p>
          Cookies are small text files stored by your browser. Some are required for the site to
          function; others help us understand how the site is used. We group them into strictly
          necessary cookies, which are always active, and analytics cookies, which are set only with
          your consent.
        </p>
      </LegalSection>

      <LegalSection heading="2. Cookies we use">
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-light-gray border-b border-slate-200 text-navy uppercase tracking-wider">
                <th className="py-3 px-4 font-bold">Cookie</th>
                <th className="py-3 px-4 font-bold">Category</th>
                <th className="py-3 px-4 font-bold">Purpose</th>
                <th className="py-3 px-4 font-bold">Duration</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              {COOKIES.map((cookie) => (
                <tr key={cookie.name}>
                  <td className="py-3 px-4 font-mono text-navy whitespace-nowrap">
                    {cookie.name}
                  </td>
                  <td className="py-3 px-4">{cookie.category}</td>
                  <td className="py-3 px-4 leading-relaxed">{cookie.purpose}</td>
                  <td className="py-3 px-4 whitespace-nowrap">{cookie.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500">
          We do not use advertising, retargeting or social media tracking cookies on this site.
        </p>
        <div className="p-3 rounded-lg bg-light-gray border border-slate-200 text-xs text-slate-600 leading-relaxed">
          <strong className="text-navy">Consent Mode v2:</strong> analytics storage defaults to
          denied. No <span className="font-mono">_ga</span> cookie is written and no measurement
          data is transmitted until you accept in the banner.
        </div>
      </LegalSection>

      <LegalSection heading="3. Managing your choice">
        <p>
          Analytics cookies are set only after you accept them in our consent banner. You can change
          or withdraw that choice at any time through the banner, or by clearing cookies for
          leloimetal.com in your browser settings. Blocking strictly necessary cookies will prevent
          the staff portal from functioning, but will not affect browsing the public site.
        </p>
      </LegalSection>

      <LegalSection heading="4. Third-party cookies">
        <p>
          Where analytics consent is given, Google Analytics sets cookies under its own terms. We
          operate Google Analytics with IP anonymisation and Consent Mode, so no analytics data is
          transmitted before you consent.
        </p>
      </LegalSection>

      <LegalSection heading="5. More information">
        <p>
          How we handle personal data more broadly — including engineering drawings you upload — is
          described in our Privacy Policy.
        </p>
      </LegalSection>
    </LegalPageShell>
  );
}
