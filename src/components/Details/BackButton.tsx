import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  onClick: () => void;
}

const BackButton = ({ onClick }: BackButtonProps) => {
  return (
    <div className="bg-white border-b border-gray-200 px-4 py-4 sticky top-0 z-50 backdrop-blur-sm bg-white/95 shadow-sm">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={onClick}
          className="flex items-center gap-2 text-gray-600 hover:text-white hover:font-semibold bg-transparent hover:bg-[#dd87cb] border-none cursor-pointer px-3 py-2 rounded-md transition-all duration-300 ease-in-out group"
        >
          <ArrowLeft className="w-4 h-4 transition-all duration-300 group-hover:scale-105" />
          Back to Search
        </button>
      </div>
    </div>
  );
};

export default BackButton;
