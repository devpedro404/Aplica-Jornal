import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full flex items-center justify-center text-gray-800 dark:text-gray-200"
      aria-label="Alternar tema"
    >
      {isDark ? (
        <span className="material-symbols-outlined text-yellow-400 text-xl">
          light_mode
        </span>
      ) : (
        <span className="material-symbols-outlined text-gray-700 text-xl">
          dark_mode
        </span>
      )}
    </button>
  );
};

export default ThemeToggle;