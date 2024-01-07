import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { persistor } from '../redux/store';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
 const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [deletePassword, setDeletePassword] = useState('');  // Hesap silmek için şifre
  const user = useSelector((state) => state.login?.user);
  useEffect(() => {
    if (user) {
      setEmail(user.email);
      setName(user.name); 
    }
  }, [user]); 

  const handleDeleteAccount = async () => {
    try {
      await axios.delete('http://localhost:3000/delete', { data: { email, password: deletePassword } });
      alert('Hesap başarıyla silindi.');
    } catch (error) {
      alert('Hesap silinirken bir hata oluştu.');
    }
    persistor.purge();
    window.location.href = "/";

  };

  const handleChangePassword = async () => {
    try {
      await axios.post('http://localhost:3000/change-password', { email, oldPassword, newPassword });
      alert('Şifre başarıyla değiştirildi.');
    } catch (error) {
      alert('Şifre değiştirilirken bir hata oluştu.');
    }
    window.location.reload();

  };

  return (
    <div className="container mx-auto p-4">
<h1 className="uppercase text-2xl text-gray-800 font-semibold border-b-2 border-blue-500 inline-block p-2">
  {user.accountType}
</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-10">Profil Düzenle</h2>
      
      <section className="mb-8">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            İsim
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="İsim"/>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
        </div>
      </section>

      {/* Şifre Değiştirme Bölümü */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Şifre Değiştir</h3>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="oldPassword">
            Eski Şifre
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="oldPassword" type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} placeholder="******************"/>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newPassword">
            Yeni Şifre
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="newPassword" type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="******************"/>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleChangePassword}>
          Şifre Değiştir
        </button>
      </section>

{/* Hesap Silme Bölümü */}
<section className="mb-8">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Hesabı Sil</h3>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="deleteEmail">
            Email
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="deleteEmail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="deletePassword">
            Şifre
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="deletePassword" type="password" value={deletePassword} onChange={(e) => setDeletePassword(e.target.value)} placeholder="Şifrenizi giriniz"/>
        </div>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleDeleteAccount}>
          Hesabı Sil
        </button>
      </section>
    </div>
  );
};

export default EditProfile;
