import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CartProvider } from '@/context/CartContext';
import CookieConsent from '@/components/CookieConsent';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Himayu Care — Classical Ayurvedic Medicines',
  description: 'GMP-certified classical Ayurvedic medicines — Arks, Kwaths, Chyawanprash and herbal kits made from pure Himalayan herbs. Trusted remedies for lasting wellness.',
  keywords: 'ayurvedic medicine, dashmool ark, kasni ark, chyawanprash, pilolin kit, herbal remedies, himalayan herbs, GMP certified ayurveda',
  icons: {
    icon: '/logo.jpeg',
    shortcut: '/logo.jpeg',
    apple: '/logo.jpeg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-[#fdfbf7] text-[#2c2c2c] font-sans antialiased flex flex-col">
        <CartProvider>
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
          <CookieConsent />
        </CartProvider>
      </body>
    </html>
  );
}
