import React, { useState, useEffect } from 'react';


// Individual Profile Information Component
const ProfileInfo = ({ label, value }) => (
  <div className="flex items-center justify-between py-2 px-4">
    <span className="text-gray-600 text-sm">{label}</span>
    <span className="font-medium text-md">{value}</span>
  </div>
);

// Profile Information Card Component
const ProfileInfoCard = ({ profileData }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-wrap justify-between md:flex-nowrap font-montserrat">
    <div className="md:flex-shrink-0">
      <img className="w-full h-48 object-cover md:w-48" src={profileData.coverImage} alt="Profile cover" />
    </div>
    <div className="p-4 flex-1">
      <h3 className="text-lg font-semibold">{profileData.name}</h3>
      <p className="text-sm text-gray-600">{profileData.description}</p>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <ProfileInfo label="Membership Duration" value={profileData.membershipDuration} />
        <ProfileInfo label="Location" value={profileData.location} />
        <ProfileInfo label="Corporate Invoice" value={profileData.corporateInvoice} />
        <ProfileInfo label="Total Tours Sold" value={profileData.totalToursSold} />
        <ProfileInfo label="Average Approval Time" value={profileData.averageApprovalTime} />
        <ProfileInfo label="Establishment Date" value={profileData.establishmentDate} />
        <ProfileInfo label="Agent Class" value={profileData.agentaClass} />
        <ProfileInfo label="Weekly Tours" value={profileData.weeklyTours} />
      </div>
    </div>
  </div>
);

// Region Image Component
const TurkeyMap = ({ activeRegion }) => {
  const imagePath = `../src/images/${activeRegion}.png`; // Path to the images directory

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h3 className="font-semibold mb-2">Top Tour Regions</h3>
      <img src={imagePath} alt={`${activeRegion} Region`} className="max-w-full h-auto" />
    </div>
  );
};

// Main Component
const SellerProfile = () => {
  const [activeRegion, setActiveRegion] = useState('Ege'); // Default to 'Ege'

  const profileData = {
    name: 'CimriTur',
    coverImage: '/images/profile.jpg', // Ensure this path is correct
    description: 'CimriTur offers experienced guides and a rich selection of tours.',
    membershipDuration: '3 years',
    location: 'Istanbul',
    corporateInvoice: 'Available',
    totalToursSold: '150',
    averageApprovalTime: '24 hours',
    establishmentDate: '01.01.2015',
    agentaClass: 'A Class',
    weeklyTours: '5',
  };

  useEffect(() => {
    // Fetch the most toured region from the backend
    // Example API call (you need to implement this part depending on your backend)
    // fetch('/api/tours/mostTouredRegion')
    //   .then(response => response.json())
    //   .then(data => setActiveRegion(data.region))
    //   .catch(error => console.error('Error fetching the most toured region:', error));
  }, []);

  return (
    <div className="container mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold text-center mb-6">CimriTur Seller Profile</h2>
      <ProfileInfoCard profileData={profileData} />
      <TurkeyMap activeRegion={activeRegion} />
    </div>
  );
};

export default SellerProfile;
