import React, { useState } from "react";
import axios from "axios";
import { MessageCircle, X, Send } from "lucide-react";

const ChatBot = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = {
      sender: "user",
      text: message,
    };

    setChat((prev) => [...prev, userMessage]);

    const currentMessage = message;

    setMessage("");

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:4000/api/v1/ai/chat",
        {
          message: currentMessage,
        }
      );

      const aiMessage = {
        sender: "ai",
        text: res.data.response,
      };

      setChat((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.log(error);

      const errorMessage = {
        sender: "ai",
        text: "AI is busy right now.",
      };

      setChat((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 bg-black text-white p-3 rounded-full shadow-lg z-50 hover:scale-105 transition"
      >
        {open ? <X size={20} /> : <MessageCircle size={20} />}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-4 w-[280px] h-[400px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border z-50">
          
          {/* Header */}
          <div className="bg-black text-white px-4 py-3 flex items-center justify-between">
            <h2 className="font-semibold text-sm">
              Hire AI Assistant
            </h2>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-3 bg-gray-50">
            {chat.length === 0 && (
              <div className="text-gray-400 text-xs text-center mt-10">
                Ask anything about jobs, resumes, skills...
              </div>
            )}

            {chat.map((msg, index) => (
              <div
                key={index}
                className={`mb-3 flex ${
                  msg.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`px-3 py-2 rounded-2xl text-xs max-w-[80%] ${
                    msg.sender === "user"
                      ? "bg-black text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="text-gray-500 text-xs animate-pulse">
                AI is typing...
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-2 border-t flex items-center gap-2 bg-white">
            <input
              type="text"
              placeholder="Ask AI..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
              className="border w-full px-3 py-2 rounded-lg outline-none text-sm"
            />

            <button
              onClick={sendMessage}
              className="bg-black text-white p-2 rounded-lg"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
