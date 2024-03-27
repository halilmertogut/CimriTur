import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate hook'unu import edin


const Purchase2 = () => {

  const navigate = useNavigate(); // useNavigate hook'unu kullanmak için

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

  const handleNextStep = () => {

        // Ödeme yöntemi seçilmişse purchase2 sayfasına yönlendir
        navigate('/purchase1'); // Buradaki yol uygulamanızdaki yol ile eşleşmelidir
    
};

  return (

    <form onSubmit={handleSubmit} className=" mt-8 font-montserrat space-y-6 p-6 bg-white shadow rounded-lg w-full lg:w-1/2  mx-auto">
      <div className="flex justify-between items-center p-4 bg-white">
        {/* Step 1 */}

        <div className="flex flex-col items-center opacity-40">
          <div className="w-9 h-9 bg-zinc-100 rounded-full flex justify-center items-center mb-1">
            <span className="text-zinc-800 text-xl font-semibold">1</span>
          </div>
          <div className="text-center text-zinc-800 text-xl font-normal">Ödeme Yöntemi</div>
        </div>
        {/* Step 2 */}
        {/* Horizontal line */}
        <div className="flex-grow h-1 bg-zinc-100 mx-2" />
        <div className="flex flex-col items-center">
          <div className="w-9 h-9 bg-red-600 rounded-full flex justify-center items-center mb-1">
            <span className="text-white text-xl font-semibold">2</span>
          </div>
          <div className="text-center text-red-500 text-xl font-semibold">İletişim Bilgileriniz</div>
        </div>
        {/* Horizontal line */}
        <div className="flex-grow h-1 bg-zinc-100 mx-2" />

        {/* Step 3 */}
        <div className="flex flex-col items-center opacity-40">
          <div className="w-9 h-9 bg-zinc-100 rounded-full flex justify-center items-center mb-1">
            <span className="text-zinc-800 text-xl font-semibold">3</span>
          </div>
          <div className="text-center text-zinc-800 text-xl font-normal">Ödeme</div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        <input
          type="text"
          name="ad"
          value={formState.ad}
          onChange={handleChange}
          placeholder="Adınız"
          className="border-2 border-gray-300 p-3 rounded-md  "
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
        <label htmlFor="kurumsal" className="ml-2">Kurumsal</label>
      </div>
      <div class="flex items space-x-2 items-center  ">
        <textarea class="form-textarea border-2 border-gray-200 rounded w-full py-2 px-4 resize-none " rows="4" placeholder="Rezervasyon Mesajınız (eğer varsa...)"></textarea>
        <div>
          <button class="bg-red-500 text-white w-32  px-4 py-2 rounded hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">Ödeme</button>
          <button class="bg-red-500 text-white w-32  px-4 py-2 rounded hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 mt-2"
           onClick={handleNextStep}
          >Geri </button>
        </div>
      </div>


    </form>
  );


}; export default Purchase2;
