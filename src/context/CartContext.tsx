'use client';

import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { createCart, addToCart, removeFromCart, getCart, ShopifyCart } from '@/lib/shopify';

interface CartContextType {
  cart: ShopifyCart | null;
  cartCount: number;
  addItem: (variantId: string, quantity?: number) => Promise<void>;
  removeItem: (lineId: string) => Promise<void>;
  checkoutUrl: string | null;
}

const CartContext = createContext<CartContextType>({
  cart: null,
  cartCount: 0,
  addItem: async () => {},
  removeItem: async () => {},
  checkoutUrl: null,
});

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<ShopifyCart | null>(null);

  const getOrCreateCartId = useCallback(async (): Promise<string> => {
    const stored = localStorage.getItem('shopify_cart_id');
    if (stored) {
      try {
        const existing = await getCart(stored);
        if (existing) return existing.id;
      } catch {
        // cart expired, create new
      }
    }
    const newCart = await createCart();
    localStorage.setItem('shopify_cart_id', newCart.id);
    return newCart.id;
  }, []);

  useEffect(() => {
    const cartId = localStorage.getItem('shopify_cart_id');
    if (cartId) {
      getCart(cartId).then(setCart).catch(() => {});
    }
  }, []);

  const addItem = useCallback(async (variantId: string, quantity = 1) => {
    const cartId = await getOrCreateCartId();
    const updated = await addToCart(cartId, variantId, quantity);
    setCart(updated);
  }, [getOrCreateCartId]);

  const removeItem = useCallback(async (lineId: string) => {
    if (!cart) return;
    const updated = await removeFromCart(cart.id, [lineId]);
    setCart(updated);
  }, [cart]);

  const cartCount = cart?.lines.edges.reduce((sum, { node }) => sum + node.quantity, 0) ?? 0;

  return (
    <CartContext.Provider value={{ cart, cartCount, addItem, removeItem, checkoutUrl: cart?.checkoutUrl ?? null }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
