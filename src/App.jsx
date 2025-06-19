import React, { useEffect, useState } from 'react'; //useEffect:컴포넌트가 처음 화면에 나타날 때 실행되는 함수 정정용 훅 useState:상태 관리용 훅 영화 목록 저장
import { Routes, Route } from 'react-router-dom'; //페이지를 경로별로 연결하기 위한 react router 기능
import Layout from './components/Layout'; //페이지 상단에 NavBar를 포함한 공통 레이아웃
import MovieCard from './components/MovieCard'; //영화 목록 하나하나를 카드 형식으로 보여주는 컴포넌트
import MovieDetail from './components/MovieDetail'; //영화 상세 정보를 보여주는 컴포넌트

export default function App() {
  const [movies, setMovies] = useState([]); //movies:영화 리스트 데이터를 저장하는 배열 setMovies:데이터를 받아와서 저장하는 함수

  useEffect(() => { //useEffect:앱이 시작될 때 한 번 실행 
    const fetchMovies = async () => {
      try {
        const res = await fetch('https://api.themoviedb.org/3/movie/popular?language=ko-KR', { //fetch(): TMDB API에서 영화 데이터를 요청
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,  //Authorization: env에 저장한 API 토큰으로 인증
            accept: 'application/json', //
          },
        });
        const data = await res.json();

        // 필터링: 성인영화 제외
        const safeMovies = data.results.filter((movie) => !movie.adult); //성인 영화는 제외함 //data.results:영화 리스트 배열
        setMovies(safeMovies); //필터링된 영화를 상태에 저장
      } catch (err) {
        console.error('영화 데이터를 불러오는 데 실패했습니다:', err);
      }
    };

    fetchMovies();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <div className="px-4 py-8">
              <h1 className="text-3xl font-bold mb-6">영화 목록</h1>
              <div className="flex flex-wrap gap-4 bg-gray-100 p-4 rounded-md min-h-[500px]">
                {movies.map((movie) => (
                  <MovieCard
                    id={movie.id}
                    key={movie.id}
                    title={movie.title}
                    poster={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    rating={movie.vote_average}
                  />
                ))}
              </div>
            </div>
          }
        />
        <Route path="details/:id" element={<MovieDetail />} />
      </Route>
    </Routes>
  );
}