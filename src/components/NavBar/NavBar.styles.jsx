import styled from "@emotion/styled";
import Lottie from "lottie-react";

export const Wrapper = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Title = styled.div`
  font-size: 3rem;
  color: ${(props) => props.theme.colors.purple.dark};
  cursor: pointer;
  font-family: "Tenada";
  margin-bottom: -1rem;
`;

export const InputWrapper = styled.div`
  width: 45%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 2rem;
  border: 0;
  border-radius: 2rem;
  background-color: #eee;
  font-size: 1.2rem;
  outline: 0;
  caret-color: ${(props) => props.theme.colors.purple.lightActive};

  &:focus {
    box-shadow: 0 0 0 3px ${(props) => props.theme.colors.purple.lightActive}
      inset;
  }
`;

export const ButtonWrapper = styled.nav`
  flex: 1 0 fill;
  display: flex;
  gap: 0.5rem;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border: 0;
  border-radius: 1rem;
  background-color: transparent;
  color: ${(props) => props.theme.colors.purple.normal};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s ease-out;

  &:hover {
    color: #fff;
    background-color: ${(props) => props.theme.colors.purple.normal};
    box-shadow: 0 0 20px 10px ${(props) => props.theme.colors.purple.normal};
  }

  @media (max-width: ${(props) => props.theme.breakPoints.laptop}) {
    display: none;
  }
`;

export const MenuWrapper = styled.div`
  display: none;
  background: transparent;
  cursor: pointer;

  @media (max-width: ${(props) => props.theme.breakPoints.laptop}) {
    display: block;
  }
`;

export const StyledLottie = styled(Lottie)`
  width: 3.5rem;
  height: 3.5rem;
`;

export const Container = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1.5rem 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  box-shadow: 0 0 10px 3px #00000015;
  background-color: #2c2c2c;

  @media (max-width: ${(props) => props.theme.breakPoints.laptop}) {
    padding: 1.2rem 10rem;
  }
`;
