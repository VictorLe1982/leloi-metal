import React from 'react';
import Link from 'next/link';
import { Button, Card, Badge, AluminiumWeightCalculator } from '@leloi/ui';
import {
  FileUp,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
  Sun,
  Building2,
  Flame,
  CheckCircle2,
  Factory,
  Globe2,
  Leaf,
  Scale,
  Settings2,
  Microscope,
  FileCheck
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ==================================================================== */}
      {/* 7.1 HERO SECTION                                                     */}
      {/* ==================================================================== */}
      <section className="relative bg-gradient-to-b from-[#061D3B] via-[#0A2D5B] to-[#0D3870] text-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle technical background grid overlay */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, #9AA3AF 1px, transparent 1px), linear-gradient(to bottom, #9AA3AF 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
          aria-hidden="true"
        />

        {/* Ambient glow */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#2F7BFF]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-heading font-semibold text-[#DCE6F3] tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#2F7BFF] animate-pulse" />
                Precision Aluminium Extrusion & Fabrication From Vietnam
              </div>

              {/* H1 - Approved Slogan */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight leading-tight text-white">
                Aluminium for a <br className="hidden sm:inline" />
                <span className="text-[#2F7BFF]">Better World</span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-lg sm:text-xl text-slate-200 max-w-2xl font-light leading-relaxed">
                Custom aluminium profiles, CNC machining, surface finishing and OEM components manufactured in Vietnam for global industries. Engineering support from profile concept to export-ready parts.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-4">
                <Link href="/rfq">
                  <Button variant="cta" size="xl" rightIcon={<ArrowRight className="w-5 h-5" />}>
                    Request a Quote
                  </Button>
                </Link>
                <Link href="/rfq?mode=upload">
                  <Button
                    variant="outline"
                    size="xl"
                    className="text-white border-white/40 hover:bg-white/10 hover:border-white"
                    leftIcon={<FileUp className="w-5 h-5 text-[#2F7BFF]" />}
                  >
                    Upload Your Drawing
                  </Button>
                </Link>
              </div>

              {/* Micro trust indicators */}
              <div className="pt-4 flex flex-wrap justify-center lg:justify-start items-center gap-6 text-xs text-slate-300 font-medium">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Confidential Drawing Storage & Bilateral NDA
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2F7BFF]" />
                  Custom Profile Engineering & DFM
                </span>
                <span className="flex items-center gap-1.5">
                  <FileCheck className="w-4 h-4 text-[#2F7BFF]" />
                  Origin-Certified (CPTPP / EVFTA / VKFTA)
                </span>
              </div>
            </div>

            {/* Hero Visual Card: 4 Verified Core Capabilities */}
            <div className="lg:col-span-5">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl text-slate-100 space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="text-xs uppercase font-heading font-semibold text-[#2F7BFF] tracking-wider">
                    Core Manufacturing Capabilities
                  </div>
                  <span className="text-[11px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-400/30">
                    VERIFIED
                  </span>
                </div>

                <div className="space-y-3.5 text-xs sm:text-sm">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <div className="font-bold text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2F7BFF]" />
                      Custom Extrusion Tooling & Dies
                    </div>
                    <div className="text-slate-300 text-xs pl-3.5">
                      Solid, hollow, and complex multi-void profiles engineered from proprietary 2D/3D customer drawings.
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <div className="font-bold text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2F7BFF]" />
                      Precision CNC Machining & Fabrication
                    </div>
                    <div className="text-slate-300 text-xs pl-3.5">
                      Mitre cutting, slot punching, drilling, tapping, and CNC milling tailored to industrial assemblies.
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <div className="font-bold text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2F7BFF]" />
                      Protective Surface Finishing
                    </div>
                    <div className="text-slate-300 text-xs pl-3.5">
                      Clear & satin color anodizing (up to 25µm) and electrostatic architectural powder coating.
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <div className="font-bold text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Confidential Intellectual Property Protection
                    </div>
                    <div className="text-slate-300 text-xs pl-3.5">
                      Customer profile dies are proprietary and protected under signed Non-Disclosure Agreements (NDA).
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <Link
                    href="/rfq?mode=upload"
                    className="text-[#2F7BFF] hover:underline font-semibold flex items-center gap-1"
                  >
                    Upload Drawing for DFM Review <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/capabilities"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    Explore Facilities →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 7.2 TRUST STRIP (Truth Safeguard: Real Verified Data Only)           */}
      {/* ==================================================================== */}
      <section className="bg-[#F1F4F8] border-b border-[#E2E8F0] py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 bg-white rounded-lg border border-[#E2E8F0] shadow-xs">
            <div className="text-2xl sm:text-3xl font-bold font-heading text-[#0A2D5B]">100%</div>
            <div className="text-xs font-medium text-slate-600 uppercase tracking-wider mt-1">
              Made-to-Drawing OEM Focus
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border border-[#E2E8F0] shadow-xs">
            <div className="text-2xl sm:text-3xl font-bold font-heading text-[#0A2D5B]">0% Duty</div>
            <div className="text-xs font-medium text-slate-600 uppercase tracking-wider mt-1">
              FTA Preferential (CPTPP / EVFTA)
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border border-[#E2E8F0] shadow-xs">
            <div className="text-2xl sm:text-3xl font-bold font-heading text-[#0A2D5B]">Direct Port</div>
            <div className="text-xs font-medium text-slate-600 uppercase tracking-wider mt-1">
              Hai Phong & Cat Lai Logistics
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border border-[#E2E8F0] shadow-xs">
            <div className="text-2xl sm:text-3xl font-bold font-heading text-[#0A2D5B]">Strict NDA</div>
            <div className="text-xs font-medium text-slate-600 uppercase tracking-wider mt-1">
              Confidential CAD Data Security
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 7.3 PRODUCT SOLUTIONS (6 Core Product Categories from Blueprint)    */}
      {/* ==================================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs uppercase font-heading font-semibold text-[#2F7BFF] tracking-widest">
            ENGINEERED PROFILES & FABRICATION
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#0A2D5B]">
            Aluminium Solutions for Global Sourcing
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            From precision solid and hollow extrusions to fully machined, surface-finished OEM sub-assemblies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Custom Extrusions */}
          <Link href="/products/custom-extrusions" className="block h-full group">
            <Card variant="interactive" className="h-full flex flex-col justify-between group-hover:border-[#2F7BFF]/50 transition-all">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#0A2D5B]/5 flex items-center justify-center text-[#0A2D5B] group-hover:bg-[#2F7BFF]/10 group-hover:text-[#2F7BFF] transition-colors mb-4">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-[#0A2D5B] group-hover:text-[#2F7BFF] transition-colors">
                  Custom Aluminium Extrusions
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Bespoke solid and hollow profiles manufactured to your proprietary die geometry. Available in 6063, 6061 and 6005A with tight dimensional tolerances.
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  <Badge variant="alloy">6063-T5/T6</Badge>
                  <Badge variant="alloy">6061-T6</Badge>
                  <Badge variant="default">Custom Tooling</Badge>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-heading font-semibold text-[#0A2D5B] group-hover:text-[#2F7BFF]">
                <span>Explore Extrusion Scope</span>
                <ArrowRight className="w-4 h-4 text-[#2F7BFF] group-hover:translate-x-1.5 transition-transform" />
              </div>
            </Card>
          </Link>

          {/* Card 2: Industrial Profiles */}
          <Link href="/products/industrial-profiles" className="block h-full group">
            <Card variant="interactive" className="h-full flex flex-col justify-between group-hover:border-[#2F7BFF]/50 transition-all">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#0A2D5B]/5 flex items-center justify-center text-[#0A2D5B] group-hover:bg-[#2F7BFF]/10 group-hover:text-[#2F7BFF] transition-colors mb-4">
                  <Settings2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-[#0A2D5B] group-hover:text-[#2F7BFF] transition-colors">
                  Industrial Aluminium Profiles
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Standard and heavy-duty modular T-slot profiles (20, 30, 40, 45, 60, 80 series) for factory automation, robotic machine guards, conveyors and cleanroom workstations.
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  <Badge variant="alloy">6063-T5</Badge>
                  <Badge variant="default">T-Slot Modular</Badge>
                  <Badge variant="default">Anodized Clear</Badge>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-heading font-semibold text-[#0A2D5B] group-hover:text-[#2F7BFF]">
                <span>View Industrial Profiles</span>
                <ArrowRight className="w-4 h-4 text-[#2F7BFF] group-hover:translate-x-1.5 transition-transform" />
              </div>
            </Card>
          </Link>

          {/* Card 3: Solar Profiles */}
          <Link href="/products/solar" className="block h-full group">
            <Card variant="interactive" className="h-full flex flex-col justify-between group-hover:border-[#2F7BFF]/50 transition-all">
              <div>
                <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center text-amber-500 mb-4">
                  <Sun className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-[#0A2D5B] group-hover:text-[#2F7BFF] transition-colors">
                  Solar Aluminium Profiles
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  High-volume solar module frames, ground-mount mounting rails, carport support extrusions, mid/end clamps and rooftop ballast profile solutions.
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  <Badge variant="alloy">6005A-T6</Badge>
                  <Badge variant="alloy">6063-T6</Badge>
                  <Badge variant="default">Anodized 15-25µm</Badge>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-heading font-semibold text-[#0A2D5B] group-hover:text-[#2F7BFF]">
                <span>Solar Mounting Solutions</span>
                <ArrowRight className="w-4 h-4 text-[#2F7BFF] group-hover:translate-x-1.5 transition-transform" />
              </div>
            </Card>
          </Link>

          {/* Card 4: Architectural Systems (EXPANDED TO CONSTRUCTION SOLUTIONS) */}
          <Link href="/products/architectural" className="block h-full group">
            <Card variant="interactive" className="h-full flex flex-col justify-between border-blue-200/80 bg-linear-to-b from-blue-50/30 to-white group-hover:border-[#2F7BFF] group-hover:shadow-lg transition-all">
              <div>
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-[#2F7BFF] mb-4">
                  <Building2 className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-2 py-0.5 rounded">
                    Residential & Commercial
                  </span>
                </div>
                <h3 className="text-xl font-bold font-heading text-[#0A2D5B] group-hover:text-[#2F7BFF] transition-colors">
                  Architectural Aluminium Systems
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Integrated building systems: Windows, doors, curtain walls, louvers, wall cladding, linear ceilings, pergolas, canopies, and resort structures with AkzoNobel 10-year warranty powder coating.
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  <Badge variant="alloy">6063-T5/T6</Badge>
                  <Badge variant="default">Thermal Break</Badge>
                  <Badge variant="verified">AkzoNobel 10-Yr</Badge>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-heading font-semibold text-[#0A2D5B] group-hover:text-[#2F7BFF]">
                <span>Explore Architectural Vertical</span>
                <ArrowRight className="w-4 h-4 text-[#2F7BFF] group-hover:translate-x-1.5 transition-transform" />
              </div>
            </Card>
          </Link>

          {/* Card 5: Heat Sink Profiles */}
          <Link href="/products/thermal-management" className="block h-full group">
            <Card variant="interactive" className="h-full flex flex-col justify-between group-hover:border-[#2F7BFF]/50 transition-all">
              <div>
                <div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500 mb-4">
                  <Flame className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-[#0A2D5B] group-hover:text-[#2F7BFF] transition-colors">
                  Heat Sink / Thermal Profiles
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  High aspect ratio fin extrusions for inverter cooling, EV battery chargers, high-power LED luminaires, power supply enclosures and industrial electronics.
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  <Badge variant="alloy">6063 High Thermal</Badge>
                  <Badge variant="default">Dense Fin Ratio</Badge>
                  <Badge variant="default">Black Anodized</Badge>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-heading font-semibold text-[#0A2D5B] group-hover:text-[#2F7BFF]">
                <span>Thermal Management</span>
                <ArrowRight className="w-4 h-4 text-[#2F7BFF] group-hover:translate-x-1.5 transition-transform" />
              </div>
            </Card>
          </Link>

          {/* Card 6: OEM Machined Components */}
          <Link href="/products/oem-components" className="block h-full group">
            <Card variant="interactive" className="h-full flex flex-col justify-between group-hover:border-[#2F7BFF]/50 transition-all">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#0A2D5B]/5 flex items-center justify-center text-[#0A2D5B] group-hover:bg-[#2F7BFF]/10 group-hover:text-[#2F7BFF] transition-colors mb-4">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-[#0A2D5B] group-hover:text-[#2F7BFF] transition-colors">
                  OEM Aluminium Components
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Turnkey manufacturing from drawing to finished assembly: Precision cutting, multi-axis CNC milling, drilling, tapping, deburring, surface treatment and custom export packaging.
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  <Badge variant="alloy">6061-T6</Badge>
                  <Badge variant="alloy">6082-T6</Badge>
                  <Badge variant="default">Full CNC Machining</Badge>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-heading font-semibold text-[#0A2D5B] group-hover:text-[#2F7BFF]">
                <span>OEM Component Sourcing</span>
                <ArrowRight className="w-4 h-4 text-[#2F7BFF] group-hover:translate-x-1.5 transition-transform" />
              </div>
            </Card>
          </Link>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 7.4 MANUFACTURING CAPABILITIES GRID                                 */}
      {/* ==================================================================== */}
      <section className="py-20 bg-[#F1F4F8]/70 border-t border-b border-[#E2E8F0] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <div className="text-xs uppercase font-heading font-semibold text-[#2F7BFF] tracking-widest mb-2">
                END-TO-END FACTORY PRODUCTION
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#0A2D5B]">
                Precision Manufacturing Capabilities
              </h2>
            </div>
            <Link href="/capabilities">
              <Button variant="outline" size="sm" rightIcon={<ArrowRight className="w-4 h-4" />}>
                View Technical Capability Matrix
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-[#E2E8F0]">
              <Factory className="w-8 h-8 text-[#0A2D5B] mb-3" />
              <h4 className="text-lg font-bold font-heading text-[#0A2D5B]">Extrusion Presses</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Automated extrusion lines with double pullers, quenching systems and aging ovens producing T5 and T6 structural tempers.
              </p>
              <div className="text-[11px] text-[#2F7BFF] font-medium mt-3">Alloys: 6063, 6061, 6005A, 6082</div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-[#E2E8F0]">
              <Cpu className="w-8 h-8 text-[#0A2D5B] mb-3" />
              <h4 className="text-lg font-bold font-heading text-[#0A2D5B]">Precision CNC Machining</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                3-axis and 4-axis long-bed CNC machining centers specialized in profile milling, complex slotting, drilling and tapping.
              </p>
              <div className="text-[11px] text-[#2F7BFF] font-medium mt-3">Tolerances: ISO 2768 Precision Class</div>
            </div>

            <Link href="/capabilities/powder-coating" className="block group">
              <div className="bg-white p-6 rounded-lg border border-[#E2E8F0] group-hover:border-[#2F7BFF] transition-all h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Layers className="w-8 h-8 text-[#0A2D5B] group-hover:text-[#2F7BFF] transition-colors" />
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">
                      AkzoNobel 10-Yr
                    </span>
                  </div>
                  <h4 className="text-lg font-bold font-heading text-[#0A2D5B] group-hover:text-[#2F7BFF] transition-colors">Surface Finishing</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Full-dip automated anodizing (Clear, Black, Bronze 10-25µm) and electrostatic powder coating with certified AkzoNobel 10-Year Warranty.
                  </p>
                </div>
                <div className="text-[11px] text-[#2F7BFF] font-medium mt-3 flex items-center justify-between">
                  <span>Qualicoat & AAMA 2604/2605</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <div className="bg-white p-6 rounded-lg border border-[#E2E8F0]">
              <Settings2 className="w-8 h-8 text-[#0A2D5B] mb-3" />
              <h4 className="text-lg font-bold font-heading text-[#0A2D5B]">Fabrication & Assembly</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Precision miter cutting, hydraulic punching, deburring, hardware insertion, sub-assembly and custom kitting for export.
              </p>
              <div className="text-[11px] text-[#2F7BFF] font-medium mt-3">Turnkey OEM Sub-Assemblies</div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-[#E2E8F0]">
              <Microscope className="w-8 h-8 text-[#0A2D5B] mb-3" />
              <h4 className="text-lg font-bold font-heading text-[#0A2D5B]">Quality Control & Metrology</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Equipped with optical profile projectors, coordinate measuring machines (CMM), spectrometry alloy testing and Webster hardness testers.
              </p>
              <div className="text-[11px] text-[#2F7BFF] font-medium mt-3">Full Mill Test Certificates (MTR)</div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-[#E2E8F0]">
              <Globe2 className="w-8 h-8 text-[#0A2D5B] mb-3" />
              <h4 className="text-lg font-bold font-heading text-[#0A2D5B]">Export Packaging & Freight</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Fumigated timber pallets, steel strapping, shrink-film wrapping, rust-inhibiting paper and desiccants for secure containerized sea freight.
              </p>
              <div className="text-[11px] text-[#2F7BFF] font-medium mt-3">FOB & CIF Global Incoterms</div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 7.6 WHY VIETNAM / WHY LELOI METAL                                   */}
      {/* ==================================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs uppercase font-heading font-semibold text-[#2F7BFF] tracking-widest">
              STRATEGIC SUPPLY ADVANTAGE
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#0A2D5B]">
              Why Global Sourcing Teams Partner with LELOI METAL
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We connect Vietnam&apos;s competitive manufacturing base with international engineering precision, structured export documentation and reliable supply chain execution.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#0A2D5B]/5 flex items-center justify-center text-[#0A2D5B] shrink-0 font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-bold font-heading text-[#0A2D5B]">China+1 Supply Chain Diversification</h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    Mitigate tariff volatility, reduce single-source geopolitical risk and leverage Vietnam&apos;s free trade agreements (CPTPP, EVFTA, VKFTA).
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#0A2D5B]/5 flex items-center justify-center text-[#0A2D5B] shrink-0 font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-bold font-heading text-[#0A2D5B]">Flexible MOQs & Die Investment</h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    Custom die tooling at highly competitive rates with low initial trial batch quantities (500–1000 kg) before ramping to multi-container mass production.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#0A2D5B]/5 flex items-center justify-center text-[#0A2D5B] shrink-0 font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-bold font-heading text-[#0A2D5B]">Direct Engineering Support (DFM)</h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    Our technical extrusion engineers optimize wall thickness, radii, snap-fits and assembly tolerances before die cut, reducing cost and lead time.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#0A2D5B]/5 flex items-center justify-center text-[#0A2D5B] shrink-0 font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-bold font-heading text-[#0A2D5B]">International Export Documentation</h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    Clear certificate of origin (Form B, EUR.1, CPTPP), mill test reports (EN 10204 3.1), packing lists and sea freight customs paperwork.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-[#0A2D5B] text-white p-8 sm:p-10 rounded-2xl relative shadow-xl">
              <div className="space-y-4">
                <div className="text-xs uppercase tracking-wider text-[#2F7BFF] font-heading font-semibold">
                  CONFIDENTIAL RFQ GUARANTEE
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                  Your Engineering Drawings Are Protected
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  LELOI METAL adheres to strict intellectual property security. Every CAD file uploaded to our platform is stored in encrypted, private cloud storage with signed access tokens and mutual non-disclosure agreements (NDA).
                </p>

                <div className="py-4 space-y-2 text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Mutual Non-Disclosure Agreement (NDA) available upon request</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Private encrypted bucket — no public indexation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Direct review by qualified extrusion engineers</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link href="/rfq?mode=upload">
                    <Button variant="cta" size="lg" className="w-full" leftIcon={<FileUp className="w-5 h-5" />}>
                      Upload Drawing for Engineering Review
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 7.9 INTERACTIVE TOOL PREVIEW: WEIGHT CALCULATOR                       */}
      {/* ==================================================================== */}
      <section className="py-16 bg-[#F1F4F8] border-t border-b border-[#E2E8F0] px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="text-xs uppercase font-heading font-semibold text-[#2F7BFF] tracking-widest mb-1">
              FREE TECHNICAL SOURCING TOOL
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0A2D5B]">
              Estimate Extrusion Weight & Sourcing Volume
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Calculate theoretical weight per meter (kg/m) and container batch tonnage across standard profile geometries.
            </p>
          </div>

          <AluminiumWeightCalculator />
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 7.8 SUSTAINABILITY SECTION (CBAM & Low Carbon Readiness)             */}
      {/* ==================================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="rounded-2xl bg-gradient-to-r from-emerald-950 via-[#0A2D5B] to-[#061D3B] text-white p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-heading font-semibold tracking-wider uppercase">
              <Leaf className="w-4 h-4" />
              SUSTAINABILITY & TRADE COMPLIANCE ROADMAP
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white">
              Preparing for CBAM & Low-Carbon Aluminium Exports
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              As global decarbonization standards accelerate, LELOI METAL is committed to responsible primary billet sourcing, certified post-industrial recycled aluminium scrap utilization, and embedded carbon accounting compliant with EU CBAM reporting requirements.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link href="/sustainability">
                <Button
                  variant="outline"
                  size="md"
                  className="text-white border-emerald-400/40 hover:bg-white/10"
                >
                  Read Carbon Sourcing Framework →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 7.10 FINAL CONVERSION CTA SECTION                                    */}
      {/* ==================================================================== */}
      <section className="py-20 bg-[#061D3B] text-white px-4 sm:px-6 lg:px-8 text-center border-t border-slate-800">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-xs uppercase font-heading font-semibold tracking-widest text-[#2F7BFF]">
            START YOUR VIETNAM SOURCING PROJECT
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight text-white">
            Let&apos;s Build Your Aluminium Solution
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Connect with our sales and engineering team for comprehensive profile feasibility analysis, custom die manufacturing, precision CNC fabrication and global export logistics.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link href="/rfq">
              <Button variant="cta" size="xl" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Request a Custom Quote
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="xl"
                className="text-white border-white/30 hover:bg-white/10"
              >
                Talk to Export Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
