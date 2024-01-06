// HeroSection.js
import React from 'react';
import bg from '../images/herobg.jpg'; // Make sure the path to your image is correct

const HeroSection = () => {
  return (
    <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${bg})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Dark overlay */}
      <div className="container mx-auto px-4 pt-24 pb-12 relative z-10 text-center">
        <h1 className="text-5xl font-bold text-white mb-4">Find your favorite place here!</h1>
        <p className="text-xl text-white mb-10">The best prices for over 2 million properties worldwide</p>
        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 md:p-8 inline-block">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <input type="text" placeholder="Type the destination" className="input rounded-2xl font-light pl-4 shadow-lg col-span-2 md:col-span-1"/>
            <input type="text" placeholder="Check In" className="input rounded-2xl font-light pl-4 col-span-2 shadow-lg md:col-span-1"/>
            <input type="text" placeholder="Check Out" className="input rounded-2xl font-light pl-4 col-span-2 shadow-lg md:col-span-1"/>
            <input type="text" placeholder="Add Guests" className="input rounded-2xl font-light pl-4 col-span-2 shadow-lg md:col-span-1"/>
            <button className="btn col-span-2 md:col-span-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 px-6 transition duration-300 ease-in-out">Search Accommodation</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
