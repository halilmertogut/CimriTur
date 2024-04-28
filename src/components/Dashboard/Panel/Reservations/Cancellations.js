import React, { useState } from 'react';
import { CheckIcon, XIcon } from '@heroicons/react/solid';

const TourDetailsModal = ({ tour, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 font-montserrat">
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                <h3 className="text-lg font-bold">Tur Detayları: {tour.name}</h3>
                <ul>
                    <li><strong>Nereden - Nereye:</strong> {tour.from} - {tour.to}</li>
                    <li><strong>Gidiş - Dönüş Tarihleri:</strong> {tour.dates}</li>
                    <li><strong>Toplam Kotası:</strong> {tour.quota}</li>
                    <li><strong>Ulaşım Aracı:</strong> {tour.transport}</li>
                </ul>
                <div className="flex justify-end pt-2">
                    <button
                        className="px-4 py-2 bg-red-500 text-white hover:bg-red-700 rounded"
                        onClick={onClose}
                    >
                        Kapat
                    </button>
                </div>
            </div>
        </div>
    );
};

const CancelReasonModal = ({ isOpen, onClose, onSubmit }) => {
    const [reason, setReason] = useState('');

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 font-montserrat">
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                <h3 className="text-lg font-bold">İptal Sebebi Seçin</h3>
                <div className="my-4">
                    <label className="block mb-2">
                        <input type="radio" value="Kota Yetersizliği" name="reason" onChange={(e) => setReason(e.target.value)} />
                        Kota Yetersizliği
                    </label>
                    <label className="block mb-2">
                        <input type="radio" value="Hava Koşulları" name="reason" onChange={(e) => setReason(e.target.value)} />
                        Hava Koşulları
                    </label>
                    <label className="block mb-2">
                        <input type="radio" value="Ulaşım ve Rehber Problemleri" name="reason" onChange={(e) => setReason(e.target.value)} />
                        Ulaşım ve Rehber Problemleri
                    </label>
                    <label className="block mb-2">
                        <input type="radio" value="Diğer" name="reason" onChange={(e) => setReason(e.target.value)} />
                        Diğer
                    </label>
                </div>
                <div className="flex justify-end">
                    <button className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-700 rounded mr-2" onClick={() => onSubmit(reason)}>
                        Onayla
                    </button>
                    <button className="px-4 py-2 bg-red-500 text-white hover:bg-red-700 rounded" onClick={onClose}>
                        İptal
                    </button>
                </div>
            </div>
        </div>
    );
};

const Cancellations = () => {
    const [selectedTour, setSelectedTour] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [cancelReasonModalOpen, setCancelReasonModalOpen] = useState(false);

    const handleOpenModal = (tour) => {
        setSelectedTour(tour);
        setIsModalOpen(true);
    };

    const handleOpenCancelModal = () => {
        setCancelReasonModalOpen(true);
    };

    const handleCancelTour = (reason) => {
        console.log(`Tur iptal edildi. Sebep: ${reason}`);
        setCancelReasonModalOpen(false);
    };

    const userCancellations = [
        { id: 'uc1', name: 'Kapadokya Macera Turu', user: 'Ayşe Yılmaz', status: 'İptal İsteği', reason: 'Kişisel Sebepler' },
        { id: 'uc2', name: 'Antalya Yaz Turu', user: 'Ali Veli', status: 'İptal İsteği', reason: 'Sağlık Problemleri' }
    ];

    const agencyCancellations = [
        { id: 'ac1', name: 'Ege Kıyıları Keşfi', status: 'Aktif', reason: '' },
        { id: 'ac2', name: 'Marmara Turu', status: 'Aktif', reason: '' }
    ];

    return (
        <div className="container mx-auto p-6 font-montserrat">
            <h1 className="text-2xl font-bold mb-5">İptaller</h1>

            <div className="mb-8">
                <h2 className="text-xl font-semibold my-4">Kullanıcı Kaynaklı İptaller</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead className="bg-gray-800 text-white">
                            <tr>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Tur Adı</th>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Kullanıcı</th>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Durum</th>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Sebep</th>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">İşlem</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            {userCancellations.map((tour) => (
                                <tr key={tour.id}>
                                    <td className="text-left py-3 px-4">{tour.name}</td>
                                    <td className="text-left py-3 px-4">{tour.user}</td>
                                    <td className="text-left py-3 px-4">{tour.status}</td>
                                    <td className="text-left py-3 px-4">{tour.reason}</td>
                                    <td className="text-left py-3 px-4">
                                        <button className="text-indigo-600 hover:text-indigo-800" onClick={handleOpenCancelModal}>
                                            İptal Onayla
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-semibold my-4">Düzenlediğiniz Turlar</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead className="bg-gray-800 text-white">
                            <tr>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Tur Adı</th>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Durum</th>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">İşlem</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            {agencyCancellations.map((tour) => (
                                <tr key={tour.id}>
                                    <td className="text-left py-3 px-4">{tour.name}</td>
                                    <td className="text-left py-3 px-4">{tour.status}</td>
                                    <td className="text-left py-3 px-4">
                                        <button className="text-indigo-600 hover:text-indigo-800" onClick={handleOpenCancelModal}>
                                            İptal Et
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {selectedTour && (
                <TourDetailsModal
                    tour={selectedTour}
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            )}

            <CancelReasonModal
                isOpen={cancelReasonModalOpen}
                onClose={() => setCancelReasonModalOpen(false)}
                onSubmit={handleCancelTour}
            />
        </div>
    );
};

export default Cancellations;
