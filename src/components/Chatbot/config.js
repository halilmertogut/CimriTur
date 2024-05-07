import React, { useEffect, useState } from 'react';
import { createChatBotMessage } from "react-chatbot-kit";

// Todo List Component
const Todos = ({ setState, todos }) => {
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => {
        const firstFiveTodos = data.slice(0, 5);
        setState(state => ({ ...state, todos: firstFiveTodos }));
      });
  }, [setState]);

  return (
    <div className="bg-white p-4 mt-2 rounded-lg shadow transition duration-300 ease-in-out transform">
      <ul className="list-disc list-inside space-y-2">
        {todos.map(todo => (
          <li key={todo.id} className="p-1 text-gray-800 hover:text-blue-500 cursor-pointer">
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Bot Avatar Component
const BotAvatar = () => (
  <div className="rounded-full bg-blue-500 h-10 w-10 flex items-center justify-center font-bold text-white text-xl shadow-lg transform transition duration-300 hover:scale-110">
    CS
  </div>
);

// Chatbot configuration
const config = {
  initialMessages: [createChatBotMessage(`Merhaba, size nasıl yardımcı olabilirim?`)],
  botName: "Müşteri Hizmetleri",
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: "#5ccc9d",
    },
    chatButton: {
      backgroundColor: "rgba(75, 192, 192, 0.5)",
    },
  },
  state: {
    todos: []
  },
  widgets: [
    {
      widgetName: "todos",
      widgetFunc: (props) => <Todos {...props} />,
      mapStateToProps: ["todos"],
    },
  ]
};

export default config;
