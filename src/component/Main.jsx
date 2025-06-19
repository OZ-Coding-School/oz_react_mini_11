import MovieCard from "./MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import MovieCardSlider from "./MovieCardSlider";
import { EffectFade, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import { apiBaseUrl } from "../constant/constant";

export default function Main() {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch(`${apiBaseUrl}/popular`, {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
          },
        });
        const data = await res.json(); //json으로 변환된 data값
        const filtered = data.results.filter((movie) => movie.adult === false); //API로부터 받아온 영화 목록 데이터에서 adult 속성이 false인 영화만 필터링
        setMovieList(filtered); //필터 값 상태에 저장
      } catch (err) {
        console.error(err);
      }
    };
    fetchMovie();
  }, []);

  const sliderMovies = movieList.slice(0, 5); //앞 5개만 slider돌리기, 0번부터 5번 인덱스 이전까지 복사

  return (
    <>
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        speed={1000}
        allowTouchMove={false}
        slidesPerView={1}
      >
        {sliderMovies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCardSlider movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex flex-wrap pt-[70px] max-w-[1600px] m-auto">
        {/* movieList 배열을 map() 함수로 하나씩 돌면서 MovieCard 컴포넌트를 렌더링
                각 영화 데이터(movie)를 props로 넘겨줌
                key 속성은 React가 각 요소를 구분하기 위해 필요 */}
        {movieList.map((movie) => (
          <MovieCard key={movie.id} movie={movie} /> //props
        ))}
      </div>
    </>
  );
}
