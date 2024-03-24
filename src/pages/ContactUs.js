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
        <div className="flex justify-center items-center h-screen bg-gray-200">
        <div className="flex justify-between items-center w-full max-w-6xl bg-white rounded-lg p-8 shadow-lg relative">
                {/* Left Section */}
<div class="max-w-4xl mx-auto p-8 shadow-2xl rounded-lg bg-white relative z-10">
    <h2 class="text-3xl font-bold mb-6 text-center">Contact Us</h2>
    <form onSubmit={handleSubmit} class="space-y-5 bg-white shadow rounded">
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
        <div class="flex items-center mt-4">
            <label for="file" class="block text-gray-700">Upload File:</label>
            <input type="file" id="file" onChange={handleFileChange} class="ml-4 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
        </div>
        <div class="flex items-center justify-center mt-6">
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-150 ease-in-out shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Submit
            </button>
        </div>
    </form>
</div>

                {/* Right Section */}
                <div className="w-1/2 ">
                    <img className="w-full h-full object-cover bg-white shadow rounded" src="https://via.placeholder.com/500x500" alt="Map" />
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
