'use client';

import { useState } from 'react';

const statuses = [
  { value: 'new', label: 'New', color: 'bg-blue-100 text-blue-700' },
  { value: 'called', label: 'Called', color: 'bg-yellow-100 text-yellow-700' },
  { value: 'converted', label: 'Converted', color: 'bg-green-100 text-green-700' },
  { value: 'not_interested', label: 'Not Interested', color: 'bg-gray-100 text-gray-500' },
];

export default function LeadStatusSelect({ id, current }: { id: string; current: string }) {
  const [status, setStatus] = useState(current);
  const [saving, setSaving] = useState(false);

  async function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const newStatus = e.target.value;
    setSaving(true);
    await fetch(`/api/admin/leads/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus }),
    });
    setStatus(newStatus);
    setSaving(false);
  }

  const current_style = statuses.find((s) => s.value === status)?.color ?? 'bg-blue-100 text-blue-700';

  return (
    <select
      value={status}
      onChange={handleChange}
      disabled={saving}
      className={`text-xs font-medium px-2.5 py-1.5 rounded-full border-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#4a7c59] disabled:opacity-60 ${current_style}`}
    >
      {statuses.map((s) => (
        <option key={s.value} value={s.value}>{s.label}</option>
      ))}
    </select>
  );
}
