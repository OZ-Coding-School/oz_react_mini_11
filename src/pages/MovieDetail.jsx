import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetail } from '@/api/tmdbDetailApi';
import { IMG_BASE_URL } from '../api/constants';

export default function MovieDetail() {
  const [detail, setDetail] = useState(null);
  const { id } = useParams();
  console.log('id:', id);

  useEffect(() => {
    fetchMovieDetail(id)
      .then((data) => {
        const movieDetailsData = {
          id: data.id,
          title: data.title,
          score: data.vote_average,
          poster: IMG_BASE_URL + data.poster_path,
          backdrop: IMG_BASE_URL + data.backdrop_path,
          genres: data.genres,
          overview: data.overview,
          runtime: data.runtime,
          tagline: data.tagline,
          homepage: data.homepage,
        };
        setDetail(movieDetailsData);
        console.log(movieDetailsData);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!detail || !detail.poster)
    return <p className="mt-5">detail 페이지 불러오는중 . . .</p>;
  return (
    <div className="w-full">
      <div className="overflow-hidden">
        <img src={detail.backdrop} className="w-full opacity-20 object-cover" />
      </div>
      <div
        key={detail.id}
        className="flex fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-gray-300 w-[1000px] rounded-lg bg-slate-800/50 shadow-xl shadow-gray-700/40"
      >
        <img src={detail.poster} className="w-96" />
        <div className="flex flex-col gap-4 p-8">
          {detail.tagline && (
            <p className="italic text-red-300 text-xl">" {detail.tagline} "</p>
          )}
          <div>
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold">{detail.title}</h2>
              <p className="p-1 text-sm text-gray-600">평점: {detail.score}</p>
            </div>
            <p className="text-sm text-gray-500">
              상영시간: {detail.runtime} 분
            </p>
          </div>
          <ul className="flex gap-2">
            {detail.genres.map((genre) => (
              <li
                key={genre.id}
                className="py-1 px-2 rounded-xl text-white bg-cyan-800"
              >
                {genre.name}
              </li>
            ))}
          </ul>
          <p className="leading-relaxed">{detail.overview}</p>
        </div>
      </div>
    </div>
  );
}
