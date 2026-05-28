'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    category: 'About Our Products',
    items: [
      {
        q: 'What are Arks (Distillates)?',
        a: 'Arks are herbal distillates prepared by steam-distilling fresh or dried medicinal herbs. The therapeutic essence of the herb is captured in water form, making it easy to absorb and gentle on the stomach. Our Arks include Tulsi, Dashmool, Kasni, Makoy and Punarnava.',
      },
      {
        q: 'What are Kwaths (Decoctions)?',
        a: 'Kwaths are classical Ayurvedic decoction powders. You soak the powder in water, boil it down to one-quarter of the original volume, filter and drink. This method extracts the full therapeutic properties of the herbs. Examples include Shadangpaaniya and Phaltrikadi Kwath.',
      },
      {
        q: 'What is Chyawanprash and who can take it?',
        a: 'Chyawanprash is a classical Ayurvedic health tonic made from over 40 Himalayan herbs. It boosts immunity, improves memory, enhances skin radiance and kindles digestive fire. It is safe for all age groups — children, adults and the elderly can all benefit from regular use.',
      },
      {
        q: 'Are Himayu Care products GMP certified?',
        a: 'Yes. All our medicines are manufactured under strict Good Manufacturing Practice (GMP) standards by Gurukul Ayurved Pharmacy, Dehradun, Uttarakhand. GMP certification ensures consistent quality, safety and purity in every batch.',
      },
    ],
  },
  {
    category: 'Safety & Side Effects',
    items: [
      {
        q: 'Do your medicines have any side effects?',
        a: 'No. All Himayu Care products are 100% Ayurvedic and made from pure natural herbs with no synthetic additives. When taken as directed, they are safe for long-term use and have no known side effects.',
      },
      {
        q: 'Can I take Ayurvedic medicines alongside my regular medication?',
        a: 'Ayurvedic medicines are generally safe to take alongside conventional medication, but we recommend consulting your physician before combining them — especially if you are on blood thinners, diabetes medication or have a chronic condition.',
      },
      {
        q: 'Are the medicines safe during pregnancy?',
        a: 'Some herbs may not be suitable during pregnancy. Dashmool Ark is traditionally used postpartum, not during pregnancy. We strongly recommend consulting an Ayurvedic physician before taking any medicine during pregnancy or breastfeeding.',
      },
    ],
  },
  {
    category: 'Usage & Dosage',
    items: [
      {
        q: 'How do I prepare Phaltrikadi Kwath?',
        a: 'Soak 5g of the powder in 200ml of water for 8 hours (preferably overnight). Boil the soaked mixture until only one-quarter (50ml) remains. Filter and drink warm on an empty stomach, or as advised by your physician.',
      },
      {
        q: 'How do I take Shadangpaaniya?',
        a: 'Shadangpaaniya is a six-herb decoction powder. Typically it is boiled in water and consumed as a warm drink during fever or excessive heat. Dosage and preparation can vary — follow the instructions on the pack or as directed by your physician.',
      },
      {
        q: 'How long does it take to see results with Ayurvedic medicines?',
        a: 'Ayurvedic medicines work gently and holistically. Acute conditions like fever or cold may respond within a few days. Chronic conditions like diabetes, arthritis or liver disorders typically require consistent use over 4–12 weeks. Results vary by individual constitution (Prakriti) and severity.',
      },
      {
        q: 'What is the best time to take Arks?',
        a: 'Most Arks are best taken on an empty stomach in the morning, 30 minutes before meals. However, dosage timing can vary per condition — always follow the label instructions or physician\'s advice for best results.',
      },
    ],
  },
  {
    category: 'Orders & Shipping',
    items: [
      {
        q: 'Do you ship across India?',
        a: 'Yes, we deliver to all major cities and towns across India. Shipping timelines typically range from 3–7 business days depending on your location.',
      },
      {
        q: 'Is there free shipping?',
        a: 'Yes! We offer free shipping on all orders above ₹999.',
      },
      {
        q: 'How do I track my order?',
        a: 'Once your order is dispatched, you will receive a tracking link via SMS or email. You can also log in to your account on our website to view your order history and status.',
      },
    ],
  },
  {
    category: 'Returns & Refunds',
    items: [
      {
        q: 'What is your return policy?',
        a: 'If you receive a damaged or incorrect product, please contact us within 48 hours of delivery at himayucare@gmail.com or call +91 78179 82004. We will arrange a replacement or refund promptly.',
      },
      {
        q: 'Can I return an opened product?',
        a: 'For hygiene and safety reasons, we are unable to accept returns on opened Ayurvedic medicines unless the product is defective or incorrectly supplied.',
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#ede8dc] last:border-0">
      <button
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="text-sm font-medium text-[#2c2c2c] leading-snug">{q}</span>
        <ChevronDown
          className={`w-4 h-4 text-[#4a7c59] flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <p className="pb-5 text-sm text-[#666] leading-relaxed">{a}</p>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <main className="min-h-screen pt-24 bg-[#fdfbf7]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-14">
          <span className="inline-block bg-[#4a7c59]/10 text-[#4a7c59] text-xs font-medium px-4 py-1.5 rounded-full mb-4">
            Help Centre
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#2c2c2c]">Frequently Asked Questions</h1>
          <p className="mt-3 text-[#888] text-sm max-w-md mx-auto">
            Everything you need to know about our Ayurvedic medicines, orders and more.
          </p>
        </div>

        <div className="space-y-10">
          {faqs.map(({ category, items }) => (
            <div key={category}>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[#4a7c59] mb-2">{category}</h2>
              <div className="bg-white rounded-2xl border border-[#ede8dc] px-6">
                {items.map((item) => (
                  <FAQItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#4a7c59]/5 border border-[#4a7c59]/20 rounded-2xl p-8 text-center">
          <p className="text-[#2c2c2c] font-medium mb-1">Still have a question?</p>
          <p className="text-sm text-[#888] mb-4">Our team is happy to help.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:himayucare@gmail.com"
              className="px-6 py-2.5 bg-[#4a7c59] text-white rounded-full text-sm font-medium hover:bg-[#3a6347] transition-colors"
            >
              Email us
            </a>
            <a
              href="tel:+917817982004"
              className="px-6 py-2.5 border border-[#4a7c59] text-[#4a7c59] rounded-full text-sm font-medium hover:bg-[#4a7c59]/5 transition-colors"
            >
              Call +91 78179 82004
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
