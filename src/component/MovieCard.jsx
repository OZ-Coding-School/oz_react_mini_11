import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  const baseUrl = "https://image.tmdb.org/t/p/w500";
  return (
    <>
      <div className="lg:w-[25%] w-[50%] movie-card">
        <Link to="/details">
          <div>
            <img src={`${baseUrl}${movie.poster_path}`} />
            <div>
              <h2>{movie.title}</h2>
              <p>평점 : {movie.vote_average}</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
