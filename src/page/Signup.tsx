import { z } from "zod";
import Button from "../components/Button";
import FormInput from "../components/FormInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Zod 스키마 정의
const signupSchema = z
  .object({
    email: z.string().email("유효한 이메일을 입력해주세요."),
    name: z
      .string()
      .min(2, "이름은 2자 이상이어야 합니다.")
      .max(8, "이름은 8자 이하이어야 합니다.")
      .regex(/^[가-힣a-zA-Z0-9]+$/, "숫자, 한글, 영어만 사용할 수 있습니다."),
    password: z
      .string()
      .min(8, "비밀번호는 8자 이상이어야 합니다.")
      .regex(/[A-Z]/, "대문자를 포함해야 합니다.")
      .regex(/[a-z]/, "소문자를 포함해야 합니다.")
      .regex(/[0-9]/, "숫자를 포함해야 합니다."),
    passwordConfirmation: z.string(),
  })
  .superRefine(({ password, passwordConfirmation }, ctx) => {
    if (password !== passwordConfirmation) {
      ctx.addIssue({
        code: "custom",
        path: ["passwordConfirmation"],
        message: "비밀번호가 서로 다릅니다.",
      });
    }
  });

// 타입 추출
type SignupForm = z.infer<typeof signupSchema>;

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupForm>({
    resolver: zodResolver(signupSchema),
    mode: "onChange",
  });

  const onSubmit = (data: SignupForm) => {
    console.log("회원가입 정보:", data);
    // 회원가입 처리 로직 추가
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">회원가입</h1>
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
          {...register("name")}
          label="이름"
          placeholder="2~8자 사이 숫자, 한글, 영어만 사용"
          type="text"
          className="w-full"
          errorMessage={errors.name?.message}
          fieldName="name"
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

        <FormInput
          {...register("passwordConfirmation")}
          label="비밀번호 확인"
          placeholder="비밀번호를 다시 입력하세요"
          type="password"
          className="w-full"
          errorMessage={errors.passwordConfirmation?.message}
          fieldName="password-confirmation"
        />
        <Button type="submit">회원가입</Button>
      </form>
    </div>
  );
}
