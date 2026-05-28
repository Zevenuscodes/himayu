import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, Leaf, FlaskConical } from 'lucide-react';

const benefits = [
  'Liver diseases & liver protection',
  'Kidney disorders & renal support',
  'Respiratory diseases & breathlessness',
  'Swelling & inflammation in the body',
  'Improves digestion & gut health',
];

const ingredients = [
  { name: 'कासनी', latin: 'Chicorium intybus', quantity: '2.5g' },
  { name: 'Sodium Benzoate', latin: 'Preservative', quantity: 'Q.s.' },
  { name: 'Water', latin: 'Aqua', quantity: 'Q.s.' },
];

export default function KasniArkPage() {
  return (
    <main className="min-h-screen pt-24 bg-[#fdfbf7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Image */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-sm aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[#eef5ec] to-[#f5f0e8]">
              <Image
                src="/kasni-ark.png"
                alt="Kasni Ark — Himayu Care"
                fill
                className="object-contain p-6"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Info */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 bg-[#4a7c59]/10 text-[#4a7c59] text-xs font-medium px-3 py-1 rounded-full">
                <Leaf className="w-3 h-3" /> Ayurvedic Ark Formulation
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#c8a87a]/15 text-[#8a6840] text-xs font-medium px-3 py-1 rounded-full">
                <FlaskConical className="w-3 h-3" /> Ark (Distillate)
              </span>
              <span className="inline-flex items-center bg-[#2c2c2c] text-white text-sm font-bold px-3 py-1 rounded-full">
                200ml
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-[#2c2c2c] leading-tight">
              Kasni Ark
              <span className="block text-lg text-[#888] font-normal mt-1">कासनी अर्क</span>
            </h1>

            <p className="mt-5 text-[#666] leading-relaxed text-sm">
              Kasni Ark is a pure distillate of Kasni (Chicory), one of Ayurveda's most revered liver-protective herbs.
              It supports healthy liver and kidney function, eases respiratory conditions, reduces swelling and improves overall digestion.
            </p>

            {/* Benefits */}
            <div className="mt-6">
              <p className="text-sm font-semibold text-[#2c2c2c] mb-3">Useful in / Benefits</p>
              <ul className="space-y-2">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-[#555]">
                    <CheckCircle2 className="w-4 h-4 text-[#4a7c59] flex-shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Coming Soon Banner */}
            <div className="mt-8 bg-[#c8a87a]/10 border border-[#c8a87a]/40 rounded-2xl px-6 py-4 flex items-center gap-4">
              <span className="text-2xl">🌿</span>
              <div>
                <p className="text-sm font-semibold text-[#8a6840]">Coming Soon</p>
                <p className="text-xs text-[#9a8060] mt-0.5">This product will be available for purchase shortly. Check back soon!</p>
              </div>
            </div>

            <div className="mt-4">
              <Link
                href="/products"
                className="inline-block px-8 py-3.5 border border-[#4a7c59] text-[#4a7c59] rounded-full font-medium hover:bg-[#4a7c59]/5 transition-colors text-sm"
              >
                View All Products →
              </Link>
            </div>

            {/* Perks */}
            <div className="mt-8 pt-8 border-t border-[#ede8dc] grid grid-cols-3 gap-4 text-center">
              {[['100%', 'Pure'], ['GMP', 'Certified'], ['200ml', 'Net Vol.']].map(([val, label]) => (
                <div key={label}>
                  <p className="text-lg font-bold text-[#4a7c59]">{val}</p>
                  <p className="text-xs text-[#aaa] mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ingredients */}
        <div className="mt-16 border-t border-[#ede8dc] pt-12">
          <div className="flex items-center gap-2 mb-6">
            <FlaskConical className="w-5 h-5 text-[#4a7c59]" />
            <h2 className="text-xl font-bold text-[#2c2c2c]">Ingredients</h2>
            <span className="text-xs text-[#aaa] ml-1">per 10ml</span>
          </div>
          <div className="grid sm:grid-cols-3 gap-3">
            {ingredients.map((ing) => (
              <div key={ing.name} className="flex items-center justify-between bg-[#faf8f3] border border-[#ede8dc] rounded-xl px-4 py-3 text-sm">
                <div>
                  <p className="font-medium text-[#2c2c2c]">{ing.name}</p>
                  <p className="text-xs text-[#4a7c59] italic mt-0.5">{ing.latin}</p>
                </div>
                <span className="text-xs text-[#888] font-medium ml-4 flex-shrink-0">{ing.quantity}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
