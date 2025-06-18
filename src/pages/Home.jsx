import styled from "@emotion/styled";
import MovieCard from "../components/MovieCard";
import MOVIE_LIST_DATA from "../data/movieListData.json";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import PrevButton from "../images/angle-left.svg?react";
import NextButton from "../images/angle-right.svg?react";

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

const SwiperWrapper = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
  /* background-color: beige; */
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  height: 100%;
  overflow: hidden;
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

const Container = styled.div`
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

  useEffect(() => {
    if (swiper) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
    }
  }, [swiper]);

  return (
    // Swiper 적용 전
    // <ContainerGrid>
    //   {MOVIE_LIST_DATA.results.map((data) => (
    //     <MovieCard data={data} />
    //   ))}
    // </ContainerGrid>

    // Swiper 적용 후
    <Container>
      <SwiperWrapper>
        <Swiper
          modules={[Navigation]}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          spaceBetween={16}
          slidesPerView={5}
          onSwiper={setSwiper}
          onSlideChange={(swiper) => {
            setBeginning(swiper.isBeginning);
            setEnd(swiper.isEnd);
          }}>
          {MOVIE_LIST_DATA.results.map((data) => (
            <StyledSwiperSlide>
              <MovieCard data={data} />
            </StyledSwiperSlide>
          ))}
        </Swiper>
        <ButtonWrapper>
          <button ref={prevRef} disabled={isBeginning}>
            <PrevButton width="40" height="40" fill="#45c1ff" />
          </button>
          <button ref={nextRef} disabled={isEnd}>
            <NextButton width="40" height="40" fill="#45c1ff" />
          </button>
        </ButtonWrapper>
      </SwiperWrapper>
    </Container>
  );
}

export default Home;
