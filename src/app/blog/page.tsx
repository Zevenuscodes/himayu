import type { Metadata } from 'next';
import Link from 'next/link';
import { getSupabaseAdmin } from '@/lib/supabaseServer';
import { Leaf } from 'lucide-react';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Blog — Ayurvedic Health Tips & Insights | Himayu Care',
  description: 'Read expert articles on Ayurveda, herbal remedies, Panchkarma, and natural health tips from Himayu Care. Learn about classical Ayurvedic medicines and wellness.',
  keywords: 'ayurveda blog, ayurvedic medicine blog, herbal remedies, panchkarma, ayurvedic health tips, himayu care blog',
  alternates: { canonical: '/blog' },
};

interface Post {
  id: string;
  slug: string;
  title: string;
  meta_description: string;
  content: string;
  tags: string[];
  published_at: string;
}

function excerpt(content: string): string {
  return content.replace(/[#*_\[\]()>`~|]/g, '').replace(/\n+/g, ' ').trim().slice(0, 160) + '...';
}

export default async function BlogPage() {
  let posts: Post[] = [];

  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data } = await (getSupabaseAdmin() as any)
      .from('posts')
      .select('id, slug, title, meta_description, content, tags, published_at')
      .eq('status', 'published')
      .order('published_at', { ascending: false });
    posts = data ?? [];
  } catch {}

  return (
    <main className="min-h-screen pt-24 pb-16 bg-[#fdfbf7]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#2c2c2c] font-serif">
            Ayurvedic Health <span className="text-[#4a7c59]">Insights</span>
          </h1>
          <p className="text-[#888] mt-2 max-w-xl mx-auto text-sm sm:text-base">
            Expert articles on Ayurveda, herbal remedies, and natural wellness from Himayu Care.
          </p>
        </div>

        {posts.length === 0 && (
          <div className="text-center py-20">
            <Leaf className="w-10 h-10 text-[#ccc] mx-auto mb-3" />
            <p className="text-[#888]">Blog posts coming soon. Stay tuned!</p>
          </div>
        )}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl border border-[#e8e0d0] overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-40 bg-gradient-to-br from-[#4a7c59]/10 to-[#e8e0d0]/30 flex items-center justify-center">
                <Leaf className="w-10 h-10 text-[#4a7c59]/30" />
              </div>
              <div className="p-5">
                <p className="text-xs text-[#888] mb-2">
                  {new Date(post.published_at).toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' })}
                </p>
                <h2 className="font-bold text-[#2c2c2c] group-hover:text-[#4a7c59] transition-colors line-clamp-2 mb-2">
                  {post.title}
                </h2>
                <p className="text-sm text-[#888] line-clamp-3">
                  {post.meta_description || excerpt(post.content)}
                </p>
                {post.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-[10px] font-medium bg-[#4a7c59]/10 text-[#4a7c59] px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
