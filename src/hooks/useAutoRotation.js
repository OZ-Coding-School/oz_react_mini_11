import { useEffect, useState } from "react";

export default function useAutoRotation(list) {
  const [currontIndex, setcurrontIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const changeMedia = (newMedia) => {
      setIsVisible(false);
      setTimeout(() => {
        setcurrontIndex(newMedia % list.length);
        setIsVisible(true);
      }, 300);
    };

    const interval = setInterval(() => {
      changeMedia(currontIndex + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [currontIndex, list?.length]);

  return { currontIndex, isVisible };
}
