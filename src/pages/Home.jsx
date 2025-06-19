import styled from "@emotion/styled";
import MovieCard from "../components/MovieCard";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import PrevButton from "../images/angle-left.svg?react";
import NextButton from "../images/angle-right.svg?react";
import { getPopularMovies } from "../apis/popularMovieApi";

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

const SectionTitle = styled.h2`
  padding: 1rem 0;
  color: #eeeeee;
  font-size: 2rem;
  font-weight: 600;
`;

const SwiperWrapper = styled.div`
  width: auto;
  height: fit-content;
  position: relative;
  /* background-color: beige; */
`;

const StyledSwiper = styled(Swiper)`
  padding: 0.5rem;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  box-shadow: 0 0 6px 3px #edd4ff08;
  border-radius: 0.5rem;
`;

const ButtonWrapper = styled.div`
  & > button {
    position: absolute;
    padding: 1rem;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    top: 50%;
    transform: translate(0, -50%);
  }

  & > button:disabled {
    opacity: 0.3;
    pointer-events: none;
  }

  & > *:first-of-type {
    position: absolute;
    left: -4rem;
  }

  & > *:nth-of-type(2) {
    right: -4rem;
  }
`;

const StyledPrevButton = styled(PrevButton)`
  width: 40px;
  height: 40px;
  fill: ${(props) => props.theme.colors.purple.normal};
`;

const StyledNextButton = styled(NextButton)`
  width: 40px;
  height: 40px;
  fill: ${(props) => props.theme.colors.purple.normal};
`;

const Container = styled.section`
  width: 100%;
  height: 100%;
  padding: 1rem 0;
  /* background-color: #ffc5c5; */
`;

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
        setMovies(data.results);
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
