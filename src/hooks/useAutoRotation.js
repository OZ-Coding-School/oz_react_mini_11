import { useEffect, useState } from "react";

export default function useAutoRotation(list) {
  const [currentIndex, setcurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const changeMedia = (newMedia) => {
      setIsVisible(false);
      setTimeout(() => {
        setcurrentIndex(newMedia % list.length);
        setIsVisible(true);
      }, 300);
    };

    const interval = setInterval(() => {
      changeMedia(currentIndex + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, list?.length]);

  return { currentIndex, isVisible };
}
