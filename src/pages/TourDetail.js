import React, { useState, useEffect } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import DOMPurify from "dompurify";
import {
  GoogleMap,
  Marker,
  LoadScript,
  Polyline,
} from "@react-google-maps/api";
import { FaUserFriends, FaMoneyBillWave } from "react-icons/fa";
import "react-image-gallery/styles/css/image-gallery.css";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const options = {
  strokeColor: "#FF6347",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: "#FF6347",
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  paths: [],
  zIndex: 1,
};

const TourDetail = () => {
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const [coordinates, setCoordinates] = useState({
    start: null,
    destination: null,
  });
  const [otherTours, setOtherTours] = useState([]);
  const [participants, setParticipants] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fetchCoordinates = async (placeName) => {
    const apiKey = "7d16ea5ca75d4d5788534d4e09ab2fc0";
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
      placeName
    )}&key=${apiKey}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data.results.length > 0 ? data.results[0].geometry : null;
    } catch (error) {
      throw new Error("Failed to fetch coordinates");
    }
  };

  useEffect(() => {
    let isActive = true;
    const fetchTourDetails = async () => {
      try {
        const tourResponse = await fetch(
          `http://localhost:3000/api/tours/${id}`
        );
        if (!tourResponse.ok) throw new Error("Failed to load tour details.");
        const tourData = await tourResponse.json();
        const startCoords = await fetchCoordinates(tourData.startLocation);
        const destinationCoords = await fetchCoordinates(tourData.destination);

        if (isActive) {
          setCoordinates({
            start: startCoords,
            destination: destinationCoords,
          });
          setTour(tourData);

          const otherToursResponse = await fetch(
            "http://localhost:3000/api/tours/all-tours"
          );
          if (!otherToursResponse.ok)
            throw new Error("Failed to load other tours.");
          const otherToursData = await otherToursResponse.json();
          setOtherTours(otherToursData.filter((t) => t.id !== id));
          setLoading(false);
        }
      } catch (err) {
        if (isActive) {
          setError(err.message);
          setLoading(false);
        }
      }
    };

    fetchTourDetails();
    return () => {
      isActive = false;
    };
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!tour || !coordinates.start || !coordinates.destination)
    return <div>No tour data available or incomplete location data.</div>;

  options.paths = [
    { lat: coordinates.start.lat, lng: coordinates.start.lng },
    { lat: coordinates.destination.lat, lng: coordinates.destination.lng },
  ];

  return (
    <div className="font-montserrat bg-gray-50 text-gray-800 min-h-screen">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8">
            <h1 className="text-5xl font-bold text-gray-900 mb-5">
              {tour.name}
            </h1>
            <ImageGallery
              items={tour.tourImagesUrl.map((img) => ({
                original: img,
                thumbnail: img,
              }))}
              lazyLoad={true}
              showThumbnails={true}
              showFullscreenButton={true}
              showPlayButton={false}
              startIndex={0}
              infinite={true}
              useBrowserFullscreen={true}
              additionalClass="rounded-lg shadow-lg mb-5"
            />
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={{
                lat: coordinates.start.lat,
                lng: coordinates.start.lng,
              }}
              zoom={5}
            >
              <Marker
                position={{
                  lat: coordinates.start.lat,
                  lng: coordinates.start.lng,
                }}
              />
              <Marker
                position={{
                  lat: coordinates.destination.lat,
                  lng: coordinates.destination.lng,
                }}
              />
              <Polyline
                path={[
                  { lat: coordinates.start.lat, lng: coordinates.start.lng },
                  {
                    lat: coordinates.destination.lat,
                    lng: coordinates.destination.lng,
                  },
                ]}
                options={options}
              />
            </GoogleMap>
            <div className="text-lg text-gray-700 mt-6">
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(tour.description),
                }}
                className="prose prose-lg mb-4"
              />
              {tour.days.map((day, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md my-4"
                >
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">{`Gün ${
                    index + 1
                  }`}</h3>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(day.description),
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-4 bg-white p-6 rounded-lg shadow-lg sticky top-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Book Your Tour
            </h2>
            <div className="mb-5 flex items-center">
              <FaUserFriends className="text-3xl text-gray-700 mr-3" />
              <input
                type="number"
                min="1"
                value={participants}
                onChange={(e) =>
                  setParticipants(Math.max(1, parseInt(e.target.value, 10)))
                }
                className="block w-full pl-4 pr-10 py-3 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="mb-5 flex items-center">
              <FaMoneyBillWave className="text-3xl text-gray-700 mr-3" />
              <span className="text-2xl font-semibold">{`${
                participants * (tour.price || 0)
              } ${tour.currency}`}</span>
            </div>
            <button
              onClick={() => alert("Booking complete!")}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg text-lg transition-colors duration-300"
            >
              Book Now
            </button>
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Explore Other Tours
              </h3>
              {otherTours.map((t) => (
                <div
                  key={t.id}
                  className="mb-4 overflow-hidden rounded-lg shadow-lg bg-gray-100 cursor-pointer hover:bg-gray-200 transition-colors duration-300"
                  onClick={() => navigate(`/explore/${t._id}`)}
                >
                  {t.tourImagesUrl && t.tourImagesUrl.length > 0 && (
                    <img
                      src={t.tourImagesUrl[0]}
                      alt={`${t.name} Tour`}
                      className="w-full h-40 object-cover"
                    />
                  )}
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-gray-800">
                      {t.name}
                    </h4>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(t.description),
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TourDetail;
