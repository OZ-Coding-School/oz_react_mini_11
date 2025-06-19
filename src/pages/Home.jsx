import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import MovieCard from "../components/MediaCard";
import SkeletonCard from "../components/skeletons/SkeletonCard";
import useFetchMovies from "../hooks/useFetchMovies";

function Home() {
  const { movieList, loading } = useFetchMovies("popular");

  return (
    <>
      <Banner />
      <div
        className="flex flex-wrap gap-8 absolute z-20 mt-[-9vw] px-[5vw] pb-20
      bg-[linear-gradient(to_bottom,_rgba(0,0,0,0)_0%,_rgba(0,0,0,5)_80px,_rgba(0,0,0,1)_100%)]"
      >
        {loading
          ? Array.from({ length: 20 }).map((_, i) => <SkeletonCard key={i} />)
          : movieList?.map((movie) => (
              <Link to={`/details/movie/${movie.id}`} key={movie.id}>
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
