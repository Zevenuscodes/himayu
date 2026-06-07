import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CartProvider } from '@/context/CartContext';
import CookieConsent from '@/components/CookieConsent';
import WhatsAppButton from '@/components/WhatsAppButton';

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
  metadataBase: new URL('https://himayucare.com'),
  title: {
    default: 'Himayu Care — Classical Ayurvedic Medicines',
    template: '%s | Himayu Care',
  },
  description: 'GMP-certified classical Ayurvedic medicines — Arks, Kwaths, Chyawanprash and herbal kits made from pure Himalayan herbs. Trusted by 2000+ patients across India.',
  keywords: 'ayurvedic medicine online, buy ayurvedic medicine india, dashmool ark, kasni ark, shadangpaaniya kwath, chyawanprash, pilolin piles kit, GMP certified ayurveda, himalayan herbs, ayurvedic medicine dehradun, phalatrikadi kwath, punarnava ark, tulsi ark, makoy ark, herbal medicine india',
  authors: [{ name: 'Himayu Care', url: 'https://himayucare.com' }],
  creator: 'Himayu Care',
  publisher: 'Himayu Care',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  icons: {
    icon: '/logo.jpeg',
    shortcut: '/logo.jpeg',
    apple: '/logo.jpeg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://himayucare.com',
    siteName: 'Himayu Care',
    title: 'Himayu Care — Classical Ayurvedic Medicines',
    description: 'GMP-certified classical Ayurvedic medicines from pure Himalayan herbs. Arks, Kwaths, Chyawanprash and herbal kits trusted by 2000+ patients.',
    images: [{ url: '/logo.jpeg', width: 800, height: 800, alt: 'Himayu Care Logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Himayu Care — Classical Ayurvedic Medicines',
    description: 'GMP-certified classical Ayurvedic medicines from pure Himalayan herbs.',
    images: ['/logo.jpeg'],
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
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  );
}
