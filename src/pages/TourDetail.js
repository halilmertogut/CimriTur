import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import DOMPurify from 'dompurify';
import 'react-image-gallery/styles/css/image-gallery.css';
import { FaUserFriends, FaMoneyBillWave } from 'react-icons/fa';

const TourDetail = () => {
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [participants, setParticipants] = useState(1);

  useEffect(() => {
    async function fetchTour() {
      try {
        const response = await fetch(`http://localhost:3000/api/tours/${id}`);
        if (!response.ok) throw new Error('Tur detayları yüklenirken bir hata oluştu.');
        const data = await response.json();
        setTour(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchTour();
  }, [id]);

  const handleParticipantsChange = e => setParticipants(Math.max(1, parseInt(e.target.value, 10)));

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const createMarkup = html => ({ __html: DOMPurify.sanitize(html) });
  const galleryImages = tour?.tourImagesUrl?.map(img => ({
    original: img,
    thumbnail: img
  })) || [];

  return (
    <div className='font-montserrat bg-gray-50 py-5'>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold mb-4">{tour?.name}</h1>
            <ImageGallery
              items={galleryImages}
              showThumbnails={true}
              showFullscreenButton={false}
              showPlayButton={false}
              startIndex={0}
              infinite={true}
              className="rounded-lg shadow mb-4"
            />
            <p dangerouslySetInnerHTML={createMarkup(tour?.description)} className="text-gray-600" />
            {tour?.days.map((day, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow my-4">
                <h3 className="font-semibold text-lg">{`Gün ${index + 1}: ${day.title}`}</h3>
                <p dangerouslySetInnerHTML={createMarkup(day.description)} className="text-gray-600" />
              </div>
            ))}
          </div>
          
          <div className="col-span-1 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-3">Turunuzu Rezerve Edin</h2>
            <div className="mb-4 flex items-center">
              <FaUserFriends className="text-lg text-gray-700 mr-2" />
              <input
                type="number"
                min="1"
                value={participants}
                onChange={handleParticipantsChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500"
              />
            </div>
            <div className="mb-4 flex items-center">
              <FaMoneyBillWave className="text-lg text-gray-700 mr-2" />
              <span className="text-lg">{`${participants * (tour?.price || 0)} ${tour?.currency}`}</span>
            </div>
            <button onClick={() => alert('Rezervasyon tamamlandı!')} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Satın Al
            </button>
            {/* Example Tours Section */}
            <div className="mt-4">
              <h3 className="text-lg font-bold">Örnek Turlar</h3>
              <p>Bu bölgede gerçekleştirilen diğer popüler turlar hakkında bilgi edinin.</p>
              {/* Dynamically list other tours here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetail;
