import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image1 from "../../images/beach.jpg"; // Örnek bir plaj görseli

gsap.registerPlugin(ScrollTrigger);

const Product = () => {
  const sectionRef = useRef(null);
  const [visibleTours, setVisibleTours] = useState(6); // Değişiklik 1: Başlangıçta görünen tur sayısını yönetmek için


  useEffect(() => {
    const elements = gsap.utils.toArray(".tour-card");

    gsap.to(elements, {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      duration: 0.5,
      ease: "power1.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom-=150",
        end: "bottom top",
        toggleActions: "play none none reverse",
      },
    });
  }, [visibleTours]);

  const tours = [
    {
      id: 1,
      name: "Mavi Yolculuk",
      location: "Ege Denizi",
      description: "Ege'nin kristal sularında unutulmaz bir yolculuk.",
      imageUrl: image1,
    },
    {
      id: 2,
      name: "Mavi Yolculuk",
      location: "Ege Denizi",
      description: "Ege'nin kristal sularında unutulmaz bir yolculuk.",
      imageUrl: image1,
    },
    {
      id: 3,
      name: "Mavi Yolculuk",
      location: "Ege Denizi",
      description: "Ege'nin kristal sularında unutulmaz bir yolculuk.",
      imageUrl: image1,
    },
    {
      id: 4,
      name: "Mavi Yolculuk",
      location: "Ege Denizi",
      description: "Ege'nin kristal sularında unutulmaz bir yolculuk.",
      imageUrl: image1,
    },
    {
      id: 5,
      name: "Mavi Yolculuk",
      location: "Ege Denizi",
      description: "Ege'nin kristal sularında unutulmaz bir yolculuk.",
      imageUrl: image1,
    },
    {
      id: 6,
      name: "Mavi Yolculuk",
      location: "Ege Denizi",
      description: "Ege'nin kristal sularında unutulmaz bir yolculuk.",
      imageUrl: image1,
    },
    {
      id: 7,
      name: "Mavi Yolculuk",
      location: "Ege Denizi",
      description: "Ege'nin kristal sularında unutulmaz bir yolculuk.",
      imageUrl: image1,
    },
    {
      id: 8,
      name: "Mavi Yolculuk",
      location: "Ege Denizi",
      description: "Ege'nin kristal sularında unutulmaz bir yolculuk.",
      imageUrl: image1,
    },
    {
      id: 9,
      name: "Mavi Yolculuk",
      location: "Ege Denizi",
      description: "Ege'nin kristal sularında unutulmaz bir yolculuk.",
      imageUrl: image1,
    },

    // Buraya daha fazla tur ekleyebilirsiniz
  ];

  const showMoreTours = () => { // Değişiklik 2: Tüm turları göstermek için fonksiyon
    setVisibleTours(tours.length);
  };

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-white font-montserrat"
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-8 relative inline-block">
            Yerel Acentaları Keşfedin 
          </h2>
          <p className="text-xl text-gray-600">
            Ülkenin dört bir yanındaki en iyi seyahat acentaları ve teklifleri
            keşfedin
          </p>
          <div className="mt-6">
            <span className="inline-block w-40 h-1 rounded-full bg-gradient-to-r from-red-500 to-red-500"></span>
          </div>
        </div>{" "}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-20">
          {tours.slice(0, visibleTours).map((tour) => ( // Değişiklik 3: Sadece belirli sayıda turu göster
            <div
              key={tour.id}
              className="tour-card overflow-hidden rounded-lg shadow-lg relative opacity-0 -translate-y-10"
            >
              <img
                className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
                alt={`${tour.name} - ${tour.location}`}
                src={tour.imageUrl}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white text-2xl font-semibold">
                  {tour.name}
                </h3>
                <p className="text-white text-md mb-4">{tour.location}</p>
                <p className="text-white text-opacity-80 text-sm">
                  {tour.description}
                </p>
              </div>
              <a
                href="#"
                className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out bg-black/60"
              >
                <span className="text-white text-xl font-medium">
                  Turları Görüntüle
                </span>
              </a>
            </div>
          ))}
        </section>
        {visibleTours < tours.length && ( // Değişiklik 4: Tüm turlar görüntülenmediyse butonu göster
          <div className="text-center mt-8">
            <button
              onClick={showMoreTours}
              className="px-8 py-4 bg-red-500 text-white rounded  hover:bg-red-600 "
            >
              Daha Fazla Göster
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
