// import React from "react";
// import { UserCircleIcon, ShieldCheckIcon, CreditCardIcon, BellIcon, TicketIcon } from '@heroicons/react/solid';



// const Profile = () => {
//     return (

//              <div className="font-montserrat flex justify-center items-center h-screen mt-20">
//             <div className="w-full max-w-screen-lg px-4 sm:px-6 lg:px-8 bg-white flex flex-col justify-start items-start gap-5">
//                 <div className="w-full flex flex-col sm:flex-row justify-start items-start gap-5">
//                     <div className="w-full sm:w-1/2 flex flex-col justify-start items-start gap-5 pt-10">
//                         <div className="text-red-500 text-2xl font-semibold leading-9">Account</div>
//                         <div>
//                             <span className="text-neutral-800 text-lg font-semibold">Mert Uras, </span>
//                             <span className="text-neutral-800 text-lg font-normal">hello@designdrops.io · </span>
//                             <span className="text-red-500 text-lg font-semibold underline">Go to profile</span>
//                         </div>
//                     </div>
//                     <div className="w-full sm:w-1/2 flex flex-col justify-start items-start gap-5 pt-10">
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                             <div className="bg-white bg-opacity-0 rounded-xl shadow flex flex-col justify-center items-start gap-7 pl-5">
//                                 <div className="w-16 h-16 flex justify-center items-center ">
//                                     <UserCircleIcon className="h-16 w-16 text-red-500 " />
//                                 </div>
//                                 <div className="self-stretch pr-10 flex flex-col justify-start items-start gap-2">
//                                     <div className="text-neutral-800 text-lg font-semibold leading-tight">Personal Info</div>
//                                     <div className="text-neutral-500 text-sm font-normal leading-5">Provide personal details and how we can reach you</div>
//                                 </div>
//                             </div>
//                             {/* Repeat the above structure for other options */}
//                             <div className="bg-white bg-opacity-0 rounded-xl shadow flex flex-col justify-center items-start gap-7 pl-5">
//                                 <div className="w-16 h-16 flex justify-center items-center">
//                                     <ShieldCheckIcon className="h-16 w-16 text-red-500" />
//                                 </div>
//                                 <div className="self-stretch pr-10 flex flex-col justify-start items-start gap-2">
//                                     <div className="text-neutral-800 text-lg font-semibold leading-tight ">Login and Security</div>
//                                     <div className="text-neutral-500 text-sm font-normal leading-5">Provide personal details and how we can reach you</div>
//                                 </div>
//                             </div>
//                             <div className="bg-white bg-opacity-0 rounded-xl shadow flex flex-col justify-center items-start gap-7 pl-5">
//                                 <div className="w-16 h-16 flex justify-center items-center">
//                                     <CreditCardIcon className="h-16 w-16 text-red-500" />
//                                 </div>
//                                 <div className="self-stretch pr-10 flex flex-col justify-start items-start gap-2">
//                                     <div className="text-neutral-800 text-lg font-semibold leading-tight">Payment Informations</div>
//                                     <div className="text-neutral-500 text-sm font-normal leading-5 ">Provide personal details and how we can reach you</div>
//                                 </div>
//                             </div>
//                             <div className="bg-white bg-opacity-0 rounded-xl shadow flex flex-col justify-center items-start gap-7 pl-5">
//                                 <div className="w-16 h-16 flex justify-center items-center">
//                                     <BellIcon className="h-16 w-16 text-red-500" />
//                                 </div>
//                                 <div className="self-stretch pr-10 flex flex-col justify-start items-start gap-2">
//                                     <div className="text-neutral-800 text-lg font-semibold leading-tight ">Notifications</div>
//                                     <div className="text-neutral-500 text-sm font-normal leading-5">Provide personal details and how we can reach you</div>
//                                 </div>
//                             </div>
//                             <div className="bg-white bg-opacity-0 rounded-xl shadow flex flex-col justify-center items-start gap-7 pl-5">
//                                 <div className="w-16 h-16 flex justify-center items-center">
//                                     <TicketIcon className="h-16 w-16 text-red-500" />
//                                 </div>
//                                 <div className="self-stretch pr-10 flex flex-col justify-start items-start gap-2">
//                                     <div className="text-neutral-800 text-lg font-semibold leading-tight">Coupons</div>
//                                     <div className="text-neutral-500 text-sm font-normal leading-5">Provide personal details and how we can reach you</div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>


//     );
// }

// export default Profile;

