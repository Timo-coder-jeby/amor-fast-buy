import { useState } from "react";
import { Dialog } from "radix-ui";
import Header from "./Header";
import HeroSection from "./HeroSection";
import GoldenThreeSection from "./GoldenThreeSection";
import SectionDivider from "./SectionDivider";
import HolidayGiftBoxes from "./HolidayGiftBoxes";
import CommunitySection from "./CommunitySection";
import Footer from "./Footer";
import ChatWidget from "./ChatWidget";
import VoiceDialog from "./VoiceDialog";

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
    <Dialog.Root open={showVoiceDialog} onOpenChange={setShowVoiceDialog}>
      <div className="min-h-screen bg-white">
        <Header
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <HeroSection
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          searchSuggestions={searchSuggestions}
        />

        <GoldenThreeSection products={goldenThreeProducts} />

        <SectionDivider />

        <HolidayGiftBoxes giftBoxes={giftBoxes} />

        <SectionDivider />

        <CommunitySection communityPosts={communityPosts} />

        <Footer />

        <ChatWidget setShowVoiceDialog={setShowVoiceDialog} />
      </div>

      <VoiceDialog />
    </Dialog.Root>
  );
};

export default AmorHomepage;
