import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Sidebar from '../SideBar';
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from '../../../../firebase/firebase';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Quill editor'ün stilini ekleyin
import Switch from "react-switch";


const QuillTextArea = ({ label, name, value, onChange }) => {
    const handleQuillChange = (content) => {
        onChange({ target: { name, value: content } });
    };

    return (
        <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600">{label}</label>
            <ReactQuill theme="snow" value={value} onChange={handleQuillChange} />
        </div>
    );
};

const TourManagement = () => {
    const token = useSelector(state => state.auth.token);
    const [tourData, setTourData] = useState({
        name: '',
        type: '',
        region: '',
        description: '',
        price: '',
        transportType: '',
        curreny: 'TRY',
        tourImages: [],
        days: [{ description: '', imageFile: null }]
    });

    /* YEMEK */
    const [mealsIncluded, setMealsIncluded] = useState({
        breakfast: false,
        lunch: false,
        tea: false,
        dinner: false
    });

    const MealSwitch = ({ label, checked, onChange }) => (
        <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-gray-600">{label}</span>
            <Switch
                checked={checked}
                onChange={onChange}
                onColor="#00D100"
                onHandleColor="#2693e6"
                handleDiameter={30}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={48}
            />
        </div>
    );
    /* YEMEK */

    /* DAY MANİPULATION */
    const handleInputChange = (e, index) => {
        const { name, value, files } = e.target;
        if (name === 'tourImages') {
            setTourData(prev => ({ ...prev, tourImages: Array.from(files) }));
        } else if (name.includes('description')) {
            const newDays = tourData.days.map((day, idx) => idx === index ? { ...day, description: value } : day);
            setTourData(prev => ({ ...prev, days: newDays }));
        } else if (name.includes('imageFile')) {
            const newDays = tourData.days.map((day, idx) => idx === index ? { ...day, imageFile: files[0] } : day);
            setTourData(prev => ({ ...prev, days: newDays }));
        } else {
            setTourData(prev => ({ ...prev, [name]: value }));
        }
    };

    const addDay = () => {
        setTourData(prev => ({
            ...prev,
            days: [...prev.days, { description: '', imageFile: null }]
        }));
    };

    const removeDay = (index) => {
        setTourData(prev => ({
            ...prev,
            days: prev.days.filter((_, idx) => idx !== index)
        }));
    };

    /* DAY MANİPULATION */


    const uploadToFirebase = async (file, path) => {
        const fileRef = storageRef(storage, path);
        await uploadBytes(fileRef, file);
        return getDownloadURL(fileRef);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const tourImagesUrl = await Promise.all(
                tourData.tourImages.map(file => uploadToFirebase(file, `tourImages/${file.name}`))
            );

            const daysWithImages = await Promise.all(
                tourData.days.map(async (day, index) => ({
                    description: day.description,
                    imageUrl: day.imageFile ? await uploadToFirebase(day.imageFile, `dayImages/${day.imageFile.name}`) : ''
                }))
            );

            const tourDetails = {
                name: tourData.name,
                type: tourData.type,
                region: tourData.region,
                description: tourData.description,
                price: parseInt(tourData.price),
                transportType: tourData.transportType,
                tourImagesUrl: tourImagesUrl,
                days: daysWithImages
            };

            const response = await fetch('http://localhost:3000/api/tours/add', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(tourDetails)
            });

            const result = await response.json();
            if (!response.ok) throw new Error(result.message);

            alert('Tur başarıyla eklendi!');
        } catch (error) {
            alert(`Tur eklenemedi: ${error.message}`);
            console.error("Detaylı hata:", error);
        }
    };

    return (
        <div className="min-h-screen flex bg-gray-100">
            <Sidebar />
            <div className="flex-grow p-8">
                <form onSubmit={handleSubmit} className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8 space-y-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">Yeni Tur Oluştur</h1>
                    {['Tur Adı', 'Tur Türü', 'Bölge'].map(field => (
                        <InputField key={field} label={field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
                            name={field} value={tourData[field]} onChange={handleInputChange}
                        />
                    ))}
                      <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-600 mb-1">Fiyat:</label>
                        <div className="flex">
                            <input
                                type="number"
                                name="price"
                                value={tourData.price}
                                onChange={handleInputChange}
                                className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                            <select
                                name="currency"
                                value={tourData.currency}
                                onChange={handleInputChange}
                                className="p-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                                <option value="TRY">TRY</option>
                                <option value="USD">USD</option>
                                <option value="EUR">Euro</option>
                                <option value="GBP">GBP</option>
                            </select>
                        </div>
                    </div>
                    <QuillTextArea
                        label="Açıklama"
                        name="description"
                        value={tourData.description}
                        onChange={handleInputChange}
                    />
                    <SelectField
                        label="Taşıma Türü"
                        name="transportType"
                        value={tourData.transportType}
                        onChange={handleInputChange}
                        options={["Otobüs", "Uçak", "Tren"]}
                    />
                    <FileInput label="Tur Resimleri" name="tourImages" onChange={handleInputChange} multiple={true} />
                    {tourData.days.map((day, index) => (
                        <DayInput
                            key={index}
                            index={index}
                            day={day}
                            onDescriptionChange={e => handleInputChange(e, index)}
                            onImageChange={e => handleInputChange(e, index)}
                            onRemove={removeDay}
                        />
                    ))}
                    <button type="button" onClick={addDay}
                        className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">Başka Bir Gün Ekle</button>
                    <button type="submit"
                        className="mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 w-full rounded-full">Tur Gönder</button>
                    <div className="mt-4">
                        <h2 className="text-xl font-bold text-gray-800 mb-3">Dahil Olan Öğünler</h2>
                        <MealSwitch label="Kahvaltı" checked={mealsIncluded.breakfast} onChange={(checked) => setMealsIncluded(prev => ({ ...prev, breakfast: checked }))} />
                        <MealSwitch label="Öğlen" checked={mealsIncluded.lunch} onChange={(checked) => setMealsIncluded(prev => ({ ...prev, lunch: checked }))} />
                        <MealSwitch label="İkindi" checked={mealsIncluded.tea} onChange={(checked) => setMealsIncluded(prev => ({ ...prev, tea: checked }))} />
                        <MealSwitch label="Akşam" checked={mealsIncluded.dinner} onChange={(checked) => setMealsIncluded(prev => ({ ...prev, dinner: checked }))} />
                    </div>

                </form>
            </div>
        </div>

    );
};

