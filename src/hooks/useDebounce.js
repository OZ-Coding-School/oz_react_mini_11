import { useEffect, useState } from "react";

function useDebounce(value, delay = 500) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value); //delay가 지나가면 값 업데이트
        }, delay);

        return () => clearTimeout(timer); //value또는 delay가 바뀌기 전에 타이머 제거
    }, [value, delay]);

    return debouncedValue;
} 

export default useDebounce;