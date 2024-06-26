import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Typography, Alert } from 'antd';

const { Title } = Typography;

const AgencySignUp = () => {
  const [formState, setFormState] = useState({
    companyName: '',
    authorizedSignatory: '',
    companyEmail: '',
    companyPhone: '',
    authorizedMobile: '',
    companyTitle: '',
    city: '',
    district: '',
    taxNumber: '',
    taxOffice: '',
    invoiceAddress: '',
    domainName: '',
    adminEmail: '',
    adminPassword: '',
    confirmAdminPassword: '',
    packageType: '',
    packageDuration: '',
    referenceCode: '', // Optional field
    agreements: {
      salesContract: false,
      privacyPolicy: false,
      kvkk: false // Assume KVKK is similar to GDPR
    }
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormState(prev => ({
        ...prev,
        agreements: {
          ...prev.agreements,
          [name]: checked
        }
      }));
    } else {
      setFormState(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async () => {
    setError('');
    if (!Object.values(formState).every(value => (value !== '' || typeof value === 'boolean'))) {
      setError('Lütfen tüm zorunlu alanları doldurunuz.');
      return;
    }
    if (formState.adminPassword !== formState.confirmAdminPassword) {
      setError('Girilen şifreler birbiriyle uyuşmuyor.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/agency/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState)
      });

      if (response.ok) {
        const result = await response.json();
        alert('Kayıt başarıyla tamamlandı.');
        console.log(result);
      } else {
        throw new Error('Acenta kaydı başarısız oldu.');
      }
    } catch (error) {
      console.error('Form gönderimi sırasında bir hata oluştu:', error);
      setError('Form gönderimi sırasında bir hata oluştu.');
    }
  };

  return (
    <div className="container mx-auto pt-10 font-montserrat sm:w-full md:w-3/4 lg:w-1/2 mt-10 bg-white shadow-2xl p-20 rounded-xl">
      <Title level={2} className="text-center mb-10">Acenta Kayıt Formu</Title>
      {error && <Alert message={error} type="error" showIcon className="mb-5" />}
      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item label="Şirket İsmi" required>
          <Input name="companyName" value={formState.companyName} onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Yetkili Kişi" required>
          <Input name="authorizedSignatory" value={formState.authorizedSignatory} onChange={handleChange} />
        </Form.Item>
        <Form.Item label="E-Posta Adresi" required>
          <Input name="companyEmail" value={formState.companyEmail} onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Telefon Numarası" required>
          <Input name="companyPhone" value={formState.companyPhone} onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Yetkili Kişinin Cep Telefonu" required>
          <Input name="authorizedMobile" value={formState.authorizedMobile} onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Şirket Ünvanı" required>
          <Input name="companyTitle" value={formState.companyTitle} onChange={handleChange} />
        </Form.Item>
        <Form.Item label="İl" required>
          <Input name="city" value={formState.city} onChange={handleChange} />
        </Form.Item>
        <Form.Item label="İlçe" required>
          <Input name="district" value={formState.district} onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Vergi Numarası" required>
          <Input name="taxNumber" value={formState.taxNumber} onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Vergi Dairesi" required>
          <Input name="taxOffice" value={formState.taxOffice} onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Fatura Adresi" required>
          <Input name="invoiceAddress" value={formState.invoiceAddress} onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Alan Adı" required>
          <Input name="domainName" value={formState.domainName} onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Yönetici E-Posta" required>
          <Input name="adminEmail" value={formState.adminEmail} onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Yönetici Şifresi" required>
          <Input.Password name="adminPassword" value={formState.adminPassword} onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Şifreyi Onayla" required>
          <Input.Password name="confirmAdminPassword" value={formState.confirmAdminPassword} onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Paket Tipi" required>
          <Input name="packageType" value={formState.packageType} onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Paket Süresi" required>
          <Input name="packageDuration" value={formState.packageDuration} onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Referans Kodu">
          <Input name="referenceCode" value={formState.referenceCode} onChange={handleChange} />
        </Form.Item>
        <Form.Item>
          <Checkbox name="salesContract" checked={formState.agreements.salesContract} onChange={handleChange}>
            Satış Sözleşmesi
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <Checkbox name="privacyPolicy" checked={formState.agreements.privacyPolicy} onChange={handleChange}>
            Gizlilik Politikası
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <Checkbox name="kvkk" checked={formState.agreements.kvkk} onChange={handleChange}>
            KVKK Uyumu
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Kayıt Ol
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AgencySignUp;
