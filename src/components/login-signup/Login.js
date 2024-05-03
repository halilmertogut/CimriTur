import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../redux/authSlice'; // adjust the path as needed

export default function Login({ open, setOpen }) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Bir hata oluştu.');
      }

      console.log(data);
      // Dispatch the setCredentials action with the response data
      dispatch(setCredentials({
        user: data.user,
        token: data.token
      }));

      toast.success('Giriş başarılı!');
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Transition.Root show={open} as={React.Fragment}>
    <Dialog
      as="div"
      className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4"
      onClose={setOpen}
    >
      <Transition.Child
        as="div"
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </Transition.Child>

      <Transition.Child
        as="div"
        enter="ease-out duration-300"
        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        enterTo="opacity-100 translate-y-0 sm:scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      >
        <div className="bg-white rounded-lg shadow-xl transform transition-all w-full mx-auto my-8"
          style={{ maxWidth: '450px' }}>
          <div className="px-8 py-12">
            <div className="text-center text-sky-700 text-3xl font-bold mb-8">
              Giriş Yap
            </div>
            <div className="space-y-4 mb-6">
              <button className="w-full inline-flex justify-center items-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none">
                <FontAwesomeIcon icon={faGoogle} className="mr-3" />
                Google ile Giriş Yap
              </button>
              <button className="w-full inline-flex justify-center items-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-black text-base font-medium text-white hover:bg-gray-900 focus:outline-none">
                <FontAwesomeIcon icon={faApple} className="mr-3" />
                Apple ile Giriş Yap
              </button>
            </div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  required
                  className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="relative">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Parola
                </label>
                <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    autoComplete="current-password"
                    required
                    className="mt-1 block w-full px-3 py-2 border rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Şifrenizi giriniz"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                    {showPassword ? (
                      <EyeOffIcon className="h-6 text-gray-700 cursor-pointer mt-6" onClick={togglePasswordVisibility} />
                    ) : (
                      <EyeIcon className="h-6 text-gray-700 cursor-pointer mt-6" onClick={togglePasswordVisibility} />
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                      Beni hatırla
                    </label>
                  </div>
                  <div className="text-sm">
                    <a href="/reset-password" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Şifrenizi mi unuttunuz?
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Giriş Yap
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Transition.Child>
        <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      </Dialog>
    </Transition.Root>
  );
}

