'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import { useAdminSession } from '@/lib/use-admin-session';

/**
 * Second barrier for the staff portal.
 *
 * Middleware only checks that a session cookie exists; this component verifies
 * it against the API before any admin screen renders, so a forged or expired
 * cookie cannot reach the interface. The login screen is excluded.
 */
export const AdminGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const isLoginRoute = pathname === '/admin/login';
  const { user, isLoading } = useAdminSession({ enabled: !isLoginRoute });

  if (isLoginRoute) {
    return <>{children}</>;
  }

  if (isLoading || !user) {
    return (
      <div className="min-h-screen bg-light-gray flex items-center justify-center">
        <div className="flex items-center gap-3 text-sm text-slate-500">
          <Loader2 className="w-5 h-5 animate-spin text-blue" />
          <span>Verifying staff session…</span>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};
