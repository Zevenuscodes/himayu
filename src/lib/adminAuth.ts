import { createHmac, timingSafeEqual } from 'crypto';

const SECRET = () => process.env.ADMIN_PASSWORD!;

export function generateSessionToken(): string {
  const payload = `${Date.now()}.${Math.random().toString(36).slice(2)}`;
  const sig = createHmac('sha256', SECRET()).update(payload).digest('hex');
  return `${payload}.${sig}`;
}

export function verifySessionToken(token: string): boolean {
  try {
    const lastDot = token.lastIndexOf('.');
    if (lastDot === -1) return false;
    const payload = token.slice(0, lastDot);
    const sig = token.slice(lastDot + 1);
    const expected = createHmac('sha256', SECRET()).update(payload).digest('hex');
    return timingSafeEqual(Buffer.from(sig, 'hex'), Buffer.from(expected, 'hex'));
  } catch {
    return false;
  }
}
