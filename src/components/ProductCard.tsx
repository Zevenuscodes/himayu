import Link from 'next/link';
import Image from 'next/image';
import { ShopifyProduct } from '@/lib/shopify';
import { getProductInfo } from '@/lib/productDescriptions';

function normalizeTitle(title: string) {
  return title.replace(/phala?\s*trikadi/gi, 'Phalatrikadi');
}

export default function ProductCard({ product }: { product: ShopifyProduct }) {
  const image = product.images.edges[0]?.node;
  const price = parseFloat(product.priceRange.minVariantPrice.amount);
  const currency = product.priceRange.minVariantPrice.currencyCode;
  const info = getProductInfo(product.title);
  const shortDesc = product.description || info?.short || '';
  const isKwath = /kwath/i.test(product.title);
  const isArk = /ark/i.test(product.title);
  const displayTitle = normalizeTitle(product.title);
  const autoCategory = info?.category
    ?? (isKwath ? 'Ayurvedic Classical Decoction' : isArk ? 'Ayurvedic Ark Formulation' : null);

  return (
    <Link href={`/products/${product.handle}`} className="group block">
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#f0ebe0]">
        {image ? (
          <Image
            src={image.url}
            alt={image.altText ?? product.title}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-500 p-2"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[#bbb]">
            <span className="text-4xl">🌿</span>
          </div>
        )}
        {product.tags.includes('bestseller') && (
          <span className="absolute top-3 left-3 bg-[#4a7c59] text-white text-[11px] font-medium px-2.5 py-1 rounded-full">
            Bestseller
          </span>
        )}
        {info?.form && (
          <span className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm text-[#4a7c59] text-[10px] font-medium px-2 py-0.5 rounded-full">
            {info.form}
          </span>
        )}
      </div>
      <div className="mt-3 px-1">
        <p className="text-xs text-[#4a7c59] font-medium uppercase tracking-wider mb-1">
          {autoCategory ?? product.tags[0] ?? 'Ayurvedic'}
        </p>
        <h3 className="text-[#2c2c2c] font-medium text-sm leading-snug group-hover:text-[#4a7c59] transition-colors">
          {displayTitle}
        </h3>
        {shortDesc && (
          <p className="mt-1 text-[#888] text-xs leading-relaxed line-clamp-2">{shortDesc}</p>
        )}
        <div className="mt-2 flex items-center justify-between gap-2">
          <p className="text-[#2c2c2c] font-semibold text-sm">
            {currency} {price.toFixed(2)}
          </p>
          {info?.netWeight && (
            <span className="text-xs font-bold text-[#2c2c2c] bg-[#e8e0d0] px-2 py-0.5 rounded-full whitespace-nowrap">
              {info.netWeight}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
