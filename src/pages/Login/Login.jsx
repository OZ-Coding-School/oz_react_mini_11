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
import { useDispatch } from "react-redux";
import { signin } from "../../features/auth/authSlice";

function Login() {
  const [loginForms, setLoginForms] = useState({
    email: { value: "", isValid: false },
    password: { value: "", isValid: false },
  });
  const isAllFormsValid = Object.values(loginForms).every((f) => f.isValid);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(
      signin({
        email: loginForms.email.value,
        password: loginForms.password.value,
      })
    )
      .unwrap()
      .then(({ name }) => {
        console.log("로그인된 사용자 이름:", name);
        navigate("/");
      })
      .catch((err) => {
        console.error("로그인 실패:", err);
      });
  };

  return (
    <Container>
      <LogoWrapper>
        <Logo onClick={() => navigate("/")}>MOVIEFLIX</Logo>
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
          <Button disabled={!isAllFormsValid} onClick={handleLogin}>
            로그인
          </Button>
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
