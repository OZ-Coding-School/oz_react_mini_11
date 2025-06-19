import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useDebounce from "../hooks/useDebounce";

export default function NavBar() {
  const [inputValue, setInputValue] = useState("");
  const debounceValue = useDebounce(inputValue); // debounce 500ms
  const navigate = useNavigate();

  const [prevQuery, setPrevQuery] = useState(""); // 이전 검색어 기억
  const justClickedRef = useRef(false); // 최근 링크 클릭 여부 플래그

  // 로고,메뉴 클릭 시: 검색 상태 초기화 + navigate 잠시 막기
  const handleReset = () => {
    setInputValue("");
    setPrevQuery(""); // navigate가 실행되지 않도록

    justClickedRef.current = true; // 클릭 발생 표시
    setTimeout(() => {
      justClickedRef.current = false; // 300ms 후 navigate 다시 허용
    }, 300);
  };

  // debounceValue가 바뀌면 자동 검색 수행
  useEffect(() => {
    const trimmed = debounceValue.trim();

    // 클릭 직후에는 navigate 막기
    if (justClickedRef.current) return;

    // 검색어가 있고, 이전 검색어와 다를 때만 이동
    if (trimmed && trimmed !== prevQuery) {
      navigate(`/search?movie=${trimmed}`);
      setPrevQuery(trimmed);
    }
  }, [debounceValue, prevQuery, navigate]);

  return (
    <nav>
      <ul>
        <li className="logo">
          <Link to="/" onClick={handleReset}>
            OZ무비
          </Link>
        </li>
        <li>
          <ul>
            <li>
              <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            </li>
            <li>
              <Link to="/login" onClick={handleReset}>
                로그인
              </Link>
            </li>
            <li>
              <Link to="/join" onClick={handleReset}>
                회원가입
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
