import { Search } from "lucide-react";

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSearch: () => void;
  showSearch: boolean;
}

const Header = ({ searchQuery, setSearchQuery, onSearch, showSearch }: HeaderProps) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="text-2xl sm:text-3xl font-bold amor-gradient-text">Amor</div>
            <div className="text-sm text-gray-500 hidden sm:block">Trusted Health Products</div>
          </div>

          {/* Desktop Search Bar - 带动画 */}
          <div className={`flex-1 max-w-2xl mx-8 hidden md:block transition-all duration-500 ease-in-out ${
            showSearch ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'
          }`}>
            <div className="relative">
              <input
                type="text"
                placeholder="Search for health products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full h-12 pl-4 pr-12 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none transition-all"
              />
              <button
                onClick={onSearch}
                className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 text-gray-400 hover:text-pink-500 flex items-center justify-center transition-colors">
                <Search className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Mobile Search Icon */}
          <button className={`md:hidden h-10 w-10 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-opacity duration-500 ${
            showSearch ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}>
            <Search className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile Search Bar - 带动画 */}
        <div className={`md:hidden mt-4 transition-all duration-500 ease-in-out overflow-hidden ${
          showSearch ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="relative">
            <input
              type="text"
              placeholder="Search health products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full h-12 pl-4 pr-12 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
            />
            <button
              onClick={onSearch}
              className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 text-gray-400 hover:text-pink-500 flex items-center justify-center">
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
