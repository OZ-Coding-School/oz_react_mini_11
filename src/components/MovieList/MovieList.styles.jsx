import styled from "@emotion/styled";
import { Swiper, SwiperSlide } from "swiper/react";
import PrevButton from "../../assets/images/angle-left.svg?react";
import NextButton from "../../assets/images/angle-right.svg?react";

export const HeadingWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SectionTitle = styled.h2`
  padding: 1rem 0;
  color: #eeeeee;
  font-size: 2rem;
  font-weight: 600;

  @media (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    font-size: 1.5rem;
  }
`;

export const ButtonWrapper = styled.div`
  padding: 0.5rem;
  border: 1px solid #ffffff25;
  border-radius: 0.5rem;
  display: flex;
  gap: 0.5rem;

  & > button {
    padding: 0.5rem;
    border: 0;
    border-radius: 0.25rem;
    background: #ffffff25;
    cursor: pointer;
  }

  & > button:hover {
    background: ${(props) => props.theme.colors.purple.dark};
  }

  & > button:disabled {
    opacity: 0.3;
    pointer-events: none;
  }
`;

export const StyledPrevButton = styled(PrevButton)`
  width: 28px;
  height: 28px;
  fill: #eee;
  /* fill: ${(props) => props.theme.colors.purple.normal}; */
`;

export const StyledNextButton = styled(NextButton)`
  width: 28px;
  height: 28px;
  fill: #eee;
  /* fill: ${(props) => props.theme.colors.purple.normal}; */
`;

export const SwiperWrapper = styled.div``;

export const StyledSwiper = styled(Swiper)`
  padding: 0.5rem !important;
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  box-shadow: 0 0 6px 3px #edd4ff10;
  border-radius: 0.5rem;
`;

export const Container = styled.section`
  width: 100%;
  height: 100%;
  padding: 1rem 0;
`;