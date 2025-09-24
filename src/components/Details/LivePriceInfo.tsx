import { AlertTriangle } from "lucide-react";

interface LivePriceInfoProps {
  productData: {
    currentPrice: number;
    originalPrice: number;
    savings: number;
    lastUpdated: string;
    priceDisclaimer: string;
  };
}

const LivePriceInfo = ({ productData }: LivePriceInfoProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border-2 border-pink-200">
      <div className="p-6 pb-4">
        <h2 className="text-lg font-semibold text-pink-600 flex items-center gap-2">
          <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse"></div>
          Live Price Information
        </h2>
      </div>
      <div className="px-6 pb-6">
        <div className="flex items-end justify-between mb-4">
          <div>
            <div className="text-3xl font-bold text-pink-600">${productData.currentPrice}</div>
            <div className="flex items-center gap-2 text-sm">
              <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                LIVE
              </div>
              <span className="text-gray-500">Updated {productData.lastUpdated}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-gray-400 line-through">${productData.originalPrice}</div>
            <div className="text-green-600 font-medium">Save ${productData.savings}</div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 flex items-start gap-2">
          <AlertTriangle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
          <div className="text-sm text-yellow-800">
            <strong>Price Disclaimer:</strong> {productData.priceDisclaimer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LivePriceInfo;
