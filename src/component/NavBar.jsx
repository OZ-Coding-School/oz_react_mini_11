import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";

export default function NavBar({ onSearch }) {
  return (
    <nav className="bg-gray-600 text-white px-5 py-4 flex justify-between items-center shadow-md  w-full z-10 top-0 relative">
      <Link to="/" className="text-xl font-bold">
        MovieApp
      </Link>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}
