'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, ShieldCheck, Check, Palette, ArrowRight } from 'lucide-react';
import { Button } from '@leloi/ui';

interface ColorFamily {
  name: string;
  colors: Array<{
    name: string;
    code: string;
    hex: string;
    finishType: string;
    border?: boolean;
  }>;
}

const COLOR_GROUPS: Record<string, ColorFamily> = {
  classic: {
    name: 'Classic Architectural',
    colors: [
      { name: 'Pure White', code: 'RAL 9016', hex: '#F4F4F4', finishType: 'Matte / Gloss', border: true },
      { name: 'Anthracite Gray', code: 'RAL 7016', hex: '#373F43', finishType: 'Fine Texture' },
      { name: 'Jet Black', code: 'RAL 9005', hex: '#1C1C1C', finishType: 'Matte Fine Texture' },
      { name: 'Slate Gray', code: 'RAL 7015', hex: '#4F5358', finishType: 'Satin' }
    ]
  },
  metallic: {
    name: 'Metallic & Architectural Bronze',
    colors: [
      { name: 'Silver Metallic', code: 'RAL 9006', hex: '#A5A8A6', finishType: 'Metallic Pearlescent' },
      { name: 'Architectural Champagne', code: 'ARCH-CH01', hex: '#C2B69D', finishType: 'Anodized / Powder' },
      { name: 'Medium Bronze', code: 'ARCH-BZ02', hex: '#634E3A', finishType: 'Architectural Satin' },
      { name: 'Dark Monumental Bronze', code: 'ARCH-DB03', hex: '#3A2E25', finishType: 'Fine Texture' }
    ]
  },
  neutral: {
    name: 'Warm & Neutral Stone',
    colors: [
      { name: 'Warm Cream', code: 'RAL 9001', hex: '#EEE8D5', finishType: 'Smooth Satin', border: true },
      { name: 'Desert Sand', code: 'RAL 1015', hex: '#E6D2B5', finishType: 'Fine Texture' },
      { name: 'Agate Gray', code: 'RAL 7038', hex: '#B5B8B1', finishType: 'Matte' },
      { name: 'Basalt Gray', code: 'RAL 7012', hex: '#596065', finishType: 'Matte' }
    ]
  },
  wood: {
    name: 'Architectural Wood Grain Effect',
    colors: [
      { name: 'Golden Oak', code: 'WOOD-OAK', hex: '#B87333', finishType: 'Sublimation Texture' },
      { name: 'Burmese Teak', code: 'WOOD-TEAK', hex: '#7A4A28', finishType: 'Sublimation Texture' },
      { name: 'Natural Walnut', code: 'WOOD-WALNUT', hex: '#4A2E1B', finishType: 'Sublimation Texture' },
      { name: 'Aged Cedar', code: 'WOOD-CEDAR', hex: '#8B5A2B', finishType: 'Sublimation Texture' }
    ]
  }
};

