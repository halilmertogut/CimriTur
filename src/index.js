import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './tailwind.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'; // Redux Persist için ekledik
import { persistor } from './redux/store';
import { store } from './redux/store';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './components/admin-dashboard/admin-panel/AuthContext';


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <AuthProvider>

      <App />
      <ToastContainer />
      </AuthProvider>

    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
