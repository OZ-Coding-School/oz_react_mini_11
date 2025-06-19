import { useEffect } from "react";
import { useState } from "react";

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    // value가 바뀔때마다 실행, 바뀌면 setTimeout으로 일정 시간후 상태에 값을 넣는다.

    return () => {
      clearTimeout(timer);
    };
  }, [value]);
  // value가 delay안에 바뀌면 clearTimeout으로 이전 예약 취소한다.

  return debouncedValue; //디바운싱 된 값을 컴포넌트에게 넘겨준다.
};

export default useDebounce;
