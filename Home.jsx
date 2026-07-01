import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ChatList from '../components/ChatList';
import ChatWindow from '../components/ChatWindow';
import ProfileCard from '../components/ProfileCard';
import Navbar from '../components/Navbar';

const Home = () => {
  // Dynamic state to track the active chat room user
  const [activeChat, setActiveChat] = useState({
    id: 1,
    name: 'Emily Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    online: true
  });

  // State to toggle the right profile sidebar visibility
  const [showProfilePanel, setShowProfilePanel] = useState(true);

  return (
    <div className="flex h-screen w-screen bg-[#F8F9FD] text-[#1E1E24] font-sans antialiased overflow-hidden">
      {/* Column 1: Left Navigation Sidebar */}
      <Sidebar />

      {/* Primary Workspace Container */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Top Universal Header Bar */}
        <Navbar />

        {/* Core Chat Interface Layout */}
        <div className="flex-1 flex overflow-hidden">
          {/* Column 2: Interactive Messages Feed List */}
          <ChatList activeChat={activeChat} setActiveChat={setActiveChat} />

          {/* Column 3: Main Active Chat Stream Area */}
          <ChatWindow 
            activeChat={activeChat} 
            toggleProfile={() => setShowProfilePanel(!showProfilePanel)} 
          />

          {/* Column 4: Contextual Right Profile Metadata Panel */}
          {showProfilePanel && <ProfileCard activeChat={activeChat} />}
        </div>
      </div>
    </div>
  );
};

export default Home;
    
