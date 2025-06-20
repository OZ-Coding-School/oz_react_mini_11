import { useEffect, useState } from "react";

export default function useDebounce(inputValue) {
  const [debounceValue, setDebounceValue] = useState(inputValue); //반환 할 지연된 값

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebounceValue(inputValue); // 기다린 후 값 저장
    }, 500);

    // 다음 입력 전에 이전 타이머 취소 → 계속 입력 중이면 debounce 리셋
    return () => clearTimeout(timeoutId);
  }, [inputValue]);

  return debounceValue;
}
