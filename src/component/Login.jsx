import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import Input from "./Input";
import { useState } from "react";
import { supabase } from "../constant/supabaseClient";
import { getUserInfo } from "../utils/authUtils";

export default function Login() {
  const { setUser } = useUser();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    //input변경 시 상태업데이트
    const { name, value } = e.target; //input 요소에서 name, value를 꺼내옴
    setFormData((prev) => ({ ...prev, [name]: value })); //기존 formData 상태를 복사한 후, 해당 name에 해당하는 값을 새로운 value로 업데이트
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "이메일을 입력하세요";
    }
    if (!formData.password.trim()) {
      newErrors.password = "비밀번호를 입력하세요";
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        });
        if (error) {
          alert("로그인 실패" + error.message);
        } else {
          const userInfo = await getUserInfo();
          setUser(userInfo); //전역상태 업데이트
          alert("로그인 성공");
          navigate("/");
        }
      } catch (err) {
        console.err(err);
      }
    }
  };
  return (
    <>
      <div className="login">
        <div>
          <h2>로그인</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <p>이메일 계정으로 로그인</p>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                placeholder="이메일을 입력하세요"
              />
              <Input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                error={errors.password}
                placeholder="비밀번호를 입력하세요"
              />
            </div>
            <button type="submit">로그인</button>
          </form>
          <hr />
          <div className="kakao">
            <p>다른 계정으로 로그인</p>
            <button>카카오 계정 로그인</button>
          </div>
        </div>
      </div>
    </>
  );
}
