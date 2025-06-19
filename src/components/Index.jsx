import { useEffect, useState } from 'react';
import { MovieCard } from './MovieCard';
import { AccessToken } from '../data/ApiInfo';

function Index() {
  const [Movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1',
          {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${AccessToken}`,
            },
          },
        );

        const data = await response.json();
        const filtered = data.results.filter(movie => movie.adult === false);
        setMovie(filtered);
      } catch (error) {
        console.error('인기 영화 가져오기 실패:', error);
      }
    };
    fetchPopularMovies();
  }, []);

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
