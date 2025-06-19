import { useState } from "react";

export default function SearchMovie() {
    const [inputValue, setInputValue] = useState("");

    return (
        <input
            type="text"
            placeholder="영화 검색..."
            className="px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2
             focus:ring-offset-slate-950 bg-neutral-800 text-white placeholder-gray-400"
        />
    );
}
