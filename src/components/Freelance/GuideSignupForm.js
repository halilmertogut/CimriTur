import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css'; // Eğer bir CSS özelleştirmesi yapmadıysanız, bu import gereksiz olabilir.
import { useDropzone } from 'react-dropzone';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-time-picker/dist/TimePicker.css';


const GuideSignupForm = () => {
    const [dates, setDates] = useState({});

    const generateTimeSlots = () => {
        const slots = [];
        const startTime = 9; // Günün başlangıç saati
        const endTime = 17; // Günün bitiş saati

        for (let hour = startTime; hour < endTime; hour++) {
            slots.push(`${hour}:00`);
            slots.push(`${hour}:30`);
        }

        return slots;
    };


    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        dateOfBirth: '',
        address: '',
        languages: [],
        experience: [],
        certifications: [],
        profilePhoto: null,
        biography: '',
        tourRegions: [],
        references: '',
        nationalId: '',
        bloodType: '',
        registryNo: '',
        licenseNo: '',
        licenseValidity: '',
        availableTimes: [],
        availableDates: [],
        selectedDate: null
    });
    

    const { getRootProps, getInputProps, open } = useDropzone({
        accept: 'image/*',
        onDrop: (acceptedFiles) => {
            setFormData(prevState => ({
                ...prevState,
                profilePhoto: Object.assign(acceptedFiles[0], {
                    preview: URL.createObjectURL(acceptedFiles[0])
                })
            }));
        }
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleExperienceChange = (experience) => {
        setFormData(prevState => ({
            ...prevState,
            experience
        }));
    };

    const handleLanguagesChange = (languages) => {
        setFormData(prevState => ({
            ...prevState,
            languages
        }));
    };

    const handleTourRegionsChange = (tourRegions) => {
        setFormData(prevState => ({
            ...prevState,
            tourRegions
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        // Backend iletişim kodunuz buraya gelecek...
    };


    const handleDateChange = (date) => {
        const formattedDate = date.toISOString().split('T')[0];
        setDates(prevDates => ({
            ...prevDates,
            [formattedDate]: prevDates[formattedDate] || []
        }));
    };

    const handleSlotClick = (date, slot) => {
        const formattedDate = date.toISOString().split('T')[0];
        setDates(prevDates => {
            const currentSlots = prevDates[formattedDate];
            if (currentSlots.includes(slot)) {
                return {
                    ...prevDates,
                    [formattedDate]: currentSlots.filter(s => s !== slot)
                };
            } else if (currentSlots.length < 5) {
                return {
                    ...prevDates,
                    [formattedDate]: [...currentSlots, slot]
                };
            }
            return prevDates;
        });
    };

    const removeSlot = (date, slot) => {
        const formattedDate = date.toISOString().split('T')[0];
        setDates(prevDates => ({
            ...prevDates,
            [formattedDate]: prevDates[formattedDate].filter(s => s !== slot)
        }));
    };

    const removeDate = (date) => {
        const formattedDate = date.toISOString().split('T')[0];
        setDates(prevDates => {
            const {[formattedDate]: _, ...remainingDates} = prevDates;
            return remainingDates;
        });
    };

    return (
        <div className="max-w-7xl mx-auto p-8 bg-white shadow-lg rounded flex flex-col">
            <div className="flex flex-row">
                <div className="w-1/2 p-4 space-y-4">
                <h2 className="text-lg font-semibold text-gray-900">Kişisel Bilgiler</h2>
                    <div className="flex items-center space-x-4">
                        {formData.profilePhoto ? (
                            <img src={formData.profilePhoto.preview} alt="Profile" className="w-20 h-20 rounded-full border border-gray-300"/>
                        ) : (
                            <div className="w-20 h-20 rounded-full border border-gray-300 flex items-center justify-center">No Image</div>
                        )}
                        <button type="button" onClick={open} className="text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            {formData.profilePhoto ? 'PP Değiştir' : 'PP Ekle'}
                        </button>
                    </div>
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                    </div>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Ad Soyad"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="E-posta"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <PhoneInput
                        international
                        defaultCountry="TR"
                        placeholder="Telefon Numarası"
                        value={formData.phoneNumber}
                        onChange={phoneNumber => setFormData(prevState => ({ ...prevState, phoneNumber }))}
                        className="block w-full focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <input
                        type="date"
                        name="dateOfBirth"
                        placeholder="Doğum Tarihi"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        required
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <TagsInput
                        value={formData.languages}
                        onChange={handleLanguagesChange}
                        inputProps={{placeholder: "Dil Ekle"}}
                        className="react-tagsinput w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <TagsInput
                        value={formData.experience}
                        onChange={handleExperienceChange}
                        inputProps={{placeholder: "Deneyim Ekle"}}
                        className="react-tagsinput w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <TagsInput
                        value={formData.tourRegions}
                        onChange={handleTourRegionsChange}
                        inputProps={{placeholder: "Tur Bölgesi Ekle"}}
                        className="react-tagsinput w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <textarea
                        name="references"
                        placeholder="Referanslar: Önceki müşterilerden veya işverenlerden alınmış referanslar."
                        value={formData.references}
                        onChange={handleChange}
                        required
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div className="w-1/2 p-4 space-y-4">
                    <h2 className="text-lg font-semibold text-gray-900">Türkiye Turist Rehberler Birliği Kartı</h2>
                    <input
                        type="text"
                        name="nationalId"
                        placeholder="TC Kimlik No"
                        value={formData.nationalId}
                        onChange={handleChange}
                        required
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <select
                        name="bloodType"
                        value={formData.bloodType}
                        onChange={handleChange}
                        required
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                        <option value="">Kan Grubu Seçiniz</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="0+">0+</option>
                        <option value="0-">0-</option>
                    </select>
                    <input
                        type="text"
                        name="registryNo"
                        placeholder="Sicil No"
                        value={formData.registryNo}
                        onChange={handleChange}
                        required
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <input
                        type="text"
                        name="licenseNo"
                        placeholder="Ruhsat No"
                        value={formData.licenseNo}
                        onChange={handleChange}
                        required
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <input
                        type="date"
                        name="licenseValidity"
                        placeholder="Ruhsat Geçerlilik Süresi"
                        value={formData.licenseValidity}
                        onChange={handleChange}
                        required
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
        <div className="max-w-7xl mx-auto p-8 bg-white shadow-lg rounded flex flex-col items-center justify-center">
            <div className="w-full md:w-3/4 lg:w-2/3 p-4 space-y-3 bg-gray-100 rounded-lg">
                <h2 className="text-lg font-semibold text-gray-900">Türkiye Turist Rehberler Birliği Kartı Önizlemesi</h2>
                {formData.profilePhoto && (
                    <img src={formData.profilePhoto.preview} alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-4"/>
                )}
                <div className="text-gray-900 font-bold text-center">Ad Soyad: {formData.fullName}</div>
                <div className="text-gray-600 text-center">TC Kimlik No: {formData.nationalId}</div>
                <div className="text-gray-600 text-center">Kan Grubu: {formData.bloodType}</div>
                <div className="text-gray-600 text-center">Sicil No: {formData.registryNo}</div>
                <div className="text-gray-600 text-center">Ruhsat No: {formData.licenseNo}</div>
                <div className="text-gray-600 text-center">Ruhsat Geçerlilik Süresi: {formData.licenseValidity}</div>
            </div>
        </div>
                </div>
            </div>
            <div {...getRootProps({ className: 'dropzone p-4 border-dashed border-2 border-gray-300 rounded-md cursor-pointer mt-4' })}>
                <input {...getInputProps()} />
                <p>Sertifikalarınızı Buraya Sürükleyin veya Seçmek için Tıklayın</p>
            </div>
            <ul className="list-disc pl-5 mt-4">
                {formData.certifications.map((file, index) => (
                    <li key={index}>
                        {file.name} - {file.size} bytes
                    </li>
                ))}
            </ul>
            <div className="p-4 bg-white shadow rounded">
            <DatePicker
                selected={null}
                onChange={handleDateChange}
                inline
            />
            {Object.entries(dates).map(([date, slots]) => (
                <div key={date} className="mt-4">
                    <div className="flex justify-between items-center">
                        <h3 className="font-semibold">{new Date(date).toDateString()}</h3>
                        <button onClick={() => removeDate(new Date(date))} className="ml-2 text-red-500 hover:text-red-700">
                            &times;
                        </button>
                    </div>
                    <div className="flex flex-wrap">
                        {generateTimeSlots().map((slot, index) => (
                            <div key={index} className="m-1 flex items-center">
                                <button onClick={() => handleSlotClick(new Date(date), slot)}
                                        className={`p-2 rounded-full text-sm flex items-center ${slots.includes(slot) ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                                    {slot}
                                    {slots.includes(slot) && (
                                        <span onClick={() => removeSlot(new Date(date), slot)} className="ml-2 text-red-500 hover:text-red-700 cursor-pointer">
                                            &times;
                                        </span>
                                    )}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
            <button type="submit" className="mt-6 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Kayıt Ol
            </button>
        </div>
    );
};

export default GuideSignupForm;

