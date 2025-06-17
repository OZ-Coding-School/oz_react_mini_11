import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav>
        <ul className="flex">
          <li>
            <Link to="/">OZ무비</Link>
          </li>
          <li>검색창</li>
          <li>
            <ul className="flex">
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
