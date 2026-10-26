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
  CheckCircle2,
  Award,
  Network
} from 'lucide-react';
import { CERTIFICATIONS, FACTORY_EQUIPMENT, AFFILIATED_NETWORK } from '@/data/company';

export const metadata: Metadata = {
  title: 'Manufacturing Capabilities | Aluminium Extrusion Factory Vietnam | LELOI METAL',
  description:
    'ISO 9001:2015 certified aluminium factory in Hung Yen, Vietnam: 5-inch and 6-inch extrusion presses, age-hardening oven, two German-standard powder coating lines, wood-grain transfer and four CNC fabrication centres.',
  keywords: [
    'aluminium extrusion factory vietnam',
    'aluminium press 5 inch 6 inch',
    'german standard powder coating line vietnam',
    'wood grain aluminium profile vietnam',
    'iso 9001 aluminium manufacturer'
  ],
  alternates: { canonical: 'https://leloimetal.com/capabilities' }
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
    <div className="min-h-screen bg-light-gray/50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs uppercase font-heading font-semibold tracking-widest text-blue">
            PRECISION MANUFACTURING
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-navy tracking-tight">
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
                  <div className="w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center text-navy mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-navy">
                    {cap.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {cap.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-200 space-y-1.5">
                    {cap.specs.map((s, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-xs text-navy">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue shrink-0" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <Link
                    href={`/capabilities/${cap.slug}`}
                    className="text-xs font-heading font-semibold text-blue hover:underline flex items-center gap-1"
                  >
                    View Capability Detail
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href={`/rfq?capability=${cap.slug}`}
                    className="text-xs font-heading font-semibold text-navy hover:text-blue"
                  >
                    Request Quote →
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Installed Equipment & Certification */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
          <div className="px-6 sm:px-8 py-6 border-b border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-xs uppercase font-heading font-semibold tracking-widest text-blue mb-1">
                GROUP MANUFACTURING FACILITY
              </div>
              <h2 className="text-2xl font-bold font-heading text-navy">
                Installed Equipment — Hung Yen Plant
              </h2>
            </div>
            {CERTIFICATIONS.map((cert) => (
              <span
                key={cert.standard}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold"
                title={cert.scope}
              >
                <Award className="w-3.5 h-3.5 text-emerald-600" />
                {cert.standard} Certified
              </span>
            ))}
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-light-gray border-b border-slate-200 text-xs uppercase tracking-wider text-navy">
                  <th className="py-3 px-6 font-bold">Equipment</th>
                  <th className="py-3 px-6 font-bold w-20 text-center">Units</th>
                  <th className="py-3 px-6 font-bold">Production Role</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {FACTORY_EQUIPMENT.map((item) => (
                  <tr key={item.name} className="hover:bg-blue-50/30 transition-colors">
                    <td className="py-4 px-6 font-semibold text-navy align-top">
                      {item.name}
                    </td>
                    <td className="py-4 px-6 text-center align-top">
                      <span className="inline-block px-2.5 py-1 rounded-lg bg-navy text-white text-xs font-mono font-bold">
                        {item.quantity}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-xs text-slate-600 leading-relaxed align-top">
                      {item.detail}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="px-6 sm:px-8 py-5 bg-light-gray border-t border-slate-200 flex items-start gap-3">
            <Network className="w-5 h-5 text-blue shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              <span className="font-bold text-navy block mb-0.5">
                Plus {AFFILIATED_NETWORK.factoryCount} affiliated partner factories —{' '}
                {AFFILIATED_NETWORK.combinedAnnualCapacityTonnes.toLocaleString('en-US')}+
                tonnes/year combined
              </span>
              {AFFILIATED_NETWORK.description}
            </div>
          </div>
        </div>

        {/* Engineering CTA */}
        <div className="bg-navy text-white rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
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
