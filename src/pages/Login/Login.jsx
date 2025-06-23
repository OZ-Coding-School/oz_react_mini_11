import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  Checkbox,
  Container,
  Label,
  Logo,
  LogoWrapper,
  StyledLink,
  TextGray,
  Title,
  Wrapper,
} from "./Login.styles";
import { useContext } from "react";
import FormInput from "../../components/FormInput/FormInput";
import { FormContext } from "../../contexts/FormContext";

function Login() {
  const { formState } = useContext(FormContext);
  const isFormValid = Object.values(formState).every((f) => f.isValid);
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate("/");
  };

  return (
    <Container>
      <LogoWrapper>
        <Logo onClick={handleTitleClick}>MOVIEFLIX</Logo>
      </LogoWrapper>

      <Wrapper>
        <Card>
          <Title>로그인</Title>
          <FormInput type="text" placeholder="이메일 주소" label="email" />
          <FormInput type="password" placeholder="비밀번호" label="password" />
          <Button disabled={!isFormValid}>로그인</Button>
          <StyledLink>비밀번호를 잊으셨나요?</StyledLink>
          <Label htmlFor="checkbox">
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
