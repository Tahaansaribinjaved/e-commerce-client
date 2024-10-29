import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
        <motion.a
          className="text-3xl font-bold leading-none"
          href="#"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.1 }}
        >
          <svg className="h-10" viewBox="0 0 10240 10240" aria-label="logo">
            {/* SVG Path */}
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M8284 9162 c-2 -207 -55 -427 -161 -667 ..."
            ></path>
          </svg>
        </motion.a>
        
        <motion.div className="lg:hidden">
          <button className="navbar-burger flex items-center text-blue-600 p-3">
            <motion.svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              whileHover={{ scale: 1.2 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </motion.svg>
          </button>
        </motion.div>

        <motion.ul
          className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {['Home', 'About Us', 'Services', 'Pricing', 'Contact'].map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1, color: '#1D4ED8' }}
              transition={{ duration: 0.3 }}
            >
              <a className="text-sm text-gray-400 hover:text-gray-500" href="#">
                {item}
              </a>
            </motion.li>
          ))}
        </motion.ul>

        <motion.a
          className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-blue-600 hover:bg-blue-700 text-sm text-white font-bold rounded-xl transition duration-200"
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Sign In
        </motion.a>
        
        <motion.a
          className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Sign up
        </motion.a>
      </nav>
    </motion.div>
  );
};

export default Navbar;
