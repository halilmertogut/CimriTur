import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const PasswordResetForm = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [passwordStrength, setPasswordStrength] = useState('');

  useEffect(() => {
    const strength = getPasswordStrength(password);
    setPasswordStrength(strength);
    setPasswordsMatch(password === confirmPassword);
  }, [password, confirmPassword]);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordShown(!confirmPasswordShown);
  };

  
  const getPasswordStrength = (pass) => {
    const lengthScore = pass.length > 9 ? 1 : 0;
    const upperCaseScore = /[A-Z]/.test(pass) ? 1 : 0;
    const numberScore = /[0-9]/.test(pass) ? 1 : 0;
    const totalScore = lengthScore + upperCaseScore + numberScore;

    if (totalScore === 3) {
      return 'Güçlü Şifre';
    } else if (totalScore === 2) {
      return 'Orta Şifre';
    } else {
      return 'Zayıf Şifre';
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (passwordsMatch && passwordStrength === 'Güçlü Şifre') {
      fetch(`http://localhost:3000/api/reset-password/${token}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newPassword: password })
      })
      .then(response => response.json())
      .then(data => {
        toast.success('Şifre başarıyla sıfırlandı.', {
          onClose: () => {
            setTimeout(() => {
              navigate('/');
            }, 2000);
          }
        });
      })
      .catch(error => {
        console.error('Error:', error);
        toast.error('Şifre sıfırlama başarısız.');
      });
    } else {
      toast.warning('Şifre güçlü değil veya eşleşmiyor');
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md">
        <h2 className="text-center text-lg font-semibold text-gray-800">Şifre Yenileme</h2>
        <p className="mt-2 text-sm text-gray-600">
          Şifreniz en az 7 karakter olmalıdır, büyük harf ve rakam içermelidir.
        </p>

        <div className="mt-4 relative">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="password">
            Yeni Şifre
          </label>
          <input
            id="password"
            type={passwordShown ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full px-4 py-2 mt-2 border rounded-md focus:border-orange-400 focus:ring-orange-400"
            placeholder="Yeni Şifre"
            required
            minLength="7"
          />
          <div
            className="absolute inset-y-12 right-0 flex items-center pr-3 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {passwordShown ? <AiFillEyeInvisible /> : <AiFillEye />}
          </div>
        </div>

        <div className="mt-4 relative">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="confirmPassword">
            Yeni Şifre Tekrar
          </label>
          <input
  id="confirmPassword"
  type={confirmPasswordShown ? 'text' : 'password'}
  value={confirmPassword}
  onChange={(e) => setConfirmPassword(e.target.value)}
  className="block w-full px-4 py-2 mt-2 border rounded-md focus:border-orange-400 focus:ring-orange-400"
  placeholder="Yeni Şifre Tekrar"
  required
  minLength="7"
/>
          {!passwordsMatch && confirmPassword && (
            <p className="text-red-500 text-sm">Girmiş olduğunuz şifreler aynı değil.</p>
          )}
          <p className={`text-sm ${passwordStrength === 'Güçlü Şifre' ? 'text-green-500' : passwordStrength === 'Orta Şifre' ? 'text-yellow-500' : 'text-red-500'}`}>
            {password && passwordStrength}
          </p>
          <div
            className="absolute inset-y-12 right-0 flex items-center pr-3 cursor-pointer"
            onClick={toggleConfirmPasswordVisibility}
          >
            {confirmPasswordShown ? <AiFillEyeInvisible /> : <AiFillEye />}
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-red-500 rounded hover:bg-orange-600"
          >
            Kaydet
          </button>
        </div>
      </form>
    </div>
  );
};

export default PasswordResetForm;
