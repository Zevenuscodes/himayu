import { redirect } from 'next/navigation';
import { getCustomerToken, logout } from './actions';
import { getCustomer } from '@/lib/shopify';
import Image from 'next/image';
import { User, Package, MapPin, LogOut, Truck } from 'lucide-react';

export default async function AccountPage() {
  const token = await getCustomerToken();
  if (!token) redirect('/account/login');

  const customer = await getCustomer(token).catch(() => null);
  if (!customer) redirect('/account/login');

  const orders = customer.orders.edges.map((e) => e.node);

  return (
    <main className="min-h-screen pt-24 bg-[#fdfbf7]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-[#4a7c59]/10 rounded-full flex items-center justify-center">
              <User className="w-7 h-7 text-[#4a7c59]" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#2c2c2c]">
                {customer.firstName} {customer.lastName}
              </h1>
              <p className="text-sm text-[#888]">{customer.email}</p>
            </div>
          </div>
          <form action={logout}>
            <button
              type="submit"
              className="flex items-center gap-2 text-sm text-[#888] hover:text-red-500 transition-colors px-4 py-2 rounded-xl border border-[#ede8dc] hover:border-red-200"
            >
              <LogOut className="w-4 h-4" /> Sign out
            </button>
          </form>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">

          {/* Orders */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <Package className="w-5 h-5 text-[#4a7c59]" />
              <h2 className="text-lg font-bold text-[#2c2c2c]">Your Orders</h2>
            </div>

            {orders.length === 0 ? (
              <div className="bg-white border border-[#ede8dc] rounded-2xl p-10 text-center text-[#bbb]">
                <Image src="/logo.jpeg" alt="" width={48} height={48} className="rounded-full mx-auto mb-4 opacity-40 object-cover" />
                <p className="text-sm">No orders yet. Start shopping!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {orders.map((order) => (
                  <div key={order.id} className="bg-white border border-[#ede8dc] rounded-2xl p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="font-semibold text-[#2c2c2c] text-sm">Order #{order.orderNumber}</p>
                        <p className="text-xs text-[#aaa] mt-0.5">
                          {new Date(order.processedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-[#2c2c2c] text-sm">
                          {order.currentTotalPrice.currencyCode} {parseFloat(order.currentTotalPrice.amount).toFixed(2)}
                        </p>
                        <div className="flex gap-1.5 mt-1 justify-end flex-wrap">
                          <span className={`inline-block text-[10px] font-medium px-2 py-0.5 rounded-full ${
                            order.financialStatus === 'PAID'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {order.financialStatus}
                          </span>
                          <span className={`inline-block text-[10px] font-medium px-2 py-0.5 rounded-full ${
                            order.fulfillmentStatus === 'FULFILLED'
                              ? 'bg-blue-100 text-blue-700'
                              : order.fulfillmentStatus === 'PARTIALLY_FULFILLED'
                              ? 'bg-orange-100 text-orange-700'
                              : 'bg-[#f0ebe0] text-[#888]'
                          }`}>
                            {order.fulfillmentStatus === 'FULFILLED' ? 'Shipped'
                              : order.fulfillmentStatus === 'PARTIALLY_FULFILLED' ? 'Partially Shipped'
                              : 'Processing'}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-[#f0ebe0] pt-3 space-y-1 mb-4">
                      {order.lineItems.edges.map(({ node }) => (
                        <p key={node.title} className="text-xs text-[#666]">
                          {node.quantity}× {node.title}
                        </p>
                      ))}
                    </div>

                    {order.statusUrl && (
                      <a
                        href={order.statusUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-medium text-[#4a7c59] border border-[#4a7c59]/30 px-4 py-2 rounded-full hover:bg-[#4a7c59]/5 transition-colors"
                      >
                        <Truck className="w-3.5 h-3.5" />
                        Track Order
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-5">

            {/* Account details */}
            <div className="bg-white border border-[#ede8dc] rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <User className="w-4 h-4 text-[#4a7c59]" />
                <h3 className="font-semibold text-[#2c2c2c] text-sm">Account Details</h3>
              </div>
              <div className="space-y-1 text-sm text-[#666]">
                <p>{customer.firstName} {customer.lastName}</p>
                <p>{customer.email}</p>
                {customer.phone && <p>{customer.phone}</p>}
              </div>
            </div>

            {/* Default address */}
            <div className="bg-white border border-[#ede8dc] rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-4 h-4 text-[#4a7c59]" />
                <h3 className="font-semibold text-[#2c2c2c] text-sm">Default Address</h3>
              </div>
              {customer.defaultAddress ? (
                <div className="text-sm text-[#666] space-y-0.5">
                  <p>{customer.defaultAddress.firstName} {customer.defaultAddress.lastName}</p>
                  <p>{customer.defaultAddress.address1}</p>
                  <p>{customer.defaultAddress.city}, {customer.defaultAddress.province}</p>
                  <p>{customer.defaultAddress.country} — {customer.defaultAddress.zip}</p>
                </div>
              ) : (
                <p className="text-sm text-[#bbb]">No address saved yet.</p>
              )}
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
