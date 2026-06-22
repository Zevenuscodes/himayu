import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabaseServer';
import { verifySessionToken } from '@/lib/adminAuth';

export async function POST(req: NextRequest) {
  const token = req.cookies.get('admin_auth')?.value ?? '';
  if (!await verifySessionToken(token)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const formData = await req.formData();
  const file = formData.get('file') as File | null;

  if (!file) {
    return NextResponse.json({ error: 'No file provided.' }, { status: 400 });
  }

  const ext = file.name.split('.').pop() ?? 'jpg';
  const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

  const buffer = Buffer.from(await file.arrayBuffer());

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { error } = await (getSupabaseAdmin() as any).storage
    .from('blog-images')
    .upload(fileName, buffer, {
      contentType: file.type,
      cacheControl: '31536000',
    });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: urlData } = (getSupabaseAdmin() as any).storage
    .from('blog-images')
    .getPublicUrl(fileName);

  return NextResponse.json({ url: urlData.publicUrl });
}
