import React, { useState } from 'react';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        contactName: '',
        street: '',
        city: '',
        postcode: '',
        contactPhone: '',
        email: '',
        idea: '',
        file: null,
        nda: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData(prevState => ({
            ...prevState,
            file
        }));
    }

    const toggleNDA = () => {
        setFormData(prevState => ({
            ...prevState,
            nda: !prevState.nda
        }));
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-6xl bg-white rounded-lg p-8 shadow-lg">
                {/* Form Section */}
                <div className="max-w-4xl mx-auto p-8 bg-white relative z-10 w-full">
                    <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input type="text" name="contactName" value={formData.contactName} onChange={handleChange} placeholder="Contact Name" class="transition duration-150 ease-in-out px-4 py-2 rounded-lg border border-gray-300 w-full focus:ring-4 focus:ring-blue-500 focus:border-transparent focus:outline-none" />
                            <input type="text" name="street" value={formData.street} onChange={handleChange} placeholder="Street" class="transition duration-150 ease-in-out px-4 py-2 rounded-lg border border-gray-300 w-full focus:ring-4 focus:ring-blue-500 focus:border-transparent focus:outline-none" />
                            <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" class="transition duration-150 ease-in-out px-4 py-2 rounded-lg border border-gray-300 w-full focus:ring-4 focus:ring-blue-500 focus:border-transparent focus:outline-none" />
                            <input type="text" name="postcode" value={formData.postcode} onChange={handleChange} placeholder="Postcode" class="transition duration-150 ease-in-out px-4 py-2 rounded-lg border border-gray-300 w-full focus:ring-4 focus:ring-blue-500 focus:border-transparent focus:outline-none" />
                            <input type="text" name="contactPhone" value={formData.contactPhone} onChange={handleChange} placeholder="Contact Phone" class="transition duration-150 ease-in-out px-4 py-2 rounded-lg border border-gray-300 w-full focus:ring-4 focus:ring-blue-500 focus:border-transparent focus:outline-none" />
                            <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Email" class="transition duration-150 ease-in-out px-4 py-2 rounded-lg border border-gray-300 w-full focus:ring-4 focus:ring-blue-500 focus:border-transparent focus:outline-none" />
                        </div>
                        <textarea name="idea" value={formData.idea} onChange={handleChange} placeholder="Let’s talk about your idea" class="transition duration-150 ease-in-out px-4 py- rounded-lg border border-gray-300 w-full focus:ring-4 focus:ring-blue-500 focus:border-transparent focus:outline-none" rows="4"></textarea>
                        <div class="flex items-center mt-4">
                            <input type="checkbox" id="ndaCheckbox" checked={formData.nda} onChange={toggleNDA} class="h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                            <label for="ndaCheckbox" class="ml-2 text-gray-800">I want to protect my data by signing an NDA</label>
                        </div>
                        <div className="flex items-center justify-center mt-6">
                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-150 ease-in-out shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>

                {/* Image Section - Now with a map */}
                <div className="w-full md:w-1/2 mt-4 md:mt-0">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.4248365496356!2d32.75082831525116!3d39.86992197942934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f8d8a9d1e2b%3A0x2840b2bcca9a6a39!2sBilkent%20University!5e0!3m2!1sen!2str!4v1642620692123!5m2!1sen!2str"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        className="rounded-lg shadow-lg"
                    ></iframe>

                </div>
            </div>
        </div>
    );
}

export default ContactUs;
