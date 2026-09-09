'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AdminNav } from '@/components/AdminNav';
import { Card, Badge, Button } from '@leloi/ui';
import {
  Users,
  Filter,
  Search,
  CheckCircle2,
  ExternalLink,
  Plus,
  Mail,
  Building,
  Globe2,
  ShieldCheck,
  TrendingUp,
  FileSpreadsheet
} from 'lucide-react';

interface BuyerAccount {
  id: string;
  name: string;
  country: string;
  countryCode: string;
  buyerType: 'SOL' | 'OEM' | 'FAB' | 'DIST' | 'AUT' | 'THERM' | 'CON';
  buyerTypeLabel: string;
  annualTons: number;
  chinaExposure: 'HIGH' | 'MEDIUM' | 'LOW';
  primaryAlloy: string;
  qualificationScore: number;
  scoreBreakdown: {
    marketFit: number; // /25
    volumeCapacity: number; // /25
    processMatch: number; // /25
    commercialRisk: number; // /25
  };
  keyContact: {
    name: string;
    role: string;
    email: string;
  };
  status: 'TARGET' | 'QUALIFIED' | 'NEGOTIATING' | 'ACTIVE_CUSTOMER';
}

const BUYERS_LIST: BuyerAccount[] = [
  {
    id: 'BYR-001',
    name: 'Apex Solar Racking Inc',
    country: 'Canada',
    countryCode: 'CA',
    buyerType: 'SOL',
    buyerTypeLabel: 'Solar Fabricator',
    annualTons: 1200,
    chinaExposure: 'HIGH',
    primaryAlloy: '6005A-T6',
    qualificationScore: 92,
    scoreBreakdown: { marketFit: 25, volumeCapacity: 23, processMatch: 24, commercialRisk: 20 },
    keyContact: { name: 'Mark Jenkins', role: 'VP Procurement', email: 'mjenkins@apexsolarracking.ca' },
    status: 'NEGOTIATING'
  },
  {
    id: 'BYR-002',
    name: 'NordAlu Systems GmbH',
    country: 'Germany',
    countryCode: 'DE',
    buyerType: 'OEM',
    buyerTypeLabel: 'Automation Machinery OEM',
    annualTons: 850,
    chinaExposure: 'MEDIUM',
    primaryAlloy: '6061-T6',
    qualificationScore: 94,
    scoreBreakdown: { marketFit: 25, volumeCapacity: 22, processMatch: 25, commercialRisk: 22 },
    keyContact: { name: 'Dr. Klaus Becker', role: 'Chief Engineer', email: 'k.becker@nordalu-systems.de' },
    status: 'QUALIFIED'
  },
  {
    id: 'BYR-003',
    name: 'Nippon Precision Components Ltd',
    country: 'Japan',
    countryCode: 'JP',
    buyerType: 'FAB',
    buyerTypeLabel: 'Electronics Fabricator',
    annualTons: 450,
    chinaExposure: 'LOW',
    primaryAlloy: '6063-T5',
    qualificationScore: 87,
    scoreBreakdown: { marketFit: 24, volumeCapacity: 18, processMatch: 23, commercialRisk: 22 },
    keyContact: { name: 'Kenji Sato', role: 'Sourcing Lead', email: 'ksato@nipponprecision.jp' },
    status: 'QUALIFIED'
  },
  {
    id: 'BYR-004',
    name: 'Hansung Energy Corporation',
    country: 'South Korea',
    countryCode: 'KR',
    buyerType: 'SOL',
    buyerTypeLabel: 'Solar EPC & Developer',
    annualTons: 1800,
    chinaExposure: 'HIGH',
    primaryAlloy: '6005A / 6082',
    qualificationScore: 91,
    scoreBreakdown: { marketFit: 25, volumeCapacity: 25, processMatch: 21, commercialRisk: 20 },
    keyContact: { name: 'Min-Soo Park', role: 'Procurement Director', email: 'mspark@hansungenergy.kr' },
    status: 'NEGOTIATING'
  },
  {
    id: 'BYR-005',
    name: 'Gulf Architectural Systems LLC',
    country: 'UAE',
    countryCode: 'AE',
    buyerType: 'CON',
    buyerTypeLabel: 'Curtain Wall Contractor',
    annualTons: 2200,
    chinaExposure: 'MEDIUM',
    primaryAlloy: '6063-T6',
    qualificationScore: 84,
    scoreBreakdown: { marketFit: 22, volumeCapacity: 24, processMatch: 20, commercialRisk: 18 },
    keyContact: { name: 'Tariq Al-Mansoor', role: 'Head of Purchasing', email: 'tariq@gulfarchsystems.ae' },
    status: 'TARGET'
  },
  {
    id: 'BYR-006',
    name: 'EuroThermal Solutions BV',
    country: 'Netherlands',
    countryCode: 'NL',
    buyerType: 'THERM',
    buyerTypeLabel: 'Thermal Management OEM',
    annualTons: 600,
    chinaExposure: 'HIGH',
    primaryAlloy: '6063-T5',
    qualificationScore: 88,
    scoreBreakdown: { marketFit: 25, volumeCapacity: 20, processMatch: 23, commercialRisk: 20 },
    keyContact: { name: 'Jeroen van Dijk', role: 'Quality Lead', email: 'j.vandijk@eurothermal.nl' },
    status: 'QUALIFIED'
  },
  {
    id: 'BYR-007',
    name: 'Canadian Modular Builders Ltd',
    country: 'Canada',
    countryCode: 'CA',
    buyerType: 'FAB',
    buyerTypeLabel: 'Modular Structural Fabricator',
    annualTons: 1100,
    chinaExposure: 'HIGH',
    primaryAlloy: '6061-T6',
    qualificationScore: 90,
    scoreBreakdown: { marketFit: 25, volumeCapacity: 23, processMatch: 22, commercialRisk: 20 },
    keyContact: { name: 'Sarah MacLeod', role: 'Operations VP', email: 'smacleod@canadianmodular.ca' },
    status: 'ACTIVE_CUSTOMER'
  }
];

