import { create } from 'zustand';

interface LoadingState {
  loadingCount: number;
  isLoading: boolean;
  showLoading: () => void;
  hideLoading: () => void;
}

export const useLoadingStore = create<LoadingState>((set) => ({
  loadingCount: 0,
  isLoading: false,
  showLoading: () =>
    set((state) => {
      const newCount = state.loadingCount + 1;
      return {
        loadingCount: newCount,
        isLoading: true,
      };
    }),
  hideLoading: () =>
    set((state) => {
      const newCount = Math.max(0, state.loadingCount - 1);
      return {
        loadingCount: newCount,
        isLoading: newCount > 0,
      };
    }),
}));

// 便捷方法供非 React 组件使用
export const getGlobalLoadingManager = () => ({
  showLoading: useLoadingStore.getState().showLoading,
  hideLoading: useLoadingStore.getState().hideLoading,
});

