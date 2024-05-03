class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    handleHelp() {
      const message = this.createChatBotMessage("Here's how you can contact our support:");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    }
  
    handleUnknown() {
      const message = this.createChatBotMessage("I'm not sure what you mean. Can you please clarify?");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    }
  }
  
  export default ActionProvider;
  