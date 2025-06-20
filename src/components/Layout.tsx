import { Outlet } from "react-router";
import Navbar from "./Navbar";
import useDarkModeStore from "../hooks/zustand/useIsDarkStore";

export default function Layout() {
  const isDark = useDarkModeStore((state) => state.isDark);
  return (
    <div
      className={` min-h-screen ${isDark ? "bg-neutral-900" : "bg-neutral-50"}`}
    >
      <Navbar />
      <main className="p-2 pt-54 md:pt-26">
        <Outlet />
      </main>
    </div>
  );
}
