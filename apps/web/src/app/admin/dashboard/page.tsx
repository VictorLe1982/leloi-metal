'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Card, Badge, Button } from '@leloi/ui';
import { AdminNav } from '@/components/AdminNav';
import {
  FileText,
  Users,
  CheckCircle2,
  Clock,
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  Download,
  LogOut,
  Kanban,
  Globe2
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function AdminDashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const raw = localStorage.getItem('leloi_user');
    if (!raw) {
      router.push('/admin/login');
      return;
    }
    setUser(JSON.parse(raw));
  }, [router]);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-[#F1F4F8]">
      <AdminNav />
      <div className="p-6 lg:p-10 space-y-8 max-w-7xl mx-auto">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#E2E8F0]">
          <div>
            <div className="text-xs uppercase font-heading font-semibold text-[#2F7BFF] tracking-wider">
              LELOI METAL BACK-OFFICE OPERATIONS
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold font-heading text-[#0A2D5B]">
              Executive Sales & CRM Dashboard
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/admin/crm/pipeline">
              <Button variant="cta" size="sm" leftIcon={<Kanban className="w-3.5 h-3.5" />}>
                Buyer Pipeline
              </Button>
            </Link>
            <Link href="/admin/rfqs">
              <Button variant="outline" size="sm" leftIcon={<FileText className="w-3.5 h-3.5" />}>
                All RFQs
              </Button>
            </Link>
          </div>
        </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card variant="default" className="p-5">
          <div className="flex items-center justify-between">
            <div className="text-xs font-semibold text-slate-500 uppercase">Total RFQs Received</div>
            <FileText className="w-5 h-5 text-[#2F7BFF]" />
          </div>
          <div className="text-3xl font-extrabold font-heading text-[#0A2D5B] mt-2">18</div>
          <div className="text-xs text-emerald-600 flex items-center gap-1 mt-1 font-medium">
            <TrendingUp className="w-3.5 h-3.5" /> +4 this week
          </div>
        </Card>

        <Card variant="default" className="p-5">
          <div className="flex items-center justify-between">
            <div className="text-xs font-semibold text-slate-500 uppercase">Pending Engineering DFM</div>
            <Clock className="w-5 h-5 text-amber-500" />
          </div>
          <div className="text-3xl font-extrabold font-heading text-amber-600 mt-2">5</div>
          <div className="text-xs text-slate-500 mt-1">SLA target: &lt;24 hours</div>
        </Card>

        <Card variant="default" className="p-5">
          <div className="flex items-center justify-between">
            <div className="text-xs font-semibold text-slate-500 uppercase">Qualified Leads</div>
            <Users className="w-5 h-5 text-emerald-600" />
          </div>
          <div className="text-3xl font-extrabold font-heading text-[#0A2D5B] mt-2">42</div>
          <div className="text-xs text-slate-500 mt-1">From Weight Tool & Web</div>
        </Card>

        <Card variant="default" className="p-5">
          <div className="flex items-center justify-between">
            <div className="text-xs font-semibold text-slate-500 uppercase">Data Gaps / Alerts</div>
            <AlertTriangle className="w-5 h-5 text-rose-500" />
          </div>
          <div className="text-3xl font-extrabold font-heading text-rose-600 mt-2">3</div>
          <div className="text-xs text-rose-600 font-medium mt-1">Factory capacity unverified</div>
        </Card>
      </div>

      {/* Quick Access Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Recent RFQs */}
        <div className="lg:col-span-8 bg-white rounded-xl border border-[#E2E8F0] shadow-xs overflow-hidden">
          <div className="p-5 border-b border-[#E2E8F0] flex items-center justify-between">
            <h2 className="font-heading font-bold text-lg text-[#0A2D5B]">Recent Incoming RFQs</h2>
            <Link href="/admin/rfqs" className="text-xs font-semibold text-[#2F7BFF] hover:underline flex items-center gap-1">
              View All RFQs <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="divide-y divide-[#E2E8F0] text-sm">
            {[
              {
                id: 'RFQ-2026-0004',
                company: 'Apex Solar Dynamics',
                country: 'CA',
                product: 'Solar Aluminium Profiles',
                qty: '45,000 kg',
                status: 'SUBMITTED',
                time: '2 hours ago'
              },
              {
                id: 'RFQ-2026-0003',
                company: 'Nordic Automation GmbH',
                country: 'DE',
                product: 'Industrial Aluminium Profiles',
                qty: '12,000 kg',
                status: 'ENGINEERING_REVIEW',
                time: 'Yesterday'
              },
              {
                id: 'RFQ-2026-0002',
                company: 'Kyoto Thermal Engineering',
                country: 'JP',
                product: 'Heat Sink Profiles',
                qty: '8,500 kg',
                status: 'QUALIFYING',
                time: '2 days ago'
              }
            ].map((rfq) => (
              <div key={rfq.id} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50 transition-colors">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-[#0A2D5B]">{rfq.id}</span>
                    <span className="text-xs font-medium text-slate-500">[{rfq.country}]</span>
                    <span className="text-xs text-slate-400">• {rfq.time}</span>
                  </div>
                  <div className="font-semibold text-slate-800 text-sm mt-0.5">{rfq.company}</div>
                  <div className="text-xs text-slate-500">{rfq.product} — {rfq.qty}</div>
                </div>

                <div className="flex items-center gap-3">
                  <Badge variant={rfq.status === 'SUBMITTED' ? 'review' : 'default'}>
                    {rfq.status}
                  </Badge>
                  <Link href={`/admin/rfqs`}>
                    <Button variant="outline" size="sm">
                      Details
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Panel */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-xs space-y-4">
            <h2 className="font-heading font-bold text-base text-[#0A2D5B]">Factory Audit & Data Safeguard</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              As per the Master Blueprint, unverified factory claims are strictly hidden from public visitors.
            </p>

            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-2 rounded bg-amber-50 text-amber-800 border border-amber-200">
                <span>Extrusion Press Tonnage</span>
                <span className="font-bold">UNVERIFIED</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-amber-50 text-amber-800 border border-amber-200">
                <span>Annual Output Tonnage</span>
                <span className="font-bold">UNVERIFIED</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                <span>Alloy Chemical Specs</span>
                <span className="font-bold">VERIFIED</span>
              </div>
            </div>

            <Link href="/docs/GAPS.md" className="block text-center text-xs text-[#2F7BFF] font-semibold hover:underline pt-2">
              View Audit Gaps Checklist (GAPS.md) →
            </Link>
          </div>

          {/* CRM & Strategy Quick Links */}
          <div className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-xs space-y-3">
            <h2 className="font-heading font-bold text-base text-[#0A2D5B]">Export CRM & Markets</h2>
            <div className="space-y-2 text-xs">
              <Link
                href="/admin/crm/pipeline"
                className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 hover:bg-blue-50 hover:text-[#2F7BFF] transition-colors border border-slate-200"
              >
                <div className="flex items-center gap-2 font-semibold">
                  <Kanban className="w-4 h-4 text-[#2F7BFF]" />
                  <span>Buyer Pipeline Kanban</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                href="/admin/crm/buyers"
                className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 hover:bg-blue-50 hover:text-[#2F7BFF] transition-colors border border-slate-200"
              >
                <div className="flex items-center gap-2 font-semibold">
                  <Users className="w-4 h-4 text-emerald-600" />
                  <span>Buyer Accounts & 100-pt Score</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                href="/admin/markets"
                className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 hover:bg-blue-50 hover:text-[#2F7BFF] transition-colors border border-slate-200"
              >
                <div className="flex items-center gap-2 font-semibold">
                  <Globe2 className="w-4 h-4 text-indigo-600" />
                  <span>Market Opportunity Ranking</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
