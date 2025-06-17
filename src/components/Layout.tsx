import { Outlet } from "react-router";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="bg-neutral-900">
      <Navbar />
      <main className="p-10 pt-54 md:pt-26">
        <Outlet />
      </main>
    </div>
  );
}
