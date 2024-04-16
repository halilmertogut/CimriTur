import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import routeImage from '../images/rota3.jpg';
import vizyonImage from '../images/vizyon.jpg';
import misyonImage from '../images/misyon2.jpg';


const AboutUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".about-section").forEach((section, index) => {
      let animation;
      if (index === 0) {
        animation = {
          opacity: 0,
          y: 50,
          duration: 1,
        };
      } else if (index === 1) {
        animation = {
          opacity: 0,
          x: -50,
          duration: 1,
        };
      } else if (index === 2) {
        animation = {
          opacity: 0,
          y: -50,
          duration: 1,
        };
      } else {
        animation = {
          opacity: 0,
          x: 50,
          duration: 1,
        };
      }

      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          toggleActions: "play none none reverse",
        },
        ...animation,
      });
    });
  }, []);

  return (
    <div ref={sectionRef} className="font-montserrat">
      {/* Section 1: Introduction */}
      <section className="about-section py-20 md:py-32 bg-white flex flex-col md:flex-row items-center justify-center">
        {/* Your content for Introduction section */}
        <div className="w-full md:w-1/2 md:order-2 mr-20">
        <img
  className="w-2/3 h-auto rounded-lg shadow-lg"
  src={routeImage}
  alt="Introduction Image"
/>
        </div>
        <div className="w-full md:w-1/2 md:order-1 text-center md:text-left">
          <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 mb-6">
              Hayalinizdeki <span className="text-red-500">Rotayı</span> Çiziyoruz
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-8">
              Müşterilerimizi hem Acentalar hem de Siz Gezginler olarak seçtiğimiz için çok mutluyuz. Gezginlerimize binlerce tur seçeneği arasından benzersiz fiyatlar ve benzersiz deneyimler sunarken, Acenta çözümlerimiz eşliğinde operasyonel faaliyetlerin devamlılığını sağlıyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Vision */}
      <section className="about-section py-20 md:py-32 bg-white flex flex-col md:flex-row items-center justify-center">
        {/* Your content for Vision section */}
        <div className="w-full md:w-1/2 ml-20">
          <img
            className="md:w-2/3 rounded-lg shadow-lg"
            src={vizyonImage}
            alt="Vision Image"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-red-500 mb-4">Vizyonumuz</h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-8">
              Bilgilerinizi depolamıyor veya reklam için kullanmıyoruz. Gizliliğiniz bizim için önemli. Arayüz akıcılığımızla eşsiz bir deneyim. Benzersiz deneyimlerinizi, ömürsüz kılıyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Mission */}
      <section className="about-section py-20 md:py-32 bg-white flex flex-col md:flex-row items-center justify-center">
        {/* Your content for Mission section */}
        <div className="w-full md:w-1/2 md:order-2 mr-20">
        <img
            className="md:w-2/3 rounded-lg shadow-lg"
            src={misyonImage}
            alt="Vision Image"
          />
        </div>
        <div className="w-full md:w-1/2 md:order-1 text-center md:text-left">
          <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-red-500 mb-4">Misyonumuz</h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-8">
              Bilgilerinizi depolamıyor veya reklam için kullanmıyoruz. Gizliliğiniz bizim için önemli. Arayüz akıcılığımızla eşsiz bir deneyim. Benzersiz deneyimlerinizi, ömürsüz kılıyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Team */}
      <section className="about-section py-20 md:py-32 bg-white flex flex-col md:flex-row items-center justify-center">
        {/* Your content for Team section */}
        <div className="w-full md:w-1/2">
        <p className="text-xl text-black mb-10 ml-20">Duygu Albayrak ve Team 13</p>
          <img
            className="w-full h-auto rounded-lg shadow-lg ml-20"
            src="https://www.ctis.bilkent.edu.tr/ctis_projects/2023_2024_Fall_Spring/Team13.jpg"
            alt="Team Image"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-red-500 mb-4">Ekibimiz</h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-4">
              Ekibimiz, seyahat tutkunu herkes için unutulmaz deneyimler yaratma hedefiyle bir araya gelmiş bir grup yetenekli bireyden oluşmaktadır.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
