import React from "react";
import { Link } from 'react-router-dom';

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
export default Navbar;