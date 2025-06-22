import styled from "@emotion/styled";
import loginBgImage from "../../assets/images/login-bg.jpg";
import { Link, useNavigate } from "react-router-dom";
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

const StyledLink = styled(Link)`
  background-color: ${(props) => props.theme.colors.purple.dark};
  border-radius: 0.5rem;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  transition: 0.2s ease-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.purple.darkActive};
  }
`;

const LoginLink = styled(StyledLink)`
  padding: 0.75rem 1rem;
  font-size: 1rem;
`;

const SignupLink = styled(StyledLink)`
  padding: 1rem 1.5rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
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

const TextBold = styled.span`
  font-weight: 700;
  font-size: 2.75rem;
`;

const TextRegular = styled.span`
  font-size: 1.25rem;
`;

const Card = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  z-index: 1;
  color: #fff;
`;

const SignupWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoWrapper = styled.div`
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

const Container = styled.div`
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
      filter: brightness(0.25);
    }
  }
`;

function Signup() {
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate("/");
  };
  return (
    <Container>
      <LogoWrapper>
        <Logo onClick={handleTitleClick}>MOVIEFLIX</Logo>
        <LoginLink to="/login" type="button">
          로그인
        </LoginLink>
      </LogoWrapper>
      <SignupWrapper>
        <Card>
          <TextBold>영화를 무제한으로</TextBold>
          <TextRegular>
            시청할 준비가 되셨나요? 시작하려면 가입 정보를 입력하세요
          </TextRegular>
          <Input type="text" placeholder="이름" />
          <Input type="text" placeholder="이메일 주소" />
          <Input type="password" placeholder="비밀번호" />
          <Input type="password" placeholder="비밀번호 확인" />
          <SignupLink to="/">
            시작하기 <StyledPrevIcon />
          </SignupLink>
        </Card>
      </SignupWrapper>
    </Container>
  );
}

export default Signup;
