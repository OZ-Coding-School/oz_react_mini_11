import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function MovieSlide({ movies }) {
  return (
    <div className="p-4 w-[1250px]">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={5}
        slidesPerView={9}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={1000}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="overflow-hidden">
              <img
                src={movie.poster}
                className="w-32 h-48 rounded-md shadow-md object-cover"
                alt={movie.title}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
