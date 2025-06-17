import styled from "@emotion/styled";
import MovieCard from "../components/MovieCard";
import MOVIE_LIST_DATA from "../data/movieListData.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

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

const StyledSwiperSlide = styled(SwiperSlide)`
  height: 100%;
  overflow: hidden;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem 0;
`;

function Home() {
  return (
    // Swiper 적용 전
    // <ContainerGrid>
    //   {MOVIE_LIST_DATA.results.map((data) => (
    //     <MovieCard data={data} />
    //   ))}
    // </ContainerGrid>

    // Swiper 적용 후
    <Container>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={16}
        slidesPerView={5}>
        {MOVIE_LIST_DATA.results.map((data) => (
          <StyledSwiperSlide>
            <MovieCard data={data} />
          </StyledSwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default Home;
