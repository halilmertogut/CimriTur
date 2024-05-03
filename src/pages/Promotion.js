import React, { useState } from 'react';
import { RiHeartLine, RiStarFill, RiCloseLine } from 'react-icons/ri';
import Chatbot from 'react-chatbot-kit';
import ActionProvider from '../components/Chatbot/ActionProvider';
import MessageParser from '../components/Chatbot/MessageParser';
import config from '../components/Chatbot/config';
import 'react-chatbot-kit/build/main.css';
import customLogo from '../components/Chatbot/cimriturbot.png';

const Promotion = () => {
    const [chatbotActive, setChatbotActive] = useState(false);

    const toggleChatbot = () => setChatbotActive(!chatbotActive);

    const [activeTab, setActiveTab] = useState('mostAdded');

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    // Dummy data for products
    const products = [
        { id: 1, name: "Ege Turu", price: "1500 TL", rating: 4.4 },
        { id: 2, name: "Karadeniz Turu", price: "1750 TL", rating: 3.6 },
        // Additional products can be added here
    ];

    // Dummy data for tours
    const tours = [
        { id: 1, name: "Konum 20", price: "523 TL", rating: 4.4, date: "Sat, Jul 29, 2023" },
        { id: 2, name: "Konum 5", price: "640 TL", rating: 4.3, date: "Mon, Jul 24, 2023 - Thu, Jul 27, 2023" },
        // Additional tours can be added here
    ];
    const flashTours = [
        { id: 1, name: "Istanbul City Tour", price: "200 TL", rating: 5.0, date: "Fri, Aug 4, 2023" },
        { id: 2, name: "Cappadocia Hot Air Balloon", price: "850 TL", rating: 4.9, date: "Sun, Aug 6, 2023" },
        // Additional flash tours can be added here
    ];
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between mb-6">
                <button
                    className={`px-4 py-2 rounded-lg ${activeTab === 'mostAdded' ? 'bg-teal-200 text-teal-800' : 'bg-pink-200 text-pink-800'}`}
                    onClick={() => { setActiveTab('mostAdded'); scrollToSection('mostAddedSection'); }}
                >
                    Sepete En Çok Eklenenler
                </button>
                <button
                    className={`px-4 py-2 rounded-lg ${activeTab === 'featured' ? 'bg-orange-200 text-orange-800' : 'bg-pink-200 text-pink-800'}`}
                    onClick={() => { setActiveTab('featured'); scrollToSection('featuredSection'); }}
                >
                    En Çok Öne Çıkanlar
                </button>
                <button
                    className={`px-4 py-2 rounded-lg ${activeTab === 'flashProducts' ? 'bg-red-200 text-red-800' : 'bg-pink-200 text-pink-800'}`}
                    onClick={() => { setActiveTab('flashProducts'); scrollToSection('flashProductsSection'); }}
                >
                    Flaş Teklifler
                </button>
            </div>
            <div id="mostAddedSection" className="pt-8">
                <h2 className="text-2xl font-semibold mb-6">Popüler Ürünler</h2>
                {/* Content for most added products */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {products.map(product => (
                        <div key={product.id} className="border shadow-lg hover:shadow-xl rounded-lg overflow-hidden transition-shadow duration-300">
                            <img src="https://images.unsplash.com/photo-1560427146-34a1951ee726?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt={product.name} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="font-bold text-lg">{product.name}</h3>
                                <div className="flex items-center my-2">
                                    <RiStarFill className="text-yellow-500" />
                                    <span className="ml-1 text-sm">{product.rating}</span>
                                </div>
                                <p className="text-lg font-semibold">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>



            <div id="featuredSection" className="pt-8">

                {/* Content for featured products */}
                <h2 className="text-2xl font-semibold mb-6">Önerilen Turlar</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tours.map(tour => (
                        <div key={tour.id} className="border shadow-lg hover:shadow-xl rounded-lg overflow-hidden bg-white relative transition-shadow duration-300">
                            <div className="absolute top-2 right-2 p-2 bg-white rounded-full shadow cursor-pointer hover:bg-gray-100 transition-colors duration-200">
                                <RiHeartLine className="text-gray-800 hover:text-red-500 transition-colors duration-200" />
                            </div>
                            <img src="https://images.unsplash.com/photo-1598941417713-8fc2d4c7a51a?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt={tour.name} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="font-bold text-lg">{tour.name}</h3>
                                <div className="flex items-center my-2">
                                    <RiStarFill className="text-yellow-500" />
                                    <span className="ml-1 text-sm">{tour.rating}</span>
                                </div>
                                <p className="text-lg font-semibold">{tour.price}</p>
                                <p className="text-gray-600 text-sm">{tour.date}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <div id="flashProductsSection" className="pt-8">
                <h2 className="text-2xl font-semibold mb-6">Flaş Teklifler</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {flashTours.map(tour => (
                        <div key={tour.id} className="border shadow-lg hover:shadow-xl rounded-lg overflow-hidden bg-white relative transition-shadow duration-300">
                            <div className="absolute top-2 right-2 p-2 bg-white rounded-full shadow cursor-pointer hover:bg-gray-100 transition-colors duration-200">
                                <RiHeartLine className="text-gray-800 hover:text-red-500 transition-colors duration-200" />
                            </div>
                            <img src="https://images.unsplash.com/photo-1598941417713-8fc2d4c7a51a?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt={tour.name} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="font-bold text-lg">{tour.name}</h3>
                                <div className="flex items-center my-2">
                                    <RiStarFill className="text-yellow-500" />
                                    <span className="ml-1 text-sm">{tour.rating}</span>
                                </div>
                                <p className="text-lg font-semibold">{tour.price}</p>
                                <p className="text-gray-600 text-sm">{tour.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="fixed bottom-4 right-4 flex items-center space-x-3 animate-slideIn">
                <button
                    onClick={toggleChatbot}
                    className="bg-red-500 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition duration-300 flex items-center justify-center relative z-20"
                    style={{ width: '50px', height: '50px', padding: 0 }}
                    aria-label="Toggle Chatbot"
                >
                    {chatbotActive ? (
                        <RiCloseLine size="24" />
                    ) : (
                        <img
                            src={customLogo}
                            alt="Custom Logo"
                            className="w-full h-full object-cover"
                        />
                    )}
                </button>

                <div className="hidden md:flex items-center bg-white text-red-500 text-sm px-4 py-2 rounded-full shadow-lg">
                    Müşteri Hizmetleri
                </div>

                {/* Chatbot Component */}
                {chatbotActive && (
                    <div className="fixed bottom-16 right-4 bg-white rounded-lg shadow-lg p-4 w-80 z-10">
                        <Chatbot
                            config={config}
                            actionProvider={ActionProvider}
                            messageParser={MessageParser}
                            headerText="SupportBot"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Promotion;
