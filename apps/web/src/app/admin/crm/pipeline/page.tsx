'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AdminNav } from '@/components/AdminNav';
import { Card, Badge, Button } from '@leloi/ui';
import {
  Kanban,
  Filter,
  Plus,
  ArrowRight,
  TrendingUp,
  Building2,
  Globe2,
  Calendar,
  DollarSign,
  ChevronRight,
  ShieldCheck,
  Search
} from 'lucide-react';

interface DealCard {
  id: string;
  companyName: string;
  country: string;
  countryCode: string;
  buyerType: 'SOL' | 'OEM' | 'FAB' | 'DIST' | 'AUT' | 'THERM' | 'CON';
  buyerTypeLabel: string;
  annualTons: number;
  estimatedValueUsd: number;
  qualificationScore: number;
  stage:
    | 'TARGET'
    | 'RESEARCHED'
    | 'CONTACT_READY'
    | 'CONTACTED'
    | 'REPLIED'
    | 'TECHNICAL_DISCUSSION'
    | 'RFQ_RECEIVED'
    | 'QUOTED'
    | 'SAMPLE_TRIAL'
    | 'WON'
    | 'LOST';
  keyContact: string;
  chinaExposure: 'HIGH' | 'MEDIUM' | 'LOW';
  productsInterest: string;
  lastTouchpoint: string;
}

const INITIAL_DEALS: DealCard[] = [
  {
    id: 'DEAL-001',
    companyName: 'Apex Solar Racking Inc',
    country: 'Canada',
    countryCode: 'CA',
    buyerType: 'SOL',
    buyerTypeLabel: 'Solar Fabricator',
    annualTons: 1200,
    estimatedValueUsd: 3600000,
    qualificationScore: 88,
    stage: 'QUOTED',
    keyContact: 'Mark Jenkins (VP Procurement)',
    chinaExposure: 'HIGH',
    productsInterest: '6005A-T6 Solar mounting rails, anodized 15µm',
    lastTouchpoint: 'Quote REV-2 sent via email'
  },
  {
    id: 'DEAL-002',
    companyName: 'NordAlu Systems GmbH',
    country: 'Germany',
    countryCode: 'DE',
    buyerType: 'OEM',
    buyerTypeLabel: 'Automation Machinery OEM',
    annualTons: 850,
    estimatedValueUsd: 2890000,
    qualificationScore: 92,
    stage: 'TECHNICAL_DISCUSSION',
    keyContact: 'Dr. Klaus Becker (Chief Engineer)',
    chinaExposure: 'MEDIUM',
    productsInterest: '6061-T6 Precision linear frame extrusions',
    lastTouchpoint: 'DFM review meeting on tolerance ±0.15mm'
  },
  {
    id: 'DEAL-003',
    companyName: 'Nippon Precision Components Ltd',
    country: 'Japan',
    countryCode: 'JP',
    buyerType: 'FAB',
    buyerTypeLabel: 'Electronics Fabricator',
    annualTons: 450,
    estimatedValueUsd: 1575000,
    qualificationScore: 84,
    stage: 'REPLIED',
    keyContact: 'Kenji Sato (Sourcing Manager)',
    chinaExposure: 'LOW',
    productsInterest: '6063-T5 Thin-wall heat sink profiles',
    lastTouchpoint: 'Requested quotation for 3 custom die trials'
  },
  {
    id: 'DEAL-004',
    companyName: 'Hansung Energy Corporation',
    country: 'South Korea',
    countryCode: 'KR',
    buyerType: 'SOL',
    buyerTypeLabel: 'Solar EPC & Developer',
    annualTons: 1800,
    estimatedValueUsd: 5400000,
    qualificationScore: 90,
    stage: 'RFQ_RECEIVED',
    keyContact: 'Min-Soo Park (Supply Chain Director)',
    chinaExposure: 'HIGH',
    productsInterest: '6005A & 6082 Ground mount solar channels',
    lastTouchpoint: 'Formal RFQ-2026-0048 received with 2D drawings'
  },
  {
    id: 'DEAL-005',
    companyName: 'Gulf Architectural Systems LLC',
    country: 'UAE',
    countryCode: 'AE',
    buyerType: 'CON',
    buyerTypeLabel: 'Curtain Wall Contractor',
    annualTons: 2200,
    estimatedValueUsd: 6600000,
    qualificationScore: 82,
    stage: 'CONTACT_READY',
    keyContact: 'Tariq Al-Mansoor (Procurement Head)',
    chinaExposure: 'MEDIUM',
    productsInterest: '6063-T6 Facade mullions, powder coated RAL 7016',
    lastTouchpoint: 'Decision maker verified on LinkedIn'
  },
  {
    id: 'DEAL-006',
    companyName: 'EuroThermal Solutions BV',
    country: 'Netherlands',
    countryCode: 'NL',
    buyerType: 'THERM',
    buyerTypeLabel: 'Thermal Management OEM',
    annualTons: 600,
    estimatedValueUsd: 2100000,
    qualificationScore: 86,
    stage: 'SAMPLE_TRIAL',
    keyContact: 'Jeroen van Dijk (Quality Manager)',
    chinaExposure: 'HIGH',
    productsInterest: 'High-fin ratio 6063 heat sinks with CNC drilling',
    lastTouchpoint: 'Sample die extrusion batch dispatched via DHL'
  },
  {
    id: 'DEAL-007',
    companyName: 'Canadian Modular Builders Ltd',
    country: 'Canada',
    countryCode: 'CA',
    buyerType: 'FAB',
    buyerTypeLabel: 'Prefab Modular Fabricator',
    annualTons: 1100,
    estimatedValueUsd: 3300000,
    qualificationScore: 85,
    stage: 'WON',
    keyContact: 'Sarah MacLeod (COO)',
    chinaExposure: 'HIGH',
    productsInterest: '6061-T6 Structural box columns & joists',
    lastTouchpoint: 'First 40ft HC container shipped from Hai Phong'
  },
  {
    id: 'DEAL-008',
    companyName: 'Rheinland Fensterbau GmbH',
    country: 'Germany',
    countryCode: 'DE',
    buyerType: 'CON',
    buyerTypeLabel: 'Fenestration Manufacturer',
    annualTons: 750,
    estimatedValueUsd: 2250000,
    qualificationScore: 79,
    stage: 'TARGET',
    keyContact: 'Wolfgang Weber (Managing Director)',
    chinaExposure: 'MEDIUM',
    productsInterest: 'Thermal break window profiles (6063-T5)',
    lastTouchpoint: 'Account identified via BAU trade directory'
  }
];

