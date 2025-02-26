import { getRelatedProducts } from "@/lib/api";
import ProductCard from "./ProductCard";

async function fetchRelatedProducts(id: string) {
  // 実際のAPIコールをシミュレート
  await new Promise(resolve => setTimeout(resolve, 1500));
  return getRelatedProducts(id);
}

export default async function RelatedProducts({ productId }: { productId: string }) {
  const products = await fetchRelatedProducts(productId);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
} 