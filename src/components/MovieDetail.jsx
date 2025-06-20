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
      <div className="flex justify-center items-center h-96 text-pink-200 text-xl animate-pulse">
        🌸 영화 정보를 불러오는 중입니다...
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-gradient-to-b from-rose-100 via-rose-200 to-pink-100 text-rose-900 min-h-screen">
      <img
        className="w-full md:w-1/3 rounded-xl shadow-2xl border-4 border-pink-400"
        src={`${IMAGE_BASE_URL}${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-4xl font-serif font-bold text-pink-600 mb-4 border-b-2 border-pink-400 pb-2">
          {movie.title}
        </h1>
        <p className="text-lg leading-relaxed text-rose-800">
          {movie.overview || "줄거리 정보가 없습니다."}
        </p>
        <p className="mt-4 text-sm text-pink-600">
          📅 개봉일: {movie.release_date}
        </p>
        <p className="text-sm text-pink-600">⭐ 평점: {movie.vote_average}</p>
      </div>
    </div>
  );
}

export default MovieDetail;
