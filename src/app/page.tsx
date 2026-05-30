import Link from 'next/link';
import { getAllProducts, ShopifyProduct } from '@/lib/shopify';
import ProductCard from '@/components/ProductCard';
import { Leaf, BadgeCheck, FlaskConical, Shield, Truck, Handshake } from 'lucide-react';
import HeroVisual from '@/components/HeroVisual';
import NewLaunchCarousel from '@/components/NewLaunchCarousel';

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
    { icon: Leaf, title: 'Authentic Ayurvedic Formulations', desc: 'Carefully selected formulations inspired by classical Ayurvedic principles and ancient texts.' },
    { icon: BadgeCheck, title: 'GMP-Certified Manufacturing', desc: 'Marketed by us, manufactured through trusted GMP-certified facilities following strict quality standards.' },
    { icon: Shield, title: 'Quality Assurance', desc: 'Each product is developed with a focus on purity, safety and effectiveness — no compromises.' },
    { icon: FlaskConical, title: 'Premium Packaging & Branding', desc: 'Professional packaging solutions designed to enhance brand identity and market appeal.' },
    { icon: Truck, title: 'Reliable Supply Network', desc: 'Efficient distribution and business support across PAN India.' },
    { icon: Handshake, title: 'Trusted Business Relationships', desc: 'Committed to transparency, professionalism and long-term partnerships with our customers.' },
  ];

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Himayu Care',
    url: 'https://himayucare.com',
    logo: 'https://himayucare.com/logo.jpeg',
    description: 'GMP-certified classical Ayurvedic medicines made from pure Himalayan herbs.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'H.No-286, Lane 4, C-Block, Ajabpur Khurd, Saraswati Vihar',
      addressLocality: 'Dehradun',
      addressRegion: 'Uttarakhand',
      postalCode: '248001',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-78179-82004',
      contactType: 'customer service',
      availableLanguage: ['English', 'Hindi'],
    },
    sameAs: [
      'https://www.instagram.com/himayucare',
      'https://youtube.com/@himayucare',
      'https://www.facebook.com/share/1DYQE9NdS8/',
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
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
              Transforming Ayurvedic wisdom into trusted wellness brands — classical formulas,
              GMP-certified quality, and pure Himalayan herbs for lasting health.
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
              {[['2K+', 'Happy Patients'], ['20+', 'Products'], ['100%', 'Natural']].map(([num, label]) => (
                <div key={label}>
                  <p className="text-2xl font-bold text-[#2c2c2c]">{num}</p>
                  <p className="text-xs text-[#888] mt-0.5">{label}</p>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 mt-8">
              <p className="text-xs text-[#aaa] uppercase tracking-wider">Follow us</p>
              <a href="https://www.instagram.com/himayucare" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#4a7c59]/10 flex items-center justify-center text-[#4a7c59] hover:bg-[#e1306c] hover:text-white transition-all">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="https://youtube.com/@himayucare" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#4a7c59]/10 flex items-center justify-center text-[#4a7c59] hover:bg-[#ff0000] hover:text-white transition-all">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/share/1DYQE9NdS8/" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#4a7c59]/10 flex items-center justify-center text-[#4a7c59] hover:bg-[#1877f2] hover:text-white transition-all">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
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
          <p className="mt-3 text-[#888] max-w-lg mx-auto">Pure Ayurveda. Trusted Quality. — Authentic formulations backed by GMP-certified manufacturing and a commitment to lasting wellness.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
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

      {/* New Launches */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <NewLaunchCarousel />
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
              GMP-certified Ayurvedic medicines delivered to your door.
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
