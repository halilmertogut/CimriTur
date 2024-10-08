import React, { useState } from 'react';

const TourCategories = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Ege Turu', path: '/turlar/ege-paketleri', parent: '---', dateAdded: '03/05/2023', rank: '2', language: 'TR', count: 7 },
    { id: 2, name: 'Karadeniz Turu', path: '/turlar/karadeniz-paketleri', parent: '---', dateAdded: '03/05/2023', rank: '3', language: 'TR', count: 5 },
    { id: 3, name: 'Akdeniz Turu', path: '/turlar/akdeniz-paketleri', parent: '---', dateAdded: '03/05/2023', rank: '4', language: 'TR', count: 8 },
    { id: 4, name: 'Doğu Anadolu Turu', path: '/turlar/doğuanadolu-paketleri', parent: '---', dateAdded: '03/05/2023', rank: '5', language: 'TR', count: 9 },
    { id: 5, name: 'Güney Doğu Anadolu Turu', path: '/turlar/güneydoğu-paketleri', parent: '---', dateAdded: '03/05/2023', rank: '2', language: 'TR', count: 5 },
    { id: 6, name: 'İç Anadolu Turu', path: '/turlar/iç-anadolu-paketleri', parent: '---', dateAdded: '03/05/2023', rank: '2', language: 'TR', count: 3 },
    { id: 7, name: 'Marmara Turu', path: '/turlar/marmama-paketleri', parent: '---', dateAdded: '03/05/2023', rank: '2', language: 'TR', count: 3 },

  ]);
  const [adding, setAdding] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editFormData, setEditFormData] = useState({ name: '', path: '', parent: '', dateAdded: '', rank: '', language: '', count: 0 });

  const handleAddClick = () => {
    setAdding(true);
    setEditingId(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveNewCategory = () => {
    const newId = categories.reduce((acc, cur) => Math.max(acc, cur.id), 0) + 1;
    setCategories([...categories, { ...editFormData, id: newId }]);
    setAdding(false);
    setEditFormData({ name: '', path: '', parent: '', dateAdded: '', rank: '', language: '', count: 0 });
  };

  const handleCancel = () => {
    setAdding(false);
    setEditingId(null);
    setEditFormData({ name: '', path: '', parent: '', dateAdded: '', rank: '', language: '', count: 0 });
  };

  const handleDelete = (id) => {
    setCategories(categories.filter(category => category.id !== id));
  };

  const handleEdit = (category) => {
    setEditingId(category.id);
    setEditFormData(category);
  };

  const handleSaveEdit = () => {
    setCategories(categories.map(category =>
      category.id === editingId ? { ...category, ...editFormData } : category
    ));
    setEditingId(null);
  };

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div className="flex flex-row mb-4 justify-between">
          <h2 className="text-2xl font-semibold leading-tight">Kategoriler</h2>
          <button onClick={handleAddClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            YENİ EKLE
          </button>
        </div>
        {adding && (
          <div className="mb-4">
            <input
              type="text"
              value={editFormData.name}
              onChange={handleInputChange}
              name="name"
              placeholder="Kategori Adı"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            <button onClick={handleSaveNewCategory} className="text-green-600 hover:text-green-800">Kaydet</button>
            <button onClick={handleCancel} className="text-red-600 hover:text-red-800 ml-3">İptal</button>
          </div>
        )}
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Kategori
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Tur Sayısı
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                İşlemler
              </th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {editingId === category.id ? (
                    <input
                      type="text"
                      value={editFormData.name}
                      onChange={handleInputChange}
                      name="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                  ) : (
                    category.name
                  )}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {category.count}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div className="flex justify-start">
                    {editingId === category.id ? (
                      <>
                        <button onClick={handleSaveEdit} className="text-green-600 hover:text-green-800">Kaydet</button>
                        <button onClick={handleCancel} className="text-red-600 hover:text-red-800 mr-3">Vazgeç</button>
                      </>
                    ) : (
                      <>
                        <button onClick={() => handleEdit(category)} className="text-indigo-600 hover:text-indigo-800 mr-3">Düzenle</button>
                        <button onClick={() => handleDelete(category.id)} className="text-red-600 hover:text-red-800">Sil</button>
                      </>
                    )}
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

export default TourCategories;
