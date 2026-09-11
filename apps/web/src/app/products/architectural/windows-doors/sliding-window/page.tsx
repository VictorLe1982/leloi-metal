import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  FileUp,
  Layers,
  Sliders,
  Sparkles,
  HelpCircle,
  Download,
  Info,
  Check
} from 'lucide-react';
import { Button } from '@leloi/ui';
import { getPublicClaimsByEntityId, getClaimSourceById } from '@leloi/types';

export const metadata: Metadata = {
  title: 'Aluminium Sliding Window Systems | 2-Track & 3-Track Profiles | LELOI METAL',
  description:
    'High-performance aluminium sliding window profiles from Vietnam factory. 2-track, 3-track, stainless steel glide rails, and AkzoNobel powder coating.',
  alternates: {
    canonical: 'https://leloimetal.com/products/architectural/windows-doors/sliding-window'
  },
  keywords: [
    'aluminium sliding window system',
    'sliding window extrusion Vietnam',
    'multi-track window profile',
    '3-track sliding window with mesh',
    'architectural sliding window profiles',
    'AkzoNobel powder coated window'
  ]
};

export default function SlidingWindowSystemPage() {
  const publicClaims = getPublicClaimsByEntityId('sys-arch-win-sliding');

  const jsonLdProduct = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Aluminium Sliding Window System',
    image: 'https://leloimetal.com/images/products/architectural-systems/window-door/hero.webp',
    description:
      'Precision architectural aluminium sliding window system featuring 2-track and 3-track configurations, stainless steel roller rails, and AkzoNobel powder coating.',
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
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Sliding Window System',
        item: 'https://leloimetal.com/products/architectural/windows-doors/sliding-window'
      }
    ]
  };

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What track configurations are available for this sliding window system?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We supply 2-track profiles (for 2 or 4 sliding panels) and 3-track profiles (for 3 panels or 2 sliding panels with an integrated insect screen track).'
        }
      },
      {
        '@type': 'Question',
        name: 'What glass thicknesses can be glazed into the sash profiles?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The sash accommodates single glass from 5mm to 8mm, double-glazed insulated units (IGUs) up to 24mm, as well as laminated safety glass.'
        }
      },
      {
        '@type': 'Question',
        name: 'What warranty is offered on the powder coating?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer warranties up to 10 years on approved AkzoNobel powder coating systems.'
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

      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-slate-900 via-[#0A2D5B] to-slate-900 text-white pt-10 pb-16 lg:pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-slate-400">
              <li>
                <Link href="/" className="hover:text-blue-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              </li>
              <li>
                <Link href="/products" className="hover:text-blue-300 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              </li>
              <li>
                <Link href="/products/architectural" className="hover:text-blue-300 transition-colors">
                  Architectural Aluminium
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              </li>
              <li>
                <Link
                  href="/products/architectural/windows-doors"
                  className="hover:text-blue-300 transition-colors"
                >
                  Windows & Doors
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              </li>
              <li className="text-white font-medium">Sliding Window Systems</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
                <span>ARCHITECTURAL ALUMINIUM SYSTEMS</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-heading leading-tight">
                Aluminium Sliding Window Systems
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Precision-engineered architectural aluminium sliding window profiles designed for smooth gliding, superior weather resistance, and multi-track configurations.
              </p>

              <div className="flex flex-wrap gap-2.5 pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs text-slate-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                  Alloy 6063-T5
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs text-slate-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                  Tolerance EN 755-9
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs text-slate-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                  304 Stainless Roller Rail
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs text-slate-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                  AkzoNobel Approved
                </span>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/rfq?division=architectural&family=windows-doors&system=sliding-window">
                  <Button
                    size="lg"
                    className="bg-[#2F7BFF] hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg shadow-blue-500/20 flex items-center gap-2"
                  >
                    <span>Send Project Requirement</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>

                <Link href="/rfq?division=architectural&family=windows-doors&system=sliding-window&mode=upload">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-slate-600 text-slate-200 hover:bg-slate-800/80 hover:text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2"
                  >
                    <FileUp className="w-4 h-4 text-blue-400" />
                    <span>Upload Drawing</span>
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl bg-slate-800/50">
                <div className="aspect-[4/3] relative w-full overflow-hidden">
                  <Image
                    src="/images/products/architectural-systems/window-door/hero.webp"
                    alt="Aluminium Sliding Window System"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/60 text-xs">
                  <span className="text-slate-200 font-semibold block">System Architecture LM-SW</span>
                  <span className="text-slate-400 text-[11px]">2-Track & 3-Track Extrusions with Replaceable Stainless Glide Rail</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SYSTEM OVERVIEW: 2-TRACK & 3-TRACK CONFIGURATIONS */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-50 text-[#0A2D5B] text-xs font-semibold uppercase tracking-wider mb-2">
              <Sliders className="w-3.5 h-3.5 text-[#2F7BFF]" />
              <span>Track Architecture</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0A2D5B] tracking-tight">
              2-Track & 3-Track Flexible Opening Configurations
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              Designed to satisfy diverse residential and commercial fenestration layouts, the sliding system provides interchangeable outer frames tailored for standard openings or multi-panel continuous tracks with integrated insect netting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 2-Track Card */}
            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-blue-300 hover:shadow-sm transition-all space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase">Configuration A</span>
                  <h3 className="text-xl font-bold font-heading text-[#0A2D5B]">2-Track Frame System</h3>
                </div>
                <span className="px-2.5 py-1 rounded bg-blue-100 text-blue-800 text-xs font-bold font-mono">
                  88mm Depth
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Optimized for standard 2-panel (OX / XO) and 4-panel (OXXO) sliding windows. Slim frame profile depth minimizes wall jamb space while maintaining structural wind load inertia.
              </p>
              <ul className="space-y-2 text-xs text-slate-600 pt-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-500" />
                  <span>2 sliding panels or 1 fixed + 1 sliding configuration</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-500" />
                  <span>Concealed perimeter drainage weep chambers</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-500" />
                  <span>Snap-fit sill threshold caps for easy roller track cleaning</span>
                </li>
              </ul>
            </div>

            {/* 3-Track Card */}
            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-blue-300 hover:shadow-sm transition-all space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase">Configuration B</span>
                  <h3 className="text-xl font-bold font-heading text-[#0A2D5B]">3-Track Frame System with Flyscreen</h3>
                </div>
                <span className="px-2.5 py-1 rounded bg-blue-100 text-blue-800 text-xs font-bold font-mono">
                  128mm Depth
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Engineered for wider spans requiring 3-panel cascading sliding (66% clear opening) or 2 glazed sliding sashes with a third dedicated exterior track for a sliding insect screen sash.
              </p>
              <ul className="space-y-2 text-xs text-slate-600 pt-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-500" />
                  <span>3-panel (OOX / XOO) or 6-panel center-meeting configurations</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-500" />
                  <span>Integrated third rail for aluminium stainless wire flyscreen sash</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-500" />
                  <span>Heavy interlock stiles with double wool-pile weather seals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROFILE DESIGN & VERIFIED SPECIFICATIONS */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-50 text-[#0A2D5B] text-xs font-semibold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2F7BFF]" />
              <span>Verified Claims</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0A2D5B] tracking-tight">
              Profile Design & Verified Specifications
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              Every technical value below is backed by accredited metallurgical certificates and standard tolerance benchmarks.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-wider">
                  <th className="py-3.5 px-5">Design Parameter</th>
                  <th className="py-3.5 px-5">Engineered Specification</th>
                  <th className="py-3.5 px-5">Verification Status</th>
                  <th className="py-3.5 px-5">Source Evidence</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs text-slate-600">
                {publicClaims.map((claim) => {
                  const source = claim.sourceId ? getClaimSourceById(claim.sourceId) : undefined;
                  return (
                    <tr key={claim.id} className="hover:bg-blue-50/30 transition-colors">
                      <td className="py-3.5 px-5 font-semibold text-slate-900 capitalize">
                        {claim.field.replace(/([A-Z])/g, ' $1').trim()}
                      </td>
                      <td className="py-3.5 px-5 font-medium text-[#0A2D5B]">{claim.value}</td>
                      <td className="py-3.5 px-5">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>VERIFIED</span>
                        </span>
                      </td>
                      <td className="py-3.5 px-5 font-mono text-[11px] text-slate-500">
                        {source ? (
                          <span title={`${source.title} (${source.reference})`} className="underline decoration-dotted cursor-help">
                            {source.id}
                          </span>
                        ) : (
                          claim.sourceId
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Info className="w-4 h-4 text-blue-500" />
                <span>Zero unverified thermal U-values or acoustic ratings rendered publicly. Project-specific simulations provided upon drawing submission.</span>
              </span>
              <span className="font-mono text-[11px]">Audit Passed: 100% Provenance</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GLAZING POCKET & 5. HARDWARE INTEGRATION */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Glazing Pocket Compatibility */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-50 text-[#0A2D5B] text-xs font-semibold uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5 text-[#2F7BFF]" />
                <span>Fenestration Engineering</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0A2D5B]">
                Glazing Pocket Compatibility
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The sash extrusion features deep rebate channels accommodating varied glass makeups via interchangeable snap-on glazing beads:
              </p>
              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <strong className="text-slate-800">Single Tempered Glass:</strong> 5mm to 8mm glazing with wrap-around vinyl gasket channel for cost-effective residential openings.
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <strong className="text-slate-800">Double Insulated Glazing (IGU):</strong> 18mm to 24mm (e.g. 5mm + 12A + 5mm Low-E) for enhanced solar and acoustic dampening.
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <strong className="text-slate-800">Laminated Safety Glass:</strong> 6.38mm to 10.76mm PVB/SGP acoustic laminated glass for storm and hurricane safety zones.
                </div>
              </div>
            </div>

            {/* Hardware Integration */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-50 text-[#0A2D5B] text-xs font-semibold uppercase tracking-wider">
                <Sliders className="w-3.5 h-3.5 text-[#2F7BFF]" />
                <span>Hardware Compatibility</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0A2D5B]">
                Hardware Integration & Rollers
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Designed to interface seamlessly with global architectural window hardware standards:
              </p>
              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <strong className="text-slate-800">304 Stainless Steel Glide Rail:</strong> Replaceable snap-in stainless track insert eliminates profile gouging and ensures whisper-quiet gliding.
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <strong className="text-slate-800">Tandem Bearing Rollers:</strong> Adjustable height dual nylon/stainless roller wheels load-tested for up to 100,000 opening cycles.
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <strong className="text-slate-800">Multi-Point Locking:</strong> Recessed gear mortise channel compatible with single-point crescent locks or multi-point drive gear rods.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINISHES & AKZONOBEL APPROVED PROPOSITION */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-50 text-[#0A2D5B] text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#2F7BFF]" />
              <span>Surface Treatment</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0A2D5B] tracking-tight">
              Surface Finishes & AkzoNobel Powder Coating
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
              Premium architectural powder coating using AkzoNobel powder coating systems for exterior and interior aluminium applications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
              <h4 className="text-sm font-bold font-heading text-[#0A2D5B]">Mill Finish</h4>
              <p className="text-xs text-slate-600">Clean, extruded bare aluminium ready for third-party finishing or non-exposed framing.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
              <h4 className="text-sm font-bold font-heading text-[#0A2D5B]">Architectural Anodized</h4>
              <p className="text-xs text-slate-600">15–20µm anodic layer in natural clear satin, bronze, champagne, or deep matte black.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border-2 border-blue-500/30 shadow-xs space-y-2">
              <div className="flex justify-between items-center">
                <h4 className="text-sm font-bold font-heading text-[#0A2D5B]">AkzoNobel Powder Coated</h4>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#0A2D5B] text-white">Approved</span>
              </div>
              <p className="text-xs text-slate-600">Warranties up to 10 years* across classic RAL colors and custom metallic architectural tones.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-600">
            <p className="leading-relaxed">
              *Warranty availability and duration depend on the approved coating system, project location, environmental exposure, surface preparation and applicable warranty conditions.
            </p>
          </div>
        </div>
      </section>

      {/* 9. RELATED ARCHITECTURAL SYSTEMS */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <span className="text-xs font-mono text-blue-600 uppercase font-semibold tracking-wider">
                Fenestration Suite
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0A2D5B]">
                Related Architectural Window & Door Systems
              </h3>
            </div>
            <Link
              href="/products/architectural/windows-doors"
              className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1"
            >
              <span>View All Systems</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link
              href="/rfq?division=architectural&family=windows-doors&system=casement-window"
              className="group p-5 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-blue-300 transition-all flex items-center justify-between"
            >
              <div>
                <span className="text-xs text-slate-500 font-mono">System LM-CW</span>
                <h4 className="text-sm font-bold font-heading text-[#0A2D5B] group-hover:text-blue-600 transition-colors">
                  Architectural Casement Windows
                </h4>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
            </Link>

            <Link
              href="/rfq?division=architectural&family=windows-doors&system=sliding-door"
              className="group p-5 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-blue-300 transition-all flex items-center justify-between"
            >
              <div>
                <span className="text-xs text-slate-500 font-mono">System LM-SD</span>
                <h4 className="text-sm font-bold font-heading text-[#0A2D5B] group-hover:text-blue-600 transition-colors">
                  Heavy-Duty Patio Sliding Doors
                </h4>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
            </Link>

            <Link
              href="/rfq?division=architectural&family=windows-doors&system=thermal-break"
              className="group p-5 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-blue-300 transition-all flex items-center justify-between"
            >
              <div>
                <span className="text-xs text-slate-500 font-mono">System LM-TB</span>
                <h4 className="text-sm font-bold font-heading text-[#0A2D5B] group-hover:text-blue-600 transition-colors">
                  Polyamide Thermal-Break Profiles
                </h4>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-50 text-[#0A2D5B] text-xs font-semibold uppercase tracking-wider mb-2">
              <HelpCircle className="w-3.5 h-3.5 text-[#2F7BFF]" />
              <span>Sliding Window Engineering FAQ</span>
            </div>
            <h3 className="text-2xl font-bold font-heading text-[#0A2D5B]">
              Frequently Asked Questions: Sliding Windows
            </h3>
          </div>

          <div className="space-y-4 text-xs sm:text-sm">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-1.5">
              <h4 className="font-bold text-[#0A2D5B]">
                How does the sliding window prevent water leakage during high typhoons?
              </h4>
              <p className="text-slate-600 leading-relaxed">
                The outer sill is engineered with an internal water gutter and cascade fall. Weep hole slots are punched with spring-loaded non-return flutter valves that vent hydrostatic water pressure while preventing wind pressure backdraft.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-1.5">
              <h4 className="font-bold text-[#0A2D5B]">
                Can we order custom lengths to eliminate cutting waste at our factory?
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Yes. While standard extrusion lengths are 5.8m and 6.0m (optimized for 20GP and 40HQ containers), our automated precision cut-to-length saws can supply pre-cut lengths to your exact bill of materials with tolerances down to ±0.5mm.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-1.5">
              <h4 className="font-bold text-[#0A2D5B]">
                Can the 3-track frame support an integrated stainless steel insect wire screen?
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Yes. The third exterior track is specifically designed to carry a lightweight insect screen sash fitted with 304 stainless steel or fiberglass insect mesh.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. RFQ CTA SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-[#0A2D5B] via-[#0D3B75] to-slate-900 text-white p-8 sm:p-14 overflow-hidden shadow-xl border border-blue-900/50">
            <div className="relative z-10 max-w-3xl space-y-5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wider">
                Direct Extrusion Manufacturer
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
                Source Sliding Window Profiles Direct from Vietnam
              </h2>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                Connect with our facade engineering team for sample profile sections, CAD die libraries, or formal containerload quotes.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/rfq?division=architectural&family=windows-doors&system=sliding-window">
                  <Button
                    size="lg"
                    className="bg-[#2F7BFF] hover:bg-blue-600 text-white font-semibold px-7 py-3 rounded-xl shadow-lg shadow-blue-500/25 flex items-center gap-2"
                  >
                    <span>Send Project Requirement</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>

                <Link href="/rfq?division=architectural&family=windows-doors&system=sliding-window&mode=upload">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-slate-500 text-white hover:bg-white/10 font-semibold px-7 py-3 rounded-xl flex items-center gap-2"
                  >
                    <FileUp className="w-4 h-4 text-blue-400" />
                    <span>Upload Drawing (DWG / STEP / PDF)</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
