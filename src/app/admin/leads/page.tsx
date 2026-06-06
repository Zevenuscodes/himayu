import { getSupabaseAdmin } from '@/lib/supabaseServer';
import LeadStatusSelect from '@/components/LeadStatusSelect';
import { Phone, Users } from 'lucide-react';

interface Lead {
  id: string;
  created_at: string;
  name: string;
  phone: string;
  age: string | null;
  concern: string | null;
  city: string | null;
  preferred_time: string | null;
  email: string | null;
  status: string;
}

const statusStyles: Record<string, string> = {
  new: 'bg-blue-100 text-blue-700',
  called: 'bg-yellow-100 text-yellow-700',
  converted: 'bg-green-100 text-green-700',
  not_interested: 'bg-gray-100 text-gray-500',
};

const statusLabels: Record<string, string> = {
  new: 'New',
  called: 'Called',
  converted: 'Converted',
  not_interested: 'Not Interested',
};

export default async function AdminLeadsPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: leads, error } = await (getSupabaseAdmin() as any)
    .from('consultations')
    .select('*')
    .order('created_at', { ascending: false });

  const newCount = leads?.filter((l: Lead) => l.status === 'new').length ?? 0;

  return (
    <main className="min-h-screen bg-[#faf8f3] pt-6 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <div>
            <h1 className="text-2xl font-bold text-[#2c2c2c] flex items-center gap-2">
              <Users className="w-6 h-6 text-[#4a7c59]" /> Consultation Leads
            </h1>
            <p className="text-sm text-[#888] mt-0.5">{newCount} new lead{newCount !== 1 ? 's' : ''} to call</p>
          </div>
          <a
            href="/admin/login"
            className="text-xs text-[#aaa] hover:text-[#4a7c59] transition-colors"
          >
            Logout
          </a>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl px-4 py-3 text-sm mb-6">
            Failed to load leads. Check Supabase connection.
          </div>
        )}

        {/* Mobile cards */}
        <div className="block lg:hidden space-y-3">
          {leads?.map((lead: Lead) => (
            <div key={lead.id} className="bg-white rounded-2xl border border-[#e8e0d0] p-4 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="font-semibold text-[#2c2c2c]">{lead.name}</p>
                  <p className="text-xs text-[#888]">{lead.city}{lead.age ? `, Age ${lead.age}` : ''}</p>
                </div>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusStyles[lead.status] ?? statusStyles.new}`}>
                  {statusLabels[lead.status] ?? lead.status}
                </span>
              </div>
              <a
                href={`tel:${lead.phone}`}
                className="flex items-center gap-2 bg-[#4a7c59] text-white px-4 py-2.5 rounded-full text-sm font-semibold w-full justify-center"
              >
                <Phone className="w-4 h-4" /> Call {lead.phone}
              </a>
              {lead.concern && <p className="text-xs text-[#666]">Concern: {lead.concern}</p>}
              {lead.preferred_time && <p className="text-xs text-[#888]">Prefers: {lead.preferred_time}</p>}
              <LeadStatusSelect id={lead.id} current={lead.status} />
            </div>
          ))}
        </div>

        {/* Desktop table */}
        <div className="hidden lg:block bg-white rounded-2xl border border-[#e8e0d0] overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#e8e0d0] bg-[#faf8f3]">
                <th className="text-left px-4 py-3 text-xs font-semibold text-[#888] uppercase tracking-wider">Date</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-[#888] uppercase tracking-wider">Name</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-[#888] uppercase tracking-wider">Phone</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-[#888] uppercase tracking-wider">Age</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-[#888] uppercase tracking-wider">City</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-[#888] uppercase tracking-wider">Concern</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-[#888] uppercase tracking-wider">Callback</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-[#888] uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f0ebe0]">
              {leads?.map((lead: Lead) => (
                <tr key={lead.id} className="hover:bg-[#faf8f3] transition-colors">
                  <td className="px-4 py-3 text-[#888] whitespace-nowrap">
                    {new Date(lead.created_at).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: '2-digit' })}
                  </td>
                  <td className="px-4 py-3 font-medium text-[#2c2c2c]">{lead.name}</td>
                  <td className="px-4 py-3">
                    <a
                      href={`tel:${lead.phone}`}
                      className="flex items-center gap-1.5 text-[#4a7c59] font-semibold hover:underline"
                    >
                      <Phone className="w-3.5 h-3.5" /> {lead.phone}
                    </a>
                  </td>
                  <td className="px-4 py-3 text-[#666]">{lead.age ?? '—'}</td>
                  <td className="px-4 py-3 text-[#666]">{lead.city ?? '—'}</td>
                  <td className="px-4 py-3 text-[#666] max-w-[180px] truncate">{lead.concern ?? '—'}</td>
                  <td className="px-4 py-3 text-[#888] whitespace-nowrap text-xs">{lead.preferred_time ?? '—'}</td>
                  <td className="px-4 py-3">
                    <LeadStatusSelect id={lead.id} current={lead.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {(!leads || leads.length === 0) && (
            <div className="text-center py-16 text-[#aaa]">No leads yet.</div>
          )}
        </div>
      </div>
    </main>
  );
}
