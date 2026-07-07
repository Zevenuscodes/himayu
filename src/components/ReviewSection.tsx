'use client';

import { useState, useEffect } from 'react';
import { StarDisplay, StarSelector } from './StarRating';
import { CheckCircle2, Loader2, MessageSquare } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  rating: number;
  review_text: string;
  verified_purchase: boolean;
  created_at: string;
}

export default function ReviewSection({ productHandle, productName }: { productHandle: string; productName: string }) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [rating, setRating] = useState(0);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`/api/reviews?handle=${productHandle}`)
      .then((r) => r.json())
      .then((d) => setReviews(d.reviews ?? []));
  }, [productHandle]);

  const avgRating = reviews.length > 0
    ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
    : 0;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (rating === 0) { setError('Please select a star rating.'); return; }
    setLoading(true);
    setError('');

    const res = await fetch('/api/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ product_handle: productHandle, product_name: productName, name, phone, rating, review_text: reviewText }),
    });
    const data = await res.json();

    if (res.ok) {
      setSubmitted(true);
      setShowForm(false);
    } else {
      setError(data.error ?? 'Failed to submit review.');
    }
    setLoading(false);
  }

  return (
    <div className="mt-16 border-t border-[#e8e0d0] pt-12">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-[#2c2c2c]">Customer Reviews</h2>
          {reviews.length > 0 && (
            <div className="flex items-center gap-2 mt-1">
              <StarDisplay rating={Math.round(avgRating)} size="md" />
              <span className="text-sm text-[#888]">{avgRating.toFixed(1)} out of 5 · {reviews.length} review{reviews.length !== 1 ? 's' : ''}</span>
            </div>
          )}
        </div>
        {!submitted && (
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 bg-[#4a7c59] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#3a6347] transition-colors"
          >
            <MessageSquare className="w-4 h-4" /> Write a Review
          </button>
        )}
      </div>

      {/* Success message */}
      {submitted && (
        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 flex items-start gap-3 mb-8">
          <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-green-700 font-semibold text-sm">Review submitted — thank you!</p>
            <p className="text-green-600 text-xs mt-0.5">Your review will appear after it is approved by our team.</p>
          </div>
        </div>
      )}

      {/* Review form */}
      {showForm && (
        <div className="bg-[#faf8f3] border border-[#e8e0d0] rounded-2xl p-6 mb-8">
          <h3 className="font-semibold text-[#2c2c2c] mb-4">Share Your Experience</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-[#888] mb-2">Your Rating *</label>
              <StarSelector value={rating} onChange={setRating} />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-[#888] mb-1">Your Name *</label>
                <input
                  value={name} onChange={(e) => setName(e.target.value)} required
                  placeholder="e.g. Rajesh Kumar"
                  className="w-full border border-[#e0d8cc] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#4a7c59] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#888] mb-1">Phone Number (for purchase verification) *</label>
                <input
                  value={phone} onChange={(e) => setPhone(e.target.value)} required
                  placeholder="10-digit mobile number"
                  className="w-full border border-[#e0d8cc] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#4a7c59] transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-[#888] mb-1">Your Review *</label>
              <textarea
                value={reviewText} onChange={(e) => setReviewText(e.target.value)} required rows={4}
                placeholder="Share how this product helped you..."
                className="w-full border border-[#e0d8cc] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4a7c59] transition-colors resize-none"
              />
            </div>
            {error && <p className="text-red-500 text-xs">{error}</p>}
            <p className="text-xs text-[#aaa]">Only verified buyers can leave reviews. Your phone number is used only for verification and is never displayed.</p>
            <div className="flex gap-3">
              <button type="submit" disabled={loading}
                className="flex items-center gap-2 bg-[#4a7c59] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#3a6347] transition-colors disabled:opacity-60"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
                {loading ? 'Verifying & Submitting...' : 'Submit Review'}
              </button>
              <button type="button" onClick={() => setShowForm(false)}
                className="px-5 py-2.5 text-sm text-[#888] hover:text-[#555] transition-colors"
              >Cancel</button>
            </div>
          </form>
        </div>
      )}

      {/* Reviews list */}
      {reviews.length === 0 ? (
        <div className="text-center py-10 text-[#bbb]">
          <MessageSquare className="w-8 h-8 mx-auto mb-2 opacity-40" />
          <p className="text-sm">No reviews yet. Be the first to share your experience!</p>
        </div>
      ) : (
        <div className="space-y-5">
          {reviews.map((r) => (
            <div key={r.id} className="bg-white border border-[#e8e0d0] rounded-2xl p-5">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <p className="font-semibold text-[#2c2c2c] text-sm">{r.name}</p>
                  <StarDisplay rating={r.rating} size="sm" />
                </div>
                <div className="text-right">
                  {r.verified_purchase && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                      <CheckCircle2 className="w-3 h-3" /> Verified Purchase
                    </span>
                  )}
                  <p className="text-xs text-[#aaa] mt-1">
                    {new Date(r.created_at).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                  </p>
                </div>
              </div>
              <p className="text-sm text-[#555] leading-relaxed">{r.review_text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
