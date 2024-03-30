// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // GSAP animation for the mobile menu
  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
    gsap.to('.mobile-menu', {
      duration: 0.5,
      ease: 'power1.inOut',
      height: isExpanded ? 0 : 'auto',
      paddingTop: isExpanded ? 0 : '1rem',
      paddingBottom: isExpanded ? 0 : '1rem',
    });
  };

  return (
    <header className="sticky top-0 bg-opacity-90 backdrop-filter backdrop-blur-lg border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 py-4 lg:px-6 flex justify-between items-center transition-all duration-300 ease-in-out">
        <Link to="/" className="text-3xl font-bold text-indigo-600">
          CimriTur<span className="text-gray-800">Dashboard</span>
        </Link>
        <nav className="hidden md:flex space-x-4">
          {['Features', 'Pricing', 'About', 'Contact'].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="text-gray-700 hover:text-indigo-500 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out"
            >
              {item}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 hover:text-indigo-500 focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <div
          className={`absolute md:hidden w-full bg-white bg-opacity-95 backdrop-filter backdrop-blur transition-all duration-300 ease-linear ${
            isExpanded ? 'top-16' : 'top-[-490px]'
          }`}
        >
          <div className="p-4">
            {['Features', 'Pricing', 'About', 'Contact'].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="block text-gray-700 hover:text-indigo-500 px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out"
                onClick={() => setIsExpanded(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
