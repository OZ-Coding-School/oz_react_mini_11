import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">OZ무비</Link>
          </li>
          <li>
            <input />
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
