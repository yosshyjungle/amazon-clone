import { getProductReviews } from "@/lib/api";

async function fetchProductReviews(id: string) {
  // 実際のAPIコールをシミュレート
  await new Promise(resolve => setTimeout(resolve, 3000));
  return getProductReviews(id);
}

export default async function ProductReviews({ productId }: { productId: string }) {
  const reviews = await fetchProductReviews(productId);

  return (
    <div className="space-y-4">
      {reviews.map(review => (
        <div key={review.id} className="border-b pb-4">
          <div className="flex items-center mb-2">
            {'★'.repeat(review.rating)}{'☆'.repeat(5-review.rating)}
            <span className="ml-2 text-sm text-gray-600">
              {review.userName}
            </span>
          </div>
          <p className="text-sm">{review.comment}</p>
        </div>
      ))}
    </div>
  );
} 