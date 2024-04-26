import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Sidebar from '../SideBar';

const TourManagement = () => {
    const token = useSelector(state => state.auth.token);
    const [tourData, setTourData] = useState({
        name: '',
        type: '',
        region: '',
        description: '',
        price: '',
        days: [{ description: '', imageFile: null }]
    });

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        if (name.startsWith('day')) {
            const days = [...tourData.days];
            const fieldName = name.split('-')[1];  // Extracts 'description' or 'imageFile'
            if (fieldName === 'imageFile') {
                days[index][fieldName] = e.target.files[0];
            } else {
                days[index][fieldName] = value;
            }
            setTourData({ ...tourData, days });
        } else {
            setTourData(prev => ({ ...prev, [name]: value }));
        }
    };

    const addDay = () => {
        setTourData(prev => ({ ...prev, days: [...prev.days, { description: '', imageFile: null }] }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', tourData.name);
        formData.append('type', tourData.type);
        formData.append('region', tourData.region);
        formData.append('description', tourData.description);
        formData.append('price', tourData.price);

        tourData.days.forEach((day, index) => {
            formData.append(`days[${index}][description]`, day.description);
            if (day.imageFile) {
                formData.append(`dayImages`, day.imageFile); // Ensure this matches the name expected by Multer
            }
        });

        try {
            const response = await fetch('http://localhost:3000/api/tours/add', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: formData
            });
            const result = await response.json();
            if (!response.ok) throw new Error(result.message);
            alert('Tour successfully added!');
        } catch (error) {
            alert(`Failed to add tour: ${error.message}`);
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-grow p-8">
                <form onSubmit={handleSubmit} enctype="multipart/form-data" className="max-w-4xl mx-auto bg-white shadow rounded-lg p-6 space-y-4">
                    <h1 className="text-2xl font-semibold text-gray-700">Add New Tour</h1>
                    <InputField label="Tour Name" name="name" value={tourData.name} onChange={(e) => handleInputChange(e, null)} />
                    <InputField label="Tour Type" name="type" value={tourData.type} onChange={(e) => handleInputChange(e, null)} />
                    <InputField label="Region" name="region" value={tourData.region} onChange={(e) => handleInputChange(e, null)} />
                    <TextArea label="Description" name="description" value={tourData.description} onChange={(e) => handleInputChange(e, null)} />
                    <InputField label="Price" name="price" value={tourData.price} onChange={(e) => handleInputChange(e, null)} />

                    {tourData.days.map((day, index) => (
                        <DayInput
                            key={index}
                            index={index}
                            day={day}
                            onDescriptionChange={(e) => handleInputChange(e, index)}
                            onImageChange={(e) => handleInputChange(e, index)}
                        />
                    ))}
                    <button type="button" onClick={addDay} className="btn btn-secondary">Add Another Day</button>
                    <button type="submit" className="btn btn-primary mt-4 w-full">Submit Tour</button>
                </form>
            </div>
        </div>
    );
};

const InputField = ({ label, name, type = 'text', value, onChange }) => (
    <div>
        <label className="block text-sm font-semibold text-gray-600">{label}</label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            className="mt-1 w-full p-2 border border-gray-300 rounded-md"
        />
    </div>
);

const TextArea = ({ label, name, value, onChange }) => (
    <div>
        <label className="block text-sm font-semibold text-gray-600">{label}</label>
        <textarea
            name={name}
            value={value}
            onChange={onChange}
            className="mt-1 w-full p-2 border border-gray-300 rounded-md"
        />
    </div>
);

const DayInput = ({ index, day, onDescriptionChange, onImageChange }) => (
    <div className="border p-4 rounded-md">
        <h3 className="text-lg font-semibold">Day {index + 1}</h3>
        <TextArea label="Description" name={`day-description-${index}`} value={day.description} onChange={onDescriptionChange} />
        <input type="file" name={`day-imageFile-${index}`} onChange={onImageChange} className="mt-2" />
        {day.imageFile && <img src={URL.createObjectURL(day.imageFile)} alt={`Day ${index + 1} Image`} className="mt-2 w-full rounded-md" />}
    </div>
);

export default TourManagement;
