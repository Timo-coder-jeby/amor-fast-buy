import { Search } from "lucide-react";

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Header = ({ searchQuery, setSearchQuery }: HeaderProps) => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="text-2xl sm:text-3xl font-bold amor-gradient-text">Amor</div>
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
  );
};

export default Header;