export default function BuyersPage() {
  const [selectedType, setSelectedType] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalAccount, setActiveModalAccount] = useState<BuyerAccount | null>(null);

  const filtered = BUYERS_LIST.filter((b) => {
    const matchesType = selectedType === 'ALL' || b.buyerType === selectedType;
    const matchesSearch =
      b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.primaryAlloy.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F1F4F8]">
      <AdminNav />

      <div className="p-6 lg:p-10 space-y-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#2F7BFF]">
              LEAD SCORING & BUYER SEGMENTATION
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold font-heading text-[#0A2D5B]">
              Verified Buyer Accounts Directory
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/admin/crm/pipeline">
              <Button variant="outline" size="sm">
                View Kanban Pipeline
              </Button>
            </Link>
            <Button
              variant="cta"
              size="sm"
              leftIcon={<Plus className="w-4 h-4" />}
              onClick={() => alert('New buyer onboarding flow')}
            >
              Add New Buyer Profile
            </Button>
          </div>
        </div>

        {/* Filters Toolbar */}
        <div className="bg-white rounded-xl border border-[#E2E8F0] p-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-500 mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Buyer Type:
            </span>
            {[
              { code: 'ALL', label: 'All Segments' },
              { code: 'SOL', label: 'Solar Fabricators' },
              { code: 'OEM', label: 'Machinery OEMs' },
              { code: 'FAB', label: 'Fabricators' },
              { code: 'THERM', label: 'Thermal / Heat Sinks' },
              { code: 'CON', label: 'Curtain Wall Contractors' }
            ].map((t) => (
              <button
                key={t.code}
                onClick={() => setSelectedType(t.code)}
                className={`px-3 py-1 rounded-md text-xs font-semibold transition-colors ${
                  selectedType === t.code
                    ? 'bg-[#0A2D5B] text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-3 text-slate-400" />
            <input
              type="text"
              placeholder="Search company, country or alloy..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F7BFF]"
            />
          </div>
        </div>

        {/* Main Table */}
        <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#0A2D5B] text-white">
                  <th className="py-3 px-4">Company & Country</th>
                  <th className="py-3 px-3">Segment</th>
                  <th className="py-3 px-3">Est. Annual Volume</th>
                  <th className="py-3 px-3">Primary Alloy</th>
                  <th className="py-3 px-3">China Tariff Risk</th>
                  <th className="py-3 px-3">Qualification Score</th>
                  <th className="py-3 px-3">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0] text-slate-700">
                {filtered.map((buyer) => (
                  <tr key={buyer.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-[#0A2D5B] text-sm">{buyer.name}</div>
                      <div className="text-[11px] text-slate-500 flex items-center gap-1.5 mt-0.5">
                        <span className="font-mono font-semibold">{buyer.countryCode}</span>
                        <span>•</span>
                        <span>{buyer.country}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-3 font-medium">{buyer.buyerTypeLabel}</td>
                    <td className="py-3.5 px-3 font-semibold text-[#0A2D5B]">
                      {buyer.annualTons.toLocaleString()} Tons/yr
                    </td>
                    <td className="py-3.5 px-3 font-mono">{buyer.primaryAlloy}</td>
                    <td className="py-3.5 px-3">
                      <span
                        className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                          buyer.chinaExposure === 'HIGH'
                            ? 'bg-rose-100 text-rose-800'
                            : buyer.chinaExposure === 'MEDIUM'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {buyer.chinaExposure}
                      </span>
                    </td>
                    <td className="py-3.5 px-3">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-[#0A2D5B]">
                          {buyer.qualificationScore}/100
                        </span>
                        <div className="w-16 bg-slate-200 rounded-full h-1.5 overflow-hidden">
                          <div
                            className="bg-[#2F7BFF] h-1.5 rounded-full"
                            style={{ width: `${buyer.qualificationScore}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 px-3">
                      <Badge
                        variant={
                          buyer.status === 'ACTIVE_CUSTOMER'
                            ? 'verified'
                            : buyer.status === 'NEGOTIATING'
                            ? 'review'
                            : 'default'
                        }
                        size="sm"
                      >
                        {buyer.status}
                      </Badge>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setActiveModalAccount(buyer)}
                      >
                        Audit Score
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 100-Point Score Breakdown Modal */}
        {activeModalAccount && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-6 shadow-2xl border border-slate-200">
              <div className="flex items-start justify-between border-b border-slate-100 pb-4">
                <div>
                  <div className="text-xs uppercase font-mono text-[#2F7BFF]">
                    {activeModalAccount.id} • {activeModalAccount.country}
                  </div>
                  <h3 className="text-xl font-bold font-heading text-[#0A2D5B]">
                    {activeModalAccount.name}
                  </h3>
                  <div className="text-xs text-slate-500">
                    {activeModalAccount.buyerTypeLabel} • Contact: {activeModalAccount.keyContact.name} (
                    {activeModalAccount.keyContact.email})
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-extrabold text-[#2F7BFF]">
                    {activeModalAccount.qualificationScore}
                  </div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase">Total Score</div>
                </div>
              </div>

              {/* 4-Component Score Breakdown */}
              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  100-Point Qualification Breakdown
                </div>

                <div className="p-3 bg-slate-50 rounded-lg space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-700">1. Target Market & FTA Fit</span>
                    <span className="text-[#0A2D5B]">
                      {activeModalAccount.scoreBreakdown.marketFit} / 25 pts
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Export destination aligns with CPTPP / EVFTA / VKFTA duty exemption rules.
                  </p>
                </div>

                <div className="p-3 bg-slate-50 rounded-lg space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-700">2. Volume & Press Envelope Match</span>
                    <span className="text-[#0A2D5B]">
                      {activeModalAccount.scoreBreakdown.volumeCapacity} / 25 pts
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    {activeModalAccount.annualTons} metric tons fits factory monthly extrusion allocation.
                  </p>
                </div>

                <div className="p-3 bg-slate-50 rounded-lg space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-700">3. Process & Surface Finish Match</span>
                    <span className="text-[#0A2D5B]">
                      {activeModalAccount.scoreBreakdown.processMatch} / 25 pts
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Alloy {activeModalAccount.primaryAlloy} and anodizing/powder coating conform to verified capability.
                  </p>
                </div>

                <div className="p-3 bg-slate-50 rounded-lg space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-700">4. Commercial & Payment Reliability</span>
                    <span className="text-[#0A2D5B]">
                      {activeModalAccount.scoreBreakdown.commercialRisk} / 25 pts
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    International credit standing and confirmed Letter of Credit (L/C) compliance.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <Button variant="outline" size="sm" onClick={() => setActiveModalAccount(null)}>
                  Close
                </Button>
                <Link href={`/admin/rfqs`}>
                  <Button variant="cta" size="sm">
                    Draft RFQ for Account
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
