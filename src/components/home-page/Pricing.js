import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaTimes, FaStar } from 'react-icons/fa';

// Define a motion variant for animating the pricing cards on hover
const cardHover = {
  rest: { scale: 1, transition: { duration: 0.3, type: 'spring' } },
  hover: { scale: 1.05, transition: { duration: 0.3, type: 'spring' } },
};

const PricingCard = ({ plan, isFeatured }) => {
  return (
    <motion.div
      className={`transform transition-all duration-300 p-6 rounded-xl shadow-lg bg-slate-200 ${
        isFeatured ? 'scale-105' : ''
      }`}
      whileHover="hover"
      variants={cardHover}
      initial="rest"
      animate="rest"
    >
      {isFeatured && (
        <FaStar className="text-red-500 absolute right-3 top-3" />
      )}
      <h3 className={`text-2xl font-semibold ${isFeatured ? 'text-red-500' : 'text-gray-800'}`}>
        {plan.name}
      </h3>
      <p className={`text-4xl my-4 font-bold ${isFeatured ? 'text-red-500' : 'text-gray-800'}`}>
        {plan.price}
      </p>
      <ul className="text-left space-y-3">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-700">
            {feature.available ? (
              <FaCheck className="text-green-500" />
            ) : (
              <FaTimes className="text-red-500" />
            )}
            <span className="ml-2">{feature.name}</span>
          </li>
        ))}
      </ul>
      <button className={`mt-6 px-6 py-2 rounded-lg text-white ${
          isFeatured ? 'bg-red-500' : 'bg-gray-800'
        } hover:opacity-90`}
      >
        Choose Plan
      </button>
    </motion.div>
  );
};

const PricingSection = () => {
    const plans = [
        {
          name: 'Starter',
          price: '$19/month',
          features: [
            { name: '5 Active Projects', available: true },
            { name: '10 GB Storage', available: true },
            { name: 'Basic Analytics', available: true },
            { name: '24/7 Support', available: false },
            { name: 'Collaboration Tools', available: false },
          ],
          isFeatured: false,
          icon: 'starter-icon.svg',
        },
        {
          name: 'Professional',
          price: '$49/month',
          features: [
            { name: '15 Active Projects', available: true },
            { name: '30 GB Storage', available: true },
            { name: 'Advanced Analytics', available: true },
            { name: 'Priority Support', available: true },
            { name: 'Collaboration Tools', available: true },
          ],
          isFeatured: true,
          icon: 'professional-icon.svg',
        },
        {
          name: 'Enterprise',
          price: '$99/month',
          features: [
            { name: 'Unlimited Projects', available: true },
            { name: '100 GB Storage', available: true },
            { name: 'Full Analytics Suite', available: true },
            { name: 'Dedicated Support', available: true },
            { name: 'Collaboration Tools', available: true },
          ],
          isFeatured: false,
          icon: 'enterprise-icon.svg',
        },
      ];

  return (
    <section className="pt-20 pb-10 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">Pricing Plans</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Select the best plan that suits your needs.</p>
        </div>
        <div className="flex flex-wrap justify-center items-center -mx-4">
          {plans.map((plan, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-4">
              <PricingCard plan={plan} isFeatured={plan.isFeatured} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
