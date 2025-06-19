import { useEffect, useState } from "react";

export default function SearchMovie() {
    const [inputValue, setInputValue] = useState("");
    const [debounceValue, setDebounceValue] = useState("");

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(inputValue);
        }, 1000); //1초 이후 반영

        return () => clearTimeout(handler);
    }, [inputValue]);

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
