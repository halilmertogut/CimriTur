import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Truncate function to shorten the texts
const truncate = (str, num) => {
    if (str.length > num) {
        return str.slice(0, num) + '...';
    } else {
        return str;
    }
};

// Dummy data for the tours
const userTours = [
    {
        id: 1,
        title: "Kapadokya Balon Turu",
        imageUrl: "https://source.unsplash.com/random/800x600?balloon",
        price: "1500 TL",
        company: "Dream Tours",
        date: "20 Mart 2024 - 09:00"
    },
    {
        id: 2,
        title: "Antalya Yat Turu",
        imageUrl: "https://source.unsplash.com/random/800x600?yacht",
        price: "3000 TL",
        company: "Sea Adventures",
        date: "18 Mart 2024 - 14:00"
    },
    // ... more tours
];

// Dummy data for the reviews
const userReviews = [
    {
        id: 1,
        title: "Harika bir deneyimdi!",
        content: "Balon turu sırasında muhteşem manzaralar eşliğinde çok eğlendik.",
        rating: 5,
        date: "22 Mart 2024"
    },
    {
        id: 2,
        title: "Unutulmaz bir gezi",
        content: "Yat turu beklediğimden daha heyecan vericiydi, herkese tavsiye ederim!",
        rating: 4,
        date: "19 Mart 2024"
    },
    // ... more reviews
];
const sellerReviews= [
    {
        id: 1,
        title: "Güzeldi!!",
        content:"Her konuda çok yardımcı oldular, ekibe çok teşekkürler.",
        imageUrl:"http://localhost:3000/static/media/logo.f261cb8b01b8609c8626.png",
        rating:5,
        date:"22 Mayıs 2024"
    }
]
const TourComment = () => {
    // State to manage active tab
    const [activeTab, setActiveTab] = useState('tourReviews');

    return (
        <div className="w-full font-montserrat p-4 bg-gray-100">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-wrap -mx-2">
                    {/* Reviews Section */}
                    <div className="w-full lg:w-1/2 px-2 mb-4 lg:mb-0">
                        <div className="bg-white shadow rounded-lg">
                            <div className="p-4 border-b">
                                <h2 className="text-2xl font-semibold text-gray-800">Değerlendirmelerim</h2>
                                <div className="flex justify-between">
                                    <button onClick={() => setActiveTab('tourReviews')} className={`font-semibold py-2 ${activeTab === 'tourReviews' ? 'text-red-500' : 'text-gray-500'}`}>
                                        Tur Değerlendirmelerim
                                    </button>
                                    <button onClick={() => setActiveTab('sellerReviews')} className={`font-semibold py-2 ${activeTab === 'sellerReviews' ? 'text-red-500' : 'text-gray-500'}`}>
                                        Satıcı Değerlendirmelerim
                                    </button>
                                </div>
                            </div>
                            {activeTab === 'tourReviews' && (
                                <div className="flex-grow p-4">
                                    {userReviews.map(review => (
                                        <div key={review.id} className="border-b last:border-b-0">
                                            <div className="p-4 flex items-center">
                                                <img src={`https://source.unsplash.com/random/800x600?sig=${review.id}`} alt="Review" className="w-16 h-16 object-cover rounded-full mr-4" />
                                                <div>
                                                    <h3 className="font-semibold text-lg text-gray-800">{review.title}</h3>
                                                    <p className="text-gray-600">{truncate(review.content, 7)}</p>
                                                    <p className="text-gray-500 text-sm">Değerlendirme Tarihi: {review.date}</p>
                                                    <p className="text-sm">{Array(review.rating).fill('⭐').join('')}{Array(5 - review.rating).fill('☆').join('')}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {activeTab === 'sellerReviews' && (
                                <div className="flex-grow p-4">
                                    {/* Placeholder for seller reviews */}
                                    {sellerReviews.map(review => (
                                        <div key={review.id} className="border-b last:border-b-0">
                                            <div className="p-4 flex items-center">
                                                <img src={`http://localhost:3000/static/media/logo.f261cb8b01b8609c8626.png?sig=${review.id}`} alt="Review" className="w-16 h-16 object-cover rounded-full mr-4" />
                                                <div>
                                                    <h3 className="font-semibold text-lg text-gray-800">{review.title}</h3>
                                                    <p className="text-gray-600">{truncate(review.content, 7)}</p>
                                                    <p className="text-gray-500 text-sm">Değerlendirme Tarihi: {review.date}</p>
                                                    <p className="text-sm">{Array(review.rating).fill('⭐').join('')}{Array(5 - review.rating).fill('☆').join('')}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Tours Section */}
                    <div className="w-full lg:w-1/2 px-2">
                        <div className="bg-white shadow rounded-lg">
                            <div className="p-4 border-b">
                                <h2 className="text-2xl font-semibold text-gray-800">Turlarım</h2>
                            </div>
                            {userTours.map(tour => (
                                <div key={tour.id} className="border-b last:border-b-0">
                                    <div className="p-4 flex justify-between items-center">
                                        <div className="flex">
                                            <img src={tour.imageUrl} alt={tour.title} className="w-20 h-20 object-cover rounded mr-4" />
                                            <div>
                                                <h3 className="font-semibold text-lg text-gray-800">{tour.title}</h3>
                                                <p className="text-gray-600">Tur Fiyatı: {tour.price}</p>
                                                <p className="text-gray-600">Tur Şirketi: {tour.company}</p>
                                                <p className="text-gray-500 text-sm">{tour.date}</p>
                                            </div>
                                        </div>
                                        <Link to={`/evaluate/${tour.id}`} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                                            Turu Değerlendir
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourComment;
