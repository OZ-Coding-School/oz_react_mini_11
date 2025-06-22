import styled from "@emotion/styled";
import { Link, useNavigate } from "react-router-dom";
import loginBgImage from "../../assets/images/login-bg.jpg";

export const Logo = styled.div`
  padding: 2rem 0 1rem 1rem;
  font-size: 3rem;
  color: ${(props) => props.theme.colors.purple.dark};
  cursor: pointer;
  font-family: "Tenada";
  margin-bottom: -1rem;
  z-index: 1;

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

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  padding: 1rem 0;
  color: #fff;

  @media (min-width: ${(props) => props.theme.breakPoints.mobile}) {
    font-size: 2.5rem;
    padding: 1.5rem 0;
  }
`;

const Input = styled.input`
  border: 1px solid #d0d0d0;
  padding: 1.25rem;
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
`;

const StyledLink = styled(Link)`
  text-align: center;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:visited {
    color: #fff;
  }
`;

const Checkbox = styled.input`
  width: 1.5rem;
  height: 1.5rem;
  accent-color: ${(props) => props.theme.colors.purple.normalActive};
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const Card = styled.div`
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

const Wrapper = styled.div`
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
      filter: brightness(0.5);
    }
  }
`;

function Login() {
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate("/");
  };

  return (
    <Container>
      <Logo onClick={handleTitleClick}>
        <span>MOVIE</span>
        <span>FLIX</span>
      </Logo>
      <Wrapper>
        <Card>
          <Title>로그인</Title>
          <Input type="text" placeholder="이메일 주소 또는 휴대폰 번호" />
          <Input type="password" placeholder="비밀번호" />
          <Button>로그인</Button>
          <StyledLink>비밀번호를 잊으셨나요?</StyledLink>
          <Label for="checkbox">
            <Checkbox type="checkbox" id="checkbox" />
            <span>로그인 정보 저장</span>
          </Label>
          <div>
            MOVIEFLIX 회원이 아니신가요?&nbsp;
            <StyledLink to="/signup">지금 가입하세요.</StyledLink>
          </div>
        </Card>
      </Wrapper>
    </Container>
  );
}

export default Login;
