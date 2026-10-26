import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';

/**
 * Self-hosted via next/font instead of a <link> to fonts.googleapis.com.
 * That removed two render-blocking round trips to a third-party origin on
 * every cold visit, and removes the third-party font request entirely — which
 * also simplifies the GDPR position for EU visitors.
 */
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap'
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap'
});
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Analytics } from '@/components/Analytics';
import { ConsentBanner } from '@/components/ConsentBanner';
import { generateOrganizationJsonLd } from '@leloi/seo';
import { COMPANY, FACTORY_ADDRESS } from '@/data/company';

export const metadata: Metadata = {
  metadataBase: new URL('https://leloimetal.com'),
  // No `template` here on purpose: every page title in this app (including the
  // 73 curated seo.title values in canonical-products-data.ts) already carries
  // the brand, so a template would render "… | LELOI METAL | LELOI METAL".
  title: {
    default: 'LELOI METAL | Precision Aluminium Extrusion & Fabrication Vietnam',
    template: '%s'
  },
  description:
    'Aluminium for a Better World. Precision aluminium extrusion, CNC machining, surface finishing and OEM manufacturing from Vietnam for global B2B industries.',
  keywords: [
    'aluminium extrusion vietnam',
    'aluminum profiles manufacturer',
    'vietnam aluminium export',
    'custom aluminum extrusion',
    'cnc machining aluminum',
    'solar aluminum profiles',
    'leloi metal',
    'leloi exim global'
  ],
  authors: [{ name: 'LELOI METAL Technical Team' }],
  creator: 'LELOI METAL',
  publisher: 'LELOI EXIM GLOBAL',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  alternates: {
    canonical: '/'
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/brand/favicon.png', type: 'image/png' }
    ],
    apple: '/images/brand/favicon.png'
  },
  manifest: '/manifest.webmanifest',
  // og:image / twitter:image are supplied by app/opengraph-image.tsx so the card
  // is generated from the brand palette instead of a static binary.
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://leloimetal.com',
    siteName: 'LELOI METAL',
    title: 'LELOI METAL | Aluminium for a Better World',
    description:
      'Precision aluminium extrusion, fabrication and OEM manufacturing from Vietnam for global industries.'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LELOI METAL | Aluminium for a Better World',
    description: 'Precision aluminium extrusion and OEM manufacturing from Vietnam.'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const orgJsonLd = generateOrganizationJsonLd({
    name: 'LELOI METAL',
    legalName: 'LELOI EXIM GLOBAL CO., LTD',
    url: 'https://leloimetal.com',
    logo: 'https://leloimetal.com/brand/leloi-metal/logo-primary.svg',
    description:
      'Precision aluminium extrusion, CNC machining, surface finishing and OEM manufacturing from Vietnam for global industries.',
    slogan: COMPANY.slogan,
    email: COMPANY.contactEmail,
    sameAs: ['https://leloiglobal.com'],
    address: {
      streetAddress: FACTORY_ADDRESS.streetAddress,
      addressLocality: FACTORY_ADDRESS.ward,
      addressRegion: FACTORY_ADDRESS.region,
      addressCountry: FACTORY_ADDRESS.countryCode
    }
  });

  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-charcoal">
        <Analytics />
        <Header />
        <main className="grow">{children}</main>
        <Footer />
        <ConsentBanner />
      </body>
    </html>
  );
}
