import React from 'react';

const ChatList = () => {
  // Dummy Data for Preview matching screen 1000001198.png
  const dummyChats = [
    { id: 1, name: 'Emily Johnson', message: 'Typing...', time: '2m', unread: 2, online: true },
    { id: 2, name: 'Liam Davis', message: 'Hey! How are you?', time: '10m', unread: 1, online: false },
    { id: 3, name: 'Sophia Martinez', message: 'Voice message', time: '25m', unread: 0, online: false },
    { id: 4, name: 'Noah Wilson', message: "Let's catch up later.", time: '1h', unread: 0, online: false }
  ];

  return (
    <div style={styles.chatListContainer}>
      <h2 style={styles.headerTitle}>Messages</h2>
      
      {/* Search Bar */}
      <div style={styles.searchBox}>
        <input type="text" placeholder="Search messages or users" style={styles.searchInput} />
      </div>

      {/* User List */}
      <div style={styles.listContainer}>
        {dummyChats.map((chat) => (
          <div key={chat.id} style={chat.id === 1 ? { ...styles.chatCard, ...styles.activeCard } : styles.chatCard}>
            <div style={styles.avatarContainer}>
              <div style={styles.avatar}>👤</div>
              {chat.online && <div style={styles.onlineStatus} />}
            </div>
            <div style={styles.chatInfo}>
              <div style={styles.row}>
                <span style={styles.name}>{chat.name}</span>
                <span style={styles.time}>{chat.time}</span>
              </div>
              <div style={styles.row}>
                <span style={chat.id === 1 ? styles.typing : styles.message}>{chat.message}</span>
                {chat.unread > 0 && <span style={styles.badge}>{chat.unread}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  chatListContainer: { width: '320px', height: '100vh', borderRight: '1px solid #eaeaea', display: 'flex', flexDirection: 'column', backgroundColor: '#fff', padding: '24px 16px' },
  headerTitle: { fontSize: '22px', fontWeight: 'bold', color: '#111827', marginBottom: '20px' },
  searchBox: { marginBottom: '20px' },
  searchInput: { width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #f3f4f6', backgroundColor: '#f9fafb', fontSize: '14px', outline: 'none' },
  listContainer: { display: 'flex', flexDirection: 'column', gap: '4px', overflowY: 'auto' },
  chatCard: { display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', borderRadius: '12px', cursor: 'pointer' },
  activeCard: { backgroundColor: '#f3f4f6' },
  avatarContainer: { position: 'relative' },
  avatar: { width: '44px', height: '44px', borderRadius: '50%', backgroundColor: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' },
  onlineStatus: { width: '12px', height: '12px', backgroundColor: '#10b981', borderRadius: '50%', border: '2px solid #fff', position: 'absolute', bottom: '2px', right: '2px' },
  chatInfo: { flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' },
  row: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  name: { fontSize: '15px', fontWeight: '600', color: '#111827' },
  time: { fontSize: '12px', color: '#9ca3af' },
  message: { fontSize: '13px', color: '#6b7280', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '160px' },
  typing: { fontSize: '13px', color: '#10b981', fontWeight: '500' },
  badge: { backgroundColor: '#6366f1', color: '#fff', fontSize: '11px', fontWeight: 'bold', padding: '2px 6px', borderRadius: '10px' }
};

export default ChatList;
            
