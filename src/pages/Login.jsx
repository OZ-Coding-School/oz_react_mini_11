import { Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import Input from "../components/Input";

function Login() {
  return (
    <div className="relative w-full min-h-screen h-full overflow-x-hidden">
      <AuthLayout />

      <div
        className="relative flex flex-col gap-4 w-full min-w-[340px] mt-14 mx-auto mb-20 p-[5vw] rounded-2xl bg-black
                  sm:w-[500px] sm:mt-24 sm:p-14 sm:bg-[#000000c1]"
      >
        <h2 className="mb-4 text-3xl font-bold sm:text-center">로그인</h2>
        <Input
          id="email"
          label="이메일"
          type="email"
          placeholder="이메일 주소"
          hideLabel
        />
        <Input
          id="password"
          label="비밀번호"
          type="password"
          placeholder="비밀번호"
          hideLabel
        />
        <button
          className="w-full py-2 px-6 rounded-md bg-red-primary hover:bg-red-hover text-lg text-white
                      transition-all duration-300"
        >
          로그인
        </button>
        <div className="text-base">
          <span className="text-gray-300">
            오즈무비 회원이 아닌가요? &nbsp;
          </span>
          <Link to="/register">
            <span className="hover:underline">지금 가입하세요.</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
