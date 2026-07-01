import React, { useState } from 'react';
import { FiPhone, FiVideo, FiInfo, FiSmile, FiMic, FiPlus } from 'react-icons/fi';

const ChatWindow = () => {
  const [messageText, setMessageText] = useState('');
  
  // Dummy Conversation data matching screen 1000001198.png
  const [messages, setMessages] = useState([
    { id: 1, sender: 'them', text: 'Hey there! 👋', time: '02:10 PM' },
    { id: 2, sender: 'me', text: 'Hi Emily! How are you doing?', time: '02:11 PM' },
    { id: 3, sender: 'them', text: "I'm good, thanks! You?", time: '02:11 PM' },
    { id: 4, sender: 'me', text: "Doing great! What's up?", time: '02:12 PM' },
    { id: 5, sender: 'me', text: 'That\'s awesome! 😁', time: '02:13 PM' },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!messageText.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      sender: 'me',
      text: messageText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, newMessage]);
    setMessageText('');
  };

  return (
    <div style={styles.chatWindowContainer}>
      {/* Top Header Bar */}
      <div style={styles.header}>
        <div style={styles.userInfo}>
          <div style={styles.avatar}>👤</div>
          <div>
            <div style={styles.userName}>Emily Johnson</div>
            <div style={styles.userStatus}>Online</div>
          </div>
        </div>
        <div style={styles.headerIcons}>
          <button style={styles.iconBtn}><FiPhone size={20} /></button>
          <button style={styles.iconBtn}><FiVideo size={20} /></button>
          <button style={styles.iconBtn}><FiInfo size={20} /></button>
        </div>
      </div>

      {/* Chat Messages Scrolling Area */}
      <div style={styles.messageArea}>
        {messages.map((msg) => (
          <div key={msg.id} style={msg.sender === 'me' ? styles.myRow : styles.theirRow}>
            <div style={msg.sender === 'me' ? styles.myBubble : styles.theirBubble}>
              <div>{msg.text}</div>
              <div style={msg.sender === 'me' ? styles.myTime : styles.theirTime}>{msg.time}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Message Input Form */}
      <form onSubmit={handleSend} style={styles.inputContainer}>
        <button type="button" style={styles.inputActionBtn}><FiPlus size={20} /></button>
        <div style={styles.inputWrapper}>
          <input
            type="text"
            placeholder="Type a message..."
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            style={styles.inputField}
          />
          <button type="button" style={styles.insideInputBtn}><FiSmile size={20} /></button>
          <button type="button" style={styles.insideInputBtn}><FiMic size={20} /></button>
        </div>
      </form>
    </div>
  );
};

const styles = {
  chatWindowContainer: { flex: 1, height: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#fff' },
  header: { height: '76px', borderBottom: '1px solid #eaeaea', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 24px' },
  userInfo: { display: 'flex', alignItems: 'center', gap: '12px' },
  avatar: { width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' },
  userName: { fontSize: '16px', fontWeight: '600', color: '#111827' },
  userStatus: { fontSize: '13px', color: '#10b981', fontWeight: '500' },
  headerIcons: { display: 'flex', gap: '8px' },
  iconBtn: { background: 'none', border: 'none', padding: '8px', color: '#6b7280', cursor: 'pointer', borderRadius: '50%' },
  messageArea: { flex: 1, padding: '24px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px', backgroundColor: '#fafafa' },
  myRow: { display: 'flex', justifyContent: 'flex-end' },
  theirRow: { display: 'flex', justifyContent: 'flex-start' },
  myBubble: { maxWidth: '60%', backgroundColor: '#6366f1', color: '#fff', padding: '12px 16px', borderRadius: '16px 16px 2px 16px', fontSize: '15px', boxShadow: '0 2px 4px rgba(99, 102, 241, 0.2)' },
  theirBubble: { maxWidth: '60%', backgroundColor: '#f3f4f6', color: '#111827', padding: '12px 16px', borderRadius: '16px 16px 16px 2px', fontSize: '15px' },
  myTime: { fontSize: '11px', color: '#e0e7ff', textAlign: 'right', marginTop: '4px' },
  theirTime: { fontSize: '11px', color: '#9ca3af', textAlign: 'left', marginTop: '4px' },
  inputContainer: { padding: '16px 24px', display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid #eaeaea', backgroundColor: '#fff' },
  inputActionBtn: { background: '#f3f4f6', border: 'none', width: '42px', height: '42px', borderRadius: '50%', color: '#4b5563', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' },
  inputWrapper: { flex: 1, position: 'relative', display: 'flex', alignItems: 'center' },
  inputField: { width: '100%', padding: '12px 90px 12px 16px', borderRadius: '24px', border: '1px solid #e5e7eb', backgroundColor: '#f9fafb', fontSize: '15px', outline: 'none' },
  insideInputBtn: { position: 'absolute', right: '16px', background: 'none', border: 'none', color: '#9ca3af', cursor: 'pointer', padding: '4px' }
};

// Adjusting button positioning override
styles.insideInputBtn = { ...styles.insideInputBtn, transform: 'translateX(-30px)' }; 

export default ChatWindow;
        
