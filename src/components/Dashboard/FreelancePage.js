import React from 'react';

// Örnek rehber verileri
const guides = [
  {
    name: 'Michelle Burns',
    imageUrl: 'https://via.placeholder.com/150',
    description: "MERHABA! Ben Ali....",
    highlights: ['1000+ oylanma'],
    rating: 4.99,
    reviews: 1915,
    location: 'Ankara`da yaşıyorum. İstanbul`a sürekli olarak seyehat ediyorum.',
    tutorSince: 2022
  },
  ...Array.from({ length: 9 }).map((_, idx) => ({
    name: `Rehber ${idx + 2}`,
    imageUrl: 'https://via.placeholder.com/150',
    description: `Ben Rehber ${idx + 2}. Kültür ve tarihe meraklı.`,
    highlights: ['500+ Tur', 'En Beğenilen Rehber'],
    rating: (Math.random() * (5 - 4.5) + 4.5).toFixed(2),
    reviews: Math.floor(Math.random() * 2000),
    location: 'Lokasyonlar',
    tutorSince: 2020 + idx % 3
  }))
];

// GuideCard Komponenti
const GuideCard = ({ guide }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4 font-montserrat">
    <img className="w-full h-40 object-cover" src={guide.imageUrl} alt="Profile" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{guide.name}</div>
      <p className="text-gray-700 text-base truncate">{guide.description}</p>
      <p className="text-gray-600 text-sm">{guide.location}</p>
      <p className="text-gray-600 text-sm">{guide.tutorSince}'den beri rehber</p>
    </div>
    <div className="px-6 pt-4 pb-2">
      {guide.highlights.map((highlight, index) => (
        <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {highlight}
        </span>
      ))}
    </div>
    <div className="px-6 py-4">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full">
        Görüşme Zamanı Seç
      </button>
    </div>
  </div>
);

// Dashboard Komponenti
const FreelancePage = () => (
  <div className="container mx-auto p-6 font-montserrat">
    <h1 className="text-2xl font-bold text-center mb-6">Freelance Tur Rehberliği</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {guides.map((guide, index) => (
        <GuideCard key={index} guide={guide} />
      ))}
    </div>
  </div>
);

export default FreelancePage;
