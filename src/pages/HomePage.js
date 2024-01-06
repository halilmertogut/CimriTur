import React from 'react';
import HeroSection from "../components/HeroSection";
import FeatureCollection from '../components/FeatureCollection';
import Categories from '../components/Categories';

const HomePage = () => {

  
  return (
    <div className="bg-white">
      <HeroSection />
      <div className='bg-transparent'></div>
      <FeatureCollection />
      <div className='bg-transparent'></div>
      <Categories />
      <div className='bg-transparent'></div>
    </div>
  );
};

export default HomePage;
