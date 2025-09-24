import { Dialog } from "radix-ui";
import { Mic } from "lucide-react";

const VoiceDialog = () => {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50" />
      <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-8 max-w-md w-full mx-4 z-50">
        <Dialog.Title className="text-2xl font-bold text-gray-900 mb-4">Voice Search</Dialog.Title>
        <Dialog.Description className="text-gray-600 mb-6">
          Click the microphone and speak your health product question
        </Dialog.Description>
        <div className="flex flex-col items-center space-y-4">
          <button className="w-20 h-20 bg-pink-500 hover:bg-pink-600 text-white rounded-full flex items-center justify-center transition-colors">
            <Mic className="h-8 w-8" />
          </button>
          <p className="text-sm text-gray-500">Click to start recording</p>
        </div>
        <Dialog.Close asChild>
          <button className="mt-6 w-full bg-gray-100 hover:bg-gray-200 text-gray-900 py-3 rounded-lg font-medium transition-colors">
            Cancel
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  );
};

export default VoiceDialog;
