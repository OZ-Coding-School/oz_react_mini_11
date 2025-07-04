import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FormInput from "../../components/FormInput/FormInput";
import {
  Container,
  LogoWrapper,
  Logo,
  LoginButton,
  SignupWrapper,
  Card,
  TextBold,
  TextRegular,
  Button,
  StyledPrevIcon,
} from "./Signup.styles";
import supabase from "../../supabaseClient";

function Signup() {
  const [signupForms, setSignupForms] = useState({
    name: { value: "", isValid: false },
    email: { value: "", isValid: false },
    password: { value: "", isValid: false },
    passwordConfirm: { value: "", isValid: false },
  });
  const isAllFormsValid = Object.values(signupForms).every((f) => f.isValid);
  const navigate = useNavigate();

  const signUp = async () => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: signupForms.email.value,
        password: signupForms.password.value,
      });

      if (error) {
        console.log(error.message);
        return;
      }

      const userData = await supabase.from("user_table").insert({
        id: data.user?.id,
        email: data.user?.email,
        created_at: data.user?.created_at,
        name: signupForms.name.value,
      });

      console.log("회원가입 성공!");
      navigate("/login");
    } catch (error) {
      console.error("회원가입 실패: ", error);
    }
  };

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
          <FormInput
            type="text"
            placeholder="이름"
            formName="name"
            formState={signupForms.name}
            setFormState={({ value, isValid }) =>
              setSignupForms((prev) => ({
                ...prev,
                name: { value, isValid },
              }))
            }
          />
          <FormInput
            type="email"
            placeholder="이메일 주소"
            formName="email"
            formState={signupForms.email}
            setFormState={({ value, isValid }) =>
              setSignupForms((prev) => ({
                ...prev,
                email: { value, isValid },
              }))
            }
          />
          <FormInput
            type="password"
            placeholder="비밀번호"
            formName="password"
            formState={signupForms.password}
            setFormState={({ value, isValid }) =>
              setSignupForms((prev) => ({
                ...prev,
                password: { value, isValid },
              }))
            }
          />
          <FormInput
            type="password"
            placeholder="비밀번호 확인"
            formName="passwordConfirm"
            formState={signupForms.passwordConfirm}
            setFormState={({ value, isValid }) =>
              setSignupForms((prev) => ({
                ...prev,
                passwordConfirm: { value, isValid },
              }))
            }
            confirmText={signupForms.password.value}
          />
          <Button disabled={!isAllFormsValid} onClick={signUp}>
            시작하기 <StyledPrevIcon />
          </Button>
        </Card>
      </SignupWrapper>
    </Container>
  );
}

export default Signup;
