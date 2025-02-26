import { Product } from "@/types/product";
import { products, timeDeals, newArrivals, categoryBestSellers } from "@/data/products";
import { Review } from "@/types/review";

interface Review {
  id: string;
  productId: string;
  rating: number;
  userName: string;
  comment: string;
}

// モック商品データ
const mockProduct: Product = {
  id: "1",
  title: "Apple AirPods Pro (第2世代) ワイヤレスイヤホン",
  price: 29800,
  imageUrl: "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=800",
  rating: 4.5,
  reviewCount: 12463,
  isPrime: true,
  pointsBack: 5,
};

// モック関連商品データ
const mockRelatedProducts: Product[] = [
  {
    id: "2",
    title: "ワイヤレスノイズキャンセリングヘッドホン",
    price: 24800,
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
    rating: 4.5,
    reviewCount: 3245,
    isPrime: true,
  },
  {
    id: "3",
    title: "完全ワイヤレスイヤホン 防水対応",
    price: 9800,
    imageUrl: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800",
    rating: 4,
    reviewCount: 1876,
    isPrime: true,
  },
  {
    id: "4",
    title: "ゲーミングヘッドセット 7.1ch サラウンド",
    price: 12800,
    imageUrl: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800",
    rating: 4.5,
    reviewCount: 2341,
    isPrime: true,
  },
  {
    id: "5",
    title: "ワイヤレスイヤホン Bluetooth 5.3",
    price: 3980,
    imageUrl: "https://images.unsplash.com/photo-1606220838315-056192d5e927?w=800",
    rating: 4,
    reviewCount: 987,
    isPrime: true,
  },
];

// モックレビューデータ
const mockReviews: Review[] = [
  {
    id: "r1",
    productId: "1",
    rating: 5,
    userName: "Amazon カスタマー",
    comment: "音質が素晴らしく、ノイズキャンセリング機能も優秀です。付け心地も良く、長時間使用しても疲れません。",
  },
  {
    id: "r2",
    productId: "1",
    rating: 4,
    userName: "山田 太郎",
    comment: "前モデルから買い替えましたが、音質が向上していることを実感できます。ただし、価格が少し高いと感じました。",
  },
  {
    id: "r3",
    productId: "1",
    rating: 5,
    userName: "佐藤 花子",
    comment: "操作性が直感的で使いやすいです。通勤時の騒音も効果的にカットしてくれるので、静かな環境で音楽を楽しめます。",
  },
];

// API関数
export async function getProduct(id: string): Promise<Product | null> {
  // 全商品データから検索
  const allProducts = [...products, ...timeDeals, ...newArrivals, ...categoryBestSellers];
  return allProducts.find(p => p.id === id) || null;
}

export async function getRelatedProducts(id: string): Promise<Product[]> {
  // 同じカテゴリーの商品を返す（実際のAPIではより洗練されたロジックを使用）
  const product = await getProduct(id);
  if (!product) return [];
  
  return products.filter(p => p.id !== id).slice(0, 4);
}

export async function getProductReviews(id: string): Promise<Review[]> {
  return mockReviews.filter(review => review.productId === id);
} 