import React from 'react';
import type { Metadata } from 'next';

const BASE_URL = 'https://leloimetal.com';
const CANONICAL = `${BASE_URL}/tools/import-duty-checker`;

export const metadata: Metadata = {
  title: 'Aluminium Import Duty Checker | HS 7604 Tariff & FTA Rates | LELOI METAL',
  description:
    'Check indicative MFN and FTA preferential duty rates for aluminium extrusions under HS 7604 imported from Vietnam. Covers CPTPP, EVFTA and VKFTA with links to official customs sources.',
  keywords: [
    'hs 7604 import duty',
    'aluminium extrusion tariff calculator',
    'cptpp aluminium duty rate',
    'evfta aluminium tariff vietnam',
    'aluminium import duty from vietnam'
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    title: 'Aluminium Import Duty Checker (HS 7604) | LELOI METAL',
    description:
      'Indicative MFN and FTA preferential duty rates for aluminium profiles imported from Vietnam.',
    url: CANONICAL,
    siteName: 'LELOI METAL'
  }
};

const softwareJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Aluminium Import Duty Checker (HS 7604)',
  url: CANONICAL,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Any (web browser)',
  description:
    'Look up indicative MFN and free trade agreement preferential duty rates for aluminium extrusions under HS heading 7604 imported from Vietnam into major export markets.',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  publisher: { '@type': 'Organization', name: 'LELOI METAL', url: BASE_URL }
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Import Duty Checker', item: CANONICAL }
  ]
};

export default function DutyCheckerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
