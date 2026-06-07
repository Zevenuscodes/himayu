import { NextResponse } from 'next/server';

export async function GET() {
  const shop = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!;
  const clientId = process.env.SHOPIFY_CLIENT_ID!;
  const redirectUri = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/api/shopify/callback'
    : 'https://himayucare.com/api/shopify/callback';
  const scopes = 'read_orders,read_customers';

  const installUrl =
    `https://${shop}/admin/oauth/authorize` +
    `?client_id=${clientId}` +
    `&scope=${scopes}` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    `&state=himayuadmin`;

  return NextResponse.redirect(installUrl);
}
