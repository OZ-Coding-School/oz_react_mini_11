import { useEffect, useRef, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import { fetchsearchMovies } from "../api/tmdb";
import MovieCard from "./MovieCard";
import { useNavigate } from "react-router-dom";

export default function SearchMovie() {
    const [inputValue, setInputValue] = useState("");
    const debounceValue = useDebounce(inputValue, 1000);

    // const [isOpen, setIsOpen] = useState(false); //검색창 오픈 상태관리
    // const inputRef = useRef(null);

    const navigate = useNavigate();

    useEffect(() => {
        if (debounceValue) {
            navigate(`search?keyword=${debounceValue}`);
        }
        // const fetchData = async () => {
        //검색어 없으면 초기화
        // if (!debounceValue || !debounceValue.trim()) {
        //     setSearchResultMovies([]);

        //     return;
        // }
        // try {
        //     const data = await fetchsearchMovies(debounceValue);

        //     const safeMovies = data.results.filter((moive) => moive.adult === false);
        //     setSearchResultMovies(safeMovies);
        // } catch (error) {
        //     console.log("검색 실패:", error.message);
        //     setSearchResultMovies([]);
        // }
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
