import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';

const BlogDetail = () => {
    const navigate = useNavigate();

    // Sosyal medya yönlendirmeleri için fonksiyonlar
    const handleInstagram = () => {
        window.open('https://www.instagram.com/yourprofi/', '_blank'); // Instagram profiline yönlendirir
    };

    const handleWhatsapp = () => {
        const message = encodeURIComponent('Merhaba! Blogunuzu çok beğendim.'); // WhatsApp için bir mesaj
        window.open(`https://wa.me/yourphonenumber?text=${message}`, '_blank'); // WhatsApp'ta bir sohbet açar
    };

    const handleTwitter = () => {
        const tweet = encodeURIComponent('Harika bir blog keşfettim!'); // Twitter'da paylaşım mesajı
        window.open(`https://twitter.com/intent/tweet?text=${tweet}`, '_blank'); // Tweet oluşturur
    };

    const handleContact = () => {
        navigate('/contact'); // İletişim sayfasına yönlendirir
    };

    return (
        <div className="container mx-auto p-6 md:p-12 lg:p-4 ">
            <div className="flex flex-col items-center gap-4">
                {/* Blog Heading */}
                <div className="w-full max-w-4xl text-center lg:text-left bg-white p-4 lg:p-4 rounded-lg shadow-md">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-800">En İyi Seyahat Rehberi</h1>
                    <div className="mt-4 flex flex-col lg:flex-row lg:justify-between gap-4">
                        <div className="flex flex-col">
                            <span className="text-sm text-gray-600">Tarafından yazılmıştır:</span>
                            <span className="text-lg font-medium text-gray-800">John Doe</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm text-gray-600">Yayımlanma Tarihi:</span>
                            <span className="text-lg font-medium text-gray-800">22 Ocak 2021</span>
                        </div>
                    </div>
                </div>

                {/* Blog Image and Content */}
                <div className="w-full max-w-4xl bg-white p-6 lg:p-8 rounded-lg shadow-md">
                    <img
                        className="w-full h-auto rounded-lg mb-4"
                        src="https://www.forbes.com/advisor/wp-content/uploads/2022/09/travel_blog_2.jpg"
                        alt="Travel Photography"
                    />
                    <div className="text-left">
                        <h2 className="text-xl md:text-3xl font-bold text-gray-800">Benim Bloğum</h2>
                        <p className="text-base text-gray-700">
                            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis.
                        </p>
                        {/* Daha fazla içerik burada */}
                    </div>
                </div>

                {/* Share Section */}
                <div className="w-full max-w-4xl bg-white p-6 lg:p-12 rounded-lg shadow-md flex flex-col items-center gap-8">
                    <div className="text-lg font-semibold text-gray-800">Bloğu Paylaş</div>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
                            onClick={handleInstagram}
                        >
                            <FontAwesomeIcon icon={faInstagram} /> Instagram
                        </button>
                        <button
                            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
                            onClick={handleWhatsapp}
                        >
                            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
                        </button>
                        <button
                            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
                            onClick={handleTwitter}
                        >
                            <FontAwesomeIcon icon={faTwitter} /> Twitter
                        </button>
                    </div>
                </div>

                {/* Contact and Future Journey Section */}
                <div className="w-full max-w-4xl bg-white p-6 lg:p-12 rounded-lg shadow-md flex flex-col items-center gap-6">
                    <h3 className="text-2xl md:text-4xl font-bold text-gray-800 text-center lg:text-left">
                        Sıradaki Maceranızı Keşfedin
                    </h3>
                    <p className="text-base md:text-lg text-gray-700 text-center lg:text-left">
                        Geniş tur yelpazemizi keşfedin ve bir sonraki seyahatinizi bugün planlamaya başlayın.
                    </p>
                    <div className="flex justify-center lg:justify-start">
                        <button
                            className="px-6 py-3 border border-black text-black rounded-lg hover:border-red-300 transition"
                            onClick={handleContact}
                        >
                            İletişim
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
