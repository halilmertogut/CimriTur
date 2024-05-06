import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const AdminNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-900 text-white shadow-lg w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0">
                        <h1 className="text-lg font-bold">Yönetici Kontrol Paneli</h1>
                    </div>
                    <div className="block md:hidden">
                        <button onClick={toggleMenu} className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Menüyü aç/kapat</span>
                            <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-16 6h16" />
                            </svg>
                            <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className={`${isOpen ? 'block' : 'hidden'} md:block`}>
                        <div className="ml-10 flex items-baseline space-x-4">
                            <NavLink to="/main-admin-dashboard" className="px-3 py-2 rounded-md text-sm font-medium" activeClassName="text-blue-500 bg-gray-700">Anasayfa</NavLink>
                            <NavLink to="/main-admin-dashboard/user-actions" className="px-3 py-2 rounded-md text-sm font-medium" activeClassName="text-blue-500 bg-gray-700">Kullanıcı İşlemleri</NavLink>
                            <NavLink to="/main-admin-dashboard/agency-actions" className="px-3 py-2 rounded-md text-sm font-medium" activeClassName="text-blue-500 bg-gray-700">Ajans İşlemleri</NavLink>
                            <NavLink to="/main-admin-dashboard/freelance-actions" className="px-3 py-2 rounded-md text-sm font-medium" activeClassName="text-blue-500 bg-gray-700">Freelancer İşlemleri</NavLink>
                            <NavLink to="/main-admin-dashboard/settings" className="px-3 py-2 rounded-md text-sm font-medium" activeClassName="text-blue-500 bg-gray-700">Ayarlar</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default AdminNavbar;
