import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  initialMessages: [createChatBotMessage(`Hello! How can I help you today?`)],
  botName: "SupportBot",
};

export default config;
