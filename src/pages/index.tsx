import { useState, useRef, useEffect } from "react";
import { Dialog } from "radix-ui";
import Header from "@components/AmorHome/Header";
import HeroSection from "@components/AmorHome/HeroSection";
import GoldenThreeSection from "@components/AmorHome/GoldenThreeSection";
import SectionDivider from "@components/AmorHome/SectionDivider";
import HolidayGiftBoxes from "@components/AmorHome/HolidayGiftBoxes";
import CommunitySection from "@components/AmorHome/CommunitySection";
import Footer from "@components/AmorHome/Footer";
import ChatWidget from "@components/AmorHome/ChatWidget";
import VoiceDialog from "@components/AmorHome/VoiceDialog";


import { getTopSellingProducts, getGiftBoxes } from "@/service/api";

const AmorHomepage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showVoiceDialog, setShowVoiceDialog] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false); // 标记是否执行了搜索
  const [showHeaderSearch, setShowHeaderSearch] = useState(false); // 控制 Header 搜索栏显示
  const goldenThreeRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLDivElement>(null);

  const [goldenThreeProducts, setGoldenThreeProducts] = useState([]);
  const [giftBoxes, setGiftBoxes] = useState([]);


  const getProducts = (limit: number, type?: number, title?: string) => {
    return getTopSellingProducts(limit, type, title)
  }

  // 初始化数据 - 可以在这里添加多个接口请求
  useEffect(() => {
    Promise.all([
      getProducts(3),
      getGiftBoxes(),
      // getCommunityPosts(),
    ])
      .then(([productsResp,giftBoxesResp]:any[]) => {
        setGoldenThreeProducts(productsResp);
        setGiftBoxes(giftBoxesResp);
      })
      .catch(error => {
        console.error('Failed to fetch data:', error);
      });
  }, []);

  const searchSuggestions = [
    "Vitamin D supplements",
    "Protein powder comparison",
    "Natural sleep aids",
    "Heart health products"
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


  const handleSearch = () => {
    if (searchQuery.trim()) {
      setIsSearchActive(true); // 标记已执行搜索
      setShowHeaderSearch(true); // 显示 Header 搜索栏

      // 根据搜索关键词调用 API
      getProducts(20, 0, searchQuery)
        .then((productsResp:any) => {
          setGoldenThreeProducts(productsResp);
        })
        .catch(error => {
          console.error('Failed to search products:', error);
        });

      // 缩短动画时间，让滚动更快开始
      setTimeout(() => {
        goldenThreeRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 200); // 调整为200ms
    }
  };

  // 监听滚动事件 - 仅用于控制 Header 搜索栏的显示，不触发接口请求
  useEffect(() => {
    const handleScroll = () => {
      if (heroSectionRef.current) {
        const heroBottom = heroSectionRef.current.getBoundingClientRect().bottom;

        // 根据滚动位置控制 Header 搜索栏显示/隐藏
        if (heroBottom <= 100) {
          setShowHeaderSearch(true);
        } else {
          setShowHeaderSearch(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初始检查
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 监听搜索关键词变化，清空时恢复默认产品
  useEffect(() => {
    // 只有在搜索激活状态下，且搜索框被清空时，才恢复默认产品
    if (isSearchActive && !searchQuery.trim()) {
      setIsSearchActive(false); // 重置搜索状态，恢复显示 Golden Three
      getProducts(3)
        .then((productsResp: any) => {
          setGoldenThreeProducts(productsResp);
        })
        .catch(error => {
          console.error('Failed to load default products:', error);
        });
    }
  }, [searchQuery, isSearchActive]);

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
          <GoldenThreeSection
            products={goldenThreeProducts}
            isSearchResult={isSearchActive}
          />
        </div>

        <SectionDivider />

        <HolidayGiftBoxes
          giftBoxes={giftBoxes}
        />

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
