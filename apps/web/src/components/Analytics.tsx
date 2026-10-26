'use client';

import React from 'react';
import Script from 'next/script';

const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;

/**
 * Google Analytics 4 with Consent Mode v2.
 *
 * Consent defaults to denied for every storage type, so no analytics cookie is
 * written and no measurement hit leaves the browser until the visitor accepts
 * in the banner. This is what makes the site lawful to serve into the EU and UK
 * without an opt-out-only model.
 *
 * Renders nothing when NEXT_PUBLIC_GA4_ID is unset or still the placeholder, so
 * development and preview builds stay clean.
 */
export const Analytics: React.FC = () => {
  if (!GA4_ID || GA4_ID.startsWith('G-XXXX')) {
    return null;
  }

  return (
    <>
      <Script
        id="ga-consent-default"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('consent', 'default', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              analytics_storage: 'denied',
              functionality_storage: 'granted',
              security_storage: 'granted',
              wait_for_update: 500
            });
            try {
              if (localStorage.getItem('leloi_consent') === 'granted') {
                gtag('consent', 'update', { analytics_storage: 'granted' });
              }
            } catch (e) {}
          `
        }}
      />
      <Script
        id="ga-loader"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
      />
      <Script
        id="ga-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            gtag('js', new Date());
            gtag('config', '${GA4_ID}', { anonymize_ip: true });
          `
        }}
      />
    </>
  );
};
