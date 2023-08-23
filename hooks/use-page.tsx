import { create } from "zustand";

interface usePage {
  page: string;
  search: string;
  setPage: (page: string) => void;
  setSearch: (search: string) => void;
}

export const usePage = create<usePage>((set) => ({
  page: "",
  search: "",
  setPage: (page) => set({ page }),
  setSearch: (search) => set({ search }),
}));
