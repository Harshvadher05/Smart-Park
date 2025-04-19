import React from "react";
import { Link } from "react-router";

function Header() {
  return (
    <header className="bg-[#1D1A31] text-white flex items-center justify-between px-8 py-6">
      <Link to="/">
        <h1 className="text-2xl font-bold">SmartPark</h1>
      </Link>
      <ul className="flex gap-4 text-lg font-semibold">
        <Link
          to="/home"
          className="hover:opacity-100 opacity-80 hover:bg-[#a5969d] hover:text-[#1D1A31] rounded-xl px-4 py-2 hover:scale-110 transition-transform"
        >
          Home
        </Link>
        <Link
          to="/About"
          className="hover:opacity-100 opacity-80 hover:bg-[#a5969d] hover:text-[#1D1A31] rounded-xl px-4 py-2 hover:scale-110 transition-transform"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="hover:opacity-100 opacity-80 hover:bg-[#a5969d] hover:text-[#1D1A31] rounded-xl px-4 py-2 hover:scale-110 transition-transform"
        >
          Contact
        </Link>
      </ul>
    </header>
  );
}

export default Header;
