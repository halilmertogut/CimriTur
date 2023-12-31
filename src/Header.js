import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Modal from "./Modal"; // Make sure you have this component
import logo from "./logo.png"; // Path to your logo image
import "./Header.scss";

const Header = () => {
  const [hasShadow, setHasShadow] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [user, setUser] = useState(null); // State to hold user info

  useEffect(() => {
    const handleScroll = () => {
      const showShadow = window.scrollY > 10;
      setHasShadow(showShadow);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogin = async (email, password) => {
    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data); // Log the entire response data
        setUser({ name: data.user.name, imageUrl: data.user.imageUrl });
        setIsLoginModalOpen(false);
      } else {
        console.error("Login failed:", data.error);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const handleRegister = async (name, email, password) => {
    try {
      const response = await fetch("http://localhost:8080/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        setUser({ name: name, imageUrl: "https://via.placeholder.com/150" }); // Update with actual user data
        setIsRegisterModalOpen(false); // Close the modal upon successful registration
      } else {
        console.error("Registration failed:", data.error); // Handle errors
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <header
      className={`sticky top-0 z-30 text-lg py-2 header h-24 ${
        hasShadow ? "shadow-lg rounded-sm scrolled" : ""
      }`}
    >
      <div className="bg-transparent mx-auto flex items-center justify-between">
        <NavLink to="/" className="text-xl font-bold">
          <img src={logo} className="logo w-40 h-auto" alt="Your Logo"></img>
        </NavLink>

        {/* Navigation Links */}
        <div className="flex items-center space-x-4">
          <NavLink
            to="/"
            exact
            className="header-link nav-link text-black mt-2"
            activeClassName="text-indigo-600"
          >
            Anasayfa
          </NavLink>
          <NavLink
            to="/turlar"
            className="header-link nav-link text-black mt-2"
            activeClassName="header-link font-semibold text-gray-800"
          >
            Turlar
          </NavLink>
          <NavLink
            to="/rotalar"
            className="header-link nav-link text-black mt-2"
            activeClassName="header-link font-semibold text-gray-800"
          >
            Rotalar
          </NavLink>
          <NavLink
            to="/dahafazla"
            className="header-link nav-link text-black mt-2"
            activeClassName="header-link font-semibold text-gray-800"
          >
            Daha Fazla
          </NavLink>
        </div>

        {/* Authentication Buttons or User Info */}
        <div className="ml-auto flex items-center space-x-2 mr-8">
          {user ? (
            <div className="flex items-center space-x-2">
              <span>{user.name}</span>
              <img
                src={user.imageUrl}
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
            </div>
          ) : (
            <>
              <button
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full shadow"
                onClick={() => setIsLoginModalOpen(true)}
              >
                Giriş
              </button>
              <button
                className="bg-black hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-full shadow"
                onClick={() => setIsRegisterModalOpen(true)}
              >
                Kayıt Ol
              </button>
            </>
          )}
        </div>
      </div>

      {/* Login and Register Modals */}
      <Modal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={handleLogin}
        isRegister={false} // Indicate that this is the login modal
      />
      <Modal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
        onRegister={handleRegister}
        isRegister={true} // Indicate that this is the register modal
      />
    </header>
  );
};
export default Header;
