import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import PersonalInfo from "./PersonalInfo";
import LoginSecurity from "./LoginSecurity";
import Payment from "./Payment";
import Notifications from "./Notifications";
import { UserCircleIcon, ShieldCheckIcon, CreditCardIcon, BellIcon, TicketIcon } from '@heroicons/react/solid';

const Profile = () => {
    return (
        <div className="font-montserrat flex flex-col items-center justify-center h-auto mt-20">
            <div className="w-full max-w-screen-lg px-4 sm:px-6 lg:px-8 bg-white flex flex-col justify-start items-start gap-5">
                <div className="w-full flex flex-col sm:flex-row justify-start items-start gap-5">
                    <div className="w-full sm:w-1/2 flex flex-col justify-start items-start gap-5 pt-10">
                        <h1 className="text-red-500 text-2xl font-semibold leading-9">Hesap Bilgileri</h1>
                        <div className="flex flex-col sm:flex-row items-center gap-3 mt-5">
                            <img src="https://via.placeholder.com/150" alt="Profile Photo" className="w-28 h-28 rounded-full border-4 border-red-500" />
                            <div className="flex flex-col">
                                <span className="text-neutral-800 text-lg font-semibold">Mert Uras</span>
                                <span className="text-neutral-800 text-lg font-normal">mail@mail.com</span>
                            </div>
                        </div>
                        <Link to="/personalinfo" className="text-red-500 text-lg font-semibold underline mt-3">Profil</Link>
                        <h2 className="text-neutral-800 text-lg font-semibold mt-5">Geçmiş</h2>
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 mt-2">
                            <div className="flex flex-col items-center">
                                <span className="text-neutral-800 text-lg font-semibold">10</span>
                                <span className="text-neutral-500 text-sm">Turlar</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-neutral-800 text-lg font-semibold">5</span>
                                <span className="text-neutral-500 text-sm">Kuponlar</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-neutral-800 text-lg font-semibold">Doğa, Macera</span>
                                <span className="text-neutral-500 text-sm">Tercihler</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 flex flex-col justify-start items-start gap-5 pt-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {[
                                { icon: UserCircleIcon, title: "Kişisel Bilgiler", description: "Kişisel bilgilerinizi güncelleyin ve ekleyin", path: "/personalinfo" },
                                { icon: ShieldCheckIcon, title: "Kayıt ve Güvenlik", description: "Şifrenizi güncelleyin", path: "/login-security" },
                                { icon: CreditCardIcon, title: "Ödeme Bilgileri", description: "Ödeme Methodlarınızı değiştirin", path: "/payment" },
                                { icon: BellIcon, title: "Bildirimler", description: "Bildirimlerinizi Yönetin", path: "/notifications" },
                                
                            ].map((link, index) => (
                                <Link to={link.path} key={index} className="bg-white bg-opacity-0 rounded-xl shadow flex flex-col justify-center items-start gap-7 pl-5">
                                    <div className="w-16 h-16 flex justify-center items-center">
                                        {React.createElement(link.icon, { className: "h-16 w-16 text-red-500" })}
                                    </div>
                                    <div className="self-stretch pr-10 flex flex-col justify-start items-start gap-2">
                                        <div className="text-neutral-800 text-lg font-semibold leading-tight">{link.title}</div>
                                        <div className="text-neutral-500 text-sm font-normal leading-5">{link.description}</div>
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
                <Route path="/coupons" element={<div>Coupons Page</div>} />  // Assume you have a Coupons component or page
            </Routes>
        </div>
    );
}

export default Profile;
