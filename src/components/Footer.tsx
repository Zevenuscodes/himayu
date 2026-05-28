import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#2c2c2c] text-[#c8c0b0] mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">

          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.jpeg" alt="Himayu Care" width={40} height={40} className="rounded-full object-cover" />
              <span className="text-xl font-semibold text-white">
                Himayu <span className="text-[#7ab897]">Care</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs text-[#9a9080]">
              GMP-certified classical Ayurvedic medicines rooted in 5,000 years of healing tradition.
              Pure Himalayan herbs.
            </p>
            <div className="mt-6 space-y-2 text-sm text-[#9a9080]">
              <div className="flex items-start gap-2">
                <svg className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>H.No-286, Lane 4, C-Block, Ajabpur Khurd<br />Saraswati Vihar, Dehradun<br />Uttarakhand — 248001</span>
              </div>
              <a href="tel:+917817982004" className="flex items-center gap-2 hover:text-[#7ab897] transition-colors">
                <Phone className="w-3.5 h-3.5" /> +91 78179 82004
              </a>
              <a href="tel:+919084840983" className="flex items-center gap-2 hover:text-[#7ab897] transition-colors">
                <Phone className="w-3.5 h-3.5" /> +91 90848 40983
              </a>
              <a href="mailto:himayucare@gmail.com" className="flex items-center gap-2 hover:text-[#7ab897] transition-colors">
                <Mail className="w-3.5 h-3.5" /> himayucare@gmail.com
              </a>
              <span className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5" /> www.himayucare.com
              </span>
              <a
                href="https://youtube.com/@himayucare"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#ff4444] transition-colors"
              >
                <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                @himayucare
              </a>
              <a
                href="https://www.facebook.com/share/1DYQE9NdS8/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#1877f2] transition-colors"
              >
                <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Himayu Care
              </a>
              <a
                href="https://www.instagram.com/himayucare"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#e1306c] transition-colors"
              >
                <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                @himayucare
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 tracking-wider uppercase">Products</h4>
            <ul className="space-y-2 text-sm">
              {[
                'All Medicines',
                'Arks (Distillates)',
                'Kwaths (Decoctions)',
                'Chyawanprash',
                'Herbal Kits',
              ].map((item) => (
                <li key={item}>
                  <Link href="/products" className="hover:text-[#7ab897] transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 tracking-wider uppercase">Help</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Contact', href: '#contact' },
                { label: 'Shipping Policy', href: '#' },
                { label: 'Returns', href: '#' },
                { label: 'FAQ', href: '/faq' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="hover:text-[#7ab897] transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="text-xs text-[#9a9080] leading-relaxed">
                Mfg. by Hans Herbals Pvt Ltd<br />
                Plot No. 59, 60, 61, Sector-8A<br />
                SIDCUL, Haridwar — 248001 (UK)<br />
                Lic. No. UK.AY-362/2017
              </p>
              <p className="text-xs text-[#9a9080] leading-relaxed mt-3">
                Mfg. by Gurukul Ayurved Pharmacy<br />
                Gurukul Mahavidyalay Jwalapur<br />
                P.O. Gurukul Kangri, Haridwar<br />
                Uttarakhand — 249404<br />
                Lic. No. A-866/1982/2011
              </p>
              <p className="text-xs text-[#9a9080] leading-relaxed mt-3">
                Mfd. by Gayatri Herbals<br />
                F-43, Industrial Area<br />
                Haridwar — 249401 (Uttarakhand)<br />
                Lic. No. UTTRA/AYU/10/2001/2006
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#3a3a3a] mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#666]">
          <p>&copy; {new Date().getFullYear()} Himayu Care. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-[#7ab897] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#7ab897] transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
