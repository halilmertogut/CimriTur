import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Sidebar from '../SideBar';
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from '../../../../firebase';

const uploadToFirebase = async (file, path) => {
    const fileRef = storageRef(storage, path);
    await uploadBytes(fileRef, file);
    return getDownloadURL(fileRef);
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
        tourImages: [],
        days: [{ description: '', imageFile: null }]
    });

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const tourImagesUrl = await Promise.all(
                tourData.tourImages.map(file => uploadToFirebase(file, `tourImages/${file.name}`))
            );
    
            console.log('Type of tourImagesUrls:', typeof tourImagesUrl, Array.isArray(tourImagesUrl));

            console.log('Tour Images URLs:', typeof(tourImagesUrl));  // Verify URLs
    
            if (!Array.isArray(tourImagesUrl)) {
                console.error('tourImagesUrls is not an array:', tourImagesUrl);
                return;  // Stop further execution if there's an issue
            }
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
                price: parseInt(tourData.price),  // Ensure this is an integer
                transportType: tourData.transportType,
                tourImagesUrl: tourImagesUrl,  // Ensure this is the array of URLs
                days: daysWithImages
            };
    
            console.log("Final tour details to be sent:", JSON.stringify(tourDetails));  // Final check before sending
    
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
    
            alert('Tour successfully added!');
        } catch (error) {
            alert(`Failed to add tour: ${error.message}`);
            console.error("Detailed error:", error);
        }
    };
    
    

    return (
        <div className="min-h-screen flex bg-gray-100">
            <Sidebar />
            <div className="flex-grow p-8">
                <form onSubmit={handleSubmit} className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8 space-y-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">Create New Tour</h1>
                    {['name', 'type', 'region', 'description', 'price', 'transportType'].map(field => (
                        <InputField key={field} label={field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
                            name={field} value={tourData[field]} onChange={handleInputChange}
                        />
                    ))}
                    <FileInput label="Tour Images" name="tourImages" onChange={handleInputChange} multiple={true} />
                    {tourData.days.map((day, index) => (
                        <DayInput key={index} index={index} day={day}
                            onDescriptionChange={e => handleInputChange(e, index)}
                            onImageChange={e => handleInputChange(e, index)}
                        />
                    ))}
                    <button type="button" onClick={addDay}
                        className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">Add Another Day</button>
                    <button type="submit"
                        className="mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 w-full rounded-full">Submit Tour</button>
                </form>
            </div>
        </div>
    );
};

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

const DayInput = ({ index, day, onDescriptionChange, onImageChange }) => (
    <div className="border p-4 rounded-md mb-4">
        <h3 className="text-lg font-semibold">Day {index + 1}</h3>
        <TextArea label="Description" name={`day-description-${index}`} value={day.description} onChange={onDescriptionChange} />
        <input type="file" name={`day-imageFile-${index}`} onChange={onImageChange}
            className="file-input" />
        {day.imageFile && (
            <img src={URL.createObjectURL(day.imageFile)} alt={`Day ${index + 1} Image`} className="mt-2 w-full rounded-md" />
        )}
    </div>
);

const TextArea = ({ label, name, value, onChange }) => (
    <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-600">{label}</label>
        <textarea name={name} value={value} onChange={onChange}
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
    </div>
);

export default TourManagement;
