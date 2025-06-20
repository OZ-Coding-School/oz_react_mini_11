import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen w-screen bg-[#141414] text-white">
      <NavBar />
      <div className="px-8 py-6 max-w-[1280px] mx-auto">
        <Outlet />
      </div>
    </div>
  );
}
