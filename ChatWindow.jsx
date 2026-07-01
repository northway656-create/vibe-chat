import React, { useState } from 'react';
import { BiPhoneCall, BiVideo, BiSidebar, BiSend, BiSmile, BiPaperclip } from 'react-icons/bi';

const ChatWindow = ({ activeChat, toggleProfile }) => {
  const [message, setMessage] = useState('');
  
  // Static mock message history matching the premium theme UI
  const messageHistory = [
    { id: 1, sender: 'them', text: 'Hey there! Welcome to the new VibeChat testing channel.', time: '09:30 AM' },
    { id: 2, sender: 'me', text: 'Wow, this looks perfectly minimalist and extremely clean!', time: '09:32 AM' },
    { id: 3, sender: 'them', text: 'Is the live deployment working fine on Render?', time: '09:40 AM' },
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    setMessage('');
  };

  return (
    <div className="flex-1 h-full bg-[#F8F9FD] flex flex-col overflow-hidden">
      {/* Active Conversation Control Header */}
      <div className="h-[64px] bg-white border-b border-[#E2E8F0] px-6 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <img src={activeChat.avatar} alt={activeChat.name} className="w-10 h-10 rounded-full object-cover" />
          <div>
            <h3 className="text-sm font-bold text-[#1E1E24]">{activeChat.name}</h3>
            <p className="text-[10px] text-[#38A169] font-semibold">
              {activeChat.online ? 'Active Now' : 'Offline'}
            </p>
          </div>
        </div>

        {/* Media Calling and Action Triggers */}
        <div className="flex items-center gap-2">
          <button className="p-2 text-[#718096] hover:bg-gray-50 rounded-lg transition-colors">
            <BiPhoneCall size={20} />
          </button>
          <button className="p-2 text-[#718096] hover:bg-gray-50 rounded-lg transition-colors">
            <BiVideo size={20} />
          </button>
          <div className="w-[1px] h-5 bg-[#E2E8F0] mx-1"></div>
          <button onClick={toggleProfile} className="p-2 text-[#718096] hover:bg-[#F0EEFF] hover:text-[#635BFF] rounded-lg transition-colors">
            <BiSidebar size={20} />
          </button>
        </div>
      </div>

      {/* Live Chat Messaging Timeline Message Viewport */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-4 bg-[#F8F9FD]">
        {messageHistory.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[70%] px-4 py-3 rounded-2xl shadow-sm text-sm font-medium ${
              msg.sender === 'me' 
                ? 'bg-[#635BFF] text-white rounded-tr-none' 
                : 'bg-white text-[#1E1E24] rounded-tl-none border border-[#E2E8F0]'
            }`}>
              <p>{msg.text}</p>
              <span className={`text-[9px] block mt-1 text-right ${msg.sender === 'me' ? 'text-purple-200' : 'text-[#A0AEC0]'}`}>
                {msg.time}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Dynamic Interaction Pipeline / Message Input Bar */}
      <div className="p-4 bg-white border-t border-[#E2E8F0]">
        <form onSubmit={handleSendMessage} className="flex items-center gap-3">
          <div className="flex-1 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-2.5 flex items-center gap-3">
            <button type="button" className="text-[#A0AEC0] hover:text-[#718096] transition-all">
              <BiSmile size={22} />
            </button>
            <input 
              type="text" 
              placeholder={`Write a premium message to ${activeChat.name}...`}
              className="bg-transparent text-sm w-full focus:outline-none placeholder-[#A0AEC0] text-[#1E1E24]"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="button" className="text-[#A0AEC0] hover:text-[#718096] transition-all">
              <BiPaperclip size={20} />
            </button>
          </div>
          
          <button type="submit" className="p-3 bg-[#635BFF] text-white hover:bg-[#4F46E5] rounded-xl shadow-md shadow-purple-100 transition-all">
            <BiSend size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatWindow;

