import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'; // Default styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';



const SignUp = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',  // Email için ayrı bir alan
        phone: '',  // Telefon için ayrı bir alan
        password: '',
        confirmPassword: '',
        dateOfBirth: '', // Başlangıçta bugünün tarihi ile başlar
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
    const handleDateChange = (date) => {
        setFormData(prev => ({
            ...prev,
            dateOfBirth: date
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
                }, 2000);
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200 font-montserrat ">
            <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-3">
                    <h2 className="text-lg font-bold">Hesap Oluştur</h2>
                    <div className="space-y-4 mb-6">
                        <button className="w-full inline-flex justify-center items-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none">
                            <FontAwesomeIcon icon={faGoogle} className="mr-3" />
                            Google ile Kayıt Ol
                        </button>
                        <button className="w-full inline-flex justify-center items-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-black text-base font-medium text-white hover:bg-gray-900 focus:outline-none">
                            <FontAwesomeIcon icon={faApple} className="mr-3" />
                            Apple ile Kayıt Ol
                        </button>
                    </div>
                    <div className="relative flex items-center my-4">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="mx-4 text-sm text-gray-500 bg-white px-2">veya</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="İsim" className="form-input w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Soyisim" className="form-input w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="E-posta" className="form-input w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                    <PhoneInput
                        international
                        defaultCountry="TR"
                        value={formData.phone}
                        onChange={phone => setFormData({ ...formData, phone })}
                        className="border border-gray-300 rounded-md px-3 py-2"
                    />
                    <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Parola" className="form-input w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                    <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Parolayı Doğrula" className="form-input w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                    <DatePicker
                        selected={formData.dateOfBirth}
                        onChange={handleDateChange}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Doğum Tarihi (gün/ay/yıl)"
                        className="border border-gray-300 rounded-md px-3 py-2"
                        wrapperClassName="date-picker"
                    />
                    <div className="flex items-center">
                        <input type="checkbox" name="agreeToTerms" checked={formData.agreeToTerms} onChange={handleChange} id="agreeToTerms" className="mr-2" />
                        <label htmlFor="agreeToTerms" className="text-sm text-gray-600">Tüm Şartları ve Gizlilik Politikasını kabul ediyorum</label>
                    </div>

                    <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
                        Hesabı Doğrula
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
