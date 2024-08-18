import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full py-4 px-6 flex justify-between items-center fixed top-0 z-50 backdrop-blur-md bg-blue bg-opacity-70">
      <div className="text-white text-3xl font-bold">
        <a href="#hero" className="hover:text-gray-400">My Portfolio</a>
      </div>
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-white text-3xl focus:outline-none">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div className={`lg:flex ${isOpen ? 'flex' : 'hidden'} flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6 text-white text-xl absolute lg:relative top-full left-0 lg:top-0 bg-blue bg-opacity-90 lg:bg-transparent w-full lg:w-auto p-6 lg:p-0`}>
        <a href="#projects" className="hover:text-gray-400">Projects</a>
        <a href="#technology" className="hover:text-gray-400">Technology</a>
        <a href="#contact" className="hover:text-gray-400">Contact</a>
        <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6 text-white text-2xl pt-4 lg:pt-0">
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
      </div>
    </nav>
  );
};

export default Navbar;
