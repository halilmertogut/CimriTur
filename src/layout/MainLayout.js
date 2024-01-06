import React from 'react';
import Footer from "../components/Footer"
import Header from '../components/Header';
import { Routes, Route } from 'react-router-dom'; // Routes ve Route eklenmiş
// Diğer gerekli bileşenleri içe aktarın
import Register from '../pages/Register';
import HomePage from '../pages/HomePage'
import Login from '../pages/Login'
import { useSelector } from 'react-redux';

const MainLayout = () => {
  return (
    <div className="bg-white">
        <Header />
      <Routes> {/* Alt bileşenler için Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/giris" element={<Login />} />
        {/* <Route path="/turlar" element={<FeatureCollection />} /> */}
        <Route path="/kayit" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default MainLayout;
