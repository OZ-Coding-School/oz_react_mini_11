import { useParams } from "react-router-dom";
import MovieDetailCard from "../components/MovieDetailCard";
import movieDetailData from "../data/movieDetailData.json";
import { fetchMoviesDetail } from "../api/tmdb";
import { useEffect, useState } from "react";

export default function MovieDetail() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchMoviesDetail(id)
            .then((data) => setMovie(data))
            .catch((error) => setError(error.message));
    }, [id]);

    if (error) {
        return <div className="text-white">에러 발생: {error}</div>;
    }

    if (!movie) {
        return <div className="text-white">로딩 중...</div>; // ✅ 이걸로 막기!
    }

    return (
        <>
            <div className="">
                <MovieDetailCard movie={movie} />
            </div>
        </>
    );
}
