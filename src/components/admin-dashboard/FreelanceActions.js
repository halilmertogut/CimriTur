import React, { useState } from 'react';
import { AiOutlineDelete, AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineEye, AiOutlineLock, AiOutlineUnlock, AiOutlineInfoCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { Modal, Input, List, Button, Card, Typography, Divider } from 'antd';
import FreelancerFreezeModal from './FreelancerFreezeModal';

const { Search } = Input;
const { Title } = Typography;

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
        Modal.confirm({
            title: 'Reddetme Sebebi',
            content: (
                <Input.TextArea
                    rows={4}
                    placeholder="Lütfen reddetme sebebinizi giriniz"
                    onChange={e => setFreelancers(freelancers.map(freelancer =>
                        freelancer.id === id ? { ...freelancer, rejectionReason: e.target.value, rejectedBy: currentAdmin.name } : freelancer
                    ))}
                />
            ),
            onOk() {
                setFreelancers(freelancers.map(freelancer =>
                    freelancer.id === id ? { ...freelancer, approved: false, rejectionReason: freelancer.rejectionReason, rejectedBy: currentAdmin.name } : freelancer
                ));
            }
        });
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
        Modal.confirm({
            title: 'Bu serbest çalışanı silmek istediğinizden emin misiniz?',
            onOk() {
                setFreelancers(freelancers.filter(freelancer => freelancer.id !== id));
            }
        });
    };

    const calculateDaysLeft = freezeUntil => {
        if (!freezeUntil) return 0;
        const difference = new Date(freezeUntil) - new Date();
        return Math.ceil(difference / (1000 * 60 * 60 * 24));
    };

    return (
        <div className="container mx-auto p-6 min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
                {/* Approval Required Section */}
                <Card title="Onay Gerekiyor" className="shadow-lg">
                    <Search
                        placeholder="Serbest çalışan ara"
                        value={approvalQuery}
                        onChange={(e) => setApprovalQuery(e.target.value.toLowerCase())}
                        enterButton
                        className="mb-4"
                    />
                    <List
                        itemLayout="horizontal"
                        dataSource={freelancers.filter(freelancer => !freelancer.approved && !freelancer.rejectionReason && freelancer.name.toLowerCase().includes(approvalQuery))}
                        renderItem={freelancer => (
                            <List.Item
                                actions={[
                                    <AiOutlineCheckCircle className="text-green-500 hover:text-green-600 text-xl" onClick={() => approveFreelancer(freelancer.id)} />,
                                    <AiOutlineCloseCircle className="text-red-500 hover:text-red-600 text-xl" onClick={() => rejectFreelancer(freelancer.id)} />,
                                    <AiOutlineInfoCircle className="text-blue-500 hover:text-red-600 text-xl" onClick={() => handleNavigate(freelancer.id, 'freelancer-details')} />
                                ]}
                            >
                                <List.Item.Meta title={freelancer.name} />
                            </List.Item>
                        )}
                    />
                </Card>

                {/* Approved Freelancers */}
                <Card title="Onaylanmış Serbest Çalışanlar" className="shadow-lg">
                    <Search
                        placeholder="Serbest çalışan ara"
                        value={approvedQuery}
                        onChange={(e) => setApprovedQuery(e.target.value.toLowerCase())}
                        enterButton
                        className="mb-4"
                    />
                    <List
                        itemLayout="horizontal"
                        dataSource={freelancers.filter(freelancer => freelancer.approved && freelancer.name.toLowerCase().includes(approvedQuery))}
                        renderItem={freelancer => (
                            <List.Item
                                actions={[
                                    <AiOutlineEye className="text-blue-500 hover:text-blue-600 text-xl" onClick={() => handleNavigate(freelancer.id, 'freelancer-actions')} />
                                ]}
                            >
                                <List.Item.Meta
                                    title={freelancer.name}
                                    description={`Onaylandı (Tarafından: ${freelancer.approvedBy})`}
                                />
                            </List.Item>
                        )}
                    />
                </Card>

                {/* Rejected Freelancers */}
                <Card title="Reddedilmiş Serbest Çalışanlar" className="shadow-lg">
                    <Search
                        placeholder="Serbest çalışan ara"
                        value={rejectedQuery}
                        onChange={(e) => setRejectedQuery(e.target.value.toLowerCase())}
                        enterButton
                        className="mb-4"
                    />
                    <List
                        itemLayout="horizontal"
                        dataSource={freelancers.filter(freelancer => freelancer.rejectionReason && freelancer.name.toLowerCase().includes(rejectedQuery))}
                        renderItem={freelancer => (
                            <List.Item
                                actions={[
                                    <AiOutlineInfoCircle className="text-blue-500 hover:text-blue-600 text-xl" onClick={() => handleNavigate(freelancer.id, 'freelancer-details')} />
                                ]}
                            >
                                <List.Item.Meta
                                    title={freelancer.name}
                                    description={`Reddedildi (Sebep: ${freelancer.rejectionReason}, Tarafından: ${freelancer.rejectedBy})`}
                                />
                            </List.Item>
                        )}
                    />
                </Card>
            </div>

            <Divider />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                {/* Search Freelancer Section */}
                <Card title="Serbest Çalışan Ara" className="shadow-lg">
                    <Search
                        placeholder="Serbest çalışan ara"
                        value={query}
                        onChange={(e) => setQuery(e.target.value.toLowerCase())}
                        enterButton
                        className="mb-4"
                    />
                    <List
                        itemLayout="horizontal"
                        dataSource={freelancers.filter(freelancer => freelancer.name.toLowerCase().includes(query))}
                        renderItem={freelancer => (
                            <List.Item
                                actions={[
                                    <AiOutlineEye className="text-blue-500 hover:text-blue-600 text-xl" onClick={() => handleNavigate(freelancer.id, 'freelancer-actions')} />,
                                    freelancer.isFrozen ? (
                                        <>
                                            <span className="text-red-500">Donduruldu ({freelancer.freezeUntil.toLocaleDateString()} kadar, {calculateDaysLeft(freelancer.freezeUntil)} gün kaldı, tarafından: {freelancer.frozenBy})</span>
                                            <AiOutlineUnlock className="ml-2 text-green-500 hover:text-green-600 text-xl" onClick={() => unfreezeFreelancer(freelancer.id)} />
                                        </>
                                    ) : (
                                        <AiOutlineLock className="text-yellow-500 hover:text-yellow-800 text-xl" onClick={() => freezeAccount(freelancer.id)} />
                                    ),
                                    <AiOutlineDelete className="text-red-500 hover:text-red-600 text-xl" onClick={() => deleteFreelancer(freelancer.id)} />
                                ]}
                            >
                                <List.Item.Meta title={freelancer.name} />
                            </List.Item>
                        )}
                    />
                </Card>

                {/* Frozen Freelancers */}
                <Card title="Dondurulmuş Serbest Çalışanlar" className="shadow-lg">
                    <Search
                        placeholder="Dondurulmuş serbest çalışanları ara"
                        value={frozenQuery}
                        onChange={(e) => setFrozenQuery(e.target.value.toLowerCase())}
                        enterButton
                        className="mb-4"
                    />
                    <List
                        itemLayout="horizontal"
                        dataSource={freelancers.filter(freelancer => freelancer.isFrozen && freelancer.name.toLowerCase().includes(frozenQuery))}
                        renderItem={freelancer => (
                            <List.Item
                                actions={[
                                    <AiOutlineUnlock className="ml-2 text-green-500 hover:text-green-600 text-xl" onClick={() => unfreezeFreelancer(freelancer.id)} />,
                                    <AiOutlineEye className="text-blue-500 hover:text-blue-600 text-xl" onClick={() => handleNavigate(freelancer.id, 'freelancer-actions')} />
                                ]}
                            >
                                <List.Item.Meta
                                    title={freelancer.name}
                                    description={`Donduruldu (${freelancer.freezeUntil.toLocaleDateString()} kadar, ${calculateDaysLeft(freelancer.freezeUntil)} gün kaldı, tarafından: ${freelancer.frozenBy})`}
                                />
                            </List.Item>
                        )}
                    />
                </Card>
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
