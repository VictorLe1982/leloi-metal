'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Card, Badge, Button } from '@leloi/ui';
import {
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  FileCheck,
  Scale,
  Sparkles,
  Info
} from 'lucide-react';

interface AlloyProfile {
  id: string;
  name: string;
  temper: string;
  standard: string;
  category: string;
  yieldStrengthMpa: number;
  tensileStrengthMpa: number;
  elongationPercent: number;
  hardnessWebster: string;
  extrudabilityScore: number; // 1-5
  anodizingScore: number; // 1-5
  machinabilityScore: number; // 1-5
  corrosionScore: number; // 1-5
  weldabilityScore: number; // 1-5
  thermalConductivity: string;
  idealApplications: string[];
  keyHighlights: string;
  drawbacks: string;
}

const ALLOYS: Record<string, AlloyProfile> = {
  '6063-T5': {
    id: '6063-T5',
    name: 'Alloy 6063',
    temper: 'T5 / T6',
    standard: 'ASTM B221 / EN 755 / JIS H4100',
    category: 'Architectural & General Extrusions',
    yieldStrengthMpa: 145,
    tensileStrengthMpa: 185,
    elongationPercent: 12,
    hardnessWebster: '8–12 HW',
    extrudabilityScore: 5,
    anodizingScore: 5,
    machinabilityScore: 3,
    corrosionScore: 5,
    weldabilityScore: 4,
    thermalConductivity: '200–210 W/m·K',
    idealApplications: [
      'Architectural curtain walls and window mullions',
      'Solar PV mounting rails and rooftop framing',
      'Decorative trim, louvers, and interior profiles',
      'Electronic heatsinks with high fin-to-gap ratios'
    ],
    keyHighlights:
      'Superb surface finish capability with flawless anodizing and powder coating response. High extrusion speed allows intricate thin-wall hollow sections.',
    drawbacks:
      'Moderate yield strength compared to 6061; not recommended for high dynamic structural loads or heavy vehicle chassis.'
  },
  '6061-T6': {
    id: '6061-T6',
    name: 'Alloy 6061',
    temper: 'T6 (Solution heat-treated & artificially aged)',
    standard: 'ASTM B221 / EN 755 / AMS 4150',
    category: 'Structural & Precision Machining Workhorse',
    yieldStrengthMpa: 240,
    tensileStrengthMpa: 290,
    elongationPercent: 10,
    hardnessWebster: '14–16 HW (95 HB)',
    extrudabilityScore: 3,
    anodizingScore: 3,
    machinabilityScore: 5,
    corrosionScore: 4,
    weldabilityScore: 5,
    thermalConductivity: '167 W/m·K',
    idealApplications: [
      'Automation machinery frameworks and robot bases',
      'CNC precision milled components and housings',
      'Marine deck fittings and gangways',
      'Commercial vehicle and trailer chassis crossmembers'
    ],
    keyHighlights:
      'The premier structural aluminium alloy. High mechanical strength combined with exceptional chip-breaking machinability and sound weldability.',
    drawbacks:
      'Lower extrusion speed than 6063; anodized appearance is slightly darker or greyish compared to 6063.'
  },
  '6005A-T6': {
    id: '6005A-T6',
    name: 'Alloy 6005A',
    temper: 'T6',
    standard: 'EN 755-2 / ASTM B221',
    category: 'Medium-to-High Strength Structural',
    yieldStrengthMpa: 225,
    tensileStrengthMpa: 270,
    elongationPercent: 8,
    hardnessWebster: '13–15 HW',
    extrudabilityScore: 4,
    anodizingScore: 4,
    machinabilityScore: 4,
    corrosionScore: 4,
    weldabilityScore: 4,
    thermalConductivity: '185 W/m·K',
    idealApplications: [
      'Heavy solar canopy ground mounts and tracking systems',
      'Railway carriage side walls and floor beams',
      'Ladder stiles, scaffolding, and access platforms',
      'Truck body sideboards and container framing'
    ],
    keyHighlights:
      'Bridges the gap between 6063 and 6061. Offers 85% of 6061 strength with significantly improved extrusion speeds and profile intricacy.',
    drawbacks:
      'Slightly lower elongation than 6063; careful tool design required for very sharp internal radiuses.'
  },
  '6082-T6': {
    id: '6082-T6',
    name: 'Alloy 6082',
    temper: 'T6',
    standard: 'DIN EN 755 / BS EN 755',
    category: 'European Structural Engineering Standard',
    yieldStrengthMpa: 260,
    tensileStrengthMpa: 310,
    elongationPercent: 8,
    hardnessWebster: '15 HW (95 HB)',
    extrudabilityScore: 3,
    anodizingScore: 3,
    machinabilityScore: 4,
    corrosionScore: 4,
    weldabilityScore: 4,
    thermalConductivity: '170 W/m·K',
    idealApplications: [
      'High-stress structural engineering beams and trusses',
      'Bridge components, crane gantries, and boom sections',
      'Offshore marine structures and offshore wind support',
      'Transport vehicle structural sub-frames'
    ],
    keyHighlights:
      'Highest strength among the 6000-series alloys. Outstanding impact resistance and toughness, standard choice in European industrial specifications.',
    drawbacks:
      'Higher extrusion press tonnage required; complex hollow shapes have narrower design limits than 6063.'
  },
  '7075-T6': {
    id: '7075-T6',
    name: 'Alloy 7075',
    temper: 'T6 / T6511',
    standard: 'ASTM B221 / AMS 4154',
    category: 'Ultra-High Strength Aerospace & Tooling',
    yieldStrengthMpa: 505,
    tensileStrengthMpa: 570,
    elongationPercent: 7,
    hardnessWebster: '18+ HW (150 HB)',
    extrudabilityScore: 2,
    anodizingScore: 2,
    machinabilityScore: 5,
    corrosionScore: 2,
    weldabilityScore: 1,
    thermalConductivity: '130 W/m·K',
    idealApplications: [
      'Aerospace brackets, wing spars, and bulkhead frames',
      'High-performance sports equipment (bicycles, mountaineering)',
      'Precision tooling fixtures and mold plates',
      'Defense and high-impact structural components'
    ],
    keyHighlights:
      'Extraordinary yield and tensile strength comparable to many structural steels with 1/3 of the density. Superior machinability with crisp chip formation.',
    drawbacks:
      'Poor weldability (susceptible to stress cracking); lower corrosion resistance requiring protective anodizing or cladding; difficult extrusion profile limits.'
  }
};

