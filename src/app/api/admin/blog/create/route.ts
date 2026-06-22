import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabaseServer';
import { verifySessionToken } from '@/lib/adminAuth';

export async function POST(req: NextRequest) {
  const token = req.cookies.get('admin_auth')?.value ?? '';
  if (!await verifySessionToken(token)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { title, content, meta_description, tags, cover_image_url } = await req.json();

  if (!title?.trim() || !content?.trim()) {
    return NextResponse.json({ error: 'Title and content are required.' }, { status: 400 });
  }

  const slug = title.trim().toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .slice(0, 80);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data, error } = await (getSupabaseAdmin() as any)
    .from('posts')
    .insert([{
      slug,
      title: title.trim(),
      content: content.trim(),
      meta_description: (meta_description || '').trim(),
      cover_image_url: cover_image_url || '',
      tags: tags || [],
      status: 'draft',
    }])
    .select('id, title, slug')
    .single();

  if (error) {
    if (error.code === '23505') {
      return NextResponse.json({ error: 'A post with this title already exists.' }, { status: 409 });
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, post: data });
}
