const SHOPIFY_STORE = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!;
const SHOPIFY_ADMIN_TOKEN = process.env.SHOPIFY_ADMIN_ACCESS_TOKEN!;
const API_VERSION = '2024-01';

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
    zip: string;
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

export async function getOrders(limit = 50, status = 'any'): Promise<ShopifyOrder[]> {
  const res = await fetch(
    `https://${SHOPIFY_STORE}/admin/api/${API_VERSION}/orders.json?status=${status}&limit=${limit}&order=created_at+desc`,
    {
      headers: {
        'X-Shopify-Access-Token': SHOPIFY_ADMIN_TOKEN,
        'Content-Type': 'application/json',
      },
      next: { revalidate: 30 },
    }
  );

  if (!res.ok) throw new Error(`Shopify Admin API error: ${res.status}`);
  const data = await res.json();
  return data.orders;
}
