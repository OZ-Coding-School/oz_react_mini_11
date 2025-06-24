import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useDebounce from "../hooks/useDebounce";

export default function NavBar({ isLoggedIn, onLogout }) {
  const [text, setText] = useState("");
  //debounce컴포넌트 (text, 700)넣어서 호출
  const debouncedText = useDebounce(text, 700);
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    //입력된 값이 있으면 navigate(주어진경로로 이동)
    if (debouncedText) {
      //encodeURIComponent는 공백이나,특수문자가 있을경우 대비해서 url을 안전하게 인코딩
      navigate(`/search?query=${encodeURIComponent(debouncedText)}`);
    } else {
      navigate("/");
    }
  }, [debouncedText]);

  return (
    <nav className="absolute z-40 w-full justify-between bg-[rgba(0,0,0,0.48)] text-white flex py-2 px-2 md:py-6 sm:px-6">
      <NavLogo />
      {/* input창 */}
      <SearchInput value={text} onChange={(e) => setText(e.target.value)} />
      <div className="flex gap-2 text-base relative">
        {!isLoggedIn ? (
          <>
            <NavButton to="/login">로그인</NavButton>
            <NavButton to="/signup">회원가입</NavButton>
          </>
        ) : (
          <div
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <img
              src="/thumbnail.jpg"
              alt="프로필"
              className="w-10 h-10 rounded-full cursor-pointer"
            />
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-md p-2 z-50">
                <Link
                  to="/mypage"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  마이페이지
                </Link>
                <button
                  onClick={onLogout}
                  className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                >
                  로그아웃
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLogo() {
  return (
    <Link to="/" className="text-white font-bold text-lg">
      BOM MOVIE
    </Link>
  );
}

function SearchInput({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="bg-[rgba(223,223,223,0.56)] w-[30vw] text-white p-1"
    />
  );
}

function NavButton({ to, children }) {
  return (
    <Link to={to}>
      <button className="bg-[#5e6eff] rounded-[12px] px-2 py-1 sm:py-3 sm:px-4  cursor-pointer">
        {children}
      </button>
    </Link>
  );
}
