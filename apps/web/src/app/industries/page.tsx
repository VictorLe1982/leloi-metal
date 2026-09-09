import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, Button } from '@leloi/ui';
import { Sun, Cpu, Settings2, Building2, Flame, Car, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Industry Applications & Extrusion Solutions | LELOI METAL',
  description:
    'Tailored aluminium extrusion solutions for global industries: Solar mounting systems, industrial automation, electronics heat sinks, architectural facades and EV automotive engineering.'
};

const INDUSTRIES = [
  {
    slug: 'solar-energy',
    name: 'Solar Energy & Photovoltaics',
    description: 'High-strength anodized module frames, ground-mount racking rails, carport structural beams and mounting clamps engineered for harsh outdoor environments.',
    icon: Sun,
    keyAlloys: '6005A-T6, 6063-T6'
  },
  {
    slug: 'automation',
    name: 'Industrial Automation & Robotics',
    description: 'Modular T-slot extrusion systems, robotic machine guards, linear motion slides, conveyor structures and cleanroom framing.',
    icon: Settings2,
    keyAlloys: '6063-T5, 6061-T6'
  },
  {
    slug: 'electronics',
    name: 'Power Electronics & Heat Sinks',
    description: 'Dense fin heat sink profiles for inverter cooling, LED lighting, EV battery charging systems and telecom power supply enclosures.',
    icon: Flame,
    keyAlloys: '6063 High Thermal Conductivity'
  },
  {
    slug: 'construction-facade',
    name: 'Architectural & Building Facades',
    description: 'Unitized curtain wall mullions, thermal-break window systems, architectural louvers, sunshades and commercial entrance systems.',
    icon: Building2,
    keyAlloys: '6063-T5/T6 (AAMA 2604)'
  },
  {
    slug: 'ev-battery',
    name: 'EV Battery & Automotive Components',
    description: 'Lightweight structural profiles for electric vehicle battery tray enclosures, crash management beams and cooling channels.',
    icon: Car,
    keyAlloys: '6061-T6, 6082-T6'
  },
  {
    slug: 'machinery',
    name: 'Mechanical Equipment & OEM Parts',
    description: 'Precision machined aluminium components, mounting brackets, structural bases and custom heat dissipation housings.',
    icon: Cpu,
    keyAlloys: '6061-T6, 7075-T6'
  }
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-[#F1F4F8]/50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs uppercase font-heading font-semibold tracking-widest text-[#2F7BFF]">
            APPLICATION EXPERTISE
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-[#0A2D5B] tracking-tight">
            Industries We Serve
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Engineered aluminium solutions designed specifically for the performance, environmental, and regulatory demands of global industries.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES.map((ind) => {
            const Icon = ind.icon;
            return (
              <Card key={ind.slug} variant="interactive" className="flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#0A2D5B]/5 flex items-center justify-center text-[#0A2D5B] mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-[#0A2D5B] group-hover:text-[#2F7BFF] transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    {ind.description}
                  </p>
                  <div className="text-xs font-mono text-[#0A2D5B] font-semibold mt-4">
                    Alloys: {ind.keyAlloys}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                  <Link
                    href={`/rfq?industry=${ind.slug}`}
                    className="text-xs font-heading font-semibold text-[#0A2D5B] group-hover:text-[#2F7BFF] flex items-center gap-1.5"
                  >
                    Request Industry Quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
