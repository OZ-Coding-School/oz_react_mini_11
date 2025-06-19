import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function MovieDetail() {
  const [detailData, setDetailData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchDetail = async () => {
      const token = import.meta.env.VITE_API_TOKEN;
      const apiUrl = import.meta.env.VITE_API_URL;
      // 같은 토큰 가져와 변수 저장

      const res = await fetch(`${apiUrl}movie/${id}?language=ko-KR`, {
        headers: {
          Authorization: `Bearer ${token}`,
          accept: "application/json",
        },
      });

      const data = await res.json(); //json형태로 data에 저장
      setDetailData(data); //data를 상태에 담기
    };

    fetchDetail();
  }, [id]); // id가 바뀔때마다 리랜더링

  return (
    <div className="flex items-center justify-center gap-8 p-8 bg-emerald-900 min-h-screen text-white">
      {detailData && (
        <>
          <img
            className="w-[200] h-[600px] rounded shadow-lg"
            src={`https://image.tmdb.org/t/p/w500${detailData.poster_path}`}
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
