import React from "react";
import Chatbot from "react-chatbot-kit";
import "./App.css";

import ActionProvider from "./Component/ActionProvider";
import MessageParser from "./Component/MessageParser";
import config from "./Component/config";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </header>
    </div>
  );
}

export default App;