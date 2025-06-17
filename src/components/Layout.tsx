import { Outlet } from "react-router";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <main className="bg-neutral-900 p-10 pt-16">
        <Outlet />
      </main>
    </div>
  );
}
