import { MetadataRoute } from 'next';
import { getAllProducts } from '@/lib/shopify';
import { medicinePages } from '@/lib/medicinePages';
import { getSupabaseAdmin } from '@/lib/supabaseServer';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = 'https://himayucare.com';

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/products`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/neurojoint`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/kasni-ark`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/consultation`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ];

  const medicinePageUrls: MetadataRoute.Sitemap = medicinePages.map((m) => ({
    url: `${base}/medicines/${m.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  let blogPages: MetadataRoute.Sitemap = [];
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data } = await (getSupabaseAdmin() as any)
      .from('posts')
      .select('slug, updated_at, published_at')
      .eq('status', 'published');
    blogPages = (data ?? []).map((p: { slug: string; updated_at: string; published_at: string }) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: new Date(p.updated_at || p.published_at),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));
  } catch {}

  try {
    const products = await getAllProducts();
    const productPages: MetadataRoute.Sitemap = products.map((p) => ({
      url: `${base}/products/${p.handle}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));
    return [...staticPages, ...medicinePageUrls, ...blogPages, ...productPages];
  } catch {
    return [...staticPages, ...medicinePageUrls, ...blogPages];
  }
}
