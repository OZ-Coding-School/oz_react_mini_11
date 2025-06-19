import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import { fetchsearchMovies } from "../api/tmdb";
import MovieCard from "./MovieCard";

export default function SearchMovie({ setSearchResultMovies, setIsSearching }) {
    const [inputValue, setInputValue] = useState("");
    // const [debounceValue, setDebounceValue] = useState("");
    // const [movies, setMovies] = useState([]);
    const debounceValue = useDebounce(inputValue, 1000);

    // useEffect(() => {
    //     if (debounceValue) {
    //         console.log(debounceValue);
    //     }
    // }, [debounceValue]);

    useEffect(() => {
        const fetchData = async () => {
            //검색어 없으면 초기화
            if (!debounceValue || !debounceValue.trim()) {
                setSearchResultMovies([]);
                setIsSearching(false);
                return;
            }
            try {
                setIsSearching(true);
                const data = await fetchsearchMovies(debounceValue);

                const safeMovies = data.results.filter((moive) => moive.adult === false);
                setSearchResultMovies(safeMovies);
            } catch (error) {
                console.log("검색 실패:", error.message);
                setSearchResultMovies([]);
            }
        };

        fetchData();
    }, [debounceValue]);

    return (
        <input
            type="text"
            placeholder="..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-500 focus:outline-none 
               focus:ring-2 focus:ring-sky-500 bg-neutral-800 text-white placeholder-gray-400"
        />
    );
}
