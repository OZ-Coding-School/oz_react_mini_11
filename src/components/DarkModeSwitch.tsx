import { useState } from "react";
import Moon from "./icons/Moon";
import Sun from "./icons/Sun";

export default function DarkModeSwitch() {
  const [isDark, setIsDark] = useState(false);

  const handleClick = () => {
    setIsDark(!isDark);
  };

  return (
    <button
      className="rounded-full border-neutral-100 border-2 relative "
      onClick={handleClick}
    >
      <div
        className={`absolute bg-neutral-100 z-10 size-7 rounded-full top-0.5 transition-all left-0.5 ${
          isDark ? "translate-x-10" : ""
        }`}
      />
      <div className="flex space-x-4 justify-between items-center p-1">
        <Sun />
        <Moon />
      </div>
    </button>
  );
}
