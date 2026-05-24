import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Translate from './pages/Translate';
import Broadcast from './pages/Broadcast';
import Learn from './pages/Learn';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-800 dark:bg-[#0D0D1A] dark:text-[#F1F1EE] transition-colors duration-200">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/translate" element={<Translate />} />
        <Route path="/broadcast" element={<Broadcast />} />
        <Route path="/learn" element={<Learn />} />
      </Routes>
    </div>
  );
}