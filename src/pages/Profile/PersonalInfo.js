import React, { useState } from 'react';
import { ChevronDownIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

const InputField = ({ label, type, value, onChange }) => {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                className="mt-1 p-2 w-full border rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
            />
        </div>
    );
};

const Navbar = () => (
    <div className="w-full font-montserrat bg-white shadow px-5 py-2 flex justify-between items-center">
    <div className="font-semibold text-xl">Profil Düzenleme</div>
    <div>
      <Link to="/profile" className="text-indigo-500 mr-4 hover:text-indigo-700">Profil</Link>
      <Link to="/personalinfo" className="text-indigo-500 mr-4 hover:text-indigo-700">Kişisel Bilgiler</Link>
      <Link to="/payment" className="text-indigo-500 mr-4 hover:text-indigo-700">Ödeme</Link>
      <Link to="/notifications" className="text-indigo-500 hover:text-indigo-700">Bildirimler</Link>
    </div>
  </div>
);
const Dropdown = ({ title, items, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className="relative w-full">
            <button onClick={toggleDropdown} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg flex items-center justify-between w-full">
                {title}
                <ChevronDownIcon className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
            </button>
            {isOpen && (
                <div className="absolute inset-x-0 top-full mt-1 bg-white border rounded-lg shadow-lg z-10"
                     style={{ maxWidth: 'calc(100% - 2rem)' }}>
                    <div className="grid grid-cols-3 gap-4 p-4">
                        {items.map((item, index) => (
                            <div key={index} className="text-gray-800 cursor-pointer p-2 rounded hover:bg-gray-100 transition-colors duration-200 ease-in-out"
                                 onClick={() => onSelect(item)}>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};




const PersonalInfo = () => {
    const [name, setName] = useState("Peter Griffin");
    const [email, setEmail] = useState("merturas@icloud.com");
    const [phone, setPhone] = useState("+90");
    const [idCard, setIdCard] = useState("***");
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [selectedTours, setSelectedTours] = useState([]);

    const tourCategories = ["Ortadoğu Turları", "Macera Turları", "Eğitim Turları", "Kapadokya Turları", "Akdeniz Turları", "Güneydoğu Turları", "Doğu Anadolu Turları", "Keşif Turları", "Aile Turları", "Ege Turları", "Karadeniz Turları", "Vizesiz Turlar", "Kültür Turları", "Günübirlik Turlar", "Uzak Doğu Turları", "Afrika Turları", "Yurtdışı Turları", "Şehir Turları", "Avrupa Turları", "Kayak Turu"];

    const handleSelectTour = (tour) => {
        if (!selectedTours.includes(tour)) {
            setSelectedTours([...selectedTours, tour]);
        }
    };

    const handleRemoveTour = (tour) => {
        setSelectedTours(selectedTours.filter(t => t !== tour));
    };

    return (
        <div className="flex flex-col h-auto">
            <Navbar />
            <div className="flex justify-center items-center mt-10">
                <div className="w-full max-w-screen-lg px-4 sm:px-6 lg:px-8 bg-white flex flex-col justify-center items-center gap-5">
                    <div className="text-red-500 text-2xl font-semibold leading-9 mb-5 text-center">Kişisel Bilgiler</div>
             

                    <Dropdown title="Select Tour Category" items={tourCategories} onSelect={handleSelectTour} />
                    <div className="w-full mt-5">
                        <div className="text-neutral-800 text-xl font-semibold mb-3">Tur Tercihleri</div>
                        <div className="flex flex-wrap gap-2">
                            {selectedTours.map((tour, index) => (
                                <div key={index} className="bg-indigo-200 flex items-center text-indigo-800 p-2 rounded">
                                    {tour}
                                    <XIcon className="w-4 h-4 ml-2 cursor-pointer" onClick={() => handleRemoveTour(tour)} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full flex flex-col sm:flex-row gap-5">
                        <div className="w-full sm:w-[50%] flex flex-col gap-5">
                            <InputField label="Ad - Soyad" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                            <InputField label="Mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <InputField label="Telefon" type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            <InputField label="Kimlik Kartı" type="text" value={idCard} onChange={(e) => setIdCard(e.target.value)} />
                        </div>
                        <div className="w-full sm:w-[50%] flex flex-col gap-5 relative">
                            <div className="bg-neutral-100 p-4 rounded-xl">
                                <div className="text-neutral-800 text-xl font-semibold text-center mb-4">Şifre Değiştir</div>
                                <InputField label="Güncel Şifre" type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
                                <InputField label="Yeni Şifre" type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                                <InputField label="Yeni Şifreyi Doğrula" type="password" value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} />
                                <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700 mt-5 w-full sm:w-auto">Kaydet</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;
