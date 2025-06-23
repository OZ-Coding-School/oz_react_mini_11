import styled from "@emotion/styled";
import Star from "../../assets/images/star.svg?react";

export const Image = styled.img`
  width: 100%;
  aspect-ratio: 5/6;
  object-fit: cover;
  border-top-left-radius: 0.45rem;
  border-top-right-radius: 0.45rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
`;

export const Title = styled.div`
  color: #eeeeee;
  font-size: 1.125rem;
  font-weight: 700;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Rating = styled.div`
  align-self: flex-end;
  font-size: 1rem;
  font-weight: 500;
  color: gray;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const StyledStar = styled(Star)`
  width: 16px;
  height: 16px;
  padding-bottom: 1px;
  fill: ${(props) => props.theme.colors.yellow.normal};
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  background-color: #2c2c2c;
  transition: filter 0.4s ease-out;
  &:hover {
    filter: brightness(1.2);
  }
`;
