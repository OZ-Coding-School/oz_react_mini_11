import { useState } from "react";
import AuthInput from "../components/AuthInput";
import {
  vaildateConfirmPassword,
  vaildateEmail,
  vaildateName,
  vaildatePassword,
} from "../utils/vaildate";
import { supabase } from "../supabaseClient";

export function Signup() {
  const [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      name: vaildateName(form.name),
      email: vaildateEmail(form.email),
      password: vaildatePassword(form.password),
      confirmPassword: vaildateConfirmPassword(
        form.password,
        form.confirmPassword
      ),
    };

    setErrors(newErrors);
    const hasError = Object.values(newErrors).some((msg) => msg !== "");
    if (hasError) return;

    try {
      const { data, error } = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
        options: {
          data: {
            name: form.name,
          },
        },
      });

      if (error) {
        alert(`회원가입 실패: ${error.message}`);
      } else {
        alert("회원가입 성공! 이메일 인증을 완료해주세요.");
        console.log("가입된 유저:", data);
      }
    } catch (err) {
      console.error("회원가입 오류:", err);
      alert("회원가입 중 문제가 발생했습니다.");
    }
  };

  return (
    <div className="p-6 py-56 max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-white mb-15 text-center">
        회원가입
      </h1>
      <form onSubmit={handleSubmit}>
        <AuthInput
          label="이메일"
          name="email"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="abcdefg@bom.com"
        ></AuthInput>
        <AuthInput
          label="이름"
          name="name"
          value={form.name}
          onChange={handleChange}
          error={errors.name}
          placeholder="이름을 입력해 주세요"
        ></AuthInput>
        <AuthInput
          label="비밀번호"
          name="password"
          value={form.password}
          type="password"
          onChange={handleChange}
          error={errors.password}
        ></AuthInput>
        <AuthInput
          label="비밀번호 확인"
          name="confirmPassword"
          value={form.confirmPassword}
          type="password"
          onChange={handleChange}
          error={errors.confirmPassword}
        ></AuthInput>
        <button type="submit" className="w-full bg-white rounded  py-3">
          가입하기
        </button>
      </form>
    </div>
  );
}
