'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AdminNav } from '@/components/AdminNav';
import { Card, Badge, Button } from '@leloi/ui';
import {
  Globe2,
  Sliders,
  ShieldCheck,
  TrendingUp,
  AlertCircle,
  ExternalLink,
  CheckCircle2,
  Save,
  RotateCcw
} from 'lucide-react';

interface MarketRow {
  id: string;
  countryCode: string;
  name: string;
  region: string;
  fta: string;
  tariffAdvantageScore: number; // 0-100
  importVolumeScore: number; // 0-100
  paymentSafetyScore: number; // 0-100
  logisticsScore: number; // 0-100
  momentumScore: number; // 0-100
  verificationStatus: 'VERIFIED' | 'REVIEW_REQUIRED';
  sourceName: string;
  sourceUrl: string;
  lastVerified: string;
}

const DEFAULT_MARKETS: MarketRow[] = [
  {
    id: 'MKT-CA',
    countryCode: 'CA',
    name: 'Canada',
    region: 'North America',
    fta: 'CPTPP (0% Preferential Duty)',
    tariffAdvantageScore: 95,
    importVolumeScore: 85,
    paymentSafetyScore: 96,
    logisticsScore: 82,
    momentumScore: 90,
    verificationStatus: 'VERIFIED',
    sourceName: 'CBSA Customs Tariff Schedule 2026',
    sourceUrl: 'https://www.cbsa-asfc.gc.ca',
    lastVerified: '2026-09-01'
  },
  {
    id: 'MKT-DE',
    countryCode: 'DE',
    name: 'Germany',
    region: 'Europe (EU)',
    fta: 'EVFTA (Preferential Schedule)',
    tariffAdvantageScore: 92,
    importVolumeScore: 90,
    paymentSafetyScore: 95,
    logisticsScore: 78,
    momentumScore: 88,
    verificationStatus: 'VERIFIED',
    sourceName: 'EU Access2Markets Database',
    sourceUrl: 'https://trade.ec.europa.eu/access-to-markets',
    lastVerified: '2026-09-01'
  },
  {
    id: 'MKT-JP',
    countryCode: 'JP',
    name: 'Japan',
    region: 'East Asia',
    fta: 'VJEPA & CPTPP (0% Preferential)',
    tariffAdvantageScore: 88,
    importVolumeScore: 82,
    paymentSafetyScore: 98,
    logisticsScore: 92,
    momentumScore: 85,
    verificationStatus: 'VERIFIED',
    sourceName: 'Japan Customs Tariff Schedule',
    sourceUrl: 'https://www.customs.go.jp',
    lastVerified: '2026-09-01'
  },
  {
    id: 'MKT-KR',
    countryCode: 'KR',
    name: 'South Korea',
    region: 'East Asia',
    fta: 'VKFTA (0% Bilateral Rate)',
    tariffAdvantageScore: 94,
    importVolumeScore: 86,
    paymentSafetyScore: 92,
    logisticsScore: 94,
    momentumScore: 92,
    verificationStatus: 'VERIFIED',
    sourceName: 'Korea Customs Service (KCS) UNIPASS',
    sourceUrl: 'https://www.customs.go.kr',
    lastVerified: '2026-09-01'
  },
  {
    id: 'MKT-AE',
    countryCode: 'AE',
    name: 'United Arab Emirates',
    region: 'Middle East',
    fta: 'GCC 5% Tariff / Vietnam-UAE CEPA',
    tariffAdvantageScore: 80,
    importVolumeScore: 84,
    paymentSafetyScore: 88,
    logisticsScore: 85,
    momentumScore: 86,
    verificationStatus: 'VERIFIED',
    sourceName: 'UAE Federal Customs Authority',
    sourceUrl: 'https://www.fca.gov.ae',
    lastVerified: '2026-09-01'
  },
  {
    id: 'MKT-NL',
    countryCode: 'NL',
    name: 'Netherlands',
    region: 'Europe (EU)',
    fta: 'EVFTA Port of Rotterdam Gateway',
    tariffAdvantageScore: 90,
    importVolumeScore: 80,
    paymentSafetyScore: 96,
    logisticsScore: 84,
    momentumScore: 82,
    verificationStatus: 'VERIFIED',
    sourceName: 'EU Access2Markets Database',
    sourceUrl: 'https://trade.ec.europa.eu/access-to-markets',
    lastVerified: '2026-09-01'
  },
  {
    id: 'MKT-US',
    countryCode: 'US',
    name: 'United States',
    region: 'North America',
    fta: 'MFN + High Chinese AD/CVD Urgency',
    tariffAdvantageScore: 86,
    importVolumeScore: 98,
    paymentSafetyScore: 92,
    logisticsScore: 80,
    momentumScore: 89,
    verificationStatus: 'REVIEW_REQUIRED',
    sourceName: 'USITC Harmonized Tariff Schedule',
    sourceUrl: 'https://hts.usitc.gov',
    lastVerified: '2026-08-15'
  }
];

