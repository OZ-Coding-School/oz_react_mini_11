import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import MovieCard from "../components/MovieCard";
import SkeletonCard from "../components/SkeletonCard";

const API_KEY = import.meta.env.VITE_API_KEY;

function Home() {
  const [movieList, setMovieList] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    };

    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=ko&page=1",
      options
    )
      .then((res) => res.json())
      .then((data) => {
        const fetchData = data.results.filter((el) => !el.adult);
        setMovieList(fetchData);
        setLoading(false);
        console.log(fetchData);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Banner />
      <div
        className="flex flex-wrap gap-8 absolute z-20 px-[5vw] pb-20
      bg-[linear-gradient(to_bottom,_rgba(0,0,0,0)_0%,_rgba(0,0,0,5)_30%,_rgba(0,0,0,1)_100%)]"
      >
        {loading
          ? Array.from({ length: 20 }).map((_, i) => <SkeletonCard key={i} />)
          : movieList?.map((movie) => (
              <Link to={`/details/${movie.id}`} key={movie.id}>
                <MovieCard
                  title={movie.title}
                  avg={movie.vote_average}
                  imgSrc={movie.poster_path}
                />
              </Link>
            ))}
      </div>
    </>
  );
}

export default Home;
