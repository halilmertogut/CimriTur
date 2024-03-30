import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCheck, FaStar } from 'react-icons/fa'; // Use Star for recommended plans

gsap.registerPlugin(ScrollTrigger);

const pricingPlans = [
  {
    name: "Basic",
    price: "$29",
    features: [
      "Up to 10 Tours",
      "Basic Analytics",
      "Email Support",
      "Help Center Access",
    ],
    recommended: false,
  },
  {
    name: "Pro",
    price: "$59",
    features: [
      "Up to 50 Tours",
      "Pro Analytics",
      "Priority Email Support",
      "Help Center Access",
      "Tour Customization",
    ],
    recommended: true,
  },
  {
    name: "Enterprise",
    price: "Contact Us",
    features: [
      "Unlimited Tours",
      "Advanced Analytics",
      "24/7 Support",
      "Personalized Onboarding",
      "Custom Integrations",
    ],
    recommended: false,
  },
];

const PricingCard = ({ plan }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.to(cardRef.current, {
      duration: 0.5,
      opacity: 1,
      y: 0,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: cardRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });
  }, []);

  return (
    <div ref={cardRef} className={`transform transition duration-500 ${plan.recommended ? 'scale-105 shadow-xl' : 'shadow-md'} rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:shadow-2xl text-white overflow-hidden opacity-0 mt-20 font-montserrat`}>
      <div className="p-6">
        {plan.recommended && (
          <div className="flex justify-center items-center mb-4">
            <FaStar className="text-yellow-300" />
            <span className="ml-2 uppercase text-yellow-300 font-semibold text-sm">Recommended</span>
          </div>
        )}
        <h3 className="text-2xl font-bold text-center">{plan.name}</h3>
        <p className="text-3xl font-bold text-center mt-2 mb-4">{plan.price}</p>
        <ul className="space-y-2">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <FaCheck className="mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4 px-6 py-4">
        <button className="w-full bg-white text-blue-600 font-bold py-2 px-4 rounded-lg transition duration-300 hover:bg-blue-50">
          Choose {plan.name}
        </button>
      </div>
    </div>
  );
};

const Pricing = () => {
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
    <section id="pricing" className="pt-12 pb-24 bg-white mt-20 font-montserrat">
      <div className="container mx-auto px-4">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4 text-center">Pricing</h1>
        <div ref={dividerRef} className="flex justify-center mt-5">
        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-indigo-800 rounded-full"></div>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};


export default Pricing;
