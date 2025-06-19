import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import { searchMovies } from "../api/tmdb";
import MovieCard from "./MovieCard";

export default function SearchMovie() {
    const [inputValue, setInputValue] = useState("");
    // const [debounceValue, setDebounceValue] = useState("");
    const [movies, setMovies] = useState([]);
    const debounceValue = useDebounce(inputValue, 1000);

    // useEffect(() => {
    //     if (debounceValue) {
    //         console.log(debounceValue);
    //     }
    // }, [debounceValue]);

    useEffect(() => {
        if (!debounceValue) return;

        const getData = async () => {
            try {
                const data = await searchMovies(debounceValue);
                setMovies(data);
            } catch (error) {
                console.log("검색 실패 : ", error.message);
            }
        };
        getData();
        console.log(debounceValue);
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
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {movies.map((el) => (
                    <MovieCard
                        key={el.id}
                        id={el.id}
                        movieImg={el.poster_path}
                        title={el.title}
                        rating={el.vote_average}
                    />
                ))}
            </div>
        </>
    );
}
