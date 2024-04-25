import React, { useState } from "react";

const CancelTour = ({ isOpen, onClose, tour, user }) => {
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [cancellationConfirmed, setCancellationConfirmed] = useState(false);

    if (!isOpen || !tour || !user) return null;  // Ensure the component is rendered only when needed

    // Format dates for display
    const startDate = new Date(tour.startDate).toLocaleDateString('en-US');
    const endDate = new Date(tour.endDate).toLocaleDateString('en-US');

    const handleCancelConfirmation = () => {
        setShowConfirmation(true);
    };

    const confirmCancellation = () => {
        // Here you would typically handle the actual cancellation logic
        setCancellationConfirmed(true);
        setShowConfirmation(false);
    };

    const handleClose = () => {
        setShowConfirmation(false);
        setCancellationConfirmed(false);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg max-w-lg w-full">
                <button onClick={handleClose} className="absolute top-2 right-2 text-lg font-bold">&times;</button>
                {!cancellationConfirmed ? (
                    <>
                        <h2 className="text-lg font-bold">Sayın {user.firstName} {user.lastName},</h2>
                        <p>Rezervasyonunuz aşağıdaki gibidir:</p>
                        <div className="p-4 bg-gray-200 rounded-lg my-2">
                            <p><strong>Otel Bilgileri:</strong> {tour.hotelName} - {tour.hotelFeatures}</p>
                            <p>{tour.nights} gece, {tour.adults} yetişkin, {tour.children} çocuk</p>
                            <p><strong>Tur Başlangıç / Bitiş Tarihi:</strong> {startDate} - {endDate}</p>
                            <p><strong>Rezervasyon No:</strong> {tour.reservationNo}</p>
                            <p><strong>Oda Tipi:</strong> {tour.roomType}</p>
                            <p><strong>Satın Alma Tarihi:</strong> {tour.purchaseDate}</p>
                        </div>
                        {showConfirmation ? (
                            <div className="absolute inset-0 bg-white bg-opacity-90 flex flex-col items-center justify-center">
                                <p className="mb-4 text-lg font-semibold">Turu iptal etmek istediğinize emin misiniz?</p>
                                <div className="flex justify-center gap-3">
                                    <button onClick={confirmCancellation} className="px-4 py-2 bg-green-500 text-white rounded">Evet</button>
                                    <button onClick={() => setShowConfirmation(false)} className="px-4 py-2 bg-red-500 text-white rounded">Hayır</button>
                                </div>
                            </div>
                        ) : (
                            <div className="flex justify-end gap-3">
                                <button onClick={handleCancelConfirmation} className="px-4 py-2 bg-red-500 text-white rounded">İptal Et</button>
                                <button onClick={handleClose} className="px-4 py-2 bg-gray-300 rounded">Vazgeç</button>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="text-center p-4">
                        <h3 className="text-lg font-bold">İptal talebiniz başarıyla iletilmiştir.</h3>
                        <button onClick={handleClose} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">OK</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CancelTour;
