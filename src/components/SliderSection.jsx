import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import MovieCard from "./MediaCard";

function SliderSection({ title, datas }) {
  return (
    <div className="">
      <h3>{title}</h3>
      <Swiper
        pagination={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        spaceBetween={5}
        slidesPerView={3}
        slidesPerGroup={3}
        breakpoints={{
          480: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          600: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          768: {
            slidesPerView: 6,
            slidesPerGroup: 6,
          },
          1024: {
            slidesPerView: 7,
            slidesPerGroup: 7,
          },
        }}
      >
        {datas?.map((movie) => (
          <SwiperSlide>
            <Link to={`/details/movie/${movie.id}`} key={movie.id}>
              <MovieCard
                title={movie.title}
                avg={movie.vote_average}
                imgSrc={movie.poster_path}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SliderSection;
