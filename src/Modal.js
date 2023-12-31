import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, onLogin, onRegister, isRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegister) {
      onRegister(name, email, password);
    } else {
      onLogin(email, password);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
      <div className="relative bg-white rounded-lg shadow-xl p-6 w-full max-w-md m-4">
        <div className="flex justify-between items-center pb-3">
          <p className="text-2xl font-bold">{isRegister ? 'Kayıt Ol' : 'Giriş'}</p>
          <button className="text-black close-modal" onClick={onClose}>&times;</button>
        </div>
        <form onSubmit={handleSubmit}>
          {isRegister && (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-3"
              placeholder="Adınız"
              required
            />
          )}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-3"
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-3"
            placeholder="Şifre"
            required
          />
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition-colors">
            {isRegister ? 'Kayıt Ol' : 'Giriş Yap'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
