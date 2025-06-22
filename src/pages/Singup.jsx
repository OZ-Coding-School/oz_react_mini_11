import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../supabase";
import InputField from "../components/InputField";

function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const { name, email, password, confirm } = form;

    if (!name || !email || !password || !confirm) {
      return setError("모든 필드를 입력해주세요.");
    }
    if (password !== confirm) {
      return setError("비밀번호가 일치하지 않습니다.");
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { name } },
    });
    if (error) setError(error.message);
    else navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 space-y-4">
      <h2 className="text-2xl font-bold text-center">회원가입</h2>
      <InputField
        label="이름"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <InputField
        label="이메일"
        name="email"
        value={form.email}
        onChange={handleChange}
        type="email"
      />
      <InputField
        label="비밀번호"
        name="password"
        value={form.password}
        onChange={handleChange}
        type="password"
      />
      <InputField
        label="비밀번호 확인"
        name="confirm"
        value={form.confirm}
        onChange={handleChange}
        type="password"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        type="submit"
        className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
      >
        가입하기
      </button>
    </form>
  );
}

export default Signup;
