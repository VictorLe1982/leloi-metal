'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Cookie, X } from 'lucide-react';

const CONSENT_KEY = 'leloi_consent';
const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;

type ConsentValue = 'granted' | 'denied';

function persist(value: ConsentValue) {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // Storage blocked — the choice simply will not persist across visits.
  }
  window.gtag?.('consent', 'update', { analytics_storage: value });
}

/**
 * Analytics consent banner backing Google Consent Mode v2.
 *
 * Hidden entirely when no GA4 measurement ID is configured, so we never ask for
 * consent we have no use for.
 */
export const ConsentBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!GA4_ID || GA4_ID.startsWith('G-XXXX')) return;
    try {
      if (!localStorage.getItem(CONSENT_KEY)) setIsVisible(true);
    } catch {
      setIsVisible(true);
    }
  }, []);

  if (!isVisible) return null;

  const decide = (value: ConsentValue) => {
    persist(value);
    setIsVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Analytics cookie consent"
      className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6"
    >
      <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-2xl p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center gap-5">
        <div className="flex items-start gap-3 flex-1">
          <Cookie className="w-5 h-5 text-blue shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            We use analytics cookies to understand which technical pages and tools are useful, so we
            can improve them. They are set only if you accept. Read our{' '}
            <Link href="/legal/cookie-policy" className="text-blue font-semibold hover:underline">
              Cookie Policy
            </Link>
            .
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => decide('denied')}
            className="px-4 py-2.5 rounded-lg border border-slate-200 text-sm font-heading font-semibold text-slate-600 hover:bg-light-gray transition-colors"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => decide('granted')}
            className="px-5 py-2.5 rounded-lg bg-blue text-white text-sm font-heading font-semibold hover:bg-blue-hover transition-colors"
          >
            Accept analytics
          </button>
          <button
            type="button"
            onClick={() => decide('denied')}
            aria-label="Dismiss and decline analytics cookies"
            className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-light-gray transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
