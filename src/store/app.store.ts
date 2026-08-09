import { create } from "zustand";

interface AppState {
  isSidebarOpen: boolean;
  isModalOpen: boolean;

  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;

  setModalOpen: (open: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  isSidebarOpen: false,
  isModalOpen: false,

  toggleSidebar: () =>
    set((state) => ({
      isSidebarOpen: !state.isSidebarOpen,
    })),

  setSidebarOpen: (open) =>
    set({
      isSidebarOpen: open,
    }),

  setModalOpen: (open) =>
    set({
      isModalOpen: open,
    }),
}));
