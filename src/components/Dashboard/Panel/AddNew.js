import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddNew = () => {
    const [tourType, setTourType] = useState("");
    const [duration, setDuration] = useState("");
    const [location, setLocation] = useState("");
    const [region, setRegion] = useState("");
    const [popularLocation, setPopularLocation] = useState("");
    const [priceType, setPriceType] = useState("");
    const [tours, setTours] = useState([]);
    const [selectedTourType, setSelectedTourType] = useState("");
    const [selectedIndex, setSelectedIndex] = useState(null);

    const tourTypes = [
        { id: 1, name: "Paket Turları" },
        { id: 2, name: "Aktivite" },
        { id: 3, name: "Günlük Tur" },
        { id: 4, name: "VIP Tur" },
        { id: 5, name: "Kiralık Araç ile Tur" },
        { id: 6, name: "Müze Tur" },
        { id: 7, name: "Kamp Tur" }
    ];

    const popularLocations = {
        Marmara: ["İstanbul", "Bursa", "Çanakkale"],
        Ege: ["İzmir", "Muğla", "Aydın"],
        Akdeniz: ["Antalya", "Mersin", "Adana"],
        Karadeniz: ["Trabzon", "Rize", "Ordu"],
        "İç Anadolu": ["Ankara", "Konya", "Eskişehir"],
        "Doğu Anadolu": ["Van", "Erzurum", "Diyarbakır"],
        "Güneydoğu Anadolu": ["Şanlıurfa", "Mardin", "Diyarbakır"]
    };

    const handleTourTypeSelect = (type) => {
        setSelectedTourType(type);
    };

    const handleAddTour = () => {
        const newTour = {
            tourType: selectedTourType,
            duration,
            location,
            region,
            popularLocation,
            priceType
        };
        setTours([...tours, newTour]);
        setTourType("");
        setDuration("");
        setLocation("");
        setRegion("");
        setPopularLocation("");
        setPriceType("");
        setSelectedTourType("");
    };

    const toggleOptions = (index) => {
        setSelectedIndex(index === selectedIndex ? null : index);
    };

    return (
        <div className="font-montserrat flex flex-col md:flex-row items-center justify-center h-auto mt-20">
            <div className="max-w-md px-4 py-8 bg-white shadow-md rounded-lg mb-8 md:mb-0 md:mr-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tur Ekle</h2>
                <div className="mb-4">
                    <label htmlFor="tourType" className="block text-sm font-medium text-gray-700 mb-1">Tur Türü</label>
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
                            <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">Etkinlik Süresi</label>
                            <input
                                type="text"
                                id="duration"
                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                value={duration}
                                onChange={(e) => setDuration(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Tur Yeri</label>
                            <input
                                type="text"
                                id="location"
                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-1">Tur Bölgesi</label>
                            <select
                                id="region"
                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                value={region}
                                onChange={(e) => setRegion(e.target.value)}
                            >
                                <option value="">Bölge Seçiniz</option>
                                {Object.keys(popularLocations).map((region, index) => (
                                    <option key={index} value={region}>{region}</option>
                                ))}
                            </select>
                        </div>
                        {region && (
                            <div className="mb-4">
                                <label htmlFor="popularLocation" className="block text-sm font-medium text-gray-700 mb-1">Popüler Yerler</label>
                                <select
                                    id="popularLocation"
                                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    value={popularLocation}
                                    onChange={(e) => setPopularLocation(e.target.value)}
                                >
                                    <option value="">Popüler Yer Seçiniz</option>
                                    {popularLocations[region].map((location, index) => (
                                        <option key={index} value={location}>{location}</option>
                                    ))}
                                </select>
                            </div>
                        )}
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

            <div className="max-w-full">
                <div style={{ width: "100%", height: "calc(100vh - 240px)" }}>
                    <table className="w-full">
                        <thead>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ön İzleme</h2>
                            <tr>
                                <th className="border-b border-gray-200 px-4 py-2">Tur Türü</th>
                                <th className="border-b border-gray-200 px-4 py-2">Etkinlik Süresi</th>
                                <th className="border-b border-gray-200 px-4 py-2">Tur Yeri</th>
                                <th className="border-b border-gray-200 px-4 py-2">Tur Bölgesi</th>
                                <th className="border-b border-gray-200 px-4 py-2">Popüler Yer</th>
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
                                    <td className="px-4 py-2">{tour.popularLocation}</td>
                                    <td className="px-4 py-2">{tour.priceType}</td>
                                    <td className="px-4 py-2 relative">
                                        <button
                                            onClick={() => toggleOptions(index)}
                                            className="text-indigo-600 hover:text-indigo-900"
                                        >
                                            Seçenekler
                                        </button>
                                        {selectedIndex === index && (
                                            <div className="absolute z-10 left-0 mt-2 bg-white border border-gray-200 shadow-md rounded-md">
                                               <Link to={`/addnewdetail/`} target="_blank"className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition duration-300">Detay</Link>   {/*Link to={`/addnewdetail/${index}`} Burası normalde UİD ile olucak göstermelik detail.js e atıyor */}
                                                <button className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition duration-300">Düzenle</button>
                                                <button className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition duration-300">Fiyat</button>
                                                <button className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition duration-300">Yeni Rezervasyon</button>
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

export default AddNew;
