'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Card, Badge, Button } from '@leloi/ui';
import {
  Globe2,
  ShieldCheck,
  Scale,
  ExternalLink,
  ArrowRight,
  TrendingDown,
  AlertTriangle,
  FileCheck2,
  HelpCircle,
  Percent,
  DollarSign
} from 'lucide-react';

interface TariffData {
  countryCode: string;
  countryName: string;
  flag: string;
  ftaName: string;
  mfnRate: number;
  prefRate: number;
  hsCode: string;
  hsDescription: string;
  rulesOfOrigin: string;
  tradeRemedyNotes: string;
  sourceName: string;
  sourceUrl: string;
  lastVerified: string;
}

const TARIFF_DATABASE: Record<string, Record<string, TariffData>> = {
  CA: {
    '7604.10': {
      countryCode: 'CA',
      countryName: 'Canada',
      flag: '🇨🇦',
      ftaName: 'CPTPP (Trans-Pacific Partnership)',
      mfnRate: 0.0,
      prefRate: 0.0,
      hsCode: '7604.10',
      hsDescription: 'Aluminium bars, rods and profiles, not alloyed',
      rulesOfOrigin: 'Wholly obtained or change in tariff heading (CTH) under CPTPP Chapter 3.',
      tradeRemedyNotes: 'Subject to CBSA SIMA AD/CVD measures if originating from China. Vietnamese originating goods exempt.',
      sourceName: 'CBSA Customs Tariff Schedule 2026',
      sourceUrl: 'https://www.cbsa-asfc.gc.ca',
      lastVerified: 'September 2026'
    },
    '7604.21': {
      countryCode: 'CA',
      countryName: 'Canada',
      flag: '🇨🇦',
      ftaName: 'CPTPP (Trans-Pacific Partnership)',
      mfnRate: 5.0,
      prefRate: 0.0,
      hsCode: '7604.21',
      hsDescription: 'Aluminium hollow profiles (tubes, solar channel rails), of aluminium alloys',
      rulesOfOrigin: 'Extruded from billet in Vietnam with CPTPP Certificate of Origin (Form CPTPP).',
      tradeRemedyNotes: 'Chinese extrusions incur SIMA anti-dumping duties up to 101.9%. Vietnamese origin eliminates AD duties.',
      sourceName: 'CBSA Customs Tariff Schedule 2026',
      sourceUrl: 'https://www.cbsa-asfc.gc.ca',
      lastVerified: 'September 2026'
    },
    '7604.29': {
      countryCode: 'CA',
      countryName: 'Canada',
      flag: '🇨🇦',
      ftaName: 'CPTPP (Trans-Pacific Partnership)',
      mfnRate: 5.0,
      prefRate: 0.0,
      hsCode: '7604.29',
      hsDescription: 'Aluminium other profiles (solid profiles, heat sinks, architectural frames), of alloys',
      rulesOfOrigin: 'Billet extrusion & fabrication in Vietnam under CPTPP origin rules.',
      tradeRemedyNotes: 'Chinese origin subject to high SIMA duties. Vietnam provides duty-free access with compliant C/O.',
      sourceName: 'CBSA Customs Tariff Schedule 2026',
      sourceUrl: 'https://www.cbsa-asfc.gc.ca',
      lastVerified: 'September 2026'
    }
  },
  DE: {
    '7604.10': {
      countryCode: 'DE',
      countryName: 'Germany (EU)',
      flag: '🇩🇪',
      ftaName: 'EVFTA (EU-Vietnam Free Trade Agreement)',
      mfnRate: 7.5,
      prefRate: 0.0,
      hsCode: '7604.10',
      hsDescription: 'Aluminium bars, rods and profiles, not alloyed',
      rulesOfOrigin: 'Manufacture from non-originating materials where value does not exceed 50% ex-works (EUR.1 C/O).',
      tradeRemedyNotes: 'EU anti-dumping duties apply to certain Chinese extrusions (up to 32.1%). Vietnam goods qualify under EVFTA.',
      sourceName: 'EU Access2Markets Database',
      sourceUrl: 'https://trade.ec.europa.eu/access-to-markets',
      lastVerified: 'September 2026'
    },
    '7604.21': {
      countryCode: 'DE',
      countryName: 'Germany (EU)',
      flag: '🇩🇪',
      ftaName: 'EVFTA (EU-Vietnam Free Trade Agreement)',
      mfnRate: 7.5,
      prefRate: 0.0,
      hsCode: '7604.21',
      hsDescription: 'Aluminium hollow profiles, of aluminium alloys',
      rulesOfOrigin: 'Extrusion in Vietnam accompanied by valid EUR.1 certificate or registered exporter declaration (REX).',
      tradeRemedyNotes: 'Subject to EU CBAM carbon emissions disclosure. LELOI METAL provides complete CBAM verified emission dossiers.',
      sourceName: 'EU Access2Markets Database',
      sourceUrl: 'https://trade.ec.europa.eu/access-to-markets',
      lastVerified: 'September 2026'
    },
    '7604.29': {
      countryCode: 'DE',
      countryName: 'Germany (EU)',
      flag: '🇩🇪',
      ftaName: 'EVFTA (EU-Vietnam Free Trade Agreement)',
      mfnRate: 7.5,
      prefRate: 0.0,
      hsCode: '7604.29',
      hsDescription: 'Aluminium other profiles (solid profiles, heat sinks, structural profiles), of alloys',
      rulesOfOrigin: 'Manufacture from unwrought aluminium billets with CTC or RVC under EVFTA Protocol 1.',
      tradeRemedyNotes: 'Direct zero-duty EVFTA access saves 7.5% baseline duty over standard non-FTA exporters.',
      sourceName: 'EU Access2Markets Database',
      sourceUrl: 'https://trade.ec.europa.eu/access-to-markets',
      lastVerified: 'September 2026'
    }
  },
  JP: {
    '7604.10': {
      countryCode: 'JP',
      countryName: 'Japan',
      flag: '🇯🇵',
      ftaName: 'VJEPA & CPTPP Trade Agreements',
      mfnRate: 3.2,
      prefRate: 0.0,
      hsCode: '7604.10',
      hsDescription: 'Aluminium bars, rods and profiles, not alloyed',
      rulesOfOrigin: 'Qualifying under CPTPP Chapter 3 or VJEPA Annex 2 origin criteria.',
      tradeRemedyNotes: 'Duty-free preferential entry with Japanese customs using electronic C/O verification.',
      sourceName: 'Japan Customs Tariff Schedule',
      sourceUrl: 'https://www.customs.go.jp',
      lastVerified: 'September 2026'
    },
    '7604.21': {
      countryCode: 'JP',
      countryName: 'Japan',
      flag: '🇯🇵',
      ftaName: 'VJEPA & CPTPP Trade Agreements',
      mfnRate: 3.2,
      prefRate: 0.0,
      hsCode: '7604.21',
      hsDescription: 'Aluminium hollow profiles, of aluminium alloys',
      rulesOfOrigin: 'Billet to profile conversion with JIS H4100 / ASTM dimensional inspection documentation.',
      tradeRemedyNotes: 'Zero preferential tariff applies under CPTPP/VJEPA.',
      sourceName: 'Japan Customs Tariff Schedule',
      sourceUrl: 'https://www.customs.go.jp',
      lastVerified: 'September 2026'
    },
    '7604.29': {
      countryCode: 'JP',
      countryName: 'Japan',
      flag: '🇯🇵',
      ftaName: 'VJEPA & CPTPP Trade Agreements',
      mfnRate: 3.2,
      prefRate: 0.0,
      hsCode: '7604.29',
      hsDescription: 'Aluminium other profiles (precision components, industrial shapes), of alloys',
      rulesOfOrigin: 'Regional value content >= 40% or tariff shift under CPTPP.',
      tradeRemedyNotes: '3.2% duty elimination provides significant landed cost advantage for precision Japanese machinery builders.',
      sourceName: 'Japan Customs Tariff Schedule',
      sourceUrl: 'https://www.customs.go.jp',
      lastVerified: 'September 2026'
    }
  },
  KR: {
    '7604.10': {
      countryCode: 'KR',
      countryName: 'South Korea',
      flag: '🇰🇷',
      ftaName: 'VKFTA (Vietnam-Korea Free Trade Agreement)',
      mfnRate: 8.0,
      prefRate: 0.0,
      hsCode: '7604.10',
      hsDescription: 'Aluminium bars, rods and profiles, not alloyed',
      rulesOfOrigin: 'VKFTA Form KV Certificate of Origin proving Vietnamese manufacture.',
      tradeRemedyNotes: '8.0% standard tariff eliminated under bilateral VKFTA agreement.',
      sourceName: 'Korea Customs Service (KCS) UNIPASS',
      sourceUrl: 'https://www.customs.go.kr',
      lastVerified: 'September 2026'
    },
    '7604.21': {
      countryCode: 'KR',
      countryName: 'South Korea',
      flag: '🇰🇷',
      ftaName: 'VKFTA (Vietnam-Korea Free Trade Agreement)',
      mfnRate: 8.0,
      prefRate: 0.0,
      hsCode: '7604.21',
      hsDescription: 'Aluminium hollow profiles, of aluminium alloys',
      rulesOfOrigin: 'Manufactured from aluminium billets in Vietnam under VKFTA Annex 3.',
      tradeRemedyNotes: '0% preferential duty applied with electronic C/O exchange between Vietnam and Korea customs.',
      sourceName: 'Korea Customs Service (KCS) UNIPASS',
      sourceUrl: 'https://www.customs.go.kr',
      lastVerified: 'September 2026'
    },
    '7604.29': {
      countryCode: 'KR',
      countryName: 'South Korea',
      flag: '🇰🇷',
      ftaName: 'VKFTA (Vietnam-Korea Free Trade Agreement)',
      mfnRate: 8.0,
      prefRate: 0.0,
      hsCode: '7604.29',
      hsDescription: 'Aluminium other profiles (solar rails, frame extrusions, heat sinks), of alloys',
      rulesOfOrigin: 'Processed through extrusion, heat treatment and surface finishing in Vietnam.',
      tradeRemedyNotes: 'Saves 8.0% tariff versus non-FTA Asian competitors. Highly favorable for Korean solar rail EPCs.',
      sourceName: 'Korea Customs Service (KCS) UNIPASS',
      sourceUrl: 'https://www.customs.go.kr',
      lastVerified: 'September 2026'
    }
  },
  AE: {
    '7604.10': {
      countryCode: 'AE',
      countryName: 'United Arab Emirates (GCC)',
      flag: '🇦🇪',
      ftaName: 'GCC Common Customs Tariff / Vietnam-UAE CEPA',
      mfnRate: 5.0,
      prefRate: 5.0,
      hsCode: '7604.10',
      hsDescription: 'Aluminium bars, rods and profiles, not alloyed',
      rulesOfOrigin: 'Standard GCC origin criteria with Chamber of Commerce legalised Certificate of Origin.',
      tradeRemedyNotes: 'Standard 5.0% GCC single-point customs duty. Vietnam-UAE CEPA negotiation finalizing preferential tracks.',
      sourceName: 'UAE Federal Customs Authority (FCA)',
      sourceUrl: 'https://www.fca.gov.ae',
      lastVerified: 'September 2026'
    },
    '7604.21': {
      countryCode: 'AE',
      countryName: 'United Arab Emirates (GCC)',
      flag: '🇦🇪',
      ftaName: 'GCC Common Customs Tariff / Vietnam-UAE CEPA',
      mfnRate: 5.0,
      prefRate: 5.0,
      hsCode: '7604.21',
      hsDescription: 'Aluminium hollow profiles, of aluminium alloys',
      rulesOfOrigin: 'Standard GCC documentation requirements with test certification.',
      tradeRemedyNotes: 'Fast clearance at Jebel Ali Port with direct shipping lanes from Vietnam.',
      sourceName: 'UAE Federal Customs Authority (FCA)',
      sourceUrl: 'https://www.fca.gov.ae',
      lastVerified: 'September 2026'
    },
    '7604.29': {
      countryCode: 'AE',
      countryName: 'United Arab Emirates (GCC)',
      flag: '🇦🇪',
      ftaName: 'GCC Common Customs Tariff / Vietnam-UAE CEPA',
      mfnRate: 5.0,
      prefRate: 5.0,
      hsCode: '7604.29',
      hsDescription: 'Aluminium other profiles (facades, curtain walls, architectural extrusions), of alloys',
      rulesOfOrigin: 'Qualitcoat / Qualanod anodized surface specification conformance for Gulf climatic conditions.',
      tradeRemedyNotes: 'No anti-dumping duties on Vietnamese profiles in GCC market.',
      sourceName: 'UAE Federal Customs Authority (FCA)',
      sourceUrl: 'https://www.fca.gov.ae',
      lastVerified: 'September 2026'
    }
  },
  US: {
    '7604.10': {
      countryCode: 'US',
      countryName: 'United States',
      flag: '🇺🇸',
      ftaName: 'US Harmonized Tariff Schedule (MFN)',
      mfnRate: 1.5,
      prefRate: 1.5,
      hsCode: '7604.10',
      hsDescription: 'Aluminium bars, rods and profiles, not alloyed',
      rulesOfOrigin: 'Substantial transformation in Vietnam from raw billet to finished profile.',
      tradeRemedyNotes: 'Chinese extrusions subject to Section 301 (25%) and massive AD/CVD duties (up to 374%). Sourcing from Vietnam requires certified country-of-origin documentation.',
      sourceName: 'US International Trade Commission (USITC) HTS',
      sourceUrl: 'https://hts.usitc.gov',
      lastVerified: 'September 2026'
    },
    '7604.21': {
      countryCode: 'US',
      countryName: 'United States',
      flag: '🇺🇸',
      ftaName: 'US Harmonized Tariff Schedule (MFN)',
      mfnRate: 5.7,
      prefRate: 5.7,
      hsCode: '7604.21',
      hsDescription: 'Aluminium hollow profiles, of aluminium alloys',
      rulesOfOrigin: 'Country of origin certification with mill test certificates (MTC) proving non-Chinese smelt & cast origin.',
      tradeRemedyNotes: 'Section 232 tariff (10%) and ongoing trade investigations. LELOI METAL complies with supply chain traceability standards.',
      sourceName: 'US International Trade Commission (USITC) HTS',
      sourceUrl: 'https://hts.usitc.gov',
      lastVerified: 'September 2026'
    },
    '7604.29': {
      countryCode: 'US',
      countryName: 'United States',
      flag: '🇺🇸',
      ftaName: 'US Harmonized Tariff Schedule (MFN)',
      mfnRate: 5.0,
      prefRate: 5.0,
      hsCode: '7604.29',
      hsDescription: 'Aluminium other profiles (solid profiles, structural framing, solar tracks), of alloys',
      rulesOfOrigin: 'Complete traceability from billet heat number to finished extruded packaging.',
      tradeRemedyNotes: 'US buyers actively diversify from high-risk Chinese supply chains to compliant Vietnamese extruders.',
      sourceName: 'US International Trade Commission (USITC) HTS',
      sourceUrl: 'https://hts.usitc.gov',
      lastVerified: 'September 2026'
    }
  }
};

