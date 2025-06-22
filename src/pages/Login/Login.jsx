import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  Checkbox,
  Container,
  Input,
  Label,
  Logo,
  LogoWrapper,
  StyledLink,
  TextGray,
  Title,
  Wrapper,
} from "./Login.styles";

function Login() {
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
      </LogoWrapper>

      <Wrapper>
        <Card>
          <Title>로그인</Title>
          <Input type="text" placeholder="이메일 주소" />
          <Input type="password" placeholder="비밀번호" />
          <Button>로그인</Button>
          <StyledLink>비밀번호를 잊으셨나요?</StyledLink>
          <Label for="checkbox">
            <Checkbox type="checkbox" id="checkbox" />
            <span>로그인 정보 저장</span>
          </Label>
          <div>
            <TextGray>MOVIEFLIX 회원이 아니신가요?&nbsp;</TextGray>
            <StyledLink to="/signup">지금 가입하세요.</StyledLink>
          </div>
        </Card>
      </Wrapper>
    </Container>
  );
}

export default Login;
