import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`flex justify-between items-center fixed z-[100] w-full px-[5vw] py-4 trnasition-all duration-500
                  ${isScrolled ? "bg-black" : "bg-transparent"}`}
    >
      <Link to="/">
        <h1 className="text-xl font-bold">OZMOVIE</h1>
      </Link>
      <input type="text" className="bg-white" />
      <div>
        <button className="mr-2">로그인</button>
        <button>회원가입</button>
      </div>
    </div>
  );
}

export default NavBar;
