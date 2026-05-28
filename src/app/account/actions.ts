'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { customerCreate, customerAccessTokenCreate, customerAccessTokenDelete } from '@/lib/shopify';

const TOKEN_COOKIE = 'shopify_customer_token';
const THIRTY_DAYS = 60 * 60 * 24 * 30;

export async function login(_: unknown, formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const result = await customerAccessTokenCreate(email, password);

  if (result.customerUserErrors.length > 0) {
    return { error: result.customerUserErrors[0].message };
  }

  if (!result.customerAccessToken) {
    return { error: 'Login failed. Please try again.' };
  }

  const cookieStore = await cookies();
  cookieStore.set(TOKEN_COOKIE, result.customerAccessToken.accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: THIRTY_DAYS,
    path: '/',
  });

  redirect('/account');
}

export async function register(_: unknown, formData: FormData) {
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const result = await customerCreate({ firstName, lastName, email, password });

  if (result.customerUserErrors.length > 0) {
    return { error: result.customerUserErrors[0].message };
  }

  // auto-login after registration
  const tokenResult = await customerAccessTokenCreate(email, password);
  if (tokenResult.customerAccessToken) {
    const cookieStore = await cookies();
    cookieStore.set(TOKEN_COOKIE, tokenResult.customerAccessToken.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: THIRTY_DAYS,
      path: '/',
    });
  }

  redirect('/account');
}

export async function logout() {
  const cookieStore = await cookies();
  const token = cookieStore.get(TOKEN_COOKIE)?.value;
  if (token) {
    try { await customerAccessTokenDelete(token); } catch {}
    cookieStore.delete(TOKEN_COOKIE);
  }
  redirect('/');
}

export async function getCustomerToken(): Promise<string | null> {
  const cookieStore = await cookies();
  return cookieStore.get(TOKEN_COOKIE)?.value ?? null;
}
