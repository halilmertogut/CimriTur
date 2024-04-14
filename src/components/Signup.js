import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        emailOrPhone: '',
        password: '',
        confirmPassword: '',
        dateOfBirth: '',
        agreeToTerms: false,
        rememberMe: false,
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if passwords match
        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match. Please check your password.");
            return;
        }

        // Check if terms are agreed
        if (!formData.agreeToTerms) {
            toast.error("You must agree to the terms and conditions.");
            return;
        }

        // Create the user object for the API request
        const user = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            emailOrPhone: formData.emailOrPhone,
            password: formData.password,
            confirmPassword: formData.confirmPassword,
            dateOfBirth: formData.dateOfBirth,
            agreeToTerms: formData.agreeToTerms,
            rememberMe: formData.rememberMe
        };

        // API request to register the user
        fetch('http://localhost:3000/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
        .then(response => {
            if (!response.ok) {
                return response.text().then(text => {
                    throw new Error(text || 'Server responded with an error!');
                });
            }
            return response.text();  // Assuming the server might send a non-JSON response
        })
        .then(text => {
            toast.success(text);
            setTimeout(() => {
                navigate('/signupAuthentication', { state: { emailOrPhone: formData.emailOrPhone } });
            }, 2000);        })
        .catch((error) => {
            toast.error(error.message);
        });
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f2f5', fontFamily: 'Montserrat' }}>
            <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            <div style={{ maxWidth: '500px', width: '100%', padding: '2rem', backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Hesap Oluştur</h2>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="İsim" style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '16px' }} />
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Soyisim" style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '16px' }} />
                    <input type="text" name="emailOrPhone" value={formData.emailOrPhone} onChange={handleChange} placeholder="E-posta veya Telefon" style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '16px' }} />
                    <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Parola" style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '16px' }} />
                    <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Parolayı Doğrula" style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '16px' }} />
                    <input type="text" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} placeholder="Doğum Tarihi (gün/ay/yıl)" style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '16px' }} />
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                        <input type="checkbox" name="agreeToTerms" checked={formData.agreeToTerms} onChange={handleChange} id="agreeToTerms" style={{ marginRight: '10px' }} />
                        <label htmlFor="agreeToTerms">Tüm Şartları ve Gizlilik Politikasını kabul ediyorum</label>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                        <input type="checkbox" name="rememberMe" checked={formData.rememberMe} onChange={handleChange} id="rememberMe" style={{ marginRight: '10px' }} />
                        <label htmlFor="rememberMe">Beni Hatırla</label>
                    </div>
                    <button type="submit" style={{ width: '100%', backgroundColor: '#007bff', color: 'white', padding: '12px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>
                        Hesabı Doğrula
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
