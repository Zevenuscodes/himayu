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
    desc: 'An Ayurvedic Proprietary formulation with eight classical herbs for swelling, inflammation and Vata-related disorders. Prepared as basti Kalka for targeted therapeutic use.',
    benefits: [
      'Swelling & inflammation relief',
      'Vata disorders & stiffness',
      'Digestive & gut support',
      'Classical basti Kalka formulation',
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
    <div className="relative bg-gradient-to-br from-[#1a3a2a] to-[#2e5c3e] rounded-3xl overflow-hidden">
      <div className="absolute -top-16 -right-16 w-72 h-72 bg-[#4a7c59]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-[#c8a87a]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative grid lg:grid-cols-2 gap-8 items-center p-8 sm:p-12 lg:p-16">
        {/* Text */}
        <div>
          <div className="flex items-center gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 bg-[#c8a87a] text-[#1a3a2a] text-xs font-bold px-3 py-1.5 rounded-full tracking-wide uppercase">
              <Sparkles className="w-3 h-3" /> {slide.badge}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
            {slide.title}
          </h2>
          <p className="mt-2 text-[#c8a87a] font-medium text-sm tracking-wide">{slide.subtitle}</p>
          <p className="mt-5 text-white/70 leading-relaxed text-sm sm:text-base max-w-md">{slide.desc}</p>

          <ul className="mt-6 space-y-2">
            {slide.benefits.map((b) => (
              <li key={b} className="flex items-center gap-2 text-sm text-white/80">
                <CheckCircle2 className="w-4 h-4 text-[#6ab87f] flex-shrink-0" />
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-8 inline-flex items-center gap-2 bg-[#c8a87a] text-[#1a3a2a] text-sm font-bold px-5 py-2.5 rounded-full">
            {slide.status}
          </div>
        </div>

        {/* Image */}
        <div className="flex items-center justify-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            <Image
              src={slide.image}
              alt={slide.imageAlt}
              fill
              className="object-contain drop-shadow-2xl"
              sizes="(max-width: 1024px) 320px, 384px"
            />
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-3">
        <button
          onClick={prev}
          className="w-7 h-7 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft className="w-4 h-4 text-white" />
        </button>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setAuto(false); setCurrent(i); }}
            className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-[#c8a87a] w-5' : 'bg-white/30'}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
        <button
          onClick={next}
          className="w-7 h-7 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          aria-label="Next"
        >
          <ChevronRight className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  );
}
