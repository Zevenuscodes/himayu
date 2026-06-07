import { NextRequest, NextResponse } from 'next/server';
import { verifySessionToken } from '@/lib/adminAuth';
import { getSupabaseAdmin } from '@/lib/supabaseServer';

const SHOP = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!;
const API_VERSION = '2026-04';

async function getAdminToken(): Promise<string> {
  const envToken = process.env.SHOPIFY_ADMIN_ACCESS_TOKEN;
  if (envToken) return envToken;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data } = await (getSupabaseAdmin() as any)
    .from('settings')
    .select('value')
    .eq('key', 'shopify_admin_token')
    .single();
  return data?.value ?? '';
}

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const token = req.cookies.get('admin_auth')?.value ?? '';
  if (!verifySessionToken(token)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;
  const adminToken = await getAdminToken();

  if (!adminToken) {
    return NextResponse.json({ error: 'Shopify not connected' }, { status: 500 });
  }

  // Step 1: Get fulfillment orders for this order
  const foRes = await fetch(
    `https://${SHOP}/admin/api/${API_VERSION}/orders/${id}/fulfillment_orders.json`,
    { headers: { 'X-Shopify-Access-Token': adminToken } }
  );

  if (!foRes.ok) {
    return NextResponse.json({ error: 'Failed to get fulfillment orders' }, { status: 500 });
  }

  const foData = await foRes.json();
  const fulfillmentOrders = foData.fulfillment_orders ?? [];

  // Only fulfill open fulfillment orders
  const openFOs = fulfillmentOrders.filter((fo: { status: string }) => fo.status === 'open');

  if (openFOs.length === 0) {
    return NextResponse.json({ error: 'Order is already fulfilled' }, { status: 400 });
  }

  // Step 2: Create fulfillment
  const fulfillRes = await fetch(
    `https://${SHOP}/admin/api/${API_VERSION}/fulfillments.json`,
    {
      method: 'POST',
      headers: {
        'X-Shopify-Access-Token': adminToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fulfillment: {
          line_items_by_fulfillment_order: openFOs.map((fo: { id: number }) => ({
            fulfillment_order_id: fo.id,
          })),
          notify_customer: true,
        },
      }),
    }
  );

  if (!fulfillRes.ok) {
    const err = await fulfillRes.json();
    return NextResponse.json({ error: JSON.stringify(err) }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
