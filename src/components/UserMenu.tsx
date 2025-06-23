import { useState } from "react";
import User from "./icons/User";

export default function UserMenu() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleMouseOver = () => {
    setIsMenuVisible(true);
  };

  const handleMouseLeave = () => {
    setIsMenuVisible(false);
  };

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      className="size-10 rounded-full bg-violet-500 flex justify-center items-center relative hover:cursor-pointer"
    >
      <User className="text-neutral-100" />
      {isMenuVisible ? (
        <div className="absolute bg-neutral-500 text-neutral-100 flex flex-col space-y-2 w-[80px] p-2 top-10 -left-10 rounded hover:cursor-pointer">
          <span>관심 목록</span>
          <span>로그아웃</span>
        </div>
      ) : null}
    </div>
  );
}
