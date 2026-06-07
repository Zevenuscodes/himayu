'use client';

import { useState, useEffect } from 'react';

const PHONE = '919410379397';
const MESSAGE = encodeURIComponent('Hello! I have a query about Himayu Care products.');
const WA_URL = `https://wa.me/${PHONE}?text=${MESSAGE}`;

export default function WhatsAppButton() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!dismissed) setPopupVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  function dismiss(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setPopupVisible(false);
    setDismissed(true);
  }

  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-2 sm:bottom-6 sm:right-6">
      {/* Popup bubble */}
      {popupVisible && (
        <div className="relative bg-white rounded-2xl shadow-xl border border-green-100 px-4 py-3 max-w-[220px] sm:max-w-[260px] animate-fade-in-up">
          {/* Glow ring */}
          <div className="absolute inset-0 rounded-2xl ring-2 ring-green-400/40 animate-pulse pointer-events-none" />

          <button
            onClick={dismiss}
            className="absolute -top-2 -right-2 w-5 h-5 bg-gray-400 hover:bg-gray-500 text-white rounded-full text-xs flex items-center justify-center leading-none transition-colors"
            aria-label="Close"
          >
            ×
          </button>

          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="block">
            <p className="text-[11px] font-bold text-green-700 uppercase tracking-wide mb-1">Free Consultation</p>
            <p className="text-[13px] text-[#2c2c2c] leading-snug font-medium">
              Get a <span className="text-green-600 font-bold">free doctor consultation</span> on orders above ₹2000!
            </p>
            <p className="text-[11px] text-[#888] mt-1.5">Chat with us on WhatsApp →</p>
          </a>

          {/* Tail pointing down-right */}
          <div className="absolute -bottom-2 right-5 w-4 h-4 bg-white border-r border-b border-green-100 rotate-45" />
        </div>
      )}

      {/* WhatsApp FAB */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onClick={() => setPopupVisible(false)}
        className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-lg bg-[#25D366] hover:bg-[#1ebe5d] transition-colors active:scale-95"
      >
        {/* Glow pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping" />
        <svg
          viewBox="0 0 32 32"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 sm:w-9 sm:h-9 relative z-10"
        >
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.468.675 4.778 1.846 6.762L2 30l7.454-1.817A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2Zm0 25.6a11.56 11.56 0 0 1-5.9-1.615l-.422-.252-4.42 1.076 1.113-4.298-.277-.44A11.56 11.56 0 0 1 4.4 16C4.4 9.593 9.593 4.4 16 4.4S27.6 9.593 27.6 16 22.407 27.6 16 27.6Zm6.34-8.66c-.347-.174-2.054-1.013-2.374-1.129-.32-.116-.552-.174-.784.174-.232.347-.9 1.129-1.103 1.361-.203.232-.405.26-.752.086-.347-.174-1.464-.54-2.788-1.72-1.03-.918-1.726-2.051-1.928-2.398-.203-.347-.022-.535.152-.707.156-.155.347-.405.52-.608.174-.203.232-.347.347-.579.116-.232.058-.434-.029-.608-.087-.174-.784-1.89-1.074-2.588-.283-.68-.57-.588-.784-.598l-.667-.012c-.232 0-.608.087-.927.434-.319.347-1.218 1.19-1.218 2.902s1.247 3.366 1.42 3.598c.174.232 2.453 3.746 5.944 5.252.831.359 1.48.573 1.985.733.834.265 1.593.228 2.192.138.669-.1 2.054-.84 2.344-1.65.29-.81.29-1.505.203-1.65-.087-.145-.319-.232-.666-.405Z" />
        </svg>
      </a>

      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out both;
        }
      `}</style>
    </div>
  );
}
