import React from 'react';
import type { Metadata } from 'next';

const BASE_URL = 'https://leloimetal.com';

/**
 * The catalogue index is a client component (faceted filtering), so its
 * metadata lives here. Nested product routes override this with their own.
 */
export const metadata: Metadata = {
  title: 'Aluminium Product Catalogue | 60 Extrusion Families | LELOI METAL',
  description:
    'Browse 60 aluminium extrusion families across custom profiles, architectural systems, industrial framing, solar, thermal management and OEM components. Filter by alloy, finish and application.',
  keywords: [
    'aluminium extrusion catalogue',
    'aluminium profile types',
    'custom aluminium profiles vietnam',
    'aluminium extrusion families',
    'aluminium profile supplier vietnam'
  ],
  alternates: { canonical: `${BASE_URL}/products` },
  openGraph: {
    type: 'website',
    title: 'Aluminium Product Catalogue | LELOI METAL',
    description:
      'Sixty aluminium extrusion families across six business lines, manufactured in Vietnam for global B2B supply chains.',
    url: `${BASE_URL}/products`,
    siteName: 'LELOI METAL'
  }
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Products', item: `${BASE_URL}/products` }
  ]
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
