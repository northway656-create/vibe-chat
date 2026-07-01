import React, { useState } from 'react';
import { BiSearch, BiFilter } from 'react-icons/bi';

const ChatList = ({ activeChat, setActiveChat }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data for the active chat stream list
  const conversations = [
    { id: 1, name: 'Emily Johnson', message: 'Is the server deploy completed?', time: '09:42 AM', unread: 2, online: true, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330' },
    { id: 2, name: 'Michael Brown', message: 'Let us connect over a video call later.', time: 'Yesterday', unread: 0, online: false, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d' },
    { id: 3, name: 'Jessica Taylor', message: 'Sent a sticker over the group chat.', time: 'Monday', unread: 0, online: true, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80' }
  ];

  return (
    <div className="w-[340px] h-full bg-white border-r border-[#E2E8F0] flex flex-col shrink-0">
      {/* Search Header Section */}
      <div className="p-4 border-b border-[#F0F4F8]">
        <div className="flex items-center gap-3">
          <div className="flex-1 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-3 py-2.5 flex items-center gap-2">
            <BiSearch className="text-[#A0AEC0]" size={18} />
            <input 
              type="text" 
              placeholder="Search conversations..." 
              className="bg-transparent text-sm w-full focus:outline-none placeholder-[#A0AEC0] text-[#1E1E24]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="p-2.5 bg-[#F8FAFC] border border-[#E2E8F0] text-[#718096] hover:bg-[#F0EEFF] hover:text-[#635BFF] rounded-xl transition-all">
            <BiFilter size={18} />
          </button>
        </div>
      </div>

      {/* Dynamic Conversations Stream */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-1">
        {conversations.map((chat) => (
          <button
            key={chat.id}
            onClick={() => setActiveChat(chat)}
            className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all text-left ${
              activeChat.id === chat.id 
                ? 'bg-[#F0EEFF]' 
                : 'hover:bg-[#F8FAFC]'
            }`}
          >
            <div className="relative">
              <img src={chat.avatar} alt={chat.name} className="w-11 h-11 rounded-full object-cover" />
              {chat.online && (
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#38A169] border-2 border-white rounded-full"></span>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline mb-0.5">
                <h4 className={`text-sm font-semibold truncate ${activeChat.id === chat.id ? 'text-[#635BFF]' : 'text-[#1E1E24]'}`}>
                  {chat.name}
                </h4>
                <span className="text-[10px] text-[#A0AEC0] font-medium shrink-0">{chat.time}</span>
              </div>
              <p className="text-xs text-[#718096] truncate font-medium">{chat.message}</p>
            </div>

            {chat.unread > 0 && (
              <div className="w-5 h-5 bg-[#635BFF] text-white font-bold text-[10px] rounded-full flex items-center justify-center shrink-0">
                {chat.unread}
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
     
