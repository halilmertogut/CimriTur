import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserProfileConfirmModal from './UserProfileConfirmModal';
import FreezeModal from './UserFreezeModal';

const UserProileActions = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [searched, setSearched] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [freezeOpen, setFreezeOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const formatDate = (date) => {
    const newDate = new Date(date);
    return `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`;
  };

  const calculateDaysLeft = (untilDate) => {
    const today = new Date();
    const difference = new Date(untilDate) - today;
    return Math.ceil(difference / (1000 * 60 * 60 * 24));
  };

  const handleDelete = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
    setConfirmOpen(false);
  };

  const openConfirmModal = (user) => {
    setSelectedUser(user);
    setConfirmOpen(true);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', query);
    // Simulated fetch call
    const fetchedUsers = [
      { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', freezeDays: '', isFrozen: false, freezeUntil: new Date(Date.now() + 86400000 * 5) },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210', freezeDays: '', isFrozen: true, freezeUntil: new Date(Date.now() + 86400000 * 10) }
    ].filter(user => user.name.toLowerCase().includes(query.toLowerCase()) || user.email.toLowerCase().includes(query.toLowerCase()));
    setUsers(fetchedUsers);
    setSearched(true);
  };

  const handleFreeze = (days) => {
    const freezeDate = new Date();
    freezeDate.setDate(freezeDate.getDate() + parseInt(days));
    const newUsers = users.map(user => {
      if (user.id === selectedUser.id) {
        return { ...user, freezeDays: days, freezeUntil: freezeDate, isFrozen: true };
      }
      return user;
    });
    setUsers(newUsers);
    setFreezeOpen(false);
  };

  const openFreezeModal = (user) => {
    setSelectedUser(user);
    setFreezeOpen(true);
  };

  const unfreezeUser = (userId) => {
    const newUsers = users.map(user => {
      if (user.id === userId) {
        return { ...user, freezeDays: '', freezeUntil: null, isFrozen: false };
      }
      return user;
    });
    setUsers(newUsers);
  };

  return (
    <div className="container mx-auto p-6 h-screen">
      <UserProfileConfirmModal
        isOpen={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        onConfirm={() => handleDelete(selectedUser.id)}
        message="Hesabı silmek istediğinize emin misiniz?"
      />
      <FreezeModal
        isOpen={freezeOpen}
        onClose={() => setFreezeOpen(false)}
        onFreeze={handleFreeze}
      />
      <div className="mb-6">
        <h1 className="text-xl font-bold mb-4">Aramak istediğiniz kişinin adını veya e-postasını girin:</h1>
        <form onSubmit={handleSearch} className="flex gap-4">
          <input
            type="text"
            className="flex-1 p-2 border rounded"
            placeholder="Ad veya e-posta"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
            Ara
          </button>
        </form>
      </div>
      {searched && (
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">İsim</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">E-posta</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Tel No</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Hareketleri</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Hesabı Dondur</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Hesabı Sil</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td className="text-left py-3 px-4">{user.name}</td>
                <td className="text-left py-3 px-4">{user.email}</td>
                <td className="text-left py-3 px-4">{user.phone}</td>
                <td className="text-left py-3 px-4">
                  <button
                    onClick={() => navigate(`/user-actions/${user.id}`)}
                    className="text-blue-500 hover:text-blue-800"
                  >
                    Hareketleri Görüntüle
                  </button>
                </td>
                <td className="text-left py-3 px-4">
                  {user.isFrozen ? `${formatDate(user.freezeUntil)} gününe kadar donduruldu (${calculateDaysLeft(user.freezeUntil)} gün kaldı)` : (
                    <button
                      onClick={() => openFreezeModal(user)}
                      className="text-yellow-500 hover:text-yellow-800"
                    >
                      Hesabı Dondur
                    </button>
                  )}
                  {user.isFrozen && (
                    <button
                      onClick={() => unfreezeUser(user.id)}
                      className="text-green-500 hover:text-green-800 ml-2"
                    >
                      Aktive Et
                    </button>
                  )}
                </td>
                <td className="text-left py-3 px-4">
                  <button
                    onClick={() => openConfirmModal(user)}
                    className="text-red-500 hover:text-red-800"
                  >
                    Sil
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserProileActions;

