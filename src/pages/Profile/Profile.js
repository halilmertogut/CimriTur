import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import PersonalInfo from "./PersonalInfo";
import LoginSecurity from "./LoginSecurity";
import Payment from "./Payment";
import Notifications from "./Notifications";
import { UserCircleIcon, ChatIcon,CreditCardIcon, BellIcon } from '@heroicons/react/solid';
import { useSelector } from "react-redux";
import CancelTour from "./CancelTour";  // Import the CancelTour component

const Profile = () => {
    const user = useSelector(state => state.auth.user);
    const [activeTab, setActiveTab] = useState('past'); // Controls which tab is active
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTour, setSelectedTour] = useState(null);

    const pastTours = [
        { id: 1, name: "Paris Turu", date: "2021-09-10", reservationNo: "RES101" },
        { id: 2, name: "Roma Turu", date: "2021-10-15", reservationNo: "RES102" }
    ];

    const activeTours = [
        { id: 1, name: "İstanbul Turu", reservationNo: "RES123", cancellable: true },
        { id: 2, name: "Ankara Turu", reservationNo: "RES456", cancellable: false }
    ];

    const toursInCancellation = [
        { id: 3, name: "İstanbul Turu", reservationNo: "RES345", status: "İptal aşamasında" },
        { id: 4, name: "Ankara Turu", reservationNo: "RES456", status: "İptal onaylanmıştır" }
    ];
    

    const handleOpenModal = (tour) => {
        setSelectedTour(tour);
        setIsModalOpen(true);
    };


    return (
        <div className="font-montserrat flex flex-col items-center justify-center h-auto mt-20 mb-20">
            <div className="w-full max-w-screen-lg px-4 sm:px-6 lg:px-8 bg-white flex flex-col justify-start items-start gap-5">
                <div className="w-full flex flex-col sm:flex-row justify-start items-start gap-5">
                    <div className="w-full sm:w-1/2 flex flex-col justify-start items-start gap-5 pt-10">
                        <h1 className="text-red-500 text-2xl font-semibold leading-9">Hesap Bilgileri</h1>
                        <div className="flex flex-col sm:flex-row items-center gap-3 mt-5">
                            <img src="https://via.placeholder.com/150" alt="Profile Photo" className="w-28 h-28 rounded-full border-4 border-red-500" />
                            <div className="flex flex-col">
                                <span className="text-neutral-800 text-lg font-semibold">{user.firstName} {user.lastName}</span>
                                <span className="text-neutral-800 text-lg font-normal">{user.email}</span>
                            </div>
                        </div>
                        <Link to="/personalinfo" className="text-red-500 text-lg font-semibold underline mt-3">Profil</Link>
                        <div className="text-neutral-800 text-sm font-semibold mt-5 flex gap-2">
                            <span className="cursor-pointer underline" onClick={() => setActiveTab('past')}>Geçmiş Turlarım</span>
                            {" | "}
                            <span className="cursor-pointer underline" onClick={() => setActiveTab('active')}>Aktif Turlarım</span>
                            {" | "}
                            <span className="cursor-pointer underline" onClick={() => setActiveTab('cancellation')}>İptal Sürecinde Olan Turlarım</span>
                        </div>

                        <CancelTour isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} tour={selectedTour} user={user} />

                        <div className="mt-5 flex flex-col w-full">
                            {activeTab === 'past' && pastTours.map(tour => (
                                <div key={tour.id} className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg mb-4 last:mb-0">
                                    <img src="https://via.placeholder.com/50" alt="Tour Image" className="w-12 h-12 rounded-full" />
                                    <div>
                                        <p className="font-semibold">{tour.name} - {tour.date}</p>
                                        <p className="text-sm">Rezervasyon No: {tour.reservationNo}</p>
                                    </div>
                                </div>
                            ))}
                             {activeTab === 'active' && activeTours.map(tour => (
                <div key={tour.id} className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg mb-4 last:mb-0">
                    <img src="https://via.placeholder.com/50" alt="Tour Image" className="w-12 h-12 rounded-full" />
                    <div>
                        <p className="font-semibold">{tour.name}</p>
                        <p className="text-sm">Rezervasyon No: {tour.reservationNo}</p>
                    </div>
                    <div style={{ marginLeft: 'auto' }}>
                    {tour.cancellable ? (
                            <button className="px-4 py-2 text-white bg-gray-300 hover:bg-red-500 rounded transition duration-300" onClick={() => handleOpenModal(tour)}>İptal Et</button>
                        ) : (
                            <p className="text-red-500">Tur başlangıcına 48 saat kala iptale izin verilmez</p>
                        )}
                    </div>
                </div>
            ))}
                                {activeTab === 'cancellation' && toursInCancellation.map(tour => (
                    <div key={tour.id} className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg mb-4 last:mb-0">
                        <img src="https://via.placeholder.com/50" alt="Tour Image" className="w-12 h-12 rounded-full" />
                        <div>
                            <p className="font-semibold">{tour.name}</p>
                            <p className="text-sm">Rezervasyon No: {tour.reservationNo}</p>
                            <p className="font-semibold">{tour.status}</p>
                        </div>
                    </div>
                ))}
            
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 flex flex-col justify-start items-start gap-5 pt-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {[
                                { icon: UserCircleIcon, title: "Kişisel Bilgiler", description: "Kişisel bilgilerinizi güncelleyin ve ekleyin", path: "/personalinfo" },
                                 { icon: ChatIcon, title: "Yorumlarım", description: "Yorumlarınız", path: "/tourcomment" },
                                 { icon: CreditCardIcon, title: "Ödeme Bilgileri", description: "Ödeme Methodlarınızı değiştirin", path: "/payment" },
                                { icon: BellIcon, title: "Bildirimler", description: "Bildirimlerinizi Yönetin", path: "/notifications" },
                            ].map((link, index) => (
                                <Link to={link.path} key={index} className="bg-white bg-opacity-0 rounded-xl shadow-xl flex flex-col justify-center items-start gap-7 pl-5 hover:bg-red-500 hover:bg-opacity-20">
                                    <div className="w-16 h-16 flex justify-center items-center mt-2">
                                        {React.createElement(link.icon, { className: "h-16 w-16 text-red-500 " })}
                                    </div>
                                    <div className="self-stretch pr-10 flex flex-col justify-start items-start gap-2">
                                        <p className="text-neutral-800 text-lg font-semibold leading-tight ">{link.title}</p>
                                        <p className="text-neutral-500 text-sm font-normal leading-5 mb-4">{link.description}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Routes>
                <Route path="/personalinfo" element={<PersonalInfo />} />
                <Route path="/login-security" element={<LoginSecurity />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/notifications" element={<Notifications />} />
            </Routes>
        </div>
    );
}

export default Profile;
