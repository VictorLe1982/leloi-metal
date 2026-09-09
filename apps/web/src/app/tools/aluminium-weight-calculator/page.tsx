import React from 'react';
import type { Metadata } from 'next';
import { AluminiumWeightCalculator } from '@leloi/ui';
import { Scale, FileUp, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Aluminium Extrusion Weight Calculator (kg/m & Tonnes) | LELOI METAL',
  description:
    'Free engineering calculator for aluminium extrusion profiles. Calculate cross-section area, weight per meter (kg/m), weight per piece and total order tonnage for standard alloys (6063, 6061, 6005A, 6082).'
};

export default function WeightCalculatorPage() {
  return (
    <div className="min-h-screen bg-[#F1F4F8]/50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A2D5B]/5 text-xs font-heading font-semibold text-[#0A2D5B] tracking-wider uppercase">
            <Scale className="w-4 h-4 text-[#2F7BFF]" />
            Free Online Engineering Tool
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-[#0A2D5B] tracking-tight">
            Aluminium Profile Weight Calculator
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Accurately calculate the theoretical linear weight (kg/m), individual piece weight, and total production tonnage for extruded profiles across standard shapes and alloy densities.
          </p>
        </div>

        {/* Embedded Calculator */}
        <AluminiumWeightCalculator />

        {/* Engineering Guide & Formula Explanation */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] p-8 sm:p-10 shadow-xs space-y-6">
          <h3 className="text-xl font-bold font-heading text-[#0A2D5B]">
            How Aluminium Extrusion Weight is Calculated
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-slate-600 leading-relaxed">
            <div>
              <h4 className="font-semibold text-[#0A2D5B] mb-2 font-heading">
                1. Fundamental Engineering Formula
              </h4>
              <p>
                The theoretical weight of an aluminium extrusion profile is calculated from its geometric cross-sectional area and the specific mass density of the chosen alloy:
              </p>
              <div className="my-3 p-3.5 bg-[#F1F4F8] rounded-lg font-mono text-xs text-[#0A2D5B] border border-[#E2E8F0]">
                Weight (kg/m) = Cross-Section Area (mm²) × Density (g/cm³) ÷ 1000
              </div>
              <p className="text-xs text-slate-500">
                Since 1 mm² over 1 linear meter equals 1,000 mm³ (which is 1 cm³), multiplying area by density in g/cm³ and dividing by 1,000 yields kilograms per meter.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-[#0A2D5B] mb-2 font-heading">
                2. Standard Extrusion Alloy Densities
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li className="flex justify-between py-1 border-b border-[#E2E8F0]">
                  <span className="font-semibold text-[#0A2D5B]">Alloy 6063 (Standard Architectural / Extrusions):</span>
                  <span className="font-mono">2.70 g/cm³</span>
                </li>
                <li className="flex justify-between py-1 border-b border-[#E2E8F0]">
                  <span className="font-semibold text-[#0A2D5B]">Alloy 6061 (High Structural Strength / CNC):</span>
                  <span className="font-mono">2.70 g/cm³</span>
                </li>
                <li className="flex justify-between py-1 border-b border-[#E2E8F0]">
                  <span className="font-semibold text-[#0A2D5B]">Alloy 6005A (Railway, Solar & Automotive):</span>
                  <span className="font-mono">2.70 g/cm³</span>
                </li>
                <li className="flex justify-between py-1 border-b border-[#E2E8F0]">
                  <span className="font-semibold text-[#0A2D5B]">Alloy 7075 (High-stress Aerospace / Defense):</span>
                  <span className="font-mono">2.81 g/cm³</span>
                </li>
                <li className="flex justify-between py-1">
                  <span className="font-semibold text-[#0A2D5B]">Alloy 5052 / 5083 (Marine & Chemical Tanks):</span>
                  <span className="font-mono">2.66 - 2.68 g/cm³</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500">
              * Note: Actual extruded profile weight may vary within standard dimensional tolerances specified in EN 755-9 or ASTM B221.
            </div>
            <Link
              href="/rfq"
              className="inline-flex items-center gap-2 text-xs font-heading font-semibold text-[#2F7BFF] hover:underline"
            >
              Submit Drawing for Precision DFM Review →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
