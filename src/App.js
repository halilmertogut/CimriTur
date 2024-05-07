import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import { useDispatch } from 'react-redux';
import { checkSession } from './redux/authActions';
import Chatbot from 'react-chatbot-kit';
import ActionProvider from './components/Chatbot/ActionProvider';
import MessageParser from './components/Chatbot/MessageParser';
import config from './components/Chatbot/config';
import 'react-chatbot-kit/build/main.css';
import customLogo from './components/Chatbot/cimriturbot.png';
import { RiCloseLine } from 'react-icons/ri';
import { LoadScript } from '@react-google-maps/api';

function App() {
  const dispatch = useDispatch();
  const [chatbotActive, setChatbotActive] = useState(false);

  useEffect(() => {
    dispatch(checkSession());
  }, [dispatch]);

  const toggleChatbot = () => {
    setChatbotActive(!chatbotActive);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyClt6HyiuiPNVv134ucng2latk_zPrFGVM">
    <Router>
      <MainLayout />
      <div className="fixed bottom-4 right-4 flex items-center space-x-3 animate-slideIn z-50">
        <button
          onClick={toggleChatbot}
          className="bg-red-500 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition duration-300 flex items-center justify-center relative z-50"
          style={{ width: '50px', height: '50px', padding: 0 }}
          aria-label="Toggle Chatbot"
        >
          {chatbotActive ? (
            <RiCloseLine size="24" />
          ) : (
            <img
              src={customLogo}
              alt="Custom Logo"
              className="w-full h-full object-cover"
            />
          )}
        </button>
        {/* Müşteri Hizmetleri Butonu */}
        {/* Müşteri Hizmetleri Butonu */}


        {/* Logo Butonu */}
      <div
        onClick={() => setChatbotActive(!chatbotActive)} // Logo tıklandığında chatbot'u aç/kapa
        style={{
          cursor: 'pointer',
          width: '40px', // Logonun genişliği
          height: '40px', // Logonun yüksekliği
          backgroundImage: 'url("path-to-your-logo.png")', // Logonun URL'si
          backgroundSize: 'cover', // Arka plan resmini kutuya sığacak şekilde ayarlar
          borderRadius: '50%', // Daire şeklini verir
          boxShadow: '0 2px 4px rgba(0,0,0,0.3)', // Hafif bir gölge ekler
          position: 'fixed', // Pozisyon sabit
          bottom: '20px', // Altta 20px boşluk
          right: '20px' // Sağda 20px boşluk
        }}
      />

      {/* Chatbot Component */}
      {chatbotActive && (
        <div className="fixed bottom-16 right-4 bg-white rounded-lg shadow-lg p-4 w-80 z-50">
          <div className="relative">
            <button
              onClick={() => setChatbotActive(false)}
              style={{
                position: 'absolute',
                top: '-15px',
                right: '-15px',
                background: 'white',
                border: '2px solid #ccc',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '30px',
                height: '30px',
                cursor: 'pointer',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
              }}
            >
              &#x2715;
            </button>
            <Chatbot
              config={config}
              actionProvider={ActionProvider}
              messageParser={MessageParser}
              headerText="Canlı Destek"
            />
            <div style={{ marginTop: '20px' }}>

            </div>
          </div>
        </div>
      )}
      </div>
    </Router>
    </LoadScript>
  );
}

export default App;
