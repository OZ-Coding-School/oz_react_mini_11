import MovieCard from "../MovieCard/MovieCard";
import { useEffect, useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import { getPopularMovies } from "../../apis/popularMovieApi";
import {
  ButtonWrapper,
  Container,
  HeadingWrapper,
  SectionTitle,
  StyledNextButton,
  StyledPrevButton,
  StyledSwiper,
  StyledSwiperSlide,
  SwiperWrapper,
} from "./MovieList.styles";
import MovieCardSkeleton from "../../components/MovieCard/MovieCardSkeleton";
import { useFetch } from "../../hooks/useFetch";

function MovieList({api, sectionTitle}) {
  const [swiper, setSwiper] = useState(false);
  const [isBeginning, setBeginning] = useState(true);
  const [isEnd, setEnd] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [movies, setMovies] = useState([]); // 인기순 영화 데이터
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (swiper) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
    }
  }, [swiper]);

  useFetch(
    () => api(),
    undefined,
    (data) => setMovies(data.results.filter((el) => el.adult === false)),
    setLoading,
    "movies"
  );

  return (
    <Container>
      <HeadingWrapper>
        <SectionTitle>{sectionTitle}</SectionTitle>
        <ButtonWrapper>
          <button ref={prevRef} disabled={isBeginning}>
            <StyledPrevButton />
          </button>
          <button ref={nextRef} disabled={isEnd}>
            <StyledNextButton />
          </button>
        </ButtonWrapper>
      </HeadingWrapper>
      <SwiperWrapper>
        <StyledSwiper
          modules={[Navigation]}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          spaceBetween={16}
          slidesPerView={2}
          breakpoints={{
            1024: { slidesPerView: 5 },
            768: { slidesPerView: 4 },
            480: { slidesPerView: 3 },
          }}
          onSwiper={setSwiper}
          onSlideChange={(swiper) => {
            setBeginning(swiper.isBeginning);
            setEnd(swiper.isEnd);
          }}>
          {loading
            ? Array.from({ length: 5 }).map((_, i) => (
                <StyledSwiperSlide>
                  <MovieCardSkeleton key={i} />
                </StyledSwiperSlide>
              ))
            : movies?.map((data) => (
                <StyledSwiperSlide>
                  <MovieCard data={data} />
                </StyledSwiperSlide>
              ))}
        </StyledSwiper>
      </SwiperWrapper>
    </Container>
  );
}

export default MovieList;
