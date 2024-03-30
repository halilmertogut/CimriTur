import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate hook'unu import edin



const Purchase3 = () => {
    // Create a ref for the card number input
    const cardNumberRef = useRef(null);

    // Define a function to scroll to the card number input
    const scrollToCardNumber = () => {
        cardNumberRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const navigate = useNavigate();
    const goBack = () => {
        navigate('/purchase2'); // purchase2 route'unuza göre ayarlayın
    };

    return (
        <div className="mt-1 font-montserrat space-y-4 p-6 bg-white shadow rounded-lg w-full lg:w-1/2  mx-auto">
            <div className="flex justify-between items-center p-4 ">
                {/* Step 1 */}
                <div className="flex flex-col items-center opacity-40">
                    <div className="w-9 h-9 bg-zinc-100 rounded-full flex justify-center items-center mb-1">
                        <span className="text-zinc-800 text-xl font-semibold">1</span>
                    </div>
                    <div className="text-center text-zinc-800 text-xl font-normal">Ödeme Yöntemi</div>
                </div>
                {/* Step 2 */}
                {/* Horizontal line */}

                {/* Horizontal line */}
                <div className="flex-grow h-1 bg-zinc-100 mx-2" />
                {/* Step 3 */}
                <div className="flex flex-col items-center opacity-40">
                    <div className="w-9 h-9 bg-zinc-100 rounded-full flex justify-center items-center mb-1">
                        <span className="text-zinc-800 text-xl font-semibold">2</span>
                    </div>
                    <div className="text-center text-zinc-800 text-xl font-normal">İletişim Bilgileriniz </div>
                </div>
                <div className="flex-grow h-1 bg-zinc-100 mx-2" />
                <div className="flex flex-col items-center">
                    <div className="w-9 h-9 bg-red-600 rounded-full flex justify-center items-center mb-1">
                        <span className="text-white text-xl font-semibold">3</span>
                    </div>
                    <div className="text-center text-red-500 text-xl font-semibold">Ödeme</div>
                </div>

            </div>
            <div className="text-zinc-800 text-lg md:text-2xl font-semibold mt-8">Select a payment method</div>
            <div className="w-full max-w-4xl p-6 md:p-12 my-6 bg-white rounded-3xl border border-zinc-800 border-opacity-20 flex flex-col gap-6">
                <div className="text-zinc-800 text-xl md:text-2xl font-extrabold">Your Tickets Overview</div>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col md:flex-row items-center gap-6 py-5 border-b border-zinc-100">
                        <img className="w-40 h-28 md:w-56 md:h-36 rounded-xl" src="https://via.placeholder.com/160x110" alt="Event" />
                        <div className="flex flex-col gap-4">
                            <div className="text-zinc-800 text-lg md:text-xl font-bold">Wine tasting In Tuscany</div>
                            <div className="flex items-center gap-2">
                                <span className="text-zinc-800 text-base md:text-lg font-semibold">FRI, 23 DEC 2022</span>
                                <span className="text-zinc-800 text-base md:text-lg font-semibold">15:00</span>
                            </div>
                        </div>
                    </div>
                    {/* Ticket details and price breakdown */}
                    <div className="flex flex-col gap-4 py-5">
                        {/* Repeat for each ticket type */}
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <span className="text-zinc-800 text-base md:text-lg font-semibold">2 Adults (€32.00 each)</span>
                            </div>
                            <div className="text-zinc-800 text-lg font-semibold">€64.00</div>
                        </div>
                        {/* Total price */}
                        <div className="flex justify-between items-center pt-4">
                            <span className="text-zinc-800 text-lg md:text-xl font-bold">Toplam Ücrets</span>
                            <span className="text-red-500 text-lg md:text-xl font-bold">€86.00</span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between space-x-4"> {/* This div will ensure buttons are side by side */}
                    <button
                        onClick={scrollToCardNumber}
                        className="px-6 py-4 bg-red-500 rounded-full text-white text-lg md:text-xl font-bold hover:bg-sky-500"
                        ref={cardNumberRef}
                    >
                        Ödemeye Devam Et
                    </button>
                    <button
                        className="px-6 py-4 bg-red-500 rounded-full text-white text-lg md:text-xl font-bold hover:bg-sky-500"
                        onClick={goBack}

                    >
                        Geri
                    </button>
                </div>
            </div>
            {/* Payment method selection (simplified for responsiveness) */}
            <div className="w-full max-w-4xl my-6 p-4 md:p-8 bg-white rounded-xl border border-zinc-800 border-opacity-20">
                <div className="flex flex-col gap-4">
                    <div class="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto ">
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-semibold mb-2" for="card-number">
                                Kart Numarası
                            </label>
                            <input
                                type="text"
                                id="card-number"
                                class="block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                placeholder="•••• •••• •••• ••••"
                            />
                        </div>

                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-semibold mb-2" for="exp-date">
                                Son Kullanma Tarihi
                            </label>
                            <div class="flex">
                                <input
                                    type="text"
                                    id="exp-month"
                                    class="block flex-1 border border-gray-300 rounded-md shadow-sm px-2 py-2 mr-1 w-24 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                    placeholder="AA"
                                />
                                <input
                                    type="text"
                                    id="exp-year"
                                    class="block flex-1 border border-gray-300 rounded-md shadow-sm px-2 py-2 ml-2 w-24 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                    placeholder="YY"
                                />
                            </div>
                        </div>

                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-semibold mb-2" for="security-code">
                                Güvenlik Kodu
                            </label>
                            <input
                                type="text"
                                id="security-code"
                                class="block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:border--500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                placeholder="•••"
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" name="paymentMethod" id="paypal" className="accent-red-500" />
                            <label htmlFor="paypal" className="text-zinc-800 text-base md:text-lg font-semibold">3D secure ile ödemek istiyorum</label>
                            <button
                                className=" bg-red-500 rounded-full text-white text-l md:text-s hover:bg-sky-500  font-semibold"
                            >
                                Ödemeyi Tamamla
                            </button>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    );

};

export default Purchase3;