export default function AdminMarketsPage() {
  const [markets, setMarkets] = useState<MarketRow[]>(DEFAULT_MARKETS);

  // Algorithm Weights (summing to 100%)
  const [wTariff, setWTariff] = useState<number>(25);
  const [wVolume, setWVolume] = useState<number>(25);
  const [wPayment, setWPayment] = useState<number>(20);
  const [wLogistics, setWLogistics] = useState<number>(15);
  const [wMomentum, setWMomentum] = useState<number>(15);

  const calculateOpportunityScore = (m: MarketRow): number => {
    const totalWeight = wTariff + wVolume + wPayment + wLogistics + wMomentum || 100;
    const score =
      (m.tariffAdvantageScore * wTariff +
        m.importVolumeScore * wVolume +
        m.paymentSafetyScore * wPayment +
        m.logisticsScore * wLogistics +
        m.momentumScore * wMomentum) /
      totalWeight;
    return Math.round(score * 10) / 10;
  };

  const toggleVerification = (id: string) => {
    setMarkets((prev) =>
      prev.map((m) => {
        if (m.id !== id) return m;
        return {
          ...m,
          verificationStatus:
            m.verificationStatus === 'VERIFIED' ? 'REVIEW_REQUIRED' : 'VERIFIED',
          lastVerified: '2026-09-09'
        };
      })
    );
  };

  const handleResetWeights = () => {
    setWTariff(25);
    setWVolume(25);
    setWPayment(20);
    setWLogistics(15);
    setWMomentum(15);
  };

  const sortedMarkets = [...markets].sort(
    (a, b) => calculateOpportunityScore(b) - calculateOpportunityScore(a)
  );

  return (
    <div className="min-h-screen bg-light-gray">
      <AdminNav />

      <div className="p-6 lg:p-10 space-y-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-blue">
              MARKET INTELLIGENCE & PRIORITIZATION
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold font-heading text-navy">
              Market Opportunity Scoring Engine
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              leftIcon={<RotateCcw className="w-3.5 h-3.5" />}
              onClick={handleResetWeights}
            >
              Reset Weights
            </Button>
            <Button
              variant="cta"
              size="sm"
              leftIcon={<Save className="w-3.5 h-3.5" />}
              onClick={() => alert('Custom market weighting algorithm saved!')}
            >
              Save Parameters
            </Button>
          </div>
        </div>

        {/* Algorithm Weights Control Box */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <div className="space-y-1">
              <h2 className="text-base font-bold font-heading text-navy flex items-center gap-2">
                <Sliders className="w-4 h-4 text-blue" />
                Dynamic Weighting Factor Configuration
              </h2>
              <p className="text-xs text-slate-500">
                Adjust the importance of each metric to dynamically recalculate market priority ranking for export sales campaigns.
              </p>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold font-mono text-slate-700">
                Total Weight: {wTariff + wVolume + wPayment + wLogistics + wMomentum}%
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Factor 1 */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold text-slate-700">
                <span>Tariff Advantage</span>
                <span className="text-blue font-bold">{wTariff}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="50"
                step="5"
                value={wTariff}
                onChange={(e) => setWTariff(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue"
              />
              <p className="text-[10px] text-slate-400">FTA duty exemption vs. MFN</p>
            </div>

            {/* Factor 2 */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold text-slate-700">
                <span>Import Market Size</span>
                <span className="text-blue font-bold">{wVolume}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="50"
                step="5"
                value={wVolume}
                onChange={(e) => setWVolume(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue"
              />
              <p className="text-[10px] text-slate-400">Total national extrusion imports</p>
            </div>

            {/* Factor 3 */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold text-slate-700">
                <span>Payment & Legal Risk</span>
                <span className="text-blue font-bold">{wPayment}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="50"
                step="5"
                value={wPayment}
                onChange={(e) => setWPayment(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue"
              />
              <p className="text-[10px] text-slate-400">L/C enforceability & credit rating</p>
            </div>

            {/* Factor 4 */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold text-slate-700">
                <span>Logistics & Freight</span>
                <span className="text-blue font-bold">{wLogistics}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="50"
                step="5"
                value={wLogistics}
                onChange={(e) => setWLogistics(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue"
              />
              <p className="text-[10px] text-slate-400">Sea transit days & container rates</p>
            </div>

            {/* Factor 5 */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold text-slate-700">
                <span>Vietnam Momentum</span>
                <span className="text-blue font-bold">{wMomentum}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="50"
                step="5"
                value={wMomentum}
                onChange={(e) => setWMomentum(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue"
              />
              <p className="text-[10px] text-slate-400">Annual export growth velocity</p>
            </div>
          </div>
        </div>

        {/* Dynamic Opportunity Ranking Table */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="p-4 border-b border-slate-200 flex items-center justify-between">
            <h3 className="font-heading font-bold text-sm text-navy">
              Calculated Market Opportunity Ranking (7 Priority Export Targets)
            </h3>
            <span className="text-xs text-slate-500 italic">
              Sorted by real-time weighted opportunity score
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="py-3 px-4">Rank</th>
                  <th className="py-3 px-3">Market</th>
                  <th className="py-3 px-3">Primary Trade Agreement</th>
                  <th className="py-3 px-2">Tariff</th>
                  <th className="py-3 px-2">Volume</th>
                  <th className="py-3 px-2">Payment</th>
                  <th className="py-3 px-2">Logistics</th>
                  <th className="py-3 px-2">Momentum</th>
                  <th className="py-3 px-3">Opportunity Score</th>
                  <th className="py-3 px-3">Verification</th>
                  <th className="py-3 px-4 text-right">Audit Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                {sortedMarkets.map((m, idx) => {
                  const score = calculateOpportunityScore(m);
                  return (
                    <tr key={m.id} className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-500 font-mono">
                        #{idx + 1}
                      </td>
                      <td className="py-3.5 px-3">
                        <div className="font-bold text-navy text-sm">{m.name}</div>
                        <div className="text-[11px] text-slate-400 font-mono">
                          {m.countryCode} • {m.region}
                        </div>
                      </td>
                      <td className="py-3.5 px-3 font-medium text-slate-700">{m.fta}</td>
                      <td className="py-3.5 px-2 font-mono text-slate-600">{m.tariffAdvantageScore}</td>
                      <td className="py-3.5 px-2 font-mono text-slate-600">{m.importVolumeScore}</td>
                      <td className="py-3.5 px-2 font-mono text-slate-600">{m.paymentSafetyScore}</td>
                      <td className="py-3.5 px-2 font-mono text-slate-600">{m.logisticsScore}</td>
                      <td className="py-3.5 px-2 font-mono text-slate-600">{m.momentumScore}</td>
                      <td className="py-3.5 px-3">
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold text-base text-blue">
                            {score}
                          </span>
                          <div className="w-12 bg-slate-200 rounded-full h-1.5 overflow-hidden">
                            <div
                              className="bg-blue h-1.5 rounded-full"
                              style={{ width: `${Math.min(100, score)}%` }}
                            />
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-3">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            m.verificationStatus === 'VERIFIED'
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}
                        >
                          {m.verificationStatus}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <button
                          onClick={() => toggleVerification(m.id)}
                          className="text-xs font-semibold text-blue hover:underline"
                        >
                          {m.verificationStatus === 'VERIFIED' ? 'Mark Review' : 'Verify'}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Source Audit & Compliance Card */}
        <div className="p-4 bg-slate-100 border border-slate-200 rounded-xl text-xs text-slate-600 space-y-2">
          <div className="font-semibold text-slate-800 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Compliance Rule (ADR-004 & Master Blueprint Section 16)
          </div>
          <p>
            All market trade statistics, tariff claims, and FTA rates must link to official governmental sources (CBSA, EU Access2Markets, UN Comtrade, USITC). Any market with unverified statutory sources must be flagged as <code>REVIEW_REQUIRED</code> and masked from consumer trust badging on public web pages.
          </p>
        </div>
      </div>
    </div>
  );
}
