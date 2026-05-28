import Link from 'next/link';
import { getAllProducts, ShopifyProduct } from '@/lib/shopify';
import ProductCard from '@/components/ProductCard';
import { Leaf, Shield, FlaskConical, BadgeCheck, CheckCircle2, Sparkles } from 'lucide-react';
import HeroVisual from '@/components/HeroVisual';

export default async function HomePage() {
  let featuredProducts: ShopifyProduct[] = [];
  try {
    const all = await getAllProducts();
    // Promote Shadangpaaniya to bestseller and ensure it appears first
    const tagged = all.map((p) =>
      /shadang/i.test(p.title)
        ? { ...p, tags: Array.from(new Set(['bestseller', ...p.tags])) }
        : p
    );
    const bestseller = tagged.filter((p) => /shadang/i.test(p.title));
    const rest = tagged.filter((p) => !/shadang/i.test(p.title));
    featuredProducts = [...bestseller, ...rest].slice(0, 4);
  } catch {
    // show empty state until API is configured
  }

  const values = [
    { icon: Leaf, title: '100% Natural', desc: 'Pure Himalayan herbs, free from harmful additives or synthetics — 100% Ayurvedic with no side effects.' },
    { icon: BadgeCheck, title: 'GMP Certified', desc: 'Marketed by us, manufactured by GMP-certified partners.' },
    { icon: FlaskConical, title: 'Premium Quality Ayurvedic Products', desc: 'Time-tested Ayurvedic recipes drawn from ancient texts and classical tradition.' },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#f5f0e8] via-[#eef5ec] to-[#f5f0e8]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#4a7c59]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-20 w-80 h-80 bg-[#c8a87a]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-[#4a7c59]/10 text-[#4a7c59] text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <Leaf className="w-3.5 h-3.5" /> GMP Certified Ayurvedic Medicines
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1e1e1e] leading-[1.1] tracking-tight">
              Nature&apos;s Cure<br />
              <span className="text-[#4a7c59]">for Your Health</span>
            </h1>
            <p className="mt-6 text-lg text-[#666] leading-relaxed max-w-md">
              Classical Ayurvedic formulas — Arks, Kwaths, Chyawanprash and herbal kits
              crafted from pure Himalayan herbs for lasting wellness.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                href="/products"
                className="px-8 py-3.5 bg-[#4a7c59] text-white rounded-full font-medium hover:bg-[#3a6347] transition-colors shadow-lg shadow-[#4a7c59]/20"
              >
                Shop Now
              </Link>
              <a
                href="#about"
                className="px-8 py-3.5 border border-[#4a7c59] text-[#4a7c59] rounded-full font-medium hover:bg-[#4a7c59]/5 transition-colors"
              >
                Our Story
              </a>
            </div>
            <div className="flex gap-6 sm:gap-8 mt-10 sm:mt-12">
              {[['2K+', 'Happy Patients'], ['15+', 'Ayurvedic Products'], ['100%', 'No Side Effects']].map(([num, label]) => (
                <div key={label}>
                  <p className="text-2xl font-bold text-[#2c2c2c]">{num}</p>
                  <p className="text-xs text-[#888] mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero visual — 3D floating leaves */}
          <HeroVisual />
        </div>
      </section>

      {/* Values */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2c2c2c]">Why Himayu Care?</h2>
          <p className="mt-3 text-[#888] max-w-md mx-auto">Every medicine is a promise — pure ingredients, classical recipes, no side effects.</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {values.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-[#faf8f3] rounded-2xl p-6 hover:shadow-md transition-shadow border border-[#ede8dc]">
              <div className="w-11 h-11 bg-[#4a7c59]/10 rounded-xl flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-[#4a7c59]" />
              </div>
              <h3 className="font-semibold text-[#2c2c2c] mb-2">{title}</h3>
              <p className="text-sm text-[#888] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-[#faf8f3] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#2c2c2c]">Our Premium Quality Products</h2>
              <p className="mt-2 text-[#888]">Classical Ayurvedic formulas trusted by thousands.</p>
            </div>
            <Link href="/products" className="text-sm text-[#4a7c59] font-medium hover:underline hidden sm:block">
              View all →
            </Link>
          </div>

          {featuredProducts.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-[#bbb]">
              <p className="text-4xl mb-4">🌿</p>
              <p className="text-sm">Products will appear here once your Shopify store is connected.</p>
            </div>
          )}

          <div className="text-center mt-10 sm:hidden">
            <Link href="/products" className="text-sm text-[#4a7c59] font-medium">View all products →</Link>
          </div>
        </div>
      </section>

      {/* New Launch — Neurojoint */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative bg-gradient-to-br from-[#1a3a2a] to-[#2e5c3e] rounded-3xl overflow-hidden">
          {/* Background blobs */}
          <div className="absolute -top-16 -right-16 w-72 h-72 bg-[#4a7c59]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-[#c8a87a]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative grid lg:grid-cols-2 gap-8 items-center p-8 sm:p-12 lg:p-16">
            {/* Text side */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-[#c8a87a] text-[#1a3a2a] text-xs font-bold px-3 py-1.5 rounded-full tracking-wide uppercase">
                  <Sparkles className="w-3 h-3" /> New Launch
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                Neurojoint
              </h2>
              <p className="mt-2 text-[#c8a87a] font-medium text-sm tracking-wide">Capsule · 60 Caps</p>
              <p className="mt-5 text-white/70 leading-relaxed text-sm sm:text-base max-w-md">
                Our newest Ayurvedic formulation for joint pain, nerve strength and lasting mobility.
                Six potent herbs — Ashwagandha, Shallaki, Guggulu and more — combined under GMP-certified standards.
              </p>

              <ul className="mt-6 space-y-2">
                {['Joint pain & stiffness (Sandhivata)', 'Nerve weakness & neuropathy', 'Arthritis — Osteo & Rheumatoid', 'Muscle fatigue & post-injury recovery'].map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-[#6ab87f] flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  href="/products"
                  className="px-7 py-3 bg-[#c8a87a] text-[#1a3a2a] rounded-full font-semibold text-sm hover:bg-[#d4b88a] transition-colors"
                >
                  Shop Now
                </Link>
                <Link
                  href="/about"
                  className="px-7 py-3 border border-white/30 text-white rounded-full font-medium text-sm hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Badge side */}
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-white/5 border border-white/10 rounded-full flex items-center justify-center">
                  <div className="w-40 h-40 sm:w-52 sm:h-52 lg:w-60 lg:h-60 bg-white/5 border border-white/10 rounded-full flex items-center justify-center">
                    <div className="text-center px-6">
                      <p className="text-5xl sm:text-6xl font-black text-white leading-none">NJ</p>
                      <p className="text-[#6ab87f] text-xs font-medium mt-2 tracking-widest uppercase">Neurojoint</p>
                      <div className="mt-3 flex justify-center gap-1">
                        {['Joint', 'Nerve', 'Mobility'].map((t) => (
                          <span key={t} className="text-[9px] bg-[#4a7c59]/40 text-white/80 px-1.5 py-0.5 rounded-full">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Floating tags */}
                <span className="absolute -top-3 -right-3 bg-[#c8a87a] text-[#1a3a2a] text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg">GMP Certified</span>
                <span className="absolute -bottom-3 -left-3 bg-[#4a7c59] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg">100% Ayurvedic</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-[#4a7c59] rounded-2xl sm:rounded-3xl p-8 sm:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full -translate-y-1/2" />
            <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-white rounded-full translate-y-1/2" />
          </div>
          <div className="relative">
            <h2 className="text-2xl sm:text-4xl font-bold mb-4">Start Your Path to Natural Healing</h2>
            <p className="text-white/80 max-w-md mx-auto mb-8">
              GMP-certified Ayurvedic medicines delivered to your door. Free shipping on orders over ₹999.
            </p>
            <Link
              href="/products"
              className="inline-block px-10 py-3.5 bg-white text-[#4a7c59] rounded-full font-semibold hover:bg-[#f5f0e8] transition-colors"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
