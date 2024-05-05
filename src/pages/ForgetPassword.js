import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(null);  // Track the success status of the response

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            const response = await fetch('http://localhost:3000/api/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email })
            });

            const data = await response.json();
            setMessage(data.message || data.error); // Set the message based on the response
            setIsSuccess(response.ok); // Set the success status based on the response status
            if (response.ok) {
                // If the request was successful, wait for 2 seconds, then navigate to the homepage
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            }
        } catch (error) {
            setMessage(error.message || 'Sunucuya bağlanırken bir hata oluştu');
            setIsSuccess(false); // Assume failure if an exception is caught
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="font-montserrat flex items-center justify-center bg-white min-h-screen">
            <div className="p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Şifre Yenileme</h2>
                <p className="mb-4">Şifre yenileme bağlantısı almak için lütfen e-posta adresinizi giriniz.</p>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-Posta Adresi</label>
                    <input
                        id="email"
                        type="email"
                        required
                        className="mt-1 p-2 w-full border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`rounded-full text-white w-full mt-6 py-2 font-semibold ${isLoading ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-600'} transition-colors`}
                    >
                        {isLoading ? 'Gönderiliyor...' : 'Şifremi Yenile'}
                    </button>
                </form>
                {message && <p className={`mt-4 text-${isSuccess ? 'green' : 'red'}-500`}>{message}</p>}
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
