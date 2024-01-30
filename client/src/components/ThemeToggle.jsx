import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div
      className={`relative w-12 h-6 rounded-full p-1 flex items-center justify-between ${
        theme === 'dark' ? 'bg-black' : 'bg-gray-600'
      } transition-colors duration-300 ease-in-out cursor-pointer`}
      onClick={toggleTheme}
    >
      <FaSun
        className={`text-yellow-500 text-2xl z-10 ${
          theme === 'dark' ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <div
        className={`absolute w-5 h-5 rounded-full ${
          theme === 'dark' ? 'bg-gray-500' : 'bg-gray-800'
        } shadow-md transform transition-transform duration-300 ease-in-out ${
          theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
        }`}
      ></div>
      <FaMoon
        className={`text-gray-100 text-2xl z-10 ${
          theme === 'dark' ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};

export default Toggle;
