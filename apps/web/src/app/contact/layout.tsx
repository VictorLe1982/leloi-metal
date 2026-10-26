import React from 'react';
import type { Metadata } from 'next';
import { COMPANY, FACTORY_ADDRESS } from '@/data/company';

const BASE_URL = 'https://leloimetal.com';

export const metadata: Metadata = {
  title: 'Contact LELOI METAL | Aluminium Export Desk, Hung Yen Vietnam',
  description: `Contact the LELOI METAL export sales and engineering team. Manufacturing facility at ${FACTORY_ADDRESS.oneLine}. Commercial enquiries, factory audits and distribution partnerships.`,
  keywords: [
    'contact aluminium manufacturer vietnam',
    'aluminium extrusion supplier hung yen',
    'vietnam aluminium export sales',
    'aluminium factory audit vietnam'
  ],
  alternates: { canonical: `${BASE_URL}/contact` },
  openGraph: {
    type: 'website',
    title: 'Contact LELOI METAL',
    description: `Export sales and engineering desk. ${COMPANY.legalName}, ${FACTORY_ADDRESS.region}, Vietnam.`,
    url: `${BASE_URL}/contact`,
    siteName: 'LELOI METAL'
  }
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
