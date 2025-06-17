import { Link } from "react-router-dom"

function NavBar() {
    return(<>
        <nav className="">
            <Link to="/"><h3>OZ 무비</h3></Link>
            <input type="text" placeholder="검색..."/>
            <Link to="/login"><div>로그인</div></Link>
            <Link to="/signin"><div>회원가입</div></Link>
        </nav>
        </>)
}