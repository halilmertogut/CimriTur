import React, { useEffect, useRef, useState } from 'react';


const ForgetPassword = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Password reset link sent to: ${email}`);
    };
    return (
<div className="font-montserrat flex items-center justify-center bg-white" style={{ height: 'calc(45vh - 2rem)' }}>
            <div className="p-6 bg-white shadow-md rounded ">
                <h2 className="text-xl font-semibold mb-4">Şifre Yenileme</h2>
                <p className="mb-4">Şifre yenileme bağlantısı için e-posta adresinizi giriniz.</p>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-Posta</label>
                    <input
                        id="email"
                        type="email"
                        required
                        className="mt-1 p-2 w-full border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="rounded-full text-white w-full bg-red-500 text-white mt-6 py-2 font-semibold hover:bg-sky-500 transition"
                    >
                        Şifremi Yenile
                    </button>
                </form>
                <button
                    onClick={() => window.history.back()}
                    className="mt-2 w-full text-sm text-gray-600 hover:text-gray-800"
                >
                    Önceki Sayfaya Dön
                </button>
            </div>
        </div>


    );


};
export default ForgetPassword;