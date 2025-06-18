import MovieCard from "./MovieCard";
import movieListData from "../data/movieListData.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import MovieCardSlider from "./MovieCardSlider";
import { EffectFade, Autoplay } from "swiper/modules";

export default function Main() {
  const movieList = movieListData.results; //json객체안에 results키값을 꺼내옴, 배열형태(movieList는 영화 객체들이 들어 있는 배열)
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

      <div className="flex flex-wrap pt-[70px]">
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
