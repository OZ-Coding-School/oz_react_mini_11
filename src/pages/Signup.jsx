import React, { useState } from "react";
import CommonInput from "../components/CommonInput";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { supabase } from "../lib/supabase";

function Signup() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const nameRegex = /^[a-zA-Z0-9가-힣]{2,8}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (!nameRegex.test(formData.name)) {
      newErrors.name = "이름은 2~8자, 한글/영어/숫자만 가능합니다.";
    }
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "올바른 이메일 형식을 입력해주세요.";
    }
    if (!passwordRegex.test(formData.password)) {
      newErrors.password = "비밀번호는 대소문자 + 숫자 조합이어야 합니다.";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "비밀번호가 일치하지 않습니다.";
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

    const { email, password, name } = formData;

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name },
      },
    });

    if (error) {
      alert("회원가입 실패: " + error.message);
    } else {
      alert("회원가입 성공! 이메일 인증을 완료해주세요.");
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md p-6 bg-white text-black shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">회원가입</h2>
        <form onSubmit={handleSubmit}>
          <CommonInput
            label="이름"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
          />
          <CommonInput
            label="이메일"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <CommonInput
            label="비밀번호"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
          />
          <CommonInput
            label="비밀번호 확인"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
          />
          <button
            type="submit"
            className="w-full mt-4 py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            회원가입
          </button>
        </form>
        <SocialLoginButtons />
      </div>
    </div>
  );
}

export default Signup;
