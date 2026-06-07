import { NextRequest, NextResponse } from 'next/server';
import { timingSafeEqual } from 'crypto';
import { generateSessionToken } from '@/lib/adminAuth';
import { getSupabaseAdmin } from '@/lib/supabaseServer';

const MAX_ATTEMPTS = 5;
const WINDOW_MINUTES = 15;

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';

  // Rate limit check
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { count } = await (getSupabaseAdmin() as any)
      .from('login_attempts')
      .select('*', { count: 'exact', head: true })
      .eq('ip', ip)
      .eq('success', false)
      .gte('created_at', new Date(Date.now() - WINDOW_MINUTES * 60 * 1000).toISOString());

    if ((count ?? 0) >= MAX_ATTEMPTS) {
      return NextResponse.json(
        { error: `Too many failed attempts. Try again in ${WINDOW_MINUTES} minutes.` },
        { status: 429 }
      );
    }
  } catch { /* if rate limit check fails, allow login */ }

  const { password } = await req.json();

  const adminPassword = process.env.ADMIN_PASSWORD ?? '';
  const isCorrect =
    password?.length === adminPassword.length &&
    timingSafeEqual(Buffer.from(password), Buffer.from(adminPassword));

  // Log attempt
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await (getSupabaseAdmin() as any).from('login_attempts').insert([{ ip, success: isCorrect }]);
  } catch { /* non-critical */ }

  if (!isCorrect) {
    return NextResponse.json({ error: 'Wrong password.' }, { status: 401 });
  }

  const token = generateSessionToken();
  const res = NextResponse.json({ success: true });
  res.cookies.set('admin_auth', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  });
  return res;
}
