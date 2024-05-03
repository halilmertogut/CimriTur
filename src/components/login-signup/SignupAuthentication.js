import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import bgVideo from '../../images/heroVideo2.mp4'; // Make sure the path to your video is correct

const SignupAuthentication = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { email, firstName, lastName } = location.state;

    const getInitialTimer = () => {
        const savedTimer = localStorage.getItem('verificationTimer');
        return savedTimer ? parseInt(savedTimer, 10) : 100;
    };

    const [code, setCode] = useState('');
    const [timer, setTimer] = useState(getInitialTimer());
    const [expired, setExpired] = useState(timer === 0);

    useEffect(() => {
        if (timer > 0) {
            const countdown = setInterval(() => {
                setTimer((prevTime) => {
                    const newTime = prevTime - 1;
                    localStorage.setItem('verificationTimer', newTime.toString());
                    if (newTime <= 0) {
                        clearInterval(countdown);
                        setExpired(true);
                        return 0;
                    }
                    return newTime;
                });
            }, 1000);

            return () => clearInterval(countdown);
        }
    }, [timer]);

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
            toast.error("Doğrulama kodunun süresi bitti. Lütfen yenisini iste!");
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
            toast.success("Doğrulama başarılı! Giriş yap kısmından hesabınıza giriş yapabilirsiniz.");
            setTimeout(() => {
                localStorage.removeItem('verificationTimer')
                navigate("/", {
                    
                });
              }, 2000);
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
            toast.info(data);
            setTimer(100);
            setExpired(false);
            localStorage.setItem('verificationTimer', '100');
        })
        .catch(error => {
            console.error('Error:', error);
            toast.error('Yeni kod gönderilemedi!');
        });
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-gray-100 font-sans">
            <video autoPlay loop muted className="absolute w-auto min-w-full min-h-full max-w-none">
                <source src={bgVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <ToastContainer />
            <div className="z-10 max-w-lg w-full bg-white rounded-lg shadow-xl p-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4 mt-4">Hesabını doğrula!</h2>
                <h2 className="text-xl font-thin text-center text-gray-800 mb-10 ">E-postana gönderdiğimiz kodu girerek hesap oluşturma işlemini tamamlayabilirsin! 👌🏻</h2>
                {!expired && <p className="text-center text-sm text-gray-600 mb-4">Kodu girmen için kalan süre: {formatTime()} ⏳</p>}
                {expired && <p className="text-center text-sm font-bold text-red-500 mb-1">Kodunun süresi doldu. Yenisini isteyerek devam edebilirsin!</p>}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <input
                        type="text"
                        value={code}
                        onChange={handleInputChange}
                        placeholder="Verification Code"
                        className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out ${expired ? 'cursor-not-allowed' : ''}`}
                        disabled={expired}
                    />
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
                        disabled={expired}
                    >
                        Confirm
                    </button>
                    {expired && (
                        <button
                            onClick={requestNewCode}
                            className="w-full px-4 py-2 text-white bg-orange-500 rounded-md hover:bg-orange-600 focus:outline-none focus:bg-orange-600"
                        >
                            Request New Code
                        </button>
                    )}
                </form>
            </div>
        </div>
    );
};

export default SignupAuthentication;
