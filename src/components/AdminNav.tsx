import Link from 'next/link';
import { Users, ShoppingBag } from 'lucide-react';

export default function AdminNav({ active }: { active: 'leads' | 'orders' }) {
  return (
    <div className="flex items-center gap-2 mb-6">
      <Link
        href="/admin/leads"
        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          active === 'leads'
            ? 'bg-[#4a7c59] text-white'
            : 'bg-white border border-[#e8e0d0] text-[#555] hover:border-[#4a7c59] hover:text-[#4a7c59]'
        }`}
      >
        <Users className="w-4 h-4" /> Leads
      </Link>
      <Link
        href="/admin/orders"
        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          active === 'orders'
            ? 'bg-[#4a7c59] text-white'
            : 'bg-white border border-[#e8e0d0] text-[#555] hover:border-[#4a7c59] hover:text-[#4a7c59]'
        }`}
      >
        <ShoppingBag className="w-4 h-4" /> Orders
      </Link>
    </div>
  );
}
