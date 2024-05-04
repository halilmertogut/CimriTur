import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { HeartIcon as HeartOutlineIcon } from "@heroicons/react/outline";
import { HeartIcon as HeartSolidIcon } from "@heroicons/react/solid";
import image1 from "../../images/beach.jpg";
import "../../components/Swiper.css"
import gsap from "gsap";

SwiperCore.use([Navigation]);

const ToursSection = () => {
  const [isHovered, setIsHovered] = useState(Array(7).fill(false));

  const tours = [
    {
      id: 1,
      place: "Anıtkabir",
      city: "Ankara",
      days: "2 gün",
      price: "1299 TL",
      image: "https://source.unsplash.com/daily?Ankara",
    },
    {
      id: 2,
      place: "Topkapı Sarayı",
      city: "İstanbul",
      days: "3 gün",
      price: "1899 TL",
      image: "https://source.unsplash.com/daily?Istanbul",
    },
    {
      id: 3,
      place: "İzmir Kordon",
      city: "İzmir",
      days: "1 gün",
      price: "999 TL",
      image: "https://source.unsplash.com/daily?Izmir",
    },
    {
      id: 4,
      place: "Ephesus",
      city: "Selçuk",
      days: "2 gün",
      price: "1499 TL",
      image: "https://source.unsplash.com/daily?Ephesus",
    },
    {
      id: 5,
      place: "Pamukkale",
      city: "Denizli",
      days: "3 gün",
      price: "1599 TL",
      image: "https://source.unsplash.com/daily?Pamukkale",
    },
    {
      id: 6,
      place: "Kaş",
      city: "Antalya",
      days: "5 gün",
      price: "2299 TL",
      image: "https://source.unsplash.com/daily?Kas",
    },
    {
      id: 7,
      place: "Sumela Monastery",
      city: "Trabzon",
      days: "3 gün",
      price: "1999 TL",
      image: "https://source.unsplash.com/daily?Trabzon",
    },
    {
      id: 8,
      place: "Mount Nemrut",
      city: "Adıyaman",
      days: "2 gün",
      price: "1799 TL",
      image: "https://source.unsplash.com/daily?Nemrut",
    },
  ];
  
  
  useEffect(() => {
    gsap.from(".swiper-slide", {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.5,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []); 

  const handleMouseEnter = (index) => {
    let hoverState = [...isHovered];
    hoverState[index] = true;
    setIsHovered(hoverState);
  };

  const handleMouseLeave = (index) => {
    let hoverState = [...isHovered];
    hoverState[index] = false;
    setIsHovered(hoverState);
  };

  return (
    <div className="bg-white overflow-hidden flex flex-col items-center justify-start lg:px-32 text-xl text-gray-800 h-5/6 mb-20 font-montserrat mt-20">
       <div className="text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-8 relative inline-block">
            Popüler Turlar
          </h2>
          <p className="text-xl text-gray-600">
            Ülkenin dört bir yanındaki en iyi seyahat acentaları ve teklifleri
            keşfedin
          </p>
          <div className="mt-6">
            <span className="inline-block w-40 h-1 rounded-full bg-gradient-to-r from-red-500 to-red-500"></span>
          </div>
        </div>{" "}
      <div className="w-full max-w-screen-xl mt-20">
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
          }}
        >
          {tours.map((tour, index) => (
            <SwiperSlide
              key={tour.id}
              className="swiper-slide shadow-xl rounded-xl overflow-hidden"
            >
              <div className="relative group hover:bg-black hover:font-bold">
                <img
                  src={tour.image}
                  alt={tour.name}
                  className="w-full h-60 object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-30 "
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="flex justify-between items-end w-full">
                    <div className="text-left">
                      <p className="text-white text-md">{tour.place}</p>
                      <p className="text-white text-md">{tour.city}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white text-md">{tour.days}</p>
                      <p className="text-white text-md">{tour.price}</p>
                    </div>
                  </div>
                </div>
                {isHovered[index] ? (
                  <HeartSolidIcon
                    className="absolute top-4 right-4 w-8 h-8 text-red-500 transition-all duration-300 ease-in-out cursor-pointer"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                  />
                ) : (
                  <HeartOutlineIcon
                    className="absolute top-4 right-4 w-8 h-8 text-white group-hover:text-red-500 transition-all duration-300 ease-in-out cursor-pointer"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                  />
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ToursSection;
