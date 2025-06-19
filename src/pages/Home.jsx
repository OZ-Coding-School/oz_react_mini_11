import "../styles/Home.styles";
import MovieCard from "../components/MovieCard";
import { useEffect, useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import { getPopularMovies } from "../apis/popularMovieApi";
import {
  ButtonWrapper,
  Container,
  SectionTitle,
  StyledNextButton,
  StyledPrevButton,
  StyledSwiper,
  StyledSwiperSlide,
  SwiperWrapper,
} from "../styles/Home.styles";

// const breakPoints = {
//   desktop: 1440,
//   laptop: 1024,
//   tablet: 768,
//   mobile: 480,
// }

// const ContainerGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(6, 1fr);
//   gap: 0.5rem;

//   @media (max-width: 1440px) {
//     grid-template-columns: repeat(5, 1fr);
//   }
//   @media (max-width: 1024px) {
//     grid-template-columns: repeat(4, 1fr);
//   }
//   @media (max-width: 768px) {
//     grid-template-columns: repeat(3, 1fr);
//   }
//   @media (max-width: 480px) {
//     grid-template-columns: repeat(2, 1fr);
//   }
// `;

function Home() {
  const [swiper, setSwiper] = useState(false);
  const [isBeginning, setBeginning] = useState(true);
  const [isEnd, setEnd] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [movies, setMovies] = useState([]); // 인기순 영화 데이터

  useEffect(() => {
    if (swiper) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
    }
  }, [swiper]);

  useEffect(() => {
    (async () => {
      try {
        const data = await getPopularMovies();
        setMovies(data.results.filter((el) => el.adult === false));
      } catch (error) {
        console.error("getPopularMovies 실행 실패 : ", error);
        throw error;
      }
    })();
  }, []);

  console.log(movies);

  return (
    // Swiper 적용 전
    // <ContainerGrid>
    //   {MOVIE_LIST_DATA.results.map((data) => (
    //     <MovieCard data={data} />
    //   ))}
    // </ContainerGrid>

    // Swiper 적용 후
    <Container>
      <SectionTitle>Trending Now</SectionTitle>
      <SwiperWrapper>
        <StyledSwiper
          modules={[Navigation]}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          spaceBetween={16}
          slidesPerView={5}
          onSwiper={setSwiper}
          onSlideChange={(swiper) => {
            setBeginning(swiper.isBeginning);
            setEnd(swiper.isEnd);
          }}>
          {movies?.map((data) => (
            <StyledSwiperSlide>
              <MovieCard data={data} />
            </StyledSwiperSlide>
          ))}
        </StyledSwiper>
        <ButtonWrapper>
          <button ref={prevRef} disabled={isBeginning}>
            <StyledPrevButton />
          </button>
          <button ref={nextRef} disabled={isEnd}>
            <StyledNextButton />
          </button>
        </ButtonWrapper>
      </SwiperWrapper>
    </Container>
  );
}

export default Home;
