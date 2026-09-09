import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { generateOrganizationJsonLd } from '@leloi/seo';

export const metadata: Metadata = {
  metadataBase: new URL('https://leloimetal.com'),
  title: {
    default: 'LELOI METAL | Precision Aluminium Extrusion & Fabrication Vietnam',
    template: '%s | LELOI METAL'
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://leloimetal.com',
    siteName: 'LELOI METAL',
    title: 'LELOI METAL | Aluminium for a Better World',
    description:
      'Precision aluminium extrusion, fabrication and OEM manufacturing from Vietnam for global industries.',
    images: [
      {
        url: 'https://leloimetal.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'LELOI METAL Aluminium Extrusions & Fabrication Vietnam'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LELOI METAL | Aluminium for a Better World',
    description: 'Precision aluminium extrusion and OEM manufacturing from Vietnam.',
    images: ['https://leloimetal.com/og-default.png']
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
    logo: 'https://leloimetal.com/logo-two-l.svg',
    description:
      'Precision aluminium extrusion, CNC machining, surface finishing and OEM manufacturing from Vietnam for global industries.',
    slogan: 'Aluminium for a Better World',
    email: 'contact@leloimetal.com',
    address: {
      addressCountry: 'VN',
      addressLocality: 'Ho Chi Minh City / Ha Nam'
    }
  });

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-[#172033]">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
