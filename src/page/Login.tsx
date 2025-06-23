import { z } from "zod";
import useDarkModeStore from "../hooks/zustand/useIsDarkStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Button from "../components/Button";
import FormInput from "../components/FormInput";
import { Link, useNavigate } from "react-router";
import supabase from "../utils/supabase";
import { useState } from "react";
import SmallLoading from "../components/lodaing/SmallLoading";

// Zod 스키마 정의
const loginSchema = z.object({
  email: z.string().email("유효한 이메일을 입력해주세요."),
  password: z
    .string()
    .min(8, "비밀번호는 8자 이상이어야 합니다.")
    .regex(/[A-Z]/, "대문자를 포함해야 합니다.")
    .regex(/[a-z]/, "소문자를 포함해야 합니다.")
    .regex(/[0-9]/, "숫자를 포함해야 합니다."),
});

// 타입 추출
type LoginForm = z.infer<typeof loginSchema>;

export default function Login() {
  const isDark = useDarkModeStore((state) => state.isDark);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [isPending, setIsPending] = useState(false);

  const navigate = useNavigate();

  const onSubmit = async (data: LoginForm) => {
    setIsPending(true);

    const { error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

    if (error) {
      //예외 처리 나중에 더 추가
      if (error.code === "email_provider_disabled") {
        setErrorMessage("등록되지 않은 이메일이거나 비밀번호가 다릅니다.");
      } else {
        setErrorMessage(
          "알 수 없는 에러가 발생했습니다. 잠시 다시 시도해주세요."
        );
      }
    } else {
      navigate("/");
    }

    setIsPending(false);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <h1
        className={`text-4xl font-bold ${
          isDark ? "text-neutral-100" : "text-neutral-900"
        }`}
      >
        로그인
      </h1>
      <form
        className="flex flex-col space-y-2 p-2 mx-2 w-full max-w-[400px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormInput
          {...register("email")}
          label="이메일"
          placeholder="example@example.com"
          type="email"
          className="w-full"
          errorMessage={errors.email?.message}
          fieldName="email"
        />

        <FormInput
          {...register("password")}
          label="비밀번호"
          placeholder="대소문자와 숫자를 포함한 8자 이상"
          type="password"
          className="w-full"
          errorMessage={errors.password?.message}
          fieldName="password"
        />
        <span className="text-sm text-red-500">{errorMessage}</span>
        <Button type="submit">{isPending ? <SmallLoading /> : "로그인"}</Button>
      </form>
      <p className={`${isDark ? "text-neutral-100" : "text-neutral-900"}`}>
        계정이 없으신가요?{" "}
        <Link className="underline underline-offset-3" to="/signup">
          간편가입
        </Link>
      </p>
    </div>
  );
}
