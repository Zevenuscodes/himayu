import { NextRequest, NextResponse } from 'next/server';
import { timingSafeEqual } from 'crypto';
import { generateSessionToken } from '@/lib/adminAuth';

export async function POST(req: NextRequest) {
  const { password } = await req.json();

  const adminPassword = process.env.ADMIN_PASSWORD ?? '';
  if (!adminPassword) {
    return NextResponse.json({ error: 'Server misconfigured.' }, { status: 500 });
  }

  const isCorrect =
    password?.length === adminPassword.length &&
    timingSafeEqual(Buffer.from(password), Buffer.from(adminPassword));

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
