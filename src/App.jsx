import { useState } from "react";
import ChatbotIcon from "./components/ChatbotIcon"
import ChatForm from "./components/ChatForm";
import "./index.css";
import ChatMessage from "./components/ChatMessage";
const App = () => {
  const [chatHistory, setChatHistory] = useState([]);

  // history : lich su chat
  const generateBotResponse = (history) => {
    console.log('check history: ', history)
  }

  return (
    <div className="container">
      <div className="chatbot-popup">
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="logo-text">Chatbot</h2>
          </div>
          <button className="material-symbols-rounded">
            keyboard_arrow_down
          </button>
        </div>

        <div className="chat-body">
          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text">
              Hey there 👋 <br /> How can I help you today?
            </p>
          </div>

          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}

          <div className="chat-footer">
            <ChatForm
              setChatHistory={setChatHistory}
              chatHistory={chatHistory}
              generateBotResponse={generateBotResponse}
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default App