'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Search, X, Loader2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { ShopifyProduct } from '@/lib/shopify';
import { getProductInfo, productMatchesQuery } from '@/lib/productDescriptions';

export default function SearchOverlay() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Fetch products once when overlay opens
  const fetchProducts = useCallback(async () => {
    if (products.length > 0) return;
    setLoading(true);
    try {
      const res = await fetch('/api/products');
      const data = await res.json();
      setProducts(data);
    } finally {
      setLoading(false);
    }
  }, [products.length]);

  useEffect(() => {
    if (open) {
      fetchProducts();
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [open, fetchProducts]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const results = query.trim().length < 1
    ? products.slice(0, 6)
    : products.filter((p) =>
        productMatchesQuery(p.title, query) ||
        p.description?.toLowerCase().includes(query.toLowerCase()) ||
        getProductInfo(p.title)?.short?.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <>
      {/* Search icon button */}
      <button
        onClick={() => setOpen(true)}
        className="p-2 hover:text-[#4a7c59] transition-colors text-[#2c2c2c]"
        aria-label="Search"
      >
        <Search className="w-5 h-5" />
      </button>

      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 z-[100] flex flex-col">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Panel */}
          <div className="relative z-10 bg-white w-full shadow-2xl">
            {/* Input row */}
            <div className="max-w-3xl mx-auto px-4 sm:px-6 flex items-center gap-3 py-4 border-b border-[#ede8dc]">
              <Search className="w-5 h-5 text-[#4a7c59] flex-shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search medicines, ingredients…"
                className="flex-1 text-base text-[#2c2c2c] bg-transparent outline-none placeholder:text-[#bbb]"
              />
              {loading && <Loader2 className="w-4 h-4 text-[#aaa] animate-spin flex-shrink-0" />}
              <button
                onClick={() => setOpen(false)}
                className="p-1 text-[#aaa] hover:text-[#2c2c2c] transition-colors flex-shrink-0"
                aria-label="Close search"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Results */}
            <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 max-h-[70vh] overflow-y-auto">
              {!loading && results.length === 0 && query.length > 0 && (
                <p className="text-sm text-[#aaa] text-center py-8">
                  No medicines found for &quot;{query}&quot;
                </p>
              )}

              {results.length > 0 && (
                <>
                  {query.trim().length < 1 && (
                    <p className="text-xs text-[#aaa] font-medium uppercase tracking-wider mb-3">All Medicines</p>
                  )}
                  <ul className="divide-y divide-[#f0ebe0]">
                    {results.map((product) => {
                      const image = product.images.edges[0]?.node;
                      const info = getProductInfo(product.title);
                      const price = parseFloat(product.priceRange.minVariantPrice.amount);
                      const currency = product.priceRange.minVariantPrice.currencyCode;

                      return (
                        <li key={product.id}>
                          <Link
                            href={`/products/${product.handle}`}
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-4 py-3 hover:bg-[#faf8f3] -mx-2 px-2 rounded-xl transition-colors"
                          >
                            <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-[#f0ebe0] flex-shrink-0">
                              {image ? (
                                <Image
                                  src={image.url}
                                  alt={product.title}
                                  fill
                                  className="object-contain p-1"
                                  sizes="48px"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center text-xl">🌿</div>
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-[#2c2c2c] truncate">{product.title}</p>
                              {info?.short && (
                                <p className="text-xs text-[#888] truncate mt-0.5">{info.short}</p>
                              )}
                            </div>
                            <div className="text-right flex-shrink-0">
                              <p className="text-sm font-semibold text-[#2c2c2c]">{currency} {price.toFixed(2)}</p>
                              {info?.netWeight && (
                                <p className="text-xs text-[#aaa] mt-0.5">{info.netWeight}</p>
                              )}
                            </div>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </>
              )}

              {/* Footer hint */}
              <p className="text-xs text-center text-[#ccc] pt-4 pb-2">
                Press <kbd className="bg-[#f0ebe0] text-[#888] px-1.5 py-0.5 rounded text-[10px] font-mono">Esc</kbd> to close
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
