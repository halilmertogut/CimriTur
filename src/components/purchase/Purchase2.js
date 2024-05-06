import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Purchase2 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    participants,
    totalCost,
    currency,
    tourName,
    tourImage
  } = location.state || {
    participants: 1,
    totalCost: 0,
    currency: 'USD',
    tourName: '',
    tourImage: ''
  };

  const [formStates, setFormStates] = useState([]);
  const [commonDetails, setCommonDetails] = useState({
    faturaAdresi: '',
    rezervasyonMesaji: ''
  });

  useEffect(() => {
    // Her katılımcı için form durumunu başlat
    setFormStates(Array(participants).fill().map(() => ({
      ad: '',
      soyad: '',
      telefon: '',
      email: '',
      kimlikNo: '',
      kurumsal: false
    })));
  }, [participants]);

  const handleParticipantChange = (index, e) => {
    const { name, value, type, checked } = e.target;
    const updatedForms = [...formStates];
    updatedForms[index] = { ...updatedForms[index], [name]: type === 'checkbox' ? checked : value };
    setFormStates(updatedForms);
  };

  const handleCommonDetailsChange = (e) => {
    const { name, value } = e.target;
    setCommonDetails({
      ...commonDetails,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isFormFilled = formStates.every(form =>
        Object.entries(form).every(([key, value]) => {
            // Check if the value is a string and not empty after trimming whitespace
            return typeof value === 'string' ? value.trim() !== '' : true;
        })
    ) && commonDetails.faturaAdresi.trim() !== '' && commonDetails.rezervasyonMesaji.trim() !== '';

    if (!isFormFilled) {
      alert('Lütfen tüm alanları doldurunuz.');
    } else {
      navigate('/purchase-3', {
        state: {
          participants,
          totalCost,
          currency,
          tourName,
          tourImage,
          formDetails: formStates,
          commonDetails: commonDetails
        }
      });
    }
};


  return (
    <form onSubmit={handleSubmit} className="mt-8 font-montserrat space-y-6 p-6 bg-white shadow rounded-lg w-full lg:w-1/2 mx-auto">
      {formStates.map((form, index) => (
        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <h3 className="col-span-2"><b>Katılımcı {index + 1}</b></h3>
          <input type="text" name="ad" value={form.ad} onChange={e => handleParticipantChange(index, e)} placeholder="Adınız" className="border-2 border-gray-300 p-3 rounded-md"/>
          <input type="text" name="soyad" value={form.soyad} onChange={e => handleParticipantChange(index, e)} placeholder="Soyadınız" className="border-2 border-gray-300 p-3 rounded-md"/>
          <input type="tel" name="telefon" value={form.telefon} onChange={e => handleParticipantChange(index, e)} placeholder="Telefon Numaranız" className="border-2 border-gray-300 p-3 rounded-md"/>
          <input type="email" name="email" value={form.email} onChange={e => handleParticipantChange(index, e)} placeholder="E-posta Adresiniz" className="border-2 border-gray-300 p-3 rounded-md"/>
          <input type="text" name="kimlikNo" value={form.kimlikNo} onChange={e => handleParticipantChange(index, e)} placeholder="Kimlik Numarası" className="border-2 border-gray-300 p-3 rounded-md"/>
          <div className="flex items-center col-span-2">
            <input type="checkbox" name="kurumsal" checked={form.kurumsal} onChange={e => handleParticipantChange(index, e)} className="h-5 w-5"/>
            <label htmlFor="kurumsal" className="ml-2">Kurumsal mı?</label>
          </div>
        </div>
      ))}
      <div className="mt-4">
        <input
          type="text"
          name="faturaAdresi"
          value={commonDetails.faturaAdresi}
          onChange={handleCommonDetailsChange}
          placeholder="Fatura Adresi"
          className="w-full border-2 border-gray-300 p-3 rounded-md"
          />
          <textarea
            name="rezervasyonMesaji"
            value={commonDetails.rezervasyonMesaji}
            onChange={handleCommonDetailsChange}
            placeholder="Rezervasyon Mesajınız (varsa)"
            className="form-textarea w-full border-2 border-gray-200 rounded py-2 px-4 mt-2"
            rows="4"
          ></textarea>
        </div>
        <div className="flex justify-between mt-4">
        <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded-lg">Sonraki Adım</button>
        <button type="button" onClick={() => navigate(-1)} className="py-2 px-4 bg-red-500 text-white rounded-lg">Geri</button>
        </div>
      </form>
    );
  };
  
  export default Purchase2;
  
