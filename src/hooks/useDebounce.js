import { useEffect } from "react";

export const useDebounce = (func, deps, delay) => {
  useEffect(() => {
    if (!deps) return;

    const timer = setTimeout(() => {
      func();
    }, delay);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deps]);
};
