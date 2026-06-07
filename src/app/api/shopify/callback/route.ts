import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabaseServer';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get('code');
  const shop = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!;

  if (!code) {
    return NextResponse.json({ error: 'Missing code' }, { status: 400 });
  }

  // Exchange code for permanent access token
  const tokenRes = await fetch(`https://${shop}/admin/oauth/access_token`, { cache: 'no-store',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      client_id: process.env.SHOPIFY_CLIENT_ID,
      client_secret: process.env.SHOPIFY_CLIENT_SECRET,
      code,
    }),
  });

  const tokenData = await tokenRes.json();

  if (!tokenData.access_token) {
    return new NextResponse(
      `<html><body style="font-family:sans-serif;padding:40px">
        <h2>❌ OAuth Failed</h2>
        <pre>${JSON.stringify(tokenData, null, 2)}</pre>
        <p>Copy the error above and share with your developer.</p>
      </body></html>`,
      { headers: { 'Content-Type': 'text/html' } }
    );
  }

  // Store token in Supabase settings table
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  await (getSupabaseAdmin() as any)
    .from('settings')
    .upsert({ key: 'shopify_admin_token', value: tokenData.access_token });

  return new NextResponse(
    `<html><body style="font-family:sans-serif;padding:40px;max-width:600px">
      <h2>✅ Connected!</h2>
      <p>Shopify is now connected. Your access token:</p>
      <code style="background:#f0f0f0;padding:12px;display:block;border-radius:8px;word-break:break-all;margin:16px 0">
        ${tokenData.access_token}
      </code>
      <p><strong>Also add this to Vercel env vars as <code>SHOPIFY_ADMIN_ACCESS_TOKEN</code></strong></p>
      <a href="/admin/orders" style="background:#4a7c59;color:white;padding:12px 24px;border-radius:24px;text-decoration:none;display:inline-block;margin-top:16px">
        Go to Orders →
      </a>
    </body></html>`,
    { headers: { 'Content-Type': 'text/html' } }
  );
}
