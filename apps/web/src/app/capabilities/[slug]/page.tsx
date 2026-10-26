import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from '@leloi/ui';
import {
  ArrowRight,
  ChevronRight,
  FileUp,
  CheckCircle2,
  HelpCircle,
  Layers,
  Ruler,
  Workflow,
  Factory,
  Network
} from 'lucide-react';
import {
  CAPABILITY_DOSSIERS,
  getCapabilityBySlug,
  getCapabilitySlugs
} from '@/data/capabilities';
import { AFFILIATED_NETWORK, getEquipmentForCapability } from '@/data/company';
import { SiteImage } from '@/components/media/SiteImage';
import { capabilitySlotId } from '@/data/media-manifest';

const BASE_URL = 'https://leloimetal.com';

export function generateStaticParams() {
  return getCapabilitySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const capability = getCapabilityBySlug(slug);

  if (!capability) {
    return {
      title: 'Capability Not Found | LELOI METAL',
      robots: { index: false, follow: true }
    };
  }

  return {
    title: capability.seo.title,
    description: capability.seo.description,
    keywords: capability.seo.keywords,
    alternates: { canonical: `${BASE_URL}/capabilities/${capability.slug}` },
    openGraph: {
      type: 'website',
      title: capability.seo.title,
      description: capability.seo.description,
      url: `${BASE_URL}/capabilities/${capability.slug}`
    }
  };
}

export default async function CapabilityDossierPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const capability = getCapabilityBySlug(slug);

  if (!capability) {
    notFound();
  }

  const siblings = CAPABILITY_DOSSIERS.filter((item) => item.slug !== capability.slug);
  const equipment = getEquipmentForCapability(capability.slug);
  const canonicalUrl = `${BASE_URL}/capabilities/${capability.slug}`;

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Capabilities', item: `${BASE_URL}/capabilities` },
      { '@type': 'ListItem', position: 3, name: capability.name, item: canonicalUrl }
    ]
  };

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: capability.headline,
    serviceType: capability.name,
    description: capability.answerBlock,
    url: canonicalUrl,
    areaServed: 'Worldwide',
    provider: {
      '@type': 'Organization',
      name: 'LELOI METAL',
      url: BASE_URL
    }
  };

  // Mirrors the questions rendered on the page below, verbatim.
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: capability.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer }
    }))
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* HERO */}
      <section className="bg-gradient-to-b from-slate-900 via-navy to-slate-900 text-white pt-10 pb-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <Link href="/capabilities" className="hover:text-blue-300 transition-colors">
                  Capabilities
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              </li>
              <li className="text-white font-medium">{capability.name}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
                Manufacturing Capability
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight leading-tight">
                {capability.headline}
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                {capability.summary}
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link href={`/rfq?capability=${capability.slug}`}>
                  <Button variant="cta" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                    Request a Quote
                  </Button>
                </Link>
                <Link href={`/rfq?mode=upload&capability=${capability.slug}`}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10"
                    leftIcon={<FileUp className="w-4 h-4 text-blue" />}
                  >
                    Upload Your Drawing
                  </Button>
                </Link>
              </div>
            </div>

            {/* Process photograph + answer block written to be quoted by AI engines */}
            <div className="lg:col-span-5 space-y-5">
              <div className="relative aspect-[3/2] rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                <SiteImage
                  slotId={capabilitySlotId(capability.slug)}
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>

              <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 space-y-3">
                <div className="text-xs uppercase font-heading font-semibold text-blue tracking-wider">
                  In Brief
                </div>
                <p className="text-sm text-slate-100 leading-relaxed">{capability.answerBlock}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-50 text-navy text-xs font-semibold uppercase tracking-wider mb-2">
              <Workflow className="w-3.5 h-3.5 text-blue" />
              Process
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy tracking-tight">
              How We Deliver {capability.name}
            </h2>
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capability.processSteps.map((step, index) => (
              <li
                key={step.title}
                className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-2"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-navy text-white text-sm font-bold flex items-center justify-center shrink-0">
                    {index + 1}
                  </span>
                  <h3 className="text-base font-bold font-heading text-navy">{step.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-11">
                  {step.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* INSTALLED EQUIPMENT */}
      {equipment.length > 0 && (
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-50 text-navy text-xs font-semibold uppercase tracking-wider mb-2">
                <Factory className="w-3.5 h-3.5 text-blue" />
                Installed Equipment
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy tracking-tight">
                Machines at Our Hung Yen Plant
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                Equipment installed at our group plant in Hung Yen, dedicated to your production.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {equipment.map((item) => (
                <div
                  key={item.name}
                  className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-2"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base font-bold font-heading text-navy leading-snug">
                      {item.name}
                    </h3>
                    <span className="shrink-0 px-2.5 py-1 rounded-lg bg-navy text-white text-xs font-mono font-bold">
                      ×{item.quantity}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 rounded-2xl bg-light-gray border border-slate-200 flex items-start gap-3">
              <Network className="w-5 h-5 text-blue shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                <span className="font-bold text-navy block mb-0.5">
                  Extended capacity through our affiliated network
                </span>
                {AFFILIATED_NETWORK.description}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* STANDARDS / MATERIALS / APPLICATIONS */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-navy">
              <Ruler className="w-3.5 h-3.5 text-blue" />
              Standards We Work To
            </div>
            <ul className="space-y-2.5">
              {capability.standards.map((standard) => (
                <li key={standard} className="flex items-start gap-2 text-xs text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-blue shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{standard}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-navy">
              <Layers className="w-3.5 h-3.5 text-blue" />
              Alloys & Materials
            </div>
            <div className="flex flex-wrap gap-2">
              {capability.materials.map((material) => (
                <span
                  key={material}
                  className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs font-mono text-navy"
                >
                  {material}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-navy">
              <Workflow className="w-3.5 h-3.5 text-blue" />
              Typical Applications
            </div>
            <ul className="space-y-2.5">
              {capability.applications.map((application) => (
                <li key={application} className="flex items-start gap-2 text-xs text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{application}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-50 text-navy text-xs font-semibold uppercase tracking-wider mb-2">
              <HelpCircle className="w-3.5 h-3.5 text-blue" />
              Engineering FAQ
            </div>
            <h2 className="text-2xl font-bold font-heading text-navy">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {capability.faqs.map((faq) => (
              <div
                key={faq.question}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5"
              >
                <h3 className="font-bold text-sm text-navy">{faq.question}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED CAPABILITIES */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8 gap-4">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-navy">
              Other Manufacturing Capabilities
            </h2>
            <Link
              href="/capabilities"
              className="text-xs font-semibold text-blue hover:underline flex items-center gap-1 shrink-0"
            >
              View all <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {siblings.map((sibling) => (
              <Link
                key={sibling.slug}
                href={`/capabilities/${sibling.slug}`}
                className="group p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue transition-colors"
              >
                <h3 className="text-sm font-bold font-heading text-navy group-hover:text-blue transition-colors">
                  {sibling.navLabel}
                </h3>
                <p className="text-[11px] text-slate-500 mt-1.5 line-clamp-3 leading-snug">
                  {sibling.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-navy via-[#0D3B75] to-slate-900 text-white p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                Discuss Your {capability.navLabel} Requirement
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Send your drawing and target volumes. Our engineering team returns a DFM review and
                direct factory pricing.
              </p>
            </div>
            <Link href={`/rfq?capability=${capability.slug}`} className="shrink-0">
              <Button variant="cta" size="xl" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Start Engineering Review
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
