import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { HashLink as Link } from 'react-router-hash-link';
import { Layout, Row, Col, Typography, Space, Tooltip } from 'antd';

const { Footer } = Layout;
const { Title } = Typography;

const CustomFooter = () => {
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
    <Footer
      ref={footerRef}
      className="bg-white text-black overflow-hidden py-10 px-4 md:px-10 lg:px-20 xl:px-40 box-border opacity-0 translate-y-10 shadow-lg transition duration-500 ease-out border border-top mt-20 font-montserrat"
    >
      <Row gutter={[32, 32]}>
        <Col xs={24} md={8} className="text-center md:text-left">
          <img
            className="mx-auto md:mx-0 w-40 h-auto"
            src="/logo-1.svg"
            alt="Company Logo"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <p>🌍 Gezginlerin Buluşma Noktası</p>
          <Space>
            <Tooltip title="Instagram">
              <FaInstagram className="w-6 h-6 cursor-pointer hover:scale-125 transition-transform duration-300 ease-in-out" />
            </Tooltip>
            <Tooltip title="Twitter">
              <FaTwitter className="w-6 h-6 cursor-pointer hover:scale-125 transition-transform duration-300 ease-in-out" />
            </Tooltip>
            <Tooltip title="LinkedIn">
              <FaLinkedin className="w-6 h-6 cursor-pointer hover:scale-125 transition-transform duration-300 ease-in-out" />
            </Tooltip>
          </Space>
        </Col>
        <Col xs={24} md={8}>
          <Title level={4} className="font-bold">Hakkımızda daha fazlası</Title>
          <ul className="space-y-2">
            <li>
              <Link to="/about#story" className="hover:underline">
                Hikayemiz
              </Link>
            </li>
            <li>
              <Link to="/about#team" className="hover:underline">
                Ekibimiz
              </Link>
            </li>
            <li>
              <Link to="/about#mission" className="hover:underline">
                Misyonumuz
              </Link>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                Değerlerimiz
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                İletişim
              </a>
            </li>
          </ul>
        </Col>
        <Col xs={24} md={8}>
          <Title level={4} className="font-bold">Servisler</Title>
          <ul className="space-y-2">
            <li>
              <a href="./dashboard-landing" className="hover:underline">
                Acenta
              </a>
            </li>
            <li>
              <a href="/GuideSignupForm" className="hover:underline">
                Freelance Tur Rehberi
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                SEO Servisleri
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      <div className="mt-10 border-t-2 border-gray-200 pt-4 text-center">
        <p>© 2024 CimriTur. Her hakkı saklıdır.</p>
        <Space className="flex justify-center mt-4">
          <a href="#" className="hover:underline">
            Gizlilik Politikası
          </a>
          <a href="#" className="hover:underline">
            Kullanım Koşulları
          </a>
          <a href="#" className="hover:underline">
            Çerez Politikası
          </a>
        </Space>
      </div>
    </Footer>
  );
};

export default CustomFooter;
