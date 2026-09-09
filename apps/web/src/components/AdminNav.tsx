'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Logo, Button } from '@leloi/ui';
import {
  LayoutDashboard,
  FileSpreadsheet,
  Kanban,
  Users,
  Globe2,
  LogOut,
  ShieldCheck
} from 'lucide-react';

export const AdminNav: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('leloi_token');
    localStorage.removeItem('leloi_user');
    router.push('/admin/login');
  };

  const navItems = [
    { label: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { label: 'RFQs & Drawings', href: '/admin/rfqs', icon: FileSpreadsheet },
    { label: 'CRM Pipeline', href: '/admin/crm/pipeline', icon: Kanban },
    { label: 'Buyer Accounts', href: '/admin/crm/buyers', icon: Users },
    { label: 'Market Opportunity', href: '/admin/markets', icon: Globe2 }
  ];

  return (
    <div className="bg-[#061D3B] text-white border-b border-white/10 px-4 sm:px-8 py-3">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <Link href="/admin/dashboard" className="flex items-center gap-3">
            <Logo variant="horizontal" theme="dark" width={170} showSlogan={false} />
            <span className="text-[10px] bg-blue-500/20 text-blue-300 font-mono px-2 py-0.5 rounded border border-blue-400/30">
              CRM BACK-OFFICE
            </span>
          </Link>

          <nav className="flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                pathname === item.href ||
                (item.href !== '/admin/dashboard' && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-heading font-medium transition-colors ${
                    isActive
                      ? 'bg-[#2F7BFF] text-white'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5 text-emerald-400 bg-emerald-950/50 border border-emerald-800/40 px-2.5 py-1 rounded-md text-[11px]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Audit Mode: Active</span>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-1 text-slate-300 hover:text-rose-300 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </div>
  );
};
