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
        <div className="min-h-screen bg-gray-200 flex justify-center items-center">
            <div className="container max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="hidden md:block">
                        <p className="text-xl text-center text-white font-semibold bg-gradient-to-tl from-red-600 to-sky-600 rounded-lg p-8">
                            Social media shared today, tomorrow or by location.
                        </p>

                    </div>
                    <form className="space-y-4 " onSubmit={handleSubmit}>
                        <h2 className="text-xl font-semibold ">Create Account</h2>
                        <p>For business, band, or celebrity.</p>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="First name"
                            className="w-full p-2 border rounded"
                        />
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Last name"
                            className="w-full p-2 border rounded"
                        />
                        <input
                            type="text"
                            name="emailOrPhone"
                            value={formData.emailOrPhone}
                            onChange={handleChange}
                            placeholder="Email or phone number"
                            className="w-full p-2 border rounded"
                        />
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password"
                            className="w-full p-2 border rounded"
                        />
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Confirm password"
                            className="w-full p-2 border rounded"
                        />
                        <input
                            type="text"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                            placeholder="Date of birth (MM/DD/YYYY)"
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
                        <button type="submit" className="bg-gradient-to-tl from-red-600 to-sky-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Create account
                        </button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default SignUp;
