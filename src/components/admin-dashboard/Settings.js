import React, { useState } from 'react';

// Settings.js
const Settings = () => {
    const [settings, setSettings] = useState({
        username: 'JohnDoe',
        email: 'john.doe@example.com',
        password: '******'
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setSettings(prevSettings => ({
            ...prevSettings,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you would usually handle the submission to the backend
        console.log('Settings Updated:', settings);
        alert('Settings have been updated successfully!');
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-xl font-bold mb-4">Account Settings</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username" className="block mb-2 font-semibold">Kullanıcı Adı</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={settings.username}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mb-4"
                />

                <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={settings.email}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mb-4"
                />

                <label htmlFor="password" className="block mb-2 font-semibold">Parola</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={settings.password}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mb-4"
                />

                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Ayarları Güncelle
                </button>
            </form>
        </div>
    );
};

export default Settings;
