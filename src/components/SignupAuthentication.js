import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SignupAuthentication = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { emailOrPhone } = location.state; // SignUp sayfasından gelen veri

    const [timeLeft, setTimeLeft] = useState(90);
    const [code, setCode] = useState('');
    const [expired, setExpired] = useState(false);
    const [attempts, setAttempts] = useState(0);

    // Arka plan rengini ayarlamak için hesaplama
    const backgroundColor = `rgba(247, 247, 247, ${1 - timeLeft / 90})`;

    useEffect(() => {
        let timer;
        if (timeLeft > 0) {
            timer = setTimeout(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
        } else {
            setExpired(true);
        }

        return () => clearTimeout(timer);
    }, [timeLeft]);

    const handleInputChange = (event) => {
        setCode(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (expired) {
            alert("Kod gönderilemez. Oturum süresi doldu.");
            return;
        }

        if (code !== 'EXPECTED_CODE') {
            if (attempts < 2) {
                alert("Yanlış kod girildi, lütfen tekrar deneyin.");
                resetTimer();
            } else {
                alert("Maksimum deneme sayısına ulaşıldı.");
                navigate('/signup');
            }
        } else {
            console.log("Doğrulama başarılı!");
            navigate('/success');
        }
    };

    const requestNewCode = () => {
        if (attempts < 2) {
            alert("Yeni bir kod gönderiliyor.");
            resetTimer();
        } else {
            alert("Maksimum deneme sayısına ulaşıldı.");
            navigate('/signup');
        }
    };

    const resetTimer = () => {
        setTimeLeft(90);
        setExpired(false);
        setAttempts(attempts + 1);
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: backgroundColor, fontFamily: 'Montserrat' }}>
            <div style={{ maxWidth: '500px', width: '100%', padding: '2rem', backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '1rem' }}>Doğrulama</h2>
                <p>Lütfen {emailOrPhone} adresinize gönderilen doğrulama kodunu giriniz.</p>
                <div style={{ width: '100%', backgroundColor: '#ccc', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ height: '10px', width: `${(timeLeft / 90) * 100}%`, backgroundColor: '#4CAF50' }}></div>
                </div>
                <p>Kalan Süre: {expired ? "Süre doldu" : `${timeLeft} saniye`}</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={code}
                        onChange={handleInputChange}
                        placeholder="Doğrulama Kodu"
                        style={{ width: '100%', padding: '12px 20px', margin: '8px 0', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
                        disabled={expired}
                    />
                    <button
                        type="submit"
                        style={{ width: '100%', backgroundColor: '#4CAF50', color: 'white', padding: '14px 20px', margin: '8px 0', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                        disabled={expired}
                    >
                        Onayla
                    </button>
                    {expired && (
                        <button
                            onClick={requestNewCode}
                            style={{ width: '100%', backgroundColor: '#f0ad4e', color: 'white', padding: '14px 20px', margin: '8px 0', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                        >
                            Yeni Kod İste
                        </button>
                    )}
                </form>
            </div>
        </div>
    );
};

export default SignupAuthentication;
