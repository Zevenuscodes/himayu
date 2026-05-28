'use client';

import dynamic from 'next/dynamic';

const FloatingLeaves = dynamic(() => import('./FloatingLeaves'), { ssr: false });

export default function AboutVisual() {
  return (
    <div className="w-full h-[320px] sm:h-[420px] lg:h-[520px]">
      <FloatingLeaves />
    </div>
  );
}
