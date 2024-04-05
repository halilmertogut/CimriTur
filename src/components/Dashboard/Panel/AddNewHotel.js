import React, { useState } from "react";

const AddNewHotel = () => {
    const [tourType, setTourType] = useState("");
    const [duration, setDuration] = useState("");
    const [location, setLocation] = useState("");
    const [region, setRegion] = useState("");
    const [priceType, setPriceType] = useState("");
    const [tours, setTours] = useState([]);
    const [selectedTourType, setSelectedTourType] = useState("");
    const [selectedOption, setSelectedOption] = useState(null);

    const tourTypes = [
        { id: 1, name: "Otel / Tatil Köyü" },
        { id: 2, name: "Butik Hotel / Pansiyon" },
        { id: 3, name: "Apart / Camping" },
        { id: 4, name: "Casino" },
        { id: 5, name: "Kiralık Daire / Villa" },
        // Diğer tur türleri buraya eklenebilir
    ];

    const handleTourTypeSelect = (type) => {
        setSelectedTourType(type);
    };

    const handleAddTour = () => {
        const newTour = {
            tourType: selectedTourType,
            duration,
            location,
            region,
            priceType,
        };
        setTours([...tours, newTour]);
        setTourType("");
        setDuration("");
        setLocation("");
        setRegion("");
        setPriceType("");
        setSelectedTourType("");
    };

    const handleOptionSelect = (index) => {
        setSelectedOption(selectedOption === index ? null : index);
    };

    return (
        <div className="font-montserrat flex flex-col md:flex-row items-center justify-center h-auto mt-20">
            <div className="max-w-md px-4 py-8 bg-white shadow-md rounded-lg mb-8 md:mb-0 md:mr-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Konaklama Ekle</h2>
                <div className="mb-4">
                    <label htmlFor="tourType" className="block text-sm font-medium text-gray-700 mb-1">Konaklama Türü</label>
                    <div className="grid grid-cols-3 gap-4">
                        {tourTypes.map((type) => (
                            <button
                                key={type.id}
                                onClick={() => handleTourTypeSelect(type.name)}
                                className={`py-2 px-4 rounded-md border border-gray-300 ${selectedTourType === type.name ? 'bg-indigo-600 text-white hover:bg-indigo-700 transition duration-300' : 'hover:bg-gray-200 transition duration-300'}`}
                            >
                                {type.name}
                            </button>
                        ))}
                    </div>
                </div>
                {selectedTourType && (
                    <>
                        <div className="mb-4">
                            <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">Konaklama Süresi</label>
                            <input
                                type="text"
                                id="duration"
                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                value={duration}
                                onChange={(e) => setDuration(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Tesis Konumu</label>
                            <input
                                type="text"
                                id="location"
                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-1">Konaklama Bölgesi</label>
                            <select
                                id="region"
                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                value={region}
                                onChange={(e) => setRegion(e.target.value)}
                            >
                                <option value="">Bölge Seçiniz</option>
                                <option value="Marmara">Marmara</option>
                                <option value="Ege">Ege</option>
                                <option value="Akdeniz">Akdeniz</option>
                                <option value="Karadeniz">Karadeniz</option>
                                <option value="İç Anadolu">İç Anadolu</option>
                                <option value="Doğu Anadolu">Doğu Anadolu</option>
                                <option value="Güneydoğu Anadolu">Güneydoğu Anadolu</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="priceType" className="block text-sm font-medium text-gray-700 mb-1">Fiyat Türü</label>
                            <select
                                id="priceType"
                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                value={priceType}
                                onChange={(e) => setPriceType(e.target.value)}
                            >
                                <option value="">Fiyat Türü Seçiniz</option>
                                <option value="Kişi Başı Fiyat">Kişi Başı Fiyat</option>
                                <option value="Rezervasyon Fiyatı">Rezervasyon Fiyatı</option>
                            </select>
                        </div>
                        <button
                            onClick={handleAddTour}
                            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
                        >
                            Ekle
                        </button>
                    </>
                )}
            </div>

            <div className="max-w-full ">
                <div style={{ width: "100%", height: "calc(100vh-240px" }}>
                    <table className="w-full whitespace-nowrap">
                        <thead>
                            <tr>
                                <th className="border-b border-gray-200 px-4 py-2">Konaklama Türü</th>
                                <th className="border-b border-gray-200 px-4 py-2">Konaklama Süresi</th>
                                <th className="border-b border-gray-200 px-4 py-2">Konaklama Yeri</th>
                                <th className="border-b border-gray-200 px-4 py-2">Konaklama Bölgesi</th>
                                <th className="border-b border-gray-200 px-4 py-2">Fiyat Türü</th>
                                <th className="border-b border-gray-200 px-4 py-2">Seçenek</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tours.map((tour, index) => (
                                <tr key={index} className="border-b border-gray-200">
                                    <td className="px-4 py-2">{tour.tourType}</td>
                                    <td className="px-4 py-2">{tour.duration}</td>
                                    <td className="px-4 py-2">{tour.location}</td>
                                    <td className="px-4 py-2">{tour.region}</td>
                                    <td className="px-4 py-2">{tour.priceType}</td>
                                    <td className="px-4 py-2 relative">
                                        <button
                                            onClick={() => handleOptionSelect(index)}
                                            className="text-indigo-600 hover:text-indigo-900"
                                        >
                                            Seçenekler
                                        </button>
                                        {selectedOption === index && (
                                            <div className="absolute z-10 -left-14 top-full bg-white border border-gray-200 shadow-md rounded-md mt-2">
                                                <button className="block px-4 py-2 text-left w-full hover:bg-gray-100">Detay</button>
                                                <button className="block px-4 py-2 text-left w-full hover:bg-gray-100">Düzenle</button>
                                                <button className="block px-4 py-2 text-left w-full hover:bg-gray-100">Fiyat</button>
                                                <button className="block px-4 py-2 text-left w-full hover:bg-gray-100">Yeni Rezervasyon</button>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AddNewHotel;
