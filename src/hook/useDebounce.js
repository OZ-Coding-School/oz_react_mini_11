import { useEffect, useState } from "react";

export default function useDebounce(value){

    const [debounceValue, setDebounceValue] = useState(value);
    const delay = 300; // debounce delay 시간.

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value);
        }, delay);

        // componentUnmount 발생시 타이머를 삭제시키기 위해서 사용.
        return () => {
            clearTimeout(handler);
        };
    }, [value]);

    return debounceValue;
}