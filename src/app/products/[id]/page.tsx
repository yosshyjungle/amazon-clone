import { Suspense } from 'react';
import { notFound } from "next/navigation";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AddToCartButton from "@/components/product/AddToCartButton";
import BuyNowButton from "@/components/product/BuyNowButton";
import ProductInfo from "@/components/product/ProductInfo";
import RelatedProducts from "@/components/product/RelatedProducts";
import ProductReviews from "@/components/product/ProductReviews";

export default async function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Navbar />

      <main className="max-w-[1500px] mx-auto">
        <div className="p-4">
          <div className="bg-white rounded-lg shadow">
            <Suspense fallback={<ProductSkeleton />}>
              <ProductInfo id={params.id} />
            </Suspense>

            <div className="p-4 border-t">
              <h2 className="text-xl font-bold mb-4">関連商品</h2>
              <Suspense fallback={<RelatedProductsSkeleton />}>
                <RelatedProducts productId={params.id} />
              </Suspense>
            </div>

            <div className="p-4 border-t">
              <h2 className="text-xl font-bold mb-4">カスタマーレビュー</h2>
              <Suspense fallback={<ReviewsSkeleton />}>
                <ProductReviews productId={params.id} />
              </Suspense>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function ProductSkeleton() {
  return (
    <div className="p-6 animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="aspect-square bg-gray-200 rounded" />
        <div>
          <div className="h-8 bg-gray-200 rounded mb-4" />
          <div className="h-4 bg-gray-200 rounded mb-2 w-1/4" />
          <div className="h-6 bg-gray-200 rounded mb-4" />
          <div className="h-10 bg-gray-200 rounded mb-2" />
          <div className="h-10 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
}

function RelatedProductsSkeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="aspect-square bg-gray-200 rounded mb-2" />
          <div className="h-4 bg-gray-200 rounded mb-2" />
          <div className="h-4 bg-gray-200 rounded w-1/2" />
        </div>
      ))}
    </div>
  );
}

function ReviewsSkeleton() {
  return (
    <div className="space-y-4 animate-pulse">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="border-b pb-4">
          <div className="h-4 bg-gray-200 rounded mb-2 w-1/4" />
          <div className="h-4 bg-gray-200 rounded mb-2" />
          <div className="h-4 bg-gray-200 rounded w-3/4" />
        </div>
      ))}
    </div>
  );
} 