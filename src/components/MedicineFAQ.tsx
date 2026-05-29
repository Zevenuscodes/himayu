'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  q: string;
  a: string;
}

export default function MedicineFAQ({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {faqs.map((faq, i) => (
        <div key={i} className="bg-white border border-[#ede8dc] rounded-xl overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-5 py-4 text-left"
          >
            <span className="text-sm font-semibold text-[#2c2c2c] pr-4">{faq.q}</span>
            <ChevronDown
              className={`w-4 h-4 text-[#4a7c59] flex-shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`}
            />
          </button>
          {open === i && (
            <div className="px-5 pb-4 text-sm text-[#666] leading-relaxed border-t border-[#f0ebe0] pt-3">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
