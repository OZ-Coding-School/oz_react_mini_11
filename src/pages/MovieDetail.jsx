import { useEffect, useState } from "react";
import { useParams } from "react-router";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export function MovieDetail() {
  const { movieId } = useParams();
  //params는 리액트 훅중에 하나로, url경로에 담긴 값을 읽어오는 용도.
  //라우터에 path 파라미터 지정해놓음
  const token = import.meta.env.VITE_TMDB_READ_TOKEN;
  //토큰 가져옴
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=ko-Korea`,
      options
    )
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
        console.log(data);
      })
      .catch((err) => console.error(err));
  }, [movieId]);

  if (!movie) return <div className="flex justify-center">로딩중...</div>; // movie가 없으면 여기서 멈추고 로딩중
  // api처리할때 비동기라 처음에는 데이터가 없는상태, 따라서 poster_path읽으려고 하면 에러발생

  return (
    <div className="flex flex-row w-[60vw] justify-center pt-50">
      <img
        src={`${IMAGE_BASE_URL}${movie.poster_path}`}
        alt={movie.title}
        className="h-[500px] "
      />
      <div className="flex flex-col justify-between ml-4  h-[60vh]">
        <div className="flex w-full">
          <div className="flex-2">{movie.title}</div>
          <div className="flex-1">
            {`평점: ${Math.ceil(movie.vote_average * 10) / 10}`}
          </div>
        </div>
        <div>{movie.genres.map((el) => el.name).join(", ")}</div>
        <div>{movie.overview}</div>
      </div>
    </div>
  );
}
