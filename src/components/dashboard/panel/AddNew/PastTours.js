import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const PastTours = () => {
    const [tours, setTours] = useState([
        { id: 1, name: 'Kapadokya Macerası', participants: [
          { name: "Ali Veli", phone: "1234567890", payment: 200 },
          { name: "Ayşe Yılmaz", phone: "0987654321", payment: 300 }
        ], price: 1500 },
        { id: 2, name: 'Ege Kıyıları Gezisi', participants: [
          { name: "Mehmet Öz", phone: "1122334455", payment: 250 }
        ], price: 2500 },
        { id: 3, name: 'Mardin Gezisi', participants: [
          { name: "Deniz Arda", phone: "5544332211", payment: 350 }
        ], price: 2500 }
    ]);

    const exportToExcel = (tour) => {
        const ws = XLSX.utils.json_to_sheet(tour.participants, {
            header: ["name", "phone", "payment"],  // Sütun başlıklarını belirt
            skipHeader: false  // Başlıkları dosyaya dahil et
        });
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Participants");
        XLSX.writeFile(wb, `${tour.name.replace(/ /g, '_')}_Participants.xlsx`);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-xl font-bold mb-4">Geçmiş Turlar Liste</h1>
            <table className="min-w-full leading-normal">
                <thead>
                    <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Tur Adı
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Katılımcılar
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Fiyat
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Seçenekler
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {tours.map(tour => (
                        <tr key={tour.id}>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                {tour.name}
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                {tour.participants.length}
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                {tour.price}₺
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <button onClick={() => exportToExcel(tour)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Excel'e Aktar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PastTours;
