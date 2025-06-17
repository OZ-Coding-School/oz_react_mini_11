import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  const baseUrl = "https://image.tmdb.org/t/p/w500";
  return (
    <>
      <Link to="/details">
        <div>
          <h2>{movie.title}</h2>
          <p>{movie.vote_average}</p>
          <img src={`${baseUrl}${movie.poster_path}`} />
        </div>
      </Link>
    </>
  );
}
