import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,

    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const testimonials = [
    {
      id: 1,
      name: "Emre Yılmaz",
      title: "Kurumsal İletişim Müdürü",
      comment:
        "CimriTur'un sağladığı hizmetler sayesinde iş seyahatlerimizi sorunsuz ve ekonomik bir şekilde planlıyoruz. Kesinlikle tavsiye ediyorum!",
      avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026701e",
      rating: 4.2,
    },
    {
      id: 2,
      name: "Banu Kaya",
      title: "Operasyon Yöneticisi",
      comment:
        "CimriTur, müşteri hizmetleri ve uygun fiyatları ile iş gezilerimizi çok daha verimli hale getirdi. Her organizasyonda farklarını ortaya koyuyorlar.",
      avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026702b",
      rating: 5,
    },
    {
      id: 3,
      name: "Caner Dönmez",
      title: "Satın Alma Sorumlusu",
      comment:
        "CimriTur ile çalışmak, bütçe yönetiminde büyük kolaylık sağlıyor. Sunulan çeşitli seçenekler sayesinde en uygun seyahat çözümlerine ulaşabiliyoruz.",
      avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026703c",
      rating: 4.4,
    },
    {
      id: 4,
      name: "Selim Arı",
      title: "IT Proje Yöneticisi",
      comment:
        "Teknoloji ve seyahat yönetimi konusunda CimriTur bize zaman ve maliyet tasarrufu sağladı. Çözümleri ile sektördeki farklarını açıkça gösteriyorlar.",
      avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      rating: 4.7,
    },
    {
      id: 5,
      name: "Aslı Enver",
      title: "Pazarlama Direktörü",
      comment:
        "CimriTur, pazarlama kampanyalarımız için yurt dışı etkinliklerimizi kusursuz bir şekilde organize etti. Profesyonel ve etkili çözümler için doğru adres.",
      avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026705e",
      rating: 4.6,
    },
  ];

  const sliderRef = useRef(null);

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: sliderRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      })
      .fromTo(
        sliderRef.current.querySelectorAll(".slick-slide"),
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          ease: "power1.out",
        }
      );
  }, []);

  return (
    <div
      ref={sliderRef}
      className="testimonials-slider min-h-screen py-12 px-4 max-w-7xl mx-auto font-montserrat"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-center mb-4 relative inline-block">
          Müşteri Yorumları
        </h2>
        <p className="text-xl text-gray-600 mt-2">
          Müşterilerimiz bizi seviyor, siz de seveceksiniz!{" "}
        </p>
        <div className="mt-6">
          <span className="inline-block w-40 h-1 rounded-full bg-gradient-to-r from-red-500 to-red-500"></span>
        </div>
      </div>{" "}
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="p-4 mt-20">
            <div className="testimonial-card bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl">
              <div className="p-6 text-center">
                <img
                  src={testimonial.avatarUrl}
                  alt="Avatar"
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <div className="font-semibold text-xl mb-2">
                  {testimonial.name}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.title}</p>
                <p className="italic text-gray-800">"{testimonial.comment}"</p>
              </div>
              <div className="bg-black p-4">
                <p className="text-sm text-white text-center">
                <span className="font-bold text-yellow-300 text-shadow-lg">Değerlendirme:</span>  {testimonial.rating} / 5
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
