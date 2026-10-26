import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Card, Badge, Button } from '@leloi/ui';
import {
  Clock,
  Calendar,
  User,
  ShieldCheck,
  ExternalLink,
  ArrowRight,
  ChevronRight,
  BookOpen,
  Share2,
  CheckCircle2,
  AlertCircle,
  FileCheck2
} from 'lucide-react';

import { ARTICLES, INSIGHT_SLUGS, getArticleBySlug } from '@/data/insights';
import { getFamiliesForArticle, getRelatedArticles } from '@/data/content-cluster';

const BASE_URL = 'https://leloimetal.com';

export function generateStaticParams() {
  return INSIGHT_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES[slug];

  if (!article) {
    return {
      title: 'Article Not Found | LELOI METAL',
      description: 'The requested technical article could not be located.'
    };
  }

  const canonicalUrl = `${BASE_URL}/insights/${article.slug}`;

  return {
    title: article.seoTitle ?? `${article.title} | LELOI METAL`,
    description: article.summary,
    keywords: [article.category, 'aluminium extrusion Vietnam', 'LELOI METAL'],
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.summary,
      url: canonicalUrl,
      siteName: 'LELOI METAL',
      authors: [article.author]
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.summary
    }
  };
}

export default async function ArticleDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = ARTICLES[slug];

  if (!article) {
    notFound();
  }

  const clusterFamilies = getFamiliesForArticle(article);
  const relatedArticles = getRelatedArticles(article);

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Insights', item: `${BASE_URL}/insights` },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: `${BASE_URL}/insights/${article.slug}`
      }
    ]
  };

  // Schema.org TechArticle JSON-LD
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: article.title,
    description: article.summary,
    author: {
      '@type': 'Organization',
      name: article.author
    },
    publisher: {
      '@type': 'Organization',
      name: 'LELOI METAL',
      url: 'https://leloimetal.com'
    },
    datePublished: '2026-09-01',
    dateModified: '2026-09-09'
  };

  return (
    <div className="min-h-screen bg-light-gray/50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="max-w-4xl mx-auto space-y-10">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-blue">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/insights" className="hover:text-blue">
            Insights
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-800 truncate max-w-[280px] sm:max-w-md">
            {article.title}
          </span>
        </nav>

        {/* Article Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="font-semibold text-xs bg-blue text-white px-3 py-1 rounded-full uppercase tracking-wider">
              {article.category}
            </span>
            <span className="text-slate-500 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> {article.publishedAt}
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-500 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {article.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-navy tracking-tight leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center gap-2 text-xs text-slate-600 font-medium pt-1">
            <User className="w-3.5 h-3.5 text-blue" />
            <span>By {article.author}</span>
          </div>
        </header>

        {/* Executive Summary Box */}
        <div className="p-6 bg-blue-50/70 border border-blue-200 rounded-2xl space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-blue flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4" />
            Executive Summary & Key Takeaways
          </div>
          <p className="text-sm text-slate-700 leading-relaxed font-medium">
            {article.summary}
          </p>
        </div>

        {/* Main Article Content */}
        <main className="bg-white rounded-2xl shadow-xs border border-slate-200 p-6 sm:p-10 space-y-10">
          {article.sections.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-navy border-b border-slate-100 pb-2">
                {section.heading}
              </h2>

              <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
                {section.content.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>

              {/* Optional Table */}
              {section.table && (
                <div className="overflow-x-auto my-6 border border-slate-200 rounded-xl">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr className="bg-navy text-white">
                        {section.table.headers.map((th, thIdx) => (
                          <th key={thIdx} className="py-3 px-4 font-semibold">
                            {th}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      {section.table.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-50">
                          {row.map((cell, cIdx) => (
                            <td
                              key={cIdx}
                              className={`py-2.5 px-4 ${
                                cIdx === 0 ? 'font-bold text-navy' : ''
                              }`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Optional Callout */}
              {section.callout && (
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl space-y-1 my-4">
                  <div className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-600" />
                    {section.callout.title}
                  </div>
                  <p className="text-xs text-amber-800 leading-relaxed">
                    {section.callout.text}
                  </p>
                </div>
              )}
            </section>
          ))}

          {/* Peer-Reviewed Sources & Statutory References Box */}
          <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl space-y-3 mt-10">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-blue" />
              Verified Statutory Sources & Technical References
            </div>
            <ul className="space-y-2 text-xs text-slate-600">
              {article.sources.map((src, sIdx) => (
                <li key={sIdx} className="flex items-start gap-2">
                  <span className="text-blue mt-0.5">•</span>
                  <div>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-navy hover:text-blue hover:underline inline-flex items-center gap-1"
                    >
                      {src.name} <ExternalLink className="w-3 h-3 text-blue" />
                    </a>
                    <div className="text-[11px] text-slate-500 mt-0.5">{src.note}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </main>

        {/* Hub half of the content cluster: this guide -> the products it supports */}
        {clusterFamilies.length > 0 && (
          <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
            <h2 className="text-sm font-bold font-heading text-navy uppercase tracking-wider mb-4">
              Products This Guide Applies To
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {clusterFamilies.map((family) => (
                <Link
                  key={family.slug}
                  href={`/products/${family.divisionSlug}/${family.slug}`}
                  className="group p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue transition-colors"
                >
                  <h3 className="text-sm font-bold font-heading text-navy group-hover:text-blue transition-colors leading-snug">
                    {family.name}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-1.5 line-clamp-2 leading-snug">
                    {family.summary}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Sibling articles sharing a topic tag */}
        {relatedArticles.length > 0 && (
          <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
            <h2 className="text-sm font-bold font-heading text-navy uppercase tracking-wider mb-4">
              Related Reading
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedArticles.map((related) => (
                <Link
                  key={related.slug}
                  href={`/insights/${related.slug}`}
                  className="group p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue transition-colors"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue">
                    {related.category}
                  </span>
                  <h3 className="text-sm font-bold font-heading text-navy group-hover:text-blue transition-colors mt-1 leading-snug line-clamp-3">
                    {related.title}
                  </h3>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Conversion & Next Steps CTA */}
        <div className="bg-navy text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-bold font-heading">
              Ready to Validate Your Profile Drawing or Alloy Spec?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg">
              Upload your CAD or 2D technical drawings for a confidential Design for Manufacturing (DFM) review and landed FOB/CIF cost quotation from LELOI METAL.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link href="/rfq">
              <Button variant="cta" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Request DFM Quote
              </Button>
            </Link>
            <Link href="/insights">
              <Button variant="outline" size="md" className="border-white/30 text-white hover:bg-white/10">
                All Articles
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
