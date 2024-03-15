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

const MainLayout = () => {
  const user = useSelector((state) => state.login?.user);
  console.log(user);
  return (
    <div className="bg-white">
        <Navbar />
        <HeroSection />
        <Tours />
        <Product />
        <Article />
      <Routes> 
        {/* <Route path="/" element={<HomePage />} />  */}
        <Route path="/login" element={<Login />} />
        {/* <Route path="/turlar" element={<FeatureCollection />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/register-guide" element={<Register />} />
        <Route path="/edit-profile" element={<EditProfile />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default MainLayout;
