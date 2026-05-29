import Link from 'next/link';
import { Leaf } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen pt-24 bg-[#fdfbf7] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 bg-[#4a7c59]/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Leaf className="w-8 h-8 text-[#4a7c59]" />
        </div>
        <h1 className="text-5xl font-bold text-[#2c2c2c] mb-2">404</h1>
        <h2 className="text-xl font-semibold text-[#2c2c2c] mb-3">Page Not Found</h2>
        <p className="text-[#888] text-sm leading-relaxed mb-8">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
          Try browsing our medicines below.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/products"
            className="px-7 py-3 bg-[#4a7c59] text-white rounded-full font-medium hover:bg-[#3a6347] transition-colors text-sm"
          >
            Browse All Medicines
          </Link>
          <Link
            href="/"
            className="px-7 py-3 border border-[#4a7c59] text-[#4a7c59] rounded-full font-medium hover:bg-[#4a7c59]/5 transition-colors text-sm"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
