import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const FreelancerTotalActions = () => {
  const { freelancerId } = useParams(); // Using URL parameters to identify the freelancer
  const [freelancer, setFreelancer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openSection, setOpenSection] = useState(null);

  useEffect(() => {
    // Fetch data about the freelancer
    const fetchFreelancerData = async () => {
      setLoading(true);
      try {
        const freelancerData = {
          id: freelancerId,
          name: "Alice Johnson",
          age: 34,
          tours: [
            { title: "Ege Kıyıları Keşfi", photo: "https://source.unsplash.com/random/200x200?nature,water", refNo: "EG2024", date: "20/06/2024" },
            { title: "Tarihi İstanbul Turu", photo: "https://source.unsplash.com/random/200x200?istanbul", refNo: "IST2024", date: "05/07/2024" }
          ],
          agencies: [
            { name: "Dreamy Adventures", contact: "info@dreamyadventures.com" },
            { name: "Historical Trips", contact: "contact@historicaltrips.com" }
          ],
          email: "alice.johnson@example.com"
        };
        setFreelancer(freelancerData);
      } catch (error) {
        console.error("Freelancer verileri alınırken hata oluştu:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFreelancerData();
  }, [freelancerId]);

  // Toggle visibility of sections
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  if (loading) return <div className="flex justify-center items-center h-screen">Yükleniyor...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">{freelancer.name} Profili</h1>
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6 divide-y divide-gray-200">
        <div className="py-4">
          <p className="text-lg font-medium">Yaş: <span className="font-normal">{freelancer.age}</span></p>
        </div>
        <div className="py-4">
          <p className="text-lg font-medium">E-posta: <span className="font-normal">{freelancer.email}</span></p>
        </div>
      </div>
      {['tours', 'agencies'].map(section => (
        <div key={section} className="bg-white rounded-lg shadow-lg mb-6 overflow-hidden">
          <div
            className={`cursor-pointer p-4 text-lg font-bold text-white transition-colors duration-300 ${openSection === section ? 'bg-blue-600' : 'bg-blue-500 hover:bg-blue-600'}`}
            onClick={() => toggleSection(section)}
          >
            {section === 'tours' ? 'Katıldığı Turlar' : 'Anlaştığı Acentalar'}
          </div>
          {openSection === section && (
            <div className="p-4 space-y-4">
              {(section === 'tours' ? freelancer.tours : freelancer.agencies).map(item => (
                <div key={item.refNo || item.name} className="flex items-center p-4 bg-gray-50 rounded-lg transition-shadow duration-300 hover:shadow-lg">
                  {item.photo && <img src={item.photo} alt={item.title} className="w-20 h-20 rounded-full mr-4 object-cover" />}
                  <div>
                    <div className="text-lg font-medium">{item.title || item.name}</div>
                    <p className="text-sm text-gray-500">{item.refNo || item.contact}</p>
                    {item.date && <p className="text-sm text-gray-500">Tarih: {item.date}</p>}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FreelancerTotalActions;
