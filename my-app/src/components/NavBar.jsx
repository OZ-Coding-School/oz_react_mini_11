import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-title">
          OZ무비<span className="dot">.</span>
        </Link>

        {/* ✅ 검색창 추가 */}
        <input
          type="text"
          className="search-input"
          placeholder="영화 제목을 입력하세요"
        />

        <div className="navbar-buttons">
          <button className="login-btn">로그인</button>
          <button className="signup-btn">회원가입</button>
        </div>
      </div>
    </nav>
  );
}