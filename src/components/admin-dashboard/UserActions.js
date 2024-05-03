import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineLock, AiOutlineUnlock, AiOutlineDelete, AiOutlineInfoCircle } from 'react-icons/ai';
import UserFreezeModal from './UserFreezeModal';
import UserProfileConfirmModal from './UserProfileConfirmModal';

const UserActions = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');
    const [frozenQuery, setFrozenQuery] = useState('');
    const [users, setUsers] = useState([
        { id: 1, name: 'Ayşe Yılmaz', email: 'ayse@example.com', phone: '555-1234', isFrozen: false },
        { id: 2, name: 'Mehmet Çelik', email: 'mehmet@example.com', phone: '555-5678', isFrozen: true, freezeUntil: new Date(Date.now() + 1000 * 3600 * 24 * 5) },
        { id: 3, name: 'Elif Kaya', email: 'elif@example.com', phone: '555-9101', isFrozen: false },
        { id: 4, name: 'Oğuz Atay', email: 'oguz@example.com', phone: '555-1123', isFrozen: true, freezeUntil: new Date(Date.now() + 1000 * 3600 * 24 * 3) }
    ]);
    const [freezeOpen, setFreezeOpen] = useState(false);
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleFreeze = (days) => {
        const freezeDate = new Date();
        freezeDate.setDate(freezeDate.getDate() + parseInt(days));
        const newUsers = users.map(user =>
            user.id === selectedUser.id ? { ...user, isFrozen: true, freezeUntil: freezeDate } : user
        );
        setUsers(newUsers);
        setFreezeOpen(false);
    };

    const handleDelete = (userId) => {
        setUsers(users.filter(user => user.id !== userId));
        setConfirmOpen(false);
    };

    const handleNavigate = (id) => {
        navigate(`/user-total-actions/${id}`);
    };

    const openFreezeModal = (user) => {
        setSelectedUser(user);
        setFreezeOpen(true);
    };

    const openConfirmModal = (user) => {
        setSelectedUser(user);
        setConfirmOpen(true);
    };

    const unfreezeUser = (userId) => {
        const newUsers = users.map(user =>
            user.id === userId ? { ...user, isFrozen: false, freezeUntil: null } : user
        );
        setUsers(newUsers);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        const filteredUsers = users.filter(user => 
            user.name.toLowerCase().includes(query.toLowerCase()) || 
            user.email.toLowerCase().includes(query.toLowerCase())
        );
        setUsers(filteredUsers);
    };

    const formatDate = (date) => {
        const newDate = new Date(date);
        return `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`;
    };

    const calculateDaysLeft = (untilDate) => {
        const today = new Date();
        const difference = new Date(untilDate) - today;
        return Math.ceil(difference / (1000 * 60 * 60 * 24));
    };

    return (
        <div className="container mx-auto p-6 h-screen">
            <h1 className="text-3xl font-bold mb-6 text-center">Kullanıcı Yönetim Paneli - Hoşgeldiniz</h1>
            <div className="grid grid-cols-2 gap-5">
                {/* Kullanıcı Ara Section */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-bold text-gray-700 mb-4">Kullanıcı Ara</h2>
                    <input
                        type="text"
                        className="border border-gray-300 p-2 rounded w-full mb-4"
                        placeholder="Kullanıcı ara"
                        value={query}
                        onChange={(e) => setQuery(e.target.value.toLowerCase())}
                    />
                    {users.filter(user => !user.isFrozen).map(user => (
                        <div key={user.id} className="bg-gray-50 p-4 rounded-lg shadow mb-4 flex items-center justify-between">
                            <span>{user.name}</span>
                            <div>
                                <button className="text-blue-500 hover:text-blue-600 text-xl p-2" onClick={() => handleNavigate(user.id)}><AiOutlineEye /></button>
                                <button className="text-yellow-500 hover:text-yellow-800 text-xl p-2" onClick={() => openFreezeModal(user)}><AiOutlineLock /></button>
                                <button className="text-red-500 hover:text-red-600 text-xl p-2" onClick={() => openConfirmModal(user)}><AiOutlineDelete /></button>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Dondurulmuş Kullanıcılar Section */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-bold text-gray-700 mb-4">Dondurulmuş Kullanıcılar</h2>
                    <input
                        type="text"
                        className="border border-gray-300 p-2 rounded w-full mb-4"
                        placeholder="Dondurulmuş kullanıcıları ara"
                        value={frozenQuery}
                        onChange={(e) => setFrozenQuery(e.target.value.toLowerCase())}
                    />
                    {users.filter(user => user.isFrozen && (user.name.toLowerCase().includes(frozenQuery) || user.email.toLowerCase().includes(frozenQuery))).map(user => (
                        <div key={user.id} className="bg-gray-50 p-4 rounded-lg shadow mb-4 flex items-center justify-between">
                            <span>{user.name}</span>
                            <div>
                                <span className="text-red-500">Donduruldu ({formatDate(user.freezeUntil)} kadar, {calculateDaysLeft(user.freezeUntil)} gün kaldı, tarafından)</span>
                                <button className="ml-2 text-green-500 hover:text-green-600 text-xl p-2" onClick={() => unfreezeUser(user.id)}><AiOutlineUnlock /></button>
                                <button className="text-blue-500 hover:text-blue-600 text-xl p-2" onClick={() => handleNavigate(user.id)}><AiOutlineInfoCircle /></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <UserFreezeModal
                isOpen={freezeOpen}
                onClose={() => setFreezeOpen(false)}
                onFreeze={handleFreeze}
            />
            <UserProfileConfirmModal
                isOpen={confirmOpen}
                onClose={() => setConfirmOpen(false)}
                onConfirm={() => handleDelete(selectedUser.id)}
                message="Bu kullanıcıyı silmek istediğinize emin misiniz?"
            />
        </div>
    );
};

export default UserActions;