import React, { useEffect, useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { motion } from 'framer-motion';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { gsap } from 'gsap';
import logo from '../images/logo.png';
import Login from './Login'; // Eklediğimiz Login bileşeni

const promotionLinks = ['Promosyonlar', 'İndirimler', 'Özel Teklifler'];
const navigationLinks = [
  { name: "Anasayfa", href: "/" },
  { name: "Keşfet", href: "/filtration-page" },
  { name: "Hakkımızda", href: "#about" },
  { name: "İletişim", href: "#contact" },
];

export default function Navbar() {
  const handleClickButton = () => {
    setIsLoginOpen(true);
    console.log(isLoginOpen);
  }

  const navigationButtons = [
    { name: 'Kayıt Ol', href: '#home' },
    { name: 'Giriş', onClick: handleClickButton}, // onClick event ekledik
  ];

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false); // Login bileşeninin açılıp açılmadığını izlemek için state
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
    <div className="bg-white shadow-sm sticky top-0 z-50 font-montserrat">
      <div className="bg-white">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between space-x-4  text-sm text-black">
            <div className="flex-grow"></div>
            {promotionLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="hover:underline promotion-link m-1"
              >
                {link}
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
                    <span className="sr-only">CimriTur</span>
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 20,
                      }}
                      src={logo} // Adjust the logo path
                      alt="CimriTur"
                      className="h-16 w-auto bg-white rounded-full"
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
                {!isLoggedIn && (
                    <Popover.Group className="flex justify-end lg:w-0 lg:flex-1 space-x-5">
                      {navigationButtons.map((item) => (
                        <motion.button key={item.name} // Replace with your actual navigation logic
                          whileHover={{ scale: 1.1 }}
                          className="text-white bg-black font-semibold hover:bg-gray-100 hover:text-red-500 transition duration-300 ease-in-out rounded-full px-4 py-2 flex items-center justify-center focus:outline-none self-center"
                          onClick={item.onClick}>
                          {item.name}
                        </motion.button>
                      ))}
                    </Popover.Group>
                  )}
              </div>
            </div>

            <Transition
              as={React.Fragment}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                  <div className="pt-5 pb-6 px-5 space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <img
                          src="/logo.svg"
                          alt="CimriTur"
                          className="h-8 w-auto"
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400">
                          <span className="sr-only">Close menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    {navigationLinks.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-base font-medium text-gray-900 hover:bg-gray-50 block px-3 py-2 rounded-md"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>

      {/* Login bileşeni */}
      <Login open={isLoginOpen} setOpen={setIsLoginOpen} />
    </div>
  );
}