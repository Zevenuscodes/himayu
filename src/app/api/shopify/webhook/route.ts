import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabaseServer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const customerName = body.customer
      ? `${body.customer.first_name ?? ''} ${body.customer.last_name ?? ''}`.trim()
      : body.shipping_address?.name ?? 'Guest';

    const customerPhone =
      body.customer?.phone ||
      body.shipping_address?.phone ||
      null;

    const lineItems = (body.line_items ?? []).map((item: {
      title: string; variant_title?: string; quantity: number; price: string;
    }) => ({
      title: item.title,
      variant_title: item.variant_title ?? null,
      quantity: item.quantity,
      price: item.price,
    }));

    const record = {
      shopify_id: body.id,
      order_number: body.order_number,
      created_at: body.created_at,
      financial_status: body.financial_status ?? null,
      fulfillment_status: body.fulfillment_status ?? 'unfulfilled',
      total_price: body.total_price,
      currency: body.currency ?? 'INR',
      customer_name: customerName,
      customer_email: body.customer?.email ?? null,
      customer_phone: customerPhone,
      shipping_city: body.shipping_address?.city ?? null,
      shipping_province: body.shipping_address?.province ?? null,
      line_items: lineItems,
      updated_at: new Date().toISOString(),
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { error } = await (getSupabaseAdmin() as any)
      .from('orders')
      .upsert(record, { onConflict: 'shopify_id' });

    if (error) throw error;

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error('Webhook error:', err);
    return NextResponse.json({ error: 'Webhook failed' }, { status: 500 });
  }
}
