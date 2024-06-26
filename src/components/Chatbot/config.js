import React, { useEffect } from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';
import { List, Typography, Avatar, Card } from 'antd';


const { Text } = Typography;

// Todos Component
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
    <Card title="Your Todos" bordered={false} style={{ width: '100%', marginTop: 16 }}>
      <List
        itemLayout="horizontal"
        dataSource={todos}
        renderItem={todo => (
          <List.Item>
            <Text>{todo.title}</Text>
          </List.Item>
        )}
      />
    </Card>
  );
};

// Bot Avatar Component
const BotAvatar = () => (
  <Avatar size="large" style={{ backgroundColor: '#5ccc9d' }}>
    CS
  </Avatar>
);

// Chatbot configuration
const config = {
  initialMessages: [createChatBotMessage(`Merhaba, size nasıl yardımcı olabilirim?`)],
  botName: "Müşteri Hizmetleri",
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />,
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: "#5ccc9d",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  state: {
    todos: [],
  },
  widgets: [
    {
      widgetName: "todos",
      widgetFunc: (props) => <Todos {...props} />,
      mapStateToProps: ["todos"],
    },
  ],
};

export default config;
