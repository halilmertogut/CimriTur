import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddActivityPage = () => {
    const navigate = useNavigate();
    const [adminName] = useState('Mevcut Yönetici'); // Turkish for Current Admin
    const [activityName, setActivityName] = useState('');
    const [activityDetails, setActivityDetails] = useState('');
    const [activityDate, setActivityDate] = useState('');
    const [activityLocation, setActivityLocation] = useState(''); // Additional field for location

    const handleSubmit = (event) => {
        event.preventDefault();
        const activity = {
            name: activityName,
            details: activityDetails,
            date: activityDate,
            location: activityLocation, // Added location to the activity data
            createdBy: adminName,
            createdAt: new Date().toLocaleString()
        };
        console.log(activity);
        navigate('/main-admin-dashboard');
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen bg-gray-100 text-gray-900">
            <h1 className="text-3xl font-bold mb-6">Yönetim Paneli - Hoşgeldiniz, {adminName}</h1>
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4">Yeni Etkinlik Ekle</h2>
                <form onSubmit={handleSubmit}>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                        Etkinlik Adı
                    </label>
                    <input
                        type="text"
                        value={activityName}
                        onChange={(e) => setActivityName(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                    />
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                        Açıklama
                    </label>
                    <textarea
                        value={activityDetails}
                        onChange={(e) => setActivityDetails(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                    />
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                        Tarih
                    </label>
                    <input
                        type="date"
                        value={activityDate}
                        onChange={(e) => setActivityDate(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                    />
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                        Konum
                    </label>
                    <input
                        type="text"
                        value={activityLocation}
                        onChange={(e) => setActivityLocation(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                    />
                    <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                        Etkinlik Ekle
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddActivityPage;
