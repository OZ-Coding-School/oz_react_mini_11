import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignipForm() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState();

    const handleForm = (e) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        const nameRegex = /^[가-힣]{2,}$/;
        e.preventDefault();
        if (!email || !password || !confirmPassword || !userName) {
            setError("모든 필드를 입력해주세요.");
            return;
        }
        if (!email.includes("@")) {
            setError("이메일 형식이 올바르지 않습니다.");
            return;
        }
        if (!nameRegex.test(userName)) {
            setError("이름은 2글자 이상이어야 합니다");
            return;
        }
        if (password.length < 8) {
            setError("비밀번호는 8자리 이상이어여 합니다.");
            return;
        }
        if (!passwordRegex.test(password)) {
            setError("비밀번호는 대문자, 소문자, 숫자를 포함해합니다.");
            return;
        }
        if (password !== confirmPassword) {
            setError("비밀번호가 일치하지 않습니다.");
            return;
        }
        setError("");
        console.log("회원가입 성공:", { email, userName, password });
        alert("로그인 페이지로 이동합니다.");
        navigate("/login");
    };

    return (
        <div className="absolute flex items-center justify-center flex-col inset-0 z-10">
            <form
                onSubmit={handleForm}
                className="group relative flex flex-col justify-between p-5 w-100 h-[450px] rounded-xl overflow-hidden shadow-md 
                    border-2 border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/50 transition-all duration-300"
            >
                <h2 className="text-xl text-white font-bold text-center">회원가입</h2>
                <label htmlFor="email" className="text-base sm:text-lg">
                    이메일
                </label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="이메일"
                    className="p-2 rounded bg-white bg-opacity-20 text-amber-950 placeholder-gray-300"
                />
                <label htmlFor="userName" className="text-base sm:text-lg">
                    이름
                </label>
                <input
                    type="text"
                    id="userName"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="이름"
                    className="p-2 rounded bg-white bg-opacity-20 text-amber-950 placeholder-gray-300"
                />
                <label htmlFor="password" className="text-base sm:text-lg">
                    비밀번호
                </label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="비밀번호"
                    className="p-2 rounded bg-white bg-opacity-20 text-amber-950 placeholder-gray-300"
                />
                <label htmlFor="confirmPassword" className="text-base sm:text-lg ">
                    비밀번호 확인
                </label>
                <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="비밀번호 확인"
                    className="p-2 rounded bg-white bg-opacity-20 text-amber-950 placeholder-gray-300"
                />
                {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 p-2 rounded text-white">
                    회원가입
                </button>
                <p className="text-[0.875rem] text-center">
                    이미 회원 이세요??
                    <Link to="/login" className="hover:underline">
                        로그인
                    </Link>
                </p>
            </form>
        </div>
    );
}
