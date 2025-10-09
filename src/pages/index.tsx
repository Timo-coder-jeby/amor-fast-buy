import { useState, useRef, useEffect } from "react";
import { Dialog } from "radix-ui";
import Header from "@/components/AmorHome/Header";
import HeroSection from "@/components/AmorHome/HeroSection";
import GoldenThreeSection from "@/components/AmorHome/GoldenThreeSection";
import SectionDivider from "@/components/AmorHome/SectionDivider";
import HolidayGiftBoxes from "@/components/AmorHome/HolidayGiftBoxes";
import CommunitySection from "@/components/AmorHome/CommunitySection";
import Footer from "@/components/AmorHome/Footer";
import ChatWidget from "@/components/AmorHome/ChatWidget";
import VoiceDialog from "@/components/AmorHome/VoiceDialog";

const AmorHomepage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showVoiceDialog, setShowVoiceDialog] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [showHeaderSearch, setShowHeaderSearch] = useState(false);
  const goldenThreeRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLDivElement>(null);

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

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setIsSearchActive(true);
      setShowHeaderSearch(true);
      // 缩短动画时间，让滚动更快开始
      setTimeout(() => {
        goldenThreeRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 200); // 调整为200ms
    }
  };

  // 监听滚动事件
  useEffect(() => {
    const handleScroll = () => {
      if (heroSectionRef.current) {
        const heroBottom = heroSectionRef.current.getBoundingClientRect().bottom;
        // 如果HeroSection已经滚动出视野（底部在视口顶部以上）
        if (heroBottom <= 100) {
          setShowHeaderSearch(true);
          if (!isSearchActive) {
            setIsSearchActive(true);
          }
        } else {
          // 如果HeroSection在视野中
          setShowHeaderSearch(false);
          setIsSearchActive(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // 初始检查
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isSearchActive]);

  return (
    <Dialog.Root open={showVoiceDialog} onOpenChange={setShowVoiceDialog}>
      <div className="min-h-screen bg-white">
        <Header
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSearch={handleSearch}
          showSearch={showHeaderSearch}
        />

        <div ref={heroSectionRef}>
          <HeroSection
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            searchSuggestions={searchSuggestions}
            onSearch={handleSearch}
            isSearchActive={isSearchActive}
          />
        </div>

        <div ref={goldenThreeRef}>
          <GoldenThreeSection products={goldenThreeProducts} />
        </div>

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
