import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button, Card, Badge } from '@leloi/ui';
import { ShieldCheck, Globe2, Factory, Leaf, ArrowRight, CheckCircle2 } from 'lucide-react';
import {
  COMPANY,
  CERTIFICATIONS,
  FACTORY_ADDRESS,
  AFFILIATED_NETWORK,
  TOTAL_MACHINE_COUNT
} from '@/data/company';

export const metadata: Metadata = {
  title: 'About LELOI METAL | Aluminium Business Field of LELOI EXIM GLOBAL',
  description:
    'LELOI METAL is the aluminium manufacturing and export business field of LELOI EXIM GLOBAL CO., LTD. ISO 9001:2015 certified facility in Hung Yen, Vietnam, plus four affiliated partner factories exceeding 100,000 tonnes annual capacity.'
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <Badge variant="alloy">LELOI EXIM GLOBAL DIVISION</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-navy tracking-tight">
            Aluminium for a Better World
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light">
            Connecting Vietnam&apos;s precision extrusion capabilities, flexible manufacturing and direct export logistics with global industrial partners.
          </p>
        </div>

        {/* Corporate Identity & Parent Relationship */}
        <div className="bg-light-gray rounded-2xl p-8 sm:p-10 border border-slate-200 space-y-6">
          <div className="text-xs uppercase font-heading font-semibold text-blue tracking-widest">
            CORPORATE GOVERNANCE
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy">
            A Specialized Division of LELOI EXIM GLOBAL
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <strong>LELOI METAL</strong> is the aluminium manufacturing and export business field of <strong>LELOI EXIM GLOBAL CO., LTD</strong>. While the parent company coordinates broad international trade, compliance and sourcing operations from Vietnam, LELOI METAL focuses exclusively on precision metallurgical engineering, custom profile die development, secondary CNC machining, and high-volume industrial export contracts.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            Our group manufacturing plant in Hung Yen Province operates {TOTAL_MACHINE_COUNT} production machines
            across extrusion, surface finishing and CNC fabrication under an{' '}
            {CERTIFICATIONS[0].standard} certified quality management system. Alongside it, a
            network of {AFFILIATED_NETWORK.factoryCount} affiliated partner factories adds a
            combined annual capacity of over{' '}
            {AFFILIATED_NETWORK.combinedAnnualCapacityTonnes.toLocaleString('en-US')} tonnes for
            container-scale programmes.
          </p>
          <div className="p-4 rounded-xl bg-light-gray border border-slate-200 text-xs text-slate-600 leading-relaxed">
            <span className="font-bold text-navy block mb-1">Corporate structure</span>
            {COMPANY.facilityRelationship} We state this openly because supplier
            due-diligence checks compare the entity on your invoice against the entity on the
            factory licence.
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200">
            <div>
              <div className="text-xs text-slate-500">Manufacturing Facility</div>
              <div className="font-semibold text-sm text-navy mt-0.5">
                {FACTORY_ADDRESS.ward}, {FACTORY_ADDRESS.region}
              </div>
            </div>
            <div>
              <div className="text-xs text-slate-500">Quality Certification</div>
              <div className="font-semibold text-sm text-navy mt-0.5">
                {CERTIFICATIONS[0].standard}
              </div>
            </div>
            <div>
              <div className="text-xs text-slate-500">Parent Hub</div>
              <div className="font-semibold text-sm text-navy mt-0.5">leloiglobal.com</div>
            </div>
          </div>
        </div>

        {/* Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card variant="default" className="space-y-3">
            <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center text-navy">
              <ShieldCheck className="w-6 h-6 text-blue" />
            </div>
            <h3 className="text-xl font-bold font-heading text-navy">
              Precision Engineering Focus
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We do not position ourselves as a generic, low-cost commodity seller. Every inquiry undergoes disciplined Design for Manufacturing (DFM) analysis to optimize profile weight, die longevity, alloy mechanical tempers, and assembly precision.
            </p>
          </Card>

          <Card variant="default" className="space-y-3">
            <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center text-navy">
              <Leaf className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold font-heading text-navy">
              Sustainability & Carbon Readiness
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              True to our slogan <em>&ldquo;Aluminium for a Better World&rdquo;</em>, we prioritize recycled scrap utilization, responsible metallurgical sourcing, and structured carbon data tracking to assist European and international clients with CBAM compliance.
            </p>
          </Card>
        </div>

        {/* Action Banner */}
        <div className="bg-navy text-white rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold font-heading text-white">
              Explore Supply Partnership
            </h3>
            <p className="text-sm text-slate-300 mt-1">
              Contact our sales engineering team or submit drawings for review.
            </p>
          </div>
          <Link href="/rfq" className="shrink-0">
            <Button variant="cta" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Request a Quote
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
