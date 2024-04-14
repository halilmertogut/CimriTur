/*HER BİR TUR İÇİN İSİM FARKLI OLUCAK. backend depolanması gerekenler, isim doluluk oranları, kontenjanlar ve kaydedildiğindeki rakamlamalar */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiPriceTag3Fill } from "react-icons/ri";

const AddNewDetail = () => {
    const [selectedMonth, setSelectedMonth] = useState("April");
    const [selectedHotel, setSelectedHotel] = useState(null);
    const [fillRates, setFillRates] = useState([]);
    const [turKontenjanlar, setTurKontenjanlar] = useState([]);
    const [indirimler, setIndirimler] = useState([]);
    const [isSaved, setIsSaved] = useState(false);
    const [savedHotel, setSavedHotel] = useState(null);

    useEffect(() => {
        const daysInMonth = getDaysInMonth(selectedMonth);
        setFillRates(Array(daysInMonth).fill(false));
        setTurKontenjanlar(Array(daysInMonth).fill(100));
        setIndirimler(Array(daysInMonth).fill(0));
    }, [selectedMonth]);

    const handleMonthChange = (event) => {
        setSelectedMonth(event.target.value);
    };

    const handleEditHotel = (hotel) => {
        setSelectedHotel(hotel);
    };

    const handleFillRateClick = (index) => {
        const updatedFillRates = [...fillRates];
        updatedFillRates[index] = !updatedFillRates[index];
        setFillRates(updatedFillRates);
    };

    const handleTurKontenjanChange = (index, value) => {
        const updatedTurKontenjanlar = [...turKontenjanlar];
        updatedTurKontenjanlar[index] = value;
        setTurKontenjanlar(updatedTurKontenjanlar);
    };

    const handleIndirimChange = (index, value) => {
        const updatedIndirimler = [...indirimler];
        if (value > 100) value = 100;
        updatedIndirimler[index] = value;
        setIndirimler(updatedIndirimler);
    };

    const handleSave = () => {
        // Simulate saving data (you can replace this with your actual saving logic)
        setIsSaved(true);
        setSavedHotel(selectedHotel);
        setTimeout(() => {
            setIsSaved(false);
        }, 3000);
    };

    const getDaysInMonth = (month) => {
        const date = new Date(2022, new Date().toLocaleString('en-US', { month: 'long' }) === month ? new Date().getMonth() + 1 : new Date(month + ' 1, 2022').getMonth() + 1, 0);
        return date.getDate();
    };

    return (
        <div className="container font-montserrat mx-auto">
            <nav className="bg-indigo-600 p-4 mb-4 flex justify-between items-center">
                <div className="text-white font-semibold text-xl">Ege Turu</div>
                <div className="flex items-center">
                    <button className="text-white mr-4">Tur Ayı</button>
                    
                    <select
                        value={selectedMonth}
                        onChange={handleMonthChange}
                        className="border rounded py-2 px-4 mr-4"
                    >
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                    </select>
                </div>
            </nav>
            <div className="block overflow-x-auto">
                {[3, 4, 5].map((starRating) => (
                    <div key={starRating} className="flex-grow p-4 border rounded-lg shadow-md mr-4">
                        <h3 className="text-lg font-semibold mb-4">{starRating} Yıldızlı Oteller</h3>
                        <div className="flex items-center mb-4">
                            <button onClick={() => handleEditHotel(starRating)} className="bg-indigo-600 text-white py-2 px-4 rounded-md mr-4">
                                Rezervasyon Düzenle
                            </button>
                            <Link to="/new-price" className="bg-indigo-600 text-white py-2 px-4 rounded-md mr-4">
                                <RiPriceTag3Fill className="inline-block mr-2" />
                                Fiyat
                            </Link>
                            <button onClick={handleSave} className="bg-green-500 text-white py-2 px-4 rounded-md">
                                Kaydet
                            </button>
                        </div>
                        {selectedHotel === starRating && (
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse border border-gray-400">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            {[...Array(getDaysInMonth(selectedMonth))].map((_, index) => (
                                                <th key={index}>{index + 1}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th className="border border-gray-400">Doluluk Oranı</th>
                                            {fillRates.map((filled, index) => (
                                                <td
                                                    key={index}
                                                    onClick={() => handleFillRateClick(index)}
                                                    className={`p-2 cursor-pointer ${filled ? 'bg-green-400' : 'bg-red-400'}`}
                                                    style={{ width: "4rem", height: "4rem", border: "1px solid #ccc" }}
                                                ></td>
                                            ))}
                                        </tr>
                                        <tr>
                                            <th className="border border-gray-400">Tur Kontenjanı</th>
                                            {turKontenjanlar.map((value, index) => (
                                                <td key={index}>
                                                    <input
                                                        type="number"
                                                        value={value}
                                                        onChange={(e) => handleTurKontenjanChange(index, e.target.value)}
                                                        className="border rounded p-1 w-full"
                                                        style={{ width: "4rem" }}
                                                    />
                                                </td>
                                            ))}
                                        </tr>
                                        <tr>
                                            <th className="border border-gray-400">İndirim (%)</th>
                                            {indirimler.map((value, index) => (
                                                <td key={index}>
                                                    <div className="flex">
                                                        <input
                                                            type="number"
                                                            min="0"
                                                            max="100"
                                                            value={value}
                                                            onChange={(e) => handleIndirimChange(index, e.target.value)}
                                                            className="border rounded p-1 w-full"
                                                            style={{ width: "4rem" }}
                                                        />
                                                        <span className="ml-1">%</span>
                                                    </div>
                                                </td>
                                            ))}
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            {isSaved && (
                <div className="bg-green-500 text-white py-2 px-4 rounded-md mt-4">
                    {savedHotel} Yıldızlı Otel Kaydedildi
                </div>
            )}
        </div>
    );
};

export default AddNewDetail;
