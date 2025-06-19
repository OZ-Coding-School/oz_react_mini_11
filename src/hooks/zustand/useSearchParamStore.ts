import { create } from "zustand";

interface SearchParamState {
  searchParam: string;
  updateSearchParam: (newSearchParam: string) => void;
}

const useSearchParamStore = create<SearchParamState>()((set) => ({
  searchParam: "",
  updateSearchParam: (newSearchParam) =>
    set(() => ({ searchParam: newSearchParam })),
}));

export default useSearchParamStore;
