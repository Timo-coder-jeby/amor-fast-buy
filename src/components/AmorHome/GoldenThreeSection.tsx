import { Star, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Product } from "@types";


interface GoldenThreeSectionProps {
  products: Product[];
}

const GoldenThreeSection = ({ products }: GoldenThreeSectionProps) => {
  const navigate = useNavigate();

  const handleProductClick = (productId: number) => {
    navigate(`/detail/${productId}`);
  };

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
          {products.map((product) => {
            // 解析 badges 数组
            const badges = product.badges ? JSON.parse(product.badges) : [];
            const badgeText = badges.length > 0 ? badges[0] : "Featured";

            // 根据 bestSellersRank 决定 badge 颜色
            const getBadgeColor = () => {
              if (product.bestSellersRank === 1) return "bg-blue-500";
              if (product.bestSellersRank <= 3) return "bg-green-500";
              return "bg-yellow-500";
            };

            // 格式化价格
            const formatPrice = (price: number, currency: string) => {
              if (currency === "CNY") return `¥${price}`;
              return `$${price}`;
            };

            // 格式化评论数量
            const formatReviewCount = (count: number) => {
              if (count >= 1000) return `${(count / 1000).toFixed(1)}k`;
              return count.toString();
            };

            return (
              <div
                key={product.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 hover:shadow-xl cursor-pointer"
                onClick={() => handleProductClick(product.id)}
              >
                <div className="relative p-4 pb-2">
                  <div className="flex justify-between items-center mb-3">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {product.matchPercentage}% Match
                    </span>
                    <div className="flex items-center gap-1 text-gray-500 text-sm capitalize">
                      <span>{product.platform}</span>
                    </div>
                  </div>
                  <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    {product.mainImageUrl ? (
                      <img
                        src={product.mainImageUrl}
                        alt={product.title}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                          (e.target as HTMLImageElement).parentElement!.innerHTML = '<div class="text-gray-400">Product Image</div>';
                        }}
                      />
                    ) : (
                      <div className="text-gray-400">Product Image</div>
                    )}
                  </div>
                  <div className={`${getBadgeColor()} text-white px-4 py-2 rounded-lg text-center text-sm font-medium mb-4`}>
                    {badgeText}
                  </div>
                </div>
                <div className="p-4 pt-0">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">{product.title}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${star <= Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="font-medium text-gray-900">{product.rating}</span>
                    <span className="text-gray-500 text-sm">({formatReviewCount(product.reviewsCount)})</span>
                  </div>
                  <div className="mb-4">
                    <div className="text-xs text-gray-500 mb-1">
                      Reference Price: <span className="italic">*Price may change at checkout</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <div className="text-2xl font-bold text-pink-600">
                        {formatPrice(product.currentPrice, product.currency)}
                      </div>
                      {product.originalPrice > product.currentPrice && (
                        <>
                          <div className="text-sm text-gray-400 line-through">
                            {formatPrice(product.originalPrice, product.currency)}
                          </div>
                          <div className="text-sm text-green-600 font-medium">
                            -{product.discountPercentage}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3 mb-4">
                    <div className="text-sm font-medium text-blue-900 mb-1">Why we recommend this:</div>
                    <div className="text-sm text-blue-800">{product.recommendationReason}</div>
                  </div>
                  <div className="space-y-2">
                    <button
                      className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg font-medium transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(product.quickBuyUrl, '_blank');
                      }}
                    >
                      Quick Buy on {product.platform}
                    </button>
                    <button
                      className="w-full border border-gray-300 hover:border-pink-500 text-gray-700 hover:text-pink-600 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(product.productUrl, '_blank');
                      }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      View on {product.platform}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
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