export default function ImportDutyCheckerPage() {
  const [selectedCountry, setSelectedCountry] = useState<string>('CA');
  const [selectedHsCode, setSelectedHsCode] = useState<string>('7604.29');
  const [cargoValueUsd, setCargoValueUsd] = useState<number>(50000);

  const currentData =
    TARIFF_DATABASE[selectedCountry]?.[selectedHsCode] ||
    TARIFF_DATABASE['CA']['7604.29'];

  const mfnDutyAmount = (cargoValueUsd * currentData.mfnRate) / 100;
  const prefDutyAmount = (cargoValueUsd * currentData.prefRate) / 100;
  const dutySavings = Math.max(0, mfnDutyAmount - prefDutyAmount);

  return (
    <div className="min-h-screen bg-[#F1F4F8]/50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs uppercase font-heading font-semibold tracking-widest text-[#2F7BFF]">
            TRADE & COMPLIANCE TOOLS
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-[#0A2D5B] tracking-tight">
            Aluminium Import Duty Checker
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Verify official customs tariffs (HS Code 7604), Free Trade Agreement (FTA) preferential rates from Vietnam, and trade remedy notes for international aluminium profile procurement.
          </p>
        </div>

        {/* Interactive Selection Grid */}
        <div className="bg-white rounded-2xl shadow-sm border border-[#E2E8F0] p-6 sm:p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Country Selector */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                1. Select Destination Country / Region
              </label>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl text-[#0A2D5B] font-medium text-base focus:outline-none focus:ring-2 focus:ring-[#2F7BFF] focus:border-transparent transition-all"
              >
                <option value="CA">🇨🇦 Canada (CPTPP Agreement)</option>
                <option value="DE">🇩🇪 Germany / European Union (EVFTA Agreement)</option>
                <option value="JP">🇯🇵 Japan (CPTPP & VJEPA Agreement)</option>
                <option value="KR">🇰🇷 South Korea (VKFTA Agreement)</option>
                <option value="AE">🇦🇪 United Arab Emirates (GCC Common Tariff)</option>
                <option value="US">🇺🇸 United States (USITC HTS Schedule)</option>
              </select>
              <p className="text-xs text-slate-500">
                Origin country is fixed to <strong>Vietnam (VN)</strong> for LELOI METAL export consignments.
              </p>
            </div>

            {/* HS Code Selector */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                2. Select Aluminium Profile HS Code
              </label>
              <select
                value={selectedHsCode}
                onChange={(e) => setSelectedHsCode(e.target.value)}
                className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl text-[#0A2D5B] font-medium text-base focus:outline-none focus:ring-2 focus:ring-[#2F7BFF] focus:border-transparent transition-all"
              >
                <option value="7604.29">
                  HS 7604.29 — Other alloy profiles (Solid shapes, heat sinks, structural frames)
                </option>
                <option value="7604.21">
                  HS 7604.21 — Hollow profiles (Tubes, rectangular box sections, solar channels)
                </option>
                <option value="7604.10">
                  HS 7604.10 — Aluminium bars, rods & profiles (Not alloyed)
                </option>
              </select>
              <p className="text-xs text-slate-500">
                Covers standard industrial extrusion specifications under World Customs Organization (WCO) nomenclature.
              </p>
            </div>
          </div>

          {/* Landed Duty Comparison Result Card */}
          <div className="bg-gradient-to-br from-[#061D3B] to-[#0A2D5B] text-white rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div className="space-y-1">
                <div className="text-xs font-mono uppercase tracking-widest text-blue-300 flex items-center gap-2">
                  <span>{currentData.flag}</span>
                  <span>{currentData.countryName}</span>
                  <span>•</span>
                  <span>HS {currentData.hsCode}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-heading">
                  {currentData.ftaName}
                </h3>
              </div>
              <Badge variant="verified" size="md">
                Verified: {currentData.lastVerified}
              </Badge>
            </div>

            {/* Rates Comparison Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-1">
                <div className="text-xs text-slate-300 font-medium">Preferential Rate (Vietnam Origin)</div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#2F7BFF] flex items-baseline gap-1">
                  {currentData.prefRate}%
                  {currentData.prefRate === 0 && (
                    <span className="text-xs font-semibold bg-green-500/20 text-green-300 px-2 py-0.5 rounded-full">
                      DUTY FREE
                    </span>
                  )}
                </div>
                <div className="text-[11px] text-slate-400">
                  With verified Certificate of Origin
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-1">
                <div className="text-xs text-slate-300 font-medium">Standard MFN Tariff Rate</div>
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-200">
                  {currentData.mfnRate}%
                </div>
                <div className="text-[11px] text-slate-400">
                  Applied to non-FTA countries
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-1">
                <div className="text-xs text-slate-300 font-medium">Tariff Advantage vs. MFN</div>
                <div className="text-3xl sm:text-4xl font-extrabold text-green-400 flex items-center gap-1">
                  {currentData.mfnRate > currentData.prefRate ? (
                    <>
                      <TrendingDown className="w-7 h-7 inline" />
                      -{(currentData.mfnRate - currentData.prefRate).toFixed(1)}%
                    </>
                  ) : (
                    <span>0.0%</span>
                  )}
                </div>
                <div className="text-[11px] text-slate-400">
                  Direct customs savings at destination
                </div>
              </div>
            </div>

            {/* Quick Landed Duty Simulation */}
            <div className="bg-white/10 backdrop-blur-xs rounded-xl p-4 sm:p-5 space-y-4 border border-white/15">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <div className="text-sm font-semibold text-white flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-green-400" />
                    Estimate Duty Cost on Your Consignment
                  </div>
                  <div className="text-xs text-slate-300">
                    Enter estimated FOB cargo value to calculate customs duty differential:
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-300">$</span>
                  <input
                    type="number"
                    min="1000"
                    step="5000"
                    value={cargoValueUsd}
                    onChange={(e) => setCargoValueUsd(Number(e.target.value) || 0)}
                    className="w-36 px-3 py-1.5 bg-white text-[#0A2D5B] font-bold rounded-lg text-sm text-right focus:outline-none focus:ring-2 focus:ring-[#2F7BFF]"
                  />
                  <span className="text-sm text-slate-300">USD</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-white/10 text-xs sm:text-sm">
                <div>
                  <span className="text-slate-400">Duty with MFN Rate:</span>
                  <div className="text-base font-semibold text-slate-200">
                    ${mfnDutyAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                </div>
                <div>
                  <span className="text-slate-400">Duty with Vietnam Preferential:</span>
                  <div className="text-base font-semibold text-[#2F7BFF]">
                    ${prefDutyAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                </div>
                <div>
                  <span className="text-slate-400">Total Import Savings:</span>
                  <div className="text-base font-bold text-green-400">
                    ${dutySavings.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Compliance & Origin Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Rules of Origin Box */}
            <div className="p-5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-[#0A2D5B] font-heading">
                <FileCheck2 className="w-4 h-4 text-[#2F7BFF]" />
                Rules of Origin (RoO) Requirement
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {currentData.rulesOfOrigin}
              </p>
              <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-200">
                LELOI METAL supplies mill certificates and legitimate government-certified Certificates of Origin with every shipment.
              </div>
            </div>

            {/* Trade Remedy & Anti-Dumping Protection */}
            <div className="p-5 bg-amber-50/70 border border-amber-200 rounded-xl space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-amber-900 font-heading">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                Trade Remedy & Anti-Dumping Notes
              </div>
              <p className="text-xs text-amber-800 leading-relaxed">
                {currentData.tradeRemedyNotes}
              </p>
              <div className="text-[11px] text-amber-700/80 pt-2 border-t border-amber-200">
                Avoid circumvention risks by working with established, traceable primary processors in Vietnam.
              </div>
            </div>
          </div>

          {/* Verified Official Source & Disclaimer */}
          <div className="pt-4 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-green-600 shrink-0" />
              <span>
                Source: <strong>{currentData.sourceName}</strong> (Accessed {currentData.lastVerified})
              </span>
              <a
                href={currentData.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2F7BFF] hover:underline inline-flex items-center gap-1 font-medium"
              >
                Official Schedule <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="text-[11px] text-slate-400 italic">
              Data strictly verified under LELOI METAL Compliance Standards.
            </div>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="p-4 bg-slate-100 border border-slate-200 rounded-xl text-xs text-slate-500 space-y-1">
          <div className="font-semibold text-slate-700 flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-slate-500" />
            Official Tariff & Customs Disclaimer
          </div>
          <p>
            Customs duty rates and preferential FTA rules are subject to legislative adjustments by respective customs authorities. Information presented above is compiled from official government portals for international export planning and supply chain evaluation only. Final classification, duty liability, and origin validation are subject to physical inspection and verification by the importing customs authority.
          </p>
        </div>

        {/* Next Action Conversion Strip */}
        <div className="bg-[#0A2D5B] text-white rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold font-heading">
              Need Landed-Cost Calculation or Drawing Verification?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Upload your CAD or 2D profile drawings. Our international engineering and logistics desk will verify alloy suitability, extrusion envelope, and landed CIF/DDP costs.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Link href="/rfq">
              <Button variant="cta" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Submit RFQ for Landed Quote
              </Button>
            </Link>
            <Link href="/markets">
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                Explore Market Intelligence
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
