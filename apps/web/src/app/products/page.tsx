import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, Badge, Button } from '@leloi/ui';
import { ArrowRight, Layers, Settings2, Sun, Building2, Flame, Cpu, FileUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Aluminium Extrusion Products & OEM Solutions | LELOI METAL',
  description:
    'Explore LELOI METAL export product lines: Custom extrusions, industrial T-slot profiles, solar mounting solutions, architectural systems, heat sink thermal profiles and precision CNC machined OEM components.'
};

const CATEGORIES = [
  {
    slug: 'custom-aluminium-extrusions',
    name: 'Custom Aluminium Extrusions',
    summary: 'Precision engineered custom profiles for global OEM sourcing, tailored to exact dimensional and alloy tolerances.',
    alloys: ['6063', '6061', '6005A', '6082'],
    icon: Layers,
    applications: ['Automotive', 'Industrial Machinery', 'Custom Enclosures']
  },
  {
    slug: 'industrial-aluminium-profiles',
    name: 'Industrial Aluminium Profiles',
    summary: 'Modular T-slot profiles, conveyor guides, cleanroom structures and heavy-duty automation framing systems.',
    alloys: ['6063-T5', '6061-T6'],
    icon: Settings2,
    applications: ['Automation Lines', 'Robotics Guards', 'Workstations']
  },
  {
    slug: 'solar-aluminium-profiles',
    name: 'Solar Aluminium Profiles',
    summary: 'High-strength solar panel frames, ground-mount rails, carport structures, BIPV profiles and mounting clamps.',
    alloys: ['6005A-T6', '6063-T6'],
    icon: Sun,
    applications: ['Rooftop Mounting', 'Solar Farms', 'Tracker Systems']
  },
  {
    slug: 'architectural-aluminium',
    name: 'Architectural Aluminium Systems',
    summary: 'High-performance facade extrusions, thermal-break window/door profiles, curtain walls, louvers and pergolas.',
    alloys: ['6063-T5/T6'],
    icon: Building2,
    applications: ['Curtain Walls', 'Commercial Windows', 'Exterior Louvers']
  },
  {
    slug: 'heat-sink-profiles',
    name: 'Heat Sink / Thermal Profiles',
    summary: 'High-efficiency thermal management extrusions for power electronics, LED lighting, EV charging and energy storage.',
    alloys: ['6063 High Thermal', '6060'],
    icon: Flame,
    applications: ['EV Chargers', 'Power Supplies', 'LED Fixtures']
  },
  {
    slug: 'oem-aluminium-components',
    name: 'OEM Aluminium Components',
    summary: 'Full-cycle turnkey manufacturing: Drawing -> DFM -> Die -> Extrusion -> CNC Machining -> Surface -> QC -> Export.',
    alloys: ['6061-T6', '6082-T6', '7075'],
    icon: Cpu,
    applications: ['Machined Brackets', 'Heatsinks', 'Electronic Housings']
  }
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[#F1F4F8]/50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs uppercase font-heading font-semibold tracking-widest text-[#2F7BFF]">
            EXPORT CATALOGUE
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-[#0A2D5B] tracking-tight">
            Aluminium Product Solutions
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Explore our certified range of extruded profiles and OEM components. All products are manufactured in Vietnam under strict international ASTM and EN standards.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <Card key={cat.slug} variant="interactive" className="flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#0A2D5B]/5 flex items-center justify-center text-[#0A2D5B] mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-[#0A2D5B] group-hover:text-[#2F7BFF] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    {cat.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {cat.alloys.map((a) => (
                      <Badge key={a} variant="alloy">
                        {a}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                  <Link
                    href={`/products/${cat.slug}`}
                    className="text-xs font-heading font-semibold text-[#0A2D5B] group-hover:text-[#2F7BFF] flex items-center gap-1.5 transition-colors"
                  >
                    View Technical Specifications
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Global RFQ Banner */}
        <div className="bg-[#0A2D5B] text-white rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div>
            <h3 className="text-2xl font-bold font-heading">
              Need a Custom Cross-Section Profile?
            </h3>
            <p className="text-sm text-slate-300 mt-1 max-w-xl">
              We design and cut custom extrusion dies tailored to your proprietary CAD dimensions with guaranteed die life and rapid sample lead times.
            </p>
          </div>
          <Link href="/rfq" className="shrink-0">
            <Button variant="cta" size="lg" leftIcon={<FileUp className="w-4 h-4" />}>
              Upload CAD Drawing
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
