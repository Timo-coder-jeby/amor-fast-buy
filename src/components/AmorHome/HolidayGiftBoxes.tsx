import { Gift, Check, RotateCcw, Shield } from "lucide-react";

interface GiftBox {
  id: number;
  matchRate: string;
  discount: string;
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  originalPrice: string;
  savings: string;
  primaryButton: string;
  freeShipping: boolean;
  return30Day: boolean;
  expertCurated: boolean;
  image: string;
}

interface HolidayGiftBoxesProps {
  giftBoxes: GiftBox[];
}

const HolidayGiftBoxes = ({ giftBoxes }: HolidayGiftBoxesProps) => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-pink-500 mb-4">
            Holiday Gift Boxes
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Curated wellness packages perfect for your loved ones. Limited time Christmas special!
          </p>
          <div className="w-24 h-1 bg-pink-400 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Gift Box Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {giftBoxes.map((box) => (
            <div key={box.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-pink-500">
              {/* Image Section */}
              <div className="relative overflow-hidden">
                {/* Match Rate Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {box.matchRate}
                  </span>
                </div>

                {/* Discount Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-gradient-to-r from-pink-500 to-[#de86cc] text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 shadow-lg">
                    <Gift className="w-3 h-3" />
                    {box.discount}
                  </span>
                </div>

                {/* Gift Box Image */}
                <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-100/30 to-purple-100/30"></div>

                  {/* Gradient Mask from bottom to top on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

                  {/* Gift box icons container - scale on hover without affecting layout */}
                  {box.id === 1 && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-40 h-32 bg-red-600 rounded-lg relative transform rotate-3 transition-transform duration-300 group-hover:scale-110">
                        <div className="absolute inset-2 bg-red-700 rounded"></div>
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-full bg-yellow-400"></div>
                        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-8 bg-yellow-400"></div>
                      </div>
                    </div>
                  )}
                  {box.id === 2 && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 bg-yellow-500 rounded-lg relative transition-transform duration-300 group-hover:scale-110">
                        <div className="absolute inset-2 bg-yellow-600 rounded"></div>
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-full bg-orange-400"></div>
                        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-6 bg-orange-400"></div>
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-red-500 rounded-full"></div>
                      </div>
                    </div>
                  )}
                  {box.id === 3 && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-36 h-28 bg-gray-200 rounded-lg relative transition-transform duration-300 group-hover:scale-110">
                        <div className="absolute inset-2 bg-gray-300 rounded"></div>
                        <div className="absolute top-2 left-2 right-2 h-8 bg-white rounded flex items-center justify-center">
                          <span className="text-xs font-medium text-gray-600">holiday</span>
                        </div>
                        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-12 h-6 bg-gray-400 rounded-t"></div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Feature Badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className={`${box.badgeColor} text-white px-4 py-2 rounded-lg text-center text-sm font-medium mb-4`}>
                    {box.badge}
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-pink-500 mb-3 transition-colors duration-300">{box.title}</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{box.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <div className="grid grid-cols-2 gap-2">
                    {box.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-pink-400 rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl font-bold text-pink-600">{box.price}</span>
                    <span className="text-xl text-gray-400 line-through">{box.originalPrice}</span>
                  </div>
                  <div className="text-sm text-green-600 font-medium">{box.savings}</div>
                </div>

                {/* Action Button */}
                <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 mb-4">
                  {box.primaryButton} →
                </button>

                {/* Trust Indicators */}
                <div className="flex items-center justify-between text-xs text-gray-500 border-t pt-4">
                  <div className="flex items-center gap-1">
                    <Check className="w-3 h-3 text-green-500" />
                    <span>Free shipping</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <RotateCcw className="w-3 h-3 text-blue-500" />
                    <span>30-day return</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Shield className="w-3 h-3 text-purple-500" />
                    <span>Expert curated</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore More Link */}
        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-600 text-lg font-medium transition-colors">
            <Gift className="w-5 h-5" />
            Explore Gift Boxes
          </a>
        </div>
      </div>
    </section>
  );
};

export default HolidayGiftBoxes;
