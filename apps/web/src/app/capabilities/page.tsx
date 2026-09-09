import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, Badge, Button } from '@leloi/ui';
import {
  Factory,
  Cpu,
  Layers,
  Settings2,
  Microscope,
  FileCheck,
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Manufacturing Capabilities | Precision Aluminium Extrusion & CNC Machining Vietnam',
  description:
    'Comprehensive manufacturing capabilities of LELOI METAL: Extrusion presses, in-house die design, CNC long-bed machining, precision mitre cutting, anodizing, powder coating and CMM quality control.'
};

const CAPABILITIES = [
  {
    slug: 'aluminium-extrusion',
    name: 'Aluminium Extrusion Presses',
    description: 'Automated horizontal extrusion lines with dual pullers, high-velocity air/water quench systems and computer-controlled aging ovens.',
    icon: Factory,
    specs: ['Alloys: 6063, 6061, 6005A, 6082', 'Tempers: T4, T5, T6, T66', 'EN 755 & ASTM B221 precision tolerances']
  },
  {
    slug: 'cnc-machining',
    name: 'Precision CNC Machining',
    description: '3-axis and 4-axis long-bed CNC machining centers specialized in multi-meter aluminium extrusion milling, slotting, pocketing and chamfering.',
    icon: Cpu,
    specs: ['Multi-meter profile bed capacity', 'Tight machining tolerances (ISO 2768-m)', 'Custom hole patterns and slot milling']
  },
  {
    slug: 'anodizing',
    name: 'Anodizing & Electro-Coloring',
    description: 'Automated immersion anodizing line providing uniform oxide layer thickness from 10 to 25 microns for harsh exterior and marine environments.',
    icon: Layers,
    specs: ['Clear Natural, Satin Black, Bronze', '10–25 µm layer thickness (Class I & II)', 'Qualanod & architectural grade']
  },
  {
    slug: 'powder-coating',
    name: 'Powder Coating & Pre-treatment',
    description: 'Electrostatic powder coating booths with multi-stage chemical pre-treatment compliant with AAMA 2604/2605 specifications.',
    icon: Settings2,
    specs: ['AAMA 2603 / 2604 / 2605 compliant', 'Extensive RAL color library', 'Superior UV resistance and salt spray life']
  },
  {
    slug: 'precision-cutting',
    name: 'High-Precision Cutting',
    description: 'Automatic CNC double-mitre and single-head carbide saws with digital angle positioning for burr-free cut-to-length profile components.',
    icon: Settings2,
    specs: ['Tight length tolerance (±0.2 mm)', 'Compound miter angles (45° / 90°)', 'Automated length stop feeding']
  },
  {
    slug: 'quality-control',
    name: 'Quality Control & Metrology',
    description: 'Dedicated in-house QC laboratory equipped with optical profile projectors, CMM dimensional measurement, optical spectrometry and hardness testers.',
    icon: Microscope,
    specs: ['EN 10204 3.1 Mill Test Reports', 'Spectrometry alloy chemical verification', 'Webster & Barcol hardness testing']
  }
];

export default function CapabilitiesPage() {
  return (
    <div className="min-h-screen bg-[#F1F4F8]/50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs uppercase font-heading font-semibold tracking-widest text-[#2F7BFF]">
            PRECISION MANUFACTURING
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-[#0A2D5B] tracking-tight">
            Factory Manufacturing Capabilities
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Our integrated manufacturing facility in Vietnam delivers full-cycle production from raw aluminium billet to finished, export-ready components.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CAPABILITIES.map((cap) => {
            const Icon = cap.icon;
            return (
              <Card key={cap.slug} variant="technical" className="p-6 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#0A2D5B]/5 flex items-center justify-center text-[#0A2D5B] mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-[#0A2D5B]">
                    {cap.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {cap.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-[#E2E8F0] space-y-1.5">
                    {cap.specs.map((s, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-xs text-[#0A2D5B]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2F7BFF] shrink-0" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Verified Process
                  </span>
                  <Link
                    href={`/rfq?capability=${cap.slug}`}
                    className="text-xs font-heading font-semibold text-[#0A2D5B] hover:text-[#2F7BFF] flex items-center gap-1"
                  >
                    Request Quote →
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Engineering CTA */}
        <div className="bg-[#0A2D5B] text-white rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
              Have an Engineering Specification or Drawing?
            </h3>
            <p className="text-sm text-slate-300">
              Send your proprietary CAD models (STEP, DWG, DXF) to our engineering team for instant DFM analysis, die feasibility review, and export pricing.
            </p>
          </div>
          <Link href="/rfq" className="shrink-0">
            <Button variant="cta" size="xl">
              Start Engineering Review →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
