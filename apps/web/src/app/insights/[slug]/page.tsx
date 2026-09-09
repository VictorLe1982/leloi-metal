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

interface ArticleData {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishedAt: string;
  author: string;
  summary: string;
  sources: { name: string; url: string; note: string }[];
  sections: {
    heading: string;
    content: string[];
    table?: {
      headers: string[];
      rows: string[][];
    };
    callout?: {
      type: 'tip' | 'warning' | 'info';
      title: string;
      text: string;
    };
  }[];
}

const ARTICLES: Record<string, ArticleData> = {
  '6061-vs-6063-aluminium-extrusion-comparison': {
    slug: '6061-vs-6063-aluminium-extrusion-comparison',
    title: '6061 vs 6063 Aluminium Extrusions: Metallurgical Comparison, Machinability & Selection Guide',
    category: 'Alloy Metallurgy & Engineering',
    readTime: '8 min read',
    publishedAt: 'September 2026',
    author: 'Metallurgical Engineering Desk, LELOI METAL',
    summary:
      'A thorough engineering comparison between 6061-T6 structural alloy and 6063-T5 architectural extrusion profiles. Detailed comparison of yield strength, anodizing surface finish, CNC machinability, and cost factors.',
    sources: [
      {
        name: 'ASTM B221 Standard Specification for Aluminum and Aluminum-Alloy Extruded Bars, Rods, Wire, Profiles, and Tubes',
        url: 'https://www.astm.org/b0221_b0221m-21.html',
        note: 'Governing chemical composition and minimum tensile property standards.'
      },
      {
        name: 'The Aluminum Association Extrusion Design Manual',
        url: 'https://www.aluminum.org',
        note: 'Dimensional tolerances and die design guidelines.'
      }
    ],
    sections: [
      {
        heading: '1. Executive Summary: Core Metallurgical Differences',
        content: [
          'Alloy 6061 and Alloy 6063 belong to the 6000-series Al-Mg-Si (Aluminium-Magnesium-Silicon) heat-treatable alloys, which dominate over 80% of all commercial extruded aluminium worldwide.',
          'While both alloys achieve elevated mechanical properties through precipitation hardening (solution heat treatment followed by artificial aging to T5 or T6 temper), their chemical proportions dictate fundamentally different physical behaviors during extrusion and end use.',
          'In short: 6061 is formulated for structural strength, fracture toughness, and CNC machinability; whereas 6063 is formulated for maximum extrudability, intricate thin-wall geometry, and pristine anodized surface cosmetics.'
        ]
      },
      {
        heading: '2. Chemical Composition & Elemental Mechanics',
        content: [
          'The fundamental difference lies in the concentration of Magnesium (Mg), Silicon (Si), and trace additions of Copper (Cu) and Chromium (Cr).',
          'Alloy 6061 incorporates approximately 0.15% to 0.40% Copper and 0.04% to 0.35% Chromium. Copper enhances precipitation hardening, substantially increasing ultimate tensile and yield strength. However, Copper reduces natural corrosion resistance slightly and diminishes the optical clarity of anodized oxide layers.',
          'In contrast, Alloy 6063 maintains strictly capped copper (max 0.10%) and virtually zero chromium. The primary strengthening precipitate is purely Mg2Si, enabling fluid metal flow through extrusion dies without premature surface tearing.'
        ],
        table: {
          headers: ['Element', 'Alloy 6061 (wt %)', 'Alloy 6063 (wt %)'],
          rows: [
            ['Silicon (Si)', '0.40 – 0.80', '0.20 – 0.60'],
            ['Iron (Fe)', 'max 0.70', 'max 0.35'],
            ['Copper (Cu)', '0.15 – 0.40', 'max 0.10'],
            ['Manganese (Mn)', 'max 0.15', 'max 0.10'],
            ['Magnesium (Mg)', '0.80 – 1.20', '0.45 – 0.90'],
            ['Chromium (Cr)', '0.04 – 0.35', 'max 0.10'],
            ['Zinc (Zn)', 'max 0.25', 'max 0.10'],
            ['Titanium (Ti)', 'max 0.15', 'max 0.10'],
            ['Aluminium (Al)', 'Remainder (approx. 95.8–98.6%)', 'Remainder (approx. 97.5–99.3%)']
          ]
        }
      },
      {
        heading: '3. Mechanical Properties: Yield, Tensile & Hardness',
        content: [
          'When designing load-bearing frames, yield strength (Rp0.2) is the critical engineering threshold at which plastic deformation occurs.',
          'Alloy 6061-T6 provides a minimum yield strength of 240 MPa (typically 275 MPa in certified production test coupons), which is nearly double the yield strength of standard architectural 6063-T5 (130–145 MPa).',
          'For components subjected to dynamic loads, structural deflection limits, or cyclic stresses—such as automation gantry tracks, heavy vehicle chassis, or offshore platforms—6061-T6 is the mandatory baseline.'
        ],
        table: {
          headers: ['Mechanical Property', '6063-T5', '6063-T6', '6061-T6'],
          rows: [
            ['Tensile Strength Rm (MPa)', '175 – 190', '215 – 245', '290 – 310'],
            ['Yield Strength Rp0.2 (MPa)', '130 – 145', '170 – 210', '240 – 275'],
            ['Elongation A50 (%)', '10 – 12', '8 – 10', '9 – 12'],
            ['Webster Hardness (HW)', '8 – 10', '11 – 12', '14 – 16'],
            ['Brinell Hardness (HBW)', '65', '75', '95'],
            ['Thermal Conductivity (W/m·K)', '209', '201', '167']
          ]
        }
      },
      {
        heading: '4. Extrudability, Die Complexity & Surface Finishing',
        content: [
          'Extrudability is where 6063 decisively outperforms 6061. Alloy 6063 can be extruded at speeds exceeding 40 to 60 meters per minute through multi-cavity dies with wall thicknesses down to 0.8 mm without surface tearing.',
          'Because 6061 requires significantly higher extrusion pressures and lower run-out speeds (15–25 m/min) to prevent hot shortness, tooling wear is accelerated, and hollow profiles with high tongue ratios carry higher die costs.',
          'For surface finishing, 6063 provides a mirror-clean anodizing response with uniform matte or clear electrolytic deposition. 6061 anodizes to a slightly darker greyish hue due to microscopic intermetallic copper/silicon precipitates.'
        ],
        callout: {
          type: 'tip',
          title: 'LELOI METAL Engineering Recommendation',
          text: 'Specify 6063-T5 for architectural curtain walls, solar mounting rails, and visible enclosures where aesthetics and tight extrusion cost control dominate. Reserve 6061-T6 for structural machine components requiring extensive CNC milling, structural bolting, or dynamic load capacity.'
        }
      }
    ]
  },
  'vietnam-aluminium-extrusion-export-guide': {
    slug: 'vietnam-aluminium-extrusion-export-guide',
    title: 'The Complete Guide to Sourcing Aluminium Extrusions from Vietnam: Tariffs, FTAs & Logistics',
    category: 'International Trade & Supply Chain',
    readTime: '11 min read',
    publishedAt: 'September 2026',
    author: 'International Trade Compliance Desk, LELOI EXIM',
    summary:
      'How international procurement teams leverage CPTPP, EVFTA, and VKFTA to import originating aluminium profiles with 0% preferential duty. Step-by-step documentation, billet origin tracing, and ocean shipping lanes.',
    sources: [
      {
        name: 'Ministry of Industry and Trade of Vietnam (MOIT) Foreign Trade Agency',
        url: 'https://moit.gov.vn',
        note: 'Statutory rules of origin for CPTPP and EVFTA Certificates of Origin.'
      },
      {
        name: 'European Commission Access2Markets Portal (EVFTA Origin Protocols)',
        url: 'https://trade.ec.europa.eu/access-to-markets',
        note: 'Preferential tariff transition schedules for HS 7604.21 and 7604.29.'
      }
    ],
    sections: [
      {
        heading: '1. The Strategic Shift to Vietnam in Global Aluminium Procurement',
        content: [
          'Over the past five years, the global aluminium extrusion landscape has undergone structural realignment. Western trade remedies against Chinese aluminium—including US Section 301 and anti-dumping duties exceeding 200%, Canada SIMA duties up to 101.9%, and EU anti-dumping duties—have forced international buyers to establish compliant, resilient supply chains.',
          'Vietnam has emerged as the premier manufacturing and export hub in Southeast Asia, offering robust industrial infrastructure, competitive energy inputs, and a network of comprehensive Free Trade Agreements (FTAs).'
        ]
      },
      {
        heading: '2. Free Trade Agreement Advantages: 0% Tariff Pathways',
        content: [
          'Vietnamese aluminium profiles (HS 7604.10, 7604.21, 7604.29) enter major consumer markets under preferential tariff schedules, subject to statutory rules of origin compliance:',
          '• Canada (CPTPP): 0% import duty with valid Certificate of Origin Form CPTPP (vs. 5% MFN rate and punitive anti-dumping on non-compliant sources).',
          '• European Union (EVFTA): Preferential tariff protocol transitioning towards 0% duty with EUR.1 Certificate of Origin (vs. 7.5% MFN rate).',
          '• South Korea (VKFTA): 0% duty on originating profiles with electronic C/O exchange (vs. 8% MFN rate).',
          '• Japan (CPTPP / VJEPA): 0% duty on industrial profiles meeting regional value content requirements.'
        ]
      },
      {
        heading: '3. Rules of Origin (RoO) and Anti-Circumvention Compliance',
        content: [
          'Importing authorities worldwide strictly monitor aluminium imports to prevent illegal transshipment or circumvention. To legally qualify for 0% preferential rates, Vietnamese exporters must demonstrate substantive manufacturing transformation.',
          'At LELOI METAL, every export consignment conforms to strict Chapter 3 Rules of Origin. Production starts from primary or secondary alloy billets, cast or smelted and extruded with full heat-number traceability through extrusion, heat treatment, surface finishing, and CNC fabrication in Vietnam.',
          'Shipments are backed by registered Form CPTPP, EUR.1, or VKFTA Certificates of Origin issued by the Ministry of Industry and Trade (MOIT) or authorized chambers.'
        ],
        callout: {
          type: 'info',
          title: 'Traceability Guarantee',
          text: 'LELOI METAL maintains lot-specific chemical Mill Test Certificates (MTC) according to EN 10204 3.1, linking every extrusion bundle to its raw billet melt analysis.'
        }
      },
      {
        heading: '4. Shipping Routes, Lead Times & Container Packing',
        content: [
          'Vietnam features deep-water international container terminals connected to direct transpacific and European ocean lines:',
          '• Northern Vietnam (Hai Phong Port / Lach Huyen Deep-Sea Terminal): Direct container services to North America West Coast (Vancouver / Long Beach: 18–22 days transit) and Europe (Hamburg / Rotterdam: 28–34 days).',
          '• Southern Vietnam (Cai Mep / Cat Lai Port): Direct services across Asia, Australia, and the Middle East (Jebel Ali: 14–18 days).',
          'All export profiles are packed in heavy-duty wooden crates or steel-strapped bundles with protective poly film, foam separators, and silica desiccant bags to prevent moisture staining during sea transit.'
        ]
      }
    ]
  },
  'cbam-guide-for-aluminium-importers': {
    slug: 'cbam-guide-for-aluminium-importers',
    title: 'EU CBAM Compliance for Aluminium Extrusion Importers: Carbon Accounting & Reporting Requirements',
    category: 'Sustainability & ESG Compliance',
    readTime: '9 min read',
    publishedAt: 'September 2026',
    author: 'Sustainability & ESG Team, LELOI METAL',
    summary:
      'Navigating EU Regulation 2023/956 Carbon Border Adjustment Mechanism (CBAM) for HS 7604 aluminium profiles. How LELOI METAL tracks direct and indirect embedded emissions from smelter billet to finished profile.',
    sources: [
      {
        name: 'Regulation (EU) 2023/956 of the European Parliament and of the Council on establishing a carbon border adjustment mechanism',
        url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023R0956',
        note: 'Primary EU legislative framework governing embedded carbon obligations.'
      },
      {
        name: 'European Commission CBAM Guidance for Importers and Third-Country Producers',
        url: 'https://taxation-customs.ec.europa.eu/carbon-border-adjustment-mechanism_en',
        note: 'Standardized communication template and greenhouse gas calculation methodologies.'
      }
    ],
    sections: [
      {
        heading: '1. What Is EU CBAM and Why Does It Impact Aluminium?',
        content: [
          'The European Union Carbon Border Adjustment Mechanism (CBAM) entered its transitional application phase under Regulation (EU) 2023/956. CBAM is designed to equalize the price of carbon between domestic EU production (under the EU Emissions Trading System, ETS) and imported goods.',
          'Aluminium is one of the primary covered sectors (along with steel, cement, fertilizers, hydrogen, and electricity). Specifically, HS Chapter 76 headings—including 7604 (bars, rods, and profiles) and 7606 (plates and sheets)—are subject to mandatory quarterly emission reporting and upcoming CBAM certificate surrender requirements.'
        ]
      },
      {
        heading: '2. Direct vs. Indirect Embedded Emissions in Aluminium Extrusions',
        content: [
          'For aluminium extrusions (HS 7604), CBAM requires calculating both Direct and Indirect embedded emissions expressed in tonnes of CO2 equivalent per tonne of product (t CO2e / t product):',
          '• Direct Emissions: Greenhouse gases emitted during the physical fabrication process (e.g., combustion of natural gas or LPG in extrusion billet reheat furnaces, aging ovens, and powder coating curing lines).',
          '• Indirect Emissions: Greenhouse gases resulting from the generation of electricity consumed during production, including press hydraulics, cooling systems, anodizing rectifiers, and auxiliary equipment.',
          '• Precursor Embedded Emissions: The embedded carbon intensity of the input aluminium billet itself, which varies dramatically depending on whether the primary smelting used hydro, nuclear, gas, or coal-fired power.'
        ]
      },
      {
        heading: '3. LELOI METAL Decarbonization Roadmap & Reporting Dossiers',
        content: [
          'To ensure uninterrupted access for our European partners, LELOI METAL provides standardized CBAM reporting dossiers conforming to the European Commission quarterly XML reporting format.',
          'Key elements of our reporting package include:',
          '1. Specific Embedded Direct Emissions (Scope 1) verified per production campaign.',
          '2. Specific Embedded Indirect Emissions (Scope 2) calculated against local grid emission factors and certified renewable energy attribution.',
          '3. Raw Billet Precursor Declaration from certified low-carbon smelters utilizing hydroelectric power, achieving significantly lower carbon intensity than the global industry average.'
        ],
        callout: {
          type: 'tip',
          title: 'CBAM Ready for 2026+',
          text: 'LELOI METAL supplies ready-to-file CBAM communication templates alongside your commercial invoice and EUR.1 certificate, streamlining submission to your national competent authority.'
        }
      }
    ]
  }
};

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

  return {
    title: `${article.title} | LELOI METAL`,
    description: article.summary
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
    <div className="min-h-screen bg-[#F1F4F8]/50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <div className="max-w-4xl mx-auto space-y-10">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-[#2F7BFF]">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/insights" className="hover:text-[#2F7BFF]">
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
            <span className="font-semibold text-xs bg-[#2F7BFF] text-white px-3 py-1 rounded-full uppercase tracking-wider">
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

          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-[#0A2D5B] tracking-tight leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center gap-2 text-xs text-slate-600 font-medium pt-1">
            <User className="w-3.5 h-3.5 text-[#2F7BFF]" />
            <span>By {article.author}</span>
          </div>
        </header>

        {/* Executive Summary Box */}
        <div className="p-6 bg-blue-50/70 border border-blue-200 rounded-2xl space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-[#2F7BFF] flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4" />
            Executive Summary & Key Takeaways
          </div>
          <p className="text-sm text-slate-700 leading-relaxed font-medium">
            {article.summary}
          </p>
        </div>

        {/* Main Article Content */}
        <main className="bg-white rounded-2xl shadow-xs border border-[#E2E8F0] p-6 sm:p-10 space-y-10">
          {article.sections.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#0A2D5B] border-b border-slate-100 pb-2">
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
                      <tr className="bg-[#0A2D5B] text-white">
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
                                cIdx === 0 ? 'font-bold text-[#0A2D5B]' : ''
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
              <BookOpen className="w-4 h-4 text-[#2F7BFF]" />
              Verified Statutory Sources & Technical References
            </div>
            <ul className="space-y-2 text-xs text-slate-600">
              {article.sources.map((src, sIdx) => (
                <li key={sIdx} className="flex items-start gap-2">
                  <span className="text-[#2F7BFF] mt-0.5">•</span>
                  <div>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#0A2D5B] hover:text-[#2F7BFF] hover:underline inline-flex items-center gap-1"
                    >
                      {src.name} <ExternalLink className="w-3 h-3 text-[#2F7BFF]" />
                    </a>
                    <div className="text-[11px] text-slate-500 mt-0.5">{src.note}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </main>

        {/* Conversion & Next Steps CTA */}
        <div className="bg-[#0A2D5B] text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
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
