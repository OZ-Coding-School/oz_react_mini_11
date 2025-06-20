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
    <div className="flex flex-row bg-violet-700 text-gray-300 items-center">
      <img
        src={`${IMAGE_BASE_URL}${detail.poster_path}`}
        alt={detail.title}
        className="aspect-[2/3] h-[75vh]"
      />
      <div className="flex flex-col">
        <div className="flex flex-row">
          <div className="m-2 w-[35vw] p-3 font-extrabold text-4xl">
            <h2> {detail.title} </h2>
          </div>
          <div className="m-2 w-[17vw] p-3 text-2xl items-center font-bold">
            <h3> ⭐ Rating: {detail.vote_average}</h3>
          </div>
        </div>
        <div className="flex flex-col m-2">
          <div className="p-3 font-semibold text-xl">
            장르 :
            {detail.genres?.map(genre => (
              <span key={genre.id}> {genre.name} </span>
            ))}
          </div>
          <div className="p-3 "> {detail.overview} </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
