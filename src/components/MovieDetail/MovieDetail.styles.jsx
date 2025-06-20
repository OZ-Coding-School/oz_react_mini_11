import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 85%;
  height: 85%;
  display: flex;
  background-color: #2c2c2c;
  box-shadow: 0px 0px 40px 20px #ffffff10;
  min-width: min-content;
`;

export const Image = styled.img`
  flex: 1;
  margin: 1.5rem;
  max-height: 100%;
  aspect-ratio: 3/4;
  object-fit: cover;
  position: relative;
  bottom: 4rem;
  box-shadow: 0px 12px 30px 5px #ffffff20;
`;

export const ContentWrapper = styled.div`
  flex: 1;
  padding: 3rem 2rem 3rem 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow-y: auto;
`;

export const TopWrapper = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.div`
  padding: 0 2rem;
  font-size: 2.5rem;
  font-weight: 700;
  color: #eeeeee;
`;

export const Rating = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: flex-end;
  font-size: 1.25rem;
  font-weight: 500;
  color: #b0b0b0;
`;

export const GenresWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Genres = styled.div`
  padding: 0.75rem 1rem;
  border: 3px solid ${(props) => props.theme.colors.yellow.normal};
  border-radius: 0.5rem;
  background-color: #fff;
  color: ${(props) => props.theme.colors.yellow.dark};
  box-shadow: 0 0 5px 3px ${(props) => props.theme.colors.yellow.normal}50;
  display: flex;
  align-items: center;
`;

export const Overview = styled.div`
  flex: 1;
  font-size: 1.125rem;
  line-height: 1.5;
  color: #eeeeee;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
