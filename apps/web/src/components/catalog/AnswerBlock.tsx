import React from 'react';
import { Sparkles } from 'lucide-react';

interface AnswerBlockProps {
  /** 40–60 words, self-contained, no pronouns referring off-block. */
  answer: string;
  label?: string;
}

/**
 * A short, self-contained factual paragraph placed high on the page.
 *
 * Written to be lifted verbatim by AI answer engines (AI Overviews, ChatGPT
 * search, Perplexity), which quote a passage rather than a whole page. The
 * constraints that make a passage citable: it states the subject by name rather
 * than as "this product", it carries the concrete specifics (alloy, standard,
 * location), and it stands on its own without the surrounding page.
 */
export const AnswerBlock: React.FC<AnswerBlockProps> = ({ answer, label = 'In Brief' }) => (
  <section
    aria-label={label}
    className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs"
  >
    <div className="flex items-center gap-1.5 text-xs uppercase font-heading font-semibold text-blue tracking-wider mb-2">
      <Sparkles className="w-3.5 h-3.5" />
      {label}
    </div>
    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{answer}</p>
  </section>
);
