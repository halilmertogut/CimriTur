/* eslint-disable react/jsx-no-comment-textnodes */
// MainLayout.js
import React from 'react';
import Header from "./Header";
import HeroSection from "./HeroSection";
import AccountCreationSection from "./AccountCreationSection";
import FeaturesSection from "./FeaturesSection";
import Footer from "./Footer";
import herobg from './herobg.jpg'; // Arka plan resmi
import FeatureCollection from './FeatureCollection';
import PopularTours from './PopularTours';
import TransparentDiv from './TransparentDiv';
import Categories from './Categories';

const MainLayout = () => {
  return (
    <div className="relative">
      {/* Arka plan resmi */}
      <img src={herobg} alt="Background" className="w-full h-full object-cover fixed inset-0 z-0" />

      {/* İçerik */}
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <FeatureCollection />
        <TransparentDiv />
        {/* <PopularTours /> */}
        <Categories />
        <TransparentDiv />
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
