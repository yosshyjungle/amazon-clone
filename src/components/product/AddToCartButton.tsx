'use client';

interface AddToCartButtonProps {
  productId: string;
}

export default function AddToCartButton({ productId }: AddToCartButtonProps) {
  return (
    <button 
      onClick={() => console.log(`Add to cart: ${productId}`)}
      className="w-full bg-[#FFD814] hover:bg-[#F7CA00] text-[#0F1111] py-2 rounded-full mb-2"
    >
      カートに入れる
    </button>
  );
} 