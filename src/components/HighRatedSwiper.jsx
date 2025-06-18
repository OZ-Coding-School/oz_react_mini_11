import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MOVIELISTDATA from "../data/movieListData.json";

const highRatedMovies = MOVIELISTDATA.results.filter(
  (movie) => movie.vote_average >= 7.0
);
export function HighRatedSwiper() {
  return (
    <section className="my-10 px-4 ">
      <h2 className="text-2xl font-bold mb-4">추천 영화</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {highRatedMovies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="w-full max-w-xs h-[350px] overflow-hidden rounded-lg shadow-md bg-white">
              <img
                src={`${import.meta.env.VITE_BASEURL}${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
