import React, { Component } from 'react';
import axios from "axios";


class Axios extends Component{
    getData() {
        axios.post("https://4pjz1fqnp5.execute-api.ap-south-1.amazonaws.com/POC/SecurraAssistAutoCompleteFAQFulfilment").then(res => {
            console.log(res.data);
            this.setState({
                data: res.data
            })
        })
    }
    render(){
return(
    <div></div>
)
    }
}

export default Axios;

// axios.post(' https://4pjz1fqnp5.execute-api.ap-south-1.amazonaws.com/POC/SecurraAssistAutoCompleteFAQFulfilment')
// .then(function (response) {
//     console.log(response);
// })



