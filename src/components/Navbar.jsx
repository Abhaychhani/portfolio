import React from 'react';
import { useTheme } from '../context/ThemeContext'; 
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={`flex justify-between items-center p-4 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className="text-lg font-bold">
        <Link to="/">Abhay's Portfolio</Link>
      </div>
     
      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-blue-500 text-white rounded focus:outline-none"
      >
        {theme === 'dark' ? 'Light' : 'Dark'}
      </button>
    </nav>
  );
};

export default Navbar;
