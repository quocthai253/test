import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendChatMessage } from '../services/geminiService';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Xin chào! Tôi là AI Assistant của The Design Council. Bạn đang tìm kiếm ý tưởng cho dự án mới hay cần tư vấn về dịch vụ?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const responseText = await sendChatMessage(messages, input);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-50 p-4 bg-tdc-red text-white rounded-full shadow-2xl hover:scale-110 hover:bg-red-600 transition-all duration-300 flex items-center justify-center group ${isOpen ? 'hidden' : 'block'}`}
      >
        <Sparkles size={24} className="group-hover:animate-pulse" />
        <span className="absolute right-full mr-4 bg-tdc-black text-white px-3 py-1 rounded text-xs font-condensed uppercase tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-white/10">
          Tư vấn AI
        </span>
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-8 right-8 w-[90vw] md:w-[400px] h-[500px] bg-tdc-black border border-white/10 rounded-xl shadow-2xl z-50 flex flex-col transition-all duration-300 transform origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="p-4 border-b border-white/10 flex justify-between items-center bg-tdc-red rounded-t-xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center">
               <Sparkles size={16} className="text-white" />
            </div>
            <div>
              <h3 className="text-sm font-condensed font-bold uppercase tracking-wide text-white">TDC Assistant</h3>
              <p className="text-[10px] text-white/80 font-sans flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span> Online
              </p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 font-sans bg-zinc-900/50">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-tdc-red text-white rounded-br-none' 
                    : 'bg-zinc-800 text-gray-200 rounded-bl-none border border-white/5'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-zinc-800 p-3 rounded-2xl rounded-bl-none flex gap-1 border border-white/5">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-200"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-white/10 bg-tdc-black rounded-b-xl">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Hỏi về branding, thiết kế..."
              className="flex-1 bg-zinc-900 text-sm text-white placeholder-gray-500 outline-none px-4 py-3 rounded-lg border border-white/5 focus:border-tdc-red/50 transition-colors font-sans"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="p-3 bg-white text-black rounded-lg hover:bg-tdc-red hover:text-white disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-black transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBot;