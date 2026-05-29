'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('hc_consent');
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('hc_consent', '1');
    setVisible(false);
  };

  const decline = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 sm:p-8 relative">
        <button
          onClick={decline}
          className="absolute top-4 right-4 text-[#aaa] hover:text-[#555] transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Logo & Title */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 rounded-full bg-[#4a7c59]/10 flex items-center justify-center">
            <span className="text-[#4a7c59] text-base">🌿</span>
          </div>
          <h2 className="text-base font-bold text-[#2c2c2c]">Himayu Care</h2>
        </div>

        <h3 className="text-lg font-semibold text-[#2c2c2c] mb-2">
          We value your privacy
        </h3>
        <p className="text-sm text-[#666] leading-relaxed mb-4">
          We use cookies to improve your experience, analyse site traffic and personalise content.
          By clicking <strong>"Accept All"</strong>, you agree to our{' '}
          <Link href="/privacy-policy" className="text-[#4a7c59] underline underline-offset-2">
            Privacy Policy
          </Link>{' '}
          and{' '}
          <Link href="/terms" className="text-[#4a7c59] underline underline-offset-2">
            Terms &amp; Conditions
          </Link>
          .
        </p>

        <div className="bg-[#faf8f3] border border-[#ede8dc] rounded-xl p-3 mb-5 text-xs text-[#888] space-y-1">
          <p><span className="font-semibold text-[#555]">Essential cookies</span> — required for the website and cart to function.</p>
          <p><span className="font-semibold text-[#555]">Analytics cookies</span> — help us understand how visitors use our site.</p>
          <p><span className="font-semibold text-[#555]">Marketing cookies</span> — used to show relevant content and offers.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={accept}
            className="flex-1 py-3 bg-[#4a7c59] text-white rounded-full font-semibold text-sm hover:bg-[#3a6347] transition-colors"
          >
            Accept All
          </button>
          <button
            onClick={decline}
            className="flex-1 py-3 border border-[#e0d8cc] text-[#666] rounded-full font-medium text-sm hover:bg-[#faf8f3] transition-colors"
          >
            Essential Only
          </button>
        </div>
      </div>
    </div>
  );
}
