import { Link } from "react-router";

export default function NavBar() {
  return (
    <nav className="absolute z-40 w-full   py-4 px-12 bg-[rgba(0,0,0,0.5)] text-white flex justify-between">
      <Link to="/">OZ무비</Link>
      <input
        type="text"
        className="bg-[rgba(223,223,223,0.56)] w-[30vw] text-white p-1 "
      />
      <div className="flex gap-6">
        <Link to="/login">
          <button className="bg-[#5e6eff] rounded-[12px] px-6 py-2 cursor-pointer">
            로그인
          </button>
        </Link>
        <Link to="/signup">
          <button className="bg-[#5e6eff] rounded-[12px] px-6 py-2 cursor-pointer">
            회원가입
          </button>
        </Link>
      </div>
    </nav>
  );
}
