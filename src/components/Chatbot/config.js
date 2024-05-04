import { createChatBotMessage } from "react-chatbot-kit";
import React, { useEffect } from "react";


const Todos = (props) => {

    const { setState } = props

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((res) => res.json())
            .then((data) => {
                const fiveFirstTodos = data.slice(0, 6)
                setState(state => ({ ...state, todos: fiveFirstTodos }))

            });
    }, []);

    const renderTodos = () => {
       return props.todos.map(todo => {
            return (<li className="todos-widget-list-item" key={todo.id}>
                {todo.title}

            </li>
            )
        })
    }


    return (<div className="todos-widget">
        <ul className="todos-widget-list">
            {renderTodos()}
        </ul>
    </div>
    )
}
const BotAvatar = () => {
    return(
     <div className="customer-bot-avatar">CS</div>
    )
}

const config = {
    initialMessages: [createChatBotMessage(`Merhaba size nasıl yardımcı olabilirim? `)],
    botName: "Müşteri Hizmetleri",
    customComponents: {
      botAvatar: (props) => <BotAvatar{...props} />
  
    },
    customStyles: {
      botMessageBox: {
        backgroundColor: "lightgreen",
      },
      chatButton: {
        backgroundColor: "#5ccc9d",
      },
    },
    state: {
      todos: []
    },
    widgets: [
      {
        widgetName: "todos",
        widgetFunc: (props) => <Todos {...props} />, // buraya yuarıda kullancağımız coorpusun adları gelicek
        mapStateToProps: ["todos"],
      },
    ]
  }
  
  export default config