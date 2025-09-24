import { ShoppingCart } from "lucide-react";
import { AlertDialog } from "radix-ui";

interface Retailer {
  name: string;
  price: number;
  originalPrice?: number;
  status: string;
  statusColor: string;
  shipping?: string;
  logo: string;
}

interface MainBuyButtonProps {
  currentPrice: number;
  retailers: Retailer[];
  productTitle: string;
  onBuyNow: (retailer: string, price: number) => void;
}

const MainBuyButton = ({ currentPrice, retailers, productTitle, onBuyNow }: MainBuyButtonProps) => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-4 text-lg flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors border-none cursor-pointer">
          <ShoppingCart className="w-5 h-5" />
          Buy Now - ${currentPrice}
        </button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="fixed inset-0 bg-black/50 z-50" />
        <AlertDialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 max-w-md w-full mx-4 z-50 shadow-lg">
          <AlertDialog.Title className="text-lg font-semibold text-gray-900 mb-2">
            Choose Your Retailer
          </AlertDialog.Title>
          <AlertDialog.Description className="text-gray-600 mb-4">
            Select where you'd like to purchase {productTitle}:
          </AlertDialog.Description>
          <div className="space-y-2 mb-4">
            {retailers.map((retailer, index) => (
              <button
                key={index}
                className="w-full justify-between p-4 border border-gray-200 rounded-lg hover:border-pink-500 transition-colors bg-white cursor-pointer flex items-center"
                onClick={() => onBuyNow(retailer.name, retailer.price)}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{retailer.logo}</span>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">{retailer.name}</div>
                    <div className="text-sm text-gray-500">{retailer.shipping || retailer.status}</div>
                  </div>
                </div>
                <div className="text-lg font-bold text-gray-900">${retailer.price}</div>
              </button>
            ))}
          </div>
          <div className="flex justify-end">
            <AlertDialog.Cancel asChild>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors bg-white text-gray-700 cursor-pointer">
                Cancel
              </button>
            </AlertDialog.Cancel>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

export default MainBuyButton;
