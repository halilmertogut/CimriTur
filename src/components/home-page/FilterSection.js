import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import DOMPurify from 'dompurify';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { FaUserFriends, FaMoneyBillWave } from 'react-icons/fa';
import 'react-image-gallery/styles/css/image-gallery.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Setup for Leaflet icons to avoid common issues with webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const TourDetail = () => {
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const [coordinates, setCoordinates] = useState({ start: null, destination: null });
  const [otherTours, setOtherTours] = useState([]);
  const [participants, setParticipants] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchCoordinates = async (placeName) => {
    const apiKey = '7d16ea5ca75d4d5788534d4e09ab2fc0'; // OpenCage API key
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(placeName)}&key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.results.length > 0) {
      return data.results[0].geometry; // Returns { lat, lng }
    }
    return null;
  };

  useEffect(() => {
    async function fetchTourDetails() {
      setLoading(true);
      try {
        const tourResponse = await fetch(`http://localhost:3000/api/tours/${id}`);
        if (!tourResponse.ok) throw new Error('Failed to load tour details.');
        const tourData = await tourResponse.json();

        const startCoords = await fetchCoordinates(tourData.startLocation);
        const destinationCoords = await fetchCoordinates(tourData.destination);
        setCoordinates({ start: startCoords, destination: destinationCoords });

        const otherToursResponse = await fetch('http://localhost:3000/api/tours');
        if (!otherToursResponse.ok) throw new Error('Failed to load other tours.');
        const otherToursData = await otherToursResponse.json();

        setTour(tourData);
        setOtherTours(otherToursData.filter(t => t.id !== id));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchTourDetails();
  }, [id]);

  const handleParticipantsChange = (event) => {
    setParticipants(Math.max(1, parseInt(event.target.value, 10)));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!tour || !coordinates.start || !coordinates.destination) return <div>No tour data available or incomplete location data.</div>;

  const galleryImages = tour.tourImagesUrl.map(img => ({ original: img, thumbnail: img }));

  return (
    <div className='font-sans bg-gray-50 py-5 text-gray-800'>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-3">
            <h1 className="text-4xl font-serif text-gray-900 mb-4">{tour.name}</h1>
            <ImageGallery
              items={galleryImages}
              lazyLoad={true}
              showThumbnails={true}
              showFullscreenButton={true}
              showPlayButton={false}
              startIndex={0}
              infinite={true}
              useBrowserFullscreen={true}
              additionalClass="rounded-lg shadow mb-4"
            />
            <MapContainer center={[coordinates.start.lat, coordinates.start.lng]} zoom={13} scrollWheelZoom={false} className="rounded-lg h-64 mb-6">
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[coordinates.start.lat, coordinates.start.lng]}>
                <Popup>Start: {tour.startLocation}</Popup>
              </Marker>
              <Marker position={[coordinates.destination.lat, coordinates.destination.lng]}>
                <Popup>Destination: {tour.destination}</Popup>
              </Marker>
            </MapContainer>
            <div className="text-lg text-gray-700 space-y-4">
              <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(tour.description) }} />
              {tour.days.map((day, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md my-2 hover:scale-105 transition-transform duration-300">
                  <h3 className="font-semibold text-xl text-gray-800">{`Day ${index + 1}: ${day.title}`}</h3>
                  <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(day.description) }} />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-lg sticky top-20">
            <h2 className="text-2xl font-serif text-gray-900 mb-4">Book Your Tour</h2>
            <div className="mb-4 flex items-center">
              <FaUserFriends className="text-2xl text-gray-700 mr-2" />
              <input
                type="number"
                min="1"
                value={participants}
                onChange={handleParticipantsChange}
                className="block w-full pl-3 pr-10 py-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </div>
            <div className="mb-4 flex items-center">
              <FaMoneyBillWave className="text-2xl text-gray-700 mr-2" />
              <span className="text-xl font-semibold">{`${participants * (tour.price || 0)} ${tour.currency}`}</span>
            </div>
            <button onClick={() => alert('Booking complete!')} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg text-lg">
              Buy Now
            </button>
            <div className="mt-6">
              <h3 className="text-lg font-serif font-bold">Explore Other Tours</h3>
              {otherTours.map(t => (
                <p key={t.id} className="text-gray-700 hover:text-blue-600 cursor-pointer">{t.name}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetail;
