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
      name: "Alexa Richardson",
      title: "Digital Marketer",
      comment:
        "This service has transformed our approach to marketing. Absolutely thrilled with the results!",
      avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    },
    {
      id: 2,
      name: "Michael Scott",
      title: "Regional Manager",
      comment:
        "Their unique solution helped us reach a broader audience. Highly recommend!",
      avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704t",
    },
    {
      id: 3,
      name: "Alexa Richardson",
      title: "Digital Marketer",
      comment:
        "This service has transformed our approach to marketing. Absolutely thrilled with the results!",
      avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    },
    {
      id: 4,
      name: "Michael Scott",
      title: "Regional Manager",
      comment:
        "Their unique solution helped us reach a broader audience. Highly recommend!",
      avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704t",
    },
    {
      id: 5,
      name: "Alexa Richardson",
      title: "Digital Marketer",
      comment:
        "This service has transformed our approach to marketing. Absolutely thrilled with the results!",
      avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    },
    {
      id: 6,
      name: "Michael Scott",
      title: "Regional Manager",
      comment:
        "Their unique solution helped us reach a broader audience. Highly recommend!",
      avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704t",
    },
    // Add more testimonials as needed...
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
      className="testimonials-slider min-h-screen py-12 px-4 max-w-7xl mx-auto"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-center mb-4 relative inline-block">
          What Our Clients Say
        </h2>
        <p className="text-xl text-gray-600 mt-2">
          Our clients love us, and you will too!
        </p>
        <div className="mt-6">
            <span className="inline-block w-40 h-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></span>
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
              <div className="bg-gray-100 p-4">
                <p className="text-sm text-gray-600">
                  Rating: {testimonial.rating} / 5
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
