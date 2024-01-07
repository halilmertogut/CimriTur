import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logo from "../images/logo.png";
import "../css/Header.scss";
import axios from "axios";
import { persistor } from '../redux/store'; // Import the persistor
import { loginSuccess } from '../redux/authSlice'; // Import the action to update login state

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showRegisterDropdown, setShowRegisterDropdown] = useState(false); // Yeni state: Giriş dropdown'ı için


  const user = useSelector((state) => state.login?.user);
  const isAuthenticated = useSelector((state) => state.login?.isAuthenticated) || false;
  console.log(user);
  const handleLogout = () => {
    // Oturum bilgilerini temizle
    localStorage.removeItem('userToken');
    // Clear login state upon logout
    persistor.purge();
    window.location.reload();
  };
  const closeLoginDropdown = () => {
    setShowRegisterDropdown(false);
  };

  return(
    <header className={`sticky top-0 z-30 py-2 bg-white transition-shadow duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-24">
        <Link to="/" className="text-xl font-bold">
          <img src={logo} className="logo w-40 h-auto" alt="Your Logo" />
        </Link>

        <div className="flex items-center space-x-4">
          <NavLink to="/" exact className="header-link nav-link text-black mt-2" activeClassName="text-indigo-600">
            Anasayfa
          </NavLink>
          <NavLink to="/turlar" className="header-link nav-link text-black mt-2" activeClassName="header-link font-semibold text-gray-800">
            Turlar
          </NavLink>
          <NavLink to="/rotalar" className="header-link nav-link text-black mt-2" activeClassName="header-link font-semibold text-gray-800">
            Rotalar
          </NavLink>
          <NavLink to="/dahafazla" className="header-link nav-link text-black mt-2" activeClassName="header-link font-semibold text-gray-800">
            Daha Fazla
          </NavLink>
        </div>

        <div className="ml-auto flex items-center space-x-2 mr-8">
          {isAuthenticated ? (
            <div className="relative">
  <div className="cursor-pointer flex items-center" onClick={() => setShowDropdown(!showDropdown)}>
  <span className="font-semibold text-red-500 cursor-pointer nav-link header-link">
  {user.name}
</span>
  </div>
  {showDropdown && (
    <div className="absolute right-0 mt-2 py-2 w-48 bg-white border border-gray-300 shadow-lg rounded-lg">
      <Link to="/edit-profile" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">
        Profil Düzenle
      </Link>
      <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white" onClick={handleLogout}>
        Çıkış Yap
      </button>
    </div>
  )}
</div>

          ) : (
            <>
              <div className="relative">
                <button onClick={() => setShowRegisterDropdown(!showRegisterDropdown)} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full shadow">
                  Kayıt Ol
                </button>
                {showRegisterDropdown && (
                  <div className="absolute right-0 mt-2 py-2 w-48 bg-white border border-gray-300 shadow-lg rounded-lg">
                    <Link to="/register-guide" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white" onClick={closeLoginDropdown}>
                      Turist Rehberi Olarak Kayıt Ol
                    </Link>
                    <Link to="/register" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white" onClick={closeLoginDropdown}>
                      Üye Olarak Kayıt Ol
                    </Link>
                  </div>
                )}
              </div>
              <Link to="/login">
                <button className="bg-black hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-full shadow">
                  Giriş yap
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
