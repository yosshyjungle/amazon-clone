'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  isPrime?: boolean;
  discount?: number;
  originalPrice?: number;
  pointsBack?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  price,
  imageUrl,
  rating,
  reviewCount,
  isPrime = false,
  discount,
  originalPrice,
  pointsBack
}) => {
  return (
    <Link 
      href={`/products/${id}`}
      className="block bg-white p-4 rounded hover:shadow-lg transition-shadow"
    >
      <div className="relative aspect-square mb-2">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-contain"
        />
      </div>
      
      <h3 className="text-sm line-clamp-2 mb-1 text-[#0F1111] hover:text-[#C7511F]">
        {title}
      </h3>
      
      <div className="flex items-center mb-1">
        {'★'.repeat(rating)}{'☆'.repeat(5-rating)}
        <span className="text-blue-500 ml-1 text-sm">
          ({reviewCount})
        </span>
      </div>

      {originalPrice && (
        <div className="text-sm text-gray-500 line-through">
          ¥{originalPrice.toLocaleString()}
        </div>
      )}
      
      <div className="text-lg font-bold text-[#0F1111]">
        ¥{price.toLocaleString()}
        {discount && (
          <span className="ml-2 text-sm text-[#CC0C39]">
            {discount}% OFF
          </span>
        )}
      </div>
      
      {pointsBack && (
        <div className="text-xs text-[#B12704] mt-1">
          ポイント還元：{pointsBack}%
        </div>
      )}
      
      {isPrime && (
        <div className="mt-1">
          <span className="bg-blue-500 text-white text-xs px-1 py-0.5 rounded">
            Prime
          </span>
        </div>
      )}
    </Link>
  );
};

export default ProductCard; 