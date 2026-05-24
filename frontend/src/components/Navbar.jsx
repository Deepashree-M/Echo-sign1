import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Hand, Languages, Radio, BookOpen, Sun, Moon } from "lucide-react";

export default function Navbar({ theme, toggleTheme }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-white/5 dark:bg-[#0D0D1A]/80 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group transition-all"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-500 dark:from-[#AAFF00] dark:to-lime-400 p-0.5 shadow-md shadow-violet-500/10 dark:shadow-[#AAFF00]/10 transition-transform group-hover:scale-105">
              <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-white dark:bg-[#0D0D1A]">
                <Hand className="h-4.5 w-4.5 text-violet-600 dark:text-[#AAFF00] group-hover:rotate-6 transition-transform" />
              </div>
            </div>
            <span className="text-lg font-black tracking-wider text-slate-900 dark:text-white uppercase sm:block">
              Echo<span className="text-violet-600 dark:text-[#AAFF00] font-light">-</span>Sign
            </span>
          </Link>

          {/* Navigation Links & Toggle */}
          <div className="flex items-center gap-2 sm:gap-4">
            <nav className="flex items-center gap-1 sm:gap-2">
              <NavLink
                to="/learn"
                className={({ isActive }) =>
                  `flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all border ${
                    isActive
                      ? "bg-violet-500/10 border-violet-500/20 text-violet-600 dark:bg-[#AAFF00]/10 dark:border-[#AAFF00]/30 dark:text-[#AAFF00]"
                      : "border-transparent text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/5"
                  }`
                }
              >
                <BookOpen className="h-4 w-4" />
                <span className="hidden sm:inline">Sign School</span>
              </NavLink>

              <NavLink
                to="/translate"
                className={({ isActive }) =>
                  `flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all border ${
                    isActive
                      ? "bg-blue-600/10 border-blue-500/20 text-blue-600 dark:text-blue-400"
                      : "border-transparent text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/5"
                  }`
                }
              >
                <Languages className="h-4 w-4" />
                <span className="hidden sm:inline">Translate</span>
              </NavLink>

              <NavLink
                to="/broadcast"
                className={({ isActive }) =>
                  `flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all border ${
                    isActive
                      ? "bg-blue-600/10 border-blue-500/20 text-blue-600 dark:text-blue-400"
                      : "border-transparent text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/5"
                  }`
                }
              >
                <Radio className="h-4 w-4" />
                <span className="hidden sm:inline">Broadcast</span>
              </NavLink>
            </nav>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50/50 text-slate-600 transition-all hover:bg-slate-100 hover:text-slate-950 dark:border-white/10 dark:bg-[#111827]/55 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
