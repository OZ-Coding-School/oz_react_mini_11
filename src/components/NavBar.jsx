import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useSearchRouting from "../hooks/useSearchRouting";

function NavBar() {
  const { inputDebounce, setInputDebounce } = useSearchRouting();
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const inputRef = useRef();

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
    if (isInputVisible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isInputVisible]);

  return (
    <div
      className={`flex justify-between items-center fixed z-[100] w-full px-[5vw] py-4 trnasition-all duration-500
                  ${isScrolled ? "bg-black" : "bg-transparent"}`}
    >
      <Link to="/">
        <h1
          className="text-xl font-bold md:hidden"
          onClick={() => setInputDebounce("")}
        >
          OZ
        </h1>
        <h1
          className="text-xl font-bold hidden md:block"
          onClick={() => setInputDebounce("")}
        >
          OZMOVIE
        </h1>
      </Link>
      <div className="flex items-center gap-[2vw]">
        <div className="flex items-center">
          <input
            type="text"
            ref={inputRef}
            className={`outline-none border-b-2 bg-transparent text-white transition transition-width duration-300 
                        ${
                          isInputVisible || location.pathname === "/search"
                            ? "w-[calc(150px+5vw)]"
                            : "w-0"
                        }`}
            style={{ transitionProperty: "width" }}
            value={inputDebounce}
            onBlur={() => setIsInputVisible(false)}
            onChange={handleInputDebounce}
          />
          <button
            onClick={() => setIsInputVisible(!isInputVisible)}
            className={`text-white text-xl ${isInputVisible ? "hidden" : ""}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              role="img"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              data-icon="MagnifyingGlassStandard"
              aria-hidden="true"
              className="search-icon"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM15.6177 17.0319C14.078 18.2635 12.125 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 12.125 18.2635 14.078 17.0319 15.6177L22.7071 21.2929L21.2929 22.7071L15.6177 17.0319Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div>
        <Link to="/login">
          <button className="mr-2">로그인</button>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
