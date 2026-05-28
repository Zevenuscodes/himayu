'use client';

import dynamic from 'next/dynamic';

const FloatingLeaves = dynamic(() => import('./FloatingLeaves'), { ssr: false });

export default function HeroVisual() {
  return (
    <div className="hidden lg:block w-full h-[480px]">
      <FloatingLeaves />
    </div>
  );
}
