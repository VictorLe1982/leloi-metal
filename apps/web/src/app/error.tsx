'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@leloi/ui';
import { AlertTriangle, RotateCcw, ArrowRight } from 'lucide-react';

export default function GlobalError({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surfaced to the browser console and any attached error reporter.
    console.error('[LELOI METAL] Unhandled route error:', error);
  }, [error]);

  return (
    <div className="min-h-[70vh] bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mx-auto">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-navy tracking-tight">
            Something Went Wrong
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            We hit an unexpected error while loading this page. Nothing you submitted has been
            lost — please retry, or contact our export desk if the problem persists.
          </p>
          {error.digest && (
            <p className="text-[11px] font-mono text-slate-400">Reference: {error.digest}</p>
          )}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button
            variant="cta"
            size="lg"
            onClick={reset}
            leftIcon={<RotateCcw className="w-4 h-4" />}
          >
            Try Again
          </Button>
          <Link href="/contact">
            <Button variant="outline" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Contact Export Team
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
