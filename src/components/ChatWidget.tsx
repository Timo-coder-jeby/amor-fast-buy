import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface ChatWidgetProps {
  setShowVoiceDialog: (show: boolean) => void;
}

const ChatWidget = ({ setShowVoiceDialog }: ChatWidgetProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="fixed bottom-6 right-6 z-50">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 max-w-xs">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">💡</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 mb-1">Need health product advice?</p>
                  <p className="text-xs text-gray-500 mb-3">Click me for instant help!</p>
                  <button
                    onClick={() => setShowVoiceDialog(true)}
                    className="w-full bg-pink-500 hover:bg-pink-600 text-white text-xs py-2 rounded-lg transition-colors"
                  >
                    Start Chat
                  </button>
                </div>
              </div>
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent className="bg-gray-900 text-white px-3 py-2 rounded-lg text-sm">
          Get personalized health product recommendations
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ChatWidget;
