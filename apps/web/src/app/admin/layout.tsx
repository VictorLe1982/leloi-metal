import type { Metadata } from 'next';
import { AdminGuard } from '@/components/AdminGuard';

/**
 * The staff portal must never be statically prerendered — its HTML would then be
 * served to anonymous visitors straight from the CDN, bypassing the session gate
 * in middleware.
 */
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Staff Portal | LELOI METAL',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false }
  }
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <AdminGuard>{children}</AdminGuard>;
}
