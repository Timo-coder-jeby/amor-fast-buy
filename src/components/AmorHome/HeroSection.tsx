import { Dialog } from "radix-ui";
import { Mic } from "lucide-react";

interface HeroSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchSuggestions: string[];
}

const HeroSection = ({
  searchQuery,
  setSearchQuery,
  searchSuggestions
}: HeroSectionProps) => {
  return (
    <section className="bg-gradient-to-br from-[hsl(var(--amor-primary))] to-[hsl(var(--amor-secondary))] text-white py-12 lg:py-20">
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
                <Dialog.Trigger asChild>
                  <button
                    className="h-14 w-14 bg-pink-600 hover:bg-pink-700 text-white rounded-xl flex items-center justify-center transition-colors"
                  >
                    <Mic className="h-6 w-6" />
                  </button>
                </Dialog.Trigger>
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
  );
};

export default HeroSection;
