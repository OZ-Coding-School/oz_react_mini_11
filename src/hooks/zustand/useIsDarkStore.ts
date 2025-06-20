import { create } from "zustand";

interface DarkModeState {
  isDark: boolean;
  switchDarkMode: () => void;
}

const useDarkModeStore = create<DarkModeState>((set) => {
  // Determine initial dark mode:
  // 1. If localStorage has a key, use that.
  // 2. Otherwise, fallback to system preference.
  const stored =
    typeof window !== "undefined" ? localStorage.getItem("dark-mode") : null;

  const prefersDark =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const initialDarkMode = stored !== null ? stored === "true" : prefersDark;

  return {
    isDark: initialDarkMode,
    switchDarkMode: () =>
      set((state) => {
        const newMode = !state.isDark;
        localStorage.setItem("dark-mode", String(newMode));
        return { isDark: newMode };
      }),
  };
});

export default useDarkModeStore;
