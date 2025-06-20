import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";

export const SwiperComponent = ({ movies, URL, navigate }) => {
  return (
    <div>
      <Swiper
        className="absolute z-50 bottom-[-20vh]  md:bottom-[-35vh]   "
        modules={[Pagination, Autoplay, EffectCoverflow]}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 10, // 회전 정도
          depth: 200, // 입체감(깊이)
          modifier: 1, // 효과 강도 조절
          slideShadows: true, // 그림자 여부
        }}
        slidesPerView={4}
        spaceBetween={40}
        pagination={{ clickable: true }}
        autoplay={{ delay: 100 }}
        speed={20000}
        loop
      >
        {/* movies 배열을 map으로 돌려 영화 하나하나를 swiperslide로 렌더 */}
        {movies.map((movie) => (
          <SwiperSlide
            key={movie.id}
            className=" object-cover rounded-lg w-full transition-transform duration-300 hover:scale-105"
          >
            <img
              src={`${URL}${movie.poster_path}`}
              alt={movie.title}
              className="rounded-lg  h-[300px] sm:w-[full] sm:h-[450px] md:w-full md:h-full object-cover cursor-pointer"
              onClick={() => {
                navigate(`/movies/${movie.id}`);
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
