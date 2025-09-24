interface ProductImageProps {
  productData: {
    matchRate: string;
    title: string;
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
        <div className="w-full h-96 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center relative overflow-hidden">
          {/* Omega-3 Bottle Illustration */}
          <div className="w-48 h-80 bg-gradient-to-b from-orange-300 to-orange-500 rounded-t-3xl rounded-b-lg relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-20 h-8 bg-orange-600 rounded-full"></div>

            <div className="absolute top-8 left-4 right-4 bg-white rounded-lg p-4 text-center">
              <div className="text-xs text-gray-500 mb-1">PREMIUM</div>
              <div className="text-2xl font-bold text-gray-800">OMEGA</div>
              <div className="text-2xl font-bold text-orange-500">OIL</div>
              <div className="text-xs text-gray-600 mt-2">Premium Fish Oil</div>
              <div className="text-xs text-gray-500">2000mg</div>
            </div>

            <div className="absolute bottom-4 left-4 right-4 bg-orange-600 text-white rounded text-center py-2 text-xs font-medium">
              ULTRA STRENGTH • 120 CAPS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImage;
