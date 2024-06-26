import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, List, Card, Button, Modal, Space, Typography, message } from 'antd';
import { EyeOutlined, LockOutlined, UnlockOutlined, DeleteOutlined, InfoCircleOutlined } from '@ant-design/icons';
import UserFreezeModal from './UserFreezeModal';
import UserProfileConfirmModal from './UserProfileConfirmModal';

const { Title } = Typography;

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
        message.success('Kullanıcı başarıyla donduruldu!');
    };

    const handleDelete = (userId) => {
        setUsers(users.filter(user => user.id !== userId));
        setConfirmOpen(false);
        message.success('Kullanıcı başarıyla silindi!');
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
        message.success('Kullanıcı başarıyla çözüldü!');
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
            <Title level={2} className="text-center mb-6">Kullanıcı Yönetim Paneli - Hoşgeldiniz</Title>
            <div className="grid grid-cols-2 gap-5">
                {/* Kullanıcı Ara Section */}
                <Card title="Kullanıcı Ara" bordered={false}>
                    <Input
                        placeholder="Kullanıcı ara"
                        value={query}
                        onChange={(e) => setQuery(e.target.value.toLowerCase())}
                        className="mb-4"
                    />
                    <List
                        dataSource={users.filter(user => !user.isFrozen && (user.name.toLowerCase().includes(query) || user.email.toLowerCase().includes(query)))}
                        renderItem={user => (
                            <List.Item actions={[
                                <Button type="link" icon={<EyeOutlined />} onClick={() => handleNavigate(user.id)} />,
                                <Button type="link" icon={<LockOutlined />} onClick={() => openFreezeModal(user)} />,
                                <Button type="link" icon={<DeleteOutlined />} onClick={() => openConfirmModal(user)} />
                            ]}>
                                {user.name}
                            </List.Item>
                        )}
                    />
                </Card>
                {/* Dondurulmuş Kullanıcılar Section */}
                <Card title="Dondurulmuş Kullanıcılar" bordered={false}>
                    <Input
                        placeholder="Dondurulmuş kullanıcıları ara"
                        value={frozenQuery}
                        onChange={(e) => setFrozenQuery(e.target.value.toLowerCase())}
                        className="mb-4"
                    />
                    <List
                        dataSource={users.filter(user => user.isFrozen && (user.name.toLowerCase().includes(frozenQuery) || user.email.toLowerCase().includes(frozenQuery)))}
                        renderItem={user => (
                            <List.Item actions={[
                                <Button type="link" icon={<UnlockOutlined />} onClick={() => unfreezeUser(user.id)} />,
                                <Button type="link" icon={<InfoCircleOutlined />} onClick={() => handleNavigate(user.id)} />
                            ]}>
                                <List.Item.Meta
                                    title={user.name}
                                    description={`Donduruldu: ${formatDate(user.freezeUntil)} kadar, ${calculateDaysLeft(user.freezeUntil)} gün kaldı`}
                                />
                            </List.Item>
                        )}
                    />
                </Card>
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
