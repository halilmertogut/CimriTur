// Hero.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import hero from './bghero.jpg';
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const q = gsap.utils.selector(heroRef);

  useEffect(() => {
    // Animations for entering elements
    gsap.from(q('.hero-title, .hero-subtitle, .hero-cta'), {
      duration: 1,
      opacity: 0,
      y: (i) => -50 * (i + 1),
      stagger: 0.2,
      ease: 'power1.out',
    });

    // Optional: Parallax effect on scroll for the background (comment out if undesired)
    gsap.to(q('.hero-background'), {
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      y: -200, // Adjust the movement speed, negative values for moving up
      ease: "none",
    });
  }, [q]);

  return (
    <section ref={heroRef} className="relative bg-gray-900 text-white text-center hero-section overflow-hidden h-[600px]">
      <div className="hero-background absolute inset-0 z-0" style={{ backgroundImage: `url(${hero})`, backgroundSize: 'cover' }}></div>
      <div className="relative z-10 container mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold hero-title">Intuitive Tour Management</h1>
        <p className="text-xl mt-6 hero-subtitle">Simplify your operations and deliver unforgettable experiences.</p>
        <Link to="/signup" className="mt-8 inline-block bg-indigo-600 hover:bg-indigo-700 py-3 px-8 text-lg rounded-full transition duration-300 hero-cta">Get Started</Link>
      </div>
      <div className="hero-overlay absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent z-5"></div>
    </section>
  );
};

export default Hero;
