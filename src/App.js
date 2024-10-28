// Home.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} min-h-screen`}>
      <nav className={`flex justify-between items-center p-4 ${darkMode ? 'bg-gray-900' : 'bg-gray-200'} shadow`}>
        <h1 className="text-xl font-bold">E-commerce App</h1>
        <div className="flex items-center space-x-4">
          <a href="/login" className="pl-button py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-600 transition duration-300">
            Login
          </a>
          <a href="/register" className="pl-button py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-600 transition duration-300">
            Register
          </a>
          <a href="/products" className="pl-button py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-600 transition duration-300">
            Products
          </a>
          <button
            onClick={toggleTheme}
            className={`py-2 px-4 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-300'} transition duration-300`}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </nav>

      <div className={`text-center py-16 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
        <h2 className="text-3xl font-semibold">Welcome to Our E-commerce Store!</h2>
        <p className="mt-4">Find the best products at unbeatable prices!</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 p-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <motion.div
            key={index}
            className={`rounded-lg shadow-md p-4 transition duration-300 ${darkMode ? 'bg-gray-900' : 'bg-white'} text-black`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className={`font-semibold text-lg ${darkMode ? 'text-white' : 'text-black'}`}>Product {index + 1}</h3>
            <p className={`mt-2 ${darkMode ? 'text-gray-400' : 'text-black'}`}>Product description goes here.</p>
            <button className="mt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
              Add to Cart
            </button>
          </motion.div>
        ))}
      </div>

      <footer className={`text-center py-4 ${darkMode ? 'bg-gray-900' : 'bg-gray-200'}`}>
        <p>&copy; 2024 E-commerce App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
