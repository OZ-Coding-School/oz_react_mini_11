import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { fetchMovieDetails } from "../api/fetchMovieDetails";
const URL = import.meta.env.VITE_TMDB_IMAGE_URL;

export function MovieDetail() {
  const { movieId } = useParams();
  //params는 리액트 훅중에 하나로, url경로에 담긴 값을 읽어오는 용도.
  //라우터에 path 파라미터 지정해놓음
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then((data) => {
        setMovie(data);
      })
      .catch((err) => console.error(err));
  }, [movieId]);

  if (!movie) return <div className="flex justify-center">로딩중...</div>; // movie가 없으면 여기서 멈추고 로딩중
  // api처리할때 비동기라 처음에는 데이터가 없는상태, 따라서 poster_path읽으려고 하면 에러발생

  return (
    <div className=" flex justify-center items-center pt-[20%] md:pt-[4%]  flex-col md:flex-row text-white">
      <img
        src={`${URL}${movie.poster_path}`}
        alt={movie.title}
        className="h-[40vh] md:h-[500px] w-[100vw] "
        onClick={(e) => {
          navigate(`/`);
        }}
      />
      <div className="flex flex-col justify-evenly h-[40vh] md:h-screen ml-4 py-20 px-10">
        <div className="flex w-full md:text-xl">
          <div className="flex-2 md:text-xl">{movie.title}</div>
          <div className="flex-1 text-end md:text-xl">
            {`평점: ${Math.ceil(movie.vote_average * 10) / 10}`}
          </div>
        </div>
        <div className="md:text-xl">
          {movie.genres.map((el) => el.name).join(", ")}
        </div>
        <div className=" md:text-xl   md:w-[30vw]">{movie.overview}</div>
      </div>
    </div>
  );
}
