import React from 'react';

const Support = () => {
    const tickets = [
        {
            id: 1234,
            issue: "Giriş Sorunu",
            description: "Kullanıcı doğru bilgilerine rağmen giriş yapamıyor.",
            status: "Açık",
            submittedOn: "2024-04-16"
        },
        {
            id: 1235,
            issue: "Ödeme İşlenmedi",
            description: "Ödeme yapıldı fakat hesapta yansıtılmadı.",
            status: "Çözüldü",
            submittedOn: "2024-04-15",
            resolution: "Manuel doğrulama sonrası ödeme işlendi."
        },
        {
            id: 1236,
            issue: "Tur İptali Talebi",
            description: "Kullanıcı, rezerve edilmiş bir turun iptalini istiyor.",
            status: "Onay Bekliyor",
            submittedOn: "2024-04-14"
        }
    ];

    
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-6">Destek Talepleri</h1>
            <ul className="space-y-4">
                {tickets.map(ticket => (
                    <li key={ticket.id} className="p-4 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">Talep #{ticket.id} - {ticket.issue}</h3>
                        <p className="text-gray-600">{ticket.description}</p>
                        <p className="text-gray-500">Durum: <span className={`font-semibold ${ticket.status === 'Açık' ? 'text-red-500' : ticket.status === 'Onay Bekliyor' ? 'text-yellow-500' : 'text-green-500'}`}>{ticket.status}</span></p>
                        <p className="text-gray-500">Gönderildiği tarih: {ticket.submittedOn}</p>
                        {ticket.resolution && <p className="text-gray-500">Çözüm: {ticket.resolution}</p>}
                        {ticket.status === 'Onay Bekliyor' && <p className="text-gray-500">Onaydan {new Date().getDate() - new Date(ticket.submittedOn).getDate()} gün geçti</p>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Support;
