'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export interface AdminSessionUser {
  id?: string;
  email: string;
  role: string;
  firstName?: string;
  lastName?: string;
}

/**
 * Resolves the signed-in staff member from the server.
 *
 * The identity and role always come from /api/admin/me, which validates the
 * HTTP-only session cookie against the API — never from client storage.
 */
export function useAdminSession(options: { enabled?: boolean } = {}) {
  const { enabled = true } = options;
  const router = useRouter();
  const [user, setUser] = useState<AdminSessionUser | null>(null);
  const [isLoading, setIsLoading] = useState(enabled);

  useEffect(() => {
    if (!enabled) {
      setIsLoading(false);
      return;
    }

    let cancelled = false;

    fetch('/api/admin/me', { cache: 'no-store' })
      .then(async (res) => {
        if (cancelled) return;
        if (!res.ok) {
          router.replace('/admin/login');
          return;
        }
        setUser((await res.json()) as AdminSessionUser);
      })
      .catch(() => {
        if (!cancelled) router.replace('/admin/login');
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [router, enabled]);

  return { user, isLoading };
}
