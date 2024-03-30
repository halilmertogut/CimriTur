import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const buttons = [
    { name: "Member Login", href: "/member-login" },
    { name: "Become Member", href: "/become-member" }
  ];
  useEffect(() => {
    // Animate navbar links and the menu toggle button on component mount
    gsap.from(".navbar-item", {
      duration: 0.8,
      opacity: 0,
      y: -20,
      stagger: 0.1,
      ease: "power2.out",
    });
  }, []);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
    // Adjust height dynamically based on the content for the mobile menu
    const menuHeight = isExpanded
      ? 0
      : document.querySelector(".mobile-menu").scrollHeight;
    gsap.to(".mobile-menu", {
      height: menuHeight,
      paddingTop: isExpanded ? 0 : 20,
      paddingBottom: isExpanded ? 0 : 20,
      duration: 0.5,
      ease: "power1.inOut",
    });
  };

  return (
    <header className="sticky top-0 bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg border-b border-gray-200 z-50 shadow-sm font-montserrat">
      <div className="container mx-auto px-4 py-4 lg:px-6 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-indigo-600 navbar-item">
          Cimri Tur | <span className="text-gray-800">Dashboard</span>
        </Link>
        
        <nav className="hidden md:flex space-x-4">
          {buttons.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="navbar-item inline-flex items-center justify-center px-5 py-3 text-sm text-center text-indigo-100 border border-indigo-500 rounded-lg shadow-sm cursor-pointer hover:text-white bg-gradient-to-br from-indigo-500 via-indigo-500 to-indigo-800"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-indigo-500 focus:outline-none navbar-item"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-expanded={isExpanded}
            >
              {isExpanded ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className="mobile-menu absolute md:hidden w-full bg-white shadow-lg rounded-b-lg overflow-hidden transition-all duration-300 ease-linear"
          style={{ top: "100%", overflow: "hidden", height: 0 }} // Ensure the menu is initially collapsed
        >
          <div className="p-4">
            {buttons.map((item) => (
              <Link
                key={item}
                href={item.href}
                className="block text-gray-700 hover:text-indigo-500 px-3 py-2 rounded-md text-base font-medium navbar-item"
                onClick={() => setIsExpanded(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
