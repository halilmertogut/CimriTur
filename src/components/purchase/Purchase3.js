import React, { useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Purchase3 = () => {
    const cardNumberRef = useRef(null);
    const expMonthRef = useRef(null);
    const expYearRef = useRef(null);
    const securityCodeRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();
    const [showToast, setShowToast] = useState(false);
    const [use3DSecure, setUse3DSecure] = useState(false);
    
    const {
        participants,
        totalCost,
        currency,
        tourName,
        tourImage,
        eventName,
        eventDate,
        eventTime,
        formDetails  // Assuming formDetails holds additional participant information passed from Purchase2
    } = location.state || {
        participants: 0,
        totalCost: 0,
        currency: 'TL',
        tourName: '',
        tourImage: 'https://via.placeholder.com/160x110', // Default image placeholder
        eventName: '',
        eventDate: '',
        eventTime: '',
        formDetails: []
    };

    const completePayment = () => {
        if (!cardNumberRef.current || !cardNumberRef.current.value || cardNumberRef.current.value.length < 16 ||
            !expMonthRef.current || !expMonthRef.current.value ||
            !expYearRef.current || !expYearRef.current.value ||
            !securityCodeRef.current || !securityCodeRef.current.value) {
            toast.error("Lütfen tüm alanları doldurunuz ve geçerli bir kart numarası giriniz.", {
                position: "top-center",
                autoClose: 3000
            });
            return;
        }
        if (use3DSecure) {
            toast.info("3D Secure ile ödeme işlemi başlatılıyor...", {
                position: "top-center",
                autoClose: 3000
            });
        }
        toast.success("Ödeme başarılı! Keşfet sayfasına yönlendiriliyorsunuz...", {
            position: "top-center",
            autoClose: 3000
        });
        setTimeout(() => {
            navigate('/explore');
        }, 3000);
    };
    
    


    return (
        <div className="mt-1 font-montserrat space-y-4 p-6 bg-white shadow rounded-lg w-full lg:w-1/2 mx-auto">
            <ToastContainer />
            <div className="flex justify-between items-center p-4">
                {/* Step indicators */}
                <div className="flex flex-col items-center opacity-40">
                    <div className="w-9 h-9 bg-zinc-100 rounded-full flex justify-center items-center mb-1">
                        <span className="text-zinc-800 text-xl font-semibold">1</span>
                    </div>
                    <div className="text-center text-zinc-800 text-xl font-normal">Ödeme Yöntemi</div>
                </div>
                <div className="flex-grow h-1 bg-zinc-100 mx-2" />
                <div className="flex flex-col items-center opacity-40">
                    <div className="w-9 h-9 bg-zinc-100 rounded-full flex justify-center items-center mb-1">
                        <span className="text-zinc-800 text-xl font-semibold">2</span>
                    </div>
                    <div className="text-center text-zinc-800 text-xl font-normal">İletişim Bilgileriniz</div>
                </div>
                <div className="flex-grow h-1 bg-zinc-100 mx-2" />
                <div className="flex flex-col items-center">
                    <div className="w-9 h-9 bg-red-600 rounded-full flex justify-center items-center mb-1">
                        <span className="text-white text-xl font-semibold">3</span>
                    </div>
                    <div className="text-center text-red-500 text-xl font-semibold">Ödeme</div>
                </div>
            </div>

            <div className="text-xl font-semibold my-4">Tur: {tourName}</div>
            <img src={tourImage} alt="Tour" className="w-full h-auto rounded-lg mb-4"/>
            <div className="font-medium text-lg">Katılımcılar:</div>
            {formDetails.map((detail, index) => (
                <div key={index} className="text-gray-800 text-lg">{detail.ad} {detail.soyad}</div>
            ))}
            <div className="text-lg font-semibold">Toplam Tutar: {totalCost} {currency}</div>

            <div className="w-full max-w-4xl my-6 p-4 md:p-8 bg-white rounded-xl border border-zinc-800 border-opacity-20">
                                <div className="flex flex-col gap-4">
                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
                        {/* Card information input fields */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="card-number">
                                Kart Numarası
                            </label>
                            <input
                                ref={cardNumberRef}
                                type="text"
                                id="card-number"
                                className="block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                placeholder="•••• •••• •••• ••••"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="exp-date">
                                Son Kullanma Tarihi
                            </label>
                            <div className="flex">
                                <input
                                    ref={expMonthRef}
                                    type="text"
                                    id="exp-month"
                                    className="block flex-1 border border-gray-300 rounded-md shadow-sm px-2 py-2 mr-1 w-24 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                    placeholder="AA"
                                    required
                                />
                                <input
                                    ref={expYearRef}
                                    type="text"
                                    id="exp-year"
                                    className="block flex-1 border border-gray-300 rounded-md shadow-sm px-2 py-2 ml-1 w-24 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                    placeholder="YY"
                                    required
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="security-code">
                            Güvenlik Kodu
                        </label>
                        <input
                            ref={securityCodeRef}
                            type="text"
                            id="security-code"
                            className="block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                            placeholder="•••"
                            required
                        />
                    </div>
                    <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        id="use3DSecure"
                        checked={use3DSecure}
                        onChange={() => setUse3DSecure(!use3DSecure)}
                        className="accent-red-500"
                    />
                    <label htmlFor="use3DSecure" className="text-zinc-800 text-base md:text-lg font-semibold">
                        3D secure ile ödemek istiyorum
                    </label>
                
                    <button
                        onClick={completePayment}
                        className="px-6 py-4 bg-green-500 rounded-full text-white text-lg md:text-xl font-bold hover:bg-green-600"
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