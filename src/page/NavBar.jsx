import { Link } from "react-router-dom";
import './NavBar.css'

function NavBar() {
    return (
        <div className="NavBar-grid">
            <Link to="/" className="OZ">OZ무비</Link>
            <input type="text" className="text"/>
            <div className="grid">
                <button className="login">로그인</button>
                <button className="signUp">회원가입</button>
            </div>
        </div>
    )
}

export default NavBar;