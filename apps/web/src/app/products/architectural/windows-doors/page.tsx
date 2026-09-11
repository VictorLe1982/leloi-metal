import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  DossierHero,
  SystemQuickNav,
  SystemCardGrid,
  SystemCardItem,
  ThermalBreakFeature,
  FinishingAndAkzoNobel,
  ArchitecturalApplications,
  EngineeringAndFabrication,
  QualityAndPackaging,
  ArchitecturalGallery,
  CrossSellSolutions,
  TechnicalSpecsProvenanceTable,
  DossierFaqAndCta
} from '@/components/architectural';
import {
  ShieldCheck,
  CheckCircle2,
  Layers,
  Sparkles,
  Cpu,
  ArrowRight,
  Sliders,
  Maximize2
} from 'lucide-react';
import { Button } from '@leloi/ui';

export const metadata: Metadata = {
  title: 'Aluminium Window & Door Systems | Architectural Extrusions | LELOI METAL',
  description:
    'Precision architectural aluminium window and door profiles from Vietnam factory. Multi-track sliding, casements, thermal break PA66, and AkzoNobel powder coating.',
  alternates: {
    canonical: 'https://leloimetal.com/products/architectural/windows-doors'
  },
  keywords: [
    'aluminium window profiles',
    'architectural aluminium door extrusions',
    'sliding window extrusion Vietnam',
    'thermal break window profiles',
    'AkzoNobel powder coated aluminium',
    '6063-T5 aluminium profiles'
  ]
};

const WINDOW_SYSTEMS: SystemCardItem[] = [
  {
    id: 'win-sliding',
    category: 'Window System',
    name: 'Aluminium Sliding Window Systems',
    slug: 'sliding-window',
    summary:
      '2-track and 3-track sliding window profiles with stainless steel glide rail inserts, multi-point lock mortises, and cascading drainage sill.',
    imageSrc: '/images/products/architectural-systems/window-door/hero.webp',
    href: '/products/architectural/windows-doors/sliding-window',
    isDeepPageAvailable: true,
    highlights: ['2-track & 3-track options', 'Stainless roller glide rail', 'Integrated flyscreen track'],
    finishes: ['AkzoNobel Powder Coated', 'Anodized Clear', 'Mill Finish']
  },
  {
    id: 'win-casement',
    category: 'Window System',
    name: 'Architectural Casement Windows',
    slug: 'casement-window',
    summary:
      'Outward-opening and inward-opening casement window extrusions with multi-chamber structural chambers and friction stay channels.',
    imageSrc: '/images/products/architectural-systems/thermal-break/hero.webp',
    href: '/rfq?division=architectural&family=windows-doors&system=casement-window',
    isDeepPageAvailable: false,
    highlights: ['Multi-point friction stay grooves', 'Heavy sash weight capacity', 'High acoustic weatherstripping'],
    finishes: ['AkzoNobel Powder Coated', 'Wood Grain Sublimation', 'Anodized']
  },
  {
    id: 'win-fixed',
    category: 'Window System',
    name: 'Fixed Vision & Storefront Glazing',
    slug: 'fixed-window',
    summary:
      'Slim-sightline perimeter framing profiles for non-operable vision panels, clerestory windows, and storefront sidelites.',
    imageSrc: '/images/products/architectural-systems/window-door/application.webp',
    href: '/rfq?division=architectural&family=windows-doors&system=fixed-window',
    isDeepPageAvailable: false,
    highlights: ['Maximum daylight transmission', 'Structural glass pocket', 'Snap-on exterior glazing beads'],
    finishes: ['AkzoNobel Powder Coated', 'Anodized 15-20µm', 'Mill Finish']
  },
  {
    id: 'win-combo',
    category: 'Window System',
    name: 'Combination Window Systems',
    slug: 'combination-window',
    summary:
      'Coupler mullions and transom adapters enabling seamless structural joining of sliding, casement, and fixed units.',
    imageSrc: '/media/catalog/18_window_door_profiles.webp',
    href: '/rfq?division=architectural&family=windows-doors&system=combination-window',
    isDeepPageAvailable: false,
    highlights: ['Heavy structural coupler bars', 'Thermal-break continuity', 'Concealed expansion joints'],
    finishes: ['AkzoNobel Powder Coated', 'Anodized Bronze', 'Jet Black']
  }
];

