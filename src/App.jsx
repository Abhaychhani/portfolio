import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useTheme } from './context/ThemeContext'; 
import Navbar from './components/Navbar';

import Home from './Pages/Home';

function App() {
  const { theme } = useTheme();

  return (
    <Router basename="/portfolio">
      <div className={`relative ${theme === 'dark' ? 'bg-gray-950 text-white' : 'bg-white text-black'}`}>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
