import Image from "next/image";
import { getProduct } from "@/lib/api";
import AddToCartButton from "./AddToCartButton";
import BuyNowButton from "./BuyNowButton";

async function fetchProductInfo(id: string) {
  // 実際のAPIコールをシミュレート
  await new Promise(resolve => setTimeout(resolve, 2000));
  return getProduct(id);
}

export default async function ProductInfo({ id }: { id: string }) {
  const product = await fetchProductInfo(id);

  if (!product) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
      <div className="relative aspect-square">
        <Image
          src={product.imageUrl}
          alt={product.title}
          fill
          className="object-contain"
          priority
        />
      </div>

      <div>
        <h1 className="text-2xl font-medium mb-2">{product.title}</h1>
        
        <div className="flex items-center mb-4">
          {'★'.repeat(product.rating)}{'☆'.repeat(5-product.rating)}
          <span className="text-blue-500 ml-2">
            {product.reviewCount.toLocaleString()} 件のレビュー
          </span>
        </div>

        {/* 価格情報 */}
        {product.originalPrice && (
          <div className="text-sm text-gray-500 line-through">
            ¥{product.originalPrice.toLocaleString()}
          </div>
        )}

        <div className="text-2xl font-bold mb-2">
          ¥{product.price.toLocaleString()}
          {product.discount && (
            <span className="ml-2 text-sm text-[#CC0C39]">
              {product.discount}% OFF
            </span>
          )}
        </div>

        {/* ポイント還元情報 */}
        {product.pointsBack && (
          <div className="text-sm text-[#B12704] mb-4">
            ポイント還元：{product.pointsBack}%
          </div>
        )}

        {/* Prime表示 */}
        {product.isPrime && (
          <div className="mb-4">
            <span className="bg-blue-500 text-white px-2 py-1 rounded">
              Prime
            </span>
            <span className="ml-2 text-sm">
              翌日お届け可能
            </span>
          </div>
        )}

        <AddToCartButton productId={product.id} />
        <BuyNowButton productId={product.id} />
      </div>
    </div>
  );
} 