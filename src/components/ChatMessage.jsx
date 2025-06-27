import ChatbotIcon from "./ChatbotIcon"

const ChatMessage = ({ chat }) => {
    // Hàm sanitize đơn giản để thoát các ký tự HTML nguy hiểm
    const sanitizeText = (text) => {
        if (!text) return "";
        return text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    };
    return (
        !chat.hideInChat && (
            <div className={`message ${chat.role === "model" ? 'bot' : 'user'}-message ${chat.isError ? "error" : ""}`}>
                {chat.role === "model" && <ChatbotIcon />}
                <p className="message-text">
                    {sanitizeText(chat.text)}
                </p>
            </div>
        )
    )
}

export default ChatMessage