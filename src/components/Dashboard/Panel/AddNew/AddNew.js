import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../SideBar";
import { useSelector } from "react-redux";
const tourTypes = [
    { id: 1, name: "Paket Turları" },
    { id: 2, name: "Aktivite" },
    { id: 3, name: "Günlük Tur" },
    { id: 4, name: "VIP Tur" },
    { id: 5, name: "Kiralık Araç ile Tur" },
    { id: 6, name: "Müze Tur" },
    { id: 7, name: "Kamp Tur" }
];
const regions = [
    "Marmara", "Ege", "Akdeniz", "Karadeniz", "İç Anadolu", "Doğu Anadolu", "Güneydoğu Anadolu"
];


const tourCategories = [
    "Ortadoğu Turları", "Macera Turları", "Eğitim Turları", "Kapadokya Turları", "Akdeniz Turları",
    "Güneydoğu Turları", "Doğu Anadolu Turları", "Keşif Turları", "Aile Turları", "Ege Turları",
    "Karadeniz Turları", "Vizesiz Turlar", "Kültür Turları", "Günübirlik Turlar", "Uzak Doğu Turları",
    "Afrika Turları", "Yurtdışı Turları", "Şehir Turları", "Avrupa Turları", "Kayak Turu"
];
const AddNew = () => {

    const token = useSelector(state => state.auth.token);
    const [tourState, setTourState] = useState({
        tourName: "",
        tourSlogan: "",
        tourCategory: "",
        selectedTourType: "",
        departurePoint: "",
        transportType: "",
        duration: "",
        location: "",
        region: "",
        popularLocation: "",
        priceType: "",
        tours: [],
        selectedIndex: null
    });
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setTourState(prevState => ({
            ...prevState,
            [id]: value // id ile state'de tutulan key'in aynı olduğundan emin olun
        }));
    };



    const handleTourTypeSelect = (name) => {
        console.log(name);
        setTourState(prev => ({ ...prev, selectedTourType: name }));
    };

    const handleAddTour = async () => {
        const { tours, tourName, tourSlogan, tourCategory, selectedTourType, departurePoint, transportType, duration, location, region, popularLocation, priceType } = tourState;
    
        let missingFields = [];
        if (!tourName) missingFields.push('Tur Adı');
        if (!tourSlogan) missingFields.push('Tur Sloganı');
        if (!tourCategory) missingFields.push('Tur Kategorisi');
        if (!selectedTourType) missingFields.push('Tur Türü');
        if (!departurePoint) missingFields.push('Çıkış Noktası');
        if (!transportType) missingFields.push('Ulaşım Tipi');
        if (!duration) missingFields.push('Etkinlik Süresi');
        if (!location) missingFields.push('Tur Yeri');
        if (!priceType) missingFields.push('Fiyat Türü');
    
        if (missingFields.length > 0) {
            alert(`Lütfen tüm alanları doldurunuz. Eksik alanlar: ${missingFields.join(', ')}`);
            return;
        }
    
        const newTour = {
            tourName, tourSlogan, tourCategory, selectedTourType, departurePoint, transportType,
            duration, location, region, popularLocation, priceType
        };
    
        console.log('Submitting new tour:', newTour);

        try {
            const response = await fetch('http://localhost:3000/api/tours/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(newTour)
            });
            const result = await response.json();
    
            if (response.ok) {
                setTourState(prev => ({
                    ...prev,
                    tours: [...prev.tours, result.savedTour],
                    tourName: "",
                    tourSlogan: "",
                    tourCategory: "",
                    selectedTourType: "",
                    departurePoint: "",
                    transportType: "",
                    duration: "",
                    location: "",
                    region: "",
                    popularLocation: "",
                    priceType: ""
                }));
                alert('Tour successfully added!');
            } else {
                throw new Error(result.message || "Failed to add the tour.");
            }
        } catch (error) {
            alert(`Error adding tour: ${error.message}`);
        }
    };
    
    
    
    const toggleOptions = (index) => {
        setTourState(prev => ({ ...prev, selectedIndex: prev.selectedIndex === index ? null : index }));
    };


    return (
        <div className="font-montserrat flex flex-row items-start justify-start min-h-screen">
            <Sidebar />
            <div className="flex flex-col w-full p-4">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Tur Ekle</h2>

                    {/* Tur Adı ve Tur Sloganı yan yana */}
                    <div className="flex -mx-3 mb-6">
                        <div className="w-1/2 px-3">
                            <InputField label="Tur Adı (Max:120 Karakter)" id="tourName" value={tourState.tourName} onChange={handleInputChange} />
                        </div>
                        <div className="w-1/2 px-3">
                            <InputField label="Tur Sloganı" id="tourSlogan" value={tourState.tourSlogan} onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className="flex -mx-3 mb-6">
                        <div className="w-1/2 px-3">
                            <SelectField label="Tur Kategorisi" id="tourCategory" value={tourState.tourCategory} options={tourCategories} onChange={handleInputChange} />
                        </div>
                        <div className="w-1/2 px-3">
                            <SelectField label="Tur Bölgesi" id="region" value={tourState.region} options={regions} onChange={handleInputChange} />
                        </div>
                    </div>
                    {/* Etkinlik Süresi, Tur Yeri ve Popüler Yer alanları */}
                    <div className="flex -mx-3 mb-6">
                        <div className="w-1/2 px-3">
                            <InputField label="Etkinlik Süresi" id="duration" value={tourState.duration} onChange={handleInputChange} />
                        </div>
                        <div className="w-1/2 px-3">
                            <InputField label="Tur Yeri" id="location" value={tourState.location} onChange={handleInputChange} />
                        </div>
                    </div>



                    {/* Tur Türü butonları */}
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Tur Türleri</h2>
                        <div className="grid grid-cols-3 gap-3 mb-3">
                            {tourTypes.map((type) => (
                                <button
                                    key={type.id}
                                    onClick={() => handleTourTypeSelect(type.name)}
                                    className={`py-2 px-4 rounded-md border border-gray-300 ${tourState.selectedTourType === type.name ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                                >
                                    {type.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Çıkış Noktası ve Ulaşım Tipi yan yana */}
                    <div className="flex -mx-3 mb-6">
                        <div className="w-1/2 px-3 mr-3">
                            <InputField label="Çıkış Noktası" id="departurePoint" value={tourState.departurePoint} onChange={handleInputChange} />
                        </div>
                        <div className="w-1/2 px-3 ml-3">
                            <InputField label="Ulaşım Tipi" id="transportType" value={tourState.transportType} onChange={handleInputChange} />
                        </div>
                    </div>


                    {/* Tur Bölgesi ve Fiyat Türü alt alta */}
                    <SelectField label="Fiyat Türü" id="priceType" value={tourState.priceType} options={["Kişi Başı Fiyat", "Rezervasyon Fiyatı"]} onChange={handleInputChange} />

                    <TourPreview tours={tourState.tours} toggleOptions={toggleOptions} selectedIndex={tourState.selectedIndex} />
                    {/* Ekle butonu */}
                    <button
                        onClick={handleAddTour}
                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 mt-6"
                    >
                        Ekle
                    </button>
                </div>
            </div>
        </div>
    );
};/*Ş */



// InputField ve SelectField bileşenleri için stil güncellemeleri
const InputField = ({ label, id, value, onChange }) => {
    return (
        <div className="w-full px-3 mb-6">
            <label htmlFor={id} className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                {label}
            </label>
            <input
                type="text"
                id={id}
                value={value}
                onChange={onChange}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
        </div>
    );
};

const SelectField = ({ label, id, value, options, onChange }) => (
    <div className="w-full">
        <label htmlFor={id} className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            {label}
        </label>
        <select
            id={id}
            className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={value}
            onChange={onChange}
        >
            <option value="">{label}</option>
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
);


const TourPreview = ({ tours, toggleOptions, selectedIndex }) => (
    <div className="w-full mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ön İzleme</h2>
        {tours.length > 0 ? (
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
                            <td className="px-6 py-4">{tour.selectedTourType}</td>
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
        ) : (
            <div className="text-center py-4">Henüz tur eklenmedi.</div>
        )}
    </div>
);

export default AddNew;