const DOOR_SYSTEMS: SystemCardItem[] = [
  {
    id: 'door-sliding',
    category: 'Door System',
    name: 'Heavy-Duty Patio Sliding Doors',
    slug: 'sliding-door',
    summary:
      'Robust floor-to-ceiling sliding terrace door profiles engineered for high panel weights, tandem stainless rollers, and low threshold tracks.',
    imageSrc: '/images/products/architectural-systems/window-door/hero.webp',
    href: '/rfq?division=architectural&family=windows-doors&system=sliding-door',
    isDeepPageAvailable: false,
    highlights: ['Panel weight capacity to 300 kg', 'Barrier-free low step threshold', 'Heavy interlock meeting stiles'],
    finishes: ['AkzoNobel Powder Coated', 'Anodized 20µm', 'Custom Colors']
  },
  {
    id: 'door-hinged',
    category: 'Door System',
    name: 'Architectural Hinged Entry & French Doors',
    slug: 'hinged-door',
    summary:
      'Heavy commercial entrance and residential terrace door profiles designed for flush door sashes, heavy barrel hinges, and panic hardware.',
    imageSrc: '/images/products/architectural-systems/curtain-wall/application.webp',
    href: '/rfq?division=architectural&family=windows-doors&system=hinged-door',
    isDeepPageAvailable: false,
    highlights: ['Reinforced corner bracket crimping', '3D adjustable hinge channels', 'Drop-down automatic bottom seals'],
    finishes: ['AkzoNobel Powder Coated', 'Satin Anodized', 'Dark Bronze']
  },
  {
    id: 'door-bifold',
    category: 'Door System',
    name: 'Multi-Panel Bi-Fold Door Systems',
    slug: 'bifold-door',
    summary:
      'Concertina folding door profiles providing expansive 90% clear wall openings with top-hung or bottom-rolling heavy guide carriages.',
    imageSrc: '/images/products/architectural-systems/category-hero/hero.webp',
    href: '/rfq?division=architectural&family=windows-doors&system=bifold-door',
    isDeepPageAvailable: false,
    highlights: ['Up to 8 panels per configuration', 'Heavy carriage roller channels', 'Weatherproof finger-pinch gaskets'],
    finishes: ['AkzoNobel Powder Coated', 'Champagne Anodized', 'Wood Grain']
  },
  {
    id: 'door-panoramic',
    category: 'Door System',
    name: 'Minimal Sightline Panoramic Glazing',
    slug: 'panoramic-door',
    summary:
      'Ultra-slim interlocking stiles (down to 25mm visible sightline) with recessed concealed outer frames for luxury villa architecture.',
    imageSrc: '/images/products/architectural-systems/window-door/application.webp',
    href: '/rfq?division=architectural&family=windows-doors&system=panoramic-door',
    isDeepPageAvailable: false,
    highlights: ['Concealed perimeter frame', 'Motorized actuator compatible', 'Structural glass-bearing sash'],
    finishes: ['AkzoNobel Powder Coated', 'Matte Black Anodized', 'Custom RAL']
  }
];

