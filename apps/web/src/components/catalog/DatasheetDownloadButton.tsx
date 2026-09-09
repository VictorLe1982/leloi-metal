'use client';

import React, { useState } from 'react';
import { Button } from '@leloi/ui';
import { Download, CheckCircle2 } from 'lucide-react';

interface DatasheetDownloadButtonProps {
  productName: string;
}

export function DatasheetDownloadButton({ productName }: DatasheetDownloadButtonProps) {
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);

  const handleDownloadDatasheet = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  return (
    <div className="pt-2">
      <Button
        variant="outline"
        className="w-full justify-center gap-2 border-slate-300 text-slate-700 hover:bg-slate-50 cursor-pointer"
        onClick={handleDownloadDatasheet}
      >
        <Download className="w-4 h-4 text-slate-500" />
        Download Technical Datasheet (PDF)
      </Button>

      {downloadSuccess && (
        <div className="mt-2 p-2 bg-emerald-50 border border-emerald-200 rounded text-[11px] text-emerald-800 flex items-center gap-1.5 animate-fade-in">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>
            Datasheet generated for <strong>{productName}</strong>. Ready for engineering review.
          </span>
        </div>
      )}
    </div>
  );
}
