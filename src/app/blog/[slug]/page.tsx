import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getSupabaseAdmin } from '@/lib/supabaseServer';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft } from 'lucide-react';

export const revalidate = 60;

interface Post {
  id: string;
  slug: string;
  title: string;
  meta_description: string;
  content: string;
  tags: string[];
  published_at: string;
  updated_at: string;
}

interface Props {
  params: Promise<{ slug: string }>;
}

async function getPost(slug: string): Promise<Post | null> {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data } = await (getSupabaseAdmin() as any)
      .from('posts')
      .select('*')
      .eq('slug', slug)
      .eq('status', 'published')
      .single();
    return data;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Himayu Care Blog`,
    description: post.meta_description,
    keywords: post.tags?.join(', '),
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.meta_description,
      publishedTime: post.published_at,
      modifiedTime: post.updated_at,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.meta_description,
    datePublished: post.published_at,
    dateModified: post.updated_at,
    author: { '@type': 'Organization', name: 'Himayu Care', url: 'https://himayucare.com' },
    publisher: {
      '@type': 'Organization',
      name: 'Himayu Care',
      logo: { '@type': 'ImageObject', url: 'https://himayucare.com/logo.jpeg' },
    },
  };

  return (
    <main className="min-h-screen pt-24 pb-16 bg-[#fdfbf7]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-[#4a7c59] hover:underline mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>

        <header className="mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2c2c2c] font-serif leading-tight mb-3">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 flex-wrap">
            <time className="text-sm text-[#888]">
              {new Date(post.published_at).toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' })}
            </time>
            {post.tags?.map((tag) => (
              <span key={tag} className="text-[10px] font-medium bg-[#4a7c59]/10 text-[#4a7c59] px-2 py-0.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="blog-content text-[#555] leading-relaxed">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        <div className="border-t border-[#e8e0d0] mt-12 pt-8 text-center">
          <p className="text-sm text-[#888] mb-3">Looking for Ayurvedic medicines?</p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-[#4a7c59] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#3a6347] transition-colors"
          >
            Shop Himayu Care →
          </Link>
        </div>
      </article>
    </main>
  );
}
