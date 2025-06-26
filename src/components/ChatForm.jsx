import { useRef } from "react";

const ChatForm = ({ setChatHistory, chatHistory, generateBotResponse }) => {
    const inputRef = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const useMessage = inputRef.current.value.trim();
        if (!useMessage) return;
        inputRef.current.value = "";

        // update chat history with the user's message
        setChatHistory(history => [...history, { role: "user", text: useMessage }])

        // add a "Thinking..." placeholder for the bot's response
        setTimeout(() => {
            setChatHistory(history => [...history, { role: "model", text: "Thinking..." }]);
            // call the function to generate the bot's response
            generateBotResponse([...chatHistory, { role: "user", text: useMessage }]);
        }, 600);


    }
    return (
        <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
            <input ref={inputRef} type="text" className="message-input" placeholder="Message..." required />
            <button className="material-symbols-rounded">
                arrow_upward
            </button>
        </form>
    )
}

export default ChatForm