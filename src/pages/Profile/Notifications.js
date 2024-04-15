import React from "react";
import { Link } from 'react-router-dom';
import { BellIcon } from '@heroicons/react/outline';

// Navbar component - Similar to PersonalInfo
const Navbar = () => (
  <div className="w-full font-montserrat bg-white shadow px-5 py-2 flex justify-between items-center">
    <div className="font-semibold text-xl">Profil Yönetimi</div>
    <div>
      <Link to="/profile" className="text-indigo-500 mr-4 hover:text-indigo-700">Profil</Link>
      <Link to="/personalinfo" className="text-indigo-500 mr-4 hover:text-indigo-700">Kişisel Bilgiler</Link>
      <Link to="/payment" className="text-indigo-500 mr-4 hover:text-indigo-700">Ödeme</Link>
      <Link to="/notifications" className="text-indigo-500 hover:text-indigo-700">Bildirimler</Link>
    </div>
  </div>
);

// Dummy data for notifications
const notifications = [
  { id: 1, message: "You have successfully booked a tour to Rome. Get ready for your adventure!", date: "2024-05-01" },
  { id: 2, message: "Your tour to Paris has been confirmed. Bon voyage!", date: "2024-04-25" },
  { id: 3, message: "Your payment for the Maldives getaway has been processed.", date: "2024-04-20" }
];

// Notifications component
const Notifications = () => {
  return (
    <div className="font-montserrat flex flex-col items-center justify-center h-auto ">
      <Navbar />
      <div className="w-full max-w-screen-lg px-4 sm:px-6 lg:px-8 bg-white flex flex-col justify-start items-start gap-5 mt-20">
        <h1 className="text-red-500 text-2xl font-semibold leading-9 mb-5 text-center">Bildirimler</h1>
        <div className="w-full">
          {notifications.map((notification) => (
            <div key={notification.id} className="bg-gray-100 p-4 rounded-md shadow mb-4 flex items-center justify-between">
              <div>
                <BellIcon className="h-6 w-6 text-red-500 mr-3" />
                <span className="text-neutral-800 text-lg font-semibold">{notification.message}</span>
                <div className="text-neutral-500 text-sm">{notification.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
