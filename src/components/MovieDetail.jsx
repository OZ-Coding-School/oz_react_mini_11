import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TMDB_BASE_URL, TMDB_GET_OPTION, IMAGE_BASE_URL } from "../constants"; // ✅ 이미지 URL import

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`${TMDB_BASE_URL}/movie/${id}?language=ko`, TMDB_GET_OPTION) // ✅ 경로 수정도 여기서 확인
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((err) => console.error("영화 상세 정보 불러오기 실패:", err));
  }, [id]);

  if (!movie) return <div className="text-white p-10">로딩 중...</div>;

  return (
    <div className="bg-[#1e1e1e] min-h-screen text-white px-6 py-12">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 max-w-5xl mx-auto">
        <img
          src={`${IMAGE_BASE_URL}${movie.poster_path}`}
          alt={movie.title}
          className="w-full max-w-xs rounded-xl shadow-lg border border-gray-700"
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-purple-400">{movie.title}</h1>
          <p className="text-gray-400">{movie.overview}</p>
          <div className="text-sm text-gray-300">
            <p>📅 개봉일: {movie.release_date}</p>
            <p>⭐ 평점: {movie.vote_average.toFixed(1)}</p>
            <p>🎬 장르: {movie.genres.map((g) => g.name).join(", ")}</p>
            <p>🕒 상영 시간: {movie.runtime}분</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
