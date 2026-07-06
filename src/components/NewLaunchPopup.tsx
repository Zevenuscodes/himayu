'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Sparkles } from 'lucide-react';

const launches = [
  {
    name: 'Himayu Neurojoint Care',
    subtitle: '60 Capsules · Ayurvedic Proprietary',
    desc: 'For arthritis, joint pain, paralysis, neuropathic pain, cervical & lumbar spondylosis.',
    image: '/neurojoint.png',
    link: '/products/neurojoint',
  },
  {
    name: 'Himayu Basti Kalpa Churna',
    subtitle: '250g · Ayurvedic Proprietary',
    desc: 'Classical eight-herb formula for swelling, inflammation and Vataj disorders.',
    image: '/bastikalpa.jpeg',
    link: null,
  },
];

export default function NewLaunchPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 800);
    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      {/* Modal */}
      <div className="relative bg-[#fdfbf7] rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden animate-fade-in-up">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#1a3a2a] to-[#2e5c3e] px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#c8a87a]" />
            <span className="text-white font-bold text-lg tracking-wide">New Launches</span>
            <span className="bg-[#c8a87a] text-[#1a3a2a] text-xs font-bold px-2.5 py-0.5 rounded-full ml-1">2026</span>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Products */}
        <div className="grid sm:grid-cols-2 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-[#e8e0d0]">
          {launches.map((p) => (
            <div key={p.name} className="p-6 flex flex-col items-center text-center gap-4">
              <div className="relative w-36 h-36 flex-shrink-0">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-contain drop-shadow-lg"
                />
              </div>
              <div>
                <p className="font-bold text-[#2c2c2c] text-base leading-snug">{p.name}</p>
                <p className="text-xs text-[#4a7c59] font-medium mt-0.5">{p.subtitle}</p>
                <p className="text-sm text-[#888] mt-2 leading-relaxed">{p.desc}</p>
              </div>
              {p.link ? (
                <Link
                  href={p.link}
                  onClick={() => setOpen(false)}
                  className="mt-auto bg-[#4a7c59] text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-[#3a6347] transition-colors"
                >
                  Shop Now →
                </Link>
              ) : (
                <span className="mt-auto bg-[#f0ebe0] text-[#888] text-sm font-medium px-6 py-2.5 rounded-full">
                  Coming Soon
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-[#e8e0d0] px-6 py-3 flex items-center justify-between">
          <p className="text-xs text-[#aaa]">New arrivals from Himayu Care</p>
          <button
            onClick={() => setOpen(false)}
            className="text-xs text-[#888] hover:text-[#4a7c59] transition-colors"
          >
            Close
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.35s ease-out both;
        }
      `}</style>
    </div>
  );
}
