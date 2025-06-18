
import data from '../data/movieDetailData.json';
const IMG_BASE = 'https://image.tmdb.org/t/p/w500';

export default function MovieDetail() {
  const { title, overview, vote_average, genres, poster_path, backdrop_path } = data;
  return (
    <div className="detail-page">
      <img src={IMG_BASE + (backdrop_path || poster_path)} alt={title} className="detail-img" />
      <div>
        <h1>{title}</h1>
        <p>⭐ {vote_average}</p>
        <div>
          {genres.map((g) => (
            <span key={g.id} className="genre">{g.name}</span>
          ))}
        </div>
        <p>{overview}</p>
      </div>
    </div>
  );
}
