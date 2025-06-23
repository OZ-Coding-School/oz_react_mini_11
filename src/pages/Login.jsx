import React, { useState } from "react";
import CommonInput from "../components/CommonInput";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import SocialLoginButtons from "../components/SocialLoginButtons";

function Login() {
  const navigate = useNavigate();
  const { loginWithEmail, login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      newErrors.email = "올바른 이메일 형식을 입력해주세요.";
    }
    if (!formData.password) {
      newErrors.password = "비밀번호를 입력해주세요.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const { email, password } = formData;

    const { data, error } = await loginWithEmail(email, password); // ✅ 변경된 부분

    if (error) {
      alert("로그인 실패: " + error.message);
    } else {
      const user = data.user;
      const profile = user.user_metadata;

      login({
        email: user.email,
        name: profile?.name || "사용자",
        thumbnail: "https://i.pravatar.cc/40?u=" + user.email,
      });

      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md p-6 bg-white text-black shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">로그인</h2>
        <form onSubmit={handleSubmit}>
          <CommonInput
            label="이메일"
            name="email"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <CommonInput
            label="비밀번호"
            name="password"
            type="password"
            autoComplete="email"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
          />
          <button
            type="submit"
            className="w-full mt-4 py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            로그인
          </button>
        </form>
        <SocialLoginButtons />
      </div>
    </div>
  );
}

export default Login;
