import { useNavigate } from "react-router";
import Button from "./Button";
import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

export default function Navbar() {
  const [searchParam, setSearchParam] = useState("");
  const debouncedParam = useDebounce(searchParam, 200);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    setSearchParam("");
    navigate("/");
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchParam(event.target.value);
  };

  useEffect(() => {
    if (debouncedParam === "") {
      navigate(`/`);
    } else {
      navigate(`/search?searchParam=${debouncedParam}`);
    }
  }, [debouncedParam, navigate]);

  return (
    <header className="z-50 flex flex-col items-start justify-between fixed top-0 w-full text-neutral-50 gap-5 p-5 bg-neutral-900 border-b-2 border-neutral-700 md:flex-row md:items-center">
      <div
        className="text-4xl font-semibold hover:cursor-pointer"
        onClick={handleLogoClick}
      >
        Movie Wiki
      </div>
      <input
        onChange={handleChange}
        className="bg-neutral-50 text-neutral-900 rounded-full focus:outline-none px-3 py-1 w-[90%] md:flex-1 md:max-w-2xl"
      />
      <div className="flex items-center justify-center space-x-2">
        <Button theme="outline">회원가입</Button>
        <Button theme="default">로그인</Button>
      </div>
    </header>
  );
}
