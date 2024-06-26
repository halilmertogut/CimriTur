import React, { useState } from 'react';
import { Modal, Form, Input, Button, Checkbox, Tooltip, Typography } from 'antd';
import { EyeTwoTone, EyeInvisibleOutlined, MailOutlined, LockOutlined, GoogleOutlined, AppleOutlined } from '@ant-design/icons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../redux/authSlice'; // adjust the path as needed
import { motion } from 'framer-motion';

const { Title } = Typography;

export default function Login({ open, setOpen }) {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (values) => {
    try {
      const response = await fetch('http://localhost:3000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: values.email, password: values.password }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Bir hata oluştu.');
      }

      dispatch(setCredentials({ user: data.user, token: data.token }));
      toast.success('Giriş başarılı!');
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Modal
      visible={open}
      footer={null}
      onCancel={() => setOpen(false)}
      centered
      width={450}
      className="login-modal"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        <div className="text-center text-sky-700 text-3xl font-bold mb-8">Giriş Yap</div>
        <Form
          name="login"
          onFinish={handleSubmit}
          layout="vertical"
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Lütfen e-posta adresinizi girin!' }]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="name@example.com"
              size="large"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Lütfen parolanızı girin!' }]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type={showPassword ? 'text' : 'password'}
              placeholder="Şifrenizi giriniz"
              iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              size="large"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Beni hatırla</Checkbox>
            </Form.Item>
            <a className="login-form-forgot" href="/reset-password" style={{ float: 'right' }}>
              Şifrenizi mi unuttunuz?
            </a>
          </Form.Item>
          <Form.Item>
            <Tooltip title="Submit your login details">
              <Button type="primary" htmlType="submit" block size="large">
                Giriş Yap
              </Button>
            </Tooltip>
          </Form.Item>
        </Form>
        <div className="space-y-4 mb-6">
          <Button type="primary" icon={<GoogleOutlined />} block size="large" className="mb-3">
            Google ile Giriş Yap
          </Button>
          <Button type="default" icon={<AppleOutlined />} block size="large">
            Apple ile Giriş Yap
          </Button>
        </div>
      </motion.div>
    </Modal>
  );
}
