import React, { useState } from 'react';

const AgencySignUp = () => {
  const [formState, setFormState] = useState({
    companyName: '',
    authorizedSignatory: '',
    companyEmail: '',
    companyPhone: '',
    authorizedMobile: '',
    companyTitle: '',
    city: '',
    district: '',
    taxNumber: '',
    taxOffice: '',
    invoiceAddress: '',
    domainName: '',
    adminEmail: '',
    adminPassword: '',
    confirmAdminPassword: '',
    packageType: '',
    packageDuration: '',
    referenceCode: '', // Optional field
    agreements: {
      salesContract: false,
      privacyPolicy: false,
      kvkk: false // Assume KVKK is similar to GDPR
    }
  });

  const fieldLabels = {
    companyName: 'Şirket İsmi',
    authorizedSignatory: 'Yetkili Kişi',
    companyEmail: 'E-Posta Adresi',
    companyPhone: 'Telefon Numarası',
    authorizedMobile: 'Yetkili Kişinin Cep Telefonu',
    companyTitle: 'Şirket Ünvanı',
    city: 'İl',
    district: 'İlçe',
    taxNumber: 'Vergi Numarası',
    taxOffice: 'Vergi Dairesi',
    invoiceAddress: 'Fatura Adresi',
    domainName: 'Alan Adı',
    adminEmail: 'Yönetici E-Posta',
    adminPassword: 'Yönetici Şifresi',
    confirmAdminPassword: 'Şifreyi Onayla',
    packageType: 'Paket Tipi',
    packageDuration: 'Paket Süresi',
    referenceCode: 'Referans Kodu', // Optional
    salesContract: 'Satış Sözleşmesi',
    privacyPolicy: 'Gizlilik Politikası',
    kvkk: 'KVKK Uyumu'
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormState(prev => ({
        ...prev,
        agreements: {
          ...prev.agreements,
          [name]: checked
        }
      }));
    } else {
      setFormState(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!Object.values(formState).every(value => (value !== '' || typeof value === 'boolean'))) {
      alert('Lütfen tüm zorunlu alanları doldurunuz.');
      return;
    }
    if (formState.adminPassword !== formState.confirmAdminPassword) {
      alert('Girilen şifreler birbiriyle uyuşmuyor.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/agency/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState)
      });

      if (response.ok) {
        const result = await response.json();
        alert('Kayıt başarıyla tamamlandı.');
        console.log(result);
      } else {
        throw new Error('Acenta kaydı başarısız oldu.');
      }
    } catch (error) {
      console.error('Form gönderimi sırasında bir hata oluştu:', error);
      alert('Form gönderimi sırasında bir hata oluştu.');
    }
  };

  return (
    <div className="container mx-auto pt-10 font-montserrat sm:w-full md:w-3/4 lg:w-1/2 mt-10 bg-white shadow-2xl p-20 rounded-xl">
      <h1 className="text-center font-bold text-3xl mb-10">Acenta Kayıt Formu</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto mt-10 space-y-6">
        {Object.keys(formState).map(key => {
          if (typeof formState[key] === 'object') {
            return Object.keys(formState[key]).map(subKey => (
              <div className="flex items-center justify-between" key={subKey}>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={subKey}>
                  {fieldLabels[subKey]}
                </label>
                <input
                  type="checkbox"
                  id={subKey}
                  name={subKey}
                  checked={formState.agreements[subKey]}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
              </div>
            ));
          }
          return (
            <div className="mb-6" key={key}>
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={key}>
                {fieldLabels[key]}
              </label>
              <input
                type={key.includes('Password') || key.includes('password') ? 'password' : 'text'}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id={key}
                name={key}
                placeholder={fieldLabels[key]}
                value={formState[key]}
                onChange={handleChange}
                required={!['referenceCode', 'confirmAdminPassword'].includes(key)}
              />
            </div>
          );
        })}
        <div className="flex justify-center mt-6">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
            Kayıt Ol
          </button>
        </div>
      </form>
    </div>
  );
};

export default AgencySignUp;
