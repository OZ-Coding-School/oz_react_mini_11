import { MovieCard } from './MovieCard';
import { AccessToken } from '../data/ApiInfo';
import { apiPopularUrl } from '../data/ApiInfo';
import useFetch from '../hooks/useFetch';

function Index() {
  const { data, loading, error } = useFetch(apiPopularUrl, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AccessToken}`,
    },
  });

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>에러 발생: {error.message}</p>;
  const Movie = data.results.filter(movie => movie.adult === false);

  return (
    <>
      <div className="flex flex-row flex-wrap bg-violet-950 justify-around">
        {Movie.map(movie => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster={movie.poster_path}
            rating={movie.vote_average}
          />
        ))}
      </div>
    </>
  );
}

export default Index;
