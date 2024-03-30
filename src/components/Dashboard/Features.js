import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BsGraphUp, BsPuzzle, BsGlobe, BsInfoCircle } from 'react-icons/bs'; // Added BsInfoCircle for the info button
import Modal from './Modal'; // Assuming you have a Modal component

gsap.registerPlugin(ScrollTrigger);

const featuresData = [
  { 
    icon: <BsGraphUp size={48} className="text-blue-500" />, 
    title: "Advanced Analytics", 
    description: "Leverage our state-of-the-art analytics platform to unlock actionable insights, identify trends, and make data-driven decisions that propel your business forward. Our intuitive dashboard offers real-time data visualization, helping you to simplify complex information." 
  },
  { 
    icon: <BsPuzzle size={48} className="text-green-500" />, 
    title: "Seamless Integration", 
    description: "Our platform is designed for effortless integration, enabling you to connect and synchronize with your existing tools and systems seamlessly. Streamline your workflows, reduce manual entry, and enhance productivity with our flexible integration solutions." 
  },
  { 
    icon: <BsGlobe size={48} className="text-red-500" />, 
    title: "Global Connectivity", 
    description: "Connect and engage with a global audience effortlessly. Our platform ensures your presence is felt worldwide, with multi-language support and a global network infrastructure that delivers high performance and reliability, ensuring you stay connected with your audience, anywhere, anytime." 
  },
];

const FeatureCard = ({ icon, title, description }) => {
  const cardRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    ScrollTrigger.batch(cardRef.current, {
      onEnter: batch => gsap.to(batch, {
        autoAlpha: 1,
        y: 0,
        stagger: 0.15,
        overwrite: true,
        duration: 1,
        ease: "back.out(1.7)"
      }),
      onLeave: batch => gsap.set(batch, { autoAlpha: 0, y: 20, overwrite: true }),
      onEnterBack: batch => gsap.to(batch, { autoAlpha: 1, y: 0, stagger: 0.15, overwrite: true }),
      onLeaveBack: batch => gsap.set(batch, { autoAlpha: 0, y: 20, overwrite: true }),
      start: "top bottom-=100",
      end: "bottom top",
      toggleActions: "play none none reverse",
    });

    return () => ScrollTrigger.refresh();
  }, []);

  const handleInfoClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div ref={cardRef} className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 relative font-montserrat">
      <div className="text-center mb-4">{icon}</div>
      <h5 className="text-xl font-semibold mb-2">{title}</h5>
      <p className="text-gray-700">{description}</p>
      <button onClick={handleInfoClick} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
        <BsInfoCircle size={24} />
      </button>
      {isModalOpen && <Modal title={title} content={description} onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

const Features = () => {
  const dividerRef = useRef(null);

  useEffect(() => {
    gsap.from(dividerRef.current, {
      scaleX: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: dividerRef.current,
        start: 'top center',
        toggleActions: 'play none none reverse',
      },
    });
  }, []);

  return (
    <section id="features" className="py-12 bg-white mt-20 font-montserrat">
      <div className="container mx-auto px-4 text-center">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Key Features</h1>
        <div ref={dividerRef} className="flex justify-center mt-5">
        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-indigo-800 rounded-full"></div>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-40">
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};


export default Features;

