import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CountUp from 'react-countup'; // CountUp kütüphanesini içe aktarıyor
import { FaRegClock, FaEye, FaBullseye } from 'react-icons/fa'; // İkonları içe aktarıyor

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const historyRef = useRef(null);
  const visionRef = useRef(null);
  const missionRef = useRef(null);
  const dividerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Tarih bölümü için animasyon
    gsap.from(historyRef.current, {
      scrollTrigger: {
        trigger: historyRef.current,
        start: 'top center',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 50,
      duration: 1.5,
    });

    // Vizyon bölümü için animasyon
    gsap.from(visionRef.current, {
      scrollTrigger: {
        trigger: visionRef.current,
        start: 'top center',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 50,
      duration: 1.5,
    });

    // Misyon bölümü için animasyon
    gsap.from(missionRef.current, {
      scrollTrigger: {
        trigger: missionRef.current,
        start: 'top center',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 50,
      duration: 1.5,
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
    <section id='about' className="bg-white py-20 font-montserrat">
      <div className="container mx-auto px-5">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Hikayemiz</h1>
          <div ref={dividerRef} className="flex justify-center mb-10">
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-indigo-800 rounded-full"></div>
          </div>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Yenilik tutkusundan ve mükemmeliyete olan bağlılıktan doğan yolculuğumuz, hayallerin ve azmin gücüne bir övgüdür.
          </p>
        </div>
        <div className="flex flex-wrap">
          {/* Tarih Bölümü */}
          <div ref={historyRef} className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-white p-8 flex-col">
              <div className="flex items-center mb-3">
                <FaRegClock className="text-indigo-500 w-8 h-8 flex-shrink-0 mr-4" />
                <h2 className="text-gray-900 text-lg title-font font-medium">Tarihimiz</h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  Küçük bir garajdan başlayan yolculuğumuz, mükemmeliyet ve yeniliği hedeflememiz sayesinde küresel bir lidere dönüştü.
                </p>
              </div>
              <div className="mt-4 text-center">
                <CountUp end={8} duration={20} suffix="+" className="text-4xl text-indigo-600 font-bold" /> Yıllık Deneyim
              </div>
            </div>
          </div>

          {/* Vizyon Bölümü */}
          <div ref={visionRef} className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-white p-8 flex-col">
              <div className="flex items-center mb-3">
                <FaEye className="text-green-500 w-8 h-8 flex-shrink-0 mr-4" />
                <h2 className="text-gray-900 text-lg title-font font-medium">Vizyonumuz</h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  Dünya genelinde bireyleri ve işletmeleri ileri teknoloji çözümleriyle güçlendirmek.
                </p>
              </div>
              <div className="mt-4 text-center">
                <CountUp end={500} duration={20} className="text-4xl text-green-600 font-bold" />+ Memnun Müşteri
              </div>
            </div>
          </div>

          {/* Misyon Bölümü */}
          <div ref={missionRef} className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-white p-8 flex-col">
              <div className="flex items-center mb-3">
                <FaBullseye className="text-blue-500 w-8 h-8 flex-shrink-0 mr-4" />
                <h2 className="text-gray-900 text-lg title-font font-medium">Misyonumuz</h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  Yenilikçi ve ilham verici olmak, zorlukları fırsata dönüştürmek ve dünyada kalıcı bir etki bırakmak.
                </p>
              </div>
              <div className= "text-center">
                <CountUp end={250} duration={20} className="text-4xl text-blue-600 font-bold" />+ Başarılı Proje
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
