import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import { fetchsearchMovies } from "../api/tmdb";
import MovieCard from "./MovieCard";

export default function SearchMovie({ setSearchResultMoives }) {
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
            if (!debounceValue) {
                setSearchResultMoives([]);
                return;
            }
            try {
                const data = await fetchsearchMovies(debounceValue);
                const safeMovies = data.results.filter((moive) => moive.adult === false);
                setSearchResultMoives(safeMovies);
            } catch (error) {
                console.log("검색 실패:", error.message);
                setSearchResultMoives([]);
            }
        };

        fetchData();
    }, [debounceValue]);

    return (
        <>
            <input
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
                type="text"
                placeholder="영화 검색..."
                className="px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2
             focus:ring-offset-slate-950 bg-neutral-800 text-white placeholder-gray-400"
            />
        </>
    );
}
