import Moon from "./icons/Moon";
import Sun from "./icons/Sun";
import useDarkModeStore from "../hooks/zustand/useIsDarkStore";

export default function DarkModeSwitch() {
  const isDark = useDarkModeStore((state) => state.isDark);
  const switchDarkMode = useDarkModeStore((state) => state.switchDarkMode);

  const handleClick = () => {
    switchDarkMode();
  };

  return (
    <button
      className={`rounded-full border-2 relative ${
        isDark ? "border-neutral-100" : "border-neutral-900"
      }`}
      onClick={handleClick}
    >
      <div
        className={`absolute  z-10 size-7 rounded-full top-0.5 transition-all left-0.5 ease-in-out duration-300 ${
          isDark ? "bg-neutral-100" : "translate-x-10 bg-neutral-900"
        }`}
      />
      <div className="flex space-x-4 justify-between items-center p-1">
        <Sun />
        <Moon />
      </div>
    </button>
  );
}
