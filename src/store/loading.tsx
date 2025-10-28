import React, { createContext, useContext, useState, useCallback,useEffect } from 'react';

interface LoadingContextType {
  isLoading: boolean;
  loadingCount: number;
  showLoading: () => void;
  hideLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

// 全局 loading 管理器（用于非 React 组件）
let globalLoadingManager: LoadingContextType | null = null;

export const setGlobalLoadingManager = (manager: LoadingContextType) => {
  globalLoadingManager = manager;
};

export const getGlobalLoadingManager = () => {
  if (!globalLoadingManager) {
    console.warn('LoadingManager not initialized');
    return {
      showLoading: () => {},
      hideLoading: () => {},
    };
  }
  return globalLoadingManager;
};

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loadingCount, setLoadingCount] = useState(0);
  const isLoading = loadingCount > 0;

  const showLoading = useCallback(() => {
    setLoadingCount((prev) => prev + 1);
  }, []);

  const hideLoading = useCallback(() => {
    setLoadingCount((prev) => Math.max(0, prev - 1));
  }, []);

  const value = { isLoading, loadingCount, showLoading, hideLoading };

  // 设置全局管理器
  useEffect(() => {
    setGlobalLoadingManager(value);
  }, [value]);

  return (
    <LoadingContext.Provider value={value}>
      {children}
    </LoadingContext.Provider>
  );
};


export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within LoadingProvider');
  }
  return context;
};

