import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";

export default function SearchPage() {
  //useSearchParams는 현재url의 쿼리 파라미터 사용할수있게해줌
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  //result에 빈배열을 넣어놓고 레이아웃단에서 map으로 movie를 grid로 뿌려줌
  const [results, setResults] = useState([]);

  const token = import.meta.env.VITE_TMDB_READ_TOKEN;
  const navigate = useNavigate();

  useEffect(() => {
    //혹시모를 공백도제거한 값이 false면 빈배열로 셋팅하고 끝냄
    if (!query || !query.trim()) {
      setResults([]);
      return;
    }

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=ko-KOR&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => {
        setResults(res.results);
      })
      .catch((err) => console.error(err));
  }, [query]);

  return (
    <div className="p-12">
      <h1 className="text-2xl mb-6">{`"${query}" 검색 결과`}</h1>
      <div className="grid grid-cols-2 md:grid-cols-6 md:gap-6">
        {results.map((movie) => (
          <div key={movie.id} className="bg-gray-900 text-white p-4 rounded">
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              onClick={(e) => {
                navigate(`/movies/${movie.id}`);
              }}
            />
            <h2 className="mt-2 text-md text-center">{movie.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
