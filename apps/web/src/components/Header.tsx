'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Logo, Button } from '@leloi/ui';
import {
  Menu,
  X,
  ChevronDown,
  Calculator,
  FileUp,
  Scale,
  Sparkles,
  BookOpen,
  Globe2
} from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-xs">
      {/* Corporate division ribbon */}
      <div className="bg-[#061D3B] text-slate-300 text-[11px] py-1.5 px-4 sm:px-8 flex justify-between items-center border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="text-white font-medium">LELOI METAL</span>
          <span className="text-slate-400">|</span>
          <span className="text-slate-400">A Division of LELOI EXIM GLOBAL</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/tools/aluminium-weight-calculator"
            className="hover:text-white flex items-center gap-1 transition-colors"
          >
            <Calculator className="w-3 h-3 text-[#2F7BFF]" />
            Weight Calculator
          </Link>
          <span className="text-slate-600">•</span>
          <Link
            href="/tools/import-duty-checker"
            className="hover:text-white flex items-center gap-1 transition-colors"
          >
            <Scale className="w-3 h-3 text-[#2F7BFF]" />
            Duty Checker (HS 7604)
          </Link>
          <span className="text-slate-600">•</span>
          <span className="text-slate-300">Vietnam Sourcing Office</span>
          <span className="text-slate-600">•</span>
          <Link href="/contact" className="hover:text-white transition-colors">
            sales@leloimetal.com
          </Link>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo with Two-L Mark */}
        <Link href="/" className="flex items-center mr-8 group shrink-0">
          <Logo variant="horizontal" width={195} responsiveSlogan={true} />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 font-heading text-sm font-medium text-[#172033]">
          <Link href="/products" className="hover:text-[#2F7BFF] transition-colors py-2">
            Products
          </Link>
          <Link href="/capabilities" className="hover:text-[#2F7BFF] transition-colors py-2">
            Capabilities
          </Link>
          <Link href="/industries" className="hover:text-[#2F7BFF] transition-colors py-2">
            Industries
          </Link>
          <Link href="/markets" className="hover:text-[#2F7BFF] transition-colors py-2">
            Export Markets
          </Link>

          {/* Tools Menu with Dropdown */}
          <div
            className="relative py-2"
            onMouseEnter={() => setToolsDropdownOpen(true)}
            onMouseLeave={() => setToolsDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-[#2F7BFF] transition-colors focus:outline-none">
              <span>Engineering Tools</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {toolsDropdownOpen && (
              <div className="absolute top-full left-0 w-64 bg-white border border-[#E2E8F0] shadow-xl rounded-xl p-2 z-50 animate-in fade-in slide-in-from-top-1 duration-100">
                <Link
                  href="/tools/aluminium-weight-calculator"
                  className="flex items-start gap-2.5 p-2.5 rounded-lg hover:bg-[#F1F4F8] transition-colors"
                >
                  <Calculator className="w-4 h-4 text-[#2F7BFF] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-[#0A2D5B]">Aluminium Weight Calculator</div>
                    <div className="text-[11px] text-slate-500">Calculate kg/m & order weight</div>
                  </div>
                </Link>

                <Link
                  href="/tools/import-duty-checker"
                  className="flex items-start gap-2.5 p-2.5 rounded-lg hover:bg-[#F1F4F8] transition-colors"
                >
                  <Scale className="w-4 h-4 text-[#2F7BFF] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-[#0A2D5B]">Import Duty Checker</div>
                    <div className="text-[11px] text-slate-500">HS 7604 tariffs & FTA rates</div>
                  </div>
                </Link>

                <Link
                  href="/tools/alloy-selector"
                  className="flex items-start gap-2.5 p-2.5 rounded-lg hover:bg-[#F1F4F8] transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-[#2F7BFF] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-[#0A2D5B]">Alloy & Temper Selector</div>
                    <div className="text-[11px] text-slate-500">6063, 6061, 6005A, 6082</div>
                  </div>
                </Link>
              </div>
            )}
          </div>

          <Link href="/insights" className="hover:text-[#2F7BFF] transition-colors py-2">
            Insights
          </Link>
          <Link href="/about" className="hover:text-[#2F7BFF] transition-colors py-2">
            About
          </Link>
          <Link href="/contact" className="hover:text-[#2F7BFF] transition-colors py-2">
            Contact
          </Link>
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <Link href="/rfq?mode=upload">
            <Button variant="outline" size="sm" leftIcon={<FileUp className="w-4 h-4 text-[#2F7BFF]" />}>
              Upload Drawing
            </Button>
          </Link>
          <Link href="/rfq">
            <Button variant="cta" size="sm">
              Request a Quote
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-[#0A2D5B] hover:bg-[#F1F4F8] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E2E8F0] bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-1.5 font-heading font-medium text-sm text-[#172033]">
            <Link
              href="/products"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-[#F1F4F8]"
            >
              Products
            </Link>
            <Link
              href="/capabilities"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-[#F1F4F8]"
            >
              Capabilities
            </Link>
            <Link
              href="/industries"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-[#F1F4F8]"
            >
              Industries
            </Link>
            <Link
              href="/markets"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-[#F1F4F8]"
            >
              Export Markets
            </Link>
            <Link
              href="/tools/aluminium-weight-calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-[#F1F4F8] text-[#2F7BFF]"
            >
              Weight Calculator
            </Link>
            <Link
              href="/tools/import-duty-checker"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-[#F1F4F8] text-[#2F7BFF]"
            >
              Import Duty Checker (HS 7604)
            </Link>
            <Link
              href="/tools/alloy-selector"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-[#F1F4F8] text-[#2F7BFF]"
            >
              Alloy & Temper Selector
            </Link>
            <Link
              href="/insights"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-[#F1F4F8]"
            >
              Technical Insights
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-[#F1F4F8]"
            >
              About LELOI METAL
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-[#F1F4F8]"
            >
              Contact Team
            </Link>
          </div>
          <div className="pt-3 border-t border-[#E2E8F0] flex flex-col gap-2">
            <Link href="/rfq" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="cta" size="md" className="w-full">
                Request a Quote
              </Button>
            </Link>
            <Link href="/rfq?mode=upload" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="outline" size="md" className="w-full" leftIcon={<FileUp className="w-4 h-4" />}>
                Upload Your Drawing
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
