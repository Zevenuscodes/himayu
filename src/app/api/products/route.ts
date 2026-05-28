import { getAllProducts } from '@/lib/shopify';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const products = await getAllProducts();
    return NextResponse.json(products);
  } catch {
    return NextResponse.json([], { status: 500 });
  }
}
