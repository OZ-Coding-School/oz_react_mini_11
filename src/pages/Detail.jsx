import { useState, useEffect } from "react";
import movieDetailData from "../DB/movieDetailData.json";

export default function MovieDetail() {
  const [detailData, setDetailData] = useState(null);

  useEffect(() => {
    setDetailData(movieDetailData);
  }, []);

  return (
    <div className="flex items-center justify-center gap-8 p-8 bg-emerald-900 min-h-screen text-white">
      {detailData && (
        <>
          <img
            className="w-[200] h-[600px] rounded shadow-lg"
            src={`https://image.tmdb.org/t/p/w500${detailData.belongs_to_collection.poster_path}`}
            alt={detailData.title}
          />

          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold">제목: {detailData.title}</h2>
            <p className="text-xl">평점: {detailData.vote_average}</p>
            <p className="text-lg">
              장르: {detailData.genres.map((genre) => genre.name).join(", ")}
            </p>
            <p className="text-base leading-relaxed max-w-xl">
              줄거리: {detailData.overview}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