export const FinishingAndAkzoNobel: React.FC = () => {
  const [selectedGroup, setSelectedGroup] = useState<string>('classic');
  const [activeColor, setActiveColor] = useState(COLOR_GROUPS.classic.colors[1]);

  return (
    <section id="finishes" className="py-16 sm:py-20 scroll-mt-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-50 text-[#0A2D5B] text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#2F7BFF]" />
            <span>Surface Finishing & Durability</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0A2D5B] tracking-tight">
            Surface Finishes & AkzoNobel Powder Coating
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            From natural satin anodizing to certified architectural powder coating, LELOI METAL delivers complete surface treatment lines designed for severe UV exposure, coastal salinity, and modern architectural aesthetics.
          </p>
        </div>

        {/* 3 Pillars of Finishing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Pillar 1: Mill Finish */}
          <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-blue-200 hover:shadow-sm transition-all space-y-3">
            <span className="text-xs font-bold font-mono text-slate-500 uppercase tracking-wider">01 / Extrusion</span>
            <h3 className="text-lg font-bold font-heading text-[#0A2D5B]">Mill Finish</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Clean, bare extruded aluminium direct from the extrusion press. Uniform surface condition suitable for local fabricators who apply their own custom finishing or for internal structural sub-frames.
            </p>
            <ul className="text-xs text-slate-600 space-y-1.5 pt-2">
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-blue-500" />
                <span>Extruded straightness per EN 755-9</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-blue-500" />
                <span>Degreased and burr-free cut</span>
              </li>
            </ul>
          </div>

          {/* Pillar 2: Architectural Anodized */}
          <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-blue-200 hover:shadow-sm transition-all space-y-3">
            <span className="text-xs font-bold font-mono text-slate-500 uppercase tracking-wider">02 / Electrochemical</span>
            <h3 className="text-lg font-bold font-heading text-[#0A2D5B]">Architectural Anodized</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Controlled anodic oxide layer forming an integral, sapphire-hard surface that cannot peel or flake. Ideal for contemporary metallic design and marine coastal resilience.
            </p>
            <ul className="text-xs text-slate-600 space-y-1.5 pt-2">
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-blue-500" />
                <span>Thickness: 15–20µm (Class 1 Architectural)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-blue-500" />
                <span>Natural Clear, Champagne, Bronze, Black</span>
              </li>
            </ul>
          </div>

          {/* Pillar 3: AkzoNobel Powder Coated */}
          <div className="p-6 rounded-2xl border-2 border-blue-500/30 bg-gradient-to-b from-blue-50/40 to-white shadow-xs space-y-3 relative">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold font-mono text-blue-600 uppercase tracking-wider">03 / Premium Coating</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#0A2D5B] text-white">AkzoNobel Coater</span>
            </div>
            <h3 className="text-lg font-bold font-heading text-[#0A2D5B]">AkzoNobel Powder Coating</h3>
            <p className="text-xs text-slate-700 leading-relaxed font-medium">
              Premium architectural powder coating using AkzoNobel powder coating systems for exterior and interior aluminium applications.
            </p>
            <ul className="text-xs text-slate-600 space-y-1.5 pt-1">
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                <span className="font-semibold text-slate-800">Warranties up to 10 years*</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-blue-500" />
                <span>Pre-treatment: Chrome-free multi-stage passivation</span>
              </li>
            </ul>
          </div>
        </div>

        {/* AkzoNobel Footnote (MANDATORY VERBATIM) */}
        <div className="mb-14 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
          <p className="leading-relaxed">
            *Warranty availability and duration depend on the approved coating system, project location, environmental exposure, surface preparation and applicable warranty conditions.
          </p>
        </div>

        {/* Color Selector Section */}
        <div id="colors" className="pt-6 border-t border-slate-200 scroll-mt-28">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-50 text-[#0A2D5B] text-xs font-semibold uppercase tracking-wider mb-2">
              <Palette className="w-3.5 h-3.5 text-[#2F7BFF]" />
              <span>Architectural Palette</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0A2D5B]">
              Standard Architectural Colors & Custom Project Matching
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-600">
              Select a color category below to inspect our standard architectural finish options, or specify a custom RAL / Pantone code for volume facade projects.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Category Selector & Swatches */}
            <div className="lg:col-span-7 space-y-6">
              {/* Category Tabs */}
              <div className="flex flex-wrap gap-2">
                {Object.entries(COLOR_GROUPS).map(([key, group]) => (
                  <button
                    key={key}
                    onClick={() => {
                      setSelectedGroup(key);
                      setActiveColor(group.colors[0]);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      selectedGroup === key
                        ? 'bg-[#0A2D5B] text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {group.name}
                  </button>
                ))}
              </div>

              {/* Swatch Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {COLOR_GROUPS[selectedGroup].colors.map((color, idx) => {
                  const isSelected = activeColor.code === color.code;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveColor(color)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'border-[#2F7BFF] bg-blue-50/50 ring-2 ring-blue-400/30'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <div
                        className={`w-full aspect-[4/3] rounded-lg mb-2 shadow-inner ${
                          color.border ? 'border border-slate-300' : ''
                        }`}
                        style={{ backgroundColor: color.hex }}
                      />
                      <span className="block text-xs font-bold text-slate-900 leading-tight">
                        {color.name}
                      </span>
                      <span className="block text-[11px] text-slate-500 font-mono">
                        {color.code}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Custom RAL Matching Callout */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-[#2F7BFF] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-800">Custom Project Color Matching:</span>{' '}
                  Need a bespoke shade? Provide your RAL, Pantone, or physical master sample. Our automated dosing powder coating lab matches custom architectural gloss, metallic pearlescence, and fine textures for qualifying orders.
                </div>
              </div>
            </div>

            {/* Right: Active Color Detail Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-5">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Active Selection</span>
                    <h4 className="text-lg font-bold font-heading text-[#0A2D5B]">{activeColor.name}</h4>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-slate-100 font-mono text-xs font-bold text-slate-700">
                    {activeColor.code}
                  </span>
                </div>

                {/* Color Swatch Preview Block */}
                <div
                  className={`w-full h-32 rounded-xl shadow-inner ${activeColor.border ? 'border border-slate-300' : ''}`}
                  style={{ backgroundColor: activeColor.hex }}
                />

                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Surface Texture:</span>
                    <span className="font-medium text-slate-800">{activeColor.finishType}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Coating Technology:</span>
                    <span className="font-medium text-slate-800">AkzoNobel Architectural Powder</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Warranty Framework:</span>
                    <span className="font-medium text-emerald-700">Warranties up to 10 years*</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Application:</span>
                    <span className="font-medium text-slate-800">Exterior Windows, Doors & Facades</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href={`/rfq?division=architectural&family=windows-doors&finish=${encodeURIComponent(
                      activeColor.name + ' (' + activeColor.code + ')'
                    )}`}
                    className="block w-full"
                  >
                    <Button className="w-full bg-[#0A2D5B] hover:bg-blue-900 text-white text-xs py-2.5 justify-center flex items-center gap-2">
                      <span>Request Sample with this Color</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
