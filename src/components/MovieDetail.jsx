import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function MovieDetail() {
  const [movie, setMovie] = useState(null);
  const {id} = useParams();

  useEffect(() =>{
    const fetchMovie = async () =>{
      try{
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}`,{
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
            accept: 'application/json',
          }
        });
        const data = await res.json();
        setMovie(data);
      }catch(error){
        console.error('영화 상세 정보를 불러오지 못했습니다:', error);
      }
    };
    fetchMovie();
  }, [id])

  if (!movie) return <div className="text-center py-10">로딩 중...</div>;

  const { backdrop_path, poster_path, title, vote_average, genres, overview } = movie;

  return (
    <div className="font-sans">
      {/* 배경 이미지 영역 */}
      <div
        className="h-72 flex items-center text-white px-8"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          textShadow: '2px 2px 6px rgba(0,0,0,0.7)',
        }}
      >
        <h1 className="text-4xl font-bold">{title}</h1>
      </div>

      {/* 상세 내용 */}
      <div className="flex gap-8 p-8">
        {/* 포스터 */}
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={title}
          className="rounded-xl shadow-lg w-48 md:w-64"
        />

        {/* 텍스트 정보 */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p><span className="font-semibold">평점:</span> {vote_average}</p>
          <p><span className="font-semibold">장르:</span> {genres.map(g => g.name).join(', ')}</p>
          <div>
            <p className="font-semibold">줄거리:</p>
            <p className="text-gray-700">{overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
