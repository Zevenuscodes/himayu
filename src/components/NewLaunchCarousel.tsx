'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { CheckCircle2, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    badge: 'New Launch',
    title: 'Himayu Care Neurojoint',
    subtitle: 'Capsule · 60 Caps',
    desc: 'Our newest Ayurvedic formulation for joint pain, nerve strength and lasting mobility. Six potent herbs — Ashwagandha, Shallaki, Guggulu and more — combined under GMP-certified standards.',
    benefits: [
      'Joint pain & stiffness (Sandhivata)',
      'Nerve weakness & neuropathy',
      'Arthritis — Osteo & Rheumatoid',
      'Muscle fatigue & post-injury recovery',
    ],
    image: '/neurojoint.png',
    imageAlt: 'Himayu Care Neurojoint — 60 Capsules',
    status: 'Coming Soon',
    tags: ['Joint', 'Nerve', 'Mobility'],
  },
  {
    badge: 'New Launch',
    title: 'Himayu Basti Kalpa Churna',
    subtitle: 'Churna · 250g',
    desc: 'An Ayurvedic Proprietary formulation with eight classical herbs for swelling, inflammation and Vata-related disorders. Prepared as basti Kalpa for targeted therapeutic use.',
    benefits: [
      'Swelling & inflammation relief',
      'Vata disorders & stiffness',
      'Digestive & gut support',
      'Classical basti Kalpa formulation',
    ],
    image: '/bastikalpa.jpeg',
    imageAlt: 'Himayu Basti Kalpa Churna — 250g',
    status: 'Coming Soon',
    tags: ['Vata', 'Churna', 'Ayurvedic'],
  },
];

export default function NewLaunchCarousel() {
  const [current, setCurrent] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;
    const t = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 4500);
    return () => clearInterval(t);
  }, [auto]);

  const prev = () => { setAuto(false); setCurrent((c) => (c - 1 + slides.length) % slides.length); };
  const next = () => { setAuto(false); setCurrent((c) => (c + 1) % slides.length); };

  const slide = slides[current];

  return (
    <div className="relative bg-gradient-to-br from-[#1a3a2a] to-[#2e5c3e] rounded-3xl overflow-hidden min-h-[520px] lg:min-h-[600px]">
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#4a7c59]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-[#c8a87a]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative grid lg:grid-cols-2 gap-10 items-center p-10 sm:p-16 lg:p-20 pb-16 sm:pb-20 lg:pb-24">
        {/* Text */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 bg-[#c8a87a] text-[#1a3a2a] text-sm font-bold px-4 py-2 rounded-full tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5" /> {slide.badge}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            {slide.title}
          </h2>
          <p className="mt-3 text-[#c8a87a] font-medium text-base tracking-wide">{slide.subtitle}</p>
          <p className="mt-6 text-white/70 leading-relaxed text-base sm:text-lg max-w-lg">{slide.desc}</p>

          <ul className="mt-7 space-y-3">
            {slide.benefits.map((b) => (
              <li key={b} className="flex items-center gap-2.5 text-base text-white/80">
                <CheckCircle2 className="w-5 h-5 text-[#6ab87f] flex-shrink-0" />
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-10 inline-flex items-center gap-2 bg-[#c8a87a] text-[#1a3a2a] text-base font-bold px-7 py-3 rounded-full">
            {slide.status}
          </div>
        </div>

        {/* Image */}
        <div className="flex items-center justify-center">
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem]">
            <Image
              src={slide.image}
              alt={slide.imageAlt}
              fill
              className="object-contain drop-shadow-2xl"
              sizes="(max-width: 640px) 288px, (max-width: 1024px) 384px, 448px"
            />
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-3">
        <button
          onClick={prev}
          className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setAuto(false); setCurrent(i); }}
            className={`h-2.5 rounded-full transition-all ${i === current ? 'bg-[#c8a87a] w-7' : 'bg-white/30 w-2.5'}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
        <button
          onClick={next}
          className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
}
