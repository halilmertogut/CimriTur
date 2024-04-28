import React, { useState } from 'react';
import { CheckIcon, XIcon } from '@heroicons/react/solid';


// Tur detayları için modal component
const TourDetailsModal = ({ tour, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 font-montserrat ">
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white ">
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

const Approval = () => {

    // State for controlling the visibility of the modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTour, setSelectedTour] = useState(null);
    // Event handler to open modal with selected tour details
    const handleOpenModal = (tour) => {
        setSelectedTour(tour);
        setIsModalOpen(true);
    };
    const [tours, setTours] = useState([
        {
            id: 1,
            name: 'Kapadokya Macera Turu',
            users: [
                { name: 'Ayşe Yılmaz', paymentStatus: 'Başarılı', approvalStatus: false },
            ],
        },
        {
            id: 2,
            name: 'Ege Kıyıları Keşfi',
            users: [
                { name: 'Mehmet Öztürk', paymentStatus: 'Başarısız', approvalStatus: false },
            ],
        },
    ]);

    const approveTour = (tourId, userId) => {
        // Implement approval logic here
        // For demonstration, just toggling approval status
        setTours(tours.map(tour => {
            if (tour.id === tourId) {
                return {
                    ...tour,
                    users: tour.users.map(user => {
                        if (user.name === userId) {
                            return { ...user, approvalStatus: !user.approvalStatus };
                        }
                        return user;
                    }),
                };
            }
            return tour;
        }));
    };

    return (
        <div className="container mx-auto p-4 font-montserrat">
            <h1 className="text-2xl font-bold mb-5">Tur Onayları</h1>
            {tours.map((tour) => (
                <div key={tour.id} className="mb-4">

                    <div className="cursor-pointer">
                        <h2 className="text-xl font-semibold">{tour.name}</h2>
                        <button
                            className="text-blue-500 hover:text-blue-700 underline"
                            onClick={() => handleOpenModal(tour)}
                        >
                            Tur Detayları
                        </button>
                    </div>
                    <div className="mt-2">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Kullanıcı
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Ödeme Durumu
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Onay Durumu
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        İşlem
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {tour.users.map((user) => (
                                    <tr key={user.name}>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <div className="flex items-center">
                                                <div className="ml-3">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {user.name}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className={`text-gray-900 whitespace-no-wrap ${user.paymentStatus === 'Başarılı' ? 'text-green-500' : 'text-red-500'}`}>
                                                {user.paymentStatus}
                                            </p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                {user.approvalStatus ? <CheckIcon className="h-5 w-5 text-green-500" /> : <XIcon className="h-5 w-5 text-red-500" />}
                                            </span>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <button
                                                className="text-indigo-600 hover:text-indigo-900"
                                                onClick={() => approveTour(tour.id, user.name)}
                                            >
                                                Onayla
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ))}
            {selectedTour && (
                <TourDetailsModal
                    tour={selectedTour}
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </div>
    );
};

export default Approval;
