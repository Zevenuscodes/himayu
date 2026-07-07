import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabaseServer';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const handle = searchParams.get('handle');
  if (!handle) return NextResponse.json({ reviews: [] });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data } = await (getSupabaseAdmin() as any)
    .from('reviews')
    .select('id, name, rating, review_text, created_at')
    .eq('product_handle', handle)
    .eq('status', 'approved')
    .order('created_at', { ascending: false });

  return NextResponse.json({ reviews: data ?? [] });
}

export async function POST(req: NextRequest) {
  const { product_handle, product_name, name, rating, review_text } = await req.json();

  if (!product_handle || !name || !rating || !review_text) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }
  if (rating < 1 || rating > 5) {
    return NextResponse.json({ error: 'Rating must be between 1 and 5.' }, { status: 400 });
  }
  if (review_text.trim().length < 10) {
    return NextResponse.json({ error: 'Review must be at least 10 characters.' }, { status: 400 });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { error } = await (getSupabaseAdmin() as any).from('reviews').insert([{
    product_handle,
    product_name,
    name: name.trim(),
    phone: '',
    rating,
    review_text: review_text.trim(),
    verified_purchase: false,
    status: 'approved',
  }]);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ success: true });
}
