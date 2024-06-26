import React, { useEffect, useRef } from "react";
import { Typography, Row, Col, Image, Divider } from "antd";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import routeImage from '../images/rota3.jpg';
import vizyonImage from '../images/vizyon.jpg';
import misyonImage from '../images/misyon2.jpg';

const { Title, Paragraph } = Typography;

gsap.registerPlugin(ScrollTrigger);

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
      <section id="story" className="about-section py-20 md:py-32 bg-white flex flex-col md:flex-row items-center justify-center">
        <Row gutter={[16, 16]} className="w-full">
          <Col xs={24} md={12} className="order-md-2">
            <Image
              className="rounded-lg shadow-lg"
              src={routeImage}
              alt="Introduction Image"
            />
          </Col>
          <Col xs={24} md={12} className="order-md-1 text-center md:text-left">
            <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
              <Title level={2} className="text-gray-800 mb-6">
                Hayalinizdeki <span className="text-red-500">Rotayı</span> Çiziyoruz
              </Title>
              <Paragraph className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-8">
                Müşterilerimizi hem Acentalar hem de Siz Gezginler olarak seçtiğimiz için çok mutluyuz. Gezginlerimize binlerce tur seçeneği arasından benzersiz fiyatlar ve benzersiz deneyimler sunarken, Acenta çözümlerimiz eşliğinde operasyonel faaliyetlerin devamlılığını sağlıyoruz.
              </Paragraph>
            </div>
          </Col>
        </Row>
      </section>

      <Divider />

      {/* Section 2: Vision */}
      <section className="about-section py-20 md:py-32 bg-white flex flex-col md:flex-row items-center justify-center">
        <Row gutter={[16, 16]} className="w-full">
          <Col xs={24} md={12}>
            <Image
              className="rounded-lg shadow-lg"
              src={vizyonImage}
              alt="Vision Image"
            />
          </Col>
          <Col xs={24} md={12} className="text-center md:text-left">
            <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
              <Title level={2} className="text-red-500 mb-4">Vizyonumuz</Title>
              <Paragraph className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-8">
                Seyehat acenteleri, serbest çalışan tur rehberleri ve tur operatörlerini bir çatı altına toplayan küresel çapta lider bir turizm şirketi olmak.
              </Paragraph>
            </div>
          </Col>
        </Row>
      </section>

      <Divider />

      {/* Section 3: Mission */}
      <section id="mission" className="about-section py-20 md:py-32 bg-white flex flex-col md:flex-row items-center justify-center">
        <Row gutter={[16, 16]} className="w-full">
          <Col xs={24} md={12} className="order-md-2">
            <Image
              className="rounded-lg shadow-lg"
              src={misyonImage}
              alt="Mission Image"
            />
          </Col>
          <Col xs={24} md={12} className="order-md-1 text-center md:text-left">
            <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
              <Title level={2} className="text-red-500 mb-4">Misyonumuz</Title>
              <Paragraph className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-8">
                Seyehat acenteleri ve serbest çalışan tur rehberlerini güçlü bir platformda birleştirerek, onların işlerini kolaylaştırmak ve müşterilerimize özgün seyehat deneyimleri sunmaktır.
              </Paragraph>
            </div>
          </Col>
        </Row>
      </section>

      <Divider />

      {/* Section 4: Team */}
      <section id="team" className="about-section py-20 md:py-32 bg-white flex flex-col md:flex-row items-center justify-center">
        <Row gutter={[16, 16]} className="w-full">
          <Col xs={24} md={12}>
            <Image
              className="rounded-lg shadow-lg"
              src="https://www.ctis.bilkent.edu.tr/ctis_projects/2023_2024_Fall_Spring/Team13.jpg"
              alt="Team Image"
            />
          </Col>
          <Col xs={24} md={12} className="text-center md:text-left">
            <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
              <Title level={2} className="text-red-500 mb-4">Ekibimiz</Title>
              <Paragraph className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-4">
                Ekibimiz, seyahat tutkunu herkes için unutulmaz deneyimler yaratma hedefiyle bir araya gelmiş bir grup yetenekli bireyden oluşmaktadır.
              </Paragraph>
              <Paragraph className="text-xl text-black mb-10 ml-20">Duygu Albayrak ve Team 13</Paragraph>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default AboutUs;
