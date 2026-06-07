'use client';

import { useState } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';

export default function FulfillButton({ orderId }: { orderId: number }) {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  async function handleFulfill() {
    if (!confirm('Mark this order as fulfilled? The customer will be notified.')) return;
    setLoading(true);
    setError('');

    const res = await fetch(`/api/admin/orders/${orderId}/fulfill`, { method: 'POST' });
    const data = await res.json();

    if (res.ok) {
      setDone(true);
    } else {
      setError(data.error ?? 'Failed to fulfill order.');
    }
    setLoading(false);
  }

  if (done) {
    return (
      <span className="flex items-center gap-1 text-xs text-green-600 font-medium">
        <CheckCircle2 className="w-3.5 h-3.5" /> Fulfilled
      </span>
    );
  }

  return (
    <div>
      <button
        onClick={handleFulfill}
        disabled={loading}
        className="flex items-center gap-1.5 text-xs font-medium bg-[#4a7c59] text-white px-3 py-1.5 rounded-full hover:bg-[#3a6347] transition-colors disabled:opacity-60"
      >
        {loading ? <Loader2 className="w-3 h-3 animate-spin" /> : <CheckCircle2 className="w-3 h-3" />}
        {loading ? 'Fulfilling...' : 'Mark Fulfilled'}
      </button>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