const SelectField = ({ label, name, value, onChange, options }) => (
    <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-600">{label}</label>
        <select name={name} value={value} onChange={onChange}
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
            {options.map(option => (
                <option key={option} value={option}>{option}</option>
            ))}
        </select>
    </div>
);

const InputField = ({ label, name, value, onChange }) => (
    <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-600">{label}</label>
        <input type={name === 'price' ? 'number' : 'text'}
            name={name} value={value} onChange={onChange}
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
    </div>
);

const FileInput = ({ label, name, onChange, multiple }) => (
    <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-600">{label}</label>
        <input type="file" name={name} multiple={multiple} onChange={onChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
    </div>
);

const DayInput = ({ index, day, onDescriptionChange, onImageChange, onRemove }) => (
    <div className="border p-4 rounded-md mb-4 relative">
        <button
            type="button"
            onClick={() => onRemove(index)}
            className="absolute right-3 top-3 text-red-500 hover:text-red-700">
            &#x2715; {/* This is the Unicode multiplication sign */}
        </button>
        <h3 className="text-lg font-semibold">Gün {index + 1}</h3>
        <QuillTextArea
            label="Açıklama"
            name={`day-description-${index}`}
            value={day.description}
            onChange={onDescriptionChange}
        />
        <input type="file" name={`day-imageFile-${index}`} onChange={onImageChange}
            className="file-input" />
        {day.imageFile && (
            <img src={URL.createObjectURL(day.imageFile)} alt={`Gün ${index + 1} Resmi`} className="mt-2 w-full rounded-md" />
        )}
    </div>
);

export default TourManagement;
