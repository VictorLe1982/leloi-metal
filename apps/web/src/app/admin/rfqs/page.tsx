'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Card, Badge, Button, Modal } from '@leloi/ui';
import { AdminNav } from '@/components/AdminNav';
import {
  FileText,
  Download,
  CheckCircle2,
  Clock,
  ArrowLeft,
  ShieldCheck,
  Eye,
  ExternalLink
} from 'lucide-react';

export default function AdminRfqsPage() {
  const [selectedRfq, setSelectedRfq] = useState<any | null>(null);
  const [downloadAuditNotif, setDownloadAuditNotif] = useState<string | null>(null);

  const mockRfqs = [
    {
      id: 'rfq-1',
      rfqNumber: 'RFQ-2026-0004',
      company: 'Apex Solar Dynamics',
      country: 'Canada (CA)',
      email: 'm.turner@apexsolar.ca',
      productCategory: 'Solar Aluminium Profiles',
      alloy: '6005A-T6',
      orderQuantity: '45,000 kg',
      incoterm: 'FOB Hai Phong Port',
      submittedAt: '2026-09-09 14:20',
      status: 'SUBMITTED',
      files: [
        {
          id: 'file-101',
          name: 'Apex_Module_Frame_Rev3.step',
          size: '14.2 MB',
          type: '3D STEP CAD Model',
          scanStatus: 'CLEAN'
        },
        {
          id: 'file-102',
          name: 'Solar_Mounting_Specs_2026.pdf',
          size: '2.8 MB',
          type: '2D Engineering Drawing',
          scanStatus: 'CLEAN'
        }
      ]
    },
    {
      id: 'rfq-2',
      rfqNumber: 'RFQ-2026-0003',
      company: 'Nordic Automation GmbH',
      country: 'Germany (DE)',
      email: 'engineering@nordic-automation.de',
      productCategory: 'Industrial Aluminium Profiles',
      alloy: '6063-T5',
      orderQuantity: '12,000 kg',
      incoterm: 'CIF Hamburg Port',
      submittedAt: '2026-09-08 09:15',
      status: 'ENGINEERING_REVIEW',
      files: [
        {
          id: 'file-103',
          name: 'T_Slot_Custom_40x80.dwg',
          size: '6.4 MB',
          type: 'AutoCAD DWG',
          scanStatus: 'CLEAN'
        }
      ]
    },
    {
      id: 'rfq-3',
      rfqNumber: 'RFQ-2026-0002',
      company: 'Kyoto Thermal Engineering',
      country: 'Japan (JP)',
      email: 'tanaka@kyoto-thermal.co.jp',
      productCategory: 'Heat Sink Profiles',
      alloy: '6063 High Thermal',
      orderQuantity: '8,500 kg',
      incoterm: 'FOB Da Nang Port',
      submittedAt: '2026-09-07 16:40',
      status: 'QUALIFYING',
      files: [
        {
          id: 'file-104',
          name: 'Power_Inverter_Heatsink_Fin.step',
          size: '22.1 MB',
          type: '3D STEP CAD Model',
          scanStatus: 'CLEAN'
        }
      ]
    }
  ];

  const handleDownloadFile = (file: any) => {
    setDownloadAuditNotif(
      `Secure signed URL generated for '${file.name}' (5 min TTL). Audit logged under ID: AUDIT-${Date.now().toString().slice(-6)}`
    );
    setTimeout(() => setDownloadAuditNotif(null), 5000);
  };

  return (
    <div className="min-h-screen bg-[#F1F4F8]">
      <AdminNav />
      <div className="p-6 lg:p-10 space-y-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[#E2E8F0]">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#2F7BFF]">
              RFQ & FILE DISCOVERY DESK
            </div>
            <h1 className="text-2xl font-bold font-heading text-[#0A2D5B]">
              Manage Qualified RFQs & CAD Drawings
            </h1>
          </div>
        </div>

      {downloadAuditNotif && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800 text-xs flex items-center gap-2 animate-in fade-in">
          <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-600" />
          <span>{downloadAuditNotif}</span>
        </div>
      )}

      {/* RFQ Table */}
      <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-[#F1F4F8] text-[11px] font-heading font-semibold text-[#0A2D5B] uppercase tracking-wider border-b border-[#E2E8F0]">
                <th className="p-4">RFQ Ref #</th>
                <th className="p-4">Company & Country</th>
                <th className="p-4">Product & Alloy</th>
                <th className="p-4">Order Batch</th>
                <th className="p-4">Drawings</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0]">
              {mockRfqs.map((rfq) => (
                <tr key={rfq.id} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-mono font-bold text-[#0A2D5B]">
                    {rfq.rfqNumber}
                    <div className="text-[11px] font-sans font-normal text-slate-400 mt-0.5">
                      {rfq.submittedAt}
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="font-semibold text-slate-900">{rfq.company}</div>
                    <div className="text-xs text-slate-500">{rfq.country}</div>
                  </td>
                  <td className="p-4">
                    <div className="font-medium text-slate-800">{rfq.productCategory}</div>
                    <span className="text-xs font-mono text-[#0A2D5B] bg-slate-100 px-1.5 py-0.5 rounded">
                      {rfq.alloy}
                    </span>
                  </td>
                  <td className="p-4 font-semibold text-[#0A2D5B]">
                    {rfq.orderQuantity}
                    <div className="text-xs font-normal text-slate-500">{rfq.incoterm}</div>
                  </td>
                  <td className="p-4">
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-blue-700 bg-blue-50 px-2 py-1 rounded border border-blue-200">
                      <FileText className="w-3.5 h-3.5" />
                      {rfq.files.length} file(s)
                    </span>
                  </td>
                  <td className="p-4">
                    <Badge variant={rfq.status === 'SUBMITTED' ? 'review' : 'default'}>
                      {rfq.status}
                    </Badge>
                  </td>
                  <td className="p-4 text-right">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedRfq(rfq)}
                      leftIcon={<Eye className="w-3.5 h-3.5" />}
                    >
                      Review
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* RFQ Review Modal */}
      {selectedRfq && (
        <Modal
          isOpen={true}
          onClose={() => setSelectedRfq(null)}
          title={`Review RFQ: ${selectedRfq.rfqNumber} (${selectedRfq.company})`}
          maxWidth="2xl"
        >
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4 text-xs bg-[#F1F4F8] p-4 rounded-xl border border-[#E2E8F0]">
              <div>
                <span className="text-slate-500 block">Contact Email:</span>
                <span className="font-semibold text-slate-800">{selectedRfq.email}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Destination & Incoterm:</span>
                <span className="font-semibold text-slate-800">{selectedRfq.incoterm} ({selectedRfq.country})</span>
              </div>
              <div>
                <span className="text-slate-500 block">Product Specification:</span>
                <span className="font-semibold text-slate-800">{selectedRfq.productCategory} — {selectedRfq.alloy}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Order Volume:</span>
                <span className="font-semibold text-[#0A2D5B]">{selectedRfq.orderQuantity}</span>
              </div>
            </div>

            {/* Files & Signed Downloads */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase font-heading font-semibold text-[#0A2D5B] tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Confidential Engineering Drawing Files (Private S3)
              </h4>

              <div className="space-y-2">
                {selectedRfq.files.map((file: any) => (
                  <div
                    key={file.id}
                    className="p-3 bg-white rounded-lg border border-[#E2E8F0] flex items-center justify-between hover:border-[#2F7BFF] transition-colors"
                  >
                    <div>
                      <div className="font-mono text-xs font-semibold text-[#0A2D5B]">{file.name}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        {file.type} • {file.size} • Virus Scan: <span className="text-emerald-600 font-semibold">{file.scanStatus}</span>
                      </div>
                    </div>
                    <Button
                      variant="cta"
                      size="sm"
                      onClick={() => handleDownloadFile(file)}
                      leftIcon={<Download className="w-3.5 h-3.5" />}
                    >
                      Download (Signed)
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#E2E8F0] flex justify-end gap-3">
              <Button variant="secondary" size="md" onClick={() => setSelectedRfq(null)}>
                Close
              </Button>
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  alert(`Status for ${selectedRfq.rfqNumber} updated to ENGINEERING_REVIEW`);
                  setSelectedRfq(null);
                }}
              >
                Mark as Engineering Review In-Progress
              </Button>
            </div>
          </div>
        </Modal>
      )}
      </div>
    </div>
  );
}
