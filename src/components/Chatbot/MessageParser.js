
// MessageParser starter code
class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      const lowercase = message.toLowerCase()
      console.log(this.state)
  
      if (lowercase.includes("merhaba")) {
        this.actionProvider.helloWorldHandler()
      }
      if(lowercase.includes("iade")){
        this.actionProvider.todosHandler();
      }
  /*     if (lowercase.includes("iade")) {
        this.actionProvider.helloWorldHandler2()
      } */
    }
  }
  
  export default MessageParser;
  