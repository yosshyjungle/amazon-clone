'use client';

interface BuyNowButtonProps {
  productId: string;
}

export default function BuyNowButton({ productId }: BuyNowButtonProps) {
  return (
    <button 
      onClick={() => console.log(`Buy now: ${productId}`)}
      className="w-full bg-[#FFA41C] hover:bg-[#FA8900] text-[#0F1111] py-2 rounded-full"
    >
      今すぐ買う
    </button>
  );
} 