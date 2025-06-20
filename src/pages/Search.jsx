import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchsearchMovies } from "../api/tmdb";
import MovieCard from "../components/MovieCard";

export default function Search() {
    const [searchParms] = useSearchParams();
    const keyword = searchParms.get("keyword");
    // useSearchParams()로 keyword
    // keyword로 API 호출

    const [movies, setMovie] = useState([]);

    useEffect(() => {
        if (!keyword) return;
        const fetchData = async () => {
            const data = await fetchsearchMovies(keyword); // keyword로 API 호출
            const safeMovies = data.results.filter((v) => v.adult === false);
            setMovie(safeMovies);
            console.log(data);
        };
        fetchData();
    }, [keyword]);

    return (
        <div className="p-6 text-white">
            <h2 className="text-xl mb-4">"{keyword}" 검색 결과</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
        </div>
    );
}
