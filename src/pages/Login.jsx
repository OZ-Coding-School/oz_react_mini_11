import { useState } from "react";
import AuthInput from "../components/AuthInput";
import { vaildateEmail, vaildatePassword } from "../utils/vaildate";
import { useNavigate, useOutletContext } from "react-router";
import { supabase } from "../supabaseClient";

export function Login() {
  const { setIsLoggedIn } = useOutletContext();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      email: vaildateEmail(form.email),
      password: vaildatePassword(form.password),
    };

    setErrors(newErrors);
    const isVaild = Object.values(newErrors).every((msg) => msg === "");
    if (!isVaild) return;

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: form.email,
        password: form.password,
      });

      if (error) {
        alert(`로그인 실패: ${error.message}`);
        console.log("로그인 유저:", data);
      } else {
        alert("로그인 성공!");
        console.log("로그인 유저:", data);
        setIsLoggedIn(true);
        navigate("/"); // 로그인 후 이동할 페이지 경로
      }
    } catch (err) {
      console.error("로그인 중 오류:", err);
      alert("로그인 중 문제가 발생했습니다.");
    }
  };

  return (
    <div className="p-6 py-56 max-w-md mx-auto ">
      <h1 className="text-2xl font-bold text-white mb-15 text-center">
        로그인
      </h1>
      <form onSubmit={handleSubmit}>
        <AuthInput
          label="이메일"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
        ></AuthInput>
        <AuthInput
          label="비밀번호"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          error={errors.password}
        ></AuthInput>
        <button type="submit" className="w-full bg-white rounded  py-3">
          로그인
        </button>
      </form>
    </div>
  );
}
