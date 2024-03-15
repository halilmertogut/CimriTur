import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerSuccess, registerFail } from '../redux/authSlice';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const location = useLocation();

  // AccountType'ı pathname'e göre belirleyin
  const [accountType, setAccountType] = useState('customer');

  useEffect(() => {
    if (location.pathname === '/register-guide') {
      setAccountType('tourguide');
    } else {
      setAccountType('customer');
    }
  }, [location]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getTitle = () => {
    if (accountType === 'tourguide') {
      return 'Rehber Hesabı Oluşturma';
    } else if (accountType === 'customer') {
      return 'Müşteri Hesabı Oluşturma';
    }
  };

  console.group(accountType);
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/register', { name, email, password, imageUrl, accountType });
      console.log(response.data);

      if (response.status === 201) {
        dispatch(registerSuccess(response.data.user));
        navigate("/login");
      } else {
        const unexpectedError = `Registration failed with status code: ${response.status}`;
        console.error(unexpectedError);
        dispatch(registerFail(unexpectedError));
      }
    } catch (error) {
      console.error('Error during registration:', error);
      const errorMessage = error.response?.data?.message || 'Unknown error occurred';
      dispatch(registerFail(errorMessage));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-4">{getTitle()}</h1>
        <div>
          <label className="block text-sm font-medium text-gray-700">İsim - Soyisim</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Şifre</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <button
          onClick={handleRegister}
          className="w-full mt-6 bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Kayıt Ol
        </button>
      </div>
    </div>
  );
};

export default Register;
