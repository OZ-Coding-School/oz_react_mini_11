import useFetch from '../hooks/useFetch.jsx';
import { AccessToken, apiBaseUrl } from '../data/ApiInfo';
import IMAGE_BASE_URL from '../data/imageURL.js';
import { useParams } from 'react-router-dom';

function MovieDetail() {
  const { id } = useParams();

  const {
    data: detail,
    loading,
    error,
  } = useFetch(`${apiBaseUrl}/movie/${id}?language=ko-KR`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AccessToken}`,
    },
  });

  if (loading) return <div className="text-white">로딩 중...</div>;
  if (error) return <div className="text-red-500">에러 발생: {error.message}</div>;

  return (
    <div className="flex flex-row bg-indigo-950 text-white items-center flex-wrap justify-center">
      <img
        src={`${IMAGE_BASE_URL}${detail.poster_path}`}
        alt={detail.title}
        className="w-[clamp(60rem,100vw,80rem)] h-[clamp(15rem,100vw,100rem)]"
      />
      <div className="flex flex-col justify-center h-[clamp(15rem,50vh,50rem)]">
        <div className="flex flex-row justify-around h-[clamp(5rem,15vh,30rem)]">
          <div className="m-2 h-[clamp(5rem,10vw,50rem)] p-2 font-extrabold text-[clamp(0.8rem,4vw,4.5rem)]">
            {detail.title}
          </div>
          <div className="m-2 p-3 text-[clamp(0.7rem,5vw,2.5rem)] font-bold">
            ⭐ Rating: {detail.vote_average}
          </div>
        </div>
        <div className="mx-[clamp(0.7rem,5vw,2rem)] p-1.5 font-semibold text-[clamp(0.5rem,3vw,1.5rem)]">
          장르 :
          {detail.genres?.map(genre => (
            <span key={genre.id}> {genre.name} </span>
          ))}
        </div>
        <div className="mx-[clamp(0.7rem,5vw,2rem)] p-1.5 text-[clamp(0.5rem,3vw,1.5rem)]">
          {' '}
          {detail.overview}
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
