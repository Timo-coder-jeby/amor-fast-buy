import { CheckCircle, AlertTriangle } from "lucide-react";

interface ReviewHighlight {
  text: string;
  customerCount: number;
}

interface ReviewHighlightsProps {
  reviewHighlights: {
    positive: ReviewHighlight[];
    negative: ReviewHighlight[];
  };
}

const ReviewHighlights = ({ reviewHighlights }: ReviewHighlightsProps) => {
  return (
    <div className="mt-16 mx-auto">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Review Highlights from Verified Buyers</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* What Customers Love */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <h3 className="text-lg font-semibold text-green-700">What Customers Love</h3>
            </div>

            <div className="space-y-4">
              {reviewHighlights.positive.map((highlight, index) => (
                <div key={index} className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-gray-800 mb-2">"{highlight.text}"</p>
                  <p className="text-sm text-green-600 font-medium">
                    Mentioned by {highlight.customerCount} customers
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Areas for Improvement */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <AlertTriangle className="w-6 h-6 text-red-500" />
              <h3 className="text-lg font-semibold text-red-700">Areas for Improvement</h3>
            </div>

            <div className="space-y-4">
              {reviewHighlights.negative.map((highlight, index) => (
                <div key={index} className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <p className="text-gray-800 mb-2">"{highlight.text}"</p>
                  <p className="text-sm text-red-600 font-medium">
                    Mentioned by {highlight.customerCount} customers
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewHighlights;
