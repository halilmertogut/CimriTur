import React, { useState, useEffect } from 'react';
import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineEye } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const useAgencies = () => {
    const [agencies, setAgencies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/api/agency/agencies')
            .then(res => res.json())
            .then(data => {
                setAgencies(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching agencies:', error);
                setError(error.toString());
                setIsLoading(false);
            });
    }, []);

    return { agencies, setAgencies, isLoading, error };
};

const AgencyCard = ({ agency, onStatusChange, onViewDetails }) => (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 flex justify-between items-center transition-all hover:shadow-lg">
        <span className="font-semibold text-gray-800">{agency.companyName}</span>
        <div>
            {agency.status === 'waiting' && (
                <>
                    <button onClick={() => onStatusChange(agency._id, 'approve')} className="text-green-600 hover:text-green-800 mr-3">
                        <AiOutlineCheckCircle className="inline mr-1"/> Approve
                    </button>
                    <button onClick={() => onStatusChange(agency._id, 'reject')} className="text-red-600 hover:text-red-800">
                        <AiOutlineCloseCircle className="inline mr-1"/> Reject
                    </button>
                </>
            )}
            <button onClick={() => onViewDetails(agency._id)} className="text-blue-600 hover:text-blue-800 ml-3">
                <AiOutlineEye className="inline mr-1"/> Details
            </button>
        </div>
    </div>
);

const AgencySection = ({ title, agencies, onStatusChange, onViewDetails }) => (
    <div className="mb-10">
        <h2 className="text-2xl font-semibold text-center mb-6">{title}</h2>
        {agencies.length > 0 ? (
            agencies.map(agency => (
                <AgencyCard
                    key={agency._id}
                    agency={agency}
                    onStatusChange={onStatusChange}
                    onViewDetails={onViewDetails}
                />
            ))
        ) : (
            <p className="text-center text-gray-500">No agencies found.</p>
        )}
    </div>
);

const AgencyActions = () => {
    const navigate = useNavigate();
    const { agencies, setAgencies, isLoading, error } = useAgencies();
    const [searchQuery, setSearchQuery] = useState('');

    const updateAgencyStatus = (id, status) => {
        const reason = window.prompt(`Please enter a reason for ${status} this agency:`);
        if (reason && reason.trim() !== '') {
            fetch(`http://localhost:3000/api/agency/${status}/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ reason })
            })
            .then(res => res.json())
            .then(updatedAgency => {
                setAgencies(agencies.map(agency => agency._id === id ? updatedAgency : agency));
            })
            .catch(error => console.error(`Failed to ${status} agency:`, error));
        }
    };

    const filteredAgencies = (status) => agencies.filter(agency =>
        (agency.status === status || status === 'all') &&
        agency.companyName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-6 sm:px-8">
            <h1 className="text-3xl font-bold text-center mb-8">Agency Management Panel</h1>
            <input
                type="text"
                placeholder="Search Agencies..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full p-3 mb-6 text-gray-700 bg-white border border-gray-300 rounded shadow"
            />
            <div className="space-y-6">
                <AgencySection title="All Agencies" agencies={filteredAgencies('all')} onStatusChange={updateAgencyStatus} onViewDetails={(id) => navigate(`agency-details/${id}`)} />
                <AgencySection title="Waiting for Approval" agencies={filteredAgencies('waiting')} onStatusChange={updateAgencyStatus} onViewDetails={(id) => navigate(`agency-details/${id}`)} />
                <AgencySection title="Approved Agencies" agencies={filteredAgencies('approved')} onStatusChange={updateAgencyStatus} onViewDetails={(id) => navigate(`agency-details/${id}`)} />
                <AgencySection title="Rejected Agencies" agencies={filteredAgencies('rejected')} onStatusChange={updateAgencyStatus} onViewDetails={(id) => navigate(`agency-details/${id}`)} />
            </div>
        </div>
    );
};


export default AgencyActions;

