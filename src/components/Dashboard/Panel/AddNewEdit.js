import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { XIcon } from '@heroicons/react/solid';

const AddNewEdit = () => {
    const { id } = useParams();
    const [tourName, setTourName] = useState("");
    const [tourDescription, setTourDescription] = useState("");
    const [tourFeatures, setTourFeatures] = useState([""]);

    const handleFeatureChange = (index, value) => {
        const updatedFeatures = [...tourFeatures];
        updatedFeatures[index] = value;
        setTourFeatures(updatedFeatures);
    };

    const handleRemoveFeature = (index) => {
        const updatedFeatures = [...tourFeatures];
        updatedFeatures.splice(index, 1);
        setTourFeatures(updatedFeatures);
    };

    return (
        <div className="container mx-auto">
            <nav className="flex justify-between items-center py-4 border-b">
                <div>
                    <Link to={`/addnewedit`} className="text-indigo-600 hover:text-indigo-800">Genel Bilgi</Link>
                    <Link to={`/addnewtourprogram`} className="ml-4 text-gray-600 hover:text-indigo-800">Tur Programı</Link>
                    <Link to={`/addnewgallery`} className="ml-4 text-gray-600 hover:text-indigo-800">Galeri</Link>
                    <Link to={`/addnewadditions`} className="ml-4 text-gray-600 hover:text-indigo-800">Eklentiler</Link>
                </div>
            </nav>

            <h2 className="text-2xl font-semibold mt-4 mb-8">Tur Düzenleme</h2>
            <div className="mb-4">
                <label htmlFor="tourName" className="block text-sm font-medium text-gray-700 mb-1">Tur Adı</label>
                <input
                    type="text"
                    id="tourName"
                    className="w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-3 py-2 text-sm"
                    value={tourName}
                    onChange={(e) => setTourName(e.target.value)}
                    placeholder="Tur Adı Giriniz"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="tourDescription" className="block text-sm font-medium text-gray-700 mb-1">Tanıtım Metni</label>
                <ReactQuill
                    id="tourDescription"
                    value={tourDescription}
                    onChange={setTourDescription}
                    theme="snow"
                    className="bg-white"
                    style={{ minHeight: "200px" }} // Tanıtım metni alanının minimum yüksekliğini belirledik
                    modules={{
                        toolbar: [
                            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                            [{ size: [] }],
                            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                            [{ 'list': 'ordered' }, { 'list': 'bullet' },
                            { 'indent': '-1' }, { 'indent': '+1' }],
                            ['link', 'image', 'video'],
                            ['clean']
                        ],
                    }}
                />
            </div>
            <div className="flex justify-between mb-8  p-4">
                <div className="w-1/2 pr-4">
                    <h3 className="text-lg font-semibold mb-4">Tur Özellikleri</h3>
                    {tourFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center mb-3 p-2 rounded-md bg-white">
                            <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 placeholder-gray-400 text-sm"
                                placeholder={`Tur Özelliği ${index + 1}`}
                                value={feature}
                                onChange={(e) => handleFeatureChange(index, e.target.value)}
                            />
                            <button onClick={() => handleRemoveFeature(index)} className="ml-2 text-red-500 hover:text-red-700 focus:outline-none">
                                <XIcon className="h-5 w-5" />
                            </button>
                        </div>
                    ))}
                    <button
                        className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300 mt-4"
                        onClick={() => setTourFeatures([...tourFeatures, ""])}
                    >
                        Yeni Özellik Ekle
                    </button>
                </div>
                <div className="w-1/2 pl-4">
                    <h3 className="text-lg font-semibold mb-4">Öne Çıkan Özellikler</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {[1, 2, 3, 4, 5, 6].map((index) => (
                            <div key={index} className="mb-3">
                                <label htmlFor={`feature${index}`} className="block text-sm font-medium text-gray-700 mb-1">{`${index}. Özellik`}</label>
                                <input
                                    type="text"
                                    id={`feature${index}`}
                                    name="tour_highlights[]"
                                    className="w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 placeholder-gray-400 py-2 px-3"
                                    placeholder={index === 6 ? "Özellik" : ""}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <div className="flex justify-between">
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

export default AddNewEdit;
