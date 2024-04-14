import React from 'react';

// Örnek rehber verileri
const guides = [
  {
    name: 'Michelle Burns',
    imageUrl: 'https://via.placeholder.com/150',
    description: "Hi! I'm Michelle. Language lover and tutor of English...",
    highlights: ['1000+ Chats'],
    rating: 4.99,
    reviews: 1915,
    location: 'Scotland but live in Mauritius',
    tutorSince: 2022
  },
  ...Array.from({ length: 9 }).map((_, idx) => ({
    name: `Guide ${idx + 2}`,
    imageUrl: 'https://via.placeholder.com/150',
    description: `I am Guide ${idx + 2}. Passionate about culture and history.`,
    highlights: ['500+ Tours', 'Top-rated Guide'],
    rating: (Math.random() * (5 - 4.5) + 4.5).toFixed(2),
    reviews: Math.floor(Math.random() * 2000),
    location: 'Various Locations',
    tutorSince: 2020 + idx % 3
  }))
];

// GuideCard Komponenti
const GuideCard = ({ guide }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
    <img className="w-full h-40 object-cover" src={guide.imageUrl} alt="Profile" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{guide.name}</div>
      <p className="text-gray-700 text-base truncate">{guide.description}</p>
      <p className="text-gray-600 text-sm">{guide.location}</p>
      <p className="text-gray-600 text-sm">Tutor since {guide.tutorSince}</p>
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
        Schedule trial
      </button>
    </div>
  </div>
);

// Dashboard Komponenti
<<<<<<< Updated upstream
const FreelancePage = () => (
  <div className="container mx-auto p-6">
=======
const Dashboard = () => (
  <div className="container mx-auto p-6 font-montserrat">
>>>>>>> Stashed changes
    <h1 className="text-2xl font-bold text-center mb-6">Freelance Tour Guides</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {guides.map((guide, index) => (
        <GuideCard key={index} guide={guide} />
      ))}
    </div>
  </div>
);

<<<<<<< Updated upstream
export default FreelancePage;
=======
export default Dashboard;
>>>>>>> Stashed changes
