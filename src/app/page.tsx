import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import ProductCard from "@/components/product/ProductCard";
import { products, timeDeals, newArrivals, categoryBestSellers } from "@/data/products";
import Carousel from "@/components/carousel/Carousel";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* ヘッダーとナビゲーション */}
      <Header />
      <Navbar />

      <main className="max-w-[1500px] mx-auto">
        {/* メインコンテンツエリア */}
        <div className="px-4">
          {/* カルーセル部分を更新 */}
          <div className="relative">
            <Carousel />
          </div>

          {/* 商品グリッド */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 -mt-20 relative z-10">
            {/* タイムセール */}
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-bold mb-3">タイムセール</h2>
              <div className="grid grid-cols-2 gap-2">
                {timeDeals.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </div>

            {/* おすすめ商品 */}
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-bold mb-3">おすすめ商品</h2>
              <div className="grid grid-cols-2 gap-2">
                {products.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </div>

            {/* 新着商品 */}
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-bold mb-3">新着商品</h2>
              <div className="grid grid-cols-2 gap-2">
                {newArrivals.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </div>

            {/* カテゴリー別売れ筋 */}
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-bold mb-3">カテゴリー別売れ筋</h2>
              <div className="grid grid-cols-2 gap-2">
                {categoryBestSellers.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
