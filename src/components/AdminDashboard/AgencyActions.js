import React, { useState } from 'react';
import { AiOutlineDelete, AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineEye, AiOutlineLock, AiOutlineUnlock, AiOutlineInfoCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import AgencyFreezeModal from './AgencyFreezeModal';

const AgencyActions = () => {
    const navigate = useNavigate();
    const [currentAdmin] = useState({ id: 101, name: 'Ali Demir' });
    const [agencies, setAgencies] = useState([
        { id: 1, name: 'Dream Tours', email: 'info@dreamtours.com', location: 'İstanbul', approved: false, isFrozen: false, freezeUntil: null, frozenBy: null, rejectionReason: null },
        { id: 2, name: 'Adventure Travels', email: 'contact@adventuretravels.com', location: 'Antalya', approved: true, isFrozen: false, freezeUntil: null, frozenBy: null, rejectionReason: null },
        { id: 3, name: 'Deneme Tours', email: 'info@denemetours.com', location: 'İstanbul', approved: false, isFrozen: false, freezeUntil: null, frozenBy: null, rejectionReason: null },
        { id: 4, name: 'asdaf Travels', email: 'sales@asdaftravels.com', location: 'Antalya', approved: true, isFrozen: false, freezeUntil: null, frozenBy: null, rejectionReason: null },
        { id: 5, name: 'Cultural Trips', email: 'contact@culturaltrips.com', location: 'İzmir', approved: false, isFrozen: true, freezeUntil: new Date(new Date().setDate(new Date().getDate() + 15)), frozenBy: 'Ali Demir', rejectionReason: 'Lack of permits' },
        { id: 6, name: 'Historic Routes', email: 'info@historicroots.com', location: 'Mardin', approved: true, isFrozen: false, freezeUntil: null, frozenBy: null, rejectionReason: null }
    ]);
    const [query, setQuery] = useState('');
    const [approvalQuery, setApprovalQuery] = useState('');
    const [approvedQuery, setApprovedQuery] = useState('');
    const [rejectedQuery, setRejectedQuery] = useState('');
    const [frozenQuery, setFrozenQuery] = useState('');
    const [selectedAgencyId, setSelectedAgencyId] = useState(null);
    const [freezeOpen, setFreezeOpen] = useState(false);

    const handleFreeze = (days) => {
        const freezeDate = new Date();
        freezeDate.setDate(freezeDate.getDate() + parseInt(days, 10));
        setAgencies(agencies.map(agency =>
          agency.id === selectedAgencyId ? { ...agency, isFrozen: true, freezeUntil: freezeDate, frozenBy: currentAdmin.name } : agency
        ));
        setFreezeOpen(false);
    };

    const approveAgency = id => {
        setAgencies(agencies.map(agency =>
            agency.id === id ? { ...agency, approved: true, approvedBy: currentAdmin.name } : agency
        ));
    };

    const rejectAgency = id => {
        const reason = prompt('Lütfen reddetme sebebinizi giriniz:');
        if (reason) {
            setAgencies(agencies.map(agency =>
                agency.id === id ? { ...agency, approved: false, rejectionReason: reason, rejectedBy: currentAdmin.name } : agency
            ));
        }
    };

    const handleNavigate = (id, route) => {
        navigate(`/${route}/${id}`);
    };

    const freezeAccount = (id) => {
        setSelectedAgencyId(id);
        setFreezeOpen(true);
    };

    const unfreezeAgency = (id) => {
        setAgencies(agencies.map(agency =>
            agency.id === id ? { ...agency, isFrozen: false, freezeUntil: null, frozenBy: null } : agency
        ));
    };

    const deleteAgency = id => {
        if (window.confirm('Bu ajansı silmek istediğinizden emin misiniz?')) {
            setAgencies(agencies.filter(agency => agency.id !== id));
        }
    };

    const calculateDaysLeft = freezeUntil => {
        if (!freezeUntil) return 0;
        const difference = new Date(freezeUntil) - new Date();
        return Math.ceil(difference / (1000 * 60 * 60 * 24));
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-5 md:px-10">
            <h1 className="text-3xl font-bold mb-6 text-center">Ajans Yönetim Paneli - Hoşgeldiniz, {currentAdmin.name}</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
                {/* Approval Required Section */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-bold text-gray-700 mb-4">Onay Gerekenler</h2>
                    <input
                        type="text"
                        className="border border-gray-300 p-2 rounded w-full mb-4"
                        placeholder="Ajans ara"
                        value={approvalQuery}
                        onChange={(e) => setApprovalQuery(e.target.value.toLowerCase())}
                    />
                    {agencies.filter(agency => !agency.approved && !agency.rejectionReason && agency.name.toLowerCase().includes(approvalQuery)).map(agency => (
                        <div key={agency.id} className="bg-gray-50 p-4 rounded-lg shadow mb-4 flex items-center justify-between">
                            <span>{agency.name}</span>
                            <div>
                                <button className="text-green-500 hover:text-green-600 text-xl p-2" onClick={() => approveAgency(agency.id)}><AiOutlineCheckCircle /></button>
                                <button className="text-red-500 hover:text-red-600 text-xl p-2" onClick={() => rejectAgency(agency.id)}><AiOutlineCloseCircle /></button>
                                <button className="text-blue-500 hover:text-blue-600 text-xl p-2" onClick={() => handleNavigate(agency.id, 'agency-details')}><AiOutlineInfoCircle /></button>
                            </div>
                        </div>
                    ))}
                </div>
    
                {/* Approved Agencies */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-bold text-gray-700 mb-4">Onaylanmış Ajanslar</h2>
                    <input
                        type="text"
                        className="border border-gray-300 p-2 rounded w-full mb-4"
                        placeholder="Ajans ara"
                        value={approvedQuery}
                        onChange={(e) => setApprovedQuery(e.target.value.toLowerCase())}
                    />
                    {agencies.filter(agency => agency.approved && agency.name.toLowerCase().includes(approvedQuery)).map(agency => (
                        <div key={agency.id} className="bg-gray-50 p-4 rounded-lg shadow mb-4 flex items-center justify-between">
                            <span>{agency.name}</span>
                            <div>
                                <button className="text-blue-500 hover:text-blue-600 text-xl p-2" onClick={() => handleNavigate(agency.id, 'agency-actions')}><AiOutlineEye /></button>
                                <span className="text-green-500">Onaylandı (Tarafından: {agency.approvedBy})</span>
                            </div>
                        </div>
                    ))}
                </div>
    
                {/* Rejected Agencies */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-bold text-gray-700 mb-4">Reddedilmiş Ajanslar</h2>
                    <input
                        type="text"
                        className="border border-gray-300 p-2 rounded w-full mb-4"
                        placeholder="Ajans ara"
                        value={rejectedQuery}
                        onChange={(e) => setRejectedQuery(e.target.value.toLowerCase())}
                    />
                    {agencies.filter(agency => agency.rejectionReason && agency.name.toLowerCase().includes(rejectedQuery)).map(agency => (
                        <div key={agency.id} className="bg-gray-50 p-4 rounded-lg shadow mb-4 flex items-center justify-between">
                            <span>{agency.name}</span>
                            <div>
                                <button className="text-blue-500 hover:text-blue-600 text-xl p-2" onClick={() => handleNavigate(agency.id, 'agency-details')}><AiOutlineInfoCircle /></button>
                                <span className="text-red-500">Reddedildi (Sebep: {agency.rejectionReason}, Tarafından: {agency.rejectedBy})</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    
            <div className="grid grid-cols-2 gap-5">
                {/* Search Agency Section */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-bold text-gray-700 mb-4">Ajans Ara</h2>
                    <input
                        type="text"
                        className="border border-gray-300 p-2 rounded w-full mb-4"
                        placeholder="Ajans ara"
                        value={query}
                        onChange={(e) => setQuery(e.target.value.toLowerCase())}
                    />
                    {agencies.filter(agency => agency.name.toLowerCase().includes(query)).map(agency => (
                        <div key={agency.id} className="bg-gray-50 p-4 rounded-lg shadow mb-4 flex items-center justify-between">
                            <span>{agency.name}</span>
                            <div>
                                <button className="text-blue-500 hover:text-blue-600 text-xl p-2" onClick={() => handleNavigate(agency.id, 'agency-actions')}><AiOutlineEye /></button>
                                {agency.isFrozen ? (
                                    <>
                                        <span className="text-red-500">Donduruldu ({agency.freezeUntil.toLocaleDateString()} kadar, {calculateDaysLeft(agency.freezeUntil)} gün kaldı, tarafından: {agency.frozenBy})</span>
                                        <button className="ml-2 text-green-500 hover:text-green-600 text-xl p-2" onClick={() => unfreezeAgency(agency.id)}><AiOutlineUnlock /></button>
                                    </>
                                ) : (
                                    <button className="text-yellow-500 hover:text-yellow-800 text-xl p-2" onClick={() => freezeAccount(agency.id)}><AiOutlineLock /></button>
                                )}
                                <button className="text-red-500 hover:text-red-600 text-xl p-2" onClick={() => deleteAgency(agency.id)}><AiOutlineDelete /></button>
                            </div>
                        </div>
                    ))}
                </div>
    
                {/* Frozen Agencies */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-bold text-gray-700 mb-4">Dondurulmuş Ajanslar</h2>
                    <input
                        type="text"
                        className="border border-gray-300 p-2 rounded w-full mb-4"
                        placeholder="Dondurulmuş ajansları ara"
                        value={frozenQuery}
                        onChange={(e) => setFrozenQuery(e.target.value.toLowerCase())}
                    />
                    {agencies.filter(agency => agency.isFrozen && agency.name.toLowerCase().includes(frozenQuery)).map(agency => (
                        <div key={agency.id} className="bg-gray-50 p-4 rounded-lg shadow mb-4 flex items-center justify-between">
                            <span>{agency.name}</span>
                            <div>
                                <span className="text-red-500">Donduruldu ({agency.freezeUntil.toLocaleDateString()} kadar, {calculateDaysLeft(agency.freezeUntil)} gün kaldı, tarafından: {agency.frozenBy})</span>
                                <button className="ml-2 text-green-500 hover:text-green-600 text-xl p-2" onClick={() => unfreezeAgency(agency.id)}><AiOutlineUnlock /></button>
                                <button className="text-blue-500 hover:text-blue-600 text-xl p-2" onClick={() => handleNavigate(agency.id, 'agency-actions')}><AiOutlineEye /></button>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
    
            <AgencyFreezeModal
                isOpen={freezeOpen}
                onClose={() => setFreezeOpen(false)}
                onFreeze={handleFreeze}
            />
        </div>
    );
    
};

export default AgencyActions;
