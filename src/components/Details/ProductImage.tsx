import Image from '@/components/ui/Image';

interface ProductImageProps {
  productData: {
    matchRate: string;
    title: string;
    image: string;
  };
}

const ProductImage = ({ productData }: ProductImageProps) => {
  return (
    <div className="relative overflow-hidden bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-8">
        {/* Match Rate Badge */}
        <div className="absolute top-4 left-4 z-10">
          <div className="bg-gradient-to-r from-pink-500 to-[#de86cc] text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg">
            🔥 {productData.matchRate}
          </div>
        </div>

        {/* Product Image Container */}
        <Image
          src={productData.image}
          alt={productData.title}
          containerClassName="w-full h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl"
          className="p-4"
          objectFit="contain"
          showLoading={true}
          fallbackText="Product image unavailable"
        />
      </div>
    </div>
  );
};

export default ProductImage;
