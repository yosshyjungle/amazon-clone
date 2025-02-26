export interface Product {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  isPrime: boolean;
  discount?: number;
  originalPrice?: number;
  category?: string;
  pointsBack?: number;
} 