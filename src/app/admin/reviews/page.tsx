import { getSupabaseAdmin } from '@/lib/supabaseServer';
import AdminNav from '@/components/AdminNav';
import ReviewApproveButton from '@/components/ReviewApproveButton';
import { Star } from 'lucide-react';

interface Review {
  id: string;
  product_name: string;
  name: string;
  rating: number;
  review_text: string;
  verified_purchase: boolean;
  status: string;
  created_at: string;
}

export const revalidate = 30;

export default async function AdminReviewsPage() {
  let reviews: Review[] = [];
  let error = '';

  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data, error: dbError } = await (getSupabaseAdmin() as any)
      .from('reviews')
      .select('*')
      .order('created_at', { ascending: false });
    if (dbError) error = dbError.message;
    else reviews = data ?? [];
  } catch (e) {
    error = (e as Error).message;
  }

  const pending = reviews.filter((r) => r.status === 'pending').length;

  return (
    <main className="min-h-screen bg-[#faf8f3] pt-6 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-2 flex-wrap gap-3">
          <div>
            <h1 className="text-2xl font-bold text-[#2c2c2c] flex items-center gap-2">
              <Star className="w-6 h-6 text-[#4a7c59]" /> Reviews
            </h1>
            <p className="text-sm text-[#888] mt-0.5">{pending} pending approval</p>
          </div>
          <a href="/admin/login" className="text-xs text-[#aaa] hover:text-[#4a7c59] transition-colors">Logout</a>
        </div>

        <AdminNav active="reviews" />

        {error && <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl px-4 py-3 text-sm mb-6">{error}</div>}

        <div className="space-y-3">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-2xl border border-[#e8e0d0] p-5">
              <div className="flex items-start justify-between gap-3 flex-wrap">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <p className="font-semibold text-[#2c2c2c]">{review.name}</p>
                    <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                      review.status === 'approved' ? 'bg-green-100 text-green-700' :
                      review.status === 'rejected' ? 'bg-red-100 text-red-600' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {review.status.charAt(0).toUpperCase() + review.status.slice(1)}
                    </span>
                    {review.verified_purchase && (
                      <span className="text-xs font-medium bg-blue-50 text-blue-600 px-2.5 py-0.5 rounded-full">Verified</span>
                    )}
                  </div>
                  <p className="text-xs text-[#4a7c59] font-medium mb-1">{review.product_name}</p>
                  <div className="flex items-center gap-1 mb-2">
                    {[1,2,3,4,5].map((s) => (
                      <svg key={s} className={`w-4 h-4 ${s <= review.rating ? 'text-amber-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-[#555] leading-relaxed">{review.review_text}</p>
                  <p className="text-xs text-[#aaa] mt-2">
                    {new Date(review.created_at).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
                <ReviewApproveButton id={review.id} currentStatus={review.status} />
              </div>
            </div>
          ))}

          {reviews.length === 0 && !error && (
            <div className="bg-white rounded-2xl border border-[#e8e0d0] p-10 text-center">
              <Star className="w-10 h-10 text-[#ccc] mx-auto mb-3" />
              <p className="text-[#888]">No reviews yet.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
