import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const AgencyTotalActions = () => {
    const { agencyId } = useParams();
    const [agencyDetails, setAgencyDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // API'den acenta bilgilerini çekme simülasyonu
        const fetchAgencyDetails = async () => {
            setLoading(true);
            try {
                // Bu kısım gerçek bir API kullanılacaksa düzenlenmelidir.
                const response = await fetch(`https://api.example.com/agencies/${agencyId}`);
                const data = await response.json();
                setAgencyDetails(data);
            } catch (error) {
                console.error('Failed to fetch agency details:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchAgencyDetails();
    }, [agencyId]);

    if (loading) {
        return <div>Yükleniyor...</div>;
    }

    if (!agencyDetails) {
        return <div>Acenta bilgisi bulunamadı.</div>;
    }

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">{agencyDetails.name} Acenta Detayları</h1>
            <div className="bg-white shadow rounded-lg p-4 flex flex-col md:flex-row items-center">
                <img src={agencyDetails.logoUrl} alt="Acenta Logosu" className="w-40 h-40 object-cover rounded-full mx-auto md:mx-0 md:mr-6" />
                <div className="mt-4 md:mt-0">
                    <p><strong>Acenta Adı:</strong> {agencyDetails.name}</p>
                    <p><strong>E-posta:</strong> {agencyDetails.email}</p>
                    <p><strong>Telefon:</strong> {agencyDetails.phone}</p>
                    <p><strong>Konum:</strong> {agencyDetails.location}</p>
                    <p><strong>Toplam Satılan Tur Sayısı:</strong> {agencyDetails.totalSales}</p>
                    <p><strong>En Çok Ziyaret Edilen Bölge:</strong> {agencyDetails.mostVisitedRegion}</p>
                    <p><strong>En Son Online Olma Zamanı:</strong> {new Date(agencyDetails.lastOnline).toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
};

export default AgencyTotalActions;
