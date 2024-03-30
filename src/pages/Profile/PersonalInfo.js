import React, { useState } from "react";
import { LockClosedIcon, SaveIcon } from '@heroicons/react/outline';

const InputField = ({ label, type, value, onChange }) => {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                className="mt-1 p-2 w-full border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
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

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="font-montserrat w-full max-w-screen-lg px-4 sm:px-6 lg:px-8 bg-white flex flex-col justify-center items-center gap-5 mt-20">
                <div className="text-red-500 text-2xl font-semibold leading-9 mb-5 text-center">Personal Information</div>
                <div className="w-full flex flex-col sm:flex-row gap-5">
                    <div className="w-full sm:w-[50%] flex flex-col gap-5">
                        <div className="text-neutral-800 text-xl font-semibold text-center">Information</div>
                        <InputField
                            label="Ad - Soyad"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <InputField
                            label="Mail"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <InputField
                            label="Telefon"
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <InputField
                            label="Kimlik Kartı"
                            type="text"
                            value={idCard}
                            onChange={(e) => setIdCard(e.target.value)}
                        />
                    </div>
                    <div className="w-full sm:w-[50%] flex flex-col gap-5 relative">
                        <div className="bg-neutral-100 p-4 rounded-xl">
                            <div className="text-neutral-800 text-xl font-semibold text-center mb-4">Change Password</div>
                            <InputField
                                label="Current Password"
                                type="password"
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                            />
                            <InputField
                                label="New Password"
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                            <InputField
                                label="Confirm New Password"
                                type="password"
                                value={confirmNewPassword}
                                onChange={(e) => setConfirmNewPassword(e.target.value)}
                            />
                            <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-500 mt-5 w-full sm:w-auto">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;
