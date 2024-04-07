/*Burası AddNew.Js kısmında link ile bağlamış olduğum Detay kısmı */


import React, { useState } from "react";

const AddNewDetail = () => {
    const [photo, setPhoto] = useState(null);
    const [destination, setDestination] = useState("");
    const [stops, setStops] = useState([]);
    const [stopCounter, setStopCounter] = useState(0);
    const [detail, setDetail] = useState("");
    const [saved, setSaved] = useState(false);
    const [loading, setLoading] = useState(false);

    const handlePhotoChange = (event) => {
        const selectedPhoto = event.target.files[0];
        setPhoto(selectedPhoto);
    };

    const handleDestinationChange = (event) => {
        setDestination(event.target.value);
    };

    const handleAddStop = () => {
        if (destination.trim() !== "") {
            setLoading(true); // Loading başlat
            // Simüle edilen bir loading işlemi için setTimeout kullanıyoruz
            setTimeout(() => {
                setStops([...stops, { id: stopCounter, name: destination.trim() }]);
                setDestination("");
                setStopCounter(stopCounter + 1);
                setLoading(false); // Loading durdur
            }, 1000); // 1 saniye sonra loading durdurulur
        }
    };

    const handleDetailChange = (event) => {
        setDetail(event.target.value);
    };

    const handleSave = () => {
        // Kaydetme işlemi burada gerçekleştirilir
        setSaved(true);
    };

    return (
        <div className="flex justify-center items-center h-full mt-20">
            <div className="max-w-xl w-full px-8 py-6 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tur Detayı Ekle</h2>
                <div className="mb-4">
                    <label htmlFor="photo" className="block text-sm font-medium text-gray-700 mb-1">Fotoğraf</label>
                    <input
                        type="file"
                        id="photo"
                        onChange={handlePhotoChange}
                        className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                    {photo && (
                        <div className="mt-2">
                            <img src={URL.createObjectURL(photo)} alt="Preview" className="w-full h-auto rounded-md" />
                        </div>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="detail" className="block text-sm font-medium text-gray-700 mb-1">Tur Detayı</label>
                    <textarea
                        id="detail"
                        value={detail}
                        onChange={handleDetailChange}
                        className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        rows={6}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="stops" className="block text-sm font-medium text-gray-700 mb-1">Uğranacak Duraklar</label>
                    <div className="flex">
                        <input
                            type="text"
                            id="stops"
                            value={destination}
                            onChange={handleDestinationChange}
                            className="flex-grow mr-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                        <button onClick={handleAddStop} className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300">
                            {loading ? <span className="animate-spin">Loading...</span> : "Durak Ekle"}
                        </button>
                    </div>
                </div>

                <div>
                    <button onClick={handleSave} className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300">Kaydet</button>
                </div>

                {saved && (
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Kaydedilen Bilgiler</h3>
                        <p>Fotoğraf: {photo ? "Yüklendi" : "Yüklenmedi"}</p>
                        <p>Tur Detayı: {detail}</p>
                        <p>Uğranacak Duraklar:</p>
                        <ul>
                            {stops.map((stop, index) => (
                                <li key={stop.id}>{`${index + 1}. ${stop.name}`}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AddNewDetail;
