import styled from "@emotion/styled";
import loginBgImage from "../../assets/images/login-bg.jpg";
import NextButton from "../../assets/images/angle-right.svg?react";

export const Input = styled.input`
  border: 1px solid #d0d0d0;
  padding: 1.25rem;
  align-self: stretch;
  color: #fff;
  background: #00000085;
  font-size: 1rem;
  border-radius: 0.5rem;
  outline: none;

  &::placeholder {
    color: #d0d0d0;
  }

  &:focus {
    outline: 3px solid #fff;
    outline-offset: 2px;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.mobile}) {
    font-size: 1.25rem;
  }
`;

export const Button = styled.button`
  padding: 1rem 1.5rem;
  border: 0;
  border-radius: 0.5rem;
  color: #fff;
  background-color: ${(props) => props.theme.colors.purple.dark};
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: 0.2s ease-out;

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.purple.darkActive};
  }
`;

export const LoginButton = styled(Button)`
  padding: 0.75rem 1rem;
  font-size: 1rem;
`;

export const StyledPrevIcon = styled(NextButton)`
  padding-top: 2px;
  width: 24px;
  height: 24px;
  fill: #eee;
`;

export const Logo = styled.div`
  width: fit-content;
  font-size: 3rem;
  color: ${(props) => props.theme.colors.purple.dark};
  cursor: pointer;
  font-family: "Tenada";
  margin-bottom: -1rem;

  @media (max-width: ${(props) => props.theme.breakPoints.laptop}) {
    font-size: 2.5rem;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.tablet}) {
    font-size: 2rem;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    font-size: 1.25rem;
  }
`;

export const TextBold = styled.span`
  font-weight: 700;
  font-size: 2.75rem;
  word-break: keep-all;
  text-align: center;
`;

export const TextRegular = styled.span`
  font-size: 1.25rem;
`;

export const Card = styled.div`
  width: fit-content;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  z-index: 1;
  color: #fff;
`;

export const SignupWrapper = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  width: 100%;
  padding: 1.5rem 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;

  @media (max-width: ${(props) => props.theme.breakPoints.laptop}) {
    padding: 2.2rem 5%;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.tablet}) {
    padding: 2.5rem 5%;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.mobile}) {
  }
`;

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  background: #1b1b1b;

  @media (min-width: ${(props) => props.theme.breakPoints.mobile}) {
    &::after {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 0;
      background-image: url(${loginBgImage});
      background-position: center;
      background-size: cover;
      filter: brightness(0.25);
    }
  }
`;
