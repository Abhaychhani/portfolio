import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useTheme } from './context/ThemeContext'; 
import Navbar from './components/Navbar';

import Home from './Pages/Home';

function App() {
  const { theme } = useTheme();

  return (
    <Router basename="/portfolio">
      <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
        <Navbar />
        <main className="">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
