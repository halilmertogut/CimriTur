import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Typography, Alert, Space } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const AgencyLogin = () => {
    const [error, setError] = useState('');

    const handleLogin = async (values) => {
        setError('');

        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values)
            });
            
            const data = await response.json();
            if (response.status >= 400) {
                throw new Error(data.message || 'Authentication failed');
            }

            localStorage.setItem('token', data.token);
            window.location.href = '/dashboard';
        } catch (error) {
            setError(error.message || 'An error occurred during login');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8 font-montserrat">
            <div className="max-w-md w-full space-y-8">
                <div className="text-center">
                    <Title level={2} className="text-gray-900">
                        Agency Login
                    </Title>
                </div>
                {error && <Alert message={error} type="error" showIcon />}
                <Form
                    name="login"
                    initialValues={{ remember: true }}
                    onFinish={handleLogin}
                    layout="vertical"
                    className="mt-8 space-y-6"
                >
                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[{ required: true, message: 'Please input your Email!' }]}
                    >
                        <Input
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder="Email address"
                            size="large"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            placeholder="Password"
                            size="large"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Space align="baseline">
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>
                            <a href="./AgencyForgetPassword" className="login-form-forgot">
                                Forgot your password?
                            </a>
                        </Space>
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            size="large"
                            className="w-full bg-gradient-to-br from-indigo-500 to-indigo-800"
                        >
                            Sign In
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default AgencyLogin;
