import React from 'react';
import { Send, Bot } from 'lucide-react';
import type { ChatMessage } from '../types';
import { generateResponse } from '../utils/chatbot';

export default function Chatbot() {
  const [messages, setMessages] = React.useState<ChatMessage[]>([
    {
      id: '1',
      text: "Hello! I'm your Food Waste Assistant. How can I help you reduce food waste today?",
      sender: 'bot',
      timestamp: new Date().toISOString(),
    },
  ]);
  const [input, setInput] = React.useState('');
  const chatRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date().toISOString(),
    };

    const botMessage: ChatMessage = {
      id: (Date.now() + 1).toString(),
      text: generateResponse(input),
      sender: 'bot',
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput('');
  };

  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-green-600 p-4">
        <div className="flex items-center space-x-2">
          <Bot className="w-6 h-6 text-white" />
          <h2 className="text-lg font-semibold text-white">Waste Reduction Assistant</h2>
        </div>
      </div>
      
      <div
        ref={chatRef}
        className="h-96 overflow-y-auto p-4 space-y-4"
        style={{ scrollBehavior: 'smooth' }}
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.sender === 'user'
                  ? 'bg-green-600 text-white rounded-br-none'
                  : 'bg-gray-100 text-gray-800 rounded-bl-none'
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <p className="text-xs mt-1 opacity-70">
                {new Date(message.timestamp).toLocaleTimeString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSend} className="p-4 border-t">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about food waste management..."
            className="flex-1 rounded-lg border-gray-300 focus:border-green-500 focus:ring-green-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
}