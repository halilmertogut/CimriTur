import React, { useState } from 'react';

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

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log(formData);
    };

    return (
        <div className="min-h-screen bg-gray-200 flex justify-center items-center font-montserrat">
            <div className=" container max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8  ">
                    <div className="hidden md:block py-2 px-4 rounded relative">
                        {/* Background layer */}
                        <div className="absolute inset-0 bg-no-repeat bg-cover bg-center rounded opacity-70 z-0" style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp4881052.jpg')" }}>
                        </div>
                        {/* Content layer */}
                        <p className="text-xl text-center text-black font-semibold rounded-lg p-8 relative z-10">
                            Social media shared today, tomorrow or by location.
                        </p>
                    </div>



                    <form className="space-y-4 " onSubmit={handleSubmit}>
                        <h2 className="text-xl font-semibold ">Create Account</h2>
                        <p className='font-montserrat'>For business, band, or celebrity.</p>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="İsim"
                            className="w-full p-2 border rounded "
                        />
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Soyisim"
                            className="w-full p-2 border rounded"
                        />
                        <input
                            type="text"
                            name="emailOrPhone"
                            value={formData.emailOrPhone}
                            onChange={handleChange}
                            placeholder="Email "
                            className="w-full p-2 border rounded"
                        />
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Parola"
                            className="w-full p-2 border rounded"
                        />
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Parolayı Doğrula"
                            className="w-full p-2 border rounded"
                        />
                        <input
                            type="text"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                            placeholder="Doğum Tarihi (gün/ay/yıl)"
                            className="w-full p-2 border rounded"
                        />
                        <div>
                            <input
                                type="checkbox"
                                name="agreeToTerms"
                                checked={formData.agreeToTerms}
                                onChange={handleChange}
                                id="agreeToTerms"
                                className="mr-2"
                            />
                            <label htmlFor="agreeToTerms">I agree to all the Terms and Privacy Policy</label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                name="rememberMe"
                                checked={formData.rememberMe}
                                onChange={handleChange}
                                id="rememberMe"
                                className="mr-2"
                            />
                            <label htmlFor="rememberMe">Remember me</label>
                        </div>
                        <button type="submit" className="bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Create account
                        </button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default SignUp;
