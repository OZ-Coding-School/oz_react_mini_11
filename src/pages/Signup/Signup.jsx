import styled from "@emotion/styled";
import loginBgImage from "../../assets/images/login-bg.jpg";
import { useNavigate } from "react-router-dom";

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

const LogoWrapper = styled.div`
  width: 100%;
  padding: 1.5rem 10rem;
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

function Signup() {
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate("/");
  };
  return (
    <Container>
      <LogoWrapper>
        <Logo onClick={handleTitleClick}>
          <span>MOVIE</span>
          <span>FLIX</span>
        </Logo>
        <button>로그인</button>
      </LogoWrapper>
      <div>
        <div>영화를 무제한으로</div>
        <div>시청할 준비가 되셨나요? 시작하려면 가입 정보를 입력하세요</div>
        <input type="text" placeholder="이름" />
        <input type="text" placeholder="이메일 주소" />
        <input type="password" placeholder="비밀번호" />
        <input type="password" placeholder="비밀번호 확인" />
        <button>시작하기</button>
      </div>
    </Container>
  );
}

export default Signup;
