import styled from "@emotion/styled";
import loginBgImage from "../../assets/images/login-bg.jpg";
import { useNavigate } from "react-router-dom";
import NextButton from "../../assets/images/angle-right.svg?react";
import { useContext } from "react";
import { FormContext } from "../../contexts/FormContext";
import FormInput from "../../components/FormInput/FormInput";

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

const Button = styled.button`
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

const LoginButton = styled(Button)`
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

const TextBold = styled.span`
  font-weight: 700;
  font-size: 2.75rem;
  word-break: keep-all;
  text-align: center;
`;

const TextRegular = styled.span`
  font-size: 1.25rem;
`;

const Card = styled.div`
  width: fit-content;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  z-index: 1;
  color: #fff;
`;

const SignupWrapper = styled.div`
  flex: 1;
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

function Signup() {
  const { formState } = useContext(FormContext);
  const passwordValue = formState["password"].value;
  const isFormValid = Object.values(formState).every((f) => f.isValid);
  const navigate = useNavigate();

  return (
    <Container>
      <LogoWrapper>
        <Logo onClick={() => navigate("/")}>MOVIEFLIX</Logo>
        <LoginButton onClick={() => navigate("/login")} type="button">
          로그인
        </LoginButton>
      </LogoWrapper>
      <SignupWrapper>
        <Card>
          <TextBold>영화를 무제한으로</TextBold>
          <TextRegular>
            시청할 준비가 되셨나요? 시작하려면 가입 정보를 입력하세요.
          </TextRegular>
          <FormInput type="text" placeholder="이름" label="name" />
          <FormInput type="text" placeholder="이메일 주소" label="email" />
          <FormInput type="password" placeholder="비밀번호" label="password" />
          <FormInput
            type="password"
            placeholder="비밀번호 확인"
            label="passwordConfirm"
            confirmText={passwordValue}
          />
          <Button disabled={!isFormValid} onClick={() => navigate("/")}>
            시작하기 <StyledPrevIcon />
          </Button>
        </Card>
      </SignupWrapper>
    </Container>
  );
}

export default Signup;
