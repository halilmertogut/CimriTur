import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Input, Button, Checkbox, DatePicker, Typography, Divider, Tooltip } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, PhoneOutlined, EyeInvisibleOutlined, EyeTwoTone, GoogleOutlined, AppleOutlined, CalendarOutlined } from '@ant-design/icons';
import bgVideo from '../../images/heroVideo2.mp4';
import moment from 'moment';
import { motion } from 'framer-motion';
import 'moment/locale/tr';

const { Title, Text } = Typography;

const SignUp = () => {
  const [form] = Form.useForm();
  const [passwordStrength, setPasswordStrength] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    form.setFieldsValue({
      dateOfBirth: moment().subtract(18, 'years')
    });
  }, [form]);

  const getPasswordStrength = (pass) => {
    const lengthScore = pass.length >= 7 ? 1 : 0;
    const upperCaseScore = /[A-Z]/.test(pass) ? 1 : 0;
    const numberScore = /[0-9]/.test(pass) ? 1 : 0;
    const specialCharScore = /[^A-Za-z0-9]/.test(pass) ? 1 : 0;
    const totalScore = lengthScore + upperCaseScore + numberScore + specialCharScore;

    if (pass.length < 7) {
      return 'Şifre Çok Kısa';
    } else if (totalScore === 4) {
      return 'Güçlü Şifre';
    } else if (totalScore >= 2) {
      return 'Orta Şifre';
    } else {
      return 'Zayıf Şifre';
    }
  };

  const handleSubmit = async (values) => {
    if (values.password !== values.confirmPassword) {
      toast.error("Parolalar uyuşmuyor. Lütfen parolanızı kontrol edin.");
      return;
    }

    if (!values.agreeToTerms) {
      toast.error("Şartları ve koşulları kabul etmelisiniz.");
      return;
    }

    const user = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phone: values.phone,
      password: values.password,
      dateOfBirth: values.dateOfBirth.format('DD/MM/YYYY'),
      agreeToTerms: values.agreeToTerms,
    };

    try {
      const response = await fetch("http://localhost:3000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Server responded with an error!");
      }

      const text = await response.text();
      toast.success(text);
      setTimeout(() => {
        navigate("/signupAuthentication", {
          state: {
            email: values.email,
            firstName: values.firstName,
            lastName: values.lastName,
          },
        });
      }, 2000);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white font-sans">
      <video autoPlay muted loop id="myVideo" className="absolute w-full h-full object-cover">
        <source src={bgVideo} type="video/mp4" />
      </video>
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="p-8 bg-white bg-opacity-95 rounded-lg shadow-xl z-10"
        style={{ width: '100%', maxWidth: '500px' }}
      >
        <Form form={form} onFinish={handleSubmit} layout="vertical">
          <Title level={3} className="text-center mb-4">Hesap Oluştur</Title>
          <Form.Item>
            <Button type="primary" icon={<GoogleOutlined />} block size="large" className="mb-3">
              Google ile Kayıt Ol
            </Button>
          </Form.Item>
          <Form.Item>
            <Button type="default" icon={<AppleOutlined />} block size="large" className="mb-4">
              Apple ile Kayıt Ol
            </Button>
          </Form.Item>
          <Divider>veya</Divider>
          <Form.Item name="firstName" rules={[{ required: true, message: 'Lütfen adınızı girin' }]}>
            <Input prefix={<UserOutlined />} placeholder="İsim" size="large" />
          </Form.Item>
          <Form.Item name="lastName" rules={[{ required: true, message: 'Lütfen soyadınızı girin' }]}>
            <Input prefix={<UserOutlined />} placeholder="Soyisim" size="large" />
          </Form.Item>
          <Form.Item name="email" rules={[{ required: true, type: 'email', message: 'Lütfen geçerli bir e-posta girin' }]}>
            <Input prefix={<MailOutlined />} placeholder="E-posta" size="large" />
          </Form.Item>
          <Form.Item name="phone" rules={[{ required: true, message: 'Lütfen telefon numaranızı girin' }]}>
            <Input prefix={<PhoneOutlined />} placeholder="Telefon" size="large" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: 'Lütfen parolanızı girin' }]}>
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Parola"
              iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              size="large"
              onChange={(e) => setPasswordStrength(getPasswordStrength(e.target.value))}
            />
            {form.getFieldValue('password') && (
              <Text type={passwordStrength === 'Güçlü Şifre' ? 'success' : passwordStrength === 'Orta Şifre' ? 'warning' : 'danger'}>
                {passwordStrength}
              </Text>
            )}
          </Form.Item>
          <Form.Item name="confirmPassword" rules={[{ required: true, message: 'Lütfen parolanızı tekrar girin' }]}>
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Parolayı Doğrula"
              iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              size="large"
              onChange={(e) => setPasswordsMatch(e.target.value === form.getFieldValue('password'))}
            />
            {!passwordsMatch && (
              <Text type="danger">Girmiş olduğunuz şifreler aynı değil.</Text>
            )}
          </Form.Item>
          <Form.Item name="dateOfBirth" rules={[{ required: true, message: 'Lütfen doğum tarihinizi seçin' }]}>
            <DatePicker
              format="DD/MM/YYYY"
              disabledDate={current => current && current > moment().subtract(18, 'years')}
              suffixIcon={<CalendarOutlined />}
              size="large"
              style={{ width: '100%' }}
            />
          </Form.Item>
          <Form.Item name="agreeToTerms" valuePropName="checked" rules={[{ required: true, message: 'Şartları ve koşulları kabul etmelisiniz' }]}>
            <Checkbox>
              Tüm Şartları ve <a href="/privacy" className="text-blue-500 underline">Gizlilik Politikasını</a> kabul ediyorum
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Tooltip title="Submit your registration details">
              <Button type="primary" htmlType="submit" block size="large">
                Hesabı Doğrula
              </Button>
            </Tooltip>
          </Form.Item>
        </Form>
      </motion.div>
    </div>
  );
};

export default SignUp;
