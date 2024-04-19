import React, { useState, useEffect, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { XIcon, PlusIcon, PhotographIcon } from '@heroicons/react/solid';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
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
        accept: 'iamge/*',
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

    return (
        <div className="container font-montserrat mx-auto p-4 shadow-lg rounded">
            <nav className="flex justify-between items-center py-4 border-b">
                <Link to="/" className="text-indigo-600 hover:text-indigo-800">Ana Sayfa</Link>
            </nav>
            <div className="flex flex-wrap -mx-4">
                <div className="flex-1 px-4">
                    <h2 className="text-2xl font-semibold mt-4 mb-8">Yeni Tur Düzenleme</h2>
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
                <div className="w-full lg:w-1/2 px-4">
                    <h3 className="text-lg font-semibold mt-4 mb-3">Öne Çıkan Özellikler</h3>
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
                                    {feature.value && (
                                        <button
                                            onClick={() => removeHighlight(feature.id)}
                                            className="bg-blue-300 hover:bg-blue-400 text-gray-800 p-2 rounded-r">
                                            <XIcon className="h-4 w-4" />
                                        </button>
                                    )}
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

            <div className="flex gap-4 mb-8 mt-10">
                <div className="w-1/2">
                    <label className="block mb-1 text-sm  font-medium text-gray-700">Başlangıç</label>
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
                    <label className="block mb-1 text-sm font-medium text-gray-700">Bitiş</label><DatePicker
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
