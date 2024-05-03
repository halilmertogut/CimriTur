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
        <div className="hidden md:flex items-center bg-white text-red-500 text-sm px-4 py-2 rounded-full shadow-lg z-50">
          Müşteri Hizmetleri
        </div>
        {/* Chatbot Component */}
        {chatbotActive && (
          <div className="fixed bottom-16 right-4 bg-white rounded-lg shadow-lg p-4 w-80 z-50">
            <Chatbot
              config={config}
              actionProvider={ActionProvider}
              messageParser={MessageParser}
              headerText="SupportBot"
            />
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
