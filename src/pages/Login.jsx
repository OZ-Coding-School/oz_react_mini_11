import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../supabase";
import InputField from "../components/InputField";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const { email, password } = form;

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) setError("이메일 또는 비밀번호가 잘못되었습니다.");
    else navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 space-y-4">
      <h2 className="text-2xl font-bold text-center">로그인</h2>
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
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        type="submit"
        className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
      >
        로그인
      </button>
    </form>
  );
}

export default Login;
