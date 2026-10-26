import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, Badge, Button } from '@leloi/ui';
import {
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Calendar,
  Clock,
  ExternalLink,
  Layers,
  Sparkles,
  FileCheck2
} from 'lucide-react';
import { ARTICLES, INSIGHT_SLUGS } from '@/data/insights';

const INSIGHTS_ARTICLES = INSIGHT_SLUGS.map((slug) => ARTICLES[slug]);

export const metadata: Metadata = {
  title: 'Aluminium Engineering & Trade Insights | LELOI METAL',
  description:
    'Technical guides, metallurgical comparison papers, and international trade intelligence for industrial aluminium profile buyers, engineers, and supply chain managers.'
};


export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-light-gray/50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs uppercase font-heading font-semibold tracking-widest text-blue">
            TECHNICAL KNOWLEDGE & TRADE INTELLIGENCE
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-navy tracking-tight">
            Engineering Insights & Export Guides
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Peer-reviewed technical whitepapers, extrusion design for manufacturing (DFM) advice, and statutory customs tariff guides for global aluminium procurement teams.
          </p>
        </div>

        {/* Featured Cornerstone Article */}
        <div className="bg-gradient-to-br from-navy-dark to-navy text-white rounded-2xl p-8 sm:p-12 shadow-lg relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold bg-blue text-white px-3 py-1 rounded-full uppercase tracking-wider">
                Featured Guide
              </span>
              <span className="text-xs text-slate-300 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> 8 min read
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white leading-tight">
              6061 vs 6063 Aluminium Extrusions: Metallurgical Comparison, Machinability & Selection Guide
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Choosing between 6061 and 6063 determines your profile&apos;s mechanical load capacity, surface anodizing quality, tooling complexity, and unit extrusion cost. Discover which alloy satisfies your structural design specifications.
            </p>

            <div className="pt-4 flex items-center gap-4">
              <Link href="/insights/6061-vs-6063-aluminium-extrusion-comparison">
                <Button variant="cta" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Read Technical Guide
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INSIGHTS_ARTICLES.map((art) => (
            <Card
              key={art.slug}
              variant="default"
              className="p-6 flex flex-col justify-between space-y-6 hover:border-blue transition-all group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-blue uppercase tracking-wider">
                    {art.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {art.readTime}
                  </span>
                </div>

                <Link href={`/insights/${art.slug}`}>
                  <h3 className="font-heading font-bold text-lg text-navy group-hover:text-blue transition-colors line-clamp-2 leading-snug">
                    {art.title}
                  </h3>
                </Link>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {art.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {(art.tags ?? []).slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-medium">
                  {art.publishedAt}
                </span>
                <Link
                  href={`/insights/${art.slug}`}
                  className="text-xs font-semibold text-blue hover:underline flex items-center gap-1"
                >
                  Read Paper <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* Free DFM Drawing Review CTA */}
        <div className="bg-navy text-white rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold font-heading">
              Have a Technical Extrusion Question or Custom Die Design?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Our applications engineering desk provides confidential design-for-manufacturing (DFM) reviews on custom profile sections, wall-thickness ratios, and alloy optimization.
            </p>
          </div>
          <Link href="/rfq">
            <Button variant="cta" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Submit Profile for DFM Review
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
