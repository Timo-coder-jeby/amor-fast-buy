import { Star, ExternalLink } from "lucide-react";

interface Product {
  id: number;
  matchRate: string;
  badge: string;
  badgeColor: string;
  retailer: string;
  title: string;
  rating: number;
  reviews: string;
  price: string;
  refPrice: string;
  reason: string;
  primaryButton: string;
  secondaryButton: string;
  image: string;
}

interface GoldenThreeSectionProps {
  products: Product[];
}

const GoldenThreeSection = ({ products }: GoldenThreeSectionProps) => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-pink-500 mb-4 flex items-center justify-center gap-2">
            <span className="text-pink-400">✨</span>Golden Three<span className="text-pink-400">✨</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our AI has carefully selected these 3 products just for you,<br />
            based on expert reviews, competitive pricing, and senior-<br />
            friendly features.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <div key={product.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 hover:shadow-xl">
              <div className="relative p-4 pb-2">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">{product.matchRate}</span>
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <span>{product.retailer}</span>
                  </div>
                </div>
                <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-gray-400">Product Image</div>
                </div>
                <div className={`${product.badgeColor} text-white px-4 py-2 rounded-lg text-center text-sm font-medium mb-4`}>
                  {product.badge}
                </div>
              </div>
              <div className="p-4 pt-0">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{product.title}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className={`w-4 h-4 ${star <= Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <span className="font-medium text-gray-900">{product.rating}</span>
                  <span className="text-gray-500 text-sm">({product.reviews})</span>
                </div>
                <div className="mb-4">
                  <div className="text-xs text-gray-500 mb-1">
                    Reference Price: <span className="italic">*Price may change at checkout</span>
                  </div>
                  <div className="text-2xl font-bold text-pink-600">{product.refPrice}</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-3 mb-4">
                  <div className="text-sm font-medium text-blue-900 mb-1">Why we recommend this:</div>
                  <div className="text-sm text-blue-800">{product.reason}</div>
                </div>
                <div className="space-y-2">
                  <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg font-medium transition-colors">
                    {product.primaryButton}
                  </button>
                  <button className="w-full border border-gray-300 hover:border-pink-500 text-gray-700 hover:text-pink-600 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    {product.secondaryButton}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-pink-500 mb-8">
            Why Trust Our Golden Three Selection?
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Expert Curated</h4>
              <p className="text-gray-600 text-sm">Selected by health professionals</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Best Value</h4>
              <p className="text-gray-600 text-sm">Competitive pricing across platforms</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Senior Approved</h4>
              <p className="text-gray-600 text-sm">Highly rated by 50+ users</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoldenThreeSection;
