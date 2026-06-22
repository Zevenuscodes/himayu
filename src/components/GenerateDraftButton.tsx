'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Plus, Loader2, X } from 'lucide-react';

export default function GenerateDraftButton() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [metaDesc, setMetaDesc] = useState('');
  const [tags, setTags] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  function reset() {
    setTitle('');
    setContent('');
    setMetaDesc('');
    setTags('');
    setError('');
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/admin/blog/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: title.trim(),
          content: content.trim(),
          meta_description: metaDesc.trim(),
          tags: tags.split(',').map((t) => t.trim()).filter(Boolean),
        }),
      });
      const data = await res.json();
      if (res.ok) {
        reset();
        setOpen(false);
        router.refresh();
      } else {
        setError(data.error ?? 'Failed to create post.');
      }
    } catch {
      setError('Network error. Please try again.');
    }
    setLoading(false);
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 bg-[#4a7c59] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#3a6347] transition-colors mb-6"
      >
        <Plus className="w-4 h-4" /> New Blog Post
      </button>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-[#e8e0d0] p-5 mb-6">
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-semibold text-[#2c2c2c] flex items-center gap-2">
          <Plus className="w-4 h-4 text-[#4a7c59]" /> New Blog Post
        </p>
        <button onClick={() => { setOpen(false); reset(); }} className="text-[#aaa] hover:text-[#555]">
          <X className="w-4 h-4" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-medium text-[#888] mb-1">Title *</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Benefits of Dashmool Ark for Joint Pain"
            required
            className="w-full border border-[#e0d8cc] rounded-xl px-4 py-2.5 text-sm text-[#2c2c2c] bg-white placeholder-[#bbb] focus:outline-none focus:border-[#4a7c59] transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-[#888] mb-1">Meta Description (for Google snippet, max 160 chars)</label>
          <input
            type="text"
            value={metaDesc}
            onChange={(e) => setMetaDesc(e.target.value)}
            placeholder="Short description for search results..."
            maxLength={160}
            className="w-full border border-[#e0d8cc] rounded-xl px-4 py-2.5 text-sm text-[#2c2c2c] bg-white placeholder-[#bbb] focus:outline-none focus:border-[#4a7c59] transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-[#888] mb-1">Content * (supports Markdown)</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your blog post here... Use **bold**, ## headings, - bullet points"
            required
            rows={12}
            className="w-full border border-[#e0d8cc] rounded-xl px-4 py-3 text-sm text-[#2c2c2c] bg-white placeholder-[#bbb] focus:outline-none focus:border-[#4a7c59] transition-colors resize-y"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-[#888] mb-1">Tags (comma separated)</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="e.g. ayurveda, joint pain, dashmool"
            className="w-full border border-[#e0d8cc] rounded-xl px-4 py-2.5 text-sm text-[#2c2c2c] bg-white placeholder-[#bbb] focus:outline-none focus:border-[#4a7c59] transition-colors"
          />
        </div>

        {error && <p className="text-red-500 text-xs">{error}</p>}

        <div className="flex gap-3">
          <button
            type="submit"
            disabled={loading}
            className="flex items-center gap-2 bg-[#4a7c59] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#3a6347] transition-colors disabled:opacity-60"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
            {loading ? 'Saving...' : 'Save as Draft'}
          </button>
          <button
            type="button"
            onClick={() => { setOpen(false); reset(); }}
            className="px-5 py-2.5 rounded-full text-sm font-medium text-[#888] hover:text-[#555] transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
