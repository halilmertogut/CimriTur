import React from 'react';
import Navbar from '../components/Navbar';
import Tours from '../components/Tours'
import Product from '../components/Product';
import Article from '../components/Article';
import HeroSection from '../components/HeroSection';
import Testimonials from '../components/Testimonials';
import WhyUsSection from '../components/WhyUsSection';
import SubscribeSection from '../components/SubscribeSection';
import FAQSection from '../components/FAQSection';
const HomePage = () => {

  
  return (
    <>
    <HeroSection />
    <WhyUsSection />
    <Tours />
    <Product />
    <Article />
    <Testimonials />
    <SubscribeSection />
    <FAQSection /></>
    
  );
};

export default HomePage;
