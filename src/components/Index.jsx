import { MovieCard } from './MovieCard';
import { apiBaseUrl, apiPopularUrl, AccessToken } from '../data/ApiInfo';
import useFetch from '../hooks/useFetch';
import { useSearchParams } from 'react-router-dom';

function Index() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const searchResultsUrl = query
    ? `${apiBaseUrl}/search/movie?query=${encodeURIComponent(query)}&language=ko-KR`
    : apiPopularUrl;

  const { data, loading, error } = useFetch(searchResultsUrl, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AccessToken}`,
    },
  });

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>에러 발생: {error.message}</p>;
  const movies = data?.results?.filter(movie => movie.adult === false) || [];

  return (
    <>
      <div className="flex flex-row flex-wrap bg-violet-950 justify-around">
        {movies.map(movie => (
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
