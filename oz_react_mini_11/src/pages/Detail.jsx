import { useParams } from 'react-router-dom';
import movieList from '../movieListData.json';

const Detail = () => {
  const { id } = useParams();
  const movie = movieList.results.find((item) => String(item.id) === id);

  if (!movie) return <h2>영화를 찾을 수 없습니다.</h2>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p>⭐ 평점: {movie.vote_average}</p>
    </div>
  );
};

export default Detail;
