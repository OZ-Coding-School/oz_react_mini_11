import { useEffect, useState } from "react";

//debounce 훅
export default function useDebounce(text, delay) {
  const [debounced, setDebounced] = useState(text);
  //사용자가 입력할때마다 setTimeout걸어서 delay이후에 setDebounced실행
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounced(text);
    }, delay);
    //입력이 중간에 변경되면 기존의 타이머를 취소해라.
    return () => {
      clearTimeout(handler);
    };
  }, [text, delay]);
  //다 끝나면 debounced를 리턴
  return debounced;
}
