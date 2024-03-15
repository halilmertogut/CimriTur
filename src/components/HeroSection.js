import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import bg from '../images/herobg.jpg';

const HeroSection = () => {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const subHeadlineRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
    gsap.fromTo(headlineRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.5 });
    gsap.fromTo(subHeadlineRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 1 });
    gsap.fromTo(buttonRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 1.5 });
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="flex flex-col items-center justify-center py-20 px-5 box-border max-w-full text-center text-base font-normal h-screen overflow-hidden relative" 
      style={{ color: '#ffffff' }}
    >
      <img 
        src={bg}
        alt="Scenic Background" 
        className="absolute inset-0 w-full h-full object-cover" 
      />
      <div className="relative z-10 flex flex-col items-center justify-start gap-4 max-w-full">
        <h1 ref={headlineRef} className="text-6xl font-bold mb-4">
          Discover Your Next Adventure
        </h1>
        <p ref={subHeadlineRef} className="text-xl">
          Let us guide you through breathtaking experiences.
        </p>
        <button ref={buttonRef} className="mt-5 py-3 px-6 bg-white text-black rounded-full hover:bg-gray-100 transition duration-300 ease-in-out">
          Explore Now
        </button>
      </div>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay to ensure text readability */}
    </section>
  );
};

export default HeroSection;
