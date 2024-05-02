import React, { useState } from 'react';
import { AiOutlineDelete, AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineEye, AiOutlineLock, AiOutlineUnlock, AiOutlineInfoCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import FreelancerFreezeModal from './FreelancerFreezeModal';

const FreelanceActions = () => {
    const navigate = useNavigate();
    const [currentAdmin] = useState({ id: 101, name: 'Ali Demir' }); // Simulated fetching admin info
    const [freelancers, setFreelancers] = useState([
        { id: 1, name: 'John Doe', email: 'john@example.com', phone: '+1234567890', approved: false, isFrozen: false, freezeUntil: null, frozenBy: null, rejectionReason: null },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '+0987654321', approved: true, isFrozen: false, freezeUntil: null, frozenBy: null, rejectionReason: null },
        { id: 3, name: 'Sam Johnson', email: 'sam@example.com', phone: '+1122334455', approved: false, isFrozen: true, freezeUntil: new Date(new Date().setDate(new Date().getDate() + 15)), frozenBy: 'Ali Demir', rejectionReason: 'Lack of certification' },
        { id: 4, name: 'Emily Roe', email: 'emily@example.com', phone: '+123454321', approved: true, isFrozen: false, freezeUntil: null, frozenBy: null, rejectionReason: null }
    ]);
    const [query, setQuery] = useState('');
    const [approvalQuery, setApprovalQuery] = useState('');
    const [approvedQuery, setApprovedQuery] = useState('');
    const [rejectedQuery, setRejectedQuery] = useState('');
    const [frozenQuery, setFrozenQuery] = useState('');
    const [selectedFreelancerId, setSelectedFreelancerId] = useState(null);
    const [freezeOpen, setFreezeOpen] = useState(false);

    const handleFreeze = (days) => {
        const freezeDate = new Date();
        freezeDate.setDate(freezeDate.getDate() + parseInt(days, 10));
        setFreelancers(freelancers.map(freelancer =>
          freelancer.id === selectedFreelancerId ? { ...freelancer, isFrozen: true, freezeUntil: freezeDate, frozenBy: currentAdmin.name } : freelancer
        ));
        setFreezeOpen(false);
    };

    const handleNavigate = (id, route) => {
      navigate(`/${route}/${id}`);
  };


    const approveFreelancer = id => {
        setFreelancers(freelancers.map(freelancer =>
            freelancer.id === id ? { ...freelancer, approved: true, approvedBy: currentAdmin.name } : freelancer
        ));
    };

    const rejectFreelancer = id => {
        const reason = prompt('Lütfen reddetme sebebinizi giriniz:');
        if (reason) {
            setFreelancers(freelancers.map(freelancer =>
                freelancer.id === id ? { ...freelancer, approved: false, rejectionReason: reason, rejectedBy: currentAdmin.name } : freelancer
            ));
        }
    };

    const freezeAccount = (id) => {
        setSelectedFreelancerId(id);
        setFreezeOpen(true);
    };

    const unfreezeFreelancer = (id) => {
        setFreelancers(freelancers.map(freelancer =>
            freelancer.id === id ? { ...freelancer, isFrozen: false, freezeUntil: null, frozenBy: null } : freelancer
        ));
    };

    const deleteFreelancer = id => {
        if (window.confirm('Bu serbest çalışanı silmek istediğinizden emin misiniz?')) {
            setFreelancers(freelancers.filter(freelancer => freelancer.id !== id));
        }
    };

    const calculateDaysLeft = freezeUntil => {
        if (!freezeUntil) return 0;
        const difference = new Date(freezeUntil) - new Date();
        return Math.ceil(difference / (1000 * 60 * 60 * 24));
    };


    return (
        <div className="min-h-screen bg-gray-100 py-10 px-5 md:px-10">
            <h1 className="text-3xl font-bold mb-6 text-center">Freelancer Yönetim Paneli - Hoşgeldiniz, {currentAdmin.name}</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
                {/* Approval Required Section */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-bold text-gray-700 mb-4">Onay Gerekiyor</h2>
                    <input
                        type="text"
                        className="border border-gray-300 p-2 rounded w-full mb-4"
                        placeholder="Serbest çalışan ara"
                        value={approvalQuery}
                        onChange={(e) => setApprovalQuery(e.target.value.toLowerCase())}
                    />
                    {freelancers.filter(freelancer => !freelancer.approved && !freelancer.rejectionReason && freelancer.name.toLowerCase().includes(approvalQuery)).map(freelancer => (
                        <div key={freelancer.id} className="bg-gray-50 p-4 rounded-lg shadow mb-4 flex items-center justify-between">
                            <span>{freelancer.name}</span>
                            <div>
                                <button className="text-green-500 hover:text-green-600 text-xl p-2" onClick={() => approveFreelancer(freelancer.id)}><AiOutlineCheckCircle /></button>
                                <button className="text-red-500 hover:text-red-600 text-xl p-2" onClick={() => rejectFreelancer(freelancer.id)}><AiOutlineCloseCircle /></button>
                                <button className="text-blue-500 hover:text-red-600 text-xl p-2" onClick={() => handleNavigate(freelancer.id, 'freelancer-details')}><AiOutlineInfoCircle /></button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Approved Freelancers */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-bold text-gray-700 mb-4">Onaylanmış Serbest Çalışanlar</h2>
                    <input
                        type="text"
                        className="border border-gray-300 p-2 rounded w-full mb-4"
                        placeholder="Serbest çalışan ara"
                        value={approvedQuery}
                        onChange={(e) => setApprovedQuery(e.target.value.toLowerCase())}
                    />
                    {freelancers.filter(freelancer => freelancer.approved && freelancer.name.toLowerCase().includes(approvedQuery)).map(freelancer => (
                        <div key={freelancer.id} className="bg-gray-50 p-4 rounded-lg shadow mb-4 flex items-center justify-between">
                            <span>{freelancer.name}</span>
                            <div>
                            <button className="text-blue-500 hover:text-blue-600 text-xl p-2" onClick={() => handleNavigate(freelancer.id, 'freelancer-actions')}><AiOutlineEye /></button>
                                <span className="text-green-500">Onaylandı (Tarafından: {freelancer.approvedBy})</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Rejected Freelancers */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-bold text-gray-700 mb-4">Reddedilmiş Serbest Çalışanlar</h2>
                    <input
                        type="text"
                        className="border border-gray-300 p-2 rounded w-full mb-4"
                        placeholder="Serbest çalışan ara"
                        value={rejectedQuery}
                        onChange={(e) => setRejectedQuery(e.target.value.toLowerCase())}
                    />
                    {freelancers.filter(freelancer => freelancer.rejectionReason && freelancer.name.toLowerCase().includes(rejectedQuery)).map(freelancer => (
                        <div key={freelancer.id} className="bg-gray-50 p-4 rounded-lg shadow mb-4 flex items-center justify-between">
                            <span>{freelancer.name}</span>
                            <div>
                                <button className="text-blue-500 hover:text-blue-600 text-xl p-2" onClick={() => handleNavigate(freelancer.id, 'freelancer-details')}><AiOutlineInfoCircle /></button>
                                <span className="text-red-500">Reddedildi (Sebep: {freelancer.rejectionReason}, Tarafından: {freelancer.rejectedBy})</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
                {/* Search Freelancer Section */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-bold text-gray-700 mb-4">Serbest Çalışan Ara</h2>
                    <input
                        type="text"
                        className="border border-gray-300 p-2 rounded w-full mb-4"
                        placeholder="Serbest çalışan ara"
                        value={query}
                        onChange={(e) => setQuery(e.target.value.toLowerCase())}
                    />
                    {freelancers.filter(freelancer => freelancer.name.toLowerCase().includes(query)).map(freelancer => (
                        <div key={freelancer.id} className="bg-gray-50 p-4 rounded-lg shadow mb-4 flex items-center justify-between">
                            <span>{freelancer.name}</span>
                            <div>
                                <button className="text-blue-500 hover:text-blue-600 text-xl p-2" onClick={() => handleNavigate(freelancer.id, 'freelancer-actions')}><AiOutlineEye /></button>
                                {freelancer.isFrozen ? (
                                    <>
                                        <span className="text-red-500">Donduruldu ({freelancer.freezeUntil.toLocaleDateString()} kadar, {calculateDaysLeft(freelancer.freezeUntil)} gün kaldı, tarafından: {freelancer.frozenBy})</span>
                                        <button className="ml-2 text-green-500 hover:text-green-600 text-xl p-2" onClick={() => unfreezeFreelancer(freelancer.id)}><AiOutlineUnlock /></button>
                                    </>
                                ) : (
                                    <button className="text-yellow-500 hover:text-yellow-800 text-xl p-2" onClick={() => freezeAccount(freelancer.id)}><AiOutlineLock /></button>
                                )}
                                <button className="text-red-500 hover:text-red-600 text-xl p-2" onClick={() => deleteFreelancer(freelancer.id)}><AiOutlineDelete /></button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Frozen Freelancers */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-bold text-gray-700 mb-4">Dondurulmuş Serbest Çalışanlar</h2>
                    <input
                        type="text"
                        className="border border-gray-300 p-2 rounded w-full mb-4"
                        placeholder="Dondurulmuş serbest çalışanları ara"
                        value={frozenQuery}
                        onChange={(e) => setFrozenQuery(e.target.value.toLowerCase())}
                    />
                    {freelancers.filter(freelancer => freelancer.isFrozen && freelancer.name.toLowerCase().includes(frozenQuery)).map(freelancer => (
                        <div key={freelancer.id} className="bg-gray-50 p-4 rounded-lg shadow mb-4 flex items-center justify-between">
                            <span>{freelancer.name}</span>
                            <div>
                                <span className="text-red-500">Donduruldu ({freelancer.freezeUntil.toLocaleDateString()} kadar, {calculateDaysLeft(freelancer.freezeUntil)} gün kaldı, tarafından: {freelancer.frozenBy})</span>
                                <button className="ml-2 text-green-500 hover:text-green-600 text-xl p-2" onClick={() => unfreezeFreelancer(freelancer.id)}><AiOutlineUnlock /></button>
                                <button className="text-blue-500 hover:text-blue-600 text-xl p-2" onClick={() => handleNavigate(freelancer.id, 'freelancer-actions')}><AiOutlineEye /></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Freeze Modal */}
            <FreelancerFreezeModal
                isOpen={freezeOpen}
                onClose={() => setFreezeOpen(false)}
                onFreeze={handleFreeze}
            />
        </div>
    );
};

export default FreelanceActions;
