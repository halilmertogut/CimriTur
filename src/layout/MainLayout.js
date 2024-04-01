import React, { useEffect, useRef } from 'react';
import Footer from "../components/Footer";
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'; // Import useLocation and Navigate
import Register from '../pages/Register';
import HomePage from '../pages/HomePage';
import Login from '../pages/Login';
import { useSelector } from 'react-redux';
import EditProfile from '../pages/EditProfile';
import LandingPage from '../components/Dashboard/LandingPage'; // Adjust the path as necessary
import Navbar from '../components/Navbar';
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
import ForgetPassword from '../pages/ForgetPassword';
import Profile from '../pages/Profile/Profile';
import PersonalInfo from '../pages/Profile/PersonalInfo';
import Payment from '../pages/Profile/Payment';
import Page404 from '../pages/Page404';
import AddNew from '../components/Dashboard/Panel/AddNew';
import AgencySignUp from '../components/Dashboard/Panel/AgencySignup'

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
        <Route path="/dashboard" element={<LandingPage />} />
        <Route path="/register-guide" element={<Register />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/explore" element={<FiltrationPage />} />
        <Route path="/blog-detail" element={<BlogDetail />} />
        <Route path="/tour-detail" element={<TourDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/purchase-1" element={<Purchase1 />} />
        <Route path="/purchase-2" element={<Purchase2 />} />
        <Route path="/purchase-3" element={<Purchase3 />} />
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="/reset-password" element={<ForgetPassword />} />
        <Route path="/agencysignup" element={<AgencySignUp />} />
        

        {/* Catch-all route for 404 screen */}
        <Route path="*" element={<Page404 />} />

        {/*Mert Uras Added Routes, fyi Halil */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/personalinfo" element={<PersonalInfo />} />
        <Route path="/payment" element={<Payment />} />



        <Route path='/addtour' element={<AddNew />} />
         {/*  <Route path='/listedtour' element={<ListedTour />} />
     Mert Uras Added Routes, fyi Halil */}

      </Routes>

      {location.pathname !== '/dashboard' && <Footer />}

    </div>
  );
};


export default MainLayout;
