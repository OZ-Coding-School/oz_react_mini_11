import { Link } from "react-router-dom"

function NavBar() {
    return(<>
        <nav className="flex bg-black bg-contain justify-around">
            <Link to="/"><h3 className="
              bg-lime-100
                font-extrabold
                text-5xl
                text-violet-900
                rounded-xs
                bg-cover
                m-[5px]
                p-3
            ">OZ 무비</h3></Link>
            <input type="text" placeholder="검색..." className="
              bg-white
                m-[15px]
                rounded-s
                w-[60%]
            "/>
            <Link to="/login"><div className="
                bg-lime-200
                text-violet-900
                font-semibold
                text-3xl
                mt-[11px]
                p-3
            ">로그인</div></Link>
            <Link to="/signin"><div className="
             bg-lime-200
                text-violet-900
                font-semibold
                text-3xl
                mt-[11px]
                p-3
            ">회원가입</div></Link>
        </nav>
        </>)
}

export default NavBar