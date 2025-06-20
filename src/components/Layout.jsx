import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function Layout() {
  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white">
      <NavBar />
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
