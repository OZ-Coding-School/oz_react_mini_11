import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieDetail() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?language=ko-KR`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
              accept: "application/json",
            },
          }
        );
        const data = await res.json();
        setMovie(data);
      } catch (error) {
        console.error("영화 상세 정보를 불러오지 못했습니다:", error);
      }
    };
    fetchMovie();
  }, [id]);

  if (!movie)
    return <div className="text-center py-10 text-6xl">🌘 🌗 🌖 🌕</div>;

  const { backdrop_path, poster_path, title, vote_average, genres, overview } =
    movie;

  return (
    <div className="font-sans">
      {/* 배경 이미지 영역 */}
      <div
        className="hidden md:flex h-72 items-center text-white px-8"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
        }}
      >
        <h1 className="text-3xl font-bold text-white mb-6">인기 영화</h1>
      </div>

      {/* 상세 내용 */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 p-4">
        {/* 포스터 */}
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={title}
          className="rounded-xl shadow-lg w-full max-w-[250px] mx-auto md:mx-0"
        />

        {/* 텍스트 정보 */}
        <div className="flex-1 space-y-4 mt-4 md:mt-0">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p>
            <span className="font-semibold">평점:</span> {vote_average}
          </p>
          <p>
            <span className="font-semibold">장르:</span>{" "}
            {genres.map((g) => g.name).join(", ")}
          </p>
          <div>
            <p className="font-semibold">줄거리:</p>
            <p className="text-white">{overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
