/**
 * 商品列表 & 商品详情 类型定义
 */
export interface Product {
  id: number;
  productId: string;
  parentProductId: string | null;
  title: string;
  brand: string;
  sellerId: string;
  sellerName: string;
  platform: string;
  productUrl: string;
  status: string;
  mainImageUrl: string;
  imageUrls: string | null;
  productDescription: string;
  sellingPoints: string;
  specifications: string;
  quickBuyUrl: string;
  currentPrice: number;
  originalPrice: number;
  currency: string;
  discountPercentage: string;
  discountAmount: number;
  unitPrice: string;
  rating: number;
  reviewsCount: number;
  answeredQuestions: number;
  bestSellersRank: number;
  categoryRank: number;
  categoryName: string;
  matchPercentage: number;
  recommendationReason: string;
  availability: string;
  stockQuantity: number;
  shipsFrom: string;
  primeEligible: boolean;
  returnPolicy: string;
  categories: string;
  rootCategory: string;
  subcategory: string;
  productType: string;
  targetAudience: string;
  badges: string;
  promotionTags: string;
  createdAt: string;
  updatedAt: string;
}
export interface Product {
  productId: string;
  title: string;
  brand: string;
  originalPrice: number;
  currentPrice: number;
  currency: string;
  mainImageUrl: string;
  categoryName: string | null;
  rating: number;
  reviewsCount: number;
  availability: string;
  primeEligible: boolean;
}

/**
 * 礼品盒相关类型定义
 */
export interface GiftBox {
  ruleId: string;
  name: string;
  description: string;
  theme: string;
  totalOriginalPrice: number;
  totalCurrentPrice: number;
  currency: string;
  discountPercentage: number;
  savedAmount: number;
  products: Product[];
  productCount: number;
  matchPercentage?: number
}

export interface HolidayGiftBoxesProps {
  giftBoxes: GiftBox[];
}

/**
 * 产品相关类型定义
 */

// 评论信息
export interface Review {
  id: number;
  productId: string;
  username: string;
  content: string;
  isPositive: boolean;
  likeCount: number;
  reviewTime: string;
  createdAt: string;
  updatedAt: string;
  isVerifiedPurchase: boolean;
}

// 价格对比信息
export interface PriceComparison {
  id: number;
  productId: string;
  platform: string;
  platformProductId: string;
  platformUrl: string;
  currentPrice: number;
  originalPrice: number;
  discountRate: number;
  currency: string;
  stockStatus: string;
  shippingFee: number;
  isPrime: boolean;
  estimatedDeliveryDays: number;
  sellerName: string;
  sellerRating: number;
  priceUpdateTime: string;
  createdAt: string;
  updatedAt: string;
}

// 产品详情
export interface ProductDetail {
  id: number;
  productId: string;
  parentProductId: string | null;
  title: string;
  brand: string;
  sellerId: string;
  sellerName: string;
  platform: string;
  productUrl: string;
  status: string;
  mainImageUrl: string;
  imageUrls: string | null;
  productDescription: string;
  sellingPoints: string;
  specifications: string;
  quickBuyUrl: string;
  currentPrice: number;
  originalPrice: number;
  currency: string;
  discountPercentage: string;
  discountAmount: number;
  unitPrice: string;
  rating: number;
  reviewsCount: number;
  answeredQuestions: number;
  bestSellersRank: number;
  categoryRank: number;
  categoryName: string;
  matchPercentage: number;
  recommendationReason: string;
  availability: string;
  stockQuantity: number;
  shipsFrom: string;
  primeEligible: boolean;
  returnPolicy: string;
  categories: string;
  rootCategory: string;
  subcategory: string;
  productType: string;
  targetAudience: string;
  badges: string;
  promotionTags: string;
  createdAt: string;
  updatedAt: string;
  mainIngredients: string;
  healthBenefits: string;
  suitableForElderly: string;
  reviewList: Review[];
  priceComparisonList: PriceComparison[];
}