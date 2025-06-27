import { useRef, useState } from "react";
import { infoChat } from "./chatbot/infoChat";

const ChatForm = ({ setChatHistory, chatHistory, generateBotResponse }) => {
    const inputRef = useRef();
    const [showSuggestions, setShowSuggestions] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if (!userMessage) return;
        inputRef.current.value = "";
        setChatHistory((history) => [...history, { role: "user", text: userMessage }]);
        setTimeout(() => {
            generateBotResponse([
                ...chatHistory,
                { role: "user", text: `Dựa trên thông tin: ${JSON.stringify(infoChat)}, trả lời câu hỏi: ${userMessage}` },
            ]);
        }, 600);
    };

    const handleSuggestionClick = (suggestion) => {
        setChatHistory((history) => [...history, { role: "user", text: suggestion }]);
        setTimeout(() => {
            generateBotResponse([
                ...chatHistory,
                { role: "user", text: `Dựa trên thông tin: ${JSON.stringify(infoChat)}, trả lời câu hỏi: ${suggestion}` },
            ]);
        }, 600);
    };

    return (
        <div className="chat-form-container">
            <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
                <input
                    ref={inputRef}
                    type="text"
                    className="message-input"
                    placeholder="Nhập câu hỏi hoặc yêu cầu..."
                    required
                />
                <button className="material-symbols-rounded">arrow_upward</button>
            </form>
            <button onClick={() => setShowSuggestions(!showSuggestions)} className="suggestion-toggle">
                {showSuggestions ? "Ẩn gợi ý" : "Hiện gợi ý"}
            </button>
            {showSuggestions && (
                <div className="suggestions">
                    <h4>Dịch vụ</h4>
                    {infoChat.details.services.map((service, index) => (
                        <button
                            key={`service-${index}`}
                            onClick={() => handleSuggestionClick(`Đặt lịch ${service.name}`)}
                        >
                            {service.name} ({service.duration})
                        </button>
                    ))}
                    <h4>Bác sĩ</h4>
                    {infoChat.details.doctors.map((doctor, index) => (
                        <button
                            key={`doctor-${index}`}
                            onClick={() => handleSuggestionClick(`Đặt lịch với ${doctor.name}`)}
                        >
                            {doctor.name} ({doctor.specialty})
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ChatForm;