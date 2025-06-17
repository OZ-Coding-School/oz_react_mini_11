import { useState } from 'react';
import MovieDetailData from '../data/movieDetailData.json';

function MovieDetail() {
  const [detail, setDetail] = useState(MovieDetailData);
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

  return (
    <>
      <img src={`${IMAGE_BASE_URL}${detail.poster_path}`} alt={detail.title} />
      <div>
        <h2> 제목 : {detail.title} </h2>
      </div>
      <div>
        <h3> 평점 : {detail.vote_average}</h3>
      </div>
      <div>
        장르 :
        {detail.genres.map(genre => (
          <span key={genre.id}> {genre.name} </span>
        ))}
      </div>
      <div> 줄거리 : {detail.overview} </div>
    </>
  );
}

export default MovieDetail;
