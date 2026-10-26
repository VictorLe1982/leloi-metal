import React from 'react';
import type { Metadata } from 'next';

const BASE_URL = 'https://leloimetal.com';
const CANONICAL = `${BASE_URL}/tools/alloy-selector`;

export const metadata: Metadata = {
  title: 'Aluminium Alloy & Temper Selector | 6063 vs 6061 vs 6005A | LELOI METAL',
  description:
    'Free alloy selection tool for extruded aluminium. Compare 6063, 6061, 6005A, 6082 and 6060 across strength, extrudability, anodizing quality, machinability and typical applications.',
  keywords: [
    'aluminium alloy selector',
    '6063 vs 6061 aluminium',
    '6005a vs 6082 alloy comparison',
    'aluminium temper t5 t6 difference',
    'which aluminium alloy for extrusion'
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    title: 'Aluminium Alloy & Temper Selector | LELOI METAL',
    description:
      'Compare 6063, 6061, 6005A, 6082 and 6060 on strength, extrudability, anodizing and machinability.',
    url: CANONICAL,
    siteName: 'LELOI METAL'
  }
};

const softwareJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Aluminium Alloy & Temper Selector',
  url: CANONICAL,
  applicationCategory: 'EngineeringApplication',
  operatingSystem: 'Any (web browser)',
  description:
    'Interactive tool that compares extrusion aluminium alloys 6063, 6061, 6005A, 6082 and 6060 across mechanical strength, extrudability, surface finish quality and machinability.',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  publisher: { '@type': 'Organization', name: 'LELOI METAL', url: BASE_URL }
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Alloy & Temper Selector', item: CANONICAL }
  ]
};

export default function AlloySelectorLayout({ children }: { children: React.ReactNode }) {
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
