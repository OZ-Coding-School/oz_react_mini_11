import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useDebounce from "./Debounce";

export default function NavBar() {
  const [text, setText] = useState("");
  //debounce컴포넌트 (text, 700)넣어서 호출
  const debouncedText = useDebounce(text, 700);
  const navigate = useNavigate();

  useEffect(() => {
    //입력된 값이 있으면 navigate(주어진경로로 이동)
    if (debouncedText) {
      //encodeURIComponent는 공백이나,특수문자가 있을경우 대비해서 url을 안전하게 인코딩
      navigate(`/search?query=${encodeURIComponent(debouncedText)}`);
    }
  }, [debouncedText]);

  return (
    <nav className="absolute z-40 w-full justify-between bg-[rgba(0,0,0,0.48)] text-white flex py-2 px-2 md:py-6 sm:px-6">
      <Link to="/" className="">
        OZ무비
      </Link>
      {/* input창 */}
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="검색하기"
        className="bg-[rgba(223,223,223,0.56)] w-[30vw] text-white p-1 "
      />

      <div className="flex gap-2 text-base">
        <Link to="/login">
          <button className="bg-[#5e6eff] rounded-[12px] px-2 py-1 sm:py-3 sm:px-4  cursor-pointer">
            로그인
          </button>
        </Link>
        <Link to="/signup">
          <button className="bg-[#5e6eff] rounded-[12px] px-2 py-1 sm:py-3 sm:px-4 sm:ml-4 cursor-pointer">
            회원가입
          </button>
        </Link>
      </div>
    </nav>
  );
}
