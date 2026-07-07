import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Leaf, CheckCircle2, FlaskConical, ArrowRight, Shield, RotateCcw } from 'lucide-react';
import { medicinePages, getMedicinePage } from '@/lib/medicinePages';
import MedicineFAQ from '@/components/MedicineFAQ';
import ReviewSection from '@/components/ReviewSection';

export const revalidate = 3600;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return medicinePages.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const med = getMedicinePage(slug);
  if (!med) return {};
  const hindiLabel = med.hindiName ? ` | ${med.hindiName}` : '';
  const title = `${med.name}${hindiLabel} — Benefits, Uses & Price | Himayu Care`;
  const desc = `${med.description} Buy ${med.name} online at best price. ${med.hindiName ? `${med.hindiName} के फायदे, उपयोग और कीमत।` : ''} GMP certified, free doctor consultation on orders above ₹2000.`;
  return {
    title,
    description: desc,
    keywords: [...med.keywords, `${med.name.toLowerCase()} benefits`, `${med.name.toLowerCase()} price`, `${med.name.toLowerCase()} ke fayde`, med.hindiName ?? ''].join(', '),
    openGraph: {
      title,
      description: desc,
      type: 'website',
    },
    alternates: {
      canonical: `/medicines/${med.slug}`,
    },
  };
}

export default async function MedicinePage({ params }: Props) {
  const { slug } = await params;
  const med = getMedicinePage(slug);
  if (!med) notFound();

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: med.name,
    description: med.description,
    brand: { '@type': 'Brand', name: 'Himayu Care' },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: 'Himayu Care' },
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: med.faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  const perks = [
    { icon: RotateCcw, label: '30-day easy returns' },
    { icon: Shield, label: '100% authentic & GMP certified' },
  ];

  return (
    <main className="min-h-screen pt-24 bg-[#fdfbf7]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#f0ebe0] to-[#fdfbf7] border-b border-[#ede8dc]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 bg-[#4a7c59]/10 text-[#4a7c59] text-xs font-medium px-3 py-1 rounded-full">
              <Leaf className="w-3 h-3" /> {med.category}
            </span>
            <span className="inline-flex items-center bg-[#c8a87a]/20 text-[#8a6840] text-xs font-medium px-3 py-1 rounded-full">
              {med.form}
            </span>
            <span className="inline-flex items-center bg-[#2c2c2c] text-white text-xs font-bold px-3 py-1 rounded-full">
              {med.netWeight}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2c2c2c] leading-tight mb-2">
            {med.name}
          </h1>
          {med.hindiName && (
            <p className="text-lg text-[#4a7c59] font-medium mb-3">{med.hindiName}</p>
          )}
          <p className="text-base sm:text-lg text-[#666] max-w-2xl mb-8">{med.tagline}</p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href={`/products/${med.shopifyHandle}`}
              className="inline-flex items-center gap-2 bg-[#4a7c59] text-white px-7 py-3.5 rounded-full font-semibold hover:bg-[#3a6347] transition-colors text-sm"
            >
              Buy Now <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 border border-[#4a7c59] text-[#4a7c59] px-7 py-3.5 rounded-full font-medium hover:bg-[#4a7c59]/5 transition-colors text-sm"
            >
              Browse All Medicines
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Description */}
        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-[#2c2c2c] mb-5">About {med.name}</h2>
          <div className="prose prose-sm max-w-none text-[#555] leading-relaxed space-y-4">
            {med.longDescription.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>

        {/* Benefits + Dosage side by side */}
        <div className="grid sm:grid-cols-2 gap-8">
          {/* Benefits */}
          <section>
            <h2 className="text-xl font-bold text-[#2c2c2c] mb-5">Useful in / Benefits</h2>
            <ul className="space-y-3">
              {med.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-[#555]">
                  <CheckCircle2 className="w-4 h-4 text-[#4a7c59] flex-shrink-0 mt-0.5" />
                  {b}
                </li>
              ))}
            </ul>
          </section>

          {/* Dosage */}
          <section>
            <h2 className="text-xl font-bold text-[#2c2c2c] mb-5">Dosage & How to Use</h2>
            <div className="bg-[#4a7c59]/5 border border-[#4a7c59]/20 rounded-2xl p-5 text-sm text-[#555] leading-relaxed">
              {med.dosage}
            </div>
            <div className="mt-4 space-y-2">
              {perks.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-xs text-[#888]">
                  <Icon className="w-3.5 h-3.5 text-[#4a7c59]" />
                  {label}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Ingredients */}
        {med.ingredients.length > 0 && (
          <section>
            <div className="flex items-center gap-2 mb-6">
              <FlaskConical className="w-5 h-5 text-[#4a7c59]" />
              <h2 className="text-xl font-bold text-[#2c2c2c]">Ingredients</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {med.ingredients.map((ing, i) => (
                <div key={i} className="flex items-center justify-between bg-white border border-[#ede8dc] rounded-xl px-4 py-3 text-sm">
                  <div>
                    <p className="font-medium text-[#2c2c2c]">{ing.name}</p>
                    {ing.latin && <p className="text-xs text-[#4a7c59] italic mt-0.5">{ing.latin}</p>}
                  </div>
                  {ing.quantity && <span className="text-xs text-[#888] font-medium ml-4 flex-shrink-0">{ing.quantity}</span>}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* FAQ */}
        {med.faqs.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-[#2c2c2c] mb-6">Frequently Asked Questions</h2>
            <MedicineFAQ faqs={med.faqs} />
          </section>
        )}

        {/* Reviews */}
        <ReviewSection productHandle={med.shopifyHandle} productName={med.name} />

        {/* CTA */}
        <section className="bg-[#4a7c59]/5 border border-[#4a7c59]/20 rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-[#2c2c2c] mb-2">Ready to Try {med.name}?</h2>
          <p className="text-sm text-[#666] mb-6">GMP-certified, authentic Ayurvedic formulation. Ships across India.</p>
          <Link
            href={`/products/${med.shopifyHandle}`}
            className="inline-flex items-center gap-2 bg-[#4a7c59] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#3a6347] transition-colors text-sm"
          >
            Buy {med.name} <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

      </div>
    </main>
  );
}
