import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  ShieldCheck,
  CheckCircle2,
  FileCheck,
  Layers,
  Sparkles,
  ArrowRight,
  Award,
  Clock,
  Sun,
  Droplets,
  Palette,
  FileUp,
  Building2,
  Flame,
  Check
} from 'lucide-react';
import { Button, Badge, Card } from '@leloi/ui';

export const metadata: Metadata = {
  title: 'AkzoNobel 10-Year Warranty Powder Coating | LELOI METAL',
  description:
    'Industrial electrostatic powder coating and Qualicoat-certified surface finishing for architectural and industrial aluminium extrusions with certified AkzoNobel 10-Year Warranty.',
  keywords: [
    'powder coating aluminium',
    'AkzoNobel Interpon D',
    '10 year warranty aluminium coating',
    'AAMA 2604 aluminium',
    'AAMA 2605 aluminium powder coat',
    'architectural powder coating Vietnam',
    'LELOI METAL finishing'
  ]
};

export default function PowderCoatingPage() {
  const steps = [
    {
      step: '01',
      title: 'Pre-Treatment & Degreasing',
      desc: 'Multi-stage alkaline wash, acid deoxidation, and deionized water rinsing to remove all extrusion oils, oxides, and micro-contaminants.'
    },
    {
      step: '02',
      title: 'Chemical Conversion Coating',
      desc: 'Qualicoat-approved trivalent chrome or zirconium conversion coating creating a microscopic passivated bond layer for maximum adhesion.'
    },
    {
      step: '03',
      title: 'Moisture Dry-Off Oven',
      desc: 'Controlled convective drying at 110–130°C to ensure 100% moisture-free surfaces prior to electrostatic powder application.'
    },
    {
      step: '04',
      title: 'Electrostatic Powder Spray',
      desc: 'Automated reciprocal spray guns applying AkzoNobel Interpon D architectural thermoset powder with uniform 60–80µm dry film thickness (DFT).'
    },
    {
      step: '05',
      title: 'Cross-Linking Curing Oven',
      desc: 'High-precision thermal curing tunnel at 180–200°C for 15–20 minutes, fully polymerizing the polyester resin into a resilient protective matrix.'
    },
    {
      step: '06',
      title: 'QC Metrology & Batch Inspection',
      desc: 'Cross-hatch adhesion (ASTM D3359), impact resistance (ASTM D2794), gloss measurement, film thickness gauging, and solvent rub testing.'
    }
  ];

  const standards = [
    {
      standard: 'AAMA 2603',
      performance: 'Standard Architectural',
      exteriorExposure: '1 Year South Florida',
      saltSpray: '1,500 Hours (ASTM B117)',
      typicalUse: 'Interior fixtures, light residential profiles'
    },
    {
      standard: 'AAMA 2604 / Qualicoat Class 1',
      performance: 'High-Performance Architectural',
      exteriorExposure: '5 Years South Florida',
      saltSpray: '3,000 Hours (ASTM B117)',
      typicalUse: 'Commercial storefronts, curtain walls, residential windows'
    },
    {
      standard: 'AAMA 2605 / Qualicoat Class 2',
      performance: 'Superior Ultra-Durable (AkzoNobel D2525)',
      exteriorExposure: '10 Years South Florida',
      saltSpray: '4,000+ Hours (ASTM B117)',
      typicalUse: 'High-rise facades, monumental architecture, coastal & marine'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* 1. HERO SECTION */}
      <section className="bg-[#061D3B] text-white py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(47,123,255,0.15),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-[11px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Official 10-Year Warranty Partner
            </span>
            <span className="text-[11px] font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full border border-blue-500/30">
              AkzoNobel Interpon D Approved
            </span>
            <span className="text-[11px] font-bold uppercase tracking-wider bg-slate-500/20 text-slate-300 px-3 py-1 rounded-full border border-white/20">
              Qualicoat & AAMA 2604 / 2605
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold font-heading text-white tracking-tight max-w-3xl leading-tight">
            Certified AkzoNobel Powder Coating & Advanced Surface Finishing
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mt-4 leading-relaxed font-sans">
            Precision electrostatic powder coating engineered for extreme UV exposure, coastal humidity, and architectural longevity. Backed by an enforceable <strong>10-Year Performance Warranty</strong> directly from LELOI METAL and AkzoNobel.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <Link href="/rfq?category=architectural&finish=powder-coating">
              <Button variant="cta" size="lg" className="shadow-lg shadow-blue-500/20 gap-2">
                Request Coated Profile RFQ
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/rfq?mode=upload">
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 gap-2"
                leftIcon={<FileUp className="w-4 h-4 text-[#2F7BFF]" />}
              >
                Upload Section Drawing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. AKZONOBEL PARTNERSHIP & 10-YEAR WARRANTY CALLOUT */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-linear-to-bl from-emerald-50 via-blue-50 to-transparent -z-0 rounded-bl-full pointer-events-none" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                <Award className="w-4 h-4 text-emerald-600" />
                Guaranteed Project Durability
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0A2D5B]">
                The AkzoNobel 10-Year Architectural Warranty
              </h2>
              <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                LELOI METAL applies genuine <strong>AkzoNobel Interpon D architectural powder series</strong> formulated with super-durable polyester and fluoropolymer technologies. Each production batch undergoes verified multi-stage pre-treatment and cross-hatch testing to issue a <strong>formal 10-Year Certificate of Warranty</strong> covering:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sm text-[#0A2D5B] block">Anti-Chalking Guarantee</strong>
                    <span className="text-xs text-slate-500">ASTM D4214 chalking rating ≥ 8 throughout the 10-year period.</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sm text-[#0A2D5B] block">Anti-Fading & Color Retention</strong>
                    <span className="text-xs text-slate-500">Color shift \(\Delta E \leq 5.0\) (Hunter Units) under outdoor Florida UV exposure.</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sm text-[#0A2D5B] block">Zero Peeling, Cracking or Blistering</strong>
                    <span className="text-xs text-slate-500">100% adhesion integrity under ASTM D3359 Cross-Hatch Tape Testing.</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sm text-[#0A2D5B] block">Marine & Coastal Resistance</strong>
                    <span className="text-xs text-slate-500">Salt-spray corrosion resistance tested up to 3,000–4,000+ hours (ASTM B117).</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#0A2D5B] text-white p-6 rounded-xl border border-white/10 flex flex-col justify-between">
              <div>
                <div className="text-xs text-blue-300 font-semibold uppercase tracking-wider">
                  Quality Milestone
                </div>
                <div className="text-3xl font-extrabold font-heading text-white mt-1">
                  10 YEARS
                </div>
                <div className="text-xs text-slate-300 mt-1">
                  Enforceable Mill Performance Warranty
                </div>
                <div className="border-t border-white/15 my-4 pt-4 space-y-2 text-xs text-slate-200">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Coating Partner:</span>
                    <span className="font-semibold">AkzoNobel Interpon D</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Standard Spec:</span>
                    <span className="font-semibold">AAMA 2604 / 2605</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Film Thickness:</span>
                    <span className="font-semibold">60 – 80 µm (DFT)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Gloss Levels:</span>
                    <span className="font-semibold">Matt (30%), Satin, Gloss</span>
                  </div>
                </div>
              </div>
              <Link
                href="/rfq?mode=upload&finish=AkzoNobel-10yr"
                className="mt-4 bg-[#2F7BFF] hover:bg-[#1B6BF8] text-white font-bold py-2.5 px-4 rounded-lg text-xs text-center transition-colors block"
              >
                Inquire With Drawing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SIX-STAGE POWDER COATING PROCESS */}
      <section className="py-16 bg-white border-t border-b border-[#E2E8F0] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold font-heading text-[#2F7BFF] uppercase tracking-widest">
              State-of-the-Art Line
            </span>
            <h2 className="text-3xl font-bold font-heading text-[#0A2D5B] mt-2">
              Automated 6-Stage Electrostatic Coating Process
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Consistent film thickness and flawless finish achieved through fully conveyorized pretreatment, electrostatic powder application, and continuous curing monitoring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div
                key={s.step}
                className="p-6 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] hover:bg-white hover:border-[#2F7BFF] hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black font-heading text-[#2F7BFF]">
                    {s.step}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-[#2F7BFF] flex items-center justify-center group-hover:bg-[#2F7BFF] group-hover:text-white transition-colors">
                    <Check className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-base font-bold font-heading text-[#0A2D5B] group-hover:text-[#2F7BFF] transition-colors">
                  {s.title}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PERFORMANCE STANDARDS MATRIX (AAMA 2603 vs 2604 vs 2605) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <span className="text-xs font-bold font-heading text-[#2F7BFF] uppercase tracking-widest">
            International Compliance
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0A2D5B] mt-1">
            Coating Standards & Architectural Specifications
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            LELOI METAL certifies every batch according to international AAMA standards and Qualicoat specifications.
          </p>
        </div>

        <div className="overflow-x-auto bg-white rounded-xl border border-[#E2E8F0] shadow-xs">
          <table className="w-full text-left text-xs text-slate-700">
            <thead className="bg-[#0A2D5B] text-white uppercase text-[11px] font-heading font-semibold">
              <tr>
                <th className="p-4">Standard / Spec</th>
                <th className="p-4">Classification</th>
                <th className="p-4">South Florida UV Test</th>
                <th className="p-4">Salt Spray Resistance</th>
                <th className="p-4">Recommended Application</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {standards.map((st, idx) => (
                <tr key={st.standard} className={idx === 2 ? 'bg-emerald-50/50 font-medium' : 'hover:bg-slate-50'}>
                  <td className="p-4 font-bold text-[#0A2D5B] flex items-center gap-2">
                    {idx === 2 && <ShieldCheck className="w-4 h-4 text-emerald-600" />}
                    {st.standard}
                  </td>
                  <td className="p-4">{st.performance}</td>
                  <td className="p-4">{st.exteriorExposure}</td>
                  <td className="p-4 font-mono text-[11px] text-blue-700">{st.saltSpray}</td>
                  <td className="p-4 text-slate-600">{st.typicalUse}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. COLOR PALETTES & FINISH TEXTURES */}
      <section className="py-16 bg-white border-t border-b border-[#E2E8F0] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold font-heading text-[#2F7BFF] uppercase tracking-widest">
                Aesthetics & Finishes
              </span>
              <h2 className="text-3xl font-bold font-heading text-[#0A2D5B] mt-2">
                RAL Custom Colors & Premium Architectural Textures
              </h2>
              <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                Whether for minimalist residential luxury or landmark commercial developments, our computerized color-matching lab produces exact RAL, Pantone, and custom architect swatches.
              </p>

              <div className="mt-6 space-y-3 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#2F7BFF]" />
                  <span><strong>Matte & Satin Architecture:</strong> 25–35% gloss level for contemporary glare-free building envelopes.</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#2F7BFF]" />
                  <span><strong>Sand-Texture & Micro-Structure:</strong> Scratch-resistant tactile finish, ideal for high-traffic door frames and balustrades.</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#2F7BFF]" />
                  <span><strong>Metallic & Pearl Accents:</strong> Bonded metallic particles delivering consistent pearlescent sparkle without clouding.</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#2F7BFF]" />
                  <span><strong>Wood-Grain Sublimation:</strong> Realistic timber aesthetics with the fire safety and durability of aluminium.</span>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <Link href="/contact?subject=Color+Sample+Request">
                  <Button variant="primary" size="md">
                    Request Physical Color Swatches
                  </Button>
                </Link>
              </div>
            </div>

            {/* Visual Color Grid */}
            <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-[#E2E8F0]">
              <div className="text-xs font-bold text-[#0A2D5B] mb-4 uppercase tracking-wider flex items-center justify-between">
                <span>Popular Architectural RAL Palettes</span>
                <span className="text-slate-400 font-normal">AkzoNobel Approved</span>
              </div>
              <div className="grid grid-cols-3 gap-3 text-[11px]">
                <div className="bg-white p-3 rounded-lg border border-slate-200 text-center shadow-xs">
                  <div className="w-full h-12 bg-[#1A1D20] rounded-md mb-2" />
                  <div className="font-bold text-slate-800">RAL 7016</div>
                  <div className="text-slate-500 text-[10px]">Anthracite Grey</div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-slate-200 text-center shadow-xs">
                  <div className="w-full h-12 bg-[#0E0E10] rounded-md mb-2" />
                  <div className="font-bold text-slate-800">RAL 9005</div>
                  <div className="text-slate-500 text-[10px]">Jet Black Matt</div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-slate-200 text-center shadow-xs">
                  <div className="w-full h-12 bg-[#F4F4F4] border border-slate-300 rounded-md mb-2" />
                  <div className="font-bold text-slate-800">RAL 9016</div>
                  <div className="text-slate-500 text-[10px]">Traffic White</div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-slate-200 text-center shadow-xs">
                  <div className="w-full h-12 bg-[#3A3D40] rounded-md mb-2" />
                  <div className="font-bold text-slate-800">RAL 7021</div>
                  <div className="text-slate-500 text-[10px]">Black Grey</div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-slate-200 text-center shadow-xs">
                  <div className="w-full h-12 bg-[#483C32] rounded-md mb-2" />
                  <div className="font-bold text-slate-800">RAL 8019</div>
                  <div className="text-slate-500 text-[10px]">Grey Brown</div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-slate-200 text-center shadow-xs">
                  <div className="w-full h-12 bg-[#8A8D8F] rounded-md mb-2" />
                  <div className="font-bold text-slate-800">RAL 9006</div>
                  <div className="text-slate-500 text-[10px]">White Aluminium</div>
                </div>
              </div>
              <div className="mt-4 text-[11px] text-slate-500 text-center">
                Custom RAL / NCS / Pantone formulations available for minimum order quantities (MOQ).
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONVERSION CTA SECTION */}
      <section className="py-20 bg-[#061D3B] text-white px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2F7BFF]">
            Direct Factory Partnership
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mt-2">
            Ready to Quote Your Powder Coated Profiles?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            Send your CAD section drawings along with your target RAL color, gloss preference, and project environment. Our engineering team returns comprehensive DFM analysis and FOB/CIF quotations within 24–48 hours.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/rfq?mode=upload&finish=powder-coating">
              <Button variant="cta" size="lg" className="gap-2">
                Submit Drawing & RFQ
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/products/architectural">
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
              >
                View Architectural Systems
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
