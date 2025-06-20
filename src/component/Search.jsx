import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { apiBaseUrl } from "../constant/constant";
import MovieCard from "./MovieCard";

export default function Search() {
  const [searchParam] = useSearchParams();
  const [filterData, setFilterData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 추가
  const param = searchParam.get("movie"); //navbar에서 navigate로 생성된 쿼리스트링 movie의 값
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setIsLoading(true); // 요청 시작 전에 로딩 시작
        const res = await fetch(`${apiBaseUrl}/search/movie?query=${param}`, {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
          },
        });
        const data = await res.json();
        const filtered = data.results.filter((movie) => movie.adult === false); //API로부터 받아온 영화 목록 데이터에서 adult 속성이 false인 영화만 필터링
        setFilterData(filtered);
        console.log(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false); // 요청 완료 시 로딩 끝
      }
    };
    fetchMovie();
  }, [param]);

  return isLoading ? (
    <div className="loading">Loading...</div>
  ) : (
    <>
      {filterData.length > 0 ? ( //1개이상 map으로 카드렌더링
        <div className="flex flex-wrap pt-[70px] max-w-[1600px] m-auto">
          {filterData.map((el) => (
            <MovieCard key={el.id} movie={el} />
          ))}
        </div>
      ) : (
        <p className="loading">{param}에 대한 검색결과가 없습니다</p>
      )}
    </>
  );
}
