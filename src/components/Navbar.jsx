import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      className={`fixed top-0 w-full  flex justify-between items-center h-16 sm:h-20 px-4 sm:px-6 md:px-12 lg:px-20 z-50 bg-transparent backdrop-blur-xs ${
        theme === "dark" ? " text-white" : "text-black"
      }`}
    >
      <div className="text-xl sm:text-2xl font-bold">
        <Link to="/">
          {" "}
          <span className=" text-purple-600">Abhay's |</span> Portfolio
        </Link>
      </div>

      <button
        onClick={toggleTheme}
        className="px-6 py-2  bg-purple-600 text-white rounded focus:outline-none"
      >
        {theme === "dark" ? "Light" : "Dark"}
      </button>
    </nav>
  );
};

export default Navbar;
