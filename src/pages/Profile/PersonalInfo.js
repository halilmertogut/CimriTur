import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { Form, Input, Button, Typography, Card, Divider } from 'antd';
import { setCredentials } from '../../redux/authSlice';
import Navbar from "./Navbar";

const { Title, Text } = Typography;

const PersonalInfo = () => {
    const user = useSelector(state => state.auth.user);
    const token = useSelector(state => state.auth.token);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [contactInfo, setContactInfo] = useState({
        email: user.email || '',
        phone: user.phone || '',
        currentPassword: ''
    });

    const [passwordInfo, setPasswordInfo] = useState({
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: ''
    });

    const handleContactChange = (e) => {
        setContactInfo({ ...contactInfo, [e.target.id]: e.target.value });
    };

    const handlePasswordChange = (e) => {
        setPasswordInfo({ ...passwordInfo, [e.target.id]: e.target.value });
    };

    const updateContactInfo = async (e) => {
        e.preventDefault();
        if (!contactInfo.currentPassword) {
            toast.error('Please enter your current password to update your contact information.');
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/api/users/update-contact-info', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(contactInfo)
            });
            const result = await response.json();
            if (!response.ok) throw new Error(result.message);
            toast.success('Contact info updated successfully!');
            dispatch(setCredentials({ user: result.user, token }));
            setTimeout(() => {
                navigate('/profile');
            }, 2000);
        } catch (error) {
            toast.error('Error updating contact info: ' + error.message);
        }
    };

    const updatePassword = async (e) => {
        e.preventDefault();
        if (!passwordInfo.currentPassword || passwordInfo.newPassword !== passwordInfo.confirmNewPassword) {
            toast.error('Please check your passwords and ensure they match.');
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/api/users/change-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    currentPassword: passwordInfo.currentPassword,
                    newPassword: passwordInfo.newPassword
                })
            });
            const result = await response.json();
            if (!response.ok) throw new Error(result.message);
            toast.success('Password changed successfully!');
            setTimeout(() => {
                navigate('/profile');
            }, 2000);
        } catch (error) {
            toast.error('Error changing password: ' + error.message);
        }
    };

    return (
        <div className="flex flex-col h-auto font-montserrat">
            <Navbar />
            <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            <div className="flex justify-center items-center mt-10 w-full">
                <Card className="w-full max-w-lg shadow-lg p-8 rounded-lg">
                    <Title level={3} className="text-center mb-6">Kişisel Bilgiler</Title>
                    <Form layout="vertical" onFinish={updateContactInfo}>
                        <Form.Item label="İsim">
                            <Text>{user.firstName}</Text>
                        </Form.Item>
                        <Form.Item label="Soyisim">
                            <Text>{user.lastName}</Text>
                        </Form.Item>
                        <Form.Item label="E-posta" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
                            <Input id="email" value={contactInfo.email} onChange={handleContactChange} />
                        </Form.Item>
                        <Form.Item label="Telefon" name="phone" rules={[{ required: true, message: 'Please input your phone number!' }]}>
                            <Input id="phone" value={contactInfo.phone} onChange={handleContactChange} />
                        </Form.Item>
                        <Form.Item label="Mevcut Şifre (for verification)" name="currentPassword" rules={[{ required: true, message: 'Please input your current password!' }]}>
                            <Input.Password id="currentPassword" value={contactInfo.currentPassword} onChange={handleContactChange} />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" block>
                                Update Contact Info
                            </Button>
                        </Form.Item>
                    </Form>
                    <Divider />
                    <Title level={4} className="text-center mb-4">Şifre Değiştir</Title>
                    <Form layout="vertical" onFinish={updatePassword}>
                        <Form.Item label="Mevcut Şifre" name="currentPassword" rules={[{ required: true, message: 'Please input your current password!' }]}>
                            <Input.Password id="currentPassword" value={passwordInfo.currentPassword} onChange={handlePasswordChange} />
                        </Form.Item>
                        <Form.Item label="Yeni Şifre" name="newPassword" rules={[{ required: true, message: 'Please input your new password!' }]}>
                            <Input.Password id="newPassword" value={passwordInfo.newPassword} onChange={handlePasswordChange} />
                        </Form.Item>
                        <Form.Item label="Yeni Şifreyi Doğrula" name="confirmNewPassword" rules={[{ required: true, message: 'Please confirm your new password!' }]}>
                            <Input.Password id="confirmNewPassword" value={passwordInfo.confirmNewPassword} onChange={handlePasswordChange} />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" block>
                                Change Password
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        </div>
    );
};

export default PersonalInfo;
