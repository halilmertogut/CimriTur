import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Sosyal ikonlar için react-icons kullanıldığı varsayılıyor

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    // Altbilgi içeriğini alttan yukarı doğru kaydırarak ve görünürlüğünü artırarak animasyon ekleyin
    gsap.fromTo(footerRef.current.children, 
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
    );
  }, []);

  return (
    <footer ref={footerRef} className="bg-gray-900 text-gray-300 py-12 font-montserrat">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-lg font-semibold mb-4 md:mb-0">
            <Link to="/" className="text-indigo-400 hover:text-indigo-300">
              Cimri Tur | Dashboard
            </Link>
            <p className="mt-2 text-gray-400 text-sm">Veri odaklı içgörülerle yolculuklarınızı güçlendiriyoruz.</p>
          </div>
          <div className="w-full md:w-2/3 flex flex-wrap justify-end space-x-4 mt-4 md:mt-0">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <Link to="/about" className="hover:text-white transition-colors duration-300">Hakkımızda</Link>
              <Link to="/features" className="hover:text-white transition-colors duration-300">Özellikler</Link>
              <Link to="/pricing" className="hover:text-white transition-colors duration-300">Fiyatlandırma</Link>
              <Link to="/contact" className="hover:text-white transition-colors duration-300">İletişim</Link>
            </div>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-white transition-colors duration-300"><FaFacebookF /></a>
              <a href="https://twitter.com" className="hover:text-white transition-colors duration-300"><FaTwitter /></a>
              <a href="https://instagram.com" className="hover:text-white transition-colors duration-300"><FaInstagram /></a>
              <a href="https://linkedin.com" className="hover:text-white transition-colors duration-300"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-400">
          &copy; {new Date().getFullYear()} CimriTur Dashboard. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
