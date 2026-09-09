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

export const metadata: Metadata = {
  title: 'Aluminium Engineering & Trade Insights | LELOI METAL',
  description:
    'Technical guides, metallurgical comparison papers, and international trade intelligence for industrial aluminium profile buyers, engineers, and supply chain managers.'
};

const INSIGHTS_ARTICLES = [
  {
    slug: '6061-vs-6063-aluminium-extrusion-comparison',
    title: '6061 vs 6063 Aluminium Extrusions: Metallurgical Comparison, Machinability & Selection Guide',
    category: 'Alloy Metallurgy',
    readTime: '8 min read',
    publishedAt: 'September 2026',
    author: 'Metallurgical Engineering Desk, LELOI METAL',
    summary:
      'A thorough engineering comparison between 6061-T6 structural alloy and 6063-T5 architectural extrusion profiles. Detailed comparison of yield strength, anodizing surface finish, CNC machinability, and cost factors.',
    tags: ['6061-T6', '6063-T5', 'DFM Engineering', 'CNC Machining', 'Anodizing']
  },
  {
    slug: 'vietnam-aluminium-extrusion-export-guide',
    title: 'The Complete Guide to Sourcing Aluminium Extrusions from Vietnam: Tariffs, FTAs & Logistics',
    category: 'International Trade & Tariffs',
    readTime: '11 min read',
    publishedAt: 'September 2026',
    author: 'International Trade Compliance Desk, LELOI EXIM',
    summary:
      'How international procurement teams leverage CPTPP, EVFTA, and VKFTA to import originating aluminium profiles with 0% preferential duty. Step-by-step documentation, billet origin tracing, and ocean shipping lanes.',
    tags: ['Vietnam Export', 'CPTPP', 'EVFTA', 'HS 7604', 'Tariffs & Customs']
  },
  {
    slug: 'cbam-guide-for-aluminium-importers',
    title: 'EU CBAM Compliance for Aluminium Extrusion Importers: Carbon Accounting & Reporting Requirements',
    category: 'Sustainability & CBAM',
    readTime: '9 min read',
    publishedAt: 'September 2026',
    author: 'Sustainability & ESG Team, LELOI METAL',
    summary:
      'Navigating EU Regulation 2023/956 Carbon Border Adjustment Mechanism (CBAM) for HS 7604 aluminium profiles. How LELOI METAL tracks direct and indirect embedded emissions from smelter billet to finished profile.',
    tags: ['CBAM', 'EU Regulation 2023/956', 'Carbon Emissions', 'Decarbonization', 'ESG']
  }
];

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-[#F1F4F8]/50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs uppercase font-heading font-semibold tracking-widest text-[#2F7BFF]">
            TECHNICAL KNOWLEDGE & TRADE INTELLIGENCE
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-[#0A2D5B] tracking-tight">
            Engineering Insights & Export Guides
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Peer-reviewed technical whitepapers, extrusion design for manufacturing (DFM) advice, and statutory customs tariff guides for global aluminium procurement teams.
          </p>
        </div>

        {/* Featured Cornerstone Article */}
        <div className="bg-gradient-to-br from-[#061D3B] to-[#0A2D5B] text-white rounded-2xl p-8 sm:p-12 shadow-lg relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold bg-[#2F7BFF] text-white px-3 py-1 rounded-full uppercase tracking-wider">
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
              className="p-6 flex flex-col justify-between space-y-6 hover:border-[#2F7BFF] transition-all group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-[#2F7BFF] uppercase tracking-wider">
                    {art.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {art.readTime}
                  </span>
                </div>

                <Link href={`/insights/${art.slug}`}>
                  <h3 className="font-heading font-bold text-lg text-[#0A2D5B] group-hover:text-[#2F7BFF] transition-colors line-clamp-2 leading-snug">
                    {art.title}
                  </h3>
                </Link>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {art.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {art.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-medium">
                  {art.publishedAt}
                </span>
                <Link
                  href={`/insights/${art.slug}`}
                  className="text-xs font-semibold text-[#2F7BFF] hover:underline flex items-center gap-1"
                >
                  Read Paper <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* Free DFM Drawing Review CTA */}
        <div className="bg-[#0A2D5B] text-white rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
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
