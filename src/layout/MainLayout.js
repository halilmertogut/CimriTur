import React, {  } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; // Import useLocation and Navigate
import { useSelector } from 'react-redux';
import Navbar from '../components/home-page/Navbar';
import HomePage from '../pages/HomePage';
import LandingPage from '../components/dashboard/landing-page/LandingPage';
import Footer from '../components/home-page/Footer';
import TourComment from '../pages/Profile/TourComment';
import AddNewReservationPrice from '../components/dashboard/Panel/AddNew/AddNewReservationPrice';
import DashboardMainPage from '../components/dashboard/Panel/DashboardMainPage';
import Cancellations from '../components/dashboard/Panel/Reservations/Cancellations';
import Promotion from '../pages/Promotion';
import AddNewDetail from '../components/dashboard/Panel/AddNew/AddNewDetail';
import AddNewHotel from '../components/dashboard/Panel/AddNew/AddNewHotel';
import TourCategories from '../components/dashboard/Panel/AddNew/TourCategories';
import Sidebar from '../components/dashboard/Panel/SideBar';
import Notifications from '../pages/Profile/Notifications';
import FiltrationPage from '../pages/FiltrationPage';
import BlogDetail from '../pages/BlogDetail';
import TourDetail from '../pages/TourDetail';
import Blog from '../pages/Blog';
import ContactUs from '../pages/ContactUs';
import SignUp from '../components/login-signup/Signup';
import Payment from '../pages/Profile/Payment';
import PersonalInfo from '../pages/Profile/PersonalInfo';
import Profile from '../pages/Profile/Profile';
import Page404 from '../pages/404/Page404'
import DayReport from '../components/dashboard/Panel/Reports/DayReport';
import SalesReport from '../components/dashboard/Panel/Reports/SalesReport';
import TourReports from '../components/dashboard/Panel/Reports/TourReports';
import UserTotalActions from '../components/admin-dashboard/UserTotalActions';
import AgencyHomePage from '../pages/AgencyHomePage';
import AccessDenied from '../pages/404/AccessDenied';
import SellerProfile from '../pages/SellerProfile';
import FeedbackForm from '../pages/FeedbackForm';
import PasswordResetForm from '../pages/PasswordResetForm';
import PasswordResetSent from '../pages/PasswordResetSent';
import GuideProfilePage from '../components/dashboard/landing-page/GuideProfilePage';
import GuideSignupForm from '../components/freelance/GuideSignupForm';
import FreelancePage from '../components/dashboard/landing-page/FreelancePage';
import SignupAuthentication from '../components/login-signup/SignupAuthentication';
import AgencyLogin from '../components/dashboard/Panel/AgencyOperations/AgencyLogin';
import AgencySignUp from '../components/dashboard/Panel/AgencyOperations/AgencySignup';
import ForgetPassword from '../pages/ForgetPassword';
import CreateBlog from '../pages/CreateBlog';
import Purchase3 from '../components/purchase/Purchase3';
import Purchase2 from '../components/purchase/Purchase2';
import Purchase1 from '../components/purchase/Purchase1';
import AboutUs from '../pages/AboutUs';
import AddNew from '../components/dashboard/Panel/AddNew/AddNew'
import MainAdminDashboard from '../components/admin-dashboard/MainAdminDashboard'
import AddActivityPage from '../components/admin-dashboard/AddActivityPage'
import UserActions from '../components/admin-dashboard/UserActions';
import AgencyActions from '../components/admin-dashboard/AgencyActions';
import AgencyTotalActions from '../components/admin-dashboard/AgencyTotalActions';
import FreelanceActions from '../components/admin-dashboard/FreelanceActions';
import FreelancerTotalActions from '../components/admin-dashboard/FreelancerTotalActions';
import FreelancerDetails from '../components/admin-dashboard/FreelancerDetails';
import AgencyDetails from '../components/admin-dashboard/AgencyDetails';
import Bookings from '../components/admin-dashboard/Bookings';
import SystemReports from '../components/admin-dashboard/SystemReports';
import TourListings from '../components/admin-dashboard/TourListings';
import Support from '../components/admin-dashboard/Support';


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
        <Route path="/usertotalactions" element={<UserTotalActions />} />
        <Route path="/user-actions/:userId" element={<UserTotalActions />} />
        
 
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
        <Route path='/promotion' element={<Promotion />} />

        <Route path='/cancellations' element={<Cancellations />} />

        <Route path='/dash-main' element={<DashboardMainPage />} />
        <Route path='/addnewreservationprice' element={<AddNewReservationPrice />} />
        <Route path='/tourcomment'  element={<TourComment/>} />

        <Route path='/main-admin-dashboard'  element={<MainAdminDashboard/>} />
        <Route path='/add-activity-page'  element={<AddActivityPage/>} />
        <Route path="/signup-authentication" element={<SignupAuthentication />} />
        <Route path="/freelance-page" element={<FreelancePage />} />
        <Route path="/guide-signup-form" element={<GuideSignupForm />} />
        <Route path="/guide-profile-page" element={<GuideProfilePage />} />
        <Route path="/password-reset-sent" element={<PasswordResetSent />} />
        <Route path="/password-reset-form" element={<PasswordResetForm />} />
        <Route path="/feedback-form" element={<FeedbackForm />} />
        <Route path="/seller-profile" element={<SellerProfile />} />
        <Route path="/access-denied" element={<AccessDenied />} />
        <Route path="/agency-homepage" element={<AgencyHomePage />} />
        <Route path="/user-actions" element={<UserActions />} />
        <Route path="/agency-actions" element={<AgencyActions />} />
        <Route path="/freelance-actions" element={<FreelanceActions />} />
        <Route path="/freelancer-actions/:freelanceId" element={<FreelancerTotalActions />} />
        <Route path="/freelancer-details/:freelancerId" element={<FreelancerDetails />} />
        <Route path="/agency-details/:agencyId" element={<AgencyDetails />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/system-reports" element={<SystemReports />} />
        <Route path="/tour-listings" element={<TourListings />} />
        <Route path="/support" element={<Support />} />

      </Routes>

      {location.pathname !== '/dashboard-landing' && <Footer />}

    </div>
  );
};


export default MainLayout;
