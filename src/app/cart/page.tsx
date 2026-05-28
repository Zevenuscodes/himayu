'use client';

import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';

export default function CartPage() {
  const { cart, removeItem, checkoutUrl } = useCart();
  const lines = cart?.lines.edges.map((e) => e.node) ?? [];
  const total = cart?.cost.totalAmount;

  if (lines.length === 0) {
    return (
      <main className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center py-20">
          <div className="w-20 h-20 bg-[#f0ebe0] rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-8 h-8 text-[#bbb]" />
          </div>
          <h2 className="text-2xl font-bold text-[#2c2c2c] mb-2">Your cart is empty</h2>
          <p className="text-[#888] text-sm mb-8">Looks like you haven&apos;t added anything yet.</p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#4a7c59] text-white rounded-full font-medium hover:bg-[#3a6347] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-3xl font-bold text-[#2c2c2c]">Your Cart</h1>
          <Link href="/products" className="text-sm text-[#4a7c59] hover:underline flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> Continue Shopping
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-10">
          {/* Line items */}
          <div className="lg:col-span-2 space-y-4">
            {lines.map((line) => {
              const img = line.merchandise.product.images.edges[0]?.node;
              const itemTotal = (parseFloat(line.merchandise.price.amount) * line.quantity).toFixed(2);
              return (
                <div key={line.id} className="flex gap-4 bg-[#faf8f3] rounded-2xl p-4 border border-[#ede8dc]">
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-[#f0ebe0] flex-shrink-0">
                    {img ? (
                      <Image src={img.url} alt={img.altText ?? line.merchandise.product.title} fill className="object-cover" sizes="80px" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-2xl">🌿</div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-[#2c2c2c] text-sm leading-snug">{line.merchandise.product.title}</p>
                    {line.merchandise.title !== 'Default Title' && (
                      <p className="text-xs text-[#888] mt-0.5">{line.merchandise.title}</p>
                    )}
                    <p className="text-xs text-[#888] mt-1">Qty: {line.quantity}</p>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <button
                      onClick={() => removeItem(line.id)}
                      className="text-[#ccc] hover:text-red-400 transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <p className="font-semibold text-[#2c2c2c] text-sm">
                      {line.merchandise.price.currencyCode} {itemTotal}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-[#faf8f3] rounded-2xl p-6 border border-[#ede8dc] sticky top-24">
              <h2 className="font-bold text-[#2c2c2c] mb-6">Order Summary</h2>
              <div className="space-y-3 text-sm text-[#666]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium text-[#2c2c2c]">
                    {total?.currencyCode} {parseFloat(total?.amount ?? '0').toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-[#4a7c59] font-medium">Calculated at checkout</span>
                </div>
              </div>
              <div className="border-t border-[#ede8dc] mt-4 pt-4 flex justify-between font-bold text-[#2c2c2c]">
                <span>Total</span>
                <span>{total?.currencyCode} {parseFloat(total?.amount ?? '0').toFixed(2)}</span>
              </div>
              {checkoutUrl ? (
                <a
                  href={checkoutUrl}
                  className="mt-6 w-full block text-center py-4 bg-[#4a7c59] text-white rounded-full font-medium hover:bg-[#3a6347] transition-colors"
                >
                  Checkout
                </a>
              ) : (
                <button
                  disabled
                  className="mt-6 w-full block text-center py-4 bg-[#4a7c59]/40 text-white rounded-full font-medium cursor-not-allowed"
                >
                  Preparing checkout…
                </button>
              )}
              <p className="text-xs text-center text-[#aaa] mt-4">Secure checkout powered by Shopify</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
