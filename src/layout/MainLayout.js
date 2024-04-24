import React, { useEffect, useRef } from 'react';
import Footer from "../components/Footer";
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'; // Import useLocation and Navigate
import HomePage from '../pages/HomePage';
import { useSelector } from 'react-redux';
import LandingPage from '../components/Dashboard/LandingPage'; // Adjust the path as necessary
import Navbar from '../components/Navbar';
import FiltrationPage from '../pages/FiltrationPage';
import Blog from '../pages/Blog';
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
import AddNew from '../components/Dashboard/Panel/AddNew/AddNew';
import AddNewHotel from '../components/Dashboard/Panel/AddNew/AddNewHotel';
import AddNewDetail from '../components/Dashboard/Panel/AddNew/AddNewDetail'
import AgencySignUp from '../components/Dashboard/Panel/AgencyOperations/AgencySignup'
import AddNewEdit from '../components/Dashboard/Panel/AddNew/AddNewEdit';

import AgencyLogin from '../components/Dashboard/Panel/AgencyOperations/AgencyLogin';
import AddNewReservationPrice from '../components/Dashboard/Panel/AddNew/AddNewReservationPrice';
import SignupAuthentication from '../components/SignupAuthentication';
import Notifications from '../pages/Profile/Notifications';
import FreelancePage from '../components/Dashboard/FreelancePage';
import GuideSignupForm from '../components/Freelance/GuideSignupForm';
import GuideProfilePage from '../components/Dashboard/GuideProfilePage';
import Sidebar from '../components/Dashboard/Panel/SideBar';
import SalesReport from '../components/Dashboard/Panel/Reports/SalesReport';
import DayReport from '../components/Dashboard/Panel/Reports/DayReport';
import TourReports from '../components/Dashboard/Panel/Reports/TourReports';
import PasswordResetSent from '../pages/PasswordResetSent';
import PasswordResetForm from '../pages/PasswordResetForm';
import FeedbackForm from '../pages/FeedbackForm';
import TourCategories from '../components/Dashboard/Panel/AddNew/TourCategories';
import TourComment from '../pages/Profile/TourComment';
import SellerProfile from '../pages/SellerProfile';
import AccessDenied from '../pages/AccessDenied';
import AgencyHomePage from '../pages/AgencyHomePage'

import ProtectedRoute from '../ProtectedRoute';


const MainLayout = () => {
  const user = useSelector((state) => state.login?.user);
  const location = useLocation(); // Use the location object to determine the current route

  console.log(user);
  return (
    <div className="bg-white">
      {/* Conditionally render Navbar only on the landing page */}
      {location.pathname !== '/dashboard-landing' && <Navbar />}


      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard-landing" element={<LandingPage />} />
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
        <Route path="/agency-signup" element={<AgencySignUp />} />
        <Route path="/agency-login" element={<AgencyLogin />} />
        <Route path="/signupauthentication" element={<SignupAuthentication />} />
        <Route path="/freelancepage" element={<FreelancePage />} />
        <Route path="/guidesignupform" element={<GuideSignupForm />} />
        <Route path="/guideprofilepage" element={<GuideProfilePage />} />
        <Route path="/passwordresetsent" element={<PasswordResetSent />} />
        <Route path="/passwordresetform" element={<PasswordResetForm />} />
        <Route path="/feedbackform" element={<FeedbackForm />} />
        <Route path="/sellerprofile" element={<SellerProfile />} />
        <Route path="/accessdenied" element={<AccessDenied />} />
        <Route path="/agencyhomepage" element={<AgencyHomePage />} />
        

        {/* Routes for Report Pages */}
        <Route path="/salesreport" element={<SalesReport />} />
        <Route path="/dayreport" element={<DayReport />} />
        <Route path="/tourreports" element={<TourReports />} />


        <Route path="*" element={<Page404 />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/personalinfo" element={<PersonalInfo />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/notifications" element={<Notifications />} />

        <Route path='/tourcategories' element={<TourCategories/>}/>
        <Route path='/sidebar' element={<Sidebar />} />
        <Route path='/addtour' element={<AddNew />} />
        <Route path='/addhotel' element={<AddNewHotel />} />
        <Route path='/addnewdetail' element={<AddNewDetail />} />
        <Route path='/addnewedit' element={<AddNewEdit />} />

    
        <Route path='/addnewreservationprice' element={<AddNewReservationPrice />} />
        <Route path='/tourcomment'  element={<TourComment/>} />
        {/*  <Route path='/listedtour' element={<ListedTour />} />
     Mert Uras Added Routes, fyi Halil */}

      </Routes>

      {location.pathname !== '/dashboard-landing' && <Footer />}

    </div>
  );
};


export default MainLayout;
