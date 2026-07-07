import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabaseServer';

const SHOP = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!;
const API_VERSION = '2026-04';

async function getAdminToken(): Promise<string> {
  const envToken = process.env.SHOPIFY_ADMIN_ACCESS_TOKEN;
  if (envToken) return envToken;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data } = await (getSupabaseAdmin() as any)
    .from('settings').select('value').eq('key', 'shopify_admin_token').single();
  return data?.value ?? '';
}

async function verifyPurchase(phone: string, productHandle: string): Promise<{ verified: boolean; orderId: string }> {
  try {
    const token = await getAdminToken();
    if (!token) return { verified: false, orderId: '' };

    const digits = phone.replace(/\D/g, '');
    const formatted = digits.length === 10 ? `+91${digits}` : `+${digits}`;

    const res = await fetch(
      `https://${SHOP}/admin/api/${API_VERSION}/orders.json?status=any&limit=50`,
      { headers: { 'X-Shopify-Access-Token': token } }
    );
    if (!res.ok) return { verified: false, orderId: '' };

    const { orders } = await res.json();
    for (const order of orders) {
      const orderPhone = (order.customer?.phone || order.shipping_address?.phone || '').replace(/\D/g, '');
      const inputPhone = formatted.replace(/\D/g, '');
      if (!orderPhone || !orderPhone.endsWith(inputPhone.slice(-10))) continue;

      const hasProduct = order.line_items?.some((item: { handle?: string; sku?: string; title?: string }) =>
        item.title?.toLowerCase().includes(productHandle.replace(/-/g, ' ').toLowerCase()) ||
        productHandle.includes((item.title || '').toLowerCase().replace(/\s+/g, '-'))
      );
      if (hasProduct) return { verified: true, orderId: String(order.id) };
    }
    return { verified: false, orderId: '' };
  } catch {
    return { verified: false, orderId: '' };
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const handle = searchParams.get('handle');
  if (!handle) return NextResponse.json({ reviews: [] });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data } = await (getSupabaseAdmin() as any)
    .from('reviews')
    .select('id, name, rating, review_text, verified_purchase, created_at')
    .eq('product_handle', handle)
    .eq('status', 'approved')
    .order('created_at', { ascending: false });

  return NextResponse.json({ reviews: data ?? [] });
}

export async function POST(req: NextRequest) {
  const { product_handle, product_name, name, phone, rating, review_text } = await req.json();

  if (!product_handle || !name || !phone || !rating || !review_text) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }
  if (rating < 1 || rating > 5) {
    return NextResponse.json({ error: 'Rating must be between 1 and 5.' }, { status: 400 });
  }
  if (review_text.trim().length < 10) {
    return NextResponse.json({ error: 'Review must be at least 10 characters.' }, { status: 400 });
  }

  const { verified, orderId } = await verifyPurchase(phone, product_handle);

  if (!verified) {
    return NextResponse.json(
      { error: 'We could not verify a purchase with this phone number for this product. Only verified buyers can leave reviews.' },
      { status: 403 }
    );
  }

  // Check for duplicate review from same phone for same product
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: existing } = await (getSupabaseAdmin() as any)
    .from('reviews')
    .select('id')
    .eq('product_handle', product_handle)
    .eq('phone', phone.replace(/\D/g, ''))
    .single();

  if (existing) {
    return NextResponse.json({ error: 'You have already submitted a review for this product.' }, { status: 409 });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { error } = await (getSupabaseAdmin() as any).from('reviews').insert([{
    product_handle,
    product_name,
    name: name.trim(),
    phone: phone.replace(/\D/g, ''),
    rating,
    review_text: review_text.trim(),
    verified_purchase: true,
    order_id: orderId,
    status: 'pending',
  }]);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ success: true });
}
