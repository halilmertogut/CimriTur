import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddNewTourProgram = () => {
    const [dayCount, setDayCount] = useState(1);
    const [dayPlans, setDayPlans] = useState([
        {
            city: "",
            accommodation: "",
            title: "",
            itinerary: ""
        }
    ]);

    const handleAddDay = () => {
        setDayCount(dayCount + 1);
        setDayPlans([
            ...dayPlans,
            {
                city: "",
                accommodation: "",
                title: "",
                itinerary: ""
            }
        ]);
    };

    const handleRemoveDay = (index) => {
        if (dayCount === 1) return;
        setDayCount(dayCount - 1);
        const updatedDayPlans = [...dayPlans];
        updatedDayPlans.splice(index, 1);
        setDayPlans(updatedDayPlans);
    };

    const handlePlanChange = (index, field, value) => {
        const updatedDayPlans = [...dayPlans];
        updatedDayPlans[index][field] = value;
        setDayPlans(updatedDayPlans);
    };

    return (
        <div className="container mx-auto">
            <nav className="flex justify-between items-center py-4 border-b">
                <div>
                    <Link to={`/addnewedit`} className="text-gray-600 hover:text-indigo-800">Genel Bilgi</Link>
                    <Link to={`/tur-programi`} className="ml-4 text-indigo-600 hover:text-indigo-800">Tur Programı</Link>
                    <Link to={`/addnewgallery`} className="ml-4 text-gray-600 hover:text-indigo-800">Galeri</Link>
                    <Link to={`/addnewadditions`} className="ml-4 text-gray-600 hover:text-indigo-800">Eklentiler</Link>
                </div>
            </nav>

            <h2 className="text-2xl font-semibold mt-4 mb-8">Tur Programı Ekle</h2>

            {[...Array(dayCount)].map((_, index) => (
                <div key={index} className="mb-8">
                    <h3 className="text-lg font-semibold mb-4">{`${index + 1}. GÜN PLANI`}</h3>
                    <div className="flex mb-4">
                        <div className="w-1/2 pr-4">
                            <label htmlFor={`city${index}`} className="block text-sm font-medium text-gray-700 mb-1">ŞEHİR / BÖLGE / BAŞLIK</label>
                            <input
                                type="text"
                                id={`city${index}`}
                                className="w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                value={dayPlans[index].city}
                                onChange={(e) => handlePlanChange(index, 'city', e.target.value)}
                            />
                            <label htmlFor={`accommodation${index}`} className="block text-sm font-medium text-gray-700 mt-4 mb-1">KONAKLAMA</label>
                            <input
                                type="text"
                                id={`accommodation${index}`}
                                className="w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                value={dayPlans[index].accommodation}
                                onChange={(e) => handlePlanChange(index, 'accommodation', e.target.value)}
                            />
                        </div>
                        <div className="w-1/2 pl-4">
                            <label htmlFor={`title${index}`} className="block text-sm font-medium text-gray-700 mb-1">GÜN SAYISI</label>
                            <input
                                type="text"
                                id={`title${index}`}
                                className="w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                value={dayPlans[index].title}
                                onChange={(e) => handlePlanChange(index, 'title', e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor={`itinerary${index}`} className="block text-sm font-medium text-gray-700 mb-1">{`${index + 1}. GÜN PROGRAMI`}</label>
                        <ReactQuill
                            id={`itinerary${index}`}
                            value={dayPlans[index].itinerary}
                            onChange={(value) => handlePlanChange(index, 'itinerary', value)}
                            theme="snow"
                            className="bg-white"
                        />
                    </div>
                    <button className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-300" onClick={() => handleRemoveDay(index)}>Günü Sil</button>
                </div>
            ))}

            <button className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300" onClick={handleAddDay}>Yeni Gün Ekle</button>

            <div className="flex justify-between mt-8">
                <Link to={`/dashboard`} className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400 transition duration-300">
                    İptal
                </Link>
                <button className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300">
                    Kaydet
                </button>
            </div>
        </div>
    );
};

export default AddNewTourProgram;
