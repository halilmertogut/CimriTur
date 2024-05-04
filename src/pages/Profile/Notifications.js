import React from "react";
import { Link } from 'react-router-dom';
import { BellIcon } from '@heroicons/react/outline';
import Navbar from "./Navbar";


const notifications = [
  { id: 1, message: "Roma için başarılı bir tur rezervasyonu yaptınız. Maceranız için hazır olun!", date: "01.05.2024" },
  { id: 2, message: "Paris turunuz onaylanmıştır. İyi yolculuklar!", date: "15.04.2024" },
  { id: 3, message: "Maldivler Kaçamağı için ödemeniz işleme alındı.", date: "12.04.2024" }
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
