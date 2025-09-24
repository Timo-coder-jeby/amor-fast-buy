import { useParams, useNavigate } from "react-router-dom";
import {
  BackButton,
  ProductImage,
  ProductTitle,
  SeniorFeatures,
  LivePriceInfo,
  PriceComparison,
  Recommendation,
  MainBuyButton,
  ReviewHighlights,
  KeyIngredientsAndBenefits
} from "../components/Details";

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
      {/* Header with Back Button */}
      <BackButton onClick={handleBackToSearch} />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Product Image */}
          <div className="space-y-6">
            <ProductImage productData={productData} />
            <SeniorFeatures features={productData.seniorFeatures} />
          </div>

          {/* Right Column - Product Details */}
          <div className="space-y-6">
            <ProductTitle productData={productData} />
            <LivePriceInfo productData={productData} />
            <PriceComparison
              retailers={productData.retailers}
              productTitle={productData.title}
              onBuyNow={handleBuyNow}
            />
            <Recommendation recommendation={productData.recommendation} />
            <MainBuyButton
              currentPrice={productData.currentPrice}
              retailers={productData.retailers}
              productTitle={productData.title}
              onBuyNow={handleBuyNow}
            />
          </div>
        </div>

        {/* Full Width Review Highlights Section */}
        <ReviewHighlights reviewHighlights={productData.reviewHighlights} />

        {/* Key Ingredients and Health Benefits Section */}
        <KeyIngredientsAndBenefits
          keyIngredients={productData.keyIngredients}
          healthBenefits={productData.healthBenefits}
        />
      </div>
    </div>
  );
};

export default DetailProducts;
