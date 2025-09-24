import { Star } from "lucide-react";

interface ProductTitleProps {
  productData: {
    title: string;
    rating: number;
    reviews: string;
  };
}

const ProductTitle = ({ productData }: ProductTitleProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 pb-4">
        <h1 className="text-3xl font-bold text-gray-900">
          {productData.title}
        </h1>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-5 h-5 ${star <= Math.floor(productData.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="font-semibold text-gray-900">{productData.rating}</span>
          <span className="text-gray-500">({productData.reviews})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductTitle;
