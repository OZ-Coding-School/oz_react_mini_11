const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export function MovieCard({ title, poster, rating }) {
  return (
    <div>
      <img src={`${IMAGE_BASE_URL}${poster}`} alt={`${title} poster`} />
      <h2>{title}</h2>
      <p>⭐ Rating: {rating}</p>
    </div>
  );
}
