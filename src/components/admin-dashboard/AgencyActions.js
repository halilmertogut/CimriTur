import React, { useState, useEffect } from 'react';
import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineEye } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { Layout, Card, List, Input, Spin, notification, Typography } from 'antd';

const { Header, Content } = Layout;
const { Title } = Typography;
const { Search } = Input;

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
    <Card hoverable className="mb-4">
        <List.Item>
            <List.Item.Meta
                title={<span className="font-semibold">{agency.companyName}</span>}
            />
            <div>
                {agency.status === 'waiting' && (
                    <>
                        <AiOutlineCheckCircle
                            className="text-green-600 hover:text-green-800 mr-3 cursor-pointer"
                            onClick={() => onStatusChange(agency._id, 'approve')}
                        />
                        <AiOutlineCloseCircle
                            className="text-red-600 hover:text-red-800 cursor-pointer"
                            onClick={() => onStatusChange(agency._id, 'reject')}
                        />
                    </>
                )}
                <AiOutlineEye
                    className="text-blue-600 hover:text-blue-800 ml-3 cursor-pointer"
                    onClick={() => onViewDetails(agency._id)}
                />
            </div>
        </List.Item>
    </Card>
);

const AgencySection = ({ title, agencies, onStatusChange, onViewDetails }) => (
    <Card title={title} className="mb-6">
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
    </Card>
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
                notification.success({ message: `Agency ${status}d successfully` });
            })
            .catch(error => {
                console.error(`Failed to ${status} agency:`, error);
                notification.error({ message: `Failed to ${status} agency` });
            });
        }
    };

    const filteredAgencies = (status) => agencies.filter(agency =>
        (agency.status === status || status === 'all') &&
        agency.companyName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (isLoading) return <Spin className="flex justify-center items-center min-h-screen" />;
    if (error) return <div className="text-center text-red-600">Error: {error}</div>;

    return (
        <Layout style={{ minHeight: '100vh',background: 'white' }}>
            <Header className="site-layout-background" style={{ padding: 0, background: 'white' }}>
            </Header>
            <Content style={{ margin: '16px' }}>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360, background: 'white' }}>
                    <Search
                        placeholder="Search Agencies..."
                        enterButton="Search"
                        size="large"
                        onSearch={value => setSearchQuery(value)}
                        className="mb-6"
                    />
                    <AgencySection
                        title="All Agencies"
                        agencies={filteredAgencies('all')}
                        onStatusChange={updateAgencyStatus}
                        onViewDetails={(id) => navigate(`agency-details/${id}`)}
                    />
                    <AgencySection
                        title="Waiting for Approval"
                        agencies={filteredAgencies('waiting')}
                        onStatusChange={updateAgencyStatus}
                        onViewDetails={(id) => navigate(`agency-details/${id}`)}
                    />
                    <AgencySection
                        title="Approved Agencies"
                        agencies={filteredAgencies('approved')}
                        onStatusChange={updateAgencyStatus}
                        onViewDetails={(id) => navigate(`agency-details/${id}`)}
                    />
                    <AgencySection
                        title="Rejected Agencies"
                        agencies={filteredAgencies('rejected')}
                        onStatusChange={updateAgencyStatus}
                        onViewDetails={(id) => navigate(`agency-details/${id}`)}
                    />
                </div>
            </Content>
        </Layout>
    );
};

export default AgencyActions;
