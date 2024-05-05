import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Sidebar from '../SideBar';
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from '../../../../firebase/firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    console.log(token);
    const [tourData, setTourData] = useState({
        name: '',
        type: '',
        region: '',
        startLocation: '',
        destination: '',
        description: '',
        price: '',
        transportType: '',
        currency: 'TRY',
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
    const handleInputChange = (e, dayIndex = null) => {
        const { name, value, files } = e.target;
        
        // General handling for fields not related to days
        if (dayIndex === null) {
            setTourData(prev => ({ ...prev, [name]: files ? Array.from(files) : value }));
            return;
        }

        // Handling for day-specific fields like descriptions and image uploads
        const newDays = tourData.days.map((day, idx) => {
            if (idx === dayIndex) {
                return {
                    ...day,
                    [name]: files ? files[0] : value
                };
            }
            return day;
        });
        setTourData(prev => ({ ...prev, days: newDays }));
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

            // Check required fields
    if (!tourData.name || !tourData.type || !tourData.region || !tourData.startLocation ||
        !tourData.destination || !tourData.description || !tourData.price ||
        !tourData.transportType || tourData.tourImages.length === 0 || 
        tourData.days.some(day => !day.description || !day.imageFile)) {
        toast.error('Lütfen tüm zorunlu alanları doldurun ve resimleri ekleyin.', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        return;
    }

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
                startLocation: tourData.startLocation,
                destination: tourData.destination,
                description: tourData.description,
                price: parseInt(tourData.price),
                transportType: tourData.transportType,
                currency: tourData.currency,
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

            toast.success('Tur başarıyla eklendi!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

                        // Refresh the page after a short delay to show the toast message
                        setTimeout(() => {
                            window.location.reload();
                        }, 5000);

        } catch (error) {
            toast.error(`Tur eklenemedi: ${error.message}`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            console.error("Detaylı hata:", error);
        }
    };



    return (
        <div className="min-h-screen flex bg-gray-100">
            <Sidebar />
            <div className="flex-grow p-8">
                <form onSubmit={handleSubmit} className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8 space-y-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">Yeni Tur Oluştur</h1>
                    <InputField label="* Tur Adı" name="name" value={tourData.name} onChange={handleInputChange} />
                    <SelectField label="* Tur Türü, Tema" name="type" value={tourData.type} onChange={handleInputChange} options={["Kültürel", "Macera","Dağ Evi","Tarihi","Günübirlik",]} />
                    <SelectField label="* Bölge" name="region" value={tourData.region} onChange={handleInputChange} options={["Ege", "Akdeniz", "Karadeniz","İç Anadolu","Güneydoğu Anadolu","Doğu Anadolu","Marmara"]} />
                    <InputField label="* Başlangıç Yeri" name="startLocation" value={tourData.startLocation} onChange={handleInputChange} />
                    <InputField label="* Varış Yeri" name="destination" value={tourData.destination} onChange={handleInputChange} />
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-600 mb-1">* Fiyat:</label>
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
                        label="* Açıklama"
                        name="description"
                        value={tourData.description}
                        onChange={handleInputChange}
                    />
                    <SelectField
                        label="* Taşıma Türü"
                        name="transportType"
                        value={tourData.transportType}
                        onChange={handleInputChange}
                        options={["Otobüs", "Uçak", "Tren"]}
                    />
                    <FileInput label="* Tur Resimleri" name="tourImages" onChange={handleInputChange} multiple={true} />
                    {tourData.days.map((day, index) => (
            <DayInput
                key={index}
                index={index}
                day={day}
                onDescriptionChange={(e) => handleInputChange(e, index)}
                onImageChange={(e) => handleInputChange(e, index, 'imageFile')}
                onRemove={() => removeDay(index)}
            />
        ))}
                    <button type="button" onClick={addDay}
                        className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">Başka Bir Gün Ekle</button>
                    <button type="submit"
                        className="mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 w-full rounded-full">Tur Ekle</button>
                    <div className="mt-4">
                        <h2 className="text-xl font-bold text-gray-800 mb-3">Dahil Olan Öğünler</h2>
                        <MealSwitch label="Kahvaltı" checked={mealsIncluded.breakfast} onChange={(checked) => setMealsIncluded(prev => ({ ...prev, breakfast: checked }))} />
                        <MealSwitch label="Öğlen" checked={mealsIncluded.lunch} onChange={(checked) => setMealsIncluded(prev => ({ ...prev, lunch: checked }))} />
                        <MealSwitch label="İkindi" checked={mealsIncluded.tea} onChange={(checked) => setMealsIncluded(prev => ({ ...prev, tea: checked }))} />
                        <MealSwitch label="Akşam" checked={mealsIncluded.dinner} onChange={(checked) => setMealsIncluded(prev => ({ ...prev, dinner: checked }))} />
                    </div>
                </form>
            </div>
            <ToastContainer />
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

const DayInput = ({ index, day, onDescriptionChange, onImageChange, onRemove }) => {
    return (
        <div className="border p-4 rounded-md mb-4 relative">
            <button type="button" onClick={onRemove}
                className="absolute right-3 top-3 text-red-500 hover:text-red-700">
                &#x2715; {/* Unicode multiplication sign */}
            </button>
            <h3 className="text-lg font-semibold">Gün {index + 1}</h3>
            <QuillTextArea
                label="Açıklama"
                name="description"
                value={day.description}
                onChange={onDescriptionChange}
            />
            <input type="file" name="imageFile" onChange={onImageChange}
                className="file-input" />
            {day.imageFile && (
                <img src={URL.createObjectURL(day.imageFile)} alt={`Gün ${index + 1} Resmi`} className="mt-2 w-full rounded-md" />
            )}
        </div>
    );
};

export default TourManagement;