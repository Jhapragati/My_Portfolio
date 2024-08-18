import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav
      className="w-full py-4 px-6 flex justify-between items-center fixed top-0 z-50 backdrop-blur-md bg-blue bg-opacity-70"
    >
      <div className="text-white text-3xl font-bold">
        <a href="#hero" className="hover:text-gray-400">My Portfolio</a>
      </div>
      <div className="flex items-center space-x-6 text-white text-xl">
        <a href="#projects" className="hover:text-gray-400">Projects</a>
        <a href="#technology" className="hover:text-gray-400">Technology</a>
        <a href="#contact" className="hover:text-gray-400">Contact</a>
      </div>
      <div className="flex items-center space-x-6 text-white text-2xl">
        <a href="https://www.linkedin.com/in/pragatiiijha/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Jhapragati" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://twitter.com/Pragatiiiii_j" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
