// Updated component with all fixes
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import bgVideo from '../images/heroVideo2.mp4'; // Ensure you have a compelling travel video


const SignupAuthentication = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { email, firstName, lastName } = location.state; // Data passed from the SignUp page

    const [code, setCode] = useState('');
    const [timer, setTimer] = useState(100); // Initial timer setting
    const [expired, setExpired] = useState(false); // Manage the expired state

    useEffect(() => {
        if (timer > 0) {
            const countdown = setInterval(() => {
                setTimer((prevTime) => {
                    if (prevTime <= 1) {
                        clearInterval(countdown);
                        setExpired(true);
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);

            return () => clearInterval(countdown);
        }
    }, [timer]);

    // Format timer to mm:ss
    const formatTime = () => {
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const handleInputChange = (event) => {
        setCode(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (expired) {
            toast.error("Verification code has expired. Please request a new one.");
            return;
        }

        fetch('http://localhost:3000/api/users/verify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, code })
        })
        .then(response => response.json())
        .then(data => {
            if (!data.success) {
                throw new Error(data.message);
            }
            toast.success("Verification successful!");
            setTimeout(() => {
                navigate("/");
            }, 4000);
            
        })
        .catch((error) => {
            toast.error(error.message);
        });
    };

    const requestNewCode = () => {
        fetch('http://localhost:3000/api/users/resend-code', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, firstName, lastName })
        })
        .then(response => response.text())
        .then(data => {
            setTimeout(() => {
                toast.info(data);
            }, 2000); // Delay the toast message for 2 seconds
            setTimer(100); // Reset the timer
            setExpired(false); // Reset the expired state
        })
        .catch(error => {
            console.error('Error:', error);
            toast.error('Failed to send a new code.');
        });
    };


    return (
        <div className="relative min-h-screen flex items-center justify-center bg-gray-100 font-sans">
            <video autoPlay loop muted className="absolute w-auto min-w-full min-h-full max-w-none">
                <source src={bgVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {/* Overlay to ensure text visibility on video */}
            <ToastContainer />
            <div className="z-10 max-w-lg w-full bg-white rounded-lg shadow-xl p-6 border border-gray-200 h-96">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-4 mt-4">Hesabını doğrula!</h2>
                <h2 className="text-xl font-thin text-center text-gray-800 mb-10 ">E-postana gönderdiğimiz kodu girerek hesap oluşturma işlemini tamamlayabilirsin! 👌🏻</h2>
                {!expired && <p className="text-center text-sm text-gray-600 mb-4">Kodu girmen için kalan süre: {formatTime()} ⏳</p>}
                                <form onSubmit={handleSubmit} className="space-y-6">
                    <input
                        type="text"
                        value={code}
                        onChange={handleInputChange}
                        placeholder="Doğrulama Kodu"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                        disabled={expired}
                    />
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                        disabled={expired}
                    >
                        Doğrula
                    </button>
                    {expired && (
                        <button
                            onClick={requestNewCode}
                            className="w-full px-4 py-2 text-white bg-orange-500 rounded-md hover:bg-orange-600 focus:outline-none focus:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                        >
                            Yeni kod iste!
                        </button>
                    )}
                </form>
            </div>
        </div>
    );
};

export default SignupAuthentication;