export default function WindowsDoorsGoldenPage() {
  // Structured JSON-LD Data Schemas
  const jsonLdProduct = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Aluminium Window & Door Systems',
    image: 'https://leloimetal.com/images/products/architectural-systems/window-door/hero.webp',
    description:
      'Precision architectural aluminium window and door profiles from Vietnam factory. Multi-track sliding, casements, thermal break PA66, and AkzoNobel powder coating.',
    brand: {
      '@type': 'Brand',
      name: 'LELOI METAL'
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'LELOI EXIM GLOBAL'
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        priceType: 'https://schema.org/InvoicePrice',
        description: 'B2B Wholesale Quotation upon technical drawing submission'
      },
      itemCondition: 'https://schema.org/NewCondition',
      availability: 'https://schema.org/InStock'
    }
  };

  const jsonLdBreadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://leloimetal.com/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Products',
        item: 'https://leloimetal.com/products'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Architectural Aluminium',
        item: 'https://leloimetal.com/products/architectural'
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Windows & Doors',
        item: 'https://leloimetal.com/products/architectural/windows-doors'
      }
    ]
  };

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What aluminium alloys and tempers are used for your window and door systems?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We manufacture architectural profiles primarily using high-grade 6063-T5 and 6063-T6. 6063 offers superior surface smoothness for architectural anodizing and AkzoNobel powder coating.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can LELOI METAL develop custom proprietary extrusion dies for our project?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We specialize in custom tooling for commercial fabricators and facade contractors. Simply send your 2D CAD (DWG/DXF) or 3D STEP models for DFM review.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is the warranty on AkzoNobel powder coating?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer warranties up to 10 years on certified AkzoNobel architectural powder coating systems applied in our automated vertical and horizontal coating lines.'
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProduct) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* SECTION 1: HERO */}
      <DossierHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Products', href: '/products' },
          { label: 'Architectural Aluminium', href: '/products/architectural' },
          { label: 'Windows & Doors' }
        ]}
        eyebrow="ARCHITECTURAL ALUMINIUM SYSTEMS"
        title="Aluminium Window & Door Systems"
        description="Precision-engineered architectural aluminium window and door profiles for residential and commercial construction. High-performance multi-cavity designs, thermal-break insulating barriers, custom extrusion dies, and premium AkzoNobel powder coating."
        rfqHref="/rfq?division=architectural&family=windows-doors"
        uploadHref="/rfq?division=architectural&family=windows-doors&mode=upload"
      />

      {/* STICKY QUICK NAVIGATION BAR */}
      <SystemQuickNav />

      {/* SECTION 2: PRODUCT FAMILY OVERVIEW */}
      <section id="overview" className="py-16 sm:py-20 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-50 text-[#0A2D5B] text-xs font-semibold uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5 text-[#2F7BFF]" />
                <span>Product Family Overview</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0A2D5B] tracking-tight">
                Complete Architectural Building Envelope Extrusions
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                LELOI METAL designs, extrudes, finishes, and precision-fabricates premium aluminium profile systems for contemporary architectural openings. Our product portfolio spans high-cycle sliding balcony doors, outward-opening awning casements, panoramic minimal-frame systems, and advanced thermal-break profiles.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Operating directly from our manufacturing facilities in Vietnam, we partner with overseas facade contractors, window fabricators, and commercial developers seeking high-tolerance precision extrusions, ISO 9001 certified quality control, and competitive direct-factory economics.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="block text-xl font-bold font-mono text-[#0A2D5B]">6063</span>
                  <span className="text-[11px] text-slate-500">T5 / T6 Alloy Grade</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="block text-xl font-bold font-mono text-[#0A2D5B]">EN 755-9</span>
                  <span className="text-[11px] text-slate-500">Precision Tolerance</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="block text-xl font-bold font-mono text-[#0A2D5B]">PA66 GF25</span>
                  <span className="text-[11px] text-slate-500">Thermal Barrier</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="block text-xl font-bold font-mono text-emerald-600">10-Year*</span>
                  <span className="text-[11px] text-slate-500">AkzoNobel Warranty</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0A2D5B] to-slate-900 text-white space-y-4 shadow-lg border border-blue-900/50">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider font-mono">
                  B2B Sourcing Advantages
                </span>
                <h3 className="text-lg font-bold font-heading">
                  Why Global Fabricators Partner with LELOI METAL
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Direct-from-Vietnam manufacturing with competitive tariff and freight routes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>In-house die tooling center ensuring swift DFM turnaround and tool maintenance.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Automated AkzoNobel approved vertical powder coating and satin anodizing lines.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Robust ISPM-15 export wooden crates and protective masking film for zero-damage arrivals.</span>
                  </li>
                </ul>

                <div className="pt-2">
                  <Link href="/rfq?division=architectural&family=windows-doors">
                    <Button className="w-full bg-[#2F7BFF] hover:bg-blue-600 text-white text-xs py-2.5 flex items-center justify-center gap-2 font-semibold">
                      <span>Request Wholesale Container Pricing</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WINDOW SYSTEMS */}
      <SystemCardGrid
        id="window-systems"
        title="Engineered Window Systems"
        subtitle="High-performance aluminium window profiles configured for sliding, casement, fixed, and integrated combination fenestrations."
        items={WINDOW_SYSTEMS}
      />

      {/* SECTION 4: DOOR SYSTEMS */}
      <SystemCardGrid
        id="door-systems"
        title="Monumental Door Systems"
        subtitle="Heavy structural aluminium door profiles engineered for wide-span residential terraces, commercial entries, and minimal-sightline facades."
        items={DOOR_SYSTEMS}
      />

      {/* SECTION 5: THERMAL-BREAK SYSTEMS */}
      <ThermalBreakFeature />

      {/* SECTION 6 & 7: TECHNICAL SPECIFICATIONS & PROFILE ANATOMY */}
      <TechnicalSpecsProvenanceTable entityId="fam-arch-01" />

      {/* SECTION 8 & 9: SURFACE FINISHES & COLOR PALETTE */}
      <FinishingAndAkzoNobel />

      {/* SECTION 10: ARCHITECTURAL APPLICATIONS */}
      <ArchitecturalApplications />

      {/* SECTION 11: ENGINEERING & FABRICATION SUPPORT */}
      <EngineeringAndFabrication />

      {/* SECTION 12 & 13: QUALITY STANDARDS & EXPORT PACKAGING */}
      <QualityAndPackaging />

      {/* SECTION 14: CURATED TECHNICAL GALLERY */}
      <ArchitecturalGallery />

      {/* SECTION 15: CROSS-SELL / RELATED ARCHITECTURAL SOLUTIONS */}
      <CrossSellSolutions />

      {/* SECTIONS 16, 17, 18: DOWNLOADS, FAQ & FINAL RFQ TRIGGER */}
      <DossierFaqAndCta
        rfqHref="/rfq?division=architectural&family=windows-doors"
        uploadHref="/rfq?division=architectural&family=windows-doors&mode=upload"
      />
    </div>
  );
}
