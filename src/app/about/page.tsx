import type { Metadata } from 'next';
import Link from 'next/link';
import { Leaf, BadgeCheck, FlaskConical, Shield, Heart, MapPin, Award } from 'lucide-react';
import AboutVisual from '@/components/AboutVisual';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Himayu Care is a GMP-certified Ayurvedic healthcare company based in Dehradun. We deliver authentic classical Ayurvedic formulations made from pure Himalayan herbs across India.',
  keywords: 'about himayu care, ayurvedic company dehradun, GMP certified ayurvedic medicine, himalayan herbal company, authentic ayurveda india',
};

const values = [
  {
    icon: Leaf,
    title: '100% Natural',
    desc: 'Every formula uses pure Himalayan herbs — no synthetic additives, no fillers, no shortcuts.',
  },
  {
    icon: BadgeCheck,
    title: 'GMP Certified',
    desc: 'Manufactured under Good Manufacturing Practice standards, certified by the Ayurvedic authority of Uttarakhand.',
  },
  {
    icon: FlaskConical,
    title: 'Classical Formulas',
    desc: 'Recipes drawn directly from Charaka Samhita, Ashtanga Hridayam and other foundational Ayurvedic texts.',
  },
  {
    icon: Shield,
    title: '100% Ayurvedic',
    desc: 'Pure formulations that work with your body, rooted in classical Ayurvedic science.',
  },
  {
    icon: Heart,
    title: 'Patient-First',
    desc: 'Every product is formulated with the patient\'s well-being at the centre — not trends, not margins.',
  },
  {
    icon: Award,
    title: 'Trusted Heritage',
    desc: 'Rooted in a 5,000-year tradition of healing, adapted for the modern world without compromise.',
  },
];


export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fdfbf7]">

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#eef5ec] via-[#f5f0e8] to-[#eef5ec] pt-24 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#4a7c59]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 bg-[#c8a87a]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center py-12 lg:py-0">
          <div className="py-8 lg:py-20">
            <span className="inline-flex items-center gap-2 bg-[#4a7c59]/10 text-[#4a7c59] text-xs font-medium px-4 py-1.5 rounded-full mb-5">
              <Leaf className="w-3.5 h-3.5" /> Our Story
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1e1e1e] leading-[1.1] tracking-tight">
              Healing Rooted in<br />
              <span className="text-[#4a7c59]">Ancient Wisdom</span>
            </h1>
            <p className="mt-6 text-[#666] leading-relaxed max-w-lg text-base sm:text-lg">
              Himayu Care was born from a simple belief — that the purest medicines grow in the mountains,
              and that classical Ayurvedic knowledge deserves to be preserved, not diluted.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/products"
                className="px-7 py-3 bg-[#4a7c59] text-white rounded-full font-medium hover:bg-[#3a6347] transition-colors shadow-lg shadow-[#4a7c59]/20 text-sm"
              >
                Explore Medicines
              </Link>
              <a
                href="#manufacturing"
                className="px-7 py-3 border border-[#4a7c59] text-[#4a7c59] rounded-full font-medium hover:bg-[#4a7c59]/5 transition-colors text-sm"
              >
                Our Roots
              </a>
            </div>
          </div>
          <AboutVisual />
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#2c2c2c] mb-6">Our Mission</h2>
        <p className="text-[#555] leading-relaxed text-base sm:text-lg">
          We exist to make authentic, GMP-certified Ayurvedic medicine accessible to every Indian household.
          In a market flooded with compromised products, we hold the line — pure herbs, classical recipes,
          honest labels. No exaggerated claims. No hidden chemicals. Just the science of plants,
          distilled over five thousand years of practice.
        </p>
        <div className="mt-10 grid grid-cols-3 gap-6 max-w-md mx-auto">
          {[['2K+', 'Patients'], ['15+', 'Medicines'], ['7+', 'Years'], ].map(([num, label]) => (
            <div key={label} className="text-center">
              <p className="text-3xl font-bold text-[#4a7c59]">{num}</p>
              <p className="text-xs text-[#888] mt-1 tracking-wide uppercase">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#faf8f3] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2c2c2c]">What We Stand For</h2>
            <p className="mt-2 text-[#888] text-sm max-w-sm mx-auto">Six principles that guide every product we make.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-5 sm:p-6 border border-[#ede8dc] hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-[#4a7c59]/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#4a7c59]" />
                </div>
                <h3 className="font-semibold text-[#2c2c2c] mb-1.5 text-sm sm:text-base">{title}</h3>
                <p className="text-xs sm:text-sm text-[#888] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing credentials */}
      <section id="manufacturing" className="bg-[#2c2c2c] text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full mb-4">
                <MapPin className="w-3.5 h-3.5" /> Manufacturing Unit
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">Hans Herbals Pvt Ltd</h2>
              <p className="text-white/60 text-sm leading-relaxed">
                Plot No. 59, 60, 61, Sector-8A<br />
                SIDCUL, Haridwar — 248001 (UK)<br />
                Mfg. Licence No. UK.AY-362/2017
              </p>
              <p className="mt-4 text-white/50 text-xs leading-relaxed max-w-sm">
                Located in Uttarakhand's premier pharmaceutical manufacturing zone,
                our facility follows strict GMP guidelines under the Drugs & Cosmetics Act.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'GMP Certified', sub: 'Drugs & Cosmetics Act' },
                { label: 'Lic. UK.AY-362/2017', sub: 'Ayurvedic Authority, UK' },
                { label: 'SIDCUL Facility', sub: 'Haridwar, Uttarakhand' },
                { label: '100% Ayurvedic', sub: 'No synthetic additives' },
              ].map(({ label, sub }) => (
                <div key={label} className="bg-white/5 rounded-2xl p-4 border border-white/10">
                  <p className="text-sm font-semibold text-white">{label}</p>
                  <p className="text-xs text-white/40 mt-1">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#2c2c2c] mb-3">Ready to Begin Your Journey?</h2>
        <p className="text-[#888] text-sm mb-8 max-w-md mx-auto">
          Browse our full range of classical Ayurvedic formulations — each one crafted with care, backed by tradition.
        </p>
        <Link
          href="/products"
          className="inline-block px-10 py-3.5 bg-[#4a7c59] text-white rounded-full font-medium hover:bg-[#3a6347] transition-colors shadow-lg shadow-[#4a7c59]/20"
        >
          Shop All Medicines
        </Link>
      </section>

    </main>
  );
}
