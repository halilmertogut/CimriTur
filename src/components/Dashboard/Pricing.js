// Pricing.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
    gsap.from(cardRef.current, {
      duration: 1,
      opacity: 0,
      y: 50,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top bottom-=100",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div ref={cardRef} className={`p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out ${plan.recommended ? 'border-2 border-indigo-500' : ''}`}>
      <h3 className="text-xl font-semibold text-center mb-4">{plan.name}</h3>
      <p className="text-4xl font-bold text-center mb-4">{plan.price}</p>
      <ul className="space-y-3 mb-6">
        {plan.features.map((feature, index) => (
          <li key={index} className="text-gray-600">{feature}</li>
        ))}
      </ul>
      <div className="text-center">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
          Choose {plan.name}
        </button>
      </div>
    </div>
  );
};

const Pricing = () => (
  <section className="py-12 bg-gray-100">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold mb-10">Pricing Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
