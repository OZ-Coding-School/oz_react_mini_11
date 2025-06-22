import { useState } from "react";
import Input from "./Input";
import { supabase } from "../constant/supabaseClient";
import { getUserInfo } from "../utils/authUtils";
import { useUser } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const { setUser } = useUser();
  const [formData, setFormData] = useState({
    //초기값 설정
    name: "",
    email: "",
    password: "",
    password2: "",
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

    const nameRegex = /^[가-힣a-zA-Z0-9]{2,8}$/; // 2~8자, 한글/영어/숫자만 허용
    if (!formData.name.trim()) {
      //trim- 앞, 뒤로 띄어쓰기만 있는 경우도 "빈 값"으로 처리
      newErrors.name = "이름을 입력하세요";
    } else if (!nameRegex.test(formData.name)) {
      // .test(...) 는 이메일 문자열이 정해진 형식(정규표현식)에 맞는지 검사
      newErrors.name = "이름은 2~8자, 한글/영어/숫자만 허용";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "이메일을 입력하세요";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "이메일 형식이 올바르지 않습니다";
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
    if (!formData.password.trim()) {
      newErrors.password = "비밀번호를 입력하세요";
    } else if (formData.password.length < 6) {
      newErrors.password = "비밀번호는 6자 이상";
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password = "영어 대/소문자와 숫자를 포함";
    }

    if (!formData.password2.trim()) {
      newErrors.password2 = "비밀번호 확인을 입력하세요";
    } else if (formData.password2 !== formData.password) {
      newErrors.password2 = "비밀번호가 일치하지 않습니다";
    }

    setErrors(newErrors); //생성된 에러메세지 저장 후 input에 전달

    //에러 객체의 키를 세어서 하나도 없을경우에만 제출
    if (Object.keys(newErrors).length === 0) {
      try {
        const { data, error } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
        });
        if (error) {
          alert(`회원가입 실패: ${error.message}`);
        } else {
          // const user = data.user;
          // await supabase
          //   .from("profiles")
          //   .insert([{ id: user.id, username: formData.name }]);

          const userInfo = await getUserInfo(); //supabase에서 유저 정보 가져옴
          setUser(userInfo); //전역상태 업데이트

          alert("회원가입 성공!");
          navigate("/");
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <>
      <div className="login join">
        <div>
          <h2>회원가입</h2>
          <form onSubmit={handleSubmit} noValidate>
            <div>
              <Input
                label="이름"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
              />
              <Input
                label="이메일"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                placeholder="이메일을 입력하세요"
              />
              <Input
                label="비밀번호"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                error={errors.password}
                placeholder="비밀번호를 입력하세요"
              />
              <Input
                label="비밀번호 확인"
                name="password2"
                type="password"
                value={formData.password2}
                onChange={handleChange}
                error={errors.password2}
                placeholder="비밀번호를 입력하세요"
              />
            </div>
            <button type="submit">회원가입</button>
          </form>
        </div>
      </div>
    </>
  );
}
