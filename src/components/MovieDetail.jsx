import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  IMAGE_BASE_URL,
  TMDB_GET_OPTION,
  TMDB_MOIVE_API_BASE_URL,
} from "../constants";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`${TMDB_MOIVE_API_BASE_URL}/${id}?language=ko`, TMDB_GET_OPTION)
      .then((res) => res.json())
      .then((res) => setMovie(res))
      .catch((err) => console.error("❌ 영화 데이터 요청 실패:", err));
  }, [id]);

  if (!movie) {
    return (
      <div className="flex justify-center items-center h-96 text-rose-200">
        로딩 중...
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-gradient-to-b from-black via-gray-900 to-gray-800 text-rose-100 min-h-screen">
      <img
        className="w-full md:w-1/3 rounded-lg shadow-xl border border-rose-400"
        src={`${IMAGE_BASE_URL}${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="flex-1">
        <h2 className="text-4xl font-extrabold mb-4 text-rose-200 tracking-wider">
          {movie.title}
        </h2>
        <p className="text-yellow-400 font-semibold mb-3">
          ⭐ {movie.vote_average}
        </p>
        {movie.genres?.length ? (
          <p className="text-sm text-pink-300 mb-4 italic">
            {movie.genres.map((genre) => genre.name).join(", ")}
          </p>
        ) : (
          <p className="text-sm text-gray-500 mb-4">장르 정보 없음</p>
        )}
        <div className="bg-gray-800 bg-opacity-60 p-6 rounded-lg shadow-md border-l-4 border-rose-400">
          <h3 className="text-xl font-semibold mb-2 text-rose-300">줄거리</h3>
          <p className="text-base leading-relaxed text-gray-200">
            {movie.overview}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
