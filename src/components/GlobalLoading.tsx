import React from 'react';
import { useLoadingStore } from '@/store/loading.tsx';

export const GlobalLoading: React.FC = () => {
  const isLoading = useLoadingStore((state) => state.isLoading);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/20 transition-all">
      <div className="flex flex-col items-center gap-3 rounded-xl bg-black/40 px-8 py-6 shadow-2xl backdrop-blur-md">
        {/* Spinner */}
        <div className="relative h-10 w-10">
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-gray-200 border-t-primary"></div>
          <div className="absolute inset-2 animate-pulse rounded-full bg-primary/10"></div>
        </div>
        {/* Text */}
        <p className="text-sm font-medium text-white animate-pulse">Loading...</p>
      </div>
    </div>
  );
};

