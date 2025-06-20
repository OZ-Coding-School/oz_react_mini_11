import MovieCard from "../components/MovieCard";

export default function Main({ movies, navigate, URL }) {
  if (!movies || !Array.isArray(movies))
    return <div>영화를 불러올 수 없습니다.</div>;
  return (
    <div className="flex flex-wrap gap-4 md:gap-10 mx-auto">
      {movies
        .filter((movie) => !movie.adult)
        .map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              title={movie.title}
              rating={Math.ceil(movie.vote_average * 10) / 10}
              poster={`${URL}${movie.poster_path}`}
              onClick={() => {
                navigate(`/movies/${movie.id}`);
              }}
              navigate={navigate}
              movies={movies}
            />
          );
        })}
    </div>
  );
}
