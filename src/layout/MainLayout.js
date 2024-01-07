import React from 'react';
import Footer from "../components/Footer"
import Header from '../components/Header';
import { Routes, Route } from 'react-router-dom'; // Routes ve Route eklenmiş
// Diğer gerekli bileşenleri içe aktarın
import Register from '../pages/Register';
import HomePage from '../pages/HomePage'
import Login from '../pages/Login'
import { useSelector } from 'react-redux';
import EditProfile from '../pages/EditProfile';

const MainLayout = () => {
  const user = useSelector((state) => state.login?.user);
  console.log(user);
  return (
    <div className="bg-white">
        <Header />
      <Routes> {/* Alt bileşenler için Routes */}
        <Route path="/" element={<HomePage />} />
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
