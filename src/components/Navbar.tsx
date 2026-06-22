'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { ShoppingBag, Menu, X, User } from 'lucide-react';
import SearchOverlay from './SearchOverlay';

export default function Navbar() {
  const { cartCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Shop' },
    { href: '/blog', label: 'Blog' },
    { href: '/consultation', label: 'Consult a Doctor' },
    { href: '/about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#faf8f3]/95 backdrop-blur-sm border-b border-[#e8e0d0]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/logo.jpeg"
            alt="Himayu Care"
            width={40}
            height={40}
            className="rounded-full object-cover"
            priority
          />
          <span className="text-xl font-semibold tracking-wide text-[#2c2c2c]">
            Himayu <span className="text-[#4a7c59]">Care</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm text-[#555] hover:text-[#4a7c59] transition-colors tracking-wide"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Search + Cart + Account + mobile toggle */}
        <div className="flex items-center gap-2">
          <SearchOverlay />
          <Link href="/account" className="p-2 hover:text-[#4a7c59] transition-colors text-[#2c2c2c]" aria-label="Account">
            <User className="w-5 h-5" />
          </Link>
          <Link href="/cart" className="relative p-2 hover:text-[#4a7c59] transition-colors text-[#2c2c2c]">
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#4a7c59] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                {cartCount}
              </span>
            )}
          </Link>
          <button
            className="md:hidden p-2 text-[#2c2c2c]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#faf8f3] border-t border-[#e8e0d0] px-4 py-4 space-y-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block text-sm text-[#555] hover:text-[#4a7c59] transition-colors py-1"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
