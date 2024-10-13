import React, { useState } from 'react';
import logo from '../../public/logo.png';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for the hamburger and close menu

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between items-center bg-slate-200 h-20 md:h-32 px-6">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="h-10 md:h-16 w-auto" />
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          {isOpen ? (
            <FaTimes className="text-2xl text-blue-700" />
          ) : (
            <FaBars className="text-2xl text-blue-700" />
          )}
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex md:space-x-6 text-lg">
        <Link to="/" className="hover:text-blue-700">Home</Link>
        <Link to="/contact" className="hover:text-blue-700">Contact</Link>
        <Link to="/about" className="hover:text-blue-700">About</Link>
        <Link to="/feedback" className="hover:text-blue-700">Feedback</Link>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <nav className="md:hidden absolute top-20 left-0 w-full bg-slate-600 text-white flex flex-col items-center space-y-4 py-4">
          <Link to="/" className="text-lg hover:text-blue-700" onClick={toggleMenu}>Home</Link>
          <Link to="/contact" className="text-lg hover:text-blue-700" onClick={toggleMenu}>Contact</Link>
          <Link to="/about" className="text-lg hover:text-blue-700" onClick={toggleMenu}>About</Link>
          <Link to="/feedback" className="text-lg hover:text-blue-700" onClick={toggleMenu}>Feedback</Link>
        </nav>
      )}

      {/* Login/Register Buttons */}
      <div className="hidden md:flex space-x-4">
        <button className="text-blue-500">Login</button>
        <button className="bg-blue-700 px-4 py-2 rounded-md text-white text-lg">Register</button>
      </div>
    </header>
  );
}

export default Header;
