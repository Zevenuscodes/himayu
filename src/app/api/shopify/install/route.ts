import { NextResponse } from 'next/server';

export async function GET() {
  const shop = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!;
  const clientId = process.env.SHOPIFY_CLIENT_ID!;
  const redirectUri = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/api/shopify/callback'
    : 'https://himayucare.com/api/shopify/callback';
  const scopes = 'read_orders,read_customers,write_fulfillments,read_merchant_managed_fulfillment_orders,write_merchant_managed_fulfillment_orders';

  const state = crypto.randomUUID();

  const installUrl =
    `https://${shop}/admin/oauth/authorize` +
    `?client_id=${clientId}` +
    `&scope=${scopes}` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    `&state=${state}`;

  return NextResponse.redirect(installUrl);
}
