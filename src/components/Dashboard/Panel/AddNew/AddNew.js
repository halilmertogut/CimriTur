import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../SideBar";

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

const AddNew = () => {
    const [tourState, setTourState] = useState({
        tourType: "",
        duration: "",
        location: "",
        region: "",
        popularLocation: "",
        priceType: "",
        tours: [],
        selectedTourType: "",
        selectedIndex: null
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setTourState(prev => ({ ...prev, [id]: value }));
    };

    const handleTourTypeSelect = (name) => {
        setTourState(prev => ({ ...prev, selectedTourType: name }));
    };

    const handleAddTour = () => {
        const { tours, selectedTourType, duration, location, region, popularLocation, priceType } = tourState;
        const newTour = { tourType: selectedTourType, duration, location, region, popularLocation, priceType };
        setTourState(prev => ({
            ...prev,
            tours: [...tours, newTour],
            tourType: "",
            duration: "",
            location: "",
            region: "",
            popularLocation: "",
            priceType: "",
            selectedTourType: ""
        }));
    };

    const toggleOptions = (index) => {
        setTourState(prev => ({ ...prev, selectedIndex: prev.selectedIndex === index ? null : index }));
    };

    return (
        <div className="font-montserrat flex flex-row items-start justify-start min-h-screen">
            <Sidebar />
            <div className="flex flex-col w-full pl-4">
                <div className="w-full px-4 py-8 bg-white shadow-md rounded-lg">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tur Ekle</h2>
                    <div className="mb-4">
                        <label htmlFor="tourType" className="block text-sm font-medium text-gray-700 mb-1">Tur Türü</label>
                        <div className="grid grid-cols-3 gap-4">
                            {tourTypes.map((type) => (
                                <button
                                    key={type.id}
                                    onClick={() => handleTourTypeSelect(type.name)}
                                    className={`py-2 px-4 rounded-md border border-gray-300 ${tourState.selectedTourType === type.name ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-200'}`}
                                >
                                    {type.name}
                                </button>
                            ))}
                        </div>
                    </div>
                    {tourState.selectedTourType && <TourDetails tourState={tourState} handleInputChange={handleInputChange} popularLocations={popularLocations} />}
                    <button
                        onClick={handleAddTour}
                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
                    >
                        Ekle
                    </button>
                </div>
                {tourState.tours.length > 0 && <TourPreview tours={tourState.tours} toggleOptions={toggleOptions} selectedIndex={tourState.selectedIndex} />}
            </div>
        </div>
    );
};

const TourDetails = ({ tourState, handleInputChange, popularLocations }) => {
    return (
        <>
            <InputField label="Etkinlik Süresi" id="duration" value={tourState.duration} onChange={handleInputChange} />
            <InputField label="Tur Yeri" id="location" value={tourState.location} onChange={handleInputChange} />
            <SelectField label="Tur Bölgesi" id="region" value={tourState.region} options={Object.keys(popularLocations)} onChange={handleInputChange} />
            {tourState.region && <SelectField label="Popüler Yerler" id="popularLocation" value={tourState.popularLocation} options={popularLocations[tourState.region]} onChange={handleInputChange} />}
            <SelectField label="Fiyat Türü" id="priceType" value={tourState.priceType} options={["Kişi Başı Fiyat", "Rezervasyon Fiyatı"]} onChange={handleInputChange} />
        </>
    );
};

const InputField = ({ label, id, value, onChange }) => (
    <div className="mb-4">
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <input
            type="text"
            id={id}
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={value}
            onChange={onChange}
        />
    </div>
);

const SelectField = ({ label, id, value, options, onChange }) => (
    <div className="mb-4">
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>

        <select
            id={id}
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={value}
            onChange={onChange}
        >
            <option value="">Seçiniz</option>
            {options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
            ))}
        </select>
    </div>
);

const TourPreview = ({ tours, toggleOptions, selectedIndex }) => (
    <div className="w-full mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ön İzleme</h2>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th className="px-6 py-3">Tur Türü</th>
                    <th className="px-6 py-3">Etkinlik Süresi</th>
                    <th className="px-6 py-3">Tur Yeri</th>
                    <th className="px-6 py-3">Tur Bölgesi</th>
                    <th className="px-6 py-3">Popüler Yer</th>
                    <th className="px-6 py-3">Fiyat Türü</th>
                    <th className="px-6 py-3">Seçenek</th>
                </tr>
            </thead>
            <tbody>
                {tours.map((tour, index) => (
                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="px-6 py-4">{tour.tourType}</td>
                        <td className="px-6 py-4">{tour.duration}</td>
                        <td className="px-6 py-4">{tour.location}</td>
                        <td className="px-6 py-4">{tour.region}</td>
                        <td className="px-6 py-4">{tour.popularLocation}</td>
                        <td className="px-6 py-4">{tour.priceType}</td>
                        <td className="px-6 py-4 relative">
                            <button
                                onClick={() => toggleOptions(index)}
                                className="text-indigo-600 hover:text-indigo-900"
                            >
                                Seçenekler
                            </button>
                            {selectedIndex === index && (
                                <div className="absolute z-10 left-0 mt-2 bg-white border border-gray-200 shadow-md rounded-md">
                                    <Link to={`/addnewdetail/`} target="_blank" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition duration-300">Detay</Link>
                                    <Link to={`/addnewedit/`} target="_blank" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition duration-300">Düzenle</Link>
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
);

export default AddNew;
