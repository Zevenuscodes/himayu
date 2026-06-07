import { NextRequest, NextResponse } from 'next/server';
import { generateSessionToken } from '@/lib/adminAuth';

export async function POST(req: NextRequest) {
  const { password } = await req.json();

  const adminPassword = process.env.ADMIN_PASSWORD ?? '';
  if (!adminPassword) {
    return NextResponse.json({ error: 'Server misconfigured.' }, { status: 500 });
  }

  if (!password || password !== adminPassword) {
    return NextResponse.json({ error: 'Wrong password.' }, { status: 401 });
  }

  const token = await generateSessionToken();
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
