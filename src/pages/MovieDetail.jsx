import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { BASE_URL, API_KEY } from "../constant/index";
import SkeletonDetail from "../components/SkeletonDetail";

function MovieDetail() {
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(true);
  const { id: movieId } = useParams();
  console.log(movieId);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    };

    fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=ko`, options)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
        setLoading(false);
        console.log(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return !loading ? (
    <div className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center blur-2xl scale-[3] brightness-75"
        style={{
          backgroundImage: `url(${BASE_URL}${movie.poster_path})`,
        }}
      />

      <div className="relative flex flex-col md:flex-row gap-[5vw] px-[5vw] py-[80px]">
        <img
          className="w-1/3 max-h-[calc(100vh-120px)] object-contain object-top"
          src={`${BASE_URL}${movie.poster_path}`}
          alt={movie.title}
        />

        <div className="flex flex-col">
          <div className="flex justify-between gap-4">
            <p className="grow text-6xl font-bold">{movie.title}</p>
            <p className="flex justify-between items-end text-xl">
              {movie.vote_average.toFixed(1)}&nbsp;&nbsp;
              <span className="text-yellow-500">★</span>
            </p>
          </div>
          <div className="flex gap-4 mt-3 text-gray-300">
            <p>{movie.release_date.split("-")[0]}</p>
            <p>|</p>
            <p>{movie.origin_country}</p>
            <p>|</p>
            <p>All</p>
          </div>

          <div className="flex my-10">
            <p className="w-[100px] text-gray-300">장르</p>
            <div className="flex">
              {movie.genres.map((el) => el.name).join(", ")}
            </div>
          </div>

          <p className="w-fit mb-4 border-solid border-b-4 border-red-600 text-xl leading-9">
            OVERVIEW
          </p>
          <p className="leading-6 break-keep">{movie.overview}</p>

          <p className="w-fit mt-10 mb-4 border-solid border-b-4 border-red-600 text-xl leading-9">
            STEEL CUT
          </p>
          <img
            className="md:w-[300px]"
            src={`${BASE_URL}${movie.backdrop_path}`}
            alt={movie.title}
          />
        </div>
      </div>
    </div>
  ) : (
    <SkeletonDetail />
  );
}

export default MovieDetail;
