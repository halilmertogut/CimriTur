import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'; 

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    id: 1,
    title: "Global Reach",
    description: "Access a world of possibilities with our extensive global network.",
    icon: <GlobeAltIcon className="w-8 h-8 text-blue-500" />,
  },
  {
    id: 2,
    title: "Instant Updates",
    description: "Stay informed with real-time notifications about your bookings.",
    icon: <LightningBoltIcon className="w-8 h-8 text-yellow-500" />,
  },
  {
    id: 3,
    title: "Secure Payments",
    description: "Experience hassle-free and secure transactions with every booking.",
    icon: <ScaleIcon className="w-8 h-8 text-green-500" />,
  },
];

const WhyUsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(sectionRef.current.children, {
      y: 50,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center+=150',
        toggleActions: 'play none none none',
      },
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-white font-montserrat">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
          <div className="text-base max-w-prose mx-auto">
            <p>Discover why we're the leading choice for seamless and stress-free travel planning.</p>
          </div>
          <div className="mt-6">
            <span className="inline-block w-40 h-1 rounded-full bg-gradient-to-r from-red-500 to-red-500"></span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-10 text-left">
          {features.map((feature) => (
            <div key={feature.id} className="p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out">
              <div className="flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
