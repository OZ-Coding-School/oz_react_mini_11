import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch('/movieDetailData.json')
      .then((res) => res.json())
      .then((data) => {
        const foundMovie = data.find((m) => String(m.id) === id);
        setMovie(foundMovie);
      });
  }, [id]);

  if (!movie) return <div style={{ color: 'white' }}>로딩 중...</div>;

  return (
    <div
      style={{
        display: 'flex',
        maxWidth: '1000px',
        margin: '40px auto',
        padding: '20px',
        color: 'white',
        gap: '30px',
      }}
    >
      {/* 포스터 */}
      <div style={{ flex: '0 0 300px' }}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          style={{ width: '100%', borderRadius: '12px' }}
        />
      </div>

      {/* 텍스트 정보 */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h1 style={{ margin: 0 }}>{movie.title}</h1>
          <span style={{ fontSize: '20px' }}>⭐ {movie.vote_average}</span>
        </div>

        {/* 장르 – 더미에 없으니 임시 텍스트 */}
        <div>장르: 장르 정보 없음</div>

        {/* 줄거리 */}
        <div style={{ lineHeight: 1.6 }}>{movie.overview}</div>

        {/* 개봉일 */}
        <div>📅 개봉일: {movie.release_date}</div>
      </div>
    </div>
  );
}

export default MovieDetail;
