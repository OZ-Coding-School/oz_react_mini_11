import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <NavBar />
      <div className="px-8 py-6">
        <Outlet />
      </div>
    </>
  );
}