export default function AlloySelectorPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('solar');
  const [strengthNeed, setStrengthNeed] = useState<string>('high');
  const [machiningNeed, setMachiningNeed] = useState<string>('moderate');
  const [environment, setEnvironment] = useState<string>('outdoor');
  const [surfaceGoal, setSurfaceGoal] = useState<string>('anodized');

  // Recommendation logic
  const getRecommendedAlloyId = (): string => {
    if (strengthNeed === 'ultra') return '7075-T6';
    if (strengthNeed === 'very-high' || selectedIndustry === 'marine') return '6082-T6';
    if (selectedIndustry === 'architectural' || surfaceGoal === 'decorative-anodized') return '6063-T5';
    if (selectedIndustry === 'robotics' || machiningNeed === 'high') return '6061-T6';
    if (selectedIndustry === 'solar') {
      return strengthNeed === 'moderate' ? '6063-T5' : '6005A-T6';
    }
    if (selectedIndustry === 'transport') return '6005A-T6';
    return '6061-T6';
  };

  const recommendedId = getRecommendedAlloyId();
  const recommended = ALLOYS[recommendedId];

  return (
    <div className="min-h-screen bg-light-gray/50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs uppercase font-heading font-semibold tracking-widest text-blue">
            ENGINEERING & METALLURGY ASSISTANT
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-navy tracking-tight">
            Aluminium Alloy Selector
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Identify the optimal aluminium extrusion alloy and temper for your mechanical requirements, CNC machining scope, corrosion exposure, and surface finishing goals.
          </p>
        </div>

        {/* Interactive Criteria Box */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Criteria 1: Industry / Application */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                1. Application & Industry
              </label>
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-navy font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue"
              >
                <option value="solar">Solar PV Energy (Rails & Carports)</option>
                <option value="architectural">Architectural & Facades (Curtain walls, Louvers)</option>
                <option value="robotics">Precision Machinery & Robotics (Automation frames)</option>
                <option value="transport">Transport & Automotive (Trucks, EV subframes)</option>
                <option value="thermal">Thermal Management (Electronics heat sinks)</option>
                <option value="marine">Marine & Heavy Infrastructure (Offshore, Bridges)</option>
              </select>
            </div>

            {/* Criteria 2: Mechanical Strength */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                2. Mechanical Strength Priority
              </label>
              <select
                value={strengthNeed}
                onChange={(e) => setStrengthNeed(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-navy font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue"
              >
                <option value="moderate">Moderate (~145 MPa Yield) — High formability & finish</option>
                <option value="high">High (~225–240 MPa Yield) — Structural load bearing</option>
                <option value="very-high">Very High (~260+ MPa Yield) — Dynamic & heavy shock</option>
                <option value="ultra">Ultra-High (500+ MPa Yield) — Extreme strength / aerospace</option>
              </select>
            </div>

            {/* Criteria 3: CNC Machining Scope */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                3. Post-Extrusion CNC Machining
              </label>
              <select
                value={machiningNeed}
                onChange={(e) => setMachiningNeed(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-navy font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue"
              >
                <option value="low">Minimal (Cut-to-length, hole punching)</option>
                <option value="moderate">Moderate (Drilling, tapping, slot routing)</option>
                <option value="high">Heavy / Precision 5-Axis (Extensive pocket milling, tight tolerances)</option>
              </select>
            </div>

            {/* Criteria 4: Environmental Exposure */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                4. Environmental Exposure
              </label>
              <select
                value={environment}
                onChange={(e) => setEnvironment(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-navy font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue"
              >
                <option value="indoor">Indoor / Controlled Environment</option>
                <option value="outdoor">Outdoor Industrial / Atmospheric</option>
                <option value="marine">Marine / Coastal / Severe Chemical</option>
              </select>
            </div>

            {/* Criteria 5: Surface Finish Target */}
            <div className="space-y-2 md:col-span-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                5. Target Surface Treatment
              </label>
              <select
                value={surfaceGoal}
                onChange={(e) => setSurfaceGoal(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-navy font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue"
              >
                <option value="decorative-anodized">Decorative Anodized (Clear / Matte / Architectural Color)</option>
                <option value="hard-anodized">Hard Anodized (Wear resistant 25–50µm industrial)</option>
                <option value="powder-coat">Powder Coated (Architectural Qualicoat / RAL colors)</option>
                <option value="mill">Mill Finish (Unfinished raw extrusion for industrial assembly)</option>
              </select>
            </div>
          </div>

          {/* Recommendation Banner */}
          <div className="bg-gradient-to-br from-navy-dark to-navy text-white rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div className="space-y-1">
                <div className="text-xs font-mono uppercase tracking-widest text-blue flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  <span>RECOMMENDED ALLOY CANDIDATE</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                  {recommended.name} — {recommended.temper}
                </h3>
                <p className="text-xs text-slate-300">
                  Standard: {recommended.standard} • Category: {recommended.category}
                </p>
              </div>
              <Link href={`/rfq?alloy=${recommended.id.split('-')[0]}&temper=${recommended.temper.split(' ')[0]}`}>
                <Button variant="cta" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Start RFQ with {recommended.name}
                </Button>
              </Link>
            </div>

            {/* Key Properties Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 space-y-1">
                <div className="text-xs text-slate-400">Yield Strength (Rp0.2)</div>
                <div className="text-xl sm:text-2xl font-bold text-blue">
                  {recommended.yieldStrengthMpa} MPa
                </div>
                <div className="text-[11px] text-slate-400">Tensile: {recommended.tensileStrengthMpa} MPa</div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 space-y-1">
                <div className="text-xs text-slate-400">Hardness Rating</div>
                <div className="text-xl sm:text-2xl font-bold text-slate-100">
                  {recommended.hardnessWebster}
                </div>
                <div className="text-[11px] text-slate-400">Elongation: {recommended.elongationPercent}%</div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 space-y-1">
                <div className="text-xs text-slate-400">Anodizing Response</div>
                <div className="text-xl sm:text-2xl font-bold text-slate-100">
                  {'★'.repeat(recommended.anodizingScore)}
                  {'☆'.repeat(5 - recommended.anodizingScore)}
                </div>
                <div className="text-[11px] text-slate-400">Surface appearance</div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 space-y-1">
                <div className="text-xs text-slate-400">Machinability</div>
                <div className="text-xl sm:text-2xl font-bold text-slate-100">
                  {'★'.repeat(recommended.machinabilityScore)}
                  {'☆'.repeat(5 - recommended.machinabilityScore)}
                </div>
                <div className="text-[11px] text-slate-400">CNC milling & tapping</div>
              </div>
            </div>

            {/* Narrative Analysis */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-white/10 text-xs sm:text-sm">
              <div className="space-y-2">
                <div className="font-semibold text-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                  Engineering Rationale:
                </div>
                <p className="text-slate-300 leading-relaxed">
                  {recommended.keyHighlights}
                </p>
                <div className="pt-2">
                  <div className="text-xs text-slate-400 font-semibold mb-1">Common Applications:</div>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {recommended.idealApplications.map((app, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue" />
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-3 bg-white/5 border border-white/10 p-4 rounded-xl">
                <div>
                  <div className="font-semibold text-amber-300 flex items-center gap-1.5 text-xs">
                    <Info className="w-4 h-4 text-amber-300 shrink-0" />
                    Engineering Caveats & Considerations:
                  </div>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {recommended.drawbacks}
                  </p>
                </div>
                <div className="text-xs text-slate-400 border-t border-white/10 pt-3">
                  <strong>Thermal Conductivity:</strong> {recommended.thermalConductivity}
                </div>
                <div className="text-xs text-slate-400">
                  <strong>DFM Verification:</strong> Custom extrusion dies and wall-thickness ratios are validated by LELOI METAL tooling engineers prior to die manufacture.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Master Alloy Comparison Matrix Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8 space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold font-heading text-navy">
              Standard Extrusion Alloys Mechanical & Physical Comparison
            </h3>
            <p className="text-xs text-slate-500">
              Verified standard property reference for common aluminium extrusion alloys supplied by LELOI METAL.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="py-3 px-4 rounded-tl-lg">Alloy & Temper</th>
                  <th className="py-3 px-3">Yield Strength (Rp0.2)</th>
                  <th className="py-3 px-3">Tensile Strength (Rm)</th>
                  <th className="py-3 px-3">Elongation (A50)</th>
                  <th className="py-3 px-3">Hardness</th>
                  <th className="py-3 px-3">Extrudability</th>
                  <th className="py-3 px-3">Machinability</th>
                  <th className="py-3 px-3">Anodizing</th>
                  <th className="py-3 px-4 rounded-tr-lg">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 font-medium">
                {Object.values(ALLOYS).map((al) => (
                  <tr
                    key={al.id}
                    className={
                      al.id === recommended.id
                        ? 'bg-blue-50/80 font-semibold text-navy'
                        : 'hover:bg-slate-50'
                    }
                  >
                    <td className="py-3.5 px-4 font-bold">
                      {al.name}-{al.temper.split(' ')[0]}
                      {al.id === recommended.id && (
                        <span className="ml-2 text-[10px] bg-blue text-white px-1.5 py-0.5 rounded">
                          MATCH
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-3">{al.yieldStrengthMpa} MPa</td>
                    <td className="py-3.5 px-3">{al.tensileStrengthMpa} MPa</td>
                    <td className="py-3.5 px-3">{al.elongationPercent}%</td>
                    <td className="py-3.5 px-3">{al.hardnessWebster}</td>
                    <td className="py-3.5 px-3">
                      {'★'.repeat(al.extrudabilityScore)}
                    </td>
                    <td className="py-3.5 px-3">
                      {'★'.repeat(al.machinabilityScore)}
                    </td>
                    <td className="py-3.5 px-3">
                      {'★'.repeat(al.anodizingScore)}
                    </td>
                    <td className="py-3.5 px-4">
                      <Link href={`/rfq?alloy=${al.id.split('-')[0]}`}>
                        <span className="text-blue hover:underline cursor-pointer">
                          Quote Alloy →
                        </span>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-navy text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold font-heading">
              Have a Custom Profile Drawing with Tight Tolerances?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Upload your 2D PDF or 3D STEP drawing. Our engineers will check extrusion ratio, wall thickness uniformity, and alloy temper suitability free of charge.
            </p>
          </div>
          <Link href="/rfq">
            <Button variant="cta" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Submit Drawing for DFM Review
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
