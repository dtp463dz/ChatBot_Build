import { useEffect, useRef, useState, useCallback } from "react";
import ChatbotIcon from "./components/ChatbotIcon";
import ChatForm from "./components/ChatForm";
import "./index.css";
import ChatMessage from "./components/ChatMessage";
import { infoChat } from "./components/chatbot/infoChat";

const App = () => {
  const [chatHistory, setChatHistory] = useState([
    {
      hideInChat: true,
      role: "model",
      text: JSON.stringify(infoChat),
    },
    {
      hideInChat: false,
      role: "model",
      text: "Xin chào! Tôi là Trợ lý Y tế, có thể tư vấn về các vấn đề sức khỏe, đặt lịch khám, hoặc đề xuất cơ sở y tế phù hợp. Hãy cho tôi biết bạn đang gặp vấn đề gì hoặc cần hỗ trợ gì nhé!",
    },
  ]);
  const [showChatBot, setShowChatBot] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const chatBodyRef = useRef();

  const generateBotResponse = useCallback(async (history) => {
    setIsLoading(true);
    const updateHistory = (text, isError = false) => {
      setChatHistory((prev) => [...prev, { role: "model", text, isError }]);
      setIsLoading(false);
    };

    try {
      const response = await fetch(import.meta.env.VITE_API_URL || "https://fallback-api.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: history.map(({ role, text }) => ({ role, parts: [{ text }] })),
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error?.message || "Có lỗi xảy ra!");
      const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
      updateHistory(apiResponseText);
    } catch (error) {
      updateHistory(`Xin lỗi, tôi không thể xử lý yêu cầu của bạn. Vui lòng thử lại hoặc liên hệ hỗ trợ qua ${infoChat.details.contact.email}.`, true);
    }
  }, []);

  useEffect(() => {
    chatBodyRef.current.scrollTo({ top: chatBodyRef.current.scrollHeight, behavior: "smooth" });
  }, [chatHistory]);

  const clearChatHistory = () => {
    setChatHistory([
      {
        hideInChat: true,
        role: "model",
        text: JSON.stringify(infoChat),
      },
      {
        hideInChat: false,
        role: "model",
        text: "Lịch sử trò chuyện đã được xóa. Tôi có thể giúp gì cho bạn hôm nay?",
      },
    ]);
  };

  return (
    <div className={`container ${showChatBot ? "show-chatbot" : ""}`}>
      <button onClick={() => setShowChatBot((prev) => !prev)} id="chatbot-toggler">
        <span className="material-symbols-rounded">mode_comment</span>
        <span className="material-symbols-rounded">close</span>
      </button>
      <div className="chatbot-popup">
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="logo-text">Trợ lý Y tế</h2>
          </div>
          <div>
            <button onClick={clearChatHistory} className="material-symbols-rounded">
              delete
            </button>
            <button onClick={() => setShowChatBot((prev) => !prev)} className="material-symbols-rounded">
              keyboard_arrow_down
            </button>
          </div>
        </div>

        <div ref={chatBodyRef} className="chat-body">
          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}
          {isLoading && (
            <div className="message bot-message">
              <ChatbotIcon />
              <p className="message-text">Đang xử lý...</p>
            </div>
          )}
        </div>

        <div className="chat-footer">
          <ChatForm
            setChatHistory={setChatHistory}
            chatHistory={chatHistory}
            generateBotResponse={generateBotResponse}
          />
        </div>
      </div>
    </div>
  );
};

export default App;