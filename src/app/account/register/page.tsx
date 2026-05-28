'use client';

import { useActionState } from 'react';
import { register } from '../actions';
import Link from 'next/link';
import Image from 'next/image';
import { Loader2 } from 'lucide-react';

export default function RegisterPage() {
  const [state, formAction, pending] = useActionState(register, null);

  return (
    <main className="min-h-screen pt-24 flex items-center justify-center bg-gradient-to-b from-[#eef5ec] to-[#fdfbf7] px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Image src="/logo.jpeg" alt="Himayu Care" width={64} height={64} className="rounded-full mx-auto mb-4 object-cover" />
          <h1 className="text-2xl font-bold text-[#2c2c2c]">Create your account</h1>
          <p className="text-sm text-[#888] mt-1">Join Himayu Care for a healthier life</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-[#ede8dc] p-8">
          <form action={formAction} className="space-y-5">
            {state?.error && (
              <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-xl">
                {state.error}
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#2c2c2c] mb-1.5">First name</label>
                <input
                  name="firstName"
                  type="text"
                  required
                  autoComplete="given-name"
                  className="w-full px-4 py-3 rounded-xl border border-[#e0d8cc] bg-[#fdfbf7] text-sm focus:outline-none focus:border-[#4a7c59] focus:ring-1 focus:ring-[#4a7c59] transition-colors"
                  placeholder="Aarav"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#2c2c2c] mb-1.5">Last name</label>
                <input
                  name="lastName"
                  type="text"
                  required
                  autoComplete="family-name"
                  className="w-full px-4 py-3 rounded-xl border border-[#e0d8cc] bg-[#fdfbf7] text-sm focus:outline-none focus:border-[#4a7c59] focus:ring-1 focus:ring-[#4a7c59] transition-colors"
                  placeholder="Sharma"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#2c2c2c] mb-1.5">Email</label>
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full px-4 py-3 rounded-xl border border-[#e0d8cc] bg-[#fdfbf7] text-sm focus:outline-none focus:border-[#4a7c59] focus:ring-1 focus:ring-[#4a7c59] transition-colors"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#2c2c2c] mb-1.5">Password</label>
              <input
                name="password"
                type="password"
                required
                minLength={5}
                autoComplete="new-password"
                className="w-full px-4 py-3 rounded-xl border border-[#e0d8cc] bg-[#fdfbf7] text-sm focus:outline-none focus:border-[#4a7c59] focus:ring-1 focus:ring-[#4a7c59] transition-colors"
                placeholder="Min. 5 characters"
              />
            </div>

            <button
              type="submit"
              disabled={pending}
              className="w-full py-3.5 bg-[#4a7c59] text-white rounded-xl font-medium hover:bg-[#3a6347] transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {pending && <Loader2 className="w-4 h-4 animate-spin" />}
              {pending ? 'Creating account…' : 'Create Account'}
            </button>
          </form>

          <p className="text-center text-sm text-[#888] mt-6">
            Already have an account?{' '}
            <Link href="/account/login" className="text-[#4a7c59] font-medium hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
