import React from 'react';
import herobg from './herobg.jpg';

const HeroSection = () => {
  return (
    <div className="relative text-center">
      <div className="relative z-10 h-screen flex flex-col justify-center">
        <h1 className="text-7xl font-bold text-white">CimriTur'a Hoşgeldiniz</h1>
        <p className="text-xl text-white mt-4"></p>
        <button className="mt-8 mx-auto bg-white text-black font-extrabold py-3 px-8 rounded-full inline-block hover:bg-transparent hover:text-white transition duration-300 hover:underline decoration-2 decoration-indigo-500 underline-offset-8 hover:font-black hover:shadow-lg">
          Keşfet
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
