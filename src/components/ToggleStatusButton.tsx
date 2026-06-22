'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

export default function ToggleStatusButton({ id, currentStatus }: { id: string; currentStatus: string }) {
  const [status, setStatus] = useState(currentStatus);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function toggle() {
    const newStatus = status === 'draft' ? 'published' : 'draft';
    setLoading(true);
    const res = await fetch(`/api/admin/blog/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus }),
    });
    if (res.ok) {
      setStatus(newStatus);
      router.refresh();
    }
    setLoading(false);
  }

  return (
    <button
      onClick={toggle}
      disabled={loading}
      className={`text-xs font-medium px-3 py-1.5 rounded-full transition-colors disabled:opacity-60 ${
        status === 'draft'
          ? 'bg-[#4a7c59] text-white hover:bg-[#3a6347]'
          : 'bg-amber-100 text-amber-700 hover:bg-amber-200'
      }`}
    >
      {loading ? <Loader2 className="w-3 h-3 animate-spin inline" /> : status === 'draft' ? 'Publish' : 'Unpublish'}
    </button>
  );
}
