import { getSupabaseAdmin } from '@/lib/supabaseServer';
import { getOrders, ShopifyOrder } from '@/lib/shopifyAdmin';
import AdminNav from '@/components/AdminNav';
import { ShoppingBag, Phone, Link2 } from 'lucide-react';

const paymentBadge: Record<string, string> = {
  paid: 'bg-green-100 text-green-700',
  pending: 'bg-yellow-100 text-yellow-700',
  refunded: 'bg-red-100 text-red-600',
  voided: 'bg-gray-100 text-gray-500',
  partially_paid: 'bg-orange-100 text-orange-600',
};

const fulfillmentBadge: Record<string, string> = {
  fulfilled: 'bg-green-100 text-green-700',
  partial: 'bg-yellow-100 text-yellow-700',
  unfulfilled: 'bg-blue-100 text-blue-700',
};

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1).replace(/_/g, ' ');
}

export const revalidate = 30;

export default async function AdminOrdersPage() {
  let orders: ShopifyOrder[] = [];
  let error = '';
  let notConnected = false;

  try {
    // Try env var token first, then Supabase-stored token
    let token = process.env.SHOPIFY_ADMIN_ACCESS_TOKEN ?? '';

    if (!token) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { data } = await (getSupabaseAdmin() as any)
        .from('settings')
        .select('value')
        .eq('key', 'shopify_admin_token')
        .single();
      token = data?.value ?? '';
    }

    if (!token) {
      notConnected = true;
    } else {
      orders = await getOrders(token, 100);
    }
  } catch (e) {
    error = (e as Error).message;
  }

  return (
    <main className="min-h-screen bg-[#faf8f3] pt-6 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-2 flex-wrap gap-3">
          <div>
            <h1 className="text-2xl font-bold text-[#2c2c2c] flex items-center gap-2">
              <ShoppingBag className="w-6 h-6 text-[#4a7c59]" /> Orders
            </h1>
            <p className="text-sm text-[#888] mt-0.5">{orders.length} orders</p>
          </div>
          <a href="/admin/login" className="text-xs text-[#aaa] hover:text-[#4a7c59] transition-colors">Logout</a>
        </div>

        <AdminNav active="orders" />

        {notConnected && (
          <div className="bg-white rounded-2xl border border-[#e8e0d0] p-10 text-center">
            <Link2 className="w-10 h-10 text-[#ccc] mx-auto mb-3" />
            <p className="text-[#2c2c2c] font-semibold mb-2">Shopify not connected yet</p>
            <p className="text-[#888] text-sm mb-6">Click below to connect your Shopify store and start seeing orders.</p>
            <a
              href="/api/shopify/install"
              className="inline-flex items-center gap-2 bg-[#4a7c59] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#3a6347] transition-colors"
            >
              Connect Shopify →
            </a>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl px-4 py-3 text-sm mb-6">{error}</div>
        )}

        {/* Mobile cards */}
        <div className="block lg:hidden space-y-3">
          {orders.map((order) => {
            const phone = order.customer?.phone || order.shipping_address?.phone;
            return (
              <div key={order.id} className="bg-white rounded-2xl border border-[#e8e0d0] p-4 space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-bold text-[#2c2c2c]">#{order.order_number}</p>
                    <p className="text-sm font-medium text-[#555]">
                      {order.customer ? `${order.customer.first_name} ${order.customer.last_name}` : 'Guest'}
                    </p>
                    <p className="text-xs text-[#888]">
                      {new Date(order.created_at).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: '2-digit', hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                  <p className="font-bold text-[#2c2c2c]">₹{parseFloat(order.total_price).toFixed(2)}</p>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${paymentBadge[order.financial_status] ?? 'bg-gray-100 text-gray-500'}`}>
                    {capitalize(order.financial_status)}
                  </span>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${fulfillmentBadge[order.fulfillment_status ?? 'unfulfilled'] ?? 'bg-blue-100 text-blue-700'}`}>
                    {capitalize(order.fulfillment_status ?? 'Unfulfilled')}
                  </span>
                </div>
                <div className="text-xs text-[#666] space-y-0.5">
                  {order.line_items.map((item) => (
                    <p key={item.id}>• {item.title}{item.variant_title ? ` — ${item.variant_title}` : ''} × {item.quantity}</p>
                  ))}
                </div>
                {phone && (
                  <a href={`tel:${phone}`} className="flex items-center gap-2 text-[#4a7c59] text-sm font-medium">
                    <Phone className="w-3.5 h-3.5" /> {phone}
                  </a>
                )}
                {order.shipping_address && (
                  <p className="text-xs text-[#888]">{order.shipping_address.city}, {order.shipping_address.province}</p>
                )}
              </div>
            );
          })}
        </div>

        {/* Desktop table */}
        {orders.length > 0 && (
          <div className="hidden lg:block bg-white rounded-2xl border border-[#e8e0d0] overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#e8e0d0] bg-[#faf8f3]">
                  {['Order', 'Date', 'Customer', 'Phone', 'Items', 'City', 'Payment', 'Fulfillment', 'Total'].map((h) => (
                    <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-[#888] uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f0ebe0]">
                {orders.map((order) => {
                  const phone = order.customer?.phone || order.shipping_address?.phone;
                  return (
                    <tr key={order.id} className="hover:bg-[#faf8f3] transition-colors">
                      <td className="px-4 py-3 font-bold text-[#2c2c2c]">#{order.order_number}</td>
                      <td className="px-4 py-3 text-[#888] whitespace-nowrap text-xs">
                        {new Date(order.created_at).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: '2-digit' })}
                        <br />
                        {new Date(order.created_at).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
                      </td>
                      <td className="px-4 py-3 font-medium text-[#2c2c2c]">
                        {order.customer ? `${order.customer.first_name} ${order.customer.last_name}` : 'Guest'}
                        {order.customer?.email && <p className="text-xs text-[#888] font-normal">{order.customer.email}</p>}
                      </td>
                      <td className="px-4 py-3">
                        {phone ? (
                          <a href={`tel:${phone}`} className="flex items-center gap-1 text-[#4a7c59] font-medium hover:underline whitespace-nowrap">
                            <Phone className="w-3 h-3" /> {phone}
                          </a>
                        ) : <span className="text-[#ccc]">—</span>}
                      </td>
                      <td className="px-4 py-3 text-[#666] text-xs max-w-[200px]">
                        {order.line_items.map((item) => (
                          <p key={item.id} className="truncate">{item.title}{item.variant_title ? ` (${item.variant_title})` : ''} × {item.quantity}</p>
                        ))}
                      </td>
                      <td className="px-4 py-3 text-[#666] whitespace-nowrap">{order.shipping_address?.city ?? '—'}</td>
                      <td className="px-4 py-3">
                        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${paymentBadge[order.financial_status] ?? 'bg-gray-100 text-gray-500'}`}>
                          {capitalize(order.financial_status)}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${fulfillmentBadge[order.fulfillment_status ?? 'unfulfilled'] ?? 'bg-blue-100 text-blue-700'}`}>
                          {capitalize(order.fulfillment_status ?? 'Unfulfilled')}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-bold text-[#2c2c2c] whitespace-nowrap">
                        ₹{parseFloat(order.total_price).toFixed(2)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}
