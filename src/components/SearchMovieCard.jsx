export function SearchMovieCard({ movie, onClick, URL }) {
  return (
    <div className="bg-gray-900 text-white p-4 rounded">
      <img
        src={`${URL}${movie.poster_path}`}
        alt={movie.title}
        onClick={onClick}
      />
      <h2 className="mt-2 text-md text-center">{movie.title}</h2>
    </div>
  );
}
