import MovieCard from "../components/MovieCard";
import SwiperCard from "../components/SwiperCard";
import MovieListdata from "../data/movieListData.json";
import { fetchMovies } from "../api/tmdb";
import { useEffect, useState } from "react";

export default function Home() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetchMovies()
            .then((data) => {
                const safeMovies = data.results.filter((movie) => movie.adult === false);
                setMovies(safeMovies);
            })
            .catch((error) => console.error("api error", error))
            .finally(() => setLoading(false));
    }, []);

    console.log(movies);

    return (
        <>
            <SwiperCard movies={movies} />
            <div className="max-w-5xl mx-auto px-4 py-8">
                <div className=" grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
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
        </>
    );
}
