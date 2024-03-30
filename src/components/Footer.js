import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.to(footerRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power1.out",
    });
  }, []);

  return (
    <footer
      ref={footerRef}
      className="w-full bg-white text-black overflow-hidden py-10 px-4 md:px-10 lg:px-20 xl:px-40 box-border opacity-0 translate-y-10 shadow-lg transition duration-500 ease-out border border-top mt-20 font-montserrat h-48"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center md:text-left">
        <div className="space-y-4">
          <img
            className="mx-auto md:mx-0 w-40 h-auto"
            src="/logo-1.svg"
            alt="Company Logo"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <p>Innovating for a brighter tomorrow.</p>
          <div className="flex justify-center md:justify-start space-x-4">
            <FaInstagram className="w-6 h-6 cursor-pointer hover:scale-125 transition-transform duration-300 ease-in-out" />
            <FaTwitter className="w-6 h-6 cursor-pointer hover:scale-125 transition-transform duration-300 ease-in-out" />
            <FaLinkedin className="w-6 h-6 cursor-pointer hover:scale-125 transition-transform duration-300 ease-in-out" />
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="font-bold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Our Story
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Our Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Our Mission
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Our Values
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold">Services</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Web Design
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Graphic Design
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Digital Marketing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                SEO Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Content Writing
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t-2 border-gray-200 pt-4 text-center">
        <p>© 2024 CimriTur. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <a href="#" className="hover:underline">
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
