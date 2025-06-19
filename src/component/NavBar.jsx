import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
    return (
        <header className="Nav">
            <h4 className="title">OZ무비</h4>
            <input className="input"/>
            <button className="search">검색</button>
            <button className="login">로그인</button>
            <button className="join">회원가입</button>
        </header>
    );
};

export default NavBar;