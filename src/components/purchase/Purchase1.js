import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // useNavigate ve useLocation hook'larını import edin

const Purchase1 = () => {
    const [odemeYontemi, setOdemeYontemi] = useState('');
    const [kartTipi, setKartTipi] = useState(''); // Kart tipi için state
    const [taksitSecenekleri, setTaksitSecenekleri] = useState('1'); // Taksit seçenekleri için state, varsayılan değer '1'
    const navigate = useNavigate();
    const location = useLocation();
    const { participants, totalCost, currency, tourName } = location.state || { participants: 1, totalCost: 0, currency: 'USD', tourName: ''};

    // Ödeme yöntemi seçilmeden ileri gitmeyi engeller
    const handleNextStep = () => {
        if (!odemeYontemi) {
            alert('Lütfen ilerlemeden önce bir ödeme yöntemi seçiniz.');
            return; // Eğer ödeme yöntemi seçilmediyse burada durur
        }
        navigate('/purchase-2', {
            state: {
                tourName: tourName,
                participants: participants,
                totalCost: totalCost,
                currency: currency,
                odemeYontemi: odemeYontemi, // Seçilen ödeme yöntemini ileri taşır
                kartTipi: kartTipi,
                taksitSecenekleri: taksitSecenekleri
            }
        });
    };

    const handlePaymentMethodChange = (event) => {
        setOdemeYontemi(event.target.value);
        if (event.target.value !== 'creditDebitCard') {
            setKartTipi('');
            setTaksitSecenekleri('1'); // Kart olmayan ödeme yöntemi seçildiğinde taksit seçeneklerini sıfırla
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-sm rounded-lg font-montserrat">
            <div className="flex justify-between items-center p-4 bg-white">
                {/* Adım 1 */}
                <div className="flex flex-col items-center">
                    <div className="w-9 h-9 bg-red-600 rounded-full flex justify-center items-center mb-1">
                        <span className="text-white text-xl font-semibold">1</span>
                    </div>
                    <div className="text-center text-red-500 text-xl font-semibold">Ödeme Yöntemi</div>
                </div>
                {/* Yatay çizgi */}
                <div className="flex-grow h-1 bg-zinc-100 mx-2" />
                {/* Adım 2 */}
                <div className="flex flex-col items-center opacity-40">
                    <div className="w-9 h-9 bg-zinc-100 rounded-full flex justify-center items-center mb-1">
                        <span className="text-zinc-800 text-xl font-semibold">2</span>
                    </div>
                    <div className="text-center text-zinc-800 text-xl font-normal">Kişisel Bilgileriniz</div>
                </div>
                {/* Yatay çizgi */}
                <div className="flex-grow h-1 bg-zinc-100 mx-2" />
                {/* Adım 3 */}
                <div className="flex flex-col items-center opacity-40">
                    <div className="w-9 h-9 bg-zinc-100 rounded-full flex justify-center items-center mb-1">
                        <span className="text-zinc-800 text-xl font-semibold">3</span>
                    </div>
                    <div className="text-center text-zinc-800 text-xl font-normal">Ödeme</div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                <div className="p-6 bg-white shadow rounded-lg w-full lg:w-1/2">
                    <h2 className="text-lg font-semibold mb-4">Ödeme Seçenekleri</h2>
                    <div>
                        <label htmlFor="payment-method" className="block mb-2 text-sm font-medium text-gray-700">
                            Ödeme yöntemi seçiniz
                        </label>
                        <select
                            id="payment-method"
                            value={odemeYontemi}
                            onChange={handlePaymentMethodChange}
                            className="block w-full p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        >
                            <option value="">Ödeme Yöntemi Seçiniz</option>
                            <option value="creditDebitCard">Kredi ve Banka Kartı</option>
                            <option value="bankTransfer">Havale / EFT</option>
                            <option value="phonePayment">Telefonda Ödeme</option>
                        </select>
                    </div>

                    {odemeYontemi === 'creditDebitCard' && (
                        <>
                            <div className="mt-4">
                                <label htmlFor="card-type" className="block mb-2 text-sm font-medium text-gray-700">
                                    Kart Türü Seçiniz
                                </label>
                                <select
                                    id="card-type"
                                    value={kartTipi}
                                    onChange={(e) => setKartTipi(e.target.value)}
                                    className="block w-full p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                >
                                    <option value="">Kart Türünüzü Seçiniz</option>
                                    <option value="visa">Visa</option>
                                    <option value="mastercard">MasterCard</option>
                                    <option value="amex">American Express</option>
                                    <option value="discover">Discover</option>
                                </select>
                            </div>

                            <div className="mt-4">
                                <label htmlFor="installments" className="block mb-2 text-sm font-medium text-gray-700">
                                    Installment Options
                                </label>
                                <select
                                    id="installments"
                                    value={odemeYontemi}
                                    onChange={(e) => odemeYontemi(e.target.value)}
                                    className="block w-full p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                >
                                    <option value="1">Tek Çekim</option>
                                    <option value="3">3 Taksit</option>
                                    <option value="6">6 Taksit</option>
                                    <option value="12">12 Taksit</option>
                                </select>
                            </div>
                        </>
                    )}
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="border border-gray-300 p-4 rounded-md">
                        <h3 className="text-lg font-semibold mb-3">Overview of Your Tour</h3>
                        <div className="flex justify-between items-center mt-6">
                            <span className="text-gray-700 text-lg">Toplam Tutar</span>
                            <span className="text-red-500 text-xl font-semibold">{`${totalCost} ${currency}`}</span>
                        </div>
                        <button
                            className="rounded-full text-white w-full bg-red-500 mt-6 py-2 font-semibold hover:bg-sky-500 transition"
                            onClick={handleNextStep}
                        >
                            Sonraki Adıma Geçin
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase1;
