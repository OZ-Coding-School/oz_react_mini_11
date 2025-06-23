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
import { useState } from "react";
import FormInput from "../../components/FormInput/FormInput";

function Login() {
  const [loginForms, setLoginForms] = useState({
    // name: { value: "", isValid: false },
    email: { value: "", isValid: false },
    password: { value: "", isValid: false },
    // passwordConfirm: { value: "", isValid: false },
  });
  const isAllFormsValid = Object.values(loginForms).every((f) => f.isValid);
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
          <FormInput
            type="email"
            placeholder="이메일 주소"
            formName="email"
            formState={loginForms.email}
            setFormState={({ value, isValid }) =>
              setLoginForms((prev) => ({
                ...prev,
                email: { value, isValid },
              }))
            }
          />
          <FormInput
            type="password"
            placeholder="비밀번호"
            formName="password"
            formState={loginForms.password}
            setFormState={({ value, isValid }) =>
              setLoginForms((prev) => ({
                ...prev,
                password: { value, isValid },
              }))
            }
          />
          <Button disabled={!isAllFormsValid}>로그인</Button>
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
