'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { BrandLogo } from '@leloi/ui';
import {
  Menu,
  X,
  ChevronDown,
  Calculator,
  Scale,
  Building2,
  Cpu,
  Sun,
  Layers,
  Flame,
  ShieldCheck,
  ArrowRight,
  FileText,
  Settings2
} from 'lucide-react';
import { PRODUCT_TAXONOMY } from '@leloi/types';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-md border-b border-[#E2E8F0] shadow-xs">
      {/* Corporate division ribbon / Utility bar */}
      <div className="bg-[#061D3B] text-slate-300 text-[11px] py-1.5 px-4 sm:px-8 flex justify-between items-center border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="text-white font-medium">LELOI METAL</span>
          <span className="text-slate-500">|</span>
          <span className="text-slate-400">A Division of LELOI EXIM GLOBAL</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/tools/aluminium-weight-calculator"
            className="hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <Calculator className="w-3 h-3 text-[#2F7BFF]" />
            Weight Calculator
          </Link>
          <span className="text-slate-600">•</span>
          <Link
            href="/tools/import-duty-checker"
            className="hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <Scale className="w-3 h-3 text-[#2F7BFF]" />
            Duty Checker (HS 7604)
          </Link>
          <span className="text-slate-600">•</span>
          <Link
            href="/capabilities/powder-coating"
            className="hover:text-[#2F7BFF] flex items-center gap-1.5 text-slate-300 transition-colors"
          >
            <ShieldCheck className="w-3 h-3 text-emerald-400" />
            <span>AkzoNobel 10-Yr Warranty</span>
          </Link>
          <span className="text-slate-600">•</span>
          <Link href="/contact" className="hover:text-white transition-colors">
            sales@leloimetal.com
          </Link>
        </div>
      </div>

      {/* Main desktop navigation bar - Target height 76-84px */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Unified Brand Logo - Single Source of Truth */}
        <Link href="/" className="flex items-center group shrink-0 mr-4">
          <BrandLogo variant="primary" width={195} />
        </Link>

        {/* Desktop Primary Navigation Links (Clean 6-item nav with 32px spacing) */}
        <nav className="hidden lg:flex items-center gap-8 font-heading text-[14px] font-semibold tracking-wide text-[#172033]">
          {/* 1. Products with Mega Menu */}
          <div
            className="relative py-6"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/products"
              className={`flex items-center gap-1.5 transition-colors hover:text-[#2F7BFF] ${
                megaMenuOpen ? 'text-[#2F7BFF]' : 'text-[#172033]'
              }`}
            >
              <span>Products</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  megaMenuOpen ? 'rotate-180 text-[#2F7BFF]' : 'text-slate-400'
                }`}
              />
            </Link>

            {/* Mega Menu Dropdown */}
            {megaMenuOpen && (
              <div className="absolute top-full -left-32 w-[1040px] bg-white border border-[#E2E8F0] shadow-2xl rounded-2xl p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="grid grid-cols-6 gap-4 pb-6 border-b border-slate-100">
                  {PRODUCT_TAXONOMY.map((cat) => (
                    <div
                      key={cat.slug}
                      className={
                        cat.code === 'BUILDING'
                          ? 'bg-[#F8FAFC] -my-2 p-2.5 rounded-xl border border-blue-100'
                          : ''
                      }
                    >
                      <Link
                        href={`/products/${cat.slug}`}
                        onClick={() => setMegaMenuOpen(false)}
                        className="group flex items-center gap-1.5 mb-2 font-bold text-xs text-[#0A2D5B] hover:text-[#2F7BFF] transition-colors"
                      >
                        {cat.code === 'CUSTOM' && <Layers className="w-3.5 h-3.5 text-[#2F7BFF] shrink-0" />}
                        {cat.code === 'INDUSTRIAL' && <Cpu className="w-3.5 h-3.5 text-[#2F7BFF] shrink-0" />}
                        {cat.code === 'ENERGY' && <Sun className="w-3.5 h-3.5 text-amber-500 shrink-0" />}
                        {cat.code === 'BUILDING' && <Building2 className="w-3.5 h-3.5 text-[#2F7BFF] shrink-0" />}
                        {cat.code === 'THERMAL' && <Flame className="w-3.5 h-3.5 text-orange-500 shrink-0" />}
                        {cat.code === 'OEM' && <Settings2 className="w-3.5 h-3.5 text-[#2F7BFF] shrink-0" />}
                        <span className="truncate">{cat.navLabel}</span>
                      </Link>

                      {cat.code === 'BUILDING' && (
                        <div className="text-[10px] text-blue-700 font-semibold uppercase tracking-wider mb-1.5">
                          Res & Commercial
                        </div>
                      )}

                      <ul className="space-y-1.5 text-[11px] text-slate-600">
                        {cat.subcategories.slice(0, 4).map((sub) => (
                          <li key={sub.slug}>
                            <Link
                              href={sub.fullSlug}
                              onClick={() => setMegaMenuOpen(false)}
                              className="hover:text-[#2F7BFF] block transition-colors truncate"
                              title={sub.name}
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                        <li>
                          <Link
                            href={`/products/${cat.slug}`}
                            onClick={() => setMegaMenuOpen(false)}
                            className="text-[#2F7BFF] hover:underline font-semibold text-[10px] block pt-1"
                          >
                            All ({cat.subcategories.length}) →
                          </Link>
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Bottom Mega Menu Bar */}
                <div className="pt-4 flex items-center justify-between text-xs font-medium">
                  <Link
                    href="/products"
                    onClick={() => setMegaMenuOpen(false)}
                    className="text-[#0A2D5B] hover:text-[#2F7BFF] flex items-center gap-1.5 font-bold transition-colors"
                  >
                    <span>Browse Full Catalog (24+ Solutions)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/capabilities/powder-coating"
                    onClick={() => setMegaMenuOpen(false)}
                    className="text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md flex items-center gap-1 hover:bg-emerald-100 transition-colors"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>AkzoNobel Powder Coating (10-Year Warranty)</span>
                  </Link>
                  <Link
                    href="/rfq"
                    onClick={() => setMegaMenuOpen(false)}
                    className="text-[#2F7BFF] hover:underline flex items-center gap-1 font-bold"
                  >
                    <span>Custom RFQ / Upload Drawing</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* 2. Capabilities */}
          <Link href="/capabilities" className="hover:text-[#2F7BFF] transition-colors py-2">
            Capabilities
          </Link>

          {/* 3. Industries */}
          <Link href="/industries" className="hover:text-[#2F7BFF] transition-colors py-2">
            Industries
          </Link>

          {/* 4. Markets */}
          <Link href="/markets" className="hover:text-[#2F7BFF] transition-colors py-2">
            Markets
          </Link>

          {/* 5. Insights */}
          <Link href="/insights" className="hover:text-[#2F7BFF] transition-colors py-2">
            Insights
          </Link>

          {/* 6. About */}
          <Link href="/about" className="hover:text-[#2F7BFF] transition-colors py-2">
            About
          </Link>
        </nav>

        {/* Right Desktop Element: Sleek Contact link */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className="text-sm font-semibold text-[#0A2D5B] hover:text-[#2F7BFF] transition-colors py-2 px-3 rounded-lg hover:bg-slate-50"
          >
            Contact
          </Link>
        </div>

        {/* Mobile menu hamburger button */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#0A2D5B] hover:bg-[#F1F4F8] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Includes navigation + RFQ touchpoints) */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E2E8F0] bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top-2 duration-150 max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="flex flex-col space-y-1 font-heading font-medium text-sm text-[#172033]">
            <Link
              href="/products"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#F1F4F8] font-bold text-[#0A2D5B]"
            >
              All Products Catalog
            </Link>
            <div className="pl-4 space-y-1.5 text-xs text-slate-600 pb-1">
              {PRODUCT_TAXONOMY.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/products/${cat.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-1 ${
                    cat.code === 'BUILDING'
                      ? 'text-blue-700 font-semibold'
                      : 'hover:text-[#2F7BFF]'
                  }`}
                >
                  {cat.navLabel}
                </Link>
              ))}
            </div>

            <Link
              href="/capabilities"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#F1F4F8]"
            >
              Capabilities & Factory
            </Link>
            <Link
              href="/capabilities/powder-coating"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-emerald-50 text-emerald-800 font-semibold flex items-center gap-1.5"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>AkzoNobel 10-Yr Warranty Coating</span>
            </Link>
            <Link
              href="/industries"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#F1F4F8]"
            >
              Industries Served
            </Link>
            <Link
              href="/markets"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#F1F4F8]"
            >
              Export Markets
            </Link>
            <Link
              href="/insights"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#F1F4F8]"
            >
              Technical Insights
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#F1F4F8]"
            >
              About LELOI METAL
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#F1F4F8]"
            >
              Contact Team
            </Link>
          </div>

          {/* Preserved Mobile Actions */}
          <div className="pt-3 border-t border-[#E2E8F0] flex flex-col gap-2">
            <Link
              href="/rfq"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-[#2F7BFF] hover:bg-[#1B6BF8] text-white font-bold py-2.5 px-4 rounded-xl text-center text-sm shadow-md transition-colors"
            >
              Request a Quote
            </Link>
            <Link
              href="/rfq?mode=upload"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-white border border-[#2F7BFF] text-[#2F7BFF] hover:bg-blue-50 font-bold py-2.5 px-4 rounded-xl text-center text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>Upload Drawing</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
