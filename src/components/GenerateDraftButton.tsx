'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Sparkles, Loader2 } from 'lucide-react';

export default function GenerateDraftButton() {
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  async function handleGenerate(e: React.FormEvent) {
    e.preventDefault();
    if (!topic.trim()) return;
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const res = await fetch('/api/admin/blog/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic: topic.trim() }),
      });
      const data = await res.json();
      if (res.ok) {
        setSuccess(`Draft created: "${data.post.title}"`);
        setTopic('');
        router.refresh();
      } else {
        setError(data.error ?? 'Failed to generate draft.');
      }
    } catch {
      setError('Network error. Please try again.');
    }
    setLoading(false);
  }

  return (
    <div className="bg-white rounded-2xl border border-[#e8e0d0] p-4 mb-6">
      <p className="text-sm font-semibold text-[#2c2c2c] mb-3 flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-[#4a7c59]" /> Generate Blog Draft with AI
      </p>
      <form onSubmit={handleGenerate} className="flex gap-3 items-start flex-wrap sm:flex-nowrap">
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder='e.g. "Benefits of Dashmool Ark for Joint Pain"'
          required
          className="flex-1 min-w-0 border border-[#e0d8cc] rounded-xl px-4 py-2.5 text-sm text-[#2c2c2c] bg-white placeholder-[#bbb] focus:outline-none focus:border-[#4a7c59] transition-colors"
        />
        <button
          type="submit"
          disabled={loading}
          className="flex items-center gap-2 bg-[#4a7c59] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#3a6347] transition-colors disabled:opacity-60 whitespace-nowrap"
        >
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
          {loading ? 'Generating...' : 'Generate'}
        </button>
      </form>
      {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
      {success && <p className="text-green-600 text-xs mt-2">{success}</p>}
    </div>
  );
}
