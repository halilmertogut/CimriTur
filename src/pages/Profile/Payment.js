import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { CreditCardIcon, UserIcon, CalendarIcon, LockClosedIcon } from '@heroicons/react/outline';

// Navbar component
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

// Input field component with icon and label, matching PersonalInfo style
const InputField = ({ icon, label, value, onChange, type = "text" }) => (
    <div className="flex flex-col mb-4">
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <div className="mt-1 flex items-center border rounded-md focus:ring-indigo-500 focus:border-indigo-500">
            {icon}
            <input
                type={type}
                value={value}
                onChange={onChange}
                className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                required
            />
        </div>
    </div>
);

// Payment form component
const Payment = () => {
    const [cardNumber, setCardNumber] = useState("");
    const [cardHolder, setCardHolder] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cvv, setCvv] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted!");
    };

    return (

      <div className="flex flex-col h-auto">
      <Navbar />
      <h1 className="mt-10 text-red-500 text-2xl font-semibold leading-9 text-center">Ödeme Bilgisi</h1>
      <div className="flex justify-center items-center mt-10">
                <form onSubmit={handleSubmit} className="w-full sm:w-[50%] flex flex-col">
                    <InputField
                        icon={<CreditCardIcon className="h-5 w-5 text-gray-500 mx-2" />}
                        label="Kart Numarası"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                    />
                    <InputField
                        icon={<UserIcon className="h-5 w-5 text-gray-500 mx-2" />}
                        label="Kart Sahibinin Adı"
                        value={cardHolder}
                        onChange={(e) => setCardHolder(e.target.value)}
                    />
                    <InputField
                        icon={<CalendarIcon className="h-5 w-5 text-gray-500 mx-2" />}
                        label="Son Kullanım Tarihi (MM/YY)"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                    />
                    <InputField
                        icon={<LockClosedIcon className="h-5 w-5 text-gray-500 mx-2" />}
                        label="CVV"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        type="password"
                    />
                    <button type="submit" className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700 mt-5 w-full sm:w-auto">Kaydet</button>
                </form>
            </div>
        </div>
    );
};

export default Payment;
