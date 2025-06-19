import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";

const Layout = () => {
  const [searchTerm, setSearchTerm ] = useState("")
  return (
    <>
      <NavBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      <Outlet context={{searchTerm}}/>
    </>
  );
};
export default Layout;