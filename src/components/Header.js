import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logo from "../images/logo.png";
import "../css/Header.scss";
import axios from "axios";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  const xUser = useSelector((state) => state.login?.user);
  console.log(xUser);
  useEffect(() => {
    console.log("içerdeyiz");
    const token = localStorage.getItem('userToken');
    console.log("Token:", token);
    if (token) {
      axios.get('http://localhost:3000/validateToken', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      })
      .then(response => {
        console.log("Response received:", response);
        console.log("Status code:", response.status);
        const data = response.data;
        console.log("API Response:", data);
        setUser(data.user);
        setIsAuthenticated(true);
        console.log(user);
      })
      .catch(error => {
        console.error('Token validation error:', error);
      });
    }
  }, []);


  const handleLogout = () => {
    // Oturum bilgilerini temizle
    localStorage.removeItem('userToken');
    window.location.reload();

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
    <span className="font-semibold text-gray-700">{user.name}</span>
    <img src={user.imageUrl} alt="Profile" className="w-10 h-10 rounded-full" />
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
              <Link to="/giris">
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full shadow">
                  Giriş
                </button>
              </Link>
              <Link to="/kayit">
                <button className="bg-black hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-full shadow">
                  Kayıt Ol
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
