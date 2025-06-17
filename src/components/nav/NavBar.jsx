import HomeLogo from "../../assets/HomeLogo.png";
import { CiSearch } from "react-icons/ci";
import { Outlet } from "react-router-dom";

export function NavBar() {
  return (
    <div className="flex items-center justify-around w-screen h-22 bg-[#D6EAF8]">
      <div className="flex-1/4 flex justify-center items-center">
        <img src={HomeLogo} className="w-28 h-auto"></img>
      </div>
      <div className="flex-2/4 flex items-center relative">
        <CiSearch className="absolute left-3 text-3xl text-gray-500" />
        <input
          type="text"
          placeholder="영화 이름 ..."
          className="border-none bg-white rounded-2xl p-3 pl-13 sm:w-80 md:w-96 lg:w-[50rem]"
        />
      </div>
      <div className="flex-1/4 justify-center items-center flex gap-3">
        <button>로그인</button>
        <button>회원가입</button>
      </div>
    </div>
  );
}
