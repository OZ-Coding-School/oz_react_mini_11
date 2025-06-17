import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="flex bg-emerald-800 h-[30px] flex-wrap">
      <Link to={`/`} className="pr-[50px] pl-[10px] text-[19px]">
        재은TV
      </Link>
      <input className="w-[60%] mt-[2px] h-[25px] text-white bg-green-50 rounded-[10px] pr-[10px] pl-[10px]"></input>
      <div className="pl-[50px] text-[19px]">로그인</div>
      <div className="pl-[10px] text-[19px]">회원가입</div>
    </div>
  );
}
