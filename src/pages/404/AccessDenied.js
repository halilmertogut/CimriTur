import React from 'react';

const AccessDenied = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-400 to-gray-600 text-center text-white p-5">
      <h1 className="text-4xl font-extrabold mb-4">Erişim Engellendi</h1>
      <p className="text-xl mb-8">Üzgünüz, bu sayfaya erişim izniniz bulunmamaktadır.</p>
      <button
        onClick={() => window.history.back()}
        className="text-xl bg-blue-500 hover:bg-blue-700 px-10 py-3 rounded-lg transition duration-300 ease-in-out"
      >
        Geri Dön
      </button>
    </div>
  );
};

export default AccessDenied;
