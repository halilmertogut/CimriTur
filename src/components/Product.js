import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import image1 from '../images/beach.jpg';

gsap.registerPlugin(ScrollTrigger);

const Product = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = gsap.utils.toArray('.tour-card');

    gsap.to(elements, {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom-=200',
        end: 'bottom top',
        toggleActions: 'play none none reverse',
      },
    });
  }, []);

  const tours = [
    { id: 1, imageUrl: image1, previewImageUrl: '/adsfremovebgpreview-1-1@2x.png' },
    // ...other tours
  ];

  return (
    <div ref={sectionRef} className="w-full bg-white overflow-hidden flex flex-col items-center justify-start pt-6 px-5 pb-5 box-border gap-6 tracking-normal text-left text-2xl text-black font-poppins h-screen mt-20">
      <div className="w-full max-w-screen-xl">
        <h2 className="mb-6 text-4xl text-black font-semibold">Discover Local Agencies</h2>
        <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tours.map((tour) => (
            <div 
              key={tour.id} 
              className="tour-card max-w-md mx-auto overflow-hidden rounded-lg shadow-lg relative opacity-0 translate-y-10 transition duration-500 ease-in-out hover:shadow-2xl"
              style={{ perspective: '1000px' }}
            >
              <img
                className="w-full h-64 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                alt={`Tour ${tour.id}`}
                src={tour.imageUrl}
                style={{ backfaceVisibility: 'hidden' }} 
              />
              <div className="absolute inset-0 flex justify-end">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-transparent to-black/70 transition duration-500 ease-in-out hover:bg-black/50">
                  <div className="text-white font-medium text-xl p-4 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <p>Browse</p>
                    <p>Tours</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Product;
