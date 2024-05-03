import React from 'react';
import FAQSection from '../components/home-page/FAQSection';
import SubscribeSection from '../components/home-page/SubscribeSection';
import Testimonials from '../components/home-page/Testimonials';
import WhyUsSection from '../components/home-page/WhyUsSection';
import Product from '../components/home-page/Product';
import HeroSection from '../components/home-page/HeroSection';
import ArticleTr from '../components/home-page/ArticleTr';
import Tours from '../components/home-page/Tours';
const HomePage = () => {

  
  return (
    <>
    <HeroSection />
    <Tours />
    <Product />
    <ArticleTr />
    <WhyUsSection />
    <Testimonials />
    <SubscribeSection />
    
    <FAQSection />
    </>
    
    
  );
};

export default HomePage;