import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import PersonalInfo from "./PersonalInfo";
import LoginSecurity from "./LoginSecurity";
import Payment from "./Payment";
import Notifications from "./Notifications";
import { UserCircleIcon, ShieldCheckIcon, CreditCardIcon, BellIcon, TicketIcon } from '@heroicons/react/solid';

const Profile = () => {
    return (
        <div className="font-montserrat flex justify-center items-center h-screen mt-20">
            <div className="w-full max-w-screen-lg px-4 sm:px-6 lg:px-8 bg-white flex flex-col justify-start items-start gap-5">
                <div className="w-full flex flex-col sm:flex-row justify-start items-start gap-5">
                    <div className="w-full sm:w-1/2 flex flex-col justify-start items-start gap-5 pt-10">
                        <div className="text-red-500 text-2xl font-semibold leading-9">Account</div>
                        <div>
                            <span className="text-neutral-800 text-lg font-semibold">Mert Uras, </span>
                            <span className="text-neutral-800 text-lg font-normal">hello@designdrops.io · </span>
                            <span className="text-red-500 text-lg font-semibold underline">Go to profile</span>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 flex flex-col justify-start items-start gap-5 pt-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <Link to="/personalinfo" className="bg-white bg-opacity-0 rounded-xl shadow flex flex-col justify-center items-start gap-7 pl-5">
                                <div className="w-16 h-16 flex justify-center items-center ">
                                    <UserCircleIcon className="h-16 w-16 text-red-500 " />
                                </div>
                                <div className="self-stretch pr-10 flex flex-col justify-start items-start gap-2">
                                    <div className="text-neutral-800 text-lg font-semibold leading-tight">Personal Info</div>
                                    <div className="text-neutral-500 text-sm font-normal leading-5">Provide personal details and how we can reach you</div>
                                </div>
                            </Link>
                    
                            <Link to="/login-security" className="bg-white bg-opacity-0 rounded-xl shadow flex flex-col justify-center items-start gap-7 pl-5">
                                <div className="w-16 h-16 flex justify-center items-center">
                                    <ShieldCheckIcon className="h-16 w-16 text-red-500" />
                                </div>
                                <div className="self-stretch pr-10 flex flex-col justify-start items-start gap-2">
                                    <div className="text-neutral-800 text-lg font-semibold leading-tight ">Login and Security</div>
                                    <div className="text-neutral-500 text-sm font-normal leading-5">Provide personal details and how we can reach you</div>
                                </div>
                            </Link>
                            <Link to="/payment" className="bg-white bg-opacity-0 rounded-xl shadow flex flex-col justify-center items-start gap-7 pl-5">
                                <div className="w-16 h-16 flex justify-center items-center">
                                    <CreditCardIcon className="h-16 w-16 text-red-500" />
                                </div>
                                <div className="self-stretch pr-10 flex flex-col justify-start items-start gap-2">
                                    <div className="text-neutral-800 text-lg font-semibold leading-tight">Payment Informations</div>
                                    <div className="text-neutral-500 text-sm font-normal leading-5 ">Provide personal details and how we can reach you</div>
                                </div>
                            </Link>
                            <Link to="/notifications" className="bg-white bg-opacity-0 rounded-xl shadow flex flex-col justify-center items-start gap-7 pl-5">
                                <div className="w-16 h-16 flex justify-center items-center">
                                    <BellIcon className="h-16 w-16 text-red-500" />
                                </div>
                                <div className="self-stretch pr-10 flex flex-col justify-start items-start gap-2">
                                    <div className="text-neutral-800 text-lg font-semibold leading-tight ">Notifications</div>
                                    <div className="text-neutral-500 text-sm font-normal leading-5">Provide personal details and how we can reach you</div>
                                </div>
                            </Link>
                            <Link to="/coupons" className="bg-white bg-opacity-0 rounded-xl shadow flex flex-col justify-center items-start gap-7 pl-5">
                                <div className="w-16 h-16 flex justify-center items-center">
                                    <TicketIcon className="h-16 w-16 text-red-500" />
                                </div>
                                <div className="self-stretch pr-10 flex flex-col justify-start items-start gap-2">
                                    <div className="text-neutral-800 text-lg font-semibold leading-tight">Coupons</div>
                                    <div className="text-neutral-500 text-sm font-normal leading-5">Provide personal details and how we can reach you</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <Routes>
                <Route path="/personal-info" element={<PersonalInfo />} />
                <Route path="/login-security" element={<LoginSecurity />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/notifications" element={<Notifications />} />
                Add routes for other sections 
            </Routes>
        </div>
    );
}

export default Profile;
