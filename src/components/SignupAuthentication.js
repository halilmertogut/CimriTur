import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignupAuthentication = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { email } = location.state; // Data passed from the SignUp page

    const [code, setCode] = useState('');
    const [expired, setExpired] = useState(false);

    // Handle input change
    const handleInputChange = (event) => {
        setCode(event.target.value);
    };

    // Handle form submission for code verification
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
                navigate("/", {
                });
              }, 2000);
        })
        .catch((error) => {
            toast.error(error.message);
            console.log(error.mesage);
        });
    };

    // Request a new verification code
    const requestNewCode = () => {
        fetch('http://localhost:3000/api/resend-code', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email })
        })
        .then(response => response.json())
        .then(data => {
            toast.info(data.message);
            setExpired(false); // Assuming a new code resets the expiration
        })
        .catch(error => {
            console.error('Error:', error);
            toast.error('Failed to send a new code.');
        });
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f2f5', fontFamily: 'Montserrat' }}>
            <ToastContainer />
            <div style={{ maxWidth: '500px', width: '100%', padding: '2rem', backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '1rem' }}>Verification</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={code}
                        onChange={handleInputChange}
                        placeholder="Verification Code"
                        style={{ width: '100%', padding: '12px 20px', margin: '8px 0', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
                        disabled={expired}
                    />
                    <button
                        type="submit"
                        style={{ width: '100%', backgroundColor: '#4CAF50', color: 'white', padding: '14px 20px', margin: '8px 0', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                        disabled={expired}
                    >
                        Confirm
                    </button>
                    {expired && (
                        <button
                            onClick={requestNewCode}
                            style={{ width: '100%', backgroundColor: '#f0ad4e', color: 'white', padding: '14px 20px', margin: '8px 0', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
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
