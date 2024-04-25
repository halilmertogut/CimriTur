import React, { useState } from 'react';
import Navbar from "./Navbar";
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../redux/authSlice';


const InputField = ({ label, type, value, onChange, id }) => {
    return (
        <div className="mb-4">
            <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
            <input
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                className="mt-1 p-2 w-full border rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
            />
        </div>
    );
};
const PersonalInfo = () => {
    const user = useSelector(state => state.auth.user);
    const token = useSelector(state => state.auth.token);
    const dispatch = useDispatch();
    const [contactInfo, setContactInfo] = useState({
        email: user.email || '',
        phone: user.phone || '',
        currentPassword: ''
    });
    const navigate = useNavigate();
    const [passwordInfo, setPasswordInfo] = useState({
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: ''
    });

    const handleContactChange = (e) => {
        setContactInfo({ ...contactInfo, [e.target.id]: e.target.value });
    };

    const handlePasswordChange = (e) => {
        setPasswordInfo({ ...passwordInfo, [e.target.id]: e.target.value });
    };

    const updateContactInfo = async (e) => {
        e.preventDefault();
        if (!contactInfo.currentPassword) {
            alert('Please enter your current password to update your contact information.');
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/api/users/update-contact-info', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(contactInfo)
            });
            const result = await response.json();
            if (!response.ok) throw new Error(result.message);
            toast.success('Contact info updated successfully!');
            dispatch(setCredentials({ user: result.user, token }));  // Assuming the API returns the updated user data
            setTimeout(() => {
                 navigate('/profile')// Sayfayı belirli bir süre sonra yenile
            }, 2000);          
        } catch (error) {
            toast.error('Error updating contact info: ' + error.message);
        }
    };

    const updatePassword = async (e) => {
        e.preventDefault();
        if (!passwordInfo.currentPassword || passwordInfo.newPassword !== passwordInfo.confirmNewPassword) {
            alert('Please check your passwords and ensure they match.');
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/api/users/change-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    currentPassword: passwordInfo.currentPassword,
                    newPassword: passwordInfo.newPassword
                })
            });
            const result = await response.json();
            if (!response.ok) throw new Error(result.message);
            toast.success('Password changed successfully!');
            setTimeout(() => {
                navigate('/profile')// Sayfayı belirli bir süre sonra yenile
           }, 2000);          
        } catch (error) {
            toast.error('Error changing password: ' + error.message);
        }
    };

    return (
        <div className="flex flex-col h-auto">
            <Navbar />
            <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            <div className="flex justify-center items-center mt-10">
                <div className="w-full max-w-screen-lg px-4 sm:px-6 lg:px-8 bg-white flex flex-col justify-center items-center gap-5">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Kişisel Bilgiler</h2>
                    <form onSubmit={updateContactInfo} className="w-full">
                        <InputField label="E-posta" type="email" value={contactInfo.email} onChange={handleContactChange} id="email" />
                        <InputField label="Telefon" type="text" value={contactInfo.phone} onChange={handleContactChange} id="phone" />
                        <InputField label="Mevcut Şifre (for verification)" type="password" value={contactInfo.currentPassword} onChange={handleContactChange} id="currentPassword" />
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Update Contact Info
                        </button>
                    </form>
                    <form onSubmit={updatePassword} className="w-full mt-6">
                        <InputField label="Mevcut Şifre" type="password" value={passwordInfo.currentPassword} onChange={handlePasswordChange} id="currentPassword" />
                        <InputField label="Yeni Şifre" type="password" value={passwordInfo.newPassword} onChange={handlePasswordChange} id="newPassword" />
                        <InputField label="Yeni Şifreyi Doğrula" type="password" value={passwordInfo.confirmNewPassword} onChange={handlePasswordChange} id="confirmNewPassword" />
                        <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                            Change Password
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;
