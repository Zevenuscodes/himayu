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
            <a href="#" className="hover:text-[#7ab897] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#7ab897] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
