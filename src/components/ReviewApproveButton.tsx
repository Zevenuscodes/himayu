'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

export default function ReviewApproveButton({ id, currentStatus }: { id: string; currentStatus: string }) {
  const [loading, setLoading] = useState<string | null>(null);
  const router = useRouter();

  async function update(status: string) {
    setLoading(status);
    await fetch(`/api/admin/reviews/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    router.refresh();
    setLoading(null);
  }

  return (
    <div className="flex gap-2 flex-shrink-0">
      {currentStatus !== 'approved' && (
        <button onClick={() => update('approved')} disabled={!!loading}
          className="text-xs font-medium bg-green-100 text-green-700 hover:bg-green-200 px-3 py-1.5 rounded-full transition-colors disabled:opacity-60 flex items-center gap-1"
        >
          {loading === 'approved' ? <Loader2 className="w-3 h-3 animate-spin" /> : null} Approve
        </button>
      )}
      {currentStatus !== 'rejected' && (
        <button onClick={() => update('rejected')} disabled={!!loading}
          className="text-xs font-medium bg-red-50 text-red-600 hover:bg-red-100 px-3 py-1.5 rounded-full transition-colors disabled:opacity-60 flex items-center gap-1"
        >
          {loading === 'rejected' ? <Loader2 className="w-3 h-3 animate-spin" /> : null} Reject
        </button>
      )}
    </div>
  );
}
