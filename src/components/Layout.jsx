import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-pink-100 to-rose-100 text-rose-900">
      <NavBar />
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
