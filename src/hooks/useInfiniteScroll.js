import { useEffect, useRef } from "react";

export default function useInfiniteScroll(callback, canLoad) {
  const loader = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && canLoad) {
        callback();
      }
    });

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) observer.unobserve(loader.current);
    };
  }, [callback, canLoad]);

  return { loader };
}
