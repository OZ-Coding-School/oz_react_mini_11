import { useState } from "react";
import Button from "../components/Button";
import Eye from "../components/icons/Eye";
import EyeSlash from "../components/icons/EyeSlash";
import FormInput from "../components/FormInput";

export default function Signup() {
  const [isPasswordVisible, setIsPaswordVisible] = useState(false);
  const [isPasswordConfirmationVisible, setIsPaswordConfirmationVisible] =
    useState(false);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">회원가입</h1>
      <form className="flex flex-col space-y-2 p-2 mx-2 w-full max-w-[400px]">
        <FormInput
          name="email"
          placeholder="example@example"
          className="w-full"
          type="email"
          label="이메일"
        />

        <FormInput
          name="name"
          placeholder="2~8자 사이 숫자, 한글, 영어만 사용"
          type="text"
          label="이름"
          className="w-full"
        />

        <FormInput
          name="password"
          placeholder="대소문자와 숫자를 포함한 8자 이상"
          label="비밀번호"
          type="password"
          className="w-full"
        />

        <FormInput
          name="password-confirmation"
          label="비밀번호 확인"
          type="password"
          className="w-full"
          placeholder="대소문자와 숫자를 포함한 8자 이상"
        />

        <Button>회원가입</Button>
      </form>
    </div>
  );
}
