import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { HeartIcon as HeartOutlineIcon } from "@heroicons/react/outline";
import { HeartIcon as HeartSolidIcon } from "@heroicons/react/solid"; // Import solid heart icon
import image1 from "../images/beach.jpg";
import "../components/Swiper.css"; // Ensure you have this CSS for custom styles
import gsap from "gsap";

SwiperCore.use([Navigation]);

const ToursSection = () => {
  const [isHovered, setIsHovered] = useState(Array(7).fill(false)); // Initialize hover state for each card

  const tours = [
    {
      id: 1,
      place: "Anıtkabir ",
      city: "Ankara",
      days: "2 gün",
      price: "1299 TL",
      image: image1,
    },
    {
      id: 1,
      place: "Anıtkabir ",
      city: "Ankara",
      days: "2 gün",
      price: "1299 TL",
      image: image1,
    },
    {
      id: 1,
      place: "Anıtkabir ",
      city: "Ankara",
      days: "2 gün",
      price: "1299 TL",
      image: image1,
    },
    {
      id: 1,
      place: "Anıtkabir ",
      city: "Ankara",
      days: "2 gün",
      price: "1299 TL",
      image: image1,
    },
    {
      id: 1,
      place: "Anıtkabir ",
      city: "Ankara",
      days: "2 gün",
      price: "1299 TL",
      image: image1,
    },
    {
      id: 1,
      place: "Anıtkabir ",
      city: "Ankara",
      days: "2 gün",
      price: "1299 TL",
      image: image1,
    },
    {
      id: 1,
      place: "Anıtkabir ",
      city: "Ankara",
      days: "2 gün",
      price: "1299 TL",
      image: image1,
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
    <div className="bg-white overflow-hidden flex flex-col items-center justify-start py-20 px-8 lg:px-32 text-xl text-gray-800 h-screen">
      <div className="w-full max-w-screen-xl">
        <h2 className="mb-10 text-4xl text-black font-semibold">
          Popüler Turlar
        </h2>
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
