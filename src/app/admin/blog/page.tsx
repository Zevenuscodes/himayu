import { getSupabaseAdmin } from '@/lib/supabaseServer';
import AdminNav from '@/components/AdminNav';
import ToggleStatusButton from '@/components/ToggleStatusButton';
import GenerateDraftButton from '@/components/GenerateDraftButton';
import { FileText } from 'lucide-react';

interface Post {
  id: string;
  slug: string;
  title: string;
  status: string;
  created_at: string;
  published_at: string | null;
}

export const revalidate = 30;

export default async function AdminBlogPage() {
  let posts: Post[] = [];
  let error = '';

  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data, error: dbError } = await (getSupabaseAdmin() as any)
      .from('posts')
      .select('id, slug, title, status, created_at, published_at')
      .order('created_at', { ascending: false });
    if (dbError) error = dbError.message;
    else posts = data ?? [];
  } catch (e) {
    error = (e as Error).message;
  }

  const draftCount = posts.filter((p) => p.status === 'draft').length;
  const publishedCount = posts.filter((p) => p.status === 'published').length;

  return (
    <main className="min-h-screen bg-[#faf8f3] pt-6 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-2 flex-wrap gap-3">
          <div>
            <h1 className="text-2xl font-bold text-[#2c2c2c] flex items-center gap-2">
              <FileText className="w-6 h-6 text-[#4a7c59]" /> Blog Posts
            </h1>
            <p className="text-sm text-[#888] mt-0.5">{publishedCount} published, {draftCount} drafts</p>
          </div>
          <a href="/admin/login" className="text-xs text-[#aaa] hover:text-[#4a7c59] transition-colors">Logout</a>
        </div>

        <AdminNav active="blog" />
        <GenerateDraftButton />

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl px-4 py-3 text-sm mb-6">{error}</div>
        )}

        {/* Mobile cards */}
        <div className="block lg:hidden space-y-3">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-2xl border border-[#e8e0d0] p-4 space-y-2">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="font-semibold text-[#2c2c2c] truncate">{post.title}</p>
                  <p className="text-xs text-[#888] mt-0.5">/{post.slug}</p>
                </div>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap ${
                  post.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {post.status === 'published' ? 'Published' : 'Draft'}
                </span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <p className="text-xs text-[#888]">
                  {new Date(post.created_at).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: '2-digit' })}
                </p>
                <ToggleStatusButton id={post.id} currentStatus={post.status} />
              </div>
            </div>
          ))}
        </div>

        {/* Desktop table */}
        {posts.length > 0 && (
          <div className="hidden lg:block bg-white rounded-2xl border border-[#e8e0d0] overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#e8e0d0] bg-[#faf8f3]">
                  {['Title', 'Slug', 'Status', 'Created', 'Published', 'Action'].map((h) => (
                    <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-[#888] uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f0ebe0]">
                {posts.map((post) => (
                  <tr key={post.id} className="hover:bg-[#faf8f3] transition-colors">
                    <td className="px-4 py-3 font-medium text-[#2c2c2c] max-w-[250px] truncate">{post.title}</td>
                    <td className="px-4 py-3 text-[#888] text-xs">/{post.slug}</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                        post.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {post.status === 'published' ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-[#888] text-xs whitespace-nowrap">
                      {new Date(post.created_at).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: '2-digit' })}
                    </td>
                    <td className="px-4 py-3 text-[#888] text-xs whitespace-nowrap">
                      {post.published_at ? new Date(post.published_at).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: '2-digit' }) : '—'}
                    </td>
                    <td className="px-4 py-3">
                      <ToggleStatusButton id={post.id} currentStatus={post.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {posts.length === 0 && !error && (
          <div className="bg-white rounded-2xl border border-[#e8e0d0] p-10 text-center">
            <FileText className="w-10 h-10 text-[#ccc] mx-auto mb-3" />
            <p className="text-[#2c2c2c] font-semibold mb-1">No blog posts yet</p>
            <p className="text-[#888] text-sm">Use the AI generator above to create your first draft.</p>
          </div>
        )}
      </div>
    </main>
  );
}
