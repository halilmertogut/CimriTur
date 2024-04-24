// promotion.js
import React from 'react';
import { RiHeartLine, RiStarFill } from 'react-icons/ri';

const Promotion = () => {
    // Dummy data for products
    const products = [
        // Replace with your actual product data
        { id: 1, name: "FV Palazzo Pantolon Oversize", price: "329 TL", rating: 4.4 },
        { id: 2, name: "BETILINA Beyaz Vintage Baskılı T-shirt", price: "175 TL", rating: 3.6 },
        // ... more products
    ];

    // Dummy data for tours
    const tours = [
        // Replace with your actual tour data
        { id: 1, name: "Konum 20", price: "523 TL", rating: 4.4, date: "Sat, Jul 29, 2023" },
        { id: 2, name: "Konum 5", price: "640 TL", rating: 4.3, date: "Mon, Jul 24, 2023 - Thu, Jul 27, 2023" },
        // ... more tours
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-semibold mb-6">Popüler Ürünler</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {products.map(product => (
                    <div key={product.id} className="border shadow hover:shadow-lg rounded-lg overflow-hidden">
                        <img src="path-to-your-product-image.jpg" alt={product.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="font-bold">{product.name}</h3>
                            <div className="flex items-center my-2">
                                <RiStarFill className="text-yellow-500" />
                                <span className="ml-1 text-sm">{product.rating}</span>
                            </div>
                            <p className="text-lg font-semibold">{product.price}</p>
                        </div>
                    </div>
                ))}
            </div>

            <h2 className="text-2xl font-semibold mb-6">Önerilen Turlar</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tours.map(tour => (
                    <div key={tour.id} className="border shadow hover:shadow-lg rounded-lg overflow-hidden bg-white relative">
                        <div className="absolute top-2 right-2 p-2 bg-white rounded-full shadow cursor-pointer">
                            <RiHeartLine className="text-gray-800" />
                        </div>
                        <img src="path-to-your-tour-image.jpg" alt={tour.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="font-bold">{tour.name}</h3>
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
    );
};

export default Promotion;
