import Link from 'next/link';
import { Users, ShoppingBag, FileText } from 'lucide-react';

export default function AdminNav({ active }: { active: 'leads' | 'orders' | 'blog' }) {
  const tabs = [
    { href: '/admin/leads', label: 'Leads', icon: Users, key: 'leads' as const },
    { href: '/admin/orders', label: 'Orders', icon: ShoppingBag, key: 'orders' as const },
    { href: '/admin/blog', label: 'Blog', icon: FileText, key: 'blog' as const },
  ];

  return (
    <div className="flex items-center gap-2 mb-6">
      {tabs.map((tab) => (
        <Link
          key={tab.key}
          href={tab.href}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            active === tab.key
              ? 'bg-[#4a7c59] text-white'
              : 'bg-white border border-[#e8e0d0] text-[#555] hover:border-[#4a7c59] hover:text-[#4a7c59]'
          }`}
        >
          <tab.icon className="w-4 h-4" /> {tab.label}
        </Link>
      ))}
    </div>
  );
}
