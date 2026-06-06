'use client';

import { useState } from 'react';
import { Leaf, Phone, User, MapPin, Clock, Heart, CheckCircle2, Mail } from 'lucide-react';

const concerns = [
  'Joint Pain / Arthritis',
  'Digestive Issues',
  'Liver / Kidney Health',
  'Skin Problems',
  'Respiratory Issues',
  'Piles / Haemorrhoids',
  'General Weakness / Immunity',
  'Women\'s Health',
  'Other',
];

const timeSlots = [
  'Morning (9am – 12pm)',
  'Afternoon (12pm – 4pm)',
  'Evening (4pm – 7pm)',
];

export default function ConsultationPage() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    age: '',
    concern: '',
    city: '',
    preferred_time: '',
    email: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setError('');
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Something went wrong.');
      } else {
        setSubmitted(true);
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <main className="min-h-screen pt-24 bg-[#faf8f3] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="flex justify-center mb-5">
            <div className="w-16 h-16 bg-[#4a7c59]/10 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-[#4a7c59]" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-[#2c2c2c] mb-3">Request Received!</h1>
          <p className="text-[#666] leading-relaxed mb-6">
            Thank you, <strong>{form.name}</strong>. Our Ayurvedic expert will call you on{' '}
            <strong>+91 {form.phone}</strong> within 24 hours.
          </p>
          <a
            href="/products"
            className="inline-flex items-center gap-2 bg-[#4a7c59] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#3a6347] transition-colors"
          >
            Browse Our Medicines
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-24 bg-[#faf8f3]">
      {/* Hero */}
      <section className="bg-[#4a7c59] text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-2 bg-white/15 text-white text-xs font-medium px-4 py-1.5 rounded-full">
              <Leaf className="w-3.5 h-3.5" /> Consultation Enquiry
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Consultation Enquiry</h1>
          <p className="text-white/80 text-base sm:text-lg max-w-xl mx-auto">
            Speak with our Ayurvedic expert. Get personalised medicine advice based on your health concern — completely free.
          </p>
        </div>
      </section>

      {/* Why consult */}
      <section className="py-10 px-4 border-b border-[#e8e0d0]">
        <div className="max-w-3xl mx-auto grid sm:grid-cols-3 gap-6 text-center">
          {[
            { icon: Phone, title: 'Free Callback', desc: 'We call you — no charge, no commitment.' },
            { icon: Heart, title: 'Personalised Advice', desc: 'Expert guidance based on your condition.' },
            { icon: Leaf, title: '100% Ayurvedic', desc: 'Natural, GMP-certified medicines only.' },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 bg-[#4a7c59]/10 rounded-full flex items-center justify-center">
                <Icon className="w-5 h-5 text-[#4a7c59]" />
              </div>
              <p className="font-semibold text-[#2c2c2c] text-sm">{title}</p>
              <p className="text-[#888] text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form */}
      <section className="py-12 px-4">
        <div className="max-w-xl mx-auto">
          <h2 className="text-xl font-bold text-[#2c2c2c] mb-7 text-center">Fill in your details</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-[#2c2c2c] mb-1.5">
                <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-[#4a7c59]" /> Full Name <span className="text-red-500">*</span></span>
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="e.g. Ramesh Sharma"
                className="w-full border border-[#e0d8cc] rounded-xl px-4 py-3 text-sm text-[#2c2c2c] bg-white placeholder-[#bbb] focus:outline-none focus:border-[#4a7c59] transition-colors"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-[#2c2c2c] mb-1.5">
                <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-[#4a7c59]" /> Mobile Number <span className="text-red-500">*</span></span>
              </label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                type="tel"
                placeholder="10-digit mobile number"
                maxLength={15}
                className="w-full border border-[#e0d8cc] rounded-xl px-4 py-3 text-sm text-[#2c2c2c] bg-white placeholder-[#bbb] focus:outline-none focus:border-[#4a7c59] transition-colors"
              />
            </div>

            {/* Age + City row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#2c2c2c] mb-1.5">Age</label>
                <input
                  name="age"
                  value={form.age}
                  onChange={handleChange}
                  placeholder="e.g. 45"
                  type="number"
                  min="1"
                  max="120"
                  className="w-full border border-[#e0d8cc] rounded-xl px-4 py-3 text-sm text-[#2c2c2c] bg-white placeholder-[#bbb] focus:outline-none focus:border-[#4a7c59] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#2c2c2c] mb-1.5">
                  <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#4a7c59]" /> City</span>
                </label>
                <input
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="e.g. Delhi"
                  className="w-full border border-[#e0d8cc] rounded-xl px-4 py-3 text-sm text-[#2c2c2c] bg-white placeholder-[#bbb] focus:outline-none focus:border-[#4a7c59] transition-colors"
                />
              </div>
            </div>

            {/* Health Concern */}
            <div>
              <label className="block text-sm font-medium text-[#2c2c2c] mb-1.5">
                <span className="flex items-center gap-1.5"><Heart className="w-3.5 h-3.5 text-[#4a7c59]" /> Health Concern</span>
              </label>
              <select
                name="concern"
                value={form.concern}
                onChange={handleChange}
                className="w-full border border-[#e0d8cc] rounded-xl px-4 py-3 text-sm text-[#2c2c2c] bg-white focus:outline-none focus:border-[#4a7c59] transition-colors"
              >
                <option value="">Select your concern</option>
                {concerns.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Preferred Callback Time */}
            <div>
              <label className="block text-sm font-medium text-[#2c2c2c] mb-1.5">
                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-[#4a7c59]" /> Preferred Callback Time</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setForm((f) => ({ ...f, preferred_time: slot }))}
                    className={`px-4 py-2 rounded-full border text-xs font-medium transition-colors ${
                      form.preferred_time === slot
                        ? 'bg-[#4a7c59] border-[#4a7c59] text-white'
                        : 'border-[#e0d8cc] text-[#555] hover:border-[#4a7c59] hover:text-[#4a7c59]'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Email (optional) */}
            <div>
              <label className="block text-sm font-medium text-[#2c2c2c] mb-1.5">
                <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-[#4a7c59]" /> Email <span className="text-[#aaa] font-normal">(optional)</span></span>
              </label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="example@gmail.com"
                className="w-full border border-[#e0d8cc] rounded-xl px-4 py-3 text-sm text-[#2c2c2c] bg-white placeholder-[#bbb] focus:outline-none focus:border-[#4a7c59] transition-colors"
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#4a7c59] text-white py-4 rounded-full font-semibold text-sm hover:bg-[#3a6347] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? 'Submitting...' : 'Submit Enquiry'}
            </button>

            <p className="text-center text-xs text-[#aaa]">
              We will call you within 24 hours. Your information is kept private.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
