import type { Metadata } from 'next';
import { getProductByHandle } from '@/lib/shopify';
import { getProductInfo } from '@/lib/productDescriptions';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import ProductActions from '@/components/ProductActions';
import { Leaf, Truck, RotateCcw, Shield, CheckCircle2, FlaskConical } from 'lucide-react';

export const revalidate = 60;

interface Props {
  params: Promise<{ handle: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { handle } = await params;
  try {
    const product = await getProductByHandle(handle);
    if (!product) return {};
    const info = getProductInfo(product.title);
    const image = product.images.edges[0]?.node.url;
    return {
      title: product.title,
      description: product.description || info?.short || `Buy ${product.title} — GMP-certified Ayurvedic medicine from Himayu Care.`,
      openGraph: {
        title: product.title,
        description: product.description || info?.short || '',
        images: image ? [{ url: image }] : [],
        type: 'website',
      },
    };
  } catch {
    return {};
  }
}

export default async function ProductPage({ params }: Props) {
  const { handle } = await params;

  let product;
  try {
    product = await getProductByHandle(handle);
  } catch {
    notFound();
  }

  if (!product) notFound();

  const images = product.images.edges.map((e) => e.node);
  const variants = product.variants.edges.map((e) => e.node);
  const price = parseFloat(product.priceRange.minVariantPrice.amount);
  const currency = product.priceRange.minVariantPrice.currencyCode;
  const info = getProductInfo(product.title);
  const description = product.description || info?.description || '';

  const perks = [
    { icon: Truck, label: 'Free shipping over ₹999' },
    { icon: RotateCcw, label: '30-day easy returns' },
    { icon: Shield, label: '100% authentic & GMP certified' },
  ];

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: description,
    image: images.map((i) => i.url),
    brand: { '@type': 'Brand', name: 'Himayu Care' },
    offers: {
      '@type': 'Offer',
      priceCurrency: currency,
      price: price.toFixed(2),
      availability: variants[0]?.availableForSale
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      seller: { '@type': 'Organization', name: 'Himayu Care' },
    },
  };

  return (
    <main className="min-h-screen pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">

          {/* Images */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#f0ebe0]">
              {images[0] ? (
                <Image
                  src={images[0].url}
                  alt={images[0].altText ?? product.title}
                  fill
                  className="object-contain p-4"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-7xl">🌿</div>
              )}
            </div>
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {images.slice(1).map((img, i) => (
                  <div key={i} className="relative aspect-square rounded-xl overflow-hidden bg-[#f0ebe0]">
                    <Image src={img.url} alt={img.altText ?? `${product.title} ${i + 2}`} fill className="object-contain p-1" sizes="25vw" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <span className="inline-flex items-center gap-1.5 bg-[#4a7c59]/10 text-[#4a7c59] text-xs font-medium px-3 py-1 rounded-full">
                <Leaf className="w-3 h-3" /> {product.tags[0] ?? 'Ayurvedic'}
              </span>
              {info?.form && (
                <span className="inline-flex items-center gap-1.5 bg-[#c8a87a]/15 text-[#8a6840] text-xs font-medium px-3 py-1 rounded-full">
                  {info.form}
                </span>
              )}
              {info?.netWeight && (
                <span className="inline-flex items-center bg-[#2c2c2c] text-white text-sm font-bold px-3 py-1 rounded-full tracking-wide">
                  {info.netWeight}
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2c2c2c] leading-tight">{product.title}</h1>

            <div className="mt-3 sm:mt-4">
              <span className="text-xl sm:text-2xl font-bold text-[#2c2c2c]">{currency} {price.toFixed(2)}</span>
            </div>

            {description && (
              <div className="mt-5 space-y-3">
                {description.split('\n\n').map((para, i) => (
                  <p key={i} className="text-[#666] leading-relaxed text-sm">{para}</p>
                ))}
              </div>
            )}

            {/* Benefits */}
            {info?.benefits && info.benefits.length > 0 && (
              <div className="mt-6">
                <p className="text-sm font-semibold text-[#2c2c2c] mb-3">Useful in / Benefits</p>
                <ul className="space-y-2">
                  {info.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-[#555]">
                      <CheckCircle2 className="w-4 h-4 text-[#4a7c59] flex-shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Variants + Add to Cart */}
            <div className="mt-7">
              <ProductActions variants={variants} options={product.options} />
            </div>

            {/* Perks */}
            <div className="mt-7 pt-7 border-t border-[#ede8dc] space-y-3">
              {perks.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 text-sm text-[#666]">
                  <Icon className="w-4 h-4 text-[#4a7c59] flex-shrink-0" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ingredients — full width below */}
        {info?.ingredients && info.ingredients.length > 0 && (
          <div className="mt-16 border-t border-[#ede8dc] pt-12">
            <div className="flex items-center gap-2 mb-6">
              <FlaskConical className="w-5 h-5 text-[#4a7c59]" />
              <h2 className="text-xl font-bold text-[#2c2c2c]">Ingredients</h2>
              <span className="text-xs text-[#aaa] ml-1">per {info.netWeight?.includes('ml') ? '10ml' : '100g'}</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {info.ingredients.map((ing, i) => (
                <div key={i} className="flex items-center justify-between bg-[#faf8f3] border border-[#ede8dc] rounded-xl px-4 py-3 text-sm">
                  <div>
                    <p className="font-medium text-[#2c2c2c]">{ing.name}</p>
                    {ing.latin && <p className="text-xs text-[#4a7c59] italic mt-0.5">{ing.latin}</p>}
                  </div>
                  {ing.quantity && <span className="text-xs text-[#888] font-medium ml-4 flex-shrink-0">{ing.quantity}</span>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tags */}
        {product.tags.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <span key={tag} className="text-xs bg-[#f0ebe0] text-[#888] px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
