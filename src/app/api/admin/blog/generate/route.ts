import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabaseServer';
import { verifySessionToken } from '@/lib/adminAuth';
import Anthropic from '@anthropic-ai/sdk';

export async function POST(req: NextRequest) {
  const token = req.cookies.get('admin_auth')?.value ?? '';
  if (!await verifySessionToken(token)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { topic } = await req.json();
  if (!topic || typeof topic !== 'string' || topic.trim().length < 3) {
    return NextResponse.json({ error: 'Please enter a valid topic.' }, { status: 400 });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'Claude API not configured.' }, { status: 500 });
  }

  const client = new Anthropic({ apiKey });

  const message = await client.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 4096,
    system: `You are an expert Ayurvedic content writer for Himayu Care, a GMP-certified Ayurvedic medicine company based in Uttarakhand, India. Write SEO-optimized blog posts about Ayurvedic health topics.

Return your response as a JSON object with exactly these fields:
- "title": SEO-friendly blog title (include Hindi if relevant)
- "meta_description": under 160 characters, keyword-rich
- "content": the full blog post in markdown (800-1200 words, include H2 subheadings, be informative and authoritative, mention Himayu Care naturally where appropriate)
- "tags": array of 3-5 relevant tags
- "slug": URL-friendly slug derived from the title

Write in a mix of English with Hindi terms where natural for an Indian audience. Include practical health advice, Ayurvedic principles, and dosage guidance where appropriate. Do NOT make unverified medical claims.`,
    messages: [
      { role: 'user', content: `Write a blog post about: ${topic.trim()}` },
    ],
  });

  const text = message.content[0].type === 'text' ? message.content[0].text : '';

  let parsed: { title: string; meta_description: string; content: string; tags: string[]; slug: string };
  try {
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error('No JSON found');
    parsed = JSON.parse(jsonMatch[0]);
  } catch {
    const slug = topic.trim().toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').slice(0, 60);
    parsed = {
      title: topic.trim(),
      meta_description: `Learn about ${topic.trim()} — Ayurvedic insights from Himayu Care.`,
      content: text,
      tags: ['ayurveda', 'health'],
      slug,
    };
  }

  const finalSlug = parsed.slug || parsed.title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').slice(0, 60);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data, error } = await (getSupabaseAdmin() as any)
    .from('posts')
    .insert([{
      slug: finalSlug,
      title: parsed.title,
      meta_description: parsed.meta_description,
      content: parsed.content,
      tags: parsed.tags,
      status: 'draft',
    }])
    .select('id, title, slug')
    .single();

  if (error) {
    if (error.code === '23505') {
      return NextResponse.json({ error: 'A post with this slug already exists. Try a different topic.' }, { status: 409 });
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, post: data });
}
