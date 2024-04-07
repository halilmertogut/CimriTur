import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PhotographIcon, XIcon } from '@heroicons/react/outline';

const AddNewGallery = () => {
    const [images, setImages] = useState([]);

    const handleImageChange = (e) => {
        const selectedImages = Array.from(e.target.files);
        setImages([...images, ...selectedImages]);
    };

    const handleImageRemove = (index) => {
        const updatedImages = [...images];
        updatedImages.splice(index, 1);
        setImages(updatedImages);
    };

    const handleSave = () => {
        // Burada galeriyi kaydetme işlemi gerçekleştirilebilir
        console.log("Galeri kaydedildi:", images);
    };

    return (
        <div className="container mx-auto">
            <nav className="flex justify-between items-center py-4 border-b">
                <div>
                    <Link to={`/addnewedit`} className="text-gray-600 hover:text-indigo-800">Genel Bilgi</Link>
                    <Link to={`/addnewtourprogram`} className="ml-4 text-gray-600 hover:text-indigo-800">Tur Programı</Link>
                    <Link to={`/addnewgallery`} className="ml-4 text-indigo-600 hover:text-indigo-800">Galeri</Link>
                    <Link to={`/addnewadditions`} className="ml-4 text-gray-600 hover:text-indigo-800">Eklentiler</Link>
                </div>
            </nav>

            <h2 className="text-2xl font-semibold mt-4 mb-8">Yeni Galeri Ekle</h2>

            <div className="flex">
                <div className="w-1/2 pr-4">
                    <label htmlFor="imageInput" className="block text-sm font-medium text-gray-700 mb-1">Fotoğraf Seç</label>
                    <label className="flex items-center justify-center h-12 bg-white text-indigo-600 hover:text-indigo-800 border border-indigo-600 hover:border-indigo-800 rounded-md cursor-pointer">
                        <PhotographIcon className="h-6 w-6 mr-2" />
                        <input
                            id="imageInput"
                            type="file"
                            accept="image/*"
                            multiple
                            className="hidden"
                            onChange={handleImageChange}
                        />
                        <span>Görsel Seç</span>
                    </label>
                </div>
                <div className="w-1/2 pl-4">
                    {images.length > 0 && (
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Seçilen Fotoğraflar</h3>
                            <div className="flex flex-wrap">
                                {images.map((image, index) => (
                                    <div key={index} className="relative m-2">
                                        <button
                                            onClick={() => handleImageRemove(index)}
                                            className="absolute top-0 right-0 text-red-500 hover:text-red-700 focus:outline-none"
                                        >
                                            <XIcon className="h-5 w-5" />
                                        </button>
                                        <img
                                            src={URL.createObjectURL(image)}
                                            alt={`Image ${index + 1}`}
                                            className="w-24 h-24 object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="flex justify-end mt-8">
                <button
                    className="bg-indigo-600 text-white py-2 px-6 flex rounded-md hover:bg-indigo-700 transition duration-300"
                    onClick={handleSave}
                >
 
                    Kaydet
                </button>
            </div>
        </div>
    );
};

export default AddNewGallery;
