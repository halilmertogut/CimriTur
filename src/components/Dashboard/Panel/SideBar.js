// Sidebar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    // State to manage dropdowns for sidebar sections
    const [dropdowns, setDropdowns] = useState({
        records: false,
        toursAndActivities: false, // Added this state
        productsAndServices: false,
        managementAndTools: false,
        // ... additional sections if necessary
    });

    // Function to toggle dropdowns
    const toggleDropdown = (section) => {
        setDropdowns(prevDropdowns => ({
            ...prevDropdowns,
            [section]: !prevDropdowns[section]
        }));
    };

    return (
        <aside className="w-64 h-screen bg-indigo-600 text-white flex flex-col justify-between font-montserrat">
            <div>
                {/* Reservation Button */}
                <div className="px-4 py-3">
                    <button className="w-full text-left font-semibold text-lg hover:bg-indigo-700 rounded-md">+ Rezervasyon</button>
                </div>
                <nav className="mt-2 text-sm">

                    {/* Records Section */}
                    <div className="px-4 py-3 text-lg font-semibold ">Kayıtlar</div>
                    <div className="px-4 py-2">
                        <button
                            onClick={() => toggleDropdown('reservations')}
                            className="w-full text-left flex justify-between items-center font-semibold hover:bg-indigo-700 rounded-md"
                        >
                            <span>Rezervasyonlar</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transition-transform duration-300 ${dropdowns.reservations ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {dropdowns.reservations && (
                            <div className="pl-4">
                                <NavLink to="/reservations/pending" className="block px-4 py-2 rounded-md hover:bg-indigo-700">Onay Bekleyenler</NavLink>
                                <NavLink to="/reservations/confirmed" className="block px-4 py-2 rounded-md hover:bg-indigo-700">Rezervasyonlar</NavLink>
                                <NavLink to="/reservations/cancelled" className="block px-4 py-2 rounded-md hover:bg-indigo-700">İptaller</NavLink>
                                <NavLink to="/reservations/cart-abandonment" className="block px-4 py-2 rounded-md hover:bg-indigo-700">Sepet Terk</NavLink>
                                <NavLink to="/reservations/new" className="block px-4 py-2 rounded-md hover:bg-indigo-700">Yeni Rezervasyon</NavLink>
                            </div>
                        )}
                    </div>


                    <div className="px-4 py-2">
                        <button
                            onClick={() => toggleDropdown('customerManagement')}
                            className="w-full text-left flex justify-between items-center font-semibold hover:bg-indigo-700 rounded-md"
                        >
                            <span>Müşteri Yönetimi</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transition-transform duration-300 ${dropdowns.customerManagement ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {dropdowns.customerManagement && (
                            <div className="pl-4">
                                <NavLink to="/customer-management/customers" className="block px-4 py-2 rounded-md hover:bg-indigo-700">Müşteriler</NavLink>
                                <NavLink to="/customer-management/new-customer" className="block px-4 py-2 rounded-md hover:bg-indigo-700">Yeni Müşteri</NavLink>
                                <NavLink to="/customer-management/transfers" className="block px-4 py-2 rounded-md hover:bg-indigo-700">Aktarımlar</NavLink>
                                <NavLink to="/customer-management/blacklist" className="block px-4 py-2 rounded-md hover:bg-indigo-700">Kara Liste</NavLink>
                                <NavLink to="/customer-management/coupons" className="block px-4 py-2 rounded-md hover:bg-indigo-700">Kuponlar</NavLink>
                            </div>
                        )}
                    </div>
                    <div className="px-4 py-2">
                        <button
                            onClick={() => toggleDropdown('reports')}
                            className="w-full text-left flex justify-between items-center font-semibold hover:bg-indigo-700 rounded-md"
                        >
                            <span>Raporlar</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transition-transform duration-300 ${dropdowns.reports ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {dropdowns.reports && (
                            <div className="pl-4">
                                <NavLink to="/reports/sales" className="block px-4 py-2 rounded-md hover:bg-indigo-700">Satış Raporu</NavLink>
                                <NavLink to="/reports/daily" className="block px-4 py-2 rounded-md hover:bg-indigo-700">Gün Raporu</NavLink>
                                <NavLink to="/reports/tour" className="block px-4 py-2 rounded-md hover:bg-indigo-700">Tur Raporları</NavLink>
                                <NavLink to="/reports/hotel" className="block px-4 py-2 rounded-md hover:bg-indigo-700">Otel Raporu</NavLink>
                            </div>
                        )}
                    </div>
                    {/* Products and Services Section */}
                    <div className="px-4 py-3 text-lg font-semibold ">Ürün ve Hizmetler</div>
                    {/* Tours and Activities Section */}
                    <div className="px-4 py-2">
                        <button
                            onClick={() => toggleDropdown('toursAndActivities')}
                            className="w-full text-left flex justify-between items-center font-semibold hover:bg-indigo-700 rounded-md"
                        >
                            <span>Tur ve Aktiviteler</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transition-transform duration-300 ${dropdowns.toursAndActivities ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              // ... the path for the arrow icon continues here ...
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {dropdowns.toursAndActivities && (
                            <ul className="mt-2 pl-4">
                                <li>
                                    <NavLink
                                        to="/addtour"
                                        className={({ isActive }) => isActive ? 'bg-indigo-700 block px-4 py-2 rounded-md' : 'block px-4 py-2 rounded-md hover:bg-indigo-700'}
                                    >
                                        Yeni Ekle
                                    </NavLink>
                                </li>
                                {/* Add other sub-menu items here */}
                            </ul>
                        )}

                    </div>
                    {/* ... add more sections as needed ... */}

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
