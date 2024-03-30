// Features.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const featuresData = [
  { icon: "🔍", title: "Advanced Analytics", description: "Unlock insights and trends with our comprehensive analytics tool." },
  { icon: "⚙️", title: "Seamless Integration", description: "Easily integrate with your existing workflow and tools." },
  { icon: "🌐", title: "Global Connectivity", description: "Connect with users worldwide with our global network." },
];

const FeatureCard = ({ icon, title, description }) => {
  const cardRef = useRef();

  useEffect(() => {
    gsap.fromTo(cardRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "back.out(1.7)" });
  }, []);

  return (
    <div ref={cardRef} className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
      <div className="text-3xl">{icon}</div>
      <h5 className="mt-4 text-xl font-semibold">{title}</h5>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

const Features = () => (
  <section className="py-12 bg-gray-100">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold mb-10">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuresData.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  </section>
);

export default Features;
