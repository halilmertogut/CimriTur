import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate hook'unu import edin


const Purchase1 = () => {

    const [paymentMethod, setPaymentMethod] = useState('');
    const [cardType, setCardType] = useState('');
    const navigate = useNavigate(); // useNavigate hook'unu kullanmak için


    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
        // Eğer ödeme yöntemi kart değilse, kart türünü sıfırla
        if (event.target.value !== 'creditDebitCard') {
            setCardType('');
        }
    };
    const handleNextStep = () => {
        if (!paymentMethod) {
            // Eğer ödeme yöntemi seçilmemişse uyarı ver
            alert('Lütfen ödeme yöntemi seçiniz.');
        } else {
            // Ödeme yöntemi seçilmişse purchase2 sayfasına yönlendir
            navigate('/purchase2'); // Buradaki yol uygulamanızdaki yol ile eşleşmelidir
        }
    };


    return (

        <div className="max-w-4xl mx-auto p-6 bg-white shadow-sm rounded-lg font-montserrat">
            <div className="flex justify-between items-center p-4 bg-white">
                {/* Step 1 */}
                <div className="flex flex-col items-center">
                    <div className="w-9 h-9 bg-red-600 rounded-full flex justify-center items-center mb-1">
                        <span className="text-white text-xl font-semibold">1</span>
                    </div>
                    <div className="text-center text-red-500 text-xl font-semibold">Ödeme Yöntemi</div>
                </div>
                {/* Horizontal line */}
                <div className="flex-grow h-1 bg-zinc-100 mx-2" />
                {/* Step 2 */}
                <div className="flex flex-col items-center opacity-40">
                    <div className="w-9 h-9 bg-zinc-100 rounded-full flex justify-center items-center mb-1">
                        <span className="text-zinc-800 text-xl font-semibold">2</span>
                    </div>
                    <div className="text-center text-zinc-800 text-xl font-normal">Kişisel Bilgileriniz</div>
                </div>
                {/* Horizontal line */}
                <div className="flex-grow h-1 bg-zinc-100 mx-2" />
                {/* Step 3 */}
                <div className="flex flex-col items-center opacity-40">
                    <div className="w-9 h-9 bg-zinc-100 rounded-full flex justify-center items-center mb-1">
                        <span className="text-zinc-800 text-xl font-semibold">3</span>
                    </div>
                    <div className="text-center text-zinc-800 text-xl font-normal">Ödeme</div>
                </div>
            </div>



            <div className="flex justify-between mb-8">
                {/* Steps Indicator */}
                <div className="flex items-center">

                    <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-orange-500"></div>
                    <div className="flex items-center text-gray-500 relative">
                        {/* ... Repeat for other steps ... */}
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                <div className="p-6 bg-white shadow rounded-lg w-full lg:w-1/2 ">
                    <h2 className="text-lg font-semibold mb-4">Ödeme Seçenekleri</h2>
                    <div>
                        <label htmlFor="payment-method" className="block mb-2 text-sm font-medium text-gray-700">
                            Bir ödeme yöntemi seçiniz
                        </label>
                        <select
                            id="payment-method"
                            value={paymentMethod}
                            onChange={handlePaymentMethodChange}
                            className="block w-full p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        >
                            <option value="">Ödeme Yöntemi Seçiniz</option>
                            <option value="creditDebitCard">Kredi ve Banka Kartı</option>
                            <option value="bankTransfer">Havale / EFT</option>
                            <option value="phonePayment">Telefonda Ödeme</option>
                        </select>
                    </div>

                    {paymentMethod === 'creditDebitCard' && (
                        <>
                            <div className="mt-4">
                                <label htmlFor="card-type" className="block mb-2 text-sm font-medium text-gray-700">
                                    Kart Türü Seçiniz
                                </label>
                                <select
                                    id="card-type"
                                    value={cardType}
                                    onChange={(e) => setCardType(e.target.value)}
                                    className="block w-full p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                >
                                    {/* Kart türleri burada listelenir */}
                                </select>
                            </div>

                            {/* Taksit seçenekleri burada gösterilir */}
                        </>
                    )}
                </div>
                <div className="w-full lg:w-1/2">
                    {/* Ticket overview */}
                    <div className="border border-gray-300 p-4 rounded-md">
                        <h3 className="text-lg font-semibold mb-3">Turunuzun Genel Görünümü</h3>
                        {/* ... Overview items ... */}
                        <div className="flex justify-between items-center mt-6">
                            <span className="text-gray-700 text-lg">Toplam Tutar</span>
                            <span className="text-red-500 text-xl font-semibold">€86.00</span>
                        </div>
                        <button
                            className="w-full bg-red-500 text-white mt-6 py-2 rounded-md font-semibold hover:bg-sky-500 transition"
                            onClick={handleNextStep} // onClick handler'ı ekle
                        >
                            Sonraki Adıma geç
                        </button>                    </div>
                </div>
            </div>
        </div>
    );

}; export default Purchase1;