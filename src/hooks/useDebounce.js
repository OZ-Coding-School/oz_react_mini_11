import { useEffect, useState } from "react";

function useDebounce(value, delay = 500) {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value);
        }, dalay);

        return () => clearTimeout(handler);
    }, [value, delay]);

    return debounceValue;
} 

export default useDebounce;