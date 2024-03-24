import React from 'react';
import Footer from "../components/Footer"
import { Routes, Route } from 'react-router-dom'; 
import Register from '../pages/Register';
import HomePage from '../pages/HomePage'
import Login from '../pages/Login'
import { useSelector } from 'react-redux';
import EditProfile from '../pages/EditProfile';
import LandingPage from '../components/LandingPage';
import Navbar from '../components/Navbar';
import Tours from '../components/Tours'
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
import Blog from '../pages/Blog'
import ContactUs from '../pages/ContactUs';
import BlogDetail from '../pages/BlogDetail';
import SignUp from '../components/Signup'

const MainLayout = () => {
  const user = useSelector((state) => state.login?.user);
  console.log(user);
  return (
    <div className="bg-white">
<Navbar />
      <Routes> 
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/turlar" element={<FeatureCollection />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/register-guide" element={<Register />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/filtration-page" element={<FiltrationPage />} />
        <Route path="/blogdetail" element={<BlogDetail />} />
        <Route path="/deneme" element={<FAQSection />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/signup" element={<SignUp />} />
        
      </Routes>
      <Footer />
    </div>
  );
};

export default MainLayout;
