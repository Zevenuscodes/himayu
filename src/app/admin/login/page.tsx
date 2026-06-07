'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock } from 'lucide-react';

export default function AdminLoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      router.push('/admin/leads');
    } else {
      setError('Wrong password. Try again.');
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#faf8f3] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 bg-[#4a7c59]/10 rounded-full flex items-center justify-center">
            <Lock className="w-6 h-6 text-[#4a7c59]" />
          </div>
        </div>
        <h1 className="text-xl font-bold text-[#2c2c2c] text-center mb-1">Himayu Admin</h1>
        <p className="text-sm text-[#888] text-center mb-7">Enter the admin password to continue</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="w-full border border-[#e0d8cc] rounded-xl px-4 py-3 text-sm text-[#2c2c2c] bg-white placeholder-[#bbb] focus:outline-none focus:border-[#4a7c59] transition-colors"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#4a7c59] text-white py-3 rounded-full font-semibold text-sm hover:bg-[#3a6347] transition-colors disabled:opacity-60"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </main>
  );
}
