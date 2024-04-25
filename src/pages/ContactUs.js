import React, { useState } from 'react';
import bgVideo from '../images/contactvideo.mp4'; // Ensure you have a compelling travel video
const ContactUs = () => {
    const [formData, setFormData] = useState({
        contactName: '',
        email: '',
        idea: '',
        nda: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/api/contact/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            alert('E-posta başarıyla gönderildi!');
        })
        .catch(error => {
            console.error('E-posta gönderilemedi:', error);
            alert('E-posta gönderilemedi, lütfen daha sonra tekrar deneyiniz.');
        });
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const toggleNDA = () => {
        setFormData(prevState => ({
            ...prevState,
            nda: !prevState.nda
        }));
    };

    return (
        <div className="flex justify-center items-center min-h-screen relative overflow-hidden bg-black font-montserrat">
            {/* Background Video */}
            <video autoPlay loop muted className="absolute w-auto min-w-full min-h-full max-w-none">
                <source src={bgVideo} type="video/mp4" />
                Tarayıcınız video etiketini desteklemiyor.
            </video>
            {/* Overlay */}
            <div className="absolute w-full h-full bg-black opacity-20"></div>

            <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-xl overflow-hidden max-w-7xl w-full z-10 relative">
                {/* Contact Form Section */}
                <div className="w-full md:w-1/2 p-5 bg-white">
                    <h2 className="text-3xl font-semibold text-center text-gray-700">Merhaba <span className='text-4xl'>👋</span></h2>
                    <h3 className="text-2xl font-semibold text-center text-gray-700 mt-5">Bizimle iletişime geçin! ✨</h3>
                    <p className="text-center text-gray-500 mb-6 mt-5">Sizden haber almak için sabırsızlanıyoruz. Aşağıdaki formu doldurun ve kısa süre içinde sizinle iletişime geçelim!</p>
                    <form onSubmit={handleSubmit} className="mt-6">
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-600">Ad Soyad</label>
                            <input type="text" name="contactName" value={formData.contactName} onChange={handleChange} className="mt-1 block w-full px-4 py-2 bg-white border rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" placeholder="Ali Veli" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-600">Email</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full px-4 py-2 bg-white border rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" placeholder="aliveli@gmail.com" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-600">Mesaj</label>
                            <textarea name="idea" value={formData.idea} onChange={handleChange} rows="4" className="mt-1 block w-full px-4 py-2 bg-white border rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" placeholder="Mesajınızı yazınız..."></textarea>
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" id="ndaCheckbox" checked={formData.nda} onChange={toggleNDA} className="text-blue-600 form-checkbox h-4 w-4 focus:ring-blue-500 border-gray-300 rounded" />
                            <label htmlFor="ndaCheckbox" className="ml-2 text-sm text-gray-600">KVKK</label>
                        </div>
                        <div className="flex items-center justify-between">
                            <button type="submit" className="w-full px-4 py-2 text-center text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300">
                                Gönder
                            </button>
                        </div>
                    </form>
                </div>

                {/* Google Map Section */}
                <div className="w-full md:w-1/2 bg-white">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.4248365496356!2d32.75082831525116!3d39.86992197942934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f8d8a9d1e2b%3A0x2840b2bcca9a6a39!2sBilkent%20University!5e0!3m2!1sen!2str!4v1642620692123"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        className="rounded-lg mt-20 pr-5"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
