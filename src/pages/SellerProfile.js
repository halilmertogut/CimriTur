import React, { useState, useEffect } from 'react';

// Bireysel Profil Bilgisi Bileşeni
const ProfileInfo = ({ label, value }) => (
  <div className="flex items-center justify-between py-2 px-4">
    <span className="text-gray-600 text-sm">{label}</span>
    <span className="font-medium text-md">{value}</span>
  </div>
);

// Profil Bilgi Kartı Bileşeni
const ProfileInfoCard = ({ profileData }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-wrap justify-between md:flex-nowrap font-montserrat">
    <div className="md:flex-shrink-0">
      <img className="w-full h-48 object-cover md:w-48" src={profileData.coverImage} alt="Profil kapak resmi" />
    </div>
    <div className="p-4 flex-1">
      <h3 className="text-lg font-semibold">{profileData.name}</h3>
      <p className="text-sm text-gray-600">{profileData.description}</p>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <ProfileInfo label="Üyelik Süresi" value={profileData.membershipDuration} />
        <ProfileInfo label="Konum" value={profileData.location} />
        <ProfileInfo label="Kurumsal Fatura" value={profileData.corporateInvoice} />
        <ProfileInfo label="Toplam Satılan Turlar" value={profileData.totalToursSold} />
        <ProfileInfo label="Ortalama Onay Süresi" value={profileData.averageApprovalTime} />
        <ProfileInfo label="Kuruluş Tarihi" value={profileData.establishmentDate} />
        <ProfileInfo label="Acenta Sınıfı" value={profileData.agentaClass} />
        <ProfileInfo label="Haftalık Turlar" value={profileData.weeklyTours} />
      </div>
    </div>
  </div>
);

// Bölge Haritası Bileşeni
const TurkeyMap = ({ activeRegion }) => {
  const imagePath = `../src/images/${activeRegion}.png`; // Görsel dizin yolunu kontrol edin

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h3 className="font-semibold mb-2">En Çok Tur Yapılan Bölgeler</h3>
      <img src={imagePath} alt={`${activeRegion} Bölgesi`} className="max-w-full h-auto" />
    </div>
  );
};

// Ana Bileşen
const SellerProfile = () => {
  const [activeRegion, setActiveRegion] = useState('Ege'); // Varsayılan 'Ege'

  const profileData = {
    name: 'CimriTur',
    coverImage: '/images/profile.jpg', // Yolu kontrol edin
    description: 'CimriTur deneyimli rehberler ve zengin tur seçenekleri sunar.',
    membershipDuration: '3 yıl',
    location: 'İstanbul',
    corporateInvoice: 'Mevcut',
    totalToursSold: '150',
    averageApprovalTime: '24 saat',
    establishmentDate: '01.01.2015',
    agentaClass: 'A Sınıfı',
    weeklyTours: '5',
  };

  useEffect(() => {
    // Backend'den en çok tur yapılan bölgeyi alır
    // Örnek API çağrısı (bu kısmı backend'e göre uygulayın)
    // fetch('/api/turlar/enCokTurYapilanBolge')
    //   .then(response => response.json())
    //   .then(data => setActiveRegion(data.region))
    //   .catch(error => console.error('En çok tur yapılan bölgeyi çekerken hata:', error));
  }, []);

  return (
    <div className="container mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold text-center mb-6">CimriTur Satıcı Profili</h2> {/* Başlık */}
      <ProfileInfoCard profileData={profileData} /> {/* Profil Bilgi Kartı */}
      <TurkeyMap activeRegion={activeRegion} /> {/* Türkiye Haritası */}
    </div>
  );
};

export default SellerProfile;
