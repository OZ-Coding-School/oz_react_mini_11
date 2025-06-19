import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useDebounce from "../hooks/useDebounce";

export default function NavBar() {
  const [inputValue, setInputValue] = useState("");
  const debounceValue = useDebounce(inputValue); //debounce 1000ms
  const navigate = useNavigate();

  useEffect(() => {
    if (debounceValue) {
      navigate(`/search?movie=${debounceValue}`);
    }
  }, [debounceValue, navigate]);
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">OZ무비</Link>
          </li>
          <li>
            <input
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
          </li>
          <li>
            <ul>
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
