import { useState } from "react";
import Button from "../components/Button";
import Eye from "../components/icons/Eye";
import EyeSlash from "../components/icons/EyeSlash";

export default function Signup() {
  const [isPasswordVisible, setIsPaswordVisible] = useState(false);
  const [isPasswordConfirmationVisible, setIsPaswordConfirmationVisible] =
    useState(false);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">회원가입</h1>
      <form className="flex flex-col space-y-2 p-2 mx-2 w-full max-w-[400px]">
        <div className="flex flex-col">
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            placeholder="example@example"
            className="border-2 p-2 w-full rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="name">이름 </label>
          <input
            type="text"
            id="name"
            placeholder="2~8자 사이 숫자, 한글, 영어만 사용"
            className="border-2 p-2 w-full rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">비밀번호</label>
          <div className="flex items-center space-x-0.5">
            <input
              type={isPasswordVisible ? "text" : "password"}
              id="password"
              placeholder="대소문자와 숫자를 포함한 8자 이상"
              className="border-2 p-2 w-full rounded"
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsPaswordVisible(!isPasswordVisible);
              }}
            >
              {isPasswordVisible ? (
                <Eye className="size-8" />
              ) : (
                <EyeSlash className="size-8" />
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="password-confirmation">비밀번호 확인</label>
          <div className="flex items-center space-x-0.5">
            <input
              type={isPasswordConfirmationVisible ? "text" : "password"}
              id="password-confirmation"
              placeholder="대소문자와 숫자를 포함한 8자 이상"
              className="border-2 p-2 w-full rounded"
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsPaswordConfirmationVisible(!isPasswordConfirmationVisible);
              }}
            >
              {isPasswordConfirmationVisible ? (
                <Eye className="size-8" />
              ) : (
                <EyeSlash className="size-8" />
              )}
            </button>
          </div>
        </div>
        <Button>회원가입</Button>
      </form>
    </div>
  );
}
