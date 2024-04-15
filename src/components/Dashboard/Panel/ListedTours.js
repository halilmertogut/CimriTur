import React from "react";

const ListedTours = ({ tours }) => {
  return (
    <div className="font-montserrat">
      <h2 className="text-2xl font-semibold mb-4">Listelenen Turlar</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tur Türü
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Süre
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Lokasyon
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Bölge
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Fiyat Türü
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Listeleme Türü
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                En Son Değiştirilme Tarihi
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Eylemler
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tours && tours.map((tour) => (
              <tr key={tour.id}>
                <td className="px-6 py-4 whitespace-nowrap">{tour.type}</td>
                <td className="px-6 py-4 whitespace-nowrap">{tour.duration}</td>
                <td className="px-6 py-4 whitespace-nowrap">{tour.location}</td>
                <td className="px-6 py-4 whitespace-nowrap">{tour.region}</td>
                <td className="px-6 py-4 whitespace-nowrap">{tour.priceType}</td>
                <td className="px-6 py-4 whitespace-nowrap">{tour.listPrice}</td>
                <td className="px-6 py-4 whitespace-nowrap">{tour.lastEdit}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-4">
                    <button className="text-indigo-600 hover:text-indigo-900">Detay</button>
                    <button className="text-indigo-600 hover:text-indigo-900">Düzenle</button>
                    <button className="text-indigo-600 hover:text-indigo-900">Fiyat</button>
                    <button className="text-indigo-600 hover:text-indigo-900">Yeni Rezervasyon</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListedTours;
