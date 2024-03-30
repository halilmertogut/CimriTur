import React from 'react';
import Footer from "../components/Footer";
import { Routes, Route, useLocation } from 'react-router-dom'; // Import useLocation
import Register from '../pages/Register';
import HomePage from '../pages/HomePage';
import Login from '../pages/Login';
import { useSelector } from 'react-redux';
import EditProfile from '../pages/EditProfile';
import LandingPage from '../components/Dashboard/LandingPage'; // Adjust the path as necessary
import Navbar from '../components/Navbar';
import Tours from '../components/Tours';
import Product from '../components/Product';
import Article from '../components/Article';
import HeroSection from '../components/HeroSection';
import Testimonials from '../components/Testimonials';
import WhyUsSection from '../components/WhyUsSection';
import SubscribeSection from '../components/SubscribeSection';
import FAQSection from '../components/FAQSection';
import FilterSection from '../components/FilterSection';
import PricingSection from '../components/Pricing';
import FiltrationPage from '../pages/FiltrationPage';

const MainLayout = () => {
  const user = useSelector((state) => state.login?.user);
  const location = useLocation(); // Use the location object to determine the current route

  console.log(user);
  return (
    <div className="bg-white">
      {/* Conditionally render Navbar only on the landing page */}
      {location.pathname === '/' && <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/turlar" element={<FeatureCollection />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<LandingPage />} />
        <Route path="/register-guide" element={<Register />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/filtration-page" element={<FiltrationPage />} />
        <Route path="/deneme" element={<FAQSection />} />
        {/* Insert other routes as needed */}
      </Routes>

      {location.pathname === '/' && <Footer />}

    </div>
  );
};

export default MainLayout;
