import React, { useEffect, useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { motion } from 'framer-motion';
import { MenuIcon, XIcon, UserIcon, CogIcon } from '@heroicons/react/outline';
import { gsap } from 'gsap';
import logo from '../images/logo.png';
import avatar from './avatar-placeholder.png';
import Login from './Login';

const promotionLinks = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Promosyonlar", href: "#discover" },
  { name: "İndirim", href: "#about" },
];

const navigationLinks = [
  { name: "Anasayfa", href: "/" },
  { name: "Keşfet", href: "/filtration-page" },
  { name: "Blog", href: "/Blog" },
  { name: "Hakkımızda", href: "/aboutus" },
  { name: "İletişim", href: "/ContactUs" },
];

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

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

  return (
    <div className="bg-opacity-90 backdrop-filter backdrop-blur-lg shadow-sm sticky top-0 z-50 font-montserrat">
      <div className="bg-opacity-90 backdrop-filter backdrop-blur-lg">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between space-x-4 text-sm text-black">
            <div className="flex-grow"></div>
            {promotionLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:underline promotion-link m-1"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      </div>

      <Popover as="header">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                  <a href="#">
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
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Open menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
                <Popover.Group as="nav" className="hidden md:flex space-x-10">
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
                      className="text-base font-medium nav-item hover:bg-gray-50 hover:rounded-full px-4 py-2"
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </Popover.Group>
                {!isLoggedIn ? (
                  <div className="flex items-center justify-end lg:w-0 lg:flex-1 space-x-4">
                    <a href="#home" className="text-sm px-4 py-2 bg-blue-500 text-white rounded-lg">Kayıt Ol</a>
                    <button onClick={() => setIsLoginOpen(true)} className="text-sm px-4 py-2 bg-blue-500 text-white rounded-lg">Giriş</button>
                  </div>
                ) : (
                  <Popover className="relative">
                    <Popover.Button className="flex items-center justify-center w-10 h-10 rounded-full">
                      <img src={avatar} alt="User avatar" className="rounded-full" />
                    </Popover.Button>
                    <Transition
                      as={React.Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 w-48 max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            <a href="#" className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50">
                              <CogIcon className="w-6 h-6 text-gray-400" aria-hidden="true" />
                              <span className="ml-3">Settings</span>
                            </a>
                            <a href="#" className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50">
                              <UserIcon className="w-6 h-6 text-gray-400" aria-hidden="true" />
                              <span className="ml-3">Account</span>
                            </a>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </Popover>
                )}
              </div>
            </div>
          </>
        )}
      </Popover>

      <Login open={isLoginOpen} setOpen={setIsLoginOpen} />
    </div>
  );
}
