import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Star, ShoppingCart, Info, CheckCircle, AlertTriangle, Heart } from "lucide-react";
import {
  Separator,
  Avatar,
  Tooltip,
  AlertDialog,
  Accordion
} from "radix-ui";

const DetailProducts = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // 模拟商品数据 - 后续可以通过API获取
  const productData = {
    id: 1,
    title: "Omega-3 Fish Oil Premium 2000mg",
    matchRate: "96% Match",
    rating: 4.8,
    reviews: "2,341 reviews",
    image: "/api/placeholder/400/400",
    currentPrice: 22.49,
    originalPrice: 24.99,
    savings: 2.50,
    lastUpdated: "3:18:19",
    priceDisclaimer: "Price may change at checkout. Final cost is determined on the external retailer's website",
    retailers: [
      {
        name: "Amazon",
        price: 22.49,
        status: "In Stock",
        statusColor: "text-green-600",
        shipping: "FREE with Prime",
        logo: "🛒"
      },
      {
        name: "Walmart",
        price: 24.99,
        originalPrice: 5.99,
        status: "Low Stock",
        statusColor: "text-orange-600",
        logo: "🏪"
      },
      {
        name: "CVS",
        price: 26.99,
        status: "In Stock",
        statusColor: "text-green-600",
        shipping: "FREE on $35+",
        logo: "💊"
      }
    ],
    seniorFeatures: [
      "Easy-to-swallow soft gel capsules",
      "Large, clear labeling for easy reading",
      "Third-party tested for purity",
      "No fishy aftertaste",
      "Recommended dosage clearly marked"
    ],
    recommendation: "Perfect match for your heart health goals and highly rated by seniors aged 50+",
    // 新增的评价亮点数据
    reviewHighlights: {
      positive: [
        {
          text: "Easy for seniors to swallow, no fishy aftertaste",
          customerCount: 186
        },
        {
          text: "Doctor recommended this specific brand",
          customerCount: 89
        },
        {
          text: "Noticed improvement in joint pain within 2 weeks",
          customerCount: 134
        }
      ],
      negative: [
        {
          text: "Capsules are a bit large for some people",
          customerCount: 23
        }
      ]
    },
    // 关键成分
    keyIngredients: [
      {
        name: "EPA (1200mg)",
        verified: true
      },
      {
        name: "DHA (800mg)",
        verified: true
      },
      {
        name: "Vitamin E",
        verified: true
      },
      {
        name: "Natural Lemon Flavor",
        verified: true
      }
    ],
    // 健康益处
    healthBenefits: [
      "Supports Heart Health",
      "Promotes Brain Function",
      "Reduces Joint Inflammation",
      "Improves Cholesterol Levels"
    ]
  };

  const handleBackToSearch = () => {
    navigate(-1);
  };

  const handleBuyNow = (retailer: string, price: number) => {
    console.log(`Buy from ${retailer} for $${price}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Back Button - Fixed with sticky positioning */}
      <div className="bg-white border-b border-gray-200 px-4 py-4 sticky top-0 z-50 backdrop-blur-sm bg-white/95 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={handleBackToSearch}
            className="flex items-center gap-2 text-gray-600 hover:text-white hover:font-semibold bg-transparent hover:bg-[#dd87cb] border-none cursor-pointer px-3 py-2 rounded-md transition-all duration-300 ease-in-out group"
          >
            <ArrowLeft className="w-4 h-4 transition-all duration-200 group-hover:scale-105" />
            Back to Search
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Product Image */}
          <div className="space-y-6">
            {/* Product Image Card */}
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

            {/* Senior-Friendly Features using Accordion */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6">
                <Accordion.Root type="single" collapsible defaultValue="features">
                  <Accordion.Item value="features">
                    <Accordion.Trigger className="text-lg font-semibold text-gray-900 flex items-center justify-between w-full py-2 hover:text-pink-600 transition-colors [&[data-state=open]>svg]:rotate-180">
                      <div className="flex items-center gap-2">
                        <span className="text-blue-500">👥</span>
                        Senior-Friendly Features
                      </div>
                      <svg className="h-4 w-4 shrink-0 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Accordion.Trigger>
                    <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                      <ul className="space-y-3 mt-4 pb-4">
                        {productData.seniorFeatures.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </Accordion.Content>
                  </Accordion.Item>
                </Accordion.Root>
              </div>
            </div>
          </div>

          {/* Right Column - Product Details */}
          <div className="space-y-6">
            {/* Product Title and Rating Card */}
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

            {/* Live Price Information Card */}
            <div className="bg-white rounded-lg shadow-sm border-2 border-pink-200">
              <div className="p-6 pb-4">
                <h2 className="text-lg font-semibold text-pink-600 flex items-center gap-2">
                  <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse"></div>
                  Live Price Information
                </h2>
              </div>
              <div className="px-6 pb-6">
                <div className="flex items-end justify-between mb-4">
                  <div>
                    <div className="text-3xl font-bold text-pink-600">${productData.currentPrice}</div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        LIVE
                      </div>
                      <span className="text-gray-500">Updated {productData.lastUpdated}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-gray-400 line-through">${productData.originalPrice}</div>
                    <div className="text-green-600 font-medium">Save ${productData.savings}</div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-yellow-800">
                    <strong>Price Disclaimer:</strong> {productData.priceDisclaimer}
                  </div>
                </div>
              </div>
            </div>

            {/* Price Comparison Card */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 pb-4">
                <h2 className="text-lg font-semibold text-gray-900">Price Comparison</h2>
              </div>
              <div className="px-6 pb-6">
                <div className="space-y-4">
                  {productData.retailers.map((retailer, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-pink-300 transition-colors">
                        <div className="flex items-center gap-3">
                          <Avatar.Root className="w-10 h-10">
                            <Avatar.Fallback className="text-2xl bg-gray-100 w-full h-full flex items-center justify-center rounded-full">
                              {retailer.logo}
                            </Avatar.Fallback>
                          </Avatar.Root>
                          <div>
                            <div className="font-semibold text-gray-900">{retailer.name}</div>
                            {retailer.shipping && (
                              <div className="text-sm text-gray-500">{retailer.shipping}</div>
                            )}
                            {retailer.originalPrice && (
                              <div className="text-sm text-gray-400">was ${retailer.originalPrice}</div>
                            )}
                          </div>
                        </div>
                        <div className="text-right flex items-center gap-4">
                          <div>
                            <div className="text-xl font-bold text-gray-900">${retailer.price}</div>
                            <div className={`text-sm font-medium px-2 py-1 rounded-full text-xs ${
                              retailer.status === "In Stock" 
                                ? "bg-green-100 text-green-800" 
                                : "bg-orange-100 text-orange-800"
                            }`}>
                              {retailer.status}
                            </div>
                          </div>

                          <Tooltip.Provider>
                            <Tooltip.Root>
                              <Tooltip.Trigger asChild>
                                <AlertDialog.Root>
                                  <AlertDialog.Trigger asChild>
                                    <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 border-none cursor-pointer">
                                      <ShoppingCart className="w-4 h-4" />
                                      Buy
                                    </button>
                                  </AlertDialog.Trigger>
                                  <AlertDialog.Portal>
                                    <AlertDialog.Overlay className="fixed inset-0 bg-black/50 z-50" />
                                    <AlertDialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 max-w-md w-full mx-4 z-50 shadow-lg">
                                      <AlertDialog.Title className="text-lg font-semibold text-gray-900 mb-2">
                                        Confirm Purchase
                                      </AlertDialog.Title>
                                      <AlertDialog.Description className="text-gray-600 mb-4">
                                        You will be redirected to {retailer.name} to complete your purchase of {productData.title} for ${retailer.price}.
                                      </AlertDialog.Description>
                                      <div className="flex gap-2 justify-end">
                                        <AlertDialog.Cancel asChild>
                                          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors bg-white text-gray-700 cursor-pointer">
                                            Cancel
                                          </button>
                                        </AlertDialog.Cancel>
                                        <AlertDialog.Action asChild>
                                          <button
                                            onClick={() => handleBuyNow(retailer.name, retailer.price)}
                                            className="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg transition-colors border-none cursor-pointer"
                                          >
                                            Continue to {retailer.name}
                                          </button>
                                        </AlertDialog.Action>
                                      </div>
                                    </AlertDialog.Content>
                                  </AlertDialog.Portal>
                                </AlertDialog.Root>
                              </Tooltip.Trigger>
                              <Tooltip.Portal>
                                <Tooltip.Content className="bg-gray-900 text-white px-2 py-1 rounded text-xs">
                                  Buy from {retailer.name}
                                </Tooltip.Content>
                              </Tooltip.Portal>
                            </Tooltip.Root>
                          </Tooltip.Provider>
                        </div>
                      </div>
                      {index < productData.retailers.length - 1 && (
                        <Separator.Root className="my-2 h-px bg-gray-200" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Why We Recommend This Card */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg">
              <div className="p-6 pb-4">
                <h2 className="text-lg font-semibold text-blue-900 flex items-center gap-2">
                  <Info className="w-5 h-5" />
                  Why We Recommend This
                </h2>
              </div>
              <div className="px-6 pb-6">
                <p className="text-blue-800">{productData.recommendation}</p>
              </div>
            </div>


            {/* Main Buy Button */}
            <AlertDialog.Root>
              <AlertDialog.Trigger asChild>
                <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-4 text-lg flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors border-none cursor-pointer">
                  <ShoppingCart className="w-5 h-5" />
                  Buy Now - ${productData.currentPrice}
                </button>
              </AlertDialog.Trigger>
              <AlertDialog.Portal>
                <AlertDialog.Overlay className="fixed inset-0 bg-black/50 z-50" />
                <AlertDialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 max-w-md w-full mx-4 z-50 shadow-lg">
                  <AlertDialog.Title className="text-lg font-semibold text-gray-900 mb-2">
                    Choose Your Retailer
                  </AlertDialog.Title>
                  <AlertDialog.Description className="text-gray-600 mb-4">
                    Select where you'd like to purchase {productData.title}:
                  </AlertDialog.Description>
                  <div className="space-y-2 mb-4">
                    {productData.retailers.map((retailer, index) => (
                      <button
                        key={index}
                        className="w-full justify-between p-4 border border-gray-200 rounded-lg hover:border-pink-500 transition-colors bg-white cursor-pointer flex items-center"
                        onClick={() => handleBuyNow(retailer.name, retailer.price)}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{retailer.logo}</span>
                          <div className="text-left">
                            <div className="font-semibold text-gray-900">{retailer.name}</div>
                            <div className="text-sm text-gray-500">{retailer.shipping || retailer.status}</div>
                          </div>
                        </div>
                        <div className="text-lg font-bold text-gray-900">${retailer.price}</div>
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-end">
                    <AlertDialog.Cancel asChild>
                      <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors bg-white text-gray-700 cursor-pointer">
                        Cancel
                      </button>
                    </AlertDialog.Cancel>
                  </div>
                </AlertDialog.Content>
              </AlertDialog.Portal>
            </AlertDialog.Root>
          </div>
        </div>

        {/* Full Width Review Highlights Section */}
        <div className="mt-16 mx-auto">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Review Highlights from Verified Buyers</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* What Customers Love */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <h3 className="text-lg font-semibold text-green-700">What Customers Love</h3>
                </div>

                <div className="space-y-4">
                  {productData.reviewHighlights.positive.map((highlight, index) => (
                    <div key={index} className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <p className="text-gray-800 mb-2">"{highlight.text}"</p>
                      <p className="text-sm text-green-600 font-medium">
                        Mentioned by {highlight.customerCount} customers
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Areas for Improvement */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <AlertTriangle className="w-6 h-6 text-red-500" />
                  <h3 className="text-lg font-semibold text-red-700">Areas for Improvement</h3>
                </div>

                <div className="space-y-4">
                  {productData.reviewHighlights.negative.map((highlight, index) => (
                    <div key={index} className="p-4 bg-red-50 rounded-lg border border-red-200">
                      <p className="text-gray-800 mb-2">"{highlight.text}"</p>
                      <p className="text-sm text-red-600 font-medium">
                        Mentioned by {highlight.customerCount} customers
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Ingredients and Health Benefits Section */}
        <div className="mt-8 grid md:grid-cols-2 gap-8 mx-auto">
          {/* Key Ingredients */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Key Ingredients</h2>

            <div className="space-y-4">
              {productData.keyIngredients.map((ingredient, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-gray-900">{ingredient.name}</span>
                  </div>
                  {ingredient.verified && (
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Health Benefits */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Health Benefits</h2>

            <div className="space-y-4">
              {productData.healthBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 p-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-800">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProducts;
