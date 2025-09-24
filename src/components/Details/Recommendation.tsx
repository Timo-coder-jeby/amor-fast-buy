import { Info } from "lucide-react";

interface RecommendationProps {
  recommendation: string;
}

const Recommendation = ({ recommendation }: RecommendationProps) => {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg">
      <div className="p-6 pb-4">
        <h2 className="text-lg font-semibold text-blue-900 flex items-center gap-2">
          <Info className="w-5 h-5" />
          Why We Recommend This
        </h2>
      </div>
      <div className="px-6 pb-6">
        <p className="text-blue-800">{recommendation}</p>
      </div>
    </div>
  );
};

export default Recommendation;
