import { create } from "zustand";

interface useMovieModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useMovieModal = create<useMovieModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
