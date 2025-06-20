import { useEffect, useState } from "react";
import { baseUrl } from "../constant/constant";
import { apiBaseUrl } from "../constant/constant";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState();
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch(`${apiBaseUrl}/movie/${movieId}?language=ko`, {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
          },
        });
        const data = await res.json();
        console.log(data);
        setMovieDetail(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchMovie();
  }, [movieId]); //movieId 상태가 변경될 떄마다 리렌더링
  return !movieDetail ? ( //movieDetail값이 없으면
    <div className="loading">Loading...</div>
  ) : (
    <>
      <div
        style={{
          background: `url(${baseUrl}${movieDetail.backdrop_path}) center / cover no-repeat`,
        }}
        className="detail-movie"
      >
        <div className="flex flex-col md:flex-row md:justify-between relative pt-[120px] pb-[120px] max-w-[1200px] mx-auto text-white">
          <div>
            <img
              src={`${baseUrl}${movieDetail.poster_path}`}
              className="mx-auto mb-[20px] md:mb-0"
            />
          </div>
          <div className="w-[85%] md:w-[50%] mx-auto">
            <div className="flex justify-between">
              <h1 className="font-bold text-[2rem]">{movieDetail.title}</h1>
              <span>{movieDetail.vote_average}</span>
            </div>
            <div className="text-[.8rem] text-[#888888] mb-[10px]">
              {movieDetail.genres.map((genre) => (
                <span key={genre.id} className="mr-[5px]">
                  {genre.name}
                </span>
              ))}
            </div>
            <p>{movieDetail.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
}
