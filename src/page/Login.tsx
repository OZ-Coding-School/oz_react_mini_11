import { z } from "zod";
import useDarkModeStore from "../hooks/zustand/useIsDarkStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Button from "../components/Button";
import FormInput from "../components/FormInput";
import { Link } from "react-router";

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

  const onSubmit = (data: LoginForm) => {
    console.log("로그인 정보:", data);
    // 회원가입 처리 로직 추가
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

        <Button type="submit">로그인</Button>
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
