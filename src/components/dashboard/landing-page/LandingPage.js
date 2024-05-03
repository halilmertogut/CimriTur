import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import Testimonials from './Testimonials';
import Footer from './Footer';
import Pricing from './Pricing';
import AboutUs from './AboutUs';

const LandingPage = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <AboutUs />
      <Features />
      <Pricing />
      <Testimonials />
      <Footer />


    </div>
  );
};

export default LandingPage;
