import React from 'react';

// Tailwind CSS stiliyle oluşturulmuş bir rapor kartı bileşeni
const ReportCard = ({ title, value }) => (
    <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
        <span>{title}</span>
        <span className="text-lg font-semibold">{value}</span>
    </div>
);

// Rapor sayfasının ana bileşeni
const SalesReport = () => {
    // Bu örnekte veri statik; gerçek uygulamada bu veriler bir API'den alınabilir.
    const reportCardsData = [
        { title: 'Dönem Satışları', value: '0 ₺' },
        // ... diğer kart verileri
    ];
    // Bu örnekte kullanılacak statik veri
    const data = []; // Gerçekte bu veriler bir API'den gelir

    // İndirme ve yazdırma işlevlerini simüle eden fonksiyonlar
    const handleExport = (format) => {
        console.log(`İndiriliyor: ${format}`);
        // Gerçekte burada veriyi belirtilen formatta indirme işlemi yapılır
    };

    const handlePrint = () => {
        console.log('Yazdırılıyor');
        // Gerçekte burada yazdırma işlemi için bir dialog açılır
    };

    const headers = ["#", "PNR", "ÜRÜN", "MÜŞTERİ", "TUTAR", "REZ. TARİHİ", "GİRİŞ TARİHİ", "PAX", "ODA", "ÖDEME", "KANAL"];

    return (
        <div className="p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {reportCardsData.map((card, index) => (
                    <ReportCard key={index} title={card.title} value={card.value} />
                ))}
            </div>
            <div className="flex flex-wrap gap-4 items-center bg-white p-4 shadow rounded">
                <div className="flex flex-wrap gap-2 items-center">
                    <select className="border p-2 rounded shadow">
                        <option>Son 30 Gün</option>
                        <option>Son 60 Gün</option>
                        <option>Son 90 Gün</option>
                        <option>Son 6 Ay</option>
                        <option>Son 1 Yıl</option>
                        {/* Diğer seçenekler */}
                    </select>
                    <select className="border p-2 rounded shadow">
                        <option>Tüm Ürünler</option>
                        <option>Tüm Otel</option>
                        <option>Tüm Biletler</option>
                        {/* Diğer seçenekler */}
                    </select>
                    <select className="border p-2 rounded shadow">
                        <option>Tahsilat Durumu</option>
                        <option>Ödeme Tamamlananlar </option>
                        <option>Ödeme Beklenenler </option>
                        <option>Tüm Kayıtlar </option>
                        {/* Diğer seçenekler */}
                    </select>
                    <select className="border p-2 rounded shadow">
                        <option>Ödeme Yöntemi</option>
                        <option>Tüm Ödemeler</option>
                        <option>Nakit</option>
                        <option>B2B</option>
                        {/* Diğer seçenekler */}
                    </select>
                    <select className="border p-2 rounded shadow">
                        <option>Kanal ve Kullanıcı</option>
                        <option>Tüm Kullanıcılar</option>
                        <option>Ofis </option>
                        <option>Web</option>
                        {/* Diğer seçenekler */}
                    </select>
                    <select className="border p-2 rounded shadow">
                        <option>Onaylanan Rezervasyonlar</option>
                        <option>Tüm Rezervasyonlar</option>
                        <option>Onay Bekleyenler</option>
                        <option>İptal Edilenler</option>
                        {/* Diğer seçenekler */}
                    </select>
                    <select className="border p-2 rounded shadow">
                        <option>Kayıtlı Raporlar</option>
                        {/* Diğer seçenekler */}
                    </select>
                </div>
                <button className="bg-red-500 hover:bg-sky-500 text-white font-bold p-2 rounded shadow">
                    KAYDET
                </button>


            </div>
            <div className="p-4 bg-white shadow rounded-lg">
                {/* Sayfalama için kaç kayıt gösterileceğini seçme */}
                <div className="mb-4">
                    <span>Sayfada </span>
                    <select className="border p-2 rounded shadow">
                        <option>25</option>
                        <option>50</option>
                        {/* Diğer seçenekler */}
                    </select>

                    <span> kayıt göster</span>
                </div>


                {/* Tablo */}
                <div className="overflow-x-auto mb-4">
                    <table className="min-w-full">
                        {/* Tablo başlığı */}
                        <thead className="text-black">
                            <tr className="flex w-full">
                                {headers.map((header, index) => (
                                    <th
                                        key={index}
                                        className="flex-grow text-left py-3 px-4 uppercase font-semibold text-sm"
                                    >
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">

                        </tbody>
                    </table>
                </div>

                {/* İndirme ve yazdırma butonları */}
                <div className="flex justify-between items-center mb-4 ">
                    <div>
                        <button onClick={() => handleExport('Excel')} className="bg-green-500 hover:bg-green-400 text-white font-bold p-2 rounded shadow">
                            Excel
                        </button>
                        {/* Diğer butonlar benzer şekilde */}

                        <button onClick={handlePrint} className="bg-blue-500 hover:bg-blue-400 text-white font-bold p-2 rounded shadow">
                            Yazdır
                        </button>
                    </div>
                </div>

                {/* Sayfalama butonları */}
                <div className="flex justify-between">
                    <button className="border p-2 rounded shadow">
                        Önceki
                    </button>
                    <button className="border p-2 rounded shadow">
                        Sonraki
                    </button>
                </div>
            </div>


            {/* Diğer UI bileşenleri burada yer alacak. */}
            {/* Örneğin, arama filtreleri, tablo ve sayfalama bileşenleri. */}
            {/* Not: Bu kısımların işlevselliği için ekstra React hookları, durum yönetimi ve event handlerlar gerekebilir. */}
        </div>




    );
};

export default SalesReport;
