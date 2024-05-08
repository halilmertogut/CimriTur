import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';

const AgencyDetails = ({ agencies }) => {
    const { agencyId } = useParams();
    const navigate = useNavigate();

    // Default dummy data if agencies prop is undefined
    const defaultAgencies = [
        { id: 1, name: 'Dream Tours', email: 'info@dreamtours.com', location: 'İstanbul', approved: false, logo: 'https://via.placeholder.com/100x100.png?text=Logo+1', photo: 'https://via.placeholder.com/600x400.png?text=Photo+1' },
        { id: 2, name: 'Adventure Travels', email: 'contact@adventuretravels.com', location: 'Antalya', approved: true, logo: 'https://via.placeholder.com/100x100.png?text=Logo+2', photo: 'https://via.placeholder.com/600x400.png?text=Photo+2' }
    ];

    // Use the passed agencies or default data
    agencies = agencies || defaultAgencies;

    const agency = agencies.find(agency => agency.id === parseInt(agencyId));
    if (!agency) {
        return <div>Acenta bulunamadı</div>; // "Agency not found"
    }

    const handleApprove = () => {
        console.log(`Ajans ${agency.id} onaylandı.`); // "Agency approved"
        navigate('/agency-actions');
    };

    const handleReject = () => {
        const reason = prompt("Lütfen reddetme nedeninizi girin:"); // "Please enter the reason for rejection"
        if (reason) {
            console.log(`Ajans ${agency.id} şu sebep için reddedildi: ${reason}`); // "Agency rejected for:"
        }
        navigate('/agency-actions');
    };

    return (
        <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-700 mb-2">{agency.name}</h1>
                <img src={agency.logo} alt={`${agency.name} logosu`} className="w-20 h-20 rounded-full" /> 
            </div>
            <img src={agency.photo} alt={`${agency.name} görünümü`} className="w-full h-64 object-cover rounded-lg mt-4" /> 
            <p>Email: {agency.email}</p>
            <p>Yer: {agency.location}</p> 
            <p>Durum: {agency.approved ? "Onaylandı" : "Onay Bekleniyor"}</p> 
            <div className="flex space-x-4 mt-4">
                {!agency.approved && (
                    <button
                        className="flex items-center px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                        onClick={handleApprove}
                    >
                        <AiOutlineCheckCircle className="mr-2" /> Onayla 
                    </button>
                )}
                {!agency.approved && (
                    <button
                        className="flex items-center px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                        onClick={handleReject}
                    >
                        <AiOutlineCloseCircle className="mr-2" /> Reddet 
                    </button>
                )}
            </div>
        </div>
    );
};

export default AgencyDetails;
