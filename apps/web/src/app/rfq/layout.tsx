import React from 'react';
import type { Metadata } from 'next';

const BASE_URL = 'https://leloimetal.com';

export const metadata: Metadata = {
  title: 'Request a Quote | Upload CAD Drawing | LELOI METAL Vietnam',
  description:
    'Submit your aluminium extrusion specifications and CAD drawing (PDF, DWG, DXF, STEP) for a DFM review and direct factory quotation from Vietnam. Files are held under NDA in private storage.',
  keywords: [
    'aluminium extrusion quote vietnam',
    'upload cad drawing aluminium quote',
    'custom aluminium profile rfq',
    'aluminium extrusion dfm review',
    'request aluminium factory quotation'
  ],
  alternates: { canonical: `${BASE_URL}/rfq` },
  openGraph: {
    type: 'website',
    title: 'Request a Quote | LELOI METAL',
    description:
      'Send your drawing and volumes. Our engineering team returns a DFM review and direct factory pricing.',
    url: `${BASE_URL}/rfq`,
    siteName: 'LELOI METAL'
  }
};

export default function RfqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
