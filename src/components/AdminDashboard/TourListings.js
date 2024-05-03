import React, { useState } from 'react';

const TourListings = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const itemsPerPage = 9;

    const tours = [
        { name: "Roma Tarihi Turu", agency: "Antik Kaşifler", location: "Roma, İtalya", description: "Antik Roma'nın kalıntılarını uzman rehberlerle keşfedin.", imageUrl: "https://placeimg.com/640/480/arch" },
        { name: "Singapur Gece Safari", agency: "Vahşi Yaşam Maceraları", location: "Singapur", description: "Dünyanın ilk gece hayvanat bahçesinde gece vahşi yaşamını deneyimleyin.", imageUrl: "https://placeimg.com/640/480/nature" },
        { name: "Tokyo Kültür Festivalleri", agency: "Kültür Bağlantısı", location: "Tokyo, Japonya", description: "Tokyo'nun canlı festivallerine kendinizi kaptırın.", imageUrl: "https://placeimg.com/640/480/people" },
        // Add more tours as necessary
    ];

    const filteredTours = tours.filter(tour =>
        tour.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tour.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tour.agency.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const pageCount = Math.ceil(filteredTours.length / itemsPerPage);
    const currentData = filteredTours.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-6">Tur Listeleri</h1>
            <div className="mb-4">
                <input 
                    type="text" 
                    className="w-full p-2 border rounded"
                    placeholder="Tur adı, konum veya ajans adıyla ara"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <div className="grid md:grid-cols-3 gap-4">
                {currentData.map((tour, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src={tour.imageUrl} alt={tour.name} className="w-full h-56 object-cover object-center" />
                        <div className="p-4">
                            <h3 className="text-xl font-bold">{tour.name}</h3>
                            <p className="text-sm text-gray-500">Organize Eden: {tour.agency}</p>
                            <p className="text-sm text-gray-500">Konum: {tour.location}</p>
                            <p className="mt-2 text-gray-700 text-sm">{tour.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-6">
                <ul className="flex list-none">
                    {[...Array(pageCount).keys()].map(page => (
                        <li key={page} className={`px-4 py-2 ${currentPage === page + 1 ? 'text-blue-600' : 'text-gray-500'} cursor-pointer`} onClick={() => handlePageChange(page + 1)}>
                            {page + 1}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TourListings;
