import React, { useState, useEffect, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { XIcon, PlusIcon, PhotographIcon } from '@heroicons/react/solid';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import tr from 'date-fns/locale/tr'; // Turkish language support
import { useDropzone } from 'react-dropzone';
registerLocale('tr', tr);

const AddNewEdit = () => {
    const { id } = useParams();
    const [tourName, setTourName] = useState("");
    const [tourDescription, setTourDescription] = useState("");
    const [tourDates, setTourDates] = useState({ start: new Date(), end: new Date() });
    const [dayPlans, setDayPlans] = useState([]);
    const [highlightedFeatures, setHighlightedFeatures] = useState([{ id: 1, value: "" }]);
    const [galleryImages, setGalleryImages] = useState([]);
    const [includedItems, setIncludedItems] = useState([""]);
    const [excludedItems, setExcludedItems] = useState([""]);
    // State hooks for pricing and discount
    const [tourPrice, setTourPrice] = useState('');
    const [tourDiscount, setTourDiscount] = useState('');
    const [currency, setCurrency] = useState('TRY');
    const [finalPrice, setFinalPrice] = useState('');
    // Event handlers for the form elements
    useEffect(() => {
        if (tourPrice && tourDiscount) {
            const discountAmount = (parseFloat(tourPrice) * parseFloat(tourDiscount)) / 100;
            setFinalPrice((parseFloat(tourPrice) - discountAmount).toFixed(2));
        }
    }, [tourPrice, tourDiscount]);
    const handlePriceChange = (e) => setTourPrice(e.target.value);
    const handleDiscountChange = (e) => setTourDiscount(e.target.value);
    const handleCurrencyChange = (e) => setCurrency(e.target.value);

    const [coverImage, setCoverImage] = useState(null);
    const [meals, setMeals] = useState({
        Kahvaltı: false,
        'Öğle Yemeği': false,
        İkindi: false,
        'Akşam Yemeği': false
    });

    const [activities, setActivities] = useState([]);

    useEffect(() => {
        const dayCount = Math.floor((tourDates.end - tourDates.start) / (1000 * 3600 * 24)) + 1;
        setDayPlans(Array.from({ length: dayCount }, (_, index) => ({
            city: '',
            region: '',
            accommodation: '',
            title: '',
            itinerary: ''
        })));
    }, [tourDates]);

    const handleHighlightChange = (index, value) => {
        setHighlightedFeatures(features =>
            features.map((feature, featureIndex) =>
                index === featureIndex ? { ...feature, value } : feature
            )
        );
    };

    const addHighlight = () => {
        setHighlightedFeatures([...highlightedFeatures, { id: Math.random(), value: "" }]);
    };

    // Özellik silme
    const removeHighlight = id => {
        setHighlightedFeatures(features =>
            features.filter(feature => feature.id !== id)
        );
    };

    const updateDayPlan = (index, field, value) => {
        const newDayPlans = [...dayPlans];
        newDayPlans[index][field] = value;
        setDayPlans(newDayPlans);
    };

    //Gallery Part
    const onDrop = useCallback(acceptedFiles => {
        // Yeni dosyaları mevcut dosyalara eklicek
        const newImages = acceptedFiles.map(file => ({
            id: file.name, // Dosya adını benzersiz bir ID olarak kullan
            preview: URL.createObjectURL(file), // Dosya için önizleme URL'si oluşturur
            file: file, // Dosya nesnesini de ekler
        }));

        setGalleryImages(prevImages => [...prevImages, ...newImages]);
    }, []);
    useEffect(() => {
        return () => {
            galleryImages.forEach(file => URL.revokeObjectURL(file.preview));
        };
    }, [galleryImages]);
    // Görseli galeriden kaldırmak için fonksiyon
    const handleImageRemove = (imageId) => {
        setGalleryImages(galleryImages => galleryImages.filter(image => image.id !== imageId));
        // Temizleme işlemini de ekler
        galleryImages.filter(image => image.id === imageId).forEach(image => URL.revokeObjectURL(image.preview));
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: 'image/*',
        multiple: true
    });
    const formatDate = (startDate, daysToAdd) => {
        const date = new Date(startDate);
        date.setDate(date.getDate() + daysToAdd);
        return date.toLocaleDateString('tr-TR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    };
    //Meal, Activities 
    // Handlers for included and excluded items
    const handleIncludedChange = (index, value) => {
        const updatedItems = [...includedItems];
        updatedItems[index] = value;
        setIncludedItems(updatedItems);
    };
    const toggleMeal = (mealType) => {
        setMeals(prevMeals => ({
            ...prevMeals,
            [mealType]: !prevMeals[mealType]
        }));
    };
    const handleExcludedChange = (index, value) => {
        const updatedItems = [...excludedItems];
        updatedItems[index] = value;
        setExcludedItems(updatedItems);
    };

    const addIncludedItem = () => {
        setIncludedItems([...includedItems, ""]);
    };

    const addExcludedItem = () => {
        setExcludedItems([...excludedItems, ""]);
    };

    const removeIncludedItem = (index) => {
        setIncludedItems(includedItems.filter((_, i) => i !== index));
    };

    const removeExcludedItem = (index) => {
        setExcludedItems(excludedItems.filter((_, i) => i !== index));
    };

    // Handlers for meals
    const handleMealChange = (mealType, value) => {
        setMeals({ ...meals, [mealType]: value });
    };

    // Handlers for activities
    const addActivity = () => {
        setActivities([...activities, { name: "", price: "", currency: "TRY" }]);
    };

    const handleActivityChange = (index, field, value) => {
        const updatedActivities = [...activities];
        updatedActivities[index] = { ...updatedActivities[index], [field]: value };
        setActivities(updatedActivities);
    };

    const removeActivity = (index) => {
        setActivities(activities.filter((_, i) => i !== index));
    };

    /* kapak fotosu */
    // Mevcut kapak resmini temizleme fonksiyonu
    const onCoverDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];
        setCoverImage({
            id: file.name,
            preview: URL.createObjectURL(file),
            file: file,
        });
    }, []);
    const { getRootProps: getCoverRootProps, getInputProps: getCoverInputProps } = useDropzone({
        onDrop: onCoverDrop,
        accept: 'image/*',
        multiple: false,
    });
    // Kapak fotoğrafını kaldırmak için fonksiyon
    const handleCoverRemove = () => {
        if (coverImage) {
            URL.revokeObjectURL(coverImage.preview);
        }
        setCoverImage(null);
    };
    /* kapak fotosu */
    return (
        <div className="container mt-3 mx-auto p-6 bg-white shadow-md rounded-lg">
            {/*             <nav className="flex justify-between items-center py-4 border-b">
                <Link to="/" className="text-indigo-600 hover:text-indigo-800">Ana Sayfa</Link>
            </nav> */}
            <div className="flex flex-wrap -mx-4">
                <div className="flex-1 px-4">
                    <h2 className="text-2xl font-semibold mt-4 mb-8">Tur Detayı</h2>
                    <div className="mb-4">
                        {/* ... Tur Adı ve Tanıtım Metni inputları beyler */}
                        <input
                            type="text"
                            id="tourName"
                            className="w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-3 py-2 text-sm"
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
                            className="bg-white shadow"
                            style={{ width: '100%', height: '300px' }} // Genişliği %100 olarak ayarladık

                        />
                    </div>
                </div>
                {/* Kapak Fotoğrafı Ekleme Bölümü */}
                {/* Kapak Fotoğrafı Bölümü */}
                <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-4">Kapak Fotoğrafı Ekle</h3>
                    <div {...getCoverRootProps()} className="flex justify-center items-center p-4 border-2 border-gray-300 border-dashed rounded-md cursor-pointer">
                        <input {...getCoverInputProps()} />
                        <PhotographIcon className="h-6 w-6 mr-2" />
                        <p>Kapak resmini buraya sürükleyin veya seçmek için tıklayın</p>
                    </div>
                    {coverImage && (
                        <div className="mt-4">
                            <div className="relative border rounded">
                                <img
                                    alt="Kapak Görseli"
                                    src={coverImage.preview}
                                    className="object-cover h-64 w-full"
                                />
                                <button
                                    onClick={handleCoverRemove}
                                    className="absolute right-0 top-0 bg-red-200 p-1 rounded-bl">
                                    <XIcon className="h-4 w-4 text-red-600" />
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Kapak Fotoğrafı Ekleme Bölümü */}



                <div className="w-full lg:w-1/2 px-4">
                    <h3 className="text-lg font-semibold mt-10 mb-3">Öne Çıkan Özellikler</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        {highlightedFeatures.map((feature, index) => (
                            <div key={feature.id} className="col-span-1">
                                <div className="flex items-center space-x-2 bg-blue-200 rounded">
                                    <input
                                        type="text"
                                        className="flex-1 bg-blue-200 p-2 text-sm text-blue-800 rounded-l"
                                        placeholder={`Özellik ${index + 1}`}
                                        value={feature.value}
                                        onChange={(e) => handleHighlightChange(index, e.target.value)}
                                    />
                                    <button
                                        onClick={() => removeHighlight(feature.id)}
                                        className="bg-blue-300 hover:bg-blue-400 text-gray-800 p-2 rounded-r">
                                        <XIcon className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    {highlightedFeatures.length < 6 && (
                        <button
                            onClick={addHighlight}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                            <PlusIcon className="h-5 w-5 mr-2" /> Öne Çıkan Ekle
                        </button>
                    )}
                </div>

            </div>
            {/* Pricing and Discount Section */}
            <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Tur Fiyatlandırma ve İndirim</h3>
                <div className="flex flex-wrap -mx-2">
                    {/* Price Input */}
                    <div className="w-full md:w-1/2 px-2 mb-4">
                        <label htmlFor="tourPrice" className="block text-sm font-medium text-gray-700">Tur Fiyatı</label>
                        <input
                            type="number"
                            id="tourPrice"
                            value={tourPrice}
                            onChange={(e) => setTourPrice(e.target.value)}
                            placeholder="Fiyat giriniz"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:border-blue-500"
                        />
                    </div>
                    {/* Discount Input */}
                    <div className="w-full md:w-1/2 px-2 mb-4">
                        <label htmlFor="tourDiscount" className="block text-sm font-medium text-gray-700">İndirim (%)</label>
                        <input
                            type="number"
                            id="tourDiscount"
                            value={tourDiscount}
                            onChange={(e) => setTourDiscount(e.target.value)}
                            placeholder="İndirim yüzdesi giriniz"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:border-blue-500"
                        />
                    </div>
                    {/* Currency Select */}
                    <div className="w-full md:w-1/2 px-2 mb-4">
                        <label htmlFor="currency" className="block text-sm font-medium text-gray-700">Para Birimi</label>
                        <select
                            id="currency"
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:border-blue-500"
                        >
                            {/* Currency options */}
                            <option value="TRY">Türk Lirası - TRY</option>
                            <option value="USD">Amerikan Doları - USD</option>
                            <option value="EUR">Euro - EUR</option>
                            <option value="GBP">İngiliz Sterlini - GBP</option>
                            <option value="JPY">Japon Yeni - JPY</option>
                        </select>
                    </div>
                </div>
                {/* Display the final price */}
                <div className="mt-4 px-2">
                    <label htmlFor="finalPrice" className="block text-sm font-medium text-gray-700">Son Fiyat</label>
                    <input
                        type="text"
                        id="finalPrice"
                        value={finalPrice}
                        readOnly // This input is read-only as it displays calculated value
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:border-blue-500"
                    />
                </div>
            </div>

            <div className="flex gap-4 mb-8 mt-10">
                <div className="w-1/2">
                    <label className="block mb-1 text-sm font-semibold text-gray-700">Başlangıç</label>
                    <DatePicker
                        selected={tourDates.start}
                        onChange={(start) => setTourDates({ ...tourDates, start })}
                        selectsStart
                        startDate={tourDates.start}
                        endDate={tourDates.end}
                        locale="tr"
                        className="w-full border-2 border-gray-300 rounded-md shadow-sm px-3 py-2 text-sm"
                    />
                </div>
                <div className="w-1/2">
                    <label className="block mb-1 text-sm font-semibold text-gray-700">Bitiş</label><DatePicker
                        selected={tourDates.end}
                        onChange={(end) => setTourDates({ ...tourDates, end })}
                        selectsEnd
                        startDate={tourDates.start}
                        endDate={tourDates.end}
                        minDate={tourDates.start}
                        locale="tr"
                        className="w-full border-2 border-gray-300 rounded-md shadow-sm px-3 py-2 text-sm"
                    />
                </div>
            </div>

            {dayPlans.map((plan, index) => (
                <div key={index} className="mb-6 p-4 border rounded shadow-lg space-y-4">
                    <h3 className="text-lg font-semibold mb-2">
                        {`${index + 1}. Gün Planı - ${formatDate(tourDates.start, index)}`}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Şehir"
                            className="w-full border-2 border-gray-300 rounded-md shadow-sm px-3 py-2 text-sm"
                            value={plan.city}
                            onChange={(e) => updateDayPlan(index, 'city', e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Bölge"
                            className="w-full border-2 border-gray-300 rounded-md shadow-sm px-3 py-2 text-sm"
                            value={plan.region}
                            onChange={(e) => updateDayPlan(index, 'region', e.target.value)}
                        />
                        <select
                            className="w-full border-2 border-gray-300 rounded-md shadow-sm px-3 py-2 text-sm"
                            value={plan.accommodation}
                            onChange={(e) => updateDayPlan(index, 'accommodation', e.target.value)}>
                            <option value="">Konaklama Seçin</option>
                            <option value="Var">Var</option>
                            <option value="Yok">Yok</option>
                        </select>
                        <input
                            type="text"
                            placeholder="Başlık"
                            className="w-full border-2 border-gray-300 rounded-md shadow-sm px-3 py-2 text-sm"
                            value={plan.title}
                            onChange={(e) => updateDayPlan(index, 'title', e.target.value)}
                        />
                    </div>
                    <ReactQuill
                        theme="snow"
                        value={plan.itinerary}
                        onChange={(content) => updateDayPlan(index, 'itinerary', content)}
                        className="bg-white p-2 rounded shadow"
                        placeholder={`${index + 1}. Gün Programı`}


                    />
                </div>
            ))}

            {/*GÖRSEL EKLEME SECTION */}
            <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Görsel Ekle</h3>
                <div {...getRootProps()} className="flex justify-center items-center p-4 border-2 border-gray-300 border-dashed rounded-md cursor-pointer">
                    <input {...getInputProps()} />
                    <PhotographIcon className="h-6 w-6 mr-2" />
                    <p>Resmi buraya sürükleyin veya seçmek için tıklayın</p>
                </div>


                <div className="flex flex-wrap mt-4">
                    {galleryImages.map((image, index) => (
                        <div key={image.id} className="m-2">
                            <div className="relative border rounded">
                                <img
                                    alt={`Görsel ${index}`}
                                    src={image.preview} // img elementinde doğru preview URL'sini kullanın
                                    className="object-cover h-32 w-32"
                                />
                                <button
                                    onClick={() => handleImageRemove(image.id)}
                                    className="absolute right-0 top-0 bg-red-200 p-1 rounded-bl">
                                    <XIcon className="h-4 w-4 text-red-600" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/*GÖRSEL EKLEME SECTION */}


            {/*Aktivite EKLEME SECTION */}

            <div className="container mx-auto p-4 shadow-lg rounded">
                <div className="flex flex-wrap justify-between space-y-4">
                    <div className="w-full lg:w-1/2 px-4">
                        <h3 className="text-lg font-semibold mb-2 mt-4">Tura Dahil Olanlar</h3>
                        {includedItems.map((item, index) => (
                            <div key={index} className="flex items-center space-x-2 mb-2">
                                <input
                                    type="text"
                                    className="flex-grow border-2 border-gray-300 rounded-md shadow-sm px-3 py-2 bg-blue-200"
                                    value={item}
                                    onChange={(e) => handleIncludedChange(index, e.target.value)}
                                    placeholder="Dahil olan madde ekle"
                                />
                                <button
                                    type="button"
                                    className="bg-blue-300 hover:bg-blue-400 text-gray-800 p-2 rounded-md"
                                    onClick={() => removeIncludedItem(index)}
                                >
                                    <XIcon className="h-4 w-4" />
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded flex items-center mt-2"
                            onClick={addIncludedItem}
                        >
                            <PlusIcon className="h-4 w-4 mr-2" /> Ekle
                        </button>
                    </div>
                    <div className="w-full lg:w-1/2 px-4">
                        <h3 className="text-lg font-semibold mb-2 ">Tura Dahil Olmayanlar</h3>
                        {excludedItems.map((item, index) => (
                            <div key={index} className="flex items-center space-x-2 mb-2">
                                <input
                                    type="text"
                                    className="flex-grow border-2 border-gray-300 rounded-md shadow-sm px-3 py-2 bg-blue-200"
                                    value={item}
                                    onChange={(e) => handleExcludedChange(index, e.target.value)}
                                    placeholder="Dahil olmayan madde ekle"
                                />
                                <button
                                    type="button"
                                    className="bg-blue-300 hover:bg-blue-400 text-gray-800 p-2 rounded-md"
                                    onClick={() => removeExcludedItem(index)}
                                >
                                    <XIcon className="h-4 w-4" />
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded flex items-center mt-2"
                            onClick={addExcludedItem}
                        >
                            <PlusIcon className="h-4 w-4 mr-2" /> Ekle
                        </button>
                    </div>
                </div>

                {/* Meals section with predefined categories */}
                <div className="mt-8">
                    <h4 className="text-md font-semibold mb-1">Programa Dahil Olan Yemekler</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {Object.entries(meals).map(([mealType, isEnabled]) => (
                            <div key={mealType} className="flex items-center justify-start space-x-2">
                                <label className="text-sm font-semibold text-gray-700">{mealType}</label>
                                <div className="relative">
                                    <input
                                        type="checkbox"
                                        id={mealType}
                                        className="sr-only" // Hide the default checkbox visually
                                        checked={isEnabled}
                                        onChange={() => toggleMeal(mealType)}
                                    />
                                    <label
                                        htmlFor={mealType}
                                        className={`block w-14 h-8 rounded-full shadow-inner cursor-pointer ${isEnabled ? 'bg-green-400' : 'bg-gray-300'
                                            }`}
                                    >
                                        <span
                                            className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${isEnabled ? 'translate-x-full' : 'translate-x-0'
                                                }`}
                                        ></span>
                                    </label>
                                </div>
                                <span className="text-sm font-medium">{isEnabled ? 'Var' : 'Yok'}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Activities section */}
                <div className="mt-4 space-y-2">
                    <h4 className="text-md font-semibold mb-1">Ekstra Aktiviteler ve Ücretler</h4>
                    {activities.map((activity, index) => (
                        <div key={index} className="flex items-center">
                            <input
                                type="text"
                                className="flex-1 border-2 border-gray-300 rounded-md shadow-sm px-3 py-2 mr-2"
                                placeholder={`Aktivite Adı ${index + 1}`}
                                value={activity.name}
                                onChange={(e) => handleActivityChange(index, "name", e.target.value)}
                            />
                            <input
                                type="number"
                                className="w-24 border-2 border-gray-300 rounded-md shadow-sm px-3 py-2 mr-2"
                                placeholder="Ücret"
                                value={activity.price}
                                onChange={(e) => handleActivityChange(index, "price", e.target.value)}
                            />
                            <select
                                className="w-24 border-2 border-gray-300 rounded-md shadow-sm px-2 py-2"
                                value={activity.currency}
                                onChange={(e) => handleActivityChange(index, "currency", e.target.value)}
                            >
                                <option value="TRY">TRY</option>
                                <option value="USD">USD</option>
                                <option value="EUR">EUR</option>
                            </select>
                            <button
                                type="button"
                                className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded ml-2"
                                onClick={() => removeActivity(index)}
                            >
                                <XIcon className="h-4 w-4" />
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded flex items-center"
                        onClick={addActivity}
                    >
                        <PlusIcon className="h-4 w-4 mr-2" /> Aktivite Ekle
                    </button>
                </div>
            </div>

            {/*Aktivite EKLEME SECTION */}

            <div className="flex justify-between mt-8">
                <Link to="/" className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400 transition duration-300">
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
