'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Logo, Button } from '@leloi/ui';
import { Menu, X, ChevronDown, Calculator, FileUp } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          <Link href="/tools/aluminium-weight-calculator" className="hover:text-white flex items-center gap-1 transition-colors">
            <Calculator className="w-3 h-3 text-[#2F7BFF]" />
            Weight Calculator
          </Link>
          <span className="text-slate-600">•</span>
          <span className="text-slate-300">Vietnam Sourcing & Export Office</span>
          <span className="text-slate-600">•</span>
          <Link href="/contact" className="hover:text-white transition-colors">
            sales@leloimetal.com
          </Link>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo with Two-L Mark */}
        <Link href="/" className="flex items-center gap-3 group">
          <Logo variant="horizontal" iconSize={42} showSlogan={true} />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 font-heading text-sm font-medium text-[#172033]">
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
          <Link href="/tools/aluminium-weight-calculator" className="hover:text-[#2F7BFF] transition-colors py-2">
            Tools
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
          <div className="flex flex-col space-y-2 font-heading font-medium text-sm text-[#172033]">
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
              Aluminium Weight Calculator
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
