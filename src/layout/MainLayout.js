import React, { useEffect, useRef } from 'react';
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
import Blog from '../pages/Blog'
import ContactUs from '../pages/ContactUs';
import BlogDetail from '../pages/BlogDetail';
import SignUp from '../components/Signup'
import Purchase1 from '../components/Purchase1'
import Purchase2 from '../components/Purchase2'
import Purchase3 from '../components/Purchase3'
import TourDetail from '../pages/TourDetail'
import AboutUs from '../pages/AboutUs';
import CreateBlog from '../pages/CreateBlog';

const MainLayout = () => {
  const user = useSelector((state) => state.login?.user);
  const location = useLocation(); // Use the location object to determine the current route

  console.log(user);
  return (
    <div className="bg-white">
      {/* Conditionally render Navbar only on the landing page */}
      {location.pathname !== '/dashboard' && <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/turlar" element={<FeatureCollection />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<LandingPage />} />
        <Route path="/register-guide" element={<Register />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/filtration-page" element={<FiltrationPage />} />
        <Route path="/blogdetail" element={<BlogDetail />} />
        <Route path="/tourdetail" element={<TourDetail />} />
        <Route path="/deneme" element={<FAQSection />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/purchase1" element={<Purchase1 />} />
        <Route path="/purchase2" element={<Purchase2 />} />
        <Route path="/purchase3" element={<Purchase3 />} />
        <Route path="/createblog" element={<CreateBlog />} />
        


      </Routes>

      {location.pathname !== '/dashboard' && <Footer />}

    </div>
  );
};

export default MainLayout;
