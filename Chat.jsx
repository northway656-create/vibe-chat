import React from 'react';
import Sidebar from '../components/Sidebar';
import ChatList from '../components/ChatList';
import ChatWindow from '../components/ChatWindow';
import ProfileCard from '../components/ProfileCard';

const Chat = () => {
  return (
    <div style={styles.appContainer}>
      {/* Leftmost Sidebar Navigation */}
      <Sidebar />

      {/* Middle-Left Chat Conversation List */}
      <ChatList />

      {/* Center Active Message Workspace Window */}
      <ChatWindow />

      {/* Rightmost Selected Contact Profile Details */}
      <ProfileCard />
    </div>
  );
};

const styles = {
  appContainer: {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    fontFamily: '"Inter", sans-serif'
  }
};

export default Chat;
  
