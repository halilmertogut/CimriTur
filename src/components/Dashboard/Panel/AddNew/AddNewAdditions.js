import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SaveIcon, PlusIcon, XIcon } from '@heroicons/react/outline';
import Sidebar from "../SideBar";

const AddNewAdditions = () => {
    const [includedItems, setIncludedItems] = useState("");
    const [excludedItems, setExcludedItems] = useState("");
    const [mealItems, setMealItems] = useState([]);
    const [extraServices, setExtraServices] = useState([]);
    const [activities, setActivities] = useState([]);

    const handleSave = () => {
        // Burada eklemeleri kaydetme işlemi gerçekleştirilebilir
        console.log("Tura Dahil Olanlar:", includedItems);
        console.log("Tura Dahil Olmayanlar:", excludedItems);
        console.log("Programa Dahil Olan Yemekler:", mealItems);
        console.log("Ek Hizmet ve Servisler:", extraServices);
        console.log("Ekstra Aktiviteler ve Ücretler:", activities);
    };

    const handleAddMealItem = () => {
        setMealItems([...mealItems, ""]);
    };

    const handleRemoveMealItem = (index) => {
        const updatedMealItems = [...mealItems];
        updatedMealItems.splice(index, 1);
        setMealItems(updatedMealItems);
    };

    const handleAddExtraService = () => {
        setExtraServices([...extraServices, ""]);
    };

    const handleRemoveExtraService = (index) => {
        const updatedExtraServices = [...extraServices];
        updatedExtraServices.splice(index, 1);
        setExtraServices(updatedExtraServices);
    };

    const handleAddActivity = () => {
        setActivities([...activities, { name: "", price: "", currency: "" }]);
    };

    const handleRemoveActivity = (index) => {
        const updatedActivities = [...activities];
        updatedActivities.splice(index, 1);
        setActivities(updatedActivities);
    };

    const handleActivityChange = (index, key, value) => {
        const updatedActivities = [...activities];
        updatedActivities[index][key] = value;
        setActivities(updatedActivities);
    };

    return (
        <div className="container mx-auto">
            
            <nav className="flex justify-between items-center py-4 border-b">
                <div>
                    <Link to={`/addnewedit`} className="text-gray-600 hover:text-indigo-800">Genel Bilgi</Link>
                    <Link to={`/addnewtourprogram`} className="ml-4 text-gray-600 hover:text-indigo-800">Tur Programı</Link>
                    <Link to={`/addnewgallery`} className="ml-4 text-gray-600 hover:text-indigo-800">Galeri</Link>
                    <Link to={`/addnewadditions`} className="ml-4 text-indigo-600 hover:text-indigo-800">Eklentiler</Link>
                </div>
            </nav>

            <h2 className="text-2xl font-semibold mt-4 mb-8">Yeni Eklemeler Ekle</h2>

            <div className="flex">
                <div className="w-1/2 pr-4">
                    <h3 className="text-lg font-semibold mb-4">Tura Dahil Olanlar</h3>
                    <textarea
                        className="w-full h-64 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 placeholder-gray-400 text-sm resize-none"
                        placeholder="Tura dahil olanları buraya girin..."
                        value={includedItems}
                        onChange={(e) => setIncludedItems(e.target.value)}
                    ></textarea>
                </div>
                <div className="w-1/2 pl-4">
                    <h3 className="text-lg font-semibold mb-4">Tura Dahil Olmayanlar</h3>
                    <textarea
                        className="w-full h-64 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 placeholder-gray-400 text-sm resize-none"
                        placeholder="Tura dahil olmayanları buraya girin..."
                        value={excludedItems}
                        onChange={(e) => setExcludedItems(e.target.value)}
                    ></textarea>
                </div>
            </div>

            <div className="flex justify-between mt-8">
                <div className="w-1/2 pr-4">
                    <h3 className="text-lg font-semibold mb-4">Programa Dahil Olan Yemekler</h3>
                    {mealItems.map((item, index) => (
                        <div key={index} className="flex items-center mb-3">
                            <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 placeholder-gray-400 text-sm"
                                placeholder={`Yemek ${index + 1}`}
                                value={item}
                                onChange={(e) => {
                                    const updatedMealItems = [...mealItems];
                                    updatedMealItems[index] = e.target.value;
                                    setMealItems(updatedMealItems);
                                }}
                            />
                            <button onClick={() => handleRemoveMealItem(index)} className="ml-2 text-red-500 hover:text-red-700 focus:outline-none">
                                <XIcon className="h-5 w-5" />
                            </button>
                        </div>
                    ))}
                    <button
                        className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300 mt-4"
                        onClick={handleAddMealItem}
                    >
                        <PlusIcon className="h-5 w-5 mr-2" />
                        Yeni Ekle
                    </button>
                </div>
                <div className="w-1/2 pl-4">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Ek Hizmet ve Servisler</h3>
                        {extraServices.map((service, index) => (
                            <div key={index} className="flex items-center mb-3">
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 placeholder-gray-400 text-sm"
                                    placeholder={`Hizmet/Servis ${index + 1}`}
                                    value={service}
                                    onChange={(e) => {
                                        const updatedExtraServices = [...extraServices];
                                        updatedExtraServices[index] = e.target.value;
                                        setExtraServices(updatedExtraServices);
                                    }}
                                />
                                <button onClick={() => handleRemoveExtraService(index)} className="ml-2 text-red-500 hover:text-red-700 focus:outline-none">
                                    <XIcon className="h-5 w-5" />
                                </button>
                            </div>
                        ))}
                        <button
                            className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300 mt-4"
                            onClick={handleAddExtraService}
                        >
                            <PlusIcon className="h-5 w-5 mr-2" />
                            Yeni Ekle
                        </button>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-lg font-semibold mb-4">Ekstra Aktiviteler ve Ücretler</h3>
                        {activities.map((activity, index) => (
                            <div key={index} className="flex items-center mb-3">
                                <input
                                    type="text"
                                    className="w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 placeholder-gray-400 text-sm mr-2"
                                    placeholder={`Eklenti Adı ${index + 1}`}
                                    value={activity.name}
                                    onChange={(e) => handleActivityChange(index, "name", e.target.value)}
                                />
                                <input
                                    type="number"
                                    className="w-1/4 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 placeholder-gray-400 text-sm mr-2"
                                    placeholder="Ücret"
                                    value={activity.price}
                                    onChange={(e) => handleActivityChange(index, "price", e.target.value)}
                                />
                                <select
                                    className="w-1/4 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 placeholder-gray-400 text-sm px-2 py-1"
                                    value={activity.currency}
                                    onChange={(e) => handleActivityChange(index, "currency", e.target.value)}
                                >
                                    <option value="">Para Birimi Seçin</option>
                                    <option value="TRY">TRY</option>
                                    <option value="USD">USD</option>
                                    <option value="EUR">EUR</option>
                                </select>
                                <button onClick={() => handleRemoveActivity(index)} className="ml-2 text-red-500 hover:text-red-700 focus:outline-none">
                                    <XIcon className="h-5 w-5" />
                                </button>
                            </div>
                        ))}
                        <button
                            className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300 mt-4"
                            onClick={handleAddActivity}
                        >
                            <PlusIcon className="h-5 w-5 mr-2" />
                            Yeni Ekle
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex justify-end mt-8">
                <button
                    className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
                    onClick={handleSave}
                >
                    <SaveIcon className="h-5 w-5 mr-2" />
                    Kaydet
                </button>
            </div>
        </div>
    );
};

export default AddNewAdditions;
