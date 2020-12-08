import React,{Component} from 'react';
import axios from 'axios'

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  getData() {
    console.log("tfgh")
    axios.post("https://4pjz1fqnp5.execute-api.ap-south-1.amazonaws.com/POC/SecurraAssistAutoCompleteFAQFulfilment",  {"type":"Search", "value": "appointment"})

        .then(response =>{
        
          // response.data.map((data) =>{
          //   console.log("ggg",data)
          // })
          console.log("action", response)
          this.setState({
            data: response.data
        })
        })
}

  // new method
  greet() {
    const greetingMessage = this.createChatBotMessage("Hi, Need Help?");
    this.updateChatbotState(greetingMessage);
  }

  handleJavascriptList = () => {
    const message = this.createChatBotMessage(
      
      {
        widget: "javascriptLinks",
      }
    );

    this.updateChatbotState(message);
  };

  updateChatbotState(message) {
    // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;

