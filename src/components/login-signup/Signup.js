import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'; // Default styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import bgVideo from '../../images/heroVideo2.mp4';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "", // Email için ayrı bir alan
    phone: "", // Telefon için ayrı bir alan
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    agreeToTerms: false,
    rememberMe: false,
  });

  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);

useEffect(() => {
  setPasswordsMatch(formData.password === formData.confirmPassword);
}, [formData.password, formData.confirmPassword]);

  useEffect(() => {
    setPasswordStrength(getPasswordStrength(formData.password));
  }, [formData.password, formData.confirmPassword]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "phone") {
      setFormData((prev) => ({
        ...prev,
        phone: value,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const getMinDate = () => {
    const today = new Date();
    return new Date(
      today.getFullYear() - 18,
      today.getMonth(),
      today.getDate()
    );
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({
      ...prev,
      dateOfBirth: date,
    }));
  };

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordShown(!confirmPasswordShown);
  };

  const getPasswordStrength = (pass) => {
    const lengthScore = pass.length >= 7 ? 1 : 0; // Ensure minimum length of 7
    const upperCaseScore = /[A-Z]/.test(pass) ? 1 : 0;
    const numberScore = /[0-9]/.test(pass) ? 1 : 0;
    const specialCharScore = /[^A-Za-z0-9]/.test(pass) ? 1 : 0;
    const totalScore = lengthScore + upperCaseScore + numberScore + specialCharScore;
  
    if (pass.length < 7) {
      return 'Şifre Çok Kısa'; // Password too short
    } else if (totalScore === 4) {
      return 'Güçlü Şifre'; // Strong Password
    } else if (totalScore >= 2) {
      return 'Orta Şifre'; // Medium Password
    } else {
      return 'Zayıf Şifre'; // Weak Password
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      toast.error("Parolalar uyuşmuyor. Lütfen parolanızı kontrol edin.");
      return;
    }

    // Check if terms are agreed
    if (!formData.agreeToTerms) {
      toast.error("Şartları ve koşulları kabul etmelisiniz.");
      return;
    }

    // Check if the password is at least 7 characters long
    if (formData.password.length < 7) {
      toast.error("Parolanız en az 7 karakter uzunluğunda olmalıdır.");
      return;
    }

    // Create the user object for the API request
    const user = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
      dateOfBirth: formData.dateOfBirth,
      agreeToTerms: formData.agreeToTerms,
      rememberMe: formData.rememberMe,
    };

    fetch("http://localhost:3000/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(text || "Server responded with an error!");
          });
        }
        return response.text();
      })
      .then((text) => {
        toast.success(text);
        setTimeout(() => {
          navigate("/signupAuthentication", {
            state: {
              email: formData.email,
              firstName: formData.firstName,
              lastName: formData.lastName,
            },
          });
        }, 2000);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white font-sans">
      <video
        autoPlay
        muted
        loop
        id="myVideo"
        className="absolute w-full h-full object-cover"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="p-8 bg-white bg-opacity-95 rounded-lg shadow-xl z-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-lg font-bold">Hesap Oluştur</h2>
          <div className="space-y-4 mb-6">
            <button className="w-full inline-flex justify-center items-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none">
              <FontAwesomeIcon icon={faGoogle} className="mr-3" />
              Google ile Kayıt Ol
            </button>
            <button className="w-full inline-flex justify-center items-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-black text-base font-medium text-white hover:bg-gray-900 focus:outline-none">
              <FontAwesomeIcon icon={faApple} className="mr-3" />
              Apple ile Kayıt Ol
            </button>
          </div>
          <div className="relative flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-sm text-gray-500 bg-white px-2">
              veya
            </span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="İsim"
            className="form-input w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Soyisim"
            className="form-input w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-posta"
            className="form-input w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          <PhoneInput
            international
            defaultCountry="TR"
            value={formData.phone}
            onChange={(value) => setFormData({ ...formData, phone: value })}
            className="form-input w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
<div className="relative">
  <input
    type={passwordShown ? 'text' : 'password'}
    name="password"
    value={formData.password}
    onChange={handleChange}
    placeholder="Parola"
    className="form-input w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
  />
  <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" onClick={togglePasswordVisibility}>
    {passwordShown ? <AiFillEyeInvisible /> : <AiFillEye />}
  </div>
  <p className={`text-sm ${passwordStrength === 'Güçlü Şifre' ? 'text-green-500' : passwordStrength === 'Orta Şifre' ? 'text-yellow-500' : passwordStrength === 'Şifre Çok Kısa' ? 'text-red-500' : 'text-red-500'}`}>
    {formData.password && passwordStrength}
  </p>
</div>

<div className="relative">
  <input
    type={confirmPasswordShown ? 'text' : 'password'}
    name="confirmPassword"
    value={formData.confirmPassword}
    onChange={handleChange}
    placeholder="Parolayı Doğrula"
    className="form-input w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
  />
  <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" onClick={toggleConfirmPasswordVisibility}>
    {confirmPasswordShown ? <AiFillEyeInvisible /> : <AiFillEye />}
  </div>
  {!passwordsMatch && formData.confirmPassword && (
    <p className="text-red-500 text-sm">Girmiş olduğunuz şifreler aynı değil.</p>
  )}
</div>
          <DatePicker
            selected={formData.dateOfBirth}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            maxDate={getMinDate()}
            placeholderText="Doğum Tarihi (gün/ay/yıl)"
            className="form-input w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            wrapperClassName="date-picker w-full"
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
          />
          <div className="flex items-center">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              id="agreeToTerms"
              className="mr-2"
            />
            <label htmlFor="agreeToTerms" className="text-sm text-gray-600">
              Tüm Şartları ve{" "}
              <span className="text-blue-500 underline hover:cursor-pointer">
                Gizlilik Politikasını
              </span>{" "}
              kabul ediyorum
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
          >
            Hesabı Doğrula
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;