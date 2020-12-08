import React, {Component} from 'react';
// import Axios from '../axios';
import axios from 'axios'


// MessageParser starter code in MessageParser.js
class MessageParser extends Component{
  constructor(actionProvider) {
    super();

    this.actionProvider = actionProvider;
    this.getData();
  }

  getData() {
    console.log("tfgh")
    axios.post("https://4pjz1fqnp5.execute-api.ap-south-1.amazonaws.com/POC/SecurraAssistAutoCompleteFAQFulfilment",  {"type":"Search", "value": "appointment"})
        .then(response =>{
          // response.data.map((data) =>{
          //   console.log("ggg",data)
          // })
          console.log("data",response )
          this.setState({
            data: response.data
        })
        })
}

  // componentDidMount() {
  //   console.log("jrdrg")
  //   axios.post(' https://4pjz1fqnp5.execute-api.ap-south-1.amazonaws.com/POC/SecurraAssistAutoCompleteFAQFulfilment',)
  //       .then(response =>{
  //         console.log(response)
  //       }).catch(error => {
  //         this.setState({ errorMessage: error.message });
  //         console.error('There was an error!', error);
  //     });;
  // }

  parse(message) {
   
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.greet();
    }

    if (lowerCaseMessage.includes("javascript")) {
      this.actionProvider.handleJavascriptList();
    }
  }

}
export default MessageParser;