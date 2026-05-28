import { getAllProducts, ShopifyProduct } from '@/lib/shopify';
import ProductCard from '@/components/ProductCard';
import { Leaf } from 'lucide-react';

export const revalidate = 60;

export default async function ProductsPage() {
  let products: ShopifyProduct[] = [];
  try {
    products = await getAllProducts();
  } catch {
    // show empty state until API is configured
  }

  return (
    <main className="min-h-screen pt-24">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#eef5ec] to-[#faf8f3] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-[#4a7c59]/10 text-[#4a7c59] text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            <Leaf className="w-3.5 h-3.5" /> All Products
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#2c2c2c]">Our Collection</h1>
          <p className="mt-3 text-[#888] max-w-md mx-auto">
            Pure Ayurvedic formulas crafted with love and tradition.
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {products.length > 0 ? (
          <>
            <p className="text-sm text-[#888] mb-8">{products.length} products</p>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-32 text-[#bbb]">
            <p className="text-5xl mb-6">🌿</p>
            <h2 className="text-xl font-medium text-[#999] mb-2">No products yet</h2>
            <p className="text-sm">Connect your Shopify store to see your products here.</p>
          </div>
        )}
      </div>
    </main>
  );
}
