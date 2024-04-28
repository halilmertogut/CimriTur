import React, { useState } from 'react';

const UserFreezeModal = ({ isOpen, onClose, onFreeze }) => {
  const [days, setDays] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h3 className="text-lg font-bold mb-4">Hesabı Dondur</h3>
        <p className="mb-2">Hesabı ne kadar süre dondurmak istiyorsunuz?</p>
        <input
          type="number"
          placeholder="Gün sayısı girin"
          value={days}
          onChange={(e) => setDays(e.target.value)}
          className="p-2 border rounded mb-4"
        />
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
          >
            İptal Et
          </button>
          <button
            onClick={() => {
              onFreeze(days);
              onClose();
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Dondur
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserFreezeModal;
