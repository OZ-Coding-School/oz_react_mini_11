import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import loginBgImage from "../../assets/images/login-bg.jpg";

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

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  padding: 1rem 0;
  color: #fff;

  @media (min-width: ${(props) => props.theme.breakPoints.mobile}) {
    font-size: 2.5rem;
    padding: 1.5rem 0;
  }
`;

export const Button = styled.button`
  padding: 0.75rem;
  border: 0;
  background: ${(props) => props.theme.colors.purple.normal};
  color: #fff;
  font-size: 1.25rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.2s ease-out;

  &:hover {
    background: ${(props) => props.theme.colors.purple.normalActive};
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

export const StyledLink = styled(Link)`
  text-align: center;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:visited {
    color: #fff;
  }
`;

export const Checkbox = styled.input`
  width: 1.5rem;
  height: 1.5rem;
  accent-color: ${(props) => props.theme.colors.purple.normalActive};
`;

export const TextGray = styled.span`
  color: gray;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const Card = styled.div`
  width: 100%;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: transparent;
  font-size: 1.25rem;
  color: #fff;
  border-radius: 0.5rem;

  @media (min-width: ${(props) => props.theme.breakPoints.mobile}) {
    width: 550px;
    background: #00000085;
    padding: 2.5rem;
  }
`;

export const Wrapper = styled.div`
  flex: 1;
  width: 100%;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  @media (min-width: ${(props) => props.theme.breakPoints.mobile}) {
    padding: 2rem;
  }
`;

export const LogoWrapper = styled.div`
  width: 100%;
  padding: 1.95rem 10rem;
  z-index: 1;
  /* background-color: green; */

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
  height: 100vh;
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
      filter: brightness(0.5);
    }
  }
`;
