import React, { useEffect, useRef, useState } from 'react';


const Purchase2 = () => {


    const [formState, setFormState] = useState({
        ad: '',
        soyad: '',
        telefon: '',
        email: '',
        sifre: '',
        sifreTekrar: '',
        faturaAdresi: '',
        kimlikNo: '',
        kurumsal: false,
        rezervasyonMesaji: '',
      });
    
      // Input değişikliklerini işlemek için bir fonksiyon
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormState(prevState => ({
          ...prevState,
          [name]: type === 'checkbox' ? checked : value,
        }));
      };
    
      // Formu göndermek için bir fonksiyon
      const handleSubmit = (e) => {
        e.preventDefault();
        // Form gönderme işlemleri burada yapılacak
        console.log(formState);
      };
    
      return (
        <form onSubmit={handleSubmit} className=" space-y-6 p-6 bg-white shadow rounded-lg w-full lg:w-1/2 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <input
              type="text"
              name="ad"
              value={formState.ad}
              onChange={handleChange}
              placeholder="Adınız"
              className="border-2 border-gray-300 p-3 rounded-md "
            />
            <input
              type="text"
              name="soyad"
              value={formState.soyad}
              onChange={handleChange}
              placeholder="Soyadınız"
              className="border-2 border-gray-300 p-3 rounded-md"
            />
            <input
              type="tel"
              name="telefon"
              value={formState.telefon}
              onChange={handleChange}
              placeholder="Cep Telefon Numaranız"
              className="border-2 border-gray-300 p-3 rounded-md"
            />
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              placeholder="E-mail Adresiniz"
              className="border-2 border-gray-300 p-3 rounded-md"
            />
            <input
              type="password"
              name="sifre"
              value={formState.sifre}
              onChange={handleChange}
              placeholder="Bir Şifre Belirleyiniz"
              className="border-2 border-gray-300 p-3 rounded-md"
            />
            <input
              type="password"
              name="sifreTekrar"
              value={formState.sifreTekrar}
              onChange={handleChange}
              placeholder="Şifreyi Tekrar Giriniz"
              className="border-2 border-gray-300 p-3 rounded-md"
            />
            <input
              type="text"
              name="faturaAdresi"
              value={formState.faturaAdresi}
              onChange={handleChange}
              placeholder="Fatura Adresi"
              className="border-2 border-gray-300 p-3 rounded-md"
            />
            <input
              type="text"
              name="kimlikNo"
              value={formState.kimlikNo}
              onChange={handleChange}
              placeholder="Kimlik No"
              className="border-2 border-gray-300 p-3 rounded-md"
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="kurumsal"
              checked={formState.kurumsal}
              onChange={handleChange}
              className="h-5 w-5"
            />
            <label htmlFor="kurumsal" className="ml-2">Kurumsal?</label>
          </div>
          <textarea
            name="rezervasyonMesaji"
            value={formState.rezervasyonMesaji}
            onChange={handleChange}
            placeholder="Rezervasyon Mesajınız (eğer varsa...)"
            className="border-2 border-gray-300 p-3 rounded-md h-24"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Gönder
          </button>
        </form>
      );


}; export default Purchase2;
