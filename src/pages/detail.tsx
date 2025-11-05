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
import { useEffect, useState, useMemo, useCallback } from "react";
import { getProductDetail } from "@/service/api";
import type { ProductDetail } from "@types";

const DetailProducts = () => {
  const { id } = useParams<{ id: string }>();
  const [productDetail, setProductDetail] = useState<ProductDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;

    setIsLoading(true);
    getProductDetail(id)
      .then((data: ProductDetail) => {
        setProductDetail(data);
      })
      .catch((error) => {
        console.warn("Failed to fetch product details:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id])


  /**
   * 辅助函数：解析逗号分隔的字符串为数组
   * 使用 useCallback 避免每次渲染都创建新函数
   */
  const parseCommaSeparatedString = useCallback((str: string | null | undefined): string[] => {
    if (!str) return [];
    return str.split(',').map(item => item.trim()).filter(item => item.length > 0);
  }, []);

  /**
   * 辅助函数：获取库存状态的颜色和文本
   * @param status
   */
  const getStockStatus = useCallback((status: string) => {
    const statusMap: Record<string, { text: string; color: string }> = {
      in_stock: { text: "In Stock", color: "text-green-600" },
      low_stock: { text: "Low Stock", color: "text-orange-600" },
      out_of_stock: { text: "Out of Stock", color: "text-red-600" },
      pre_order: { text: "Pre-order", color: "text-blue-600" }
    };
    return statusMap[status] || { text: "Unknown", color: "text-gray-600" };
  }, []);

  /**
   * 辅助函数：获取平台 logo
   * @param platform
   */
  const getPlatformLogo = useCallback((platform: string) => {
    const logoMap: Record<string, string> = {
      Amazon: "🛒",
      Walmart: "🏪",
      eBay: "🏷️",
      CVS: "💊"
    };
    return logoMap[platform] || "🛍️";
  }, []);

  /**
   * 使用 useMemo 缓存转换后的产品数据
   * 只在 productDetail 或相关函数变化时重新计算，避免不必要的渲染
   */
  const productData = useMemo(() => {
    if (!productDetail) return null;

    // 解析逗号分隔的字符串为数组
    const mainIngredients = parseCommaSeparatedString(productDetail.mainIngredients);
    const healthBenefits = parseCommaSeparatedString(productDetail.healthBenefits);
    const suitableForElderly = parseCommaSeparatedString(productDetail.suitableForElderly);

    // 转换 retailers 数据
    const retailers = productDetail.priceComparisonList.map(item => {
      const stockStatus = getStockStatus(item.stockStatus);
      return {
        name: item.platform,
        price: item.currentPrice,
        originalPrice: item.originalPrice,
        status: stockStatus.text,
        statusColor: stockStatus.color,
        shipping: item.isPrime
          ? "FREE with Prime"
          : item.shippingFee === 0
            ? "FREE shipping"
            : `$${item.shippingFee} shipping`,
        logo: getPlatformLogo(item.platform),
        url: item.platformUrl,
        sellerName: item.sellerName,
        sellerRating: item.sellerRating,
        estimatedDeliveryDays: item.estimatedDeliveryDays
      };
    });

    // 转换评论数据为 reviewHighlights 格式
    const positiveReviews = productDetail.reviewList
      .filter(review => review.isPositive)
      .map(review => ({
        text: review.content,
        customerCount: review.likeCount
      }));

    const negativeReviews = productDetail.reviewList
      .filter(review => !review.isPositive)
      .map(review => ({
        text: review.content,
        customerCount: review.likeCount
      }));

    return {
      id: productDetail.id,
      title: productDetail.title,
      matchRate: `${productDetail.matchPercentage}% Match`,
      rating: productDetail.rating,
      reviews: `${productDetail.reviewsCount.toLocaleString()} reviews`,
      image: productDetail.mainImageUrl,
      currentPrice: productDetail.currentPrice,
      originalPrice: productDetail.originalPrice,
      savings: productDetail.discountAmount,
      lastUpdated: new Date().toLocaleTimeString(),
      priceDisclaimer: "Price may change at checkout. Final cost is determined on the external retailer's website",
      retailers,
      seniorFeatures: suitableForElderly,
      recommendation: productDetail.recommendationReason,
      reviewHighlights: {
        positive: positiveReviews,
        negative: negativeReviews
      },
      keyIngredients: mainIngredients.map((ingredient: string) => ({
        name: ingredient,
        verified: true
      })),
      healthBenefits
    };
  }, [productDetail, parseCommaSeparatedString, getStockStatus, getPlatformLogo]);

  const handleBackToSearch = () => {
    navigate(-1);
  };

  const handleBuyNow = (retailer: string, price: number) => {
    console.log(`Buy from ${retailer} for $${price}`);
  };

  // Loading 状态
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-pink-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // 无数据状态
  if (!productData) {
    return (
      <div className="min-h-screen bg-gray-50">
        <BackButton onClick={handleBackToSearch} />
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product does not exist</h2>
          <p className="text-gray-600 mb-8">Sorry, the product information was not found</p>
          <button
            onClick={handleBackToSearch}
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Back to Search
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {
        /**
         * Header with Back Button
         */
        <BackButton onClick={handleBackToSearch} />
      }

      {
        /**
         * Main Content
         */
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
          {productData.reviewHighlights.positive.length > 0 || productData.reviewHighlights.negative.length > 0 ? (
            <ReviewHighlights reviewHighlights={productData.reviewHighlights} />
          ) : null}

          {/* Key Ingredients and Health Benefits Section */}
          {productData.keyIngredients.length > 0 || productData.healthBenefits.length > 0 ? (
            <KeyIngredientsAndBenefits
              keyIngredients={productData.keyIngredients}
              healthBenefits={productData.healthBenefits}
            />
          ) : null}
        </div>
      }
    </div>
  );
};

export default DetailProducts;
