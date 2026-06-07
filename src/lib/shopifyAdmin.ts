const SHOPIFY_STORE = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!;
const API_VERSION = '2026-04';

export interface ShopifyOrder {
  id: number;
  order_number: number;
  created_at: string;
  financial_status: string;
  fulfillment_status: string | null;
  total_price: string;
  currency: string;
  customer: {
    first_name: string;
    last_name: string;
    email: string;
    phone: string | null;
  } | null;
  shipping_address: {
    name: string;
    address1: string;
    city: string;
    province: string;
    phone: string | null;
  } | null;
  line_items: {
    id: number;
    title: string;
    quantity: number;
    price: string;
    variant_title: string | null;
  }[];
}

export async function getOrders(token: string, limit = 100): Promise<ShopifyOrder[]> {
  const res = await fetch(
    `https://${SHOPIFY_STORE}/admin/api/${API_VERSION}/orders.json?status=any&limit=${limit}&order=created_at+desc`,
    {
      headers: {
        'X-Shopify-Access-Token': token,
        'Content-Type': 'application/json',
      },
      next: { revalidate: 30 },
    }
  );

  if (!res.ok) throw new Error(`Shopify API error ${res.status}: ${await res.text()}`);
  const data = await res.json();
  return data.orders ?? [];
}
