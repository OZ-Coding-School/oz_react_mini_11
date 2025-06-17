export default function MovieCard({ movie }) {
  return (
    <>
      <div>
        <h2>{movie.title}</h2>
        <p>{movie.vote_average}</p>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
      </div>
    </>
  );
}
