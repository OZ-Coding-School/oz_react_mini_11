import { useState } from 'react';
import MovieDetailData from '../data/movieDetailData.json';
import IMAGE_BASE_URL from '../data/imageURL.JSX';

function MovieDetail() {
  const [detail, setDetail] = useState(MovieDetailData);


  return (
    <div className='flex flex-row bg-violet-700 text-gray-300 items-center'>
      <img src={`${IMAGE_BASE_URL}${detail.poster_path}`} alt={detail.title} className='acpect-[2/3] h-[75vh] items-'/>
      <div className='flex flex-col'>
        <div className='flex flex-row' >
          {/*제목과 평점만 가로로 나열하고 싶은데 방법을 알려줘*/}
          <div className='m-2 w-[35vw] p-3 font-extrabold text-4xl'>
            <h2> {detail.title} </h2>
          </div>
          <div className='m-2 w-[17vw] p-3 text-2xl items-center font-bold'>  
            <h3> ⭐ Rating: {detail.vote_average}</h3>
          </div>
        </div>
        <div className='flex flex-col m-2'>
          <div className='p-3 font-semibold text-xl'>
          장르 :
          {detail.genres.map(genre => (
            <span key={genre.id}> {genre.name} </span>
          ))}
          </div>
          <div className='p-3 '>  {detail.overview} </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
