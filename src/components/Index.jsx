import { useState } from 'react';
import { MovieCard } from './components/MovieCard';
import MovieListData from './data/movieListData.json';

function Index(){
    const [Movie, setMovie] = useState(MovieListData.results);
    return(<>
    <div className='flex flex-row flex-wrap bg-violet-950 justify-around'>
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
    </>)
}

export default Index