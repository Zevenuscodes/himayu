// Uses Web Crypto API — works in both Node.js API routes and Edge Runtime (middleware)
const PAYLOAD = 'himayu-admin-v1';

async function hmacHex(secret: string, message: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(message));
  return Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

export async function generateSessionToken(): Promise<string> {
  return hmacHex(process.env.ADMIN_PASSWORD ?? '', PAYLOAD);
}

export async function verifySessionToken(token: string): Promise<boolean> {
  if (!token || !process.env.ADMIN_PASSWORD) return false;
  try {
    const expected = await hmacHex(process.env.ADMIN_PASSWORD, PAYLOAD);
    if (token.length !== expected.length) return false;
    let diff = 0;
    for (let i = 0; i < token.length; i++) {
      diff |= token.charCodeAt(i) ^ expected.charCodeAt(i);
    }
    return diff === 0;
  } catch {
    return false;
  }
}
