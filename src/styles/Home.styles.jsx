import styled from "@emotion/styled";
import { Swiper, SwiperSlide } from "swiper/react";
import PrevButton from "../images/angle-left.svg?react";
import NextButton from "../images/angle-right.svg?react";

export const SectionTitle = styled.h2`
  padding: 1rem 0;
  color: #eeeeee;
  font-size: 2rem;
  font-weight: 600;
`;

export const SwiperWrapper = styled.div`
  width: auto;
  height: fit-content;
  position: relative;
  /* background-color: beige; */
`;

export const StyledSwiper = styled(Swiper)`
  padding: 0.5rem;
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  box-shadow: 0 0 6px 3px #edd4ff08;
  border-radius: 0.5rem;
`;

export const ButtonWrapper = styled.div`
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

export const StyledPrevButton = styled(PrevButton)`
  width: 40px;
  height: 40px;
  fill: ${(props) => props.theme.colors.purple.normal};
`;

export const StyledNextButton = styled(NextButton)`
  width: 40px;
  height: 40px;
  fill: ${(props) => props.theme.colors.purple.normal};
`;

export const Container = styled.section`
  width: 100%;
  height: 100%;
  padding: 1rem 0;
`;
