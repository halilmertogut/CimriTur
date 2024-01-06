// Footer.js
import React from 'react';
import { FaLinkedin, FaXing, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-200 text-white">
      <div className="container mx-auto px-6 py-10 md:flex md:justify-between md:items-center">
        <div className="mb-6 md:mb-0">
          <a href="/" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap">CimriTur</span>
          </a>
          <p className="mt-2">Çankaya, Cinnah Cd. Apt.No:35 Daire No:4, 06690 Çankaya/Ankara</p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase">CimriTur</h2>
            <ul className="text-gray-400">
              <li className="mb-4">
                <a href="#" className="hover:underline">Boş</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Boş</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Boş</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase">Yasal</h2>
            <ul className="text-gray-400">
              <li className="mb-4">
                <a href="#" className="hover:underline">Limitler ve Kurallar</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Kullanıcı Sözleşmesi</a>
              </li>
              <li>
                <a href="#" className="hover:underline">KVKK</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Çerezler</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Komisyonlar</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase">Destek</h2>
            <ul className="text-gray-400">
              <li className="mb-4">
                <a href="#" className="hover:underline">Boş</a>
              </li>
            </ul>
          </div>
          <div className="flex justify-end md:justify-start md:flex-col">
            <a href="https://linkedin.com" className="hover:text-gray-300 mr-6 md:mb-4">
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="https://xing.com" className="hover:text-gray-300 mr-6 md:mb-4">
              <FaXing className="text-2xl" />
            </a>
            <a href="https://instagram.com" className="hover:text-gray-300">
              <FaInstagram className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 text-center py-6">
        <p>© 2023 CimriTur.com - Tüm Hakları Saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;
