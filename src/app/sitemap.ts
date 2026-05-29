import { MetadataRoute } from 'next';
import { getAllProducts } from '@/lib/shopify';
import { medicinePages } from '@/lib/medicinePages';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = 'https://himayucare.com';

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/products`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/neurojoint`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/kasni-ark`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ];

  const medicinePageUrls: MetadataRoute.Sitemap = medicinePages.map((m) => ({
    url: `${base}/medicines/${m.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  try {
    const products = await getAllProducts();
    const productPages: MetadataRoute.Sitemap = products.map((p) => ({
      url: `${base}/products/${p.handle}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));
    return [...staticPages, ...medicinePageUrls, ...productPages];
  } catch {
    return [...staticPages, ...medicinePageUrls];
  }
}
