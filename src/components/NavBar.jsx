import { useEffect, useState } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import useDebounce from "../hooks/useDebounce";

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [inputDebounce, setInputDebounce] = useState("");
  const [_, setSearchParams] = useSearchParams();
  const debouncedValue = useDebounce(inputDebounce);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputDebounce = (e) => {
    setInputDebounce(e.target.value);
  };

  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/search") {
      if (debouncedValue.trim()) {
        setSearchParams({ keyword: debouncedValue });
        navigate(`/search?keyword=${debouncedValue}`);
        console.log("keyword: ", debouncedValue);
      } else {
        setSearchParams({});
        navigate("/");
      }
    }
  }, [debouncedValue, setSearchParams, navigate, location.pathname]);

  const handleClickLogo = () => {
    setInputDebounce("");
  };

  return (
    <div
      className={`flex justify-between items-center fixed z-[100] w-full px-[5vw] py-4 trnasition-all duration-500
                  ${isScrolled ? "bg-black" : "bg-transparent"}`}
    >
      <Link to="/">
        <h1 className="text-xl font-bold" onClick={handleClickLogo}>
          OZMOVIE
        </h1>
      </Link>
      <input
        type="text"
        className="bg-white"
        value={inputDebounce}
        onChange={handleInputDebounce}
      />
      <div>
        <Link to="/login">
          <button className="mr-2">로그인</button>
        </Link>
        <button>회원가입</button>
      </div>
    </div>
  );
}

export default NavBar;
