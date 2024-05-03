import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineEdit } from 'react-icons/ai';

const FreelancerDetails = ({ freelancers }) => {
    const { freelancerId } = useParams();
    const navigate = useNavigate();

    // Default dummy data if freelancers prop is undefined
    const defaultFreelancers = [
        { id: 1, name: 'John Doe', email: 'john@example.com', phone: '+1234567890', approved: false },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '+0987654321', approved: true }
    ];

    // Use the passed freelancers or default data
    freelancers = freelancers || defaultFreelancers;

    const freelancer = freelancers.find(freelancer => freelancer.id === parseInt(freelancerId));
    if (!freelancer) {
        return <div>Serbest çalışan bulunamadı !!</div>;
    }

    const handleApprove = () => {
        console.log(`Freelancer ${freelancer.id} approved.`);
        navigate('/freelance-actions');
    };

    const handleReject = () => {
        const reason = prompt("Please enter the reason for rejection:");
        if (reason) {
            console.log(`Freelancer ${freelancer.id} rejected for: ${reason}`);
        }
        navigate('/freelance-actions');
    };

    const handleEdit = () => {
        console.log("Edit mode enabled for freelancer:", freelancer.id);
        // Implement navigation to an edit page if needed
    };

    return (
        <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold text-gray-700 mb-2">{freelancer.name}</h1>
            <p>Email: {freelancer.email}</p>
            <p>Phone: {freelancer.phone}</p>
            <p>Status: {freelancer.approved ? "Approved" : "Pending Approval"}</p>
            <div className="flex space-x-4 mt-4">
                {!freelancer.approved && (
                    <button
                        className="flex items-center px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                        onClick={handleApprove}
                    >
                        <AiOutlineCheckCircle className="mr-2" /> Onayla
                    </button>
                )}
                {!freelancer.approved && (
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

export default FreelancerDetails;
