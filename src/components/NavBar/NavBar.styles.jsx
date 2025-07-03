import styled from "@emotion/styled";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import UserIcon from "../../assets/images/user.svg?react";

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

  @media (max-width: ${(props) => props.theme.breakPoints.laptop}) {
    font-size: 2.5rem;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.tablet}) {
    font-size: 2rem;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    font-size: 1.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > span {
      display: block;
    }
  }
`;

export const InputWrapper = styled.div`
  width: 45%;

  @media (max-width: ${(props) => props.theme.breakPoints.tablet}) {
    width: 50%;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    width: 60%;
  }
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

  @media (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    padding: 0.5rem 2rem;
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

export const NavWrapper = styled.div`
  position: relative;
  background: transparent;
  cursor: pointer;
`;

export const LaptopNavWrapper = styled(NavWrapper)`
  display: none;

  @media (max-width: ${(props) => props.theme.breakPoints.laptop}) {
    display: block;
  }
`;

export const StyledLottie = styled(Lottie)`
  width: 3.5rem;
  height: 3.5rem;
`;

export const Menu = styled.div`
  width: max-content;
  position: absolute;
  top: 150%;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #00000080;
  border-radius: 0.5rem;
  padding: 1rem;
  z-index: 10;

  @media (max-width: ${(props) => props.theme.breakPoints.laptop}) {
    left: ${(props) => (props.isLogin ? "-50%" : "-10%")};
  }
`;

export const StyledLink = styled(Link)`
  padding: 1rem;
  color: #eee;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const UserButton = styled.button`
  position: relative;
  margin: 0.35rem 0.55rem;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.colors.purple.dark};
  border-radius: 50%;
  border: 1px solid #eeeeee25;
  cursor: pointer;

  & > span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 600;
    color: ${(props) => props.theme.colors.yellow.normal};
  }
`;

export const StyledUserIcon = styled(UserIcon)`
  width: 1.7rem;
  height: 1.5rem;
  fill: ${(props) => props.theme.colors.purple.light}80;
`;

export const LogoutButton = styled.button`
  padding: 1rem;
  background: transparent;
  color: #eee;
  border: 0;
  cursor: pointer;
  font-size: 1rem;
`;

export const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 999;
  width: 100%;
  padding: 1.5rem 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  box-shadow: 0 0 10px 3px #00000015;
  background-color: #2c2c2c;

  @media (max-width: ${(props) => props.theme.breakPoints.laptop}) {
    padding: 1.2rem 5%;
  }
`;
