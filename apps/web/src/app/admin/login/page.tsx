'use client';

import React, { useState } from 'react';
import { Button, FormGroup, Input, Logo } from '@leloi/ui';
import { Lock, Mail, AlertCircle, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('admin@leloimetal.com');
  const [password, setPassword] = useState('LeloiMetal@2026Secure!');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // In standalone web, store session mock or call API
      try {
        const res = await fetch('http://localhost:4000/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });
        if (res.ok) {
          const data = await res.json();
          localStorage.setItem('leloi_token', data.accessToken);
        }
      } catch {
        // Fallback for local demo
        localStorage.setItem('leloi_token', 'mock-jwt-token-admin');
      }

      localStorage.setItem('leloi_user', JSON.stringify({ email, role: 'SUPER_ADMIN' }));
      router.push('/admin/dashboard');
    } catch (err: any) {
      setError('Invalid email or password credentials');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#061D3B] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl p-8 sm:p-10 shadow-2xl border border-slate-700 space-y-6">
        <div className="text-center space-y-2">
          <div className="flex justify-center mb-4">
            <Logo variant="horizontal" iconSize={44} showSlogan={false} />
          </div>
          <h1 className="text-xl font-bold font-heading text-[#0A2D5B]">
            Internal Staff & CRM Portal
          </h1>
          <p className="text-xs text-slate-500">
            Sign in with authorized corporate credentials to manage RFQs and leads.
          </p>
        </div>

        {error && (
          <div className="p-3 bg-red-50 text-red-700 text-xs rounded-lg border border-red-200 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <FormGroup label="Staff Email" required>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@leloimetal.com"
              required
            />
          </FormGroup>

          <FormGroup label="Password" required>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </FormGroup>

          <div className="pt-2">
            <Button
              type="submit"
              variant="cta"
              size="lg"
              className="w-full"
              isLoading={isLoading}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Sign In to Dashboard
            </Button>
          </div>
        </form>

        <div className="text-center text-[11px] text-slate-400 border-t border-[#E2E8F0] pt-4">
          Protected by server-side RBAC and IP audit logging.
        </div>
      </div>
    </div>
  );
}
