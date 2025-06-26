import { useEffect, useRef, useState } from "react";
import ChatbotIcon from "./components/ChatbotIcon"
import ChatForm from "./components/ChatForm";
import "./index.css";
import ChatMessage from "./components/ChatMessage";
import { infoChat } from "./components/infoChat";
const App = () => {
  const [chatHistory, setChatHistory] = useState([{
    hideInChat: true,
    role: 'model',
    text: infoChat,
  }]);
  const [showChatBot, setShowChatBot] = useState(false);


  const chatBodyRef = useRef();

  // history : lich su chat
  const generateBotResponse = async (history) => {
    const updateHistory = (text, isError = false) => {
      setChatHistory(prev => [...prev.filter(msg => msg.text !== "Thinking..."), { role: "model", text, isError }]);
    }
    // console.log('check history: ', history)
    history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: history })
    }
    try {
      // make the api call to get the bot's response
      const response = await fetch(import.meta.env.VITE_API_URL, requestOptions)
      const data = await response.json();
      if (!response.ok) throw new Error(data.error.message || "Something went wrong!");
      // console.log(data)
      const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
      updateHistory(apiResponseText)
    } catch (error) {
      updateHistory(error.message, true)
      console.log("Lỗi ", error)
    }
  };

  useEffect(() => {
    chatBodyRef.current.scrollTo({ top: chatBodyRef.current.scrollHeight, behavior: "smooth" });
  }, [chatHistory])

  return (
    <div className={`container ${showChatBot ? "show-chatbot" : ''}`}>
      <button
        onClick={() => setShowChatBot(prev => !prev)}
        id="chatbot-toggler"
      >
        <span className="material-symbols-rounded">mode_comment</span>
        <span className="material-symbols-rounded">close</span>

      </button>
      <div className="chatbot-popup">
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="logo-text">Chatbot</h2>
          </div>
          <button onClick={() => setShowChatBot(prev => !prev)}
            className="material-symbols-rounded">
            keyboard_arrow_down
          </button>
        </div>

        <div ref={chatBodyRef} className="chat-body">
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

export default App;