import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";

export default function SearchMovie() {
    const [inputValue, setInputValue] = useState("");
    // const [debounceValue, setDebounceValue] = useState("");
    const debounceValue = useDebounce(inputValue, 1000);

    useEffect(() => {
        if (debounceValue) {
            console.log(debounceValue);
        }
    }, [debounceValue]);

    return (
        <input
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            type="text"
            placeholder="영화 검색..."
            className="px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2
             focus:ring-offset-slate-950 bg-neutral-800 text-white placeholder-gray-400"
        />
    );
}
