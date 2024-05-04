// ActionProvider starter code
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    helloWorldHandler = () => { //cevap verdiren kısım
      const message = this.createChatBotMessage("Merhaba, Size nasıl yardımcı olabilirim?")
      this.setChatbotMessage(message)
  
    }
    /* helloWorldHandler2=()=>{
      const message=this.createChatBotMessage("Sizi tur temsilcinize ulaştırmak için bekletiyorum...")
      this.setChatbotMessage(message)
    } */
  
    todosHandler = () => {
      const message = this.createChatBotMessage("Tur iadesine yönelik adımları Aşağıda bulabilirsiniz ", {
        widget: "todos"
      })
      this.setChatbotMessage(message);
    }
  
    setChatbotMessage = (message) => {
      this.setState(state => ({ ...state, messages: [...state.messages, message] }))
    }
  }
  
  export default ActionProvider;
  