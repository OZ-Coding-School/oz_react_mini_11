import { IMAGE_BASE_URL } from "../constants/image"

function MovieCard({ movie }) {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={`${IMAGE_BASE_URL}${movie.poster_path}`}
        alt={movie.title}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <h3>{movie.title}</h3>
      <p>⭐ {movie.vote_average}</p>
    </div>
  );
}

export default MovieCard;