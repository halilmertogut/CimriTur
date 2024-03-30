import React from 'react';
import Navbar from '../components/Navbar';
import Tours from '../components/Tours'
import Product from '../components/Product';
import Article from '../components/Article';
import ArticleTr from '../components/ArticleTr';
import HeroSection from '../components/HeroSection';
import Testimonials from '../components/Testimonials';
import WhyUsSection from '../components/WhyUsSection';
import SubscribeSection from '../components/SubscribeSection';
import FAQSection from '../components/FAQSection';
import PricingSection from '../components/Pricing';
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