const PIPELINE_STAGES = [
  { id: 'TARGET', label: 'Target Identified' },
  { id: 'RESEARCHED', label: 'Researched & Enriched' },
  { id: 'CONTACT_READY', label: 'Contact Ready' },
  { id: 'CONTACTED', label: 'Outreach Sent' },
  { id: 'REPLIED', label: 'Buyer Replied' },
  { id: 'TECHNICAL_DISCUSSION', label: 'Technical DFM' },
  { id: 'RFQ_RECEIVED', label: 'RFQ Received' },
  { id: 'QUOTED', label: 'Quoted' },
  { id: 'SAMPLE_TRIAL', label: 'Die / Sample Trial' },
  { id: 'WON', label: 'Closed Won' }
];

export default function PipelinePage() {
  const [deals, setDeals] = useState<DealCard[]>(INITIAL_DEALS);
  const [selectedCountry, setSelectedCountry] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeDealModal, setActiveDealModal] = useState<DealCard | null>(null);

  const filteredDeals = deals.filter((deal) => {
    const matchesCountry = selectedCountry === 'ALL' || deal.countryCode === selectedCountry;
    const matchesSearch =
      deal.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      deal.productsInterest.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCountry && matchesSearch;
  });

  const handleAdvanceStage = (dealId: string) => {
    setDeals((prev) =>
      prev.map((deal) => {
        if (deal.id !== dealId) return deal;
        const currentIdx = PIPELINE_STAGES.findIndex((s) => s.id === deal.stage);
        if (currentIdx < PIPELINE_STAGES.length - 1) {
          const nextStage = PIPELINE_STAGES[currentIdx + 1].id as DealCard['stage'];
          return { ...deal, stage: nextStage };
        }
        return deal;
      })
    );
    if (activeDealModal && activeDealModal.id === dealId) {
      const currentIdx = PIPELINE_STAGES.findIndex((s) => s.id === activeDealModal.stage);
      if (currentIdx < PIPELINE_STAGES.length - 1) {
        setActiveDealModal({
          ...activeDealModal,
          stage: PIPELINE_STAGES[currentIdx + 1].id as DealCard['stage']
        });
      }
    }
  };

  const totalPipelineValue = filteredDeals.reduce((sum, d) => sum + d.estimatedValueUsd, 0);
  const totalVolumeTons = filteredDeals.reduce((sum, d) => sum + d.annualTons, 0);

  return (
    <div className="min-h-screen bg-light-gray">
      <AdminNav />

      <div className="p-6 lg:p-10 space-y-6 max-w-7xl mx-auto">
        {/* Header and Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-blue">
              B2B EXPORT CRM & BUYER ACQUISITION
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold font-heading text-navy">
              International Buyer Pipeline
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/admin/crm/buyers">
              <Button variant="outline" size="sm">
                Buyer Directory & Scoring
              </Button>
            </Link>
            <Button
              variant="cta"
              size="sm"
              leftIcon={<Plus className="w-4 h-4" />}
              onClick={() => alert('New Buyer Prospect form opened')}
            >
              Add Target Buyer
            </Button>
          </div>
        </div>

        {/* Pipeline Summary Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white rounded-xl border border-slate-200 p-4 shadow-xs">
          <div className="space-y-0.5">
            <div className="text-xs text-slate-500 font-medium">Active Prospects</div>
            <div className="text-2xl font-bold text-navy">{filteredDeals.length} accounts</div>
          </div>
          <div className="space-y-0.5">
            <div className="text-xs text-slate-500 font-medium">Annualized Pipeline Volume</div>
            <div className="text-2xl font-bold text-blue">{totalVolumeTons.toLocaleString()} Metric Tons/yr</div>
          </div>
          <div className="space-y-0.5">
            <div className="text-xs text-slate-500 font-medium">Weighted Annual Value</div>
            <div className="text-2xl font-bold text-emerald-600">
              ${(totalPipelineValue / 1000000).toFixed(2)}M USD
            </div>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="bg-white rounded-xl border border-slate-200 p-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-500 flex items-center gap-1 mr-2">
              <Filter className="w-3.5 h-3.5" /> Market Filter:
            </span>
            {['ALL', 'CA', 'DE', 'JP', 'KR', 'AE', 'NL'].map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCountry(c)}
                className={`px-3 py-1 rounded-md text-xs font-semibold transition-colors ${
                  selectedCountry === c
                    ? 'bg-navy text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {c === 'ALL' ? 'All Markets' : c}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-3 text-slate-400" />
            <input
              type="text"
              placeholder="Search company or alloy..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue"
            />
          </div>
        </div>

        {/* Kanban Board Container (Horizontally Scrollable) */}
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-4 min-w-[1500px]">
            {PIPELINE_STAGES.map((stage) => {
              const stageDeals = filteredDeals.filter((d) => d.stage === stage.id);
              return (
                <div
                  key={stage.id}
                  className="w-72 shrink-0 bg-[#E9EDF3]/80 rounded-xl p-3 flex flex-col gap-3 border border-slate-300"
                >
                  <div className="flex items-center justify-between px-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-navy truncate">
                      {stage.label}
                    </span>
                    <span className="text-[11px] font-bold bg-white text-slate-700 px-2 py-0.5 rounded-full border border-slate-300">
                      {stageDeals.length}
                    </span>
                  </div>

                  {/* Deals Cards */}
                  <div className="space-y-3 flex-1">
                    {stageDeals.length === 0 ? (
                      <div className="text-center py-8 text-xs text-slate-400 italic">
                        No accounts in this stage
                      </div>
                    ) : (
                      stageDeals.map((deal) => (
                        <div
                          key={deal.id}
                          onClick={() => setActiveDealModal(deal)}
                          className="bg-white rounded-lg p-3.5 border border-slate-300 shadow-xs hover:border-blue transition-all cursor-pointer space-y-2.5 group"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <span className="font-heading font-bold text-xs text-navy group-hover:text-blue transition-colors leading-tight">
                              {deal.companyName}
                            </span>
                            <span className="text-[10px] font-bold font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-700">
                              {deal.countryCode}
                            </span>
                          </div>

                          <div className="text-[11px] text-slate-600 line-clamp-2">
                            {deal.productsInterest}
                          </div>

                          <div className="flex items-center justify-between text-[11px] pt-2 border-t border-slate-100">
                            <span className="font-semibold text-navy">
                              {deal.annualTons} Tons/yr
                            </span>
                            <span
                              className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                                deal.qualificationScore >= 85
                                  ? 'bg-emerald-100 text-emerald-800'
                                  : 'bg-blue-100 text-blue-800'
                              }`}
                            >
                              Score: {deal.qualificationScore}
                            </span>
                          </div>

                          <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1">
                            <span className="truncate max-w-[130px]">{deal.keyContact.split(' ')[0]}...</span>
                            <span
                              className={`font-semibold ${
                                deal.chinaExposure === 'HIGH'
                                  ? 'text-rose-600'
                                  : deal.chinaExposure === 'MEDIUM'
                                  ? 'text-amber-600'
                                  : 'text-slate-500'
                              }`}
                            >
                              CN Exp: {deal.chinaExposure}
                            </span>
                          </div>

                          {/* Quick Stage Advance */}
                          {stage.id !== 'WON' && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleAdvanceStage(deal.id);
                              }}
                              className="w-full mt-2 text-[10px] font-semibold text-blue hover:bg-blue-50 py-1 rounded border border-blue-200 flex items-center justify-center gap-1"
                            >
                              Move Next Stage <ChevronRight className="w-3 h-3" />
                            </button>
                          )}
                        </div>
                      ))
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detailed Deal Modal */}
        {activeDealModal && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-xl w-full p-6 space-y-6 shadow-2xl border border-slate-200">
              <div className="flex items-start justify-between border-b border-slate-100 pb-4">
                <div>
                  <div className="text-xs uppercase font-mono text-blue">
                    {activeDealModal.id} • {activeDealModal.country} ({activeDealModal.countryCode})
                  </div>
                  <h3 className="text-xl font-bold font-heading text-navy">
                    {activeDealModal.companyName}
                  </h3>
                  <div className="text-xs text-slate-500">{activeDealModal.buyerTypeLabel}</div>
                </div>
                <Badge variant="verified" size="md">
                  Score: {activeDealModal.qualificationScore}/100
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="p-3 bg-slate-50 rounded-lg">
                  <span className="text-slate-400">Annual Estimated Volume:</span>
                  <div className="font-bold text-sm text-navy mt-0.5">
                    {activeDealModal.annualTons} Metric Tons
                  </div>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg">
                  <span className="text-slate-400">Annual Contract Value:</span>
                  <div className="font-bold text-sm text-emerald-600 mt-0.5">
                    ${activeDealModal.estimatedValueUsd.toLocaleString()} USD
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="font-semibold text-slate-700">Target Extrusion Profile:</span>
                  <p className="text-slate-600 mt-0.5">{activeDealModal.productsInterest}</p>
                </div>
                <div>
                  <span className="font-semibold text-slate-700">Key Procurement Contact:</span>
                  <p className="text-slate-600 mt-0.5">{activeDealModal.keyContact}</p>
                </div>
                <div>
                  <span className="font-semibold text-slate-700">China Diversification Exposure:</span>
                  <p className="text-slate-600 mt-0.5">
                    {activeDealModal.chinaExposure} urgency to hedge anti-dumping tariffs and secure compliant supply from Vietnam.
                  </p>
                </div>
                <div>
                  <span className="font-semibold text-slate-700">Last Activity / Touchpoint:</span>
                  <p className="text-slate-600 mt-0.5">{activeDealModal.lastTouchpoint}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setActiveDealModal(null)}
                >
                  Close
                </Button>
                {activeDealModal.stage !== 'WON' && (
                  <Button
                    variant="cta"
                    size="sm"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                    onClick={() => handleAdvanceStage(activeDealModal.id)}
                  >
                    Advance to Next Stage
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
