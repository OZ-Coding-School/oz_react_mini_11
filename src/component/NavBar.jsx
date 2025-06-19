import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useDebounce from "../hooks/useDebounce";

export default function NavBar() {
  const [inputValue, setInputValue] = useState("");
  const debounceValue = useDebounce(inputValue); //debounce 1000ms
  const navigate = useNavigate();
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    if (debounceValue && !isSearch) {
      navigate(`/search?movie=${debounceValue}`);
      setIsSearch(true);
    }
  }, [debounceValue, navigate, isSearch]);
  return (
    <>
      <nav>
        <ul>
          <li className="logo">
            <Link to="/">OZ무비</Link>
          </li>
          <li>
            <ul>
              <li>
                <input
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                    setIsSearch(false);
                  }}
                />
              </li>
              <li>
                <Link to="/login">로그인</Link>
              </li>
              <li>
                <Link to="/join">회원가입</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
}
