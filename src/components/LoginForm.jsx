import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginForm() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    function validataForm() {
        if (!email) return "이메일을 입력해주세요.";
        if (!email.includes("@")) return "이메일 형식이 올바르지 않습니다.";
        if (!password) return "비밀번호를 입력해주세요.";
        if (password.length < 6) return "비밀번호는 8자 이상이어야 합니다.";
        return null;
    }

    const handleForm = (e) => {
        e.preventDefault(); //폼 제춮시 새로 고침 방지
        const error = validataForm();
        if (error) {
            setError(error);
            return;
        }
        console.log("로그인 ", { email, password });
        setError(""); // 에러 초기화
    };

    return (
        <>
            <div className="absolute flex items-center justify-center flex-col inset-0 z-10">
                <form
                    className="group relative flex flex-col justify-between p-5 w-100 h-[270px] rounded-xl overflow-hidden shadow-md 
                        border-2 border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/50 transition-all duration-300"
                    onSubmit={handleForm}
                >
                    <label htmlFor="email" className="text-base sm:text-lg ">
                        아이디
                    </label>
                    <input
                        type="email"
                        id="emial"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-2 rounded bg-white text-amber-950 bg-opacity-20 placeholder-gray-300"
                        placeholder="이메일"
                    />
                    <label htmlFor="password" className="text-base sm:text-lg ">
                        {" "}
                        비밀번호{" "}
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="p-2 rounded bg-white bg-opacity-20 text-amber-950 placeholder-gray-300"
                        placeholder="비밀번호"
                    />
                    <button className="bg-blue-500 hover:bg-blue-600 p-2 rounded text-white" type="sumbit">
                        로그인
                    </button>
                    {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
                    <p className="text-[0.875rem] text-center">
                        웹사이트가 처음이신가요?
                        <Link to="/signup" className="hover:underline">
                            {" "}
                            회원가입
                        </Link>
                    </p>
                </form>
            </div>
        </>
    );
}
