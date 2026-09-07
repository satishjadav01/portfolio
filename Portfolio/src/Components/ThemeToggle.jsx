import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-surface-hover border border-border-subtle text-text-secondary hover:text-orange-500 hover:border-orange-500/50 transition-all duration-300 shadow-sm flex items-center justify-center cursor-pointer"
      aria-label="Toggle Theme"
    >
      {isLight ? <FiMoon size={20} /> : <FiSun size={20} />}
    </button>
  );
};

export default ThemeToggle;
