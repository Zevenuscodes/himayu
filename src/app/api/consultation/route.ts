import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabaseServer';

const OMNIDIM_AGENT_ID = 180043;

// Simple in-memory rate limit: max 3 submissions per IP per 10 minutes
const ipSubmissions = new Map<string, { count: number; resetAt: number }>();
function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = ipSubmissions.get(ip);
  if (!entry || now > entry.resetAt) {
    ipSubmissions.set(ip, { count: 1, resetAt: now + 10 * 60 * 1000 });
    return false;
  }
  if (entry.count >= 3) return true;
  entry.count++;
  return false;
}

async function triggerOmnidimCall(lead: {
  name: string;
  phone: string;
  age: string | null;
  concern: string | null;
  city: string | null;
  preferred_time: string | null;
}) {
  const apiKey = process.env.OMNIDIM_API_KEY;
  const phoneNumberId = process.env.OMNIDIM_PHONE_NUMBER_ID;

  if (!apiKey) return; // silently skip if not configured

  const toNumber = `+91${lead.phone}`;

  const body: Record<string, unknown> = {
    agent_id: OMNIDIM_AGENT_ID,
    to_number: toNumber,
    call_context: {
      user_name: lead.name,
      age: lead.age ?? 'not provided',
      main_health_concern: lead.concern ?? 'general consultation',
      city: lead.city ?? 'not provided',
      preferred_callback_time: lead.preferred_time ?? 'not provided',
    },
  };

  if (phoneNumberId) {
    body.from_number_id = parseInt(phoneNumberId);
  }

  await fetch('https://api.omnidim.io/api/v1/call/dispatch/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Api-Key ${apiKey}`,
    },
    body: JSON.stringify(body),
  });
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'Too many submissions. Please try again later.' }, { status: 429 });
  }

  try {
    const body = await req.json();
    const { name, phone, age, concern, city, preferred_time, email } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and phone are required.' }, { status: 400 });
    }

    const phoneDigits = phone.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      return NextResponse.json({ error: 'Please enter a valid 10-digit phone number.' }, { status: 400 });
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { error } = await (getSupabaseAdmin() as any).from('consultations').insert([
      {
        name: name.trim(),
        phone: phoneDigits,
        age: age?.trim() || null,
        concern: concern?.trim() || null,
        city: city?.trim() || null,
        preferred_time: preferred_time || null,
        email: email?.trim() || null,
        status: 'new',
      },
    ]);

    if (error) throw error;

    // Trigger Omnidim voice call — fire and forget, never block the response
    triggerOmnidimCall({
      name: name.trim(),
      phone: phoneDigits,
      age: age?.trim() || null,
      concern: concern?.trim() || null,
      city: city?.trim() || null,
      preferred_time: preferred_time || null,
    }).catch(() => {});

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Consultation submission error:', err);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
