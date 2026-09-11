import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, FileUp, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';
import { Button } from '@leloi/ui';

interface DossierHeroProps {
  breadcrumbs?: Array<{ label: string; href?: string }>;
  eyebrow?: string;
  title: string;
  description: string;
  imageSrc?: string;
  rfqHref: string;
  uploadHref: string;
  verifiedBadges?: string[];
}

export const DossierHero: React.FC<DossierHeroProps> = ({
  breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Architectural Aluminium', href: '/products/architectural' },
    { label: 'Windows & Doors' }
  ],
  eyebrow = 'ARCHITECTURAL ALUMINIUM SYSTEMS',
  title,
  description,
  imageSrc = '/images/products/architectural-systems/window-door/hero.webp',
  rfqHref,
  uploadHref,
  verifiedBadges = [
    'Alloy 6063-T5 / T6 Verified',
    'EN 755-9 Precision Tolerances',
    'Polyamide PA66 GF25 Thermal Break',
    'AkzoNobel Approved Coater'
  ]
}) => {
  return (
    <section className="relative bg-gradient-to-b from-slate-900 via-[#0A2D5B] to-slate-900 text-white pt-10 pb-16 lg:pb-24 overflow-hidden border-b border-slate-800">
      {/* Background Architectural Grid Pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-slate-400">
            {breadcrumbs.map((crumb, idx) => {
              const isLast = idx === breadcrumbs.length - 1;
              return (
                <li key={idx} className="flex items-center gap-1.5">
                  {crumb.href && !isLast ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-blue-300 transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className={isLast ? 'text-white font-medium' : ''}>
                      {crumb.label}
                    </span>
                  )}
                  {!isLast && <ChevronRight className="w-3.5 h-3.5 text-slate-500" />}
                </li>
              );
            })}
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              {eyebrow}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-heading leading-tight">
              {title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl">
              {description}
            </p>

            {/* Verified Technical Badges */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              {verifiedBadges.map((badge, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs text-slate-200 font-medium"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href={rfqHref}>
                <Button
                  size="lg"
                  className="bg-[#2F7BFF] hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg shadow-blue-500/20 flex items-center gap-2 transition-transform active:scale-95"
                >
                  <span>Send Project Requirement</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>

              <Link href={uploadHref}>
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

            {/* Trust Micro-copy */}
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Direct Extrusion Manufacturer</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>24h Engineering Review</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Global Container Export</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Resolution Architectural Visual */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl bg-slate-800/50 group">
              <div className="aspect-[4/3] relative w-full overflow-hidden">
                <Image
                  src={imageSrc}
                  alt={title}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              </div>

              {/* Floating Technical Overlay Card */}
              <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/60 text-xs">
                <div className="flex justify-between items-center text-slate-200 font-semibold mb-1">
                  <span>Engineered System Platform</span>
                  <span className="text-blue-400 font-mono">B2B Commercial / Residential</span>
                </div>
                <p className="text-slate-400 text-[11px]">
                  Bespoke die extrusion, thermal barrier crimping, and AkzoNobel powder coating factory line.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
