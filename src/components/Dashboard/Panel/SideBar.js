import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    // State to manage which dropdown is currently active
    const [activeDropdown, setActiveDropdown] = useState('');

    // Function to toggle dropdowns
    const toggleDropdown = (section) => {
        setActiveDropdown(activeDropdown === section ? '' : section);
    };

    // Helper to check if a dropdown is open
    const isDropdownOpen = (section) => activeDropdown === section;

    return (
        <aside className="w-64 h-screen bg-gray-600 text-white flex flex-col justify-between font-montserrat overflow-y-auto">
            <div>
                {/* Reservation Button */}
                <div className="px-4 py-3 border-b">
                    <button className="w-full text-left font-semibold text-lg hover:bg-indigo-700 rounded-md">+ Rezervasyon</button>
                </div>
                <nav className="mt-2 text-sm">

                    {/* Records Section */}
                    <div className="px-4 py-3 text-lg font-semibold border-b ">Kayıtlar</div>
                    <div className="px-4 py-2">
                        <button
                            onClick={() => toggleDropdown('reservations')}
                            className="w-full text-left flex justify-between items-center font-semibold hover:bg-indigo-700 rounded-md"
                        >
                            <span>Rezervasyonlar</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transition-transform duration-500 ${isDropdownOpen('reservations') ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {isDropdownOpen('reservations') && (
                            <div className="pl-4">
                                <NavLink to="/reservations/pending" className="block px-4 py-2 rounded-md hover:bg-indigo-700">Onay Bekleyenler</NavLink>
                                <NavLink to="/reservations/confirmed" className="block px-4 py-2 rounded-md hover:bg-indigo-700">Rezervasyonlar</NavLink>
                                <NavLink to="/reservations/cancelled" className="block px-4 py-2 rounded-md hover:bg-indigo-700">İptaller</NavLink>
                                <NavLink to="/reservations/cart-abandonment" className="block px-4 py-2 rounded-md hover:bg-indigo-700">Sepet Terk</NavLink>
                                <NavLink to="/reservations/new" className="block px-4 py-2 rounded-md hover:bg-indigo-700">Yeni Rezervasyon</NavLink>
                            </div>
                        )}
                    </div>

                    {/* Customer Management Section */}
                    <div className="px-4 py-2">
                        <button
                            onClick={() => toggleDropdown('customerManagement')}
                            className="w-full text-left flex justify-between items-center font-semibold hover:bg-indigo-700 rounded-md"
                        >
                            <span>Müşteri Yönetimi</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transition-transform duration-500 ${isDropdownOpen('customerManagement') ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {isDropdownOpen('customerManagement') && (
                            <div className="pl-4">
                                <NavLink to="/customer-management/customers" className="block px-4 py-2 rounded-md hover:bg-indigo-700">Müşteriler</NavLink>
                                <NavLink to="/customer-management/new-customer" className="block px-4 py-2 rounded-md hover:bg-indigo-700">Yeni Müşteri</NavLink>
                                <NavLink to="/customer-management/transfers" className="block px-4 py-2 rounded-md hover:bg-indigo-700">Aktarımlar</NavLink>
                                <NavLink to="/customer-management/blacklist" className="block px-4 py-2 rounded-md hover:bg-indigo-700">Kara Liste</NavLink>
                                <NavLink to="/customer-management/coupons" className="block px-4 py-2 rounded-md hover:bg-indigo-700">Kuponlar</NavLink>
                            </div>
                        )}
                    </div>

                    {/* Reports Section */}
                    <div className="px-4 py-3 text-lg font-semibold border-b ">Raporlar</div>
                    <div className="px-4 py-2">
                        <button
                            onClick={() => toggleDropdown('reports')}
                            className="w-full text-left flex justify-between items-center font-semibold hover:bg-indigo-700 rounded-md"
                        >
                            <span>Raporlar</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transition-transform duration-500 ${isDropdownOpen('reports') ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {isDropdownOpen('reports') && (
                            <div className="pl-4">
                                <NavLink to="/salesreports" className="block px-4 py-2 rounded-md hover:bg-indigo-700">Satış Raporu</NavLink>
                                <NavLink to="/dailyreport" className="block px-4 py-2 rounded-md hover:bg-indigo-700">Gün Raporu</NavLink>
                                <NavLink to="/tourreport" className="block px-4 py-2 rounded-md hover:bg-indigo-700">Tur Raporları</NavLink>
                                <NavLink to="/hotelreport" className="block px-4 py-2 rounded-md hover:bg-indigo-700">Otel Raporu</NavLink>
                            </div>
                        )}
                    </div>

                    {/* Tours and Activities Section */}
                    <div className="px-4 py-3 text-lg font-semibold border-b ">Tur ve Aktiviteler</div>
                    <div className="px-4 py-2">
                        <button
                            onClick={() => toggleDropdown('toursAndActivities')}
                            className="w-full text-left flex justify-between items-center font-semibold hover:bg-indigo-700 rounded-md"
                        >
                            <span>Tur ve Aktiviteler</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transition-transform duration-500 ${isDropdownOpen('toursAndActivities') ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {isDropdownOpen('toursAndActivities') && (
                            <div className="pl-4">
                                <NavLink to="/tours/new" className="block px-4 py-2 rounded-md hover:bg-indigo-700">Yeni Tur Ekle</NavLink>
                                <NavLink to="/activities/new" className="block px-4 py-2 rounded-md hover:bg-indigo-700">Tamamlanmış Turlar</NavLink>
                                <NavLink to="/activities/new" className="block px-4 py-2 rounded-md hover:bg-indigo-700">Tur Kategorileri</NavLink>
                            </div>
                        )}
                    </div>

                </nav>
            </div>

            <div className="px-4 py-3">
                {/* Logout or profile section */}
                <button className="w-full px-4 py-2 text-left font-semibold hover:bg-indigo-700 rounded-md">Çıkış</button>
            </div>
        </aside>
    );
};

export default Sidebar;
