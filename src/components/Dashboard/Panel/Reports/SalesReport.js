import React, { useState } from 'react';

// Tailwind CSS styled report card component
const ReportCard = ({ title, value }) => (
  <div className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
    <span>{title}</span>
    <span className="text-lg font-semibold">{value}</span>
  </div>
);

// Main SalesReport component
const SalesReport = () => {
  const [period, setPeriod] = useState('Son 30 Gün');
  const [product, setProduct] = useState('Tüm Ürünler');
  const [collectionStatus, setCollectionStatus] = useState('Tahsilat Durumu');
  const [paymentMethod, setPaymentMethod] = useState('Ödeme Yöntemi');
  const [channelAndUser, setChannelAndUser] = useState('Kanal ve Kullanıcı');
  const [approvedReservations, setApprovedReservations] = useState('Onaylanan Rezervasyonlar');
  const [recordCount, setRecordCount] = useState(25);

  const reportCardsData = [
    { title: 'Dönem Satışları', value: '0 ₺' },
  ];

  // Simulated download function
  const handleExport = (format) => {
    console.log(`Downloading: ${format}`);
    // Actual download implementation needed here
  };

  // Simulated print function
  const handlePrint = () => {
    console.log('Printing');
    // Actual print dialog implementation needed here
  };

  const headers = ["#", "PNR", "ÜRÜN", "MÜŞTERİ", "TUTAR", "REZ. TARİHİ", "GİRİŞ TARİHİ", "PAX", "ODA", "ÖDEME", "KANAL"];

  return (
    <div className="p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {reportCardsData.map((card, index) => (
          <ReportCard key={index} title={card.title} value={card.value} />
        ))}
      </div>
      <div className="font-montserrat flex flex-wrap gap-4 items-center bg-white p-4 shadow rounded">
        <div className="flex flex-wrap gap-2 items-center">
          {/* Multiple selects for filtering options */}
          <select className="border p-2 rounded shadow" value={period} onChange={e => setPeriod(e.target.value)}>
            <option>Son 30 Gün</option>
            <option>Son 60 Gün</option>
            <option>Son 90 Gün</option>
            <option>Son 6 Ay</option>
            <option>Son 1 Yıl</option>
          </select>
          <select className="border p-2 rounded shadow" value={product} onChange={e => setProduct(e.target.value)}>
            <option>Tüm Ürünler</option>
            <option>Tüm Otel</option>
            <option>Tüm Biletler</option>
          </select>
          <select className="border p-2 rounded shadow" value={collectionStatus} onChange={e => setCollectionStatus(e.target.value)}>
            <option>Tahsilat Durumu</option>
            <option>Ödeme Tamamlananlar </option>
            <option>Ödeme Beklenenler </option>
            <option>Tüm Kayıtlar </option>
          </select>
          <select className="border p-2 rounded shadow" value={paymentMethod} onChange={e => setPaymentMethod(e.target.value)}>
            <option>Ödeme Yöntemi</option>
            <option>Nakit</option>
            <option>B2B</option>
          </select>
          <select className="border p-2 rounded shadow" value={channelAndUser} onChange={e => setChannelAndUser(e.target.value)}>
            <option>Kanal ve Kullanıcı</option>
            <option>Ofis </option>
            <option>Web</option>
          </select>
          <select className="border p-2 rounded shadow" value={approvedReservations} onChange={e => setApprovedReservations(e.target.value)}>
            <option>Onaylanan Rezervasyonlar</option>
            <option>Onay Bekleyenler</option>
            <option>İptal Edilenler</option>
          </select>
        </div>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold p-2 rounded shadow">
          KAYDET
        </button>
      </div>
      <div className="p-4 bg-white shadow rounded-lg">
        <div className="mb-4">
          <span>Sayfada </span>
          <select className="border p-2 rounded shadow" value={recordCount} onChange={e => setRecordCount(Number(e.target.value))}>
            <option>25</option>
            <option>50</option>
            <option>100</option>
          </select>
          <span> kayıt göster</span>
        </div>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full">
            <thead className="text-black">
              <tr className="flex w-full">
                {headers.map((header, index) => (
                  <th key={index} className="flex-grow text-left py-3 px-4 uppercase font-semibold text-sm">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {/* Data rows will be rendered here */}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div>
            <button onClick={() => handleExport('Excel')} className="bg-green-500 hover:bg-green-600 text-white font-bold p-2 rounded shadow">
              Excel
            </button>
            <button onClick={handlePrint} className="bg-blue-500 hover:bg-blue-600 text-white font-bold p-2 rounded shadow ml-4">
              Yazdır
            </button>
          </div>
        </div>
        <div className="flex justify-between">
          <button className="border p-2 rounded shadow">Önceki</button>
          <button className="border p-2 rounded shadow">Sonraki</button>
        </div>
      </div>
    </div>
  );
};

export default SalesReport;
