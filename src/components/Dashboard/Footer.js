// Footer.js
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerRef = useRef();

  useEffect(() => {
    gsap.fromTo(footerRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" });
  }, []);

  return (
    <footer ref={footerRef} className="bg-gray-900 text-gray-300 py-8 h-72">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="text-lg font-semibold">
            <Link to="/" className="text-indigo-400 hover:text-indigo-300">
              CimriTur Dashboard
            </Link>
          </div>
          <nav className="flex space-x-4 mt-4 lg:mt-0">
            <Link to="/about" className="hover:text-white transition-colors duration-300">About Us</Link>
            <Link to="/features" className="hover:text-white transition-colors duration-300">Features</Link>
            <Link to="/pricing" className="hover:text-white transition-colors duration-300">Pricing</Link>
            <Link to="/contact" className="hover:text-white transition-colors duration-300">Contact</Link>
          </nav>
        </div>
        <div className="text-center mt-8 text-gray-400">
          &copy; {new Date().getFullYear()} CimriTur Dashboard. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
