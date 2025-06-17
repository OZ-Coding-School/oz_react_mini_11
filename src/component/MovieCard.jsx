import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  const baseUrl = "https://image.tmdb.org/t/p/w500";
  return (
    <>
      <div className="w-[25%]">
        <Link to="/details">
          <div>
            <img src={`${baseUrl}${movie.poster_path}`} />
            <h2>{movie.title}</h2>
            <p>{movie.vote_average}</p>
          </div>
        </Link>
      </div>
    </>
  );
}
