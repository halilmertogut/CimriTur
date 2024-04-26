import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const testimonialsData = [
  {
    quote: "CimriTur'un kontrol panelinin kullanım kolaylığı ve verimliliği iş operasyonlarımızı gerçekten dönüştürdü. Ekip, yolculuğumuz boyunca olağanüstü bir destek ve bağlılık gösterdi.",
    author: "Mia Yen",
    role: "AdventureWorks CEO'su",
    photo: "https://via.placeholder.com/150", // Yer tutucu fotoğraf
  },
  {
    quote: "Turlarımızı daha önce hiç bu kadar düzenli ve kontrol altında görmemiştim. CimriTur'un analitiği, işleyişimizi derinlemesine incelememize ve karar alma süreçlerimizi yönlendirmemize yardımcı olan büyük bir yenilik.",
    author: "Liam Chen",
    role: "Globetrotters Inc. Operasyon Müdürü",
    photo: "https://via.placeholder.com/150", // Yer tutucu fotoğraf
  },
];

const TestimonialCard = ({ quote, author, role, photo }) => (
  <div className="max-w-md mx-auto p-6 bg-gray-50 rounded-lg shadow-lg transform transition duration-500 hover:-translate-y-2 mt-20 mb-20 font-montserrat">
    <div className="flex items-center justify-between mb-4">
      <FaQuoteLeft className="text-indigo-500 text-3xl" />
      <img src={photo} alt={author} className="w-14 h-14 rounded-full shadow-lg" /> {/* Müşteri fotoğrafı */}
      <FaQuoteRight className="text-indigo-500 text-3xl" />
    </div>
    <blockquote className="text-gray-600 italic mb-4">{quote}</blockquote>
    <div className="text-right">
      <p className="font-bold">{author}</p>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  </div>
);

const Testimonials = () => {
  const testimonialsRef = useRef([]);
  const dividerRef = useRef(null);

  useEffect(() => {
    gsap.from(testimonialsRef.current, {
      duration: 1,
      opacity: 0,
      y: 20,
      stagger: 0.2,
      ease: "power1.out",
      scrollTrigger: {
        trigger: testimonialsRef.current,
        start: "top bottom-=200",
        toggleActions: "restart pause resume pause",
      },
    });
    gsap.from(dividerRef.current, {
      scrollTrigger: {
        trigger: dividerRef.current,
        start: 'top center',
        toggleActions: 'play none none reverse',
      },
      scaleX: 0,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  return (
    <section className="py-12 bg-white mt-20 font-montserrat">
      <div className="container mx-auto text-center">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4 text-center">Müşterilerimizin Söyledikleri</h1>
        <div ref={dividerRef} className="flex justify-center mt-5">
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-indigo-800 rounded-full"></div>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} ref={(el) => (testimonialsRef.current[index] = el)} className="w-full md:w-1/2 lg:w-1/3 px-4">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
