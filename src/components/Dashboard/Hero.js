import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import heroVideo from './bg-vd.mp4'; // Placeholder path, replace with your actual video

const HeroSection = () => {
  useEffect(() => {
    gsap.from(".hero-content > *", {
      delay: 0.3,
      opacity: 0,
      y: 20,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="hero-section relative h-screen flex items-center justify-center text-white overflow-hidden font-montserrat">
      <video autoPlay loop muted className="absolute z-10 w-auto min-w-full min-h-full max-w-none">
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div> {/* Overlay to ensure text visibility */}
      <div className="container mx-auto px-4 z-20 text-center hero-content">
        <h2 className="text-3xl md:text-5xl font-bold mb-2">
          Discover a New Perspective
        </h2>
        <p className="text-xl md:text-2xl my-6">
          Join us on a journey where adventure meets luxury and create stories worth telling.
        </p>
        <div className="flex justify-center items-center flex-wrap gap-4">
          <button className="bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300 ease-in-out py-3 px-8 text-lg rounded-md">
            Explore Now
          </button>
          <button className="bg-transparent border border-white hover:bg-white hover:text-indigo-600 transition-colors duration-300 ease-in-out py-3 px-8 text-lg rounded-md">
            Watch Video
          </button>
        </div>
        <p className="text-md md:text-lg text-indigo-300 mt-6 italic">
          Embark on an unforgettable journey with us.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
