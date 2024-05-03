import React, { useEffect, useState, useRef } from 'react';
import { MenuIcon, XIcon, HomeIcon, SearchIcon, NewspaperIcon, InformationCircleIcon, PhoneIcon, UserCircleIcon, CogIcon, LogoutIcon } from '@heroicons/react/outline';
import { motion } from 'framer-motion';
import { MdDiscount } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
import { gsap } from 'gsap';
import logo from '../../images/logo.png';
import avatar from '../avatar-placeholder.png';
import Login from '../login-signup/Login';
import PromotionModal from './PromotionModal';
import { useDispatch, useSelector } from 'react-redux';
import { removeCredentials } from '../../redux/authSlice';

const promotionLinks = [
  { name: "Acenta Giriş", href: "/dashboard-landing", icon: MdDashboard },
  { name: "Freelance Tur Rehberi Giriş", href: "/GuideSignupForm", icon: MdDiscount },
  { name: "Promosyonlar", href: "#", icon: CiDiscount1, action: 'openModal' },  // Trigger for modal
];

const navigationLinks = [
  { name: "Anasayfa", href: "/"},
  { name: "Keşfet", href: "/explore" },
  { name: "Blog", href: "/blog" },
  { name: "Hakkımızda", href: "/about" },
  { name: "İletişim", href: "/contact" },
];

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [avatarDropdownOpen, setAvatarDropdownOpen] = useState(false);
  const [isPromotionOpen, setPromotionOpen] = useState(false);
  const avatarRef = useRef(null);
  const dispatch = useDispatch();
  const handleLogout = (event) => {
    event.preventDefault();
    dispatch(removeCredentials());
    window.location.replace('/');
    // Additional cleanup actions if needed, like redirecting
};

  useEffect(() => {
    gsap.from(".nav-item", {
      duration: 0.5,
      opacity: 0,
      y: -20,
      stagger: 0.1,
      ease: "power1.out",
    });
    gsap.from(".promotion-link", {
      duration: 0.5,
      opacity: 0,
      x: 20,
      stagger: 0.1,
      ease: "power1.out",
      delay: 0.2,
    });
  }, []);

  useEffect(() => {
    const buttons = document.querySelectorAll('.nav-button');

    buttons.forEach(button => {
      const defaultColor = window.getComputedStyle(button).getPropertyValue('background-color');
      button.addEventListener('mouseenter', () => {
        gsap.to(button, { duration: 0.3, backgroundColor: '#2563EB' });
      });
      button.addEventListener('mouseleave', () => {
        gsap.to(button, { duration: 0.3, backgroundColor: defaultColor });
      });
    });

    function handleClickOutside(event) {
      if (avatarRef.current && !avatarRef.current.contains(event.target)) {
        setAvatarDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const IconComponent = ({ icon }) => {
    const Icon = icon;
    return <Icon className="w-5 h-5 mr-2 text-red-500" aria-hidden="true" />;
  };
  const handlePromotionClick = (action) => {
    if (action === 'openModal') {
      setPromotionOpen(true);
    }
  };

  const user = useSelector(state => state.auth.user);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <div className="bg-opacity-0 backdrop-filter backdrop-blur-lg shadow-sm sticky top-0 z-50 font-montserrat">
       <div className="bg-opacity-90 backdrop-filter backdrop-blur-lg">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between space-x-4 text-sm text-black">
            <div className="flex-grow"></div>
            {promotionLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center hover:underline promotion-link m-1"
                onClick={() => handlePromotionClick(item.action)}
              >
                <IconComponent icon={item.icon} />
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      </div>
      <PromotionModal isOpen={isPromotionOpen} onClose={() => setPromotionOpen(false)} />


      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                }}
                src={logo}
                alt="Logo"
                className="h-16 w-auto rounded-full"
                />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden md:flex space-x-10">
            {navigationLinks.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{
                  scale: 1.1,
                  translateY: -2,
                  textShadow: "0px 0px 8px rgba(255,255,255,0.5)",
                  color: "red",
                }}
                className="flex items-center text-base font-medium nav-item hover:bg-gray-50 hover:rounded-full px-4 py-2"
              >
                {item.name}
              </motion.a>
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div ref={avatarRef} className="relative">
                <img
                  src={avatar}
                  alt="User avatar"
                  className="w-10 h-10 rounded-full cursor-pointer"
                  onClick={() => setAvatarDropdownOpen(!avatarDropdownOpen)}
                />
                {avatarDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 py-2 bg-white rounded-lg shadow-xl">
                     <a href="/profile" className="flex items-center block px-4 py-2 text-md font-bold text-gray-800 hover:bg-gray-100 text-center pl-8">
                      {user.firstName} {user.lastName}
                    </a>
                    <a href="/profile" className="flex items-center block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                      <UserCircleIcon className="w-5 h-5 mr-2" aria-hidden="true" />Account
                    </a>
                    {/* Logout option for demonstration */}
                    <a href="#" onClick={handleLogout} className="flex items-center block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                      <LogoutIcon className="w-5 h-5 mr-2" aria-hidden="true" />Logout
                    </a>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-4">
              <a href="/register" className="flex items-center justify-center text-sm px-6 py-3 bg-gradient-to-r from-red-500 to-red-700 text-white rounded-lg shadow-md hover:opacity-80 transition duration-300 transform hover:scale-105">
                Kayıt Ol
              </a>
              <button onClick={() => setIsLoginOpen(true)} className="flex items-center justify-center text-sm px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg shadow-md hover:from-blue-700 hover:to-blue-900 transition duration-300 transform hover:scale-105">
                Giriş Yap
              </button>
            </div>
            
            )}
          </div>
        </div>
      </div>

      <Login open={isLoginOpen} setOpen={setIsLoginOpen} />

      <div className={`absolute top-0 inset-x-0 p-2 transition transform origin-top-right ${mobileMenuOpen ? 'block' : 'hidden'} z-50`}>
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div>
                <img className="h-8 w-auto" src={logo} alt="Your Logo" />
              </div>
              <div className="-mr-2">
                <button type="button" onClick={() => setMobileMenuOpen(false)} className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Kapat</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8">
                {(navigationLinks).map((item) => (
                  <a key={item.name} href={item.href} className="flex items-center text-base font-medium text-gray-900 hover:text-gray-700">
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
          <div className="py-6 px-5 space-y-6">
            {isAuthenticated ? (
              <div>
                <a href="#" className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-red-700">
                  {user.firstName} {user.lastName}
                </a>
                <a href="/profile" className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-red-700">
                  <UserCircleIcon className="w-6 h-6 mr-2" aria-hidden="true" />Profile
                </a>
                <a onClick={handleLogout} className="mt-4 flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700">
                  <LogoutIcon className="w-6 h-6 mr-2" aria-hidden="true" />Logout
                </a>
              </div>
            ) : (
              <div>
                <a onClick={() => setIsLoginOpen(true)} className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:opacity-90">
                  Giriş Yap
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Üye değil misiniz? <a href="/register" className="text-blue-600 hover:opacity-90">Kayıt Ol</a>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
