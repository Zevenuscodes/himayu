'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { ShoppingBag, Check, Minus, Plus, ShoppingCart } from 'lucide-react';

interface Props {
  variantId: string | undefined;
  available: boolean;
}

export default function AddToCartButton({ variantId, available }: Props) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(false);

  if (!available) {
    return (
      <button disabled className="w-full py-4 rounded-full bg-[#e0d8cc] text-[#aaa] font-medium cursor-not-allowed">
        Out of Stock
      </button>
    );
  }

  const handleAdd = async () => {
    if (!variantId || loading) return;
    setLoading(true);
    try {
      await addItem(variantId, quantity);
      setAdded(true);
      setTimeout(() => { setAdded(false); setQuantity(1); }, 2000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 items-stretch">
      {/* Quantity selector */}
      <div className="flex items-center justify-center border border-[#e0d8cc] rounded-full overflow-hidden bg-[#faf8f3]">
        <button
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          className="px-4 py-3 text-[#4a7c59] hover:bg-[#4a7c59]/5 transition-colors"
          aria-label="Decrease quantity"
        >
          <Minus className="w-3.5 h-3.5" />
        </button>
        <span className="w-10 text-center text-sm font-semibold text-[#2c2c2c]">{quantity}</span>
        <button
          onClick={() => setQuantity((q) => q + 1)}
          className="px-4 py-3 text-[#4a7c59] hover:bg-[#4a7c59]/5 transition-colors"
          aria-label="Increase quantity"
        >
          <Plus className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Add to cart */}
      <button
        onClick={handleAdd}
        disabled={loading}
        className="flex-1 py-4 rounded-full bg-[#4a7c59] text-white font-medium flex items-center justify-center gap-2 hover:bg-[#3a6347] transition-colors disabled:opacity-70"
      >
        {added ? (
          <><Check className="w-4 h-4" /> Added</>
        ) : loading ? (
          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <><ShoppingBag className="w-4 h-4" /> Add to Cart</>
        )}
      </button>

      {/* View cart */}
      <Link
        href="/cart"
        className="flex-1 py-4 rounded-full border-2 border-[#4a7c59] text-[#4a7c59] font-medium flex items-center justify-center gap-2 hover:bg-[#4a7c59]/5 transition-colors whitespace-nowrap"
      >
        <ShoppingCart className="w-4 h-4" /> View Cart
      </Link>
    </div>
  );
}
