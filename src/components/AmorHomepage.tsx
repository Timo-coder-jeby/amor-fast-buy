import { useState } from "react";
import { Dialog } from "radix-ui";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Search, Mic, Heart, TrendingUp, Star, ExternalLink, Gift, Check, Truck, RotateCcw, Shield } from "lucide-react";

const AmorHomepage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showVoiceDialog, setShowVoiceDialog] = useState(false);

  const searchSuggestions = [
    "Vitamin D supplements",
    "Protein powder comparison",
    "Natural sleep aids",
    "Heart health products"
  ];

  const goldenThreeProducts = [
    {
      id: 1,
      matchRate: "96% Match",
      badge: "Easy to Swallow",
      badgeColor: "bg-green-500",
      retailer: "Amazon",
      title: "Omega-3 Fish Oil Premium 2000mg",
      rating: 4.8,
      reviews: "2,341 reviews",
      price: "$24.99",
      refPrice: "Ref: $24.99",
      reason: "Perfect match for your heart health goals and highly rated by seniors",
      primaryButton: "See Live Price & Details",
      secondaryButton: "Quick Buy on Amazon",
      image: "/api/placeholder/200/250"
    },
    {
      id: 2,
      matchRate: "92% Match",
      badge: "Large Font Label",
      badgeColor: "bg-blue-500",
      retailer: "Walmart",
      title: "Complete Multivitamin for Seniors 50+",
      rating: 4.7,
      reviews: "1,892 reviews",
      price: "$18.95",
      refPrice: "Ref: $18.95",
      reason: "Specially formulated for your age group with easy-to-read packaging",
      primaryButton: "See Live Price & Details",
      secondaryButton: "Quick Buy on Walmart",
      image: "/api/placeholder/200/250"
    },
    {
      id: 3,
      matchRate: "88% Match",
      badge: "Trusted Brand",
      badgeColor: "bg-green-600",
      retailer: "CVS",
      title: "CoQ10 Heart Health Support 200mg",
      rating: 4.9,
      reviews: "896 reviews",
      price: "$32.50",
      refPrice: "Ref: $32.50",
      reason: "Top-rated cardiovascular support with proven results",
      primaryButton: "See Live Price & Details",
      secondaryButton: "Quick Buy on CVS",
      image: "/api/placeholder/200/250"
    }
  ];

  const communityPosts = [
    {
      user: "Mary K., 67",
      content: "Found the best calcium supplement thanks to Amor! My doctor approved and it's $15 cheaper than my local pharmacy. #amor #healthyaging",
      likes: 42,
      helpful: 28
    },
    {
      user: "Robert H., 72",
      content: "Love how Amor explains each ingredient in simple terms. Finally understand what I'm taking! #amor #transparency",
      likes: 38,
      helpful: 31
    }
  ];

  // 盲盒产品数据
  const giftBoxes = [
    {
      id: 1,
      matchRate: "92% Match",
      discount: "30% OFF",
      badge: "Easy-grip containers",
      badgeColor: "bg-green-500",
      title: "Premium Wellness Bundle",
      description: "Complete health package with premium vitamins, omega-3, probiotics, and wellness journal",
      features: [
        "Premium vitamins",
        "Omega-3 fish oil",
        "Probiotic complex",
        "Wellness journal"
      ],
      price: "$129.99",
      originalPrice: "$189.99",
      savings: "Save $60",
      primaryButton: "查看详情",
      freeShipping: true,
      return30Day: true,
      expertCurated: true,
      image: "/api/placeholder/300/250"
    },
    {
      id: 2,
      matchRate: "78% Match",
      discount: "25% OFF",
      badge: "Beginner-friendly",
      badgeColor: "bg-blue-500",
      title: "Essential Health Starter",
      description: "Carefully selected essentials for beginning a health journey with daily multivitamin, vitamin D3, health tracker and nutrition guide",
      features: [
        "Daily multivitamin",
        "Vitamin D3",
        "Health tracker",
        "Nutrition guide"
      ],
      price: "$89.99",
      originalPrice: "$129.99",
      savings: "Save $40",
      primaryButton: "查看详情",
      freeShipping: true,
      return30Day: true,
      expertCurated: true,
      image: "/api/placeholder/300/250"
    },
    {
      id: 3,
      matchRate: "85% Match",
      discount: "35% OFF",
      badge: "Senior-tested formula",
      badgeColor: "bg-green-600",
      title: "Senior Care Package",
      description: "Specially formulated for seniors with joint support, heart health, memory support and pill organizer",
      features: [
        "Joint support",
        "Heart health",
        "Memory support",
        "Pill organizer"
      ],
      price: "$99.99",
      originalPrice: "$149.99",
      savings: "Save $50",
      primaryButton: "查看详情",
      freeShipping: true,
      return30Day: true,
      expertCurated: true,
      image: "/api/placeholder/300/250"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="text-3xl font-bold text-pink-500">Amor</div>
              <div className="text-sm text-gray-500 hidden sm:block">Trusted Health Products</div>
            </div>
            <div className="flex-1 max-w-2xl mx-8 hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for health products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-12 pl-4 pr-12 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none transition-all"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 text-gray-400 hover:text-pink-500 flex items-center justify-center transition-colors">
                  <Search className="h-4 w-4" />
                </button>
              </div>
            </div>
            <button className="md:hidden h-10 w-10 flex items-center justify-center hover:bg-gray-100 rounded-lg">
              <Search className="h-5 w-5" />
            </button>
          </div>
          {/* Mobile Search Bar */}
          <div className="md:hidden mt-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search health products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-12 pl-4 pr-12 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 text-gray-400 hover:text-pink-500 flex items-center justify-center">
                <Search className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Amor AI - Smart Health Product<br />Comparison
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 max-w-4xl mx-auto font-normal leading-relaxed">
              Voice-powered AI assistant helps you find trusted health products, supplements, and wellness items at the best prices. Compare across top retailers instantly.
            </p>
            <div className="max-w-2xl mx-auto mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center gap-3">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      placeholder="Search health products... (e.g., Vitamin C, Omega-3)"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full h-14 pl-4 pr-4 text-lg bg-white text-gray-800 placeholder:text-gray-500 border-0 rounded-xl outline-none"
                    />
                  </div>
                  <Dialog.Root open={showVoiceDialog} onOpenChange={setShowVoiceDialog}>
                    <Dialog.Trigger asChild>
                      <button className="h-14 w-14 bg-pink-600 hover:bg-pink-700 text-white rounded-xl flex items-center justify-center transition-colors">
                        <Mic className="h-6 w-6" />
                      </button>
                    </Dialog.Trigger>
                    <Dialog.Portal>
                      <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50" />
                      <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-8 max-w-md w-full mx-4 z-50">
                        <Dialog.Title className="text-2xl font-bold text-gray-900 mb-4">Voice Search</Dialog.Title>
                        <Dialog.Description className="text-gray-600 mb-6">
                          Click the microphone and speak your health product question
                        </Dialog.Description>
                        <div className="flex flex-col items-center space-y-4">
                          <button className="w-20 h-20 bg-pink-500 hover:bg-pink-600 text-white rounded-full flex items-center justify-center transition-colors">
                            <Mic className="h-8 w-8" />
                          </button>
                          <p className="text-sm text-gray-500">Click to start recording</p>
                        </div>
                        <Dialog.Close asChild>
                          <button className="mt-6 w-full bg-gray-100 hover:bg-gray-200 text-gray-900 py-3 rounded-lg font-medium transition-colors">
                            Cancel
                          </button>
                        </Dialog.Close>
                      </Dialog.Content>
                    </Dialog.Portal>
                  </Dialog.Root>
                </div>
                <div className="mt-6 flex flex-wrap gap-2 justify-center">
                  {searchSuggestions.map((hint) => (
                    <button
                      key={hint}
                      onClick={() => setSearchQuery(hint)}
                      className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-sm text-white/90 hover:text-white transition-all duration-200"
                    >
                      {hint}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Golden Three Section */}
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
            {goldenThreeProducts.map((product) => (
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

      {/* Section Divider */}
      <div className="w-full h-1 bg-gradient-to-r from-pink-300 via-pink-500 to-pink-300"></div>

      {/* Holiday Gift Boxes Section */}
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

      {/* Section Divider */}
      <div className="w-full h-1 bg-gradient-to-r from-pink-300 via-pink-500 to-pink-300"></div>

      {/* Community Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-pink-600 mb-4">What Our Community Says</h2>
            <p className="text-xl text-gray-600">Real stories from real people using #amor</p>
          </div>
          <div className="grid gap-8 max-w-6xl mx-auto md:grid-cols-2">
            {communityPosts.map((post, index) => (
              <div key={index} className="p-6 border border-gray-200 hover:border-pink-300 transition-colors rounded-xl bg-white shadow-sm">
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed text-gray-700">"{post.content}"</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-pink-600">- {post.user}</span>
                    <div className="flex items-center space-x-4 text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="w-4 h-4" />
                        <span>{post.helpful} helpful</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="border-2 border-pink-600 text-pink-600 hover:bg-pink-50 px-8 py-4 text-lg font-semibold rounded-xl transition-colors">
              Share & Help Others
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center space-y-8">
            <div className="text-4xl font-bold text-pink-400">Amor</div>
            <p className="text-lg opacity-80 max-w-3xl mx-auto leading-relaxed">
              Empowering seniors to make informed health decisions with trusted product comparisons and expert recommendations.
            </p>
            <div className="flex justify-center space-x-8 text-lg flex-wrap gap-y-2">
              <a href="#" className="hover:text-pink-400 transition-colors">About</a>
              <a href="#" className="hover:text-pink-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-pink-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-pink-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Chat Widget */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="fixed bottom-6 right-6 z-50">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 max-w-xs">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">💡</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 mb-1">Need health product advice?</p>
                    <p className="text-xs text-gray-500 mb-3">Click me for instant help!</p>
                    <button
                      onClick={() => setShowVoiceDialog(true)}
                      className="w-full bg-pink-500 hover:bg-pink-600 text-white text-xs py-2 rounded-lg transition-colors"
                    >
                      Start Chat
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </TooltipTrigger>
          <TooltipContent className="bg-gray-900 text-white px-3 py-2 rounded-lg text-sm">
            Get personalized health product recommendations
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default AmorHomepage;
