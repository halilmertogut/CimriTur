// Testimonials.js
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonialsData = [
  { quote: "The ease of use and efficiency of CimriTur Dashboard has truly transformed our business operations.", author: "Mia Yen" },
  { quote: "I've never been more organized and in control of our tours. CimriTur's analytics are a game-changer.", author: "Liam Chen" },
];

const TestimonialCard = ({ quote, author }) => (
  <div className="max-w-md mx-auto">
    <blockquote className="text-gray-600 italic mb-4">{quote}</blockquote>
    <p className="font-bold">{author}</p>
  </div>
);

const Testimonials = () => {
  const testimonialsRef = useRef([]);

  useEffect(() => {
    testimonialsRef.current.forEach((el, index) => {
      gsap.fromTo(el, { autoAlpha: 0, x: -100 }, {
        duration: 1,
        autoAlpha: 1,
        x: 0,
        ease: "power1.out",
        scrollTrigger: {
          trigger: el,
          start: "top center+=100",
          end: "bottom center",
          toggleActions: "play none none reverse",
        }
      });
    });
  }, []);
  
  
  

  return (
    <section className="py-12 bg-white h-[400px]">
      <div className="container mx-auto text-center mt-10">
        <h2 className="text-4xl font-bold mb-8">What Our Clients Say</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} ref={el => testimonialsRef.current[index] = el} className="w-full md:w-1/2 lg:w-1/3 px-4 mt-12">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
