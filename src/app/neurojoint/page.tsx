import Image from 'next/image';
import { CheckCircle2, Leaf, FlaskConical } from 'lucide-react';

const benefits = [
  'Joint pain and stiffness (Sandhivata)',
  'Nerve weakness and neuropathy (Vata disorders)',
  'Arthritis — Osteoarthritis and Rheumatoid',
  'Restricted movement and flexibility',
  'Muscle weakness and fatigue',
  'Post-injury recovery and inflammation',
];

const ingredients = [
  { name: 'अश्वगंधा (Ashwagandha)', latin: 'Withania somnifera' },
  { name: 'शल्लकी (Shallaki)', latin: 'Boswellia serrata' },
  { name: 'गुग्गुलु (Guggulu)', latin: 'Commiphora mukul' },
  { name: 'निर्गुण्डी (Nirgundi)', latin: 'Vitex negundo' },
  { name: 'रास्ना (Rasna)', latin: 'Pluchea lanceolata' },
  { name: 'एरण्ड (Eranda)', latin: 'Ricinus communis' },
];

export default function NeurojointPage() {
  return (
    <main className="min-h-screen pt-24 bg-[#fdfbf7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Visual */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-sm aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[#eef5ec] to-[#f5f0e8]">
              <Image
                src="/neurojoint.png"
                alt="Himayu Care Neurojoint — 60 Capsules"
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
                <Leaf className="w-3 h-3" /> Ayurvedic Proprietary Formulation
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#c8a87a]/15 text-[#8a6840] text-xs font-medium px-3 py-1 rounded-full">
                <FlaskConical className="w-3 h-3" /> Capsule
              </span>
              <span className="inline-flex items-center bg-[#2c2c2c] text-white text-sm font-bold px-3 py-1 rounded-full">
                60 Caps
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-[#2c2c2c] leading-tight">
              Himayu Care Neurojoint
            </h1>

            <p className="mt-5 text-[#666] leading-relaxed text-sm">
              Our newest Ayurvedic formulation for joint pain, nerve strength and lasting mobility.
              Six potent herbs — Ashwagandha, Shallaki, Guggulu and more — combined under GMP-certified standards
              for a natural, side-effect-free path to lasting relief.
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
            <div className="mt-8 bg-[#4a7c59] text-white rounded-2xl px-6 py-5">
              <p className="text-base font-bold tracking-wide">Coming Soon</p>
              <p className="text-white/80 text-sm mt-1">Himayu Care Neurojoint is launching shortly. Stay tuned!</p>
            </div>

            {/* Perks */}
            <div className="mt-8 pt-8 border-t border-[#ede8dc] grid grid-cols-3 gap-4 text-center">
              {[['100%', 'Ayurvedic'], ['GMP', 'Certified'], ['60', 'Capsules']].map(([val, label]) => (
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
            <h2 className="text-xl font-bold text-[#2c2c2c]">Key Ingredients</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {ingredients.map((ing) => (
              <div key={ing.name} className="flex items-center justify-between bg-[#faf8f3] border border-[#ede8dc] rounded-xl px-4 py-3 text-sm">
                <div>
                  <p className="font-medium text-[#2c2c2c]">{ing.name}</p>
                  <p className="text-xs text-[#4a7c59] italic mt-0.5">{ing.latin}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
