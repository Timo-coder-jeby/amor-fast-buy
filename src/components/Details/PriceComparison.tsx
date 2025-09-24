import { ShoppingCart } from "lucide-react";
import { Separator, Avatar, Tooltip, AlertDialog } from "radix-ui";

interface Retailer {
  name: string;
  price: number;
  originalPrice?: number;
  status: string;
  statusColor: string;
  shipping?: string;
  logo: string;
}

interface PriceComparisonProps {
  retailers: Retailer[];
  productTitle: string;
  onBuyNow: (retailer: string, price: number) => void;
}

const PriceComparison = ({ retailers, productTitle, onBuyNow }: PriceComparisonProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 pb-4">
        <h2 className="text-lg font-semibold text-gray-900">Price Comparison</h2>
      </div>
      <div className="px-6 pb-6">
        <div className="space-y-4">
          {retailers.map((retailer, index) => (
            <div key={index}>
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-pink-300 transition-colors">
                <div className="flex items-center gap-3">
                  <Avatar.Root className="w-10 h-10">
                    <Avatar.Fallback className="text-2xl bg-gray-100 w-full h-full flex items-center justify-center rounded-full">
                      {retailer.logo}
                    </Avatar.Fallback>
                  </Avatar.Root>
                  <div>
                    <div className="font-semibold text-gray-900">{retailer.name}</div>
                    {retailer.shipping && (
                      <div className="text-sm text-gray-500">{retailer.shipping}</div>
                    )}
                    {retailer.originalPrice && (
                      <div className="text-sm text-gray-400">was ${retailer.originalPrice}</div>
                    )}
                  </div>
                </div>
                <div className="text-right flex items-center gap-4">
                  <div>
                    <div className="text-xl font-bold text-gray-900">${retailer.price}</div>
                    <div className={`text-xs font-medium px-2 py-1 rounded-full ${
                      retailer.status === "In Stock" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-orange-100 text-orange-800"
                    }`}>
                      {retailer.status}
                    </div>
                  </div>

                  <Tooltip.Provider>
                    <Tooltip.Root>
                      <Tooltip.Trigger asChild>
                        <AlertDialog.Root>
                          <AlertDialog.Trigger asChild>
                            <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 border-none cursor-pointer">
                              <ShoppingCart className="w-4 h-4" />
                              Buy
                            </button>
                          </AlertDialog.Trigger>
                          <AlertDialog.Portal>
                            <AlertDialog.Overlay className="fixed inset-0 bg-black/50 z-50" />
                            <AlertDialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 max-w-md w-full mx-4 z-50 shadow-lg">
                              <AlertDialog.Title className="text-lg font-semibold text-gray-900 mb-2">
                                Confirm Purchase
                              </AlertDialog.Title>
                              <AlertDialog.Description className="text-gray-600 mb-4">
                                You will be redirected to {retailer.name} to complete your purchase of {productTitle} for ${retailer.price}.
                              </AlertDialog.Description>
                              <div className="flex gap-2 justify-end">
                                <AlertDialog.Cancel asChild>
                                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors bg-white text-gray-700 cursor-pointer">
                                    Cancel
                                  </button>
                                </AlertDialog.Cancel>
                                <AlertDialog.Action asChild>
                                  <button
                                    onClick={() => onBuyNow(retailer.name, retailer.price)}
                                    className="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg transition-colors border-none cursor-pointer"
                                  >
                                    Continue to {retailer.name}
                                  </button>
                                </AlertDialog.Action>
                              </div>
                            </AlertDialog.Content>
                          </AlertDialog.Portal>
                        </AlertDialog.Root>
                      </Tooltip.Trigger>
                      <Tooltip.Portal>
                        <Tooltip.Content className="bg-gray-900 text-white px-2 py-1 rounded text-xs">
                          Buy from {retailer.name}
                        </Tooltip.Content>
                      </Tooltip.Portal>
                    </Tooltip.Root>
                  </Tooltip.Provider>
                </div>
              </div>
              {index < retailers.length - 1 && (
                <Separator.Root className="my-2 h-px bg-gray-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceComparison;
