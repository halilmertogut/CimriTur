import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { Form, Input, Button, Card, Alert, Tooltip } from 'antd';
import { UserOutlined, LockOutlined, SmileOutlined, CoffeeOutlined } from '@ant-design/icons';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    const loginSuccessful = await login(values.username, values.password);
    if (loginSuccessful) {
      navigate('/main-admin-dashboard');
    } else {
      setLoginError(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-700">
      <Card className="max-w-sm w-full p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">
          Welcome, Wizard! <SmileOutlined />
        </h2>
        {loginError && (
          <Alert
            message="Incorrect username or password"
            type="error"
            showIcon
            className="mb-4"
          />
        )}
        <Form onFinish={handleLogin}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please enter your wizard name!' }]}
          >
            <Input
              prefix={<UserOutlined className="text-gray-400" />}
              placeholder="Wizard Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              suffix={
                <Tooltip title="Hint: It's your email address">
                  <SmileOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                </Tooltip>
              }
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please enter your magic password!' }]}
          >
            <Input.Password
              prefix={<LockOutlined className="text-gray-400" />}
              placeholder="Magic Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              suffix={
                <Tooltip title="Hint: It's a secret spell">
                  <CoffeeOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                </Tooltip>
              }
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold py-2 px-4 rounded-full shadow-lg"
            >
              Cast Spell
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default AdminLogin;
